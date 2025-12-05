// 浏览器端PDF解析器
// 使用pdf.js在客户端解析PDF文件，避免依赖服务器API

import { PDFResultParser, ParsedCompetitionData } from './pdfParser'
import * as pdfjs from 'pdfjs-dist'

// 设置worker - 必须在模块加载时立即设置
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/ski/pdf/pdf.worker.min.mjs'
}

// 从PDF文件提取文本
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
    console.error('PDF解析错误:', error)
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
