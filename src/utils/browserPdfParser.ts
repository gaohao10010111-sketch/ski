// 浏览器端PDF解析器
// 使用pdf.js在客户端解析PDF文件，避免依赖服务器API

import { PDFResultParser, ParsedCompetitionData, AlpineResult } from './pdfParser'
import * as pdfjs from 'pdfjs-dist'

// 设置worker - 必须在模块加载时立即设置
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/ski/pdf/pdf.worker.min.mjs'
}

// 页面数据结构（用于按Y坐标分行）
interface PageTextItem {
  str: string
  x: number
  y: number
}

// 单个比赛的解析结果
interface CompetitionResult {
  ageGroup: string    // U11/U15/U18
  gender: string      // 男子/女子
  discipline: string  // 回转/大回转
  results: AlpineResult[]
}

// 从PDF文件提取文本（保留原有方法用于兼容性）
export async function extractTextFromPdf(file: File): Promise<string> {
  // 确保在浏览器环境中设置worker
  if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
    pdfjs.GlobalWorkerOptions.workerSrc = '/ski/pdf/pdf.worker.min.mjs'
  }

  // 读取文件为ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()

  // 加载PDF文档
  const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise

  let fullText = ''

  // 遍历所有页面提取文本
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum)
    const textContent = await page.getTextContent()

    // 提取文本项
    const pageText = textContent.items
      .map((item) => {
        if ('str' in item) {
          return item.str
        }
        return ''
      })
      .join(' ')

    fullText += pageText + '\n'
  }

  return fullText
}

// 解析高山滑雪积分表页面
export async function parseAlpinePointsTableFromPdf(file: File): Promise<{
  success: boolean
  competitions: CompetitionResult[]
  rawText?: string
  error?: string
}> {
  try {
    // 确保在浏览器环境中设置worker
    if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
      pdfjs.GlobalWorkerOptions.workerSrc = '/ski/pdf/pdf.worker.min.mjs'
    }

    const arrayBuffer = await file.arrayBuffer()
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise

    const competitions: CompetitionResult[] = []
    let fullText = ''

    // 遍历所有页面，只解析"积分表"页面
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum)
      const textContent = await page.getTextContent()

      // 构建页面文本（用于检测页面类型）
      const pageText = textContent.items
        .map(item => ('str' in item ? item.str : ''))
        .join(' ')

      fullText += pageText + '\n'

      // 检查是否是"积分表"页面
      if (!pageText.includes('积分表')) continue

      // 提取比赛信息
      const matchInfo = pageText.match(/(U\d{2})(男|女)子组(回转|大回转|超级大回转)/)
      if (!matchInfo) continue

      const [, ageGroup, gender, discipline] = matchInfo

      // 按Y坐标分组文本项
      const items: PageTextItem[] = textContent.items
        .filter(item => 'str' in item && 'transform' in item)
        .map(item => ({
          str: (item as { str: string }).str,
          x: Math.round((item as { transform: number[] }).transform[4]),
          y: Math.round((item as { transform: number[] }).transform[5])
        }))

      // 按Y坐标分行
      const rows: Record<number, PageTextItem[]> = {}
      items.forEach(item => {
        const y = Math.round(item.y / 8) * 8  // 8像素分组
        if (!rows[y]) rows[y] = []
        rows[y].push(item)
      })

      // 按Y降序排列（从上到下）
      const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a)

      // 解析每一行
      const results: AlpineResult[] = []

      for (const y of sortedYs) {
        const row = rows[y].sort((a, b) => a.x - b.x)
        const rowText = row.map(item => item.str).join(' ').trim()

        // 匹配成绩行: 排名 号码 姓名 单位 第一轮 第二轮 总成绩 积分
        // 格式1: 1   29   王阳明   张家口乔与杨...   27.82   28.28   56.10   360
        // 格式2: 9   14   王宏轩   ...   30.32   30.41   1:00.73   199
        const resultMatch = rowText.match(
          /^\s*(\d{1,2})\s+(\d{1,3})\s+([\u4e00-\u9fa5·]{2,4})\s+([\u4e00-\u9fa5\s]+?)\s+(\d+\.\d{2})\s+(\d+\.\d{2})\s+(\d{1,2}:\d{2}\.\d{2}|\d+\.\d{2})\s+(\d{1,3})\s*$/
        )

        if (resultMatch) {
          const [, rank, bib, name, org, run1, run2, total, points] = resultMatch
          results.push({
            rank: parseInt(rank),
            bib: parseInt(bib),
            name: name.trim(),
            organization: org.trim().replace(/\s+/g, ''),
            run1Time: run1,
            run2Time: run2,
            totalTime: total,
            points: parseInt(points),
            status: 'OK'
          })
        }
      }

      if (results.length > 0) {
        competitions.push({
          ageGroup,
          gender: gender + '子',
          discipline,
          results
        })
      }
    }

    if (competitions.length === 0) {
      return {
        success: false,
        competitions: [],
        rawText: fullText,
        error: '未找到有效的积分表页面，请确认PDF格式正确'
      }
    }

    return {
      success: true,
      competitions,
      rawText: fullText
    }
  } catch (error) {
    return {
      success: false,
      competitions: [],
      error: error instanceof Error ? error.message : 'PDF解析失败'
    }
  }
}

// 解析PDF文件并返回比赛数据
export async function parsePdfFile(file: File): Promise<{
  success: boolean
  data?: ReturnType<typeof PDFResultParser.toCompetitionData>
  rawText?: string
  parsed?: ParsedCompetitionData
  error?: string
}> {
  try {
    // 提取PDF文本
    const text = await extractTextFromPdf(file)

    if (!text || text.trim().length === 0) {
      return {
        success: false,
        error: 'PDF文件为空或无法提取文本'
      }
    }

    // 使用现有解析器解析文本
    const parsed = PDFResultParser.parseResults(text)

    // 检查是否解析到有效数据
    if (!parsed.results || parsed.results.length === 0) {
      return {
        success: false,
        rawText: text,
        error: '无法从PDF中识别成绩数据，请确认文件格式正确'
      }
    }

    // 转换为系统通用格式
    const data = PDFResultParser.toCompetitionData(parsed)

    return {
      success: true,
      data,
      rawText: text,
      parsed
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'PDF解析失败'
    }
  }
}

// 检查文件是否为有效PDF
export function isValidPdfFile(file: File): boolean {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
}
