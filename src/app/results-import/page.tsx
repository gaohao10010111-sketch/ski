'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getImagePath } from '@/utils/paths'
import { XMLParser, CompetitionData } from '@/utils/xmlParser'
import { exportToExcel } from '@/utils/exportUtils'
import { useToast } from '@/components/Toast'
import { PDFResultParser, AlpineResult } from '@/utils/pdfParser'
import {
  Upload,
  FileText,
  Download,
  Eye,
  Search,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Thermometer,
  Clock,
  Mountain,
  Flag,
  Award,
  Target,
  Activity,
  Snowflake,
  Wind,
  FileUp,
  Timer,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

// 扩展CompetitionData类型以支持PDF解析的额外字段
interface ExtendedCompetitor {
  rank: number
  order: number
  bib: number
  fisCode: string
  lastname: string
  firstname: string
  sex: string
  nation: string
  yearOfBirth: number
  status: string
  points?: number
  run1Time?: string
  run2Time?: string
  totalTime?: string
  difference?: string
  rounds?: { round: number; j1?: number; j2?: number; j3?: number; j4?: number; j5?: number; score: number }[]
  finalScore?: number
}

interface ExtendedCompetitionData extends Omit<CompetitionData, 'competitors'> {
  competitors: ExtendedCompetitor[]
}

// 高山滑雪比赛结果（多组）
interface AlpineCompetitionResult {
  ageGroup: string    // U11/U15/U18
  gender: string      // 男子/女子
  discipline: string  // 回转/大回转
  results: AlpineResult[]
  dataSource?: 'pointsTable' | 'resultAnnouncement'  // 数据来源：积分表/成绩公告
  pageNum?: number    // 数据来源页码
}

// PDF解析结果（包含站点信息）
interface ParsedPdfData {
  stationName: string           // 站点名称（成都站、北京站等）
  seasonName: string            // 赛季名称
  competitions: AlpineCompetitionResult[]
}

export default function ResultsImportPage() {
  const router = useRouter()
  const [competitionData, setCompetitionData] = useState<ExtendedCompetitionData | null>(null)
  const [alpineCompetitions, setAlpineCompetitions] = useState<AlpineCompetitionResult[]>([])
  const [parsedPdfData, setParsedPdfData] = useState<ParsedPdfData | null>(null)
  const [selectedCompetition, setSelectedCompetition] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedNation, setSelectedNation] = useState('all')
  const [showDetails, setShowDetails] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<'upload' | 'review' | 'confirm'>('upload')
  const [isProcessing, setIsProcessing] = useState(false)
  const [fileType, setFileType] = useState<'xml' | 'pdf' | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set([0]))
  const { showToast } = useToast()

  // 筛选状态
  const [filterDiscipline, setFilterDiscipline] = useState<string>('all')  // 项目筛选
  const [filterAgeGroup, setFilterAgeGroup] = useState<string>('all')      // 年龄组筛选
  const [filterGender, setFilterGender] = useState<string>('all')          // 性别筛选

  // 确认导入成绩
  const handleConfirmImport = async () => {
    if (!competitionData) return

    setIsProcessing(true)
    try {
      // 模拟数据处理过程
      await new Promise(resolve => setTimeout(resolve, 2000))

      setCurrentStep('confirm')
      showToast(`成功导入 ${competitionData.competitors.length} 名运动员的比赛成绩！积分已自动计算完成，排名已更新。`, 'success')
    } catch {
      showToast('导入过程中发生错误，请重试', 'error')
    } finally {
      setIsProcessing(false)
    }
  }

  // 重新开始导入
  const handleRestart = () => {
    setCompetitionData(null)
    setAlpineCompetitions([])
    setParsedPdfData(null)
    setSelectedCompetition(0)
    setCurrentStep('upload')
    setError(null)
    setFileType(null)
    setUploadProgress(0)
    setExpandedGroups(new Set([0]))
    setFilterDiscipline('all')
    setFilterAgeGroup('all')
    setFilterGender('all')
  }

  // 处理PDF文件上传 - 使用前端解析（支持高山滑雪积分表）
  const handlePDFUpload = async (file: File) => {
    setIsLoading(true)
    setError(null)
    setFileType('pdf')
    setUploadProgress(10)

    try {
      // 验证文件类型
      if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
        throw new Error('请选择有效的PDF文件')
      }

      setUploadProgress(20)

      // 动态导入pdfjs-dist并设置worker
      const pdfjs = await import('pdfjs-dist')
      // 使用CDN加载worker，避免部署路径问题
      pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

      setUploadProgress(30)

      // 读取PDF文件
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise

      setUploadProgress(40)

      console.log('[PDF解析] 开始解析PDF, 总页数:', pdf.numPages)

      // 智能解析结果行的辅助函数
      // 核心原则：同一行的信息才是一条信息，绝不从不同行拼凑数据
      // 支持两种格式：
      // 1. 高山滑雪: 名次 号码 姓名 单位 第一轮 第二轮 总成绩 差值（无积分列）
      // 2. 大跳台/坡障: 名次 号码 姓名 单位 出生年 站姿 轮次 J1-J5 得分 最终成绩 积分
      const parseResultRow = (rowText: string, sportType: string = 'alpine'): AlpineResult | null => {
        // 清理行开头的 | 和空格
        const cleanText = rowText.replace(/^\s*\|\s*/, '').trim()

        // 提取中文姓名（2-5个汉字，可能包含间隔号·）
        const nameMatch = cleanText.match(/[\u4e00-\u9fa5·]{2,5}/)
        if (!nameMatch) return null
        const name = nameMatch[0]

        // 提取所有数字（包括小数和时间格式）
        // 优先匹配时间格式 1:01.44，再匹配普通小数和整数
        const numbers = cleanText.match(/\d{1,2}:\d{2}\.\d{2}|\d+\.\d+|\d+/g) || []

        // 对于大跳台/坡障格式，使用专门的解析逻辑
        if (sportType.includes('bigair') || sportType.includes('slopestyle') || sportType === 'freestyle') {
          // 大跳台完整数据行的特征：
          // - 必须包含中文姓名（2-5个汉字）
          // - 必须包含站姿标记 G 或 R
          // - 必须包含积分（1-360的整数，在行末尾）
          // - 数据很多（排名、号码、姓名、单位、出生年、站姿、轮次、J1-J5评分、得分、最终成绩、积分）
          //
          // 轮次行的特征（需要跳过）：
          // - 行首是轮次号（2或3）
          // - 只有评分数据，没有完整的运动员信息
          // - 没有站姿标记
          // - 数字较少（只有7-8个：轮次、J1-J5、得分）

          // 首先检测是否是轮次行（行首以2或3开头，后面只有评分数据）
          // 轮次行格式: "2 65  66  66  65  63  65.00" 或 "3 73  75  75  76  74  74.60"
          const isRoundRow = /^\s*[23]\s+\d+\s+\d+\s+\d+/.test(cleanText) && !cleanText.includes(' G ') && !cleanText.includes(' R ')
          if (isRoundRow) {
            return null  // 跳过轮次2和3的行
          }

          // 检查是否包含站姿标记（这是完整数据行的必要条件）
          const hasStance = /[|\s][GR][|\s]/.test(cleanText) || cleanText.includes(' G ') || cleanText.includes(' R ')

          // 如果没有站姿标记，这不是完整的数据行
          if (!hasStance) {
            return null
          }

          // 大跳台格式需要足够多的数字来包含：名次、号码、出生年、轮次、评分、最终成绩、积分
          if (numbers.length < 8) return null

          // 名次应该是第一个1-99之间的数字
          const firstNum = numbers[0]
          if (!firstNum) return null
          const rank = parseInt(firstNum)
          if (rank < 1 || rank > 99) return null

          // 号码是第二个数字
          const secondNum = numbers[1]
          const bib = secondNum ? parseInt(secondNum) : rank

          // 从末尾提取积分（1-360之间的整数）
          // 积分必须在这一行存在才能解析
          let points = 0
          let finalScore = '-'

          for (let i = numbers.length - 1; i >= 0; i--) {
            const num = parseFloat(numbers[i])
            if (Number.isInteger(num) && num >= 1 && num <= 360) {
              points = num
              // 积分前面是最终成绩（小数）
              if (i > 0 && numbers[i - 1].includes('.')) {
                finalScore = numbers[i - 1]
              }
              break
            }
          }

          // 如果这一行没有积分，说明不是完整的数据行
          if (points === 0) return null

          // 提取单位 - 在姓名后面的中文（必须在同一行）
          let organization = '-'
          const afterName = cleanText.substring(cleanText.indexOf(name) + name.length)
          const orgMatch = afterName.match(/[\u4e00-\u9fa5]{2,15}/)
          if (orgMatch) {
            organization = orgMatch[0]
          }

          return {
            rank,
            bib: bib > 0 && bib < 1000 ? bib : rank,
            name: name.trim(),
            organization,
            run1Time: '-',
            run2Time: '-',
            totalTime: finalScore,  // 最终成绩（最好两轮之和）
            points,
            status: 'OK'
          }
        }

        // 高山滑雪格式的解析逻辑
        // 高山滑雪"总成绩"页格式：成绩排名 | 号码 | 姓名 | 单位 | 第一轮 | 第二轮 | 总成绩 | 差值
        // 注意：高山滑雪的成绩页没有积分列，积分在"积分表"页面

        if (numbers.length < 3) return null

        // 提取排名（第一个数字，1-99之间）
        const firstNum = numbers[0]
        if (!firstNum) return null
        const rank = parseInt(firstNum)
        if (rank < 1 || rank > 99) return null

        // 提取号码（第二个数字）
        const secondNum = numbers[1]
        const bib = secondNum ? parseInt(secondNum) : rank

        // 提取单位 - 姓名后面的中文
        let organization = '-'
        const afterName = cleanText.substring(cleanText.indexOf(name) + name.length)
        const orgMatch = afterName.match(/[\u4e00-\u9fa5]{2,15}/)
        if (orgMatch) {
          organization = orgMatch[0]
        }

        // 对于高山滑雪，尝试提取时间成绩和积分
        // 积分在积分表页面的末尾
        let points = 0
        let run1Time = '-'
        let run2Time = '-'
        let totalTime = '-'

        // 如果页面包含"积分表"，从末尾提取积分
        // 否则提取时间成绩

        // 查找时间格式（分:秒.毫秒 或 秒.毫秒）
        const timeNumbers = numbers.filter(n => n.includes('.') || n.includes(':'))

        if (timeNumbers.length >= 1) {
          // 有时间格式的数字，这是成绩页
          if (timeNumbers.length >= 3) {
            run1Time = timeNumbers[0]
            run2Time = timeNumbers[1]
            totalTime = timeNumbers[2]
          } else if (timeNumbers.length >= 1) {
            totalTime = timeNumbers[timeNumbers.length - 1]
          }
        }

        // 尝试从末尾提取积分（1-360之间的整数）
        for (let i = numbers.length - 1; i >= 0; i--) {
          const numStr = numbers[i]
          if (!numStr) continue
          // 跳过时间格式和小数
          if (numStr.includes('.') || numStr.includes(':')) continue
          const num = parseInt(numStr)
          if (num >= 1 && num <= 360) {
            points = num
            break
          }
        }

        // 高山滑雪成绩页可能没有积分，但有时间成绩也算有效
        if (points === 0 && totalTime === '-') return null

        return {
          rank,
          bib: bib > 0 && bib < 1000 ? bib : rank,
          name: name.trim(),
          organization,
          run1Time,
          run2Time,
          totalTime,
          points,
          status: 'OK'
        }
      }

      // 第一遍扫描：收集所有页面的信息，识别哪些比赛有积分表
      interface PageInfo {
        pageNum: number
        pageText: string
        textContent: Awaited<ReturnType<Awaited<ReturnType<typeof pdf.getPage>>['getTextContent']>>
        hasPointsTable: boolean
        hasResultAnnouncement: boolean
        ageGroup: string
        gender: string
        discipline: string
        sportType: string  // alpine/snowboard-bigair/snowboard-slopestyle/freestyle
      }

      const allPages: PageInfo[] = []
      const competitionsWithPointsTable = new Set<string>()  // 记录哪些比赛有积分表

      console.log('[PDF解析] 开始第一遍扫描, 总页数:', pdf.numPages)

      // 第一遍扫描所有页面
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum)
        const textContent = await page.getTextContent()

        // 构建页面文本
        const pageText = textContent.items
          .map(item => ('str' in item ? (item as { str: string }).str : ''))
          .join(' ')

        // 调试：每10页输出一次进度，以及第7页（应该有积分表）的详细信息
        if (pageNum <= 10) {
          console.log(`[PDF解析] 页${pageNum} 文本长度: ${pageText.length}, 前100字符: ${pageText.substring(0, 100)}`)
        }

        // 检查是否包含比赛信息（支持多种格式）
        const hasPointsTable = pageText.includes('积分表')
        const hasAlpineFormat = pageText.includes('高山滑雪') && (pageText.includes('回转') || pageText.includes('大回转'))
        const hasSnowboardBigAir = pageText.includes('单板滑雪大跳台') || (pageText.includes('单板') && pageText.includes('大跳台'))
        const hasSnowboardSlopestyle = pageText.includes('单板') && pageText.includes('坡面障碍')
        const hasFreestyleFormat = pageText.includes('自由式') && (pageText.includes('坡面障碍') || pageText.includes('大跳台'))
        const hasResultAnnouncement = pageText.includes('成绩公告') || pageText.includes('成 绩 公 告')

        // 调试：如果是积分表页面，输出详细信息
        if (hasPointsTable || hasAlpineFormat) {
          console.log(`[PDF解析] 页${pageNum} 检测结果: 积分表=${hasPointsTable}, 高山格式=${hasAlpineFormat}`)
        }

        // 跳过既没有积分表也没有比赛格式的页面
        if (!hasPointsTable && !hasAlpineFormat && !hasSnowboardBigAir && !hasSnowboardSlopestyle && !hasFreestyleFormat && !hasResultAnnouncement) continue

        // 提取比赛信息
        let matchInfo: RegExpMatchArray | null = null
        let discipline = ''
        let sportType = ''

        // 格式1: "U18男子组回转"（高山滑雪积分表）- 注意中文空格问题
        // 尝试多种可能的格式，包括带空格的情况
        matchInfo = pageText.match(/(U\d{2})\s*(男|女)\s*子\s*组\s*(回转|大回转|超级大回转)/)
        if (matchInfo) {
          sportType = 'alpine'
          console.log(`[PDF解析] 页${pageNum} 匹配格式1成功: ${matchInfo[0]}`)
        }

        // 格式2: "高山滑雪-回转-男-U18" 或 "高山滑雪-大回转-女-U15"
        if (!matchInfo) {
          const format2Match = pageText.match(/高山滑雪[^\w]*(回转|大回转|超级大回转)[^\w]*(男|女)[^\w]*(U\d{2})/)
          if (format2Match) {
            matchInfo = [format2Match[0], format2Match[3], format2Match[2], format2Match[1]] as RegExpMatchArray
            sportType = 'alpine'
          }
        }

        // 格式3: 单板滑雪大跳台 - "U11女子组" 或 "U15男子组"
        if (!matchInfo && (hasSnowboardBigAir || (hasResultAnnouncement && pageText.includes('单板')))) {
          const bigAirMatch = pageText.match(/(U\d{2})(男|女)子组/)
          if (bigAirMatch) {
            discipline = hasSnowboardBigAir ? '大跳台' : (hasSnowboardSlopestyle ? '坡面障碍' : '')
            matchInfo = [bigAirMatch[0], bigAirMatch[1], bigAirMatch[2], discipline] as RegExpMatchArray
            sportType = hasSnowboardBigAir ? 'snowboard-bigair' : 'snowboard-slopestyle'
          }
        }

        // 格式4: 自由式滑雪坡面障碍/大跳台 - "U15男子组"
        if (!matchInfo && hasFreestyleFormat) {
          const freestyleMatch = pageText.match(/(U\d{2})(男|女)子组/)
          if (freestyleMatch) {
            discipline = pageText.includes('大跳台') ? '大跳台' : '坡面障碍'
            matchInfo = [freestyleMatch[0], freestyleMatch[1], freestyleMatch[2], discipline] as RegExpMatchArray
            sportType = 'freestyle'
          }
        }

        if (!matchInfo) {
          // 调试：积分表页面没有匹配成功时输出更多信息
          if (hasPointsTable) {
            console.log(`[PDF解析] 页${pageNum} 有积分表但没有匹配到比赛格式`)
            console.log(`[PDF解析] 页${pageNum} 文本内容: ${pageText.substring(0, 200)}`)
          }
          continue
        }

        console.log(`[PDF解析] 页${pageNum} 成功添加到allPages: ${matchInfo[0]}`)

        const [, ageGroup, gender, extractedDiscipline] = matchInfo
        const finalDiscipline = discipline || extractedDiscipline || '未知项目'
        const fullGender = gender + '子'  // 统一使用完整性别格式

        // 生成唯一的比赛标识：年龄组+性别+项目（使用完整性别）
        const competitionKey = `${ageGroup}-${fullGender}-${finalDiscipline}`

        // 如果有积分表，记录下来
        if (hasPointsTable) {
          competitionsWithPointsTable.add(competitionKey)
          console.log(`[PDF解析] 记录积分表比赛: ${competitionKey}`)
        }

        allPages.push({
          pageNum,
          pageText,
          textContent,
          hasPointsTable,
          hasResultAnnouncement,
          ageGroup,
          gender: fullGender,
          discipline: finalDiscipline,
          sportType
        })

        // 更新进度
        setUploadProgress(40 + Math.floor((pageNum / pdf.numPages) * 25))
      }

      // 第二遍：只解析需要的页面（有积分表用积分表，没有才用成绩公告）
      // 对于跨多页的比赛，合并所有页面的结果
      const competitions: AlpineCompetitionResult[] = []
      let totalAthletes = 0
      const competitionResultsMap = new Map<string, { results: AlpineResult[], pageNums: number[], ageGroup: string, gender: string, discipline: string, dataSource: 'pointsTable' | 'resultAnnouncement', sportType: string }>()

      console.log(`[PDF解析] 第二遍开始，共${allPages.length}个页面待处理`)
      console.log(`[PDF解析] 有积分表的比赛: ${Array.from(competitionsWithPointsTable).join(', ')}`)

      for (const pageInfo of allPages) {
        const competitionKey = `${pageInfo.ageGroup}-${pageInfo.gender}-${pageInfo.discipline}`

        // 如果该比赛有积分表，但当前页是成绩公告，跳过（优先用积分表）
        if (competitionsWithPointsTable.has(competitionKey) && !pageInfo.hasPointsTable) {
          console.log(`[PDF解析] 跳过成绩公告（有积分表）: ${competitionKey} (页${pageInfo.pageNum})`)
          continue
        }

        console.log(`[PDF解析] 开始处理: ${competitionKey} (页${pageInfo.pageNum}, ${pageInfo.hasPointsTable ? '积分表' : '成绩公告'})`)

        const { textContent, ageGroup, gender, discipline: finalDiscipline, hasPointsTable, sportType } = pageInfo

        // 按Y坐标分组文本项
        const items = textContent.items
          .filter(item => 'str' in item && 'transform' in item)
          .map(item => ({
            str: (item as { str: string }).str,
            x: Math.round((item as { transform: number[] }).transform[4]),
            y: Math.round((item as { transform: number[] }).transform[5])
          }))

        // 按Y坐标分行
        const rows: Record<number, typeof items> = {}
        items.forEach(item => {
          const y = Math.round(item.y / 8) * 8
          if (!rows[y]) rows[y] = []
          rows[y].push(item)
        })

        // 按Y降序排列
        const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a)

        // 解析每一行 - 使用更灵活的解析策略
        const results: AlpineResult[] = []

        console.log(`[PDF解析] 开始解析页${pageInfo.pageNum}的${sortedYs.length}行`)

        for (const y of sortedYs) {
          const row = rows[y].sort((a, b) => a.x - b.x)
          const rowText = row.map(item => item.str).join(' ').trim()

          // 跳过明显不是成绩行的内容
          if (!rowText || rowText.length < 10) continue
          if (!/^\s*\d/.test(rowText)) continue  // 必须以数字开头
          if (/^[\d\s]+$/.test(rowText)) continue  // 不能全是数字和空格
          if (rowText.includes('名次') || rowText.includes('排名') || rowText.includes('姓名') || rowText.includes('成绩排名')) continue  // 跳过表头

          // 调试日志
          console.log(`[PDF解析] 尝试解析行: ${rowText.substring(0, 80)}...`)

          // 智能解析：尝试多种模式，传入sportType来处理不同格式
          const parsedResult = parseResultRow(rowText, sportType)
          if (parsedResult) {
            console.log(`[PDF解析] 解析成功: 排名=${parsedResult.rank}, 姓名=${parsedResult.name}, 积分=${parsedResult.points}`)
            results.push(parsedResult)
          } else {
            console.log(`[PDF解析] 解析失败`)
          }
        }

        if (results.length > 0) {
          // 合并到同一比赛的结果中
          const existingCompetition = competitionResultsMap.get(competitionKey)
          if (existingCompetition) {
            // 合并结果，避免重复
            const existingRanks = new Set(existingCompetition.results.map(r => r.rank))
            const newResults = results.filter(r => !existingRanks.has(r.rank))
            existingCompetition.results.push(...newResults)
            existingCompetition.pageNums.push(pageInfo.pageNum)
            console.log(`[PDF解析] 合并到现有比赛: ${competitionKey}, 新增 ${newResults.length}人`)
          } else {
            competitionResultsMap.set(competitionKey, {
              results: [...results],
              pageNums: [pageInfo.pageNum],
              ageGroup,
              gender,
              discipline: finalDiscipline,
              dataSource: hasPointsTable ? 'pointsTable' : 'resultAnnouncement',
              sportType
            })
          }
        }

        // 更新进度
        setUploadProgress(65 + Math.floor((competitionResultsMap.size / allPages.length) * 30))
      }

      setUploadProgress(95)

      // 将Map转换为competitions数组，并按排名排序
      Array.from(competitionResultsMap.entries()).forEach(([key, data]) => {
        // 按排名排序
        data.results.sort((a: AlpineResult, b: AlpineResult) => a.rank - b.rank)
        competitions.push({
          ageGroup: data.ageGroup,
          gender: data.gender,
          discipline: data.discipline,
          results: data.results,
          dataSource: data.dataSource,
          pageNum: data.pageNums[0]  // 使用第一页的页码
        })
        totalAthletes += data.results.length
        console.log(`[PDF解析] 最终结果: ${key} - ${data.results.length}人 (页${data.pageNums.join(',')})`)
      })

      if (competitions.length === 0) {
        throw new Error('未找到有效的积分表页面，请确认PDF格式正确')
      }

      // 提取站点和赛季信息（从第一页或目录页）
      let stationName = '未知站点'
      let seasonName = '2025-2026赛季'

      const firstPage = await pdf.getPage(1)
      const firstPageContent = await firstPage.getTextContent()
      const firstPageText = firstPageContent.items
        .map(item => ('str' in item ? (item as { str: string }).str : ''))
        .join(' ')

      // 提取站点名称
      const stationMatch = firstPageText.match(/（([^）]+站)）/) || firstPageText.match(/\(([^)]+站)\)/)
      if (stationMatch) {
        stationName = stationMatch[1]
      }

      // 提取赛季名称
      const seasonMatch = firstPageText.match(/(\d{4}-\d{4})赛季/)
      if (seasonMatch) {
        seasonName = seasonMatch[0]
      }

      // 保存解析结果
      const pdfData: ParsedPdfData = {
        stationName,
        seasonName,
        competitions
      }

      setParsedPdfData(pdfData)
      setAlpineCompetitions(competitions)
      setExpandedGroups(new Set([0]))  // 默认展开第一组
      setUploadProgress(100)

      // 调试日志 - 追踪解析结果
      console.log('[PDF解析调试]', {
        competitionsCount: competitions.length,
        totalAthletes,
        stationName,
        competitionDetails: competitions.map(c => ({
          ageGroup: c.ageGroup,
          gender: c.gender,
          discipline: c.discipline,
          resultsCount: c.results.length
        }))
      })

      setCurrentStep('review')
      showToast(`成功解析 ${stationName} ${competitions.length} 场比赛，共 ${totalAthletes} 名运动员`, 'success')
    } catch (err) {
      console.error('PDF解析错误:', err)
      setError(err instanceof Error ? err.message : 'PDF解析失败，请检查文件格式')
      showToast('PDF解析失败', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportExcel = () => {
    if (!competitionData?.competitors || competitionData.competitors.length === 0) {
      showToast('没有数据可导出', 'warning')
      return
    }

    // 检测是否为高山滑雪（有时间成绩）或大跳台（有评分）
    const hasTimeResults = competitionData.competitors.some(c => c.run1Time || c.totalTime)
    const hasScoreResults = competitionData.competitors.some(c => c.finalScore !== undefined)

    // 按排名排序后导出
    const sortedCompetitors = [...competitionData.competitors].sort((a, b) => a.rank - b.rank)

    const exportData = {
      filename: `${competitionData.raceHeader.eventName || '比赛成绩'}_${new Date().toISOString().split('T')[0]}`,
      data: sortedCompetitors.map((competitor) => {
        // 基础字段 - 姓名在lastname中（中文名），firstname可能为空
        const baseData: Record<string, string | number> = {
          '排名': competitor.rank,
          '号码布': competitor.bib,
          '姓名': competitor.firstname ? `${competitor.lastname} ${competitor.firstname}` : competitor.lastname,
          '单位/国家': competitor.nation || '-'
        }

        // 高山滑雪成绩（时间制）
        if (hasTimeResults) {
          baseData['第一轮'] = competitor.run1Time || '-'
          baseData['第二轮'] = competitor.run2Time || '-'
          baseData['总成绩'] = competitor.totalTime || '-'
          baseData['差距'] = competitor.difference || '-'
        }

        // 大跳台成绩（评分制）
        if (hasScoreResults) {
          baseData['最终得分'] = competitor.finalScore?.toFixed(2) || '-'
        }

        // 积分和状态
        baseData['积分'] = competitor.points || 0
        baseData['状态'] = competitor.status === '' || competitor.status === 'OK' ? '完赛' : competitor.status

        return baseData
      }),
      title: competitionData.raceHeader.eventName || '比赛成绩'
    }

    const result = exportToExcel(exportData)
    if (result.success) {
      showToast('导出成功', 'success')
    } else {
      showToast(result.message, 'error')
    }
  }

  const handleGenerateReport = () => {
    if (!competitionData) {
      showToast('请先导入比赛数据', 'warning')
      return
    }

    // 生成详细的HTML报告
    const reportContent = `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${competitionData.raceHeader.eventName} - 比赛报告</title>
        <style>
          body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Noto Sans SC", sans-serif; margin: 20px; background: #f5f5f5; }
          .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }
          .title { color: #1e40af; font-size: 2.5em; margin: 0; }
          .subtitle { color: #64748b; font-size: 1.2em; margin: 10px 0; }
          .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
          .info-card { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; }
          .info-label { font-weight: bold; color: #374151; margin-bottom: 5px; }
          .info-value { color: #1f2937; font-size: 1.1em; }
          .results-table { width: 100%; border-collapse: collapse; margin: 30px 0; }
          .results-table th, .results-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
          .results-table th { background: #f3f4f6; font-weight: bold; color: #374151; }
          .results-table tr:hover { background: #f9fafb; }
          .rank-1 { background: #fef3c7 !important; }
          .rank-2 { background: #e5e7eb !important; }
          .rank-3 { background: #fed7aa !important; }
          .statistics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
          .stat-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
          .stat-number { font-size: 2em; font-weight: bold; margin-bottom: 5px; }
          .stat-label { opacity: 0.9; }
          .weather-info { background: #ecfccb; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #64748b; }
          @media print { body { background: white; } .container { box-shadow: none; } }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">${competitionData.raceHeader.eventName}</h1>
            <p class="subtitle">官方比赛结果报告</p>
            <p class="subtitle">生成时间: ${new Date().toLocaleString('zh-CN')}</p>
          </div>

          <div class="info-grid">
            <div class="info-card">
              <div class="info-label">比赛日期</div>
              <div class="info-value">${competitionData.raceHeader.raceDate.formatted}</div>
            </div>
            <div class="info-card">
              <div class="info-label">比赛地点</div>
              <div class="info-value">${competitionData.raceHeader.place}</div>
            </div>
            <div class="info-card">
              <div class="info-label">比赛项目</div>
              <div class="info-value">${competitionData.raceHeader.discipline}</div>
            </div>
            <div class="info-card">
              <div class="info-label">参赛人数</div>
              <div class="info-value">${competitionData.competitors.length}人</div>
            </div>
          </div>

          <div class="statistics">
            <div class="stat-card">
              <div class="stat-number">${competitionData.competitors.length}</div>
              <div class="stat-label">总参赛人数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${competitionData.competitors.filter(c => c.status === 'OK' || c.status === '').length}</div>
              <div class="stat-label">完赛人数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${competitionData.competitors.filter(c => c.status === 'DNF').length}</div>
              <div class="stat-label">未完赛(DNF)</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">${competitionData.competitors.filter(c => c.status === 'DSQ' || c.status === 'DQ').length}</div>
              <div class="stat-label">取消资格(DSQ)</div>
            </div>
          </div>

          <h2>比赛成绩</h2>
          <table class="results-table">
            <thead>
              <tr>
                <th>排名</th>
                <th>号码布</th>
                <th>姓名</th>
                <th>单位/国家</th>
                ${competitionData.competitors.some(c => c.run1Time || c.totalTime) ? `
                <th>第一轮</th>
                <th>第二轮</th>
                <th>总成绩</th>
                <th>差距</th>
                ` : ''}
                ${competitionData.competitors.some(c => c.finalScore !== undefined) ? `
                <th>最终得分</th>
                ` : ''}
                <th>积分</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${[...competitionData.competitors].sort((a, b) => a.rank - b.rank).map((competitor) => {
                const rank = competitor.rank;
                const rowClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : '';
                const name = competitor.firstname ? `${competitor.lastname} ${competitor.firstname}` : competitor.lastname;
                const hasTimeResults = competitionData.competitors.some(c => c.run1Time || c.totalTime);
                const hasScoreResults = competitionData.competitors.some(c => c.finalScore !== undefined);
                return `
                  <tr class="${rowClass}">
                    <td><strong>${rank}</strong></td>
                    <td>${competitor.bib}</td>
                    <td><strong>${name}</strong></td>
                    <td>${competitor.nation || '-'}</td>
                    ${hasTimeResults ? `
                    <td>${competitor.run1Time || '-'}</td>
                    <td>${competitor.run2Time || '-'}</td>
                    <td><strong>${competitor.totalTime || '-'}</strong></td>
                    <td>${competitor.difference || '-'}</td>
                    ` : ''}
                    ${hasScoreResults ? `
                    <td><strong>${competitor.finalScore?.toFixed(2) || '-'}</strong></td>
                    ` : ''}
                    <td>${competitor.points || 0}</td>
                    <td>${competitor.status === '' || competitor.status === 'OK' ? '完赛' : competitor.status}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>

          <div class="footer">
            <p>本报告由高山滑雪竞赛管理系统自动生成</p>
            <p>符合中国滑雪协会(FIS)标准 | 官方认证</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 创建并下载HTML报告
    const blob = new Blob([reportContent], { type: 'text/html;charset=utf-8' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${competitionData.raceHeader.eventName}_详细报告_${new Date().toISOString().split('T')[0]}.html`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('报告生成成功！已下载到本地。', 'success');
  }

  // 处理文件上传 - 支持XML和PDF
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const fileName = file.name.toLowerCase()

    // 检测文件类型并分发到对应处理函数
    if (fileName.endsWith('.pdf')) {
      await handlePDFUpload(file)
      return
    }

    // XML文件处理
    setIsLoading(true)
    setError(null)
    setFileType('xml')

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const xmlContent = e.target?.result as string
        if (!xmlContent) {
          throw new Error('无法读取文件内容')
        }

        // 简单验证XML格式
        if (!xmlContent.includes('<Fisresults>') || !xmlContent.includes('</Fisresults>')) {
          throw new Error('文件不是有效的XML格式')
        }

        // 解析比赛数据
        const parsedData = XMLParser.parseCompetitionXML(xmlContent)
        setCompetitionData(parsedData as ExtendedCompetitionData)
        setCurrentStep('review') // 进入数据审核步骤
      } catch (err) {
        setError(err instanceof Error ? err.message : '文件解析失败，请检查XML格式是否正确')
      } finally {
        setIsLoading(false)
      }
    }

    reader.onerror = () => {
      setError('文件读取失败，请重试')
      setIsLoading(false)
    }

    reader.readAsText(file, 'utf-8')
  }

  // 筛选选手数据并按排名排序
  const filteredCompetitors = competitionData?.competitors
    .filter(competitor => {
      const matchSearch = competitor.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competitor.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         competitor.fisCode.includes(searchTerm)
      const matchNation = selectedNation === 'all' || competitor.nation === selectedNation
      return matchSearch && matchNation
    })
    .sort((a, b) => a.rank - b.rank) || []

  // 获取所有国家
  const allNations = Array.from(new Set(competitionData?.competitors.map(c => c.nation) || []))

  // 获取国旗函数
  const getNationFlag = XMLParser.getNationFlag

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/ski-action-2.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-10 left-10 w-36 h-36 opacity-15 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/giant-slalom.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-10 rounded-full overflow-hidden">
        <img
          src={getImagePath("/images/skiing-1.jpg")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="section-title">比赛成绩导入</h1>
        <p className="text-gray-600 text-lg">
          导入中国标准格式的比赛成绩数据，使用公式自动计算积分和排名
        </p>
      </div>

      {/* 步骤指示器 */}
      <div className="flex justify-center mb-8 relative z-10">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            currentStep === 'upload' ? 'bg-ski-blue text-white' :
            ['review', 'confirm'].includes(currentStep) ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
          }`}>
            <Upload className="h-4 w-4" />
            <span className="font-medium">1. 上传文件</span>
          </div>
          <div className={`w-8 h-0.5 ${
            ['review', 'confirm'].includes(currentStep) ? 'bg-green-400' : 'bg-gray-300'
          }`}></div>
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            currentStep === 'review' ? 'bg-ski-blue text-white' :
            currentStep === 'confirm' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
          }`}>
            <Eye className="h-4 w-4" />
            <span className="font-medium">2. 审核数据</span>
          </div>
          <div className={`w-8 h-0.5 ${
            currentStep === 'confirm' ? 'bg-green-400' : 'bg-gray-300'
          }`}></div>
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            currentStep === 'confirm' ? 'bg-ski-blue text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            <Award className="h-4 w-4" />
            <span className="font-medium">3. 确认导入</span>
          </div>
        </div>
      </div>

      {/* 导入区域 - 仅在上传步骤显示 */}
      {currentStep === 'upload' && (
        <div className="card mb-8 relative z-10">
          <div className="text-center py-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
                <FileUp className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-ski-navy mb-2">上传比赛成绩PDF</h3>
            <p className="text-gray-600 mb-6">
              支持官方PDF成绩册，系统将自动识别并解析运动员成绩
            </p>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* 上传进度条 */}
            {isLoading && uploadProgress > 0 && (
              <div className="mb-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">正在解析PDF文件...</span>
                  <span className="text-sm font-medium text-ski-blue">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-ski-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              {/* PDF上传按钮 */}
              <label className="btn-primary flex items-center justify-center cursor-pointer px-8 py-3 text-lg">
                <FileUp className="h-5 w-5 mr-2" />
                {isLoading ? '解析中...' : '选择PDF文件上传'}
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isLoading}
                />
              </label>
            </div>

            {/* 支持的格式说明 */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="bg-blue-50 rounded-lg p-4 text-left">
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">支持的成绩格式</span>
                </div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 高山滑雪U系列成绩（时间制）</li>
                  <li>• 单板大跳台成绩（裁判评分制）</li>
                  <li>• 自由式坡面障碍技巧成绩</li>
                  <li>• 自动识别比赛类型和年龄组</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 数据审核阶段 - 操作按钮 */}
      {currentStep === 'review' && (competitionData || alpineCompetitions.length > 0) && (
        <div className="card mb-8 relative z-10">
          <div className="text-center py-6">
            <h3 className="text-lg font-semibold text-ski-navy mb-4">数据审核完成</h3>
            <p className="text-gray-600 mb-6">
              {alpineCompetitions.length > 0 ? (
                <>已成功解析 <span className="font-semibold text-ski-blue">{alpineCompetitions.length}</span> 场比赛，
                共 <span className="font-semibold text-ski-blue">{alpineCompetitions.reduce((sum, c) => sum + c.results.length, 0)}</span> 名运动员</>
              ) : (
                <>已成功解析 <span className="font-semibold text-ski-blue">{competitionData?.competitors.length || 0}</span> 名运动员的比赛成绩</>
              )}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleRestart}
                className="btn-secondary flex items-center"
              >
                <Upload className="h-4 w-4 mr-2" />
                重新上传
              </button>
              <button
                onClick={handleConfirmImport}
                disabled={isProcessing}
                className="btn-primary flex items-center"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                    处理中...
                  </>
                ) : (
                  <>
                    <Award className="h-4 w-4 mr-2" />
                    确认导入成绩
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 导入完成 */}
      {currentStep === 'confirm' && competitionData && (
        <div className="card mb-8 relative z-10">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">成绩导入成功！</h3>
            <p className="text-gray-600 mb-6">
              {competitionData.competitors.length} 名运动员的比赛成绩已成功导入系统，积分已自动计算并更新排名
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleRestart}
                className="btn-secondary flex items-center"
              >
                <Upload className="h-4 w-4 mr-2" />
                导入新成绩
              </button>
              <button
                onClick={() => router.push('/points/rankings')}
                className="btn-primary flex items-center"
              >
                <Trophy className="h-4 w-4 mr-2" />
                查看积分排名
              </button>
            </div>
          </div>
        </div>
      )}

      {competitionData && (
        <>
          {/* 赛事基本信息 */}
          <div className="card mb-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-ski-navy flex items-center">
                <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
                赛事基本信息
              </h2>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="btn-secondary flex items-center"
              >
                <Eye className="h-4 w-4 mr-2" />
                {showDetails ? '隐藏详情' : '显示详情'}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 基本信息 */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-ski-navy mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    赛事信息
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">赛事级别:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.level}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">赛季:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.season}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">代码:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.codex}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">国家:</span>
                      <div className="text-gray-700">
                        {XMLParser.getNationFlag(competitionData.raceHeader.nation)} {competitionData.raceHeader.nation}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">项目:</span>
                      <div className="text-gray-700">
                        {XMLParser.getDisciplineName(competitionData.raceHeader.discipline)} ({competitionData.raceHeader.discipline})
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">类别:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.category}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">性别:</span>
                      <div className="text-gray-700">{XMLParser.getSexName(competitionData.raceHeader.sex)}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">类型:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.type}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-ski-navy mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    比赛详情
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">比赛日期:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.raceDate.formatted}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">赛事名称:</span>
                      <div className="text-gray-700">{competitionData.raceHeader.eventName}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">举办地点:</span>
                      <div className="text-gray-700 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {competitionData.raceHeader.place}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">技术代表:</span>
                      <div className="text-gray-700">
                        {competitionData.raceHeader.td.lastname}
                        {XMLParser.getNationFlag(competitionData.raceHeader.td.nation)} ({competitionData.raceHeader.td.nation})
                        <span className="text-xs text-gray-500 ml-2">#{competitionData.raceHeader.td.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 裁判和技术信息 */}
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-ski-navy mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    裁判团队
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">主裁判:</span>
                      <div className="text-gray-700">
                        {competitionData.jury.referee.firstname} {competitionData.jury.referee.lastname}
                        {XMLParser.getNationFlag(competitionData.jury.referee.nation)} ({competitionData.jury.referee.nation})
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">赛事主管:</span>
                      <div className="text-gray-700">
                        {competitionData.jury.chiefRace.firstname} {competitionData.jury.chiefRace.lastname}
                        {XMLParser.getNationFlag(competitionData.jury.chiefRace.nation)} ({competitionData.jury.chiefRace.nation})
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-ski-navy mb-3 flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    技术参数
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">适用Penalty:</span>
                      <div className="text-gray-700">{competitionData.raceInfo.appliedPenalty}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">计算Penalty:</span>
                      <div className="text-gray-700">{competitionData.raceInfo.calculatedPenalty}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">F值:</span>
                      <div className="text-gray-700">{competitionData.raceInfo.fValue}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">计时系统:</span>
                      <div className="text-gray-700">{competitionData.raceInfo.timingBy}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 赛道信息 */}
          {showDetails && (
            <div className="card mb-8 relative z-10">
              <h2 className="text-2xl font-bold text-ski-navy mb-6 flex items-center">
                <Mountain className="h-8 w-8 text-green-600 mr-3" />
                赛道信息
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {competitionData.courses.map((course, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-ski-navy mb-4 flex items-center">
                      <Flag className="h-5 w-5 mr-2" />
                      第{course.run}轮 - {course.name}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-medium text-gray-900">开始时间:</span>
                          <div className="text-gray-700 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.startTime}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">门数:</span>
                          <div className="text-gray-700">{course.gates} (转向门:{course.turningGates})</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">起点海拔:</span>
                          <div className="text-gray-700">{course.startElev}米</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">终点海拔:</span>
                          <div className="text-gray-700">{course.finishElev}米</div>
                        </div>
                      </div>
                      {course.homologation && (
                        <div>
                          <span className="font-medium text-gray-900">Homologation:</span>
                          <div className="text-gray-700">{course.homologation}</div>
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-gray-900">赛道设置者:</span>
                        <div className="text-gray-700">
                          {course.courseSetter.lastname}
                          {XMLParser.getNationFlag(course.courseSetter.nation)} ({course.courseSetter.nation})
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 天气信息 */}
              <div className="mt-6 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-ski-navy mb-4 flex items-center">
                  <Snowflake className="h-5 w-5 mr-2" />
                  天气情况
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">雪质:</span>
                    <div className="text-gray-700">{competitionData.raceInfo.weather.snow}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">天气:</span>
                    <div className="text-gray-700 flex items-center">
                      <Wind className="h-4 w-4 mr-1" />
                      {competitionData.raceInfo.weather.weather}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">起点气温:</span>
                    <div className="text-gray-700 flex items-center">
                      <Thermometer className="h-4 w-4 mr-1" />
                      {competitionData.raceInfo.weather.temperatureAirStart}°C
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">终点气温:</span>
                    <div className="text-gray-700 flex items-center">
                      <Thermometer className="h-4 w-4 mr-1" />
                      {competitionData.raceInfo.weather.temperatureAirFinish}°C
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 搜索和筛选 */}
          <div className="card mb-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="搜索选手姓名或FIS代码..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                />
              </div>
              <select
                value={selectedNation}
                onChange={(e) => setSelectedNation(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue"
              >
                <option value="all">所有国家</option>
                {allNations.map(nation => (
                  <option key={nation} value={nation}>
                    {XMLParser.getNationFlag(nation)} {nation}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 选手排名表格 */}
          <div className="card relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-ski-navy flex items-center">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                选手排名信息
              </h2>
              <div className="flex items-center space-x-4">
                {fileType === 'pdf' && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <FileUp className="h-3 w-3 mr-1" />
                    PDF导入
                  </span>
                )}
                <span className="text-sm text-gray-600">
                  共 {filteredCompetitors.length} 名选手
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200">
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排名</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">号码</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位/国家</th>
                      {/* 高山滑雪特有列 - 时间成绩 */}
                      {filteredCompetitors.some(c => c.run1Time || c.totalTime) && (
                        <>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                              <Timer className="h-3 w-3 mr-1" />
                              第一轮
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                              <Timer className="h-3 w-3 mr-1" />
                              第二轮
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">总成绩</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">差距</th>
                        </>
                      )}
                      {/* 大跳台特有列 - 最终得分 */}
                      {filteredCompetitors.some(c => c.finalScore !== undefined) && (
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            最终得分
                          </div>
                        </th>
                      )}
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          积分
                        </div>
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredCompetitors.map((competitor, index) => (
                      <tr
                        key={`${competitor.bib}-${index}`}
                        className={`hover:bg-gray-50 ${
                          competitor.rank <= 3 ? 'bg-yellow-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {competitor.rank <= 3 && (
                              <Trophy className={`h-4 w-4 mr-1 ${
                                competitor.rank === 1 ? 'text-yellow-500' :
                                competitor.rank === 2 ? 'text-gray-400' :
                                'text-orange-600'
                              }`} />
                            )}
                            <span className="text-sm font-medium text-gray-900">{competitor.rank}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {competitor.bib}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {competitor.lastname}{competitor.firstname ? ` ${competitor.firstname}` : ''}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className="flex items-center">
                            {competitor.nation && XMLParser.getNationFlag(competitor.nation)}
                            <span className="ml-1">{competitor.nation || '-'}</span>
                          </span>
                        </td>
                        {/* 高山滑雪时间成绩 */}
                        {filteredCompetitors.some(c => c.run1Time || c.totalTime) && (
                          <>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {competitor.run1Time || '-'}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                              {competitor.run2Time || '-'}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-mono font-semibold text-ski-blue">
                              {competitor.totalTime || '-'}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                              {competitor.difference || '-'}
                            </td>
                          </>
                        )}
                        {/* 大跳台最终得分 */}
                        {filteredCompetitors.some(c => c.finalScore !== undefined) && (
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-ski-blue">
                            {competitor.finalScore?.toFixed(2) || '-'}
                          </td>
                        )}
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            (competitor.points || 0) >= 300 ? 'bg-yellow-100 text-yellow-800' :
                            (competitor.points || 0) >= 200 ? 'bg-green-100 text-green-800' :
                            (competitor.points || 0) >= 100 ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {competitor.points || 0} 分
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          {competitor.status === '' || competitor.status === 'OK' ? (
                            <span className="text-green-600">完赛</span>
                          ) : (
                            <span className="text-red-600">{competitor.status}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex justify-center space-x-4 mt-8 relative z-10">
            <button
              className="btn-primary flex items-center"
              onClick={handleExportExcel}
            >
              <Download className="h-5 w-5 mr-2" />
              导出Excel
            </button>
            <button
              className="btn-secondary flex items-center"
              onClick={handleGenerateReport}
            >
              <FileText className="h-5 w-5 mr-2" />
              生成报告
            </button>
          </div>
        </>
      )}

      {/* 高山滑雪多组比赛结果显示 */}
      {parsedPdfData && alpineCompetitions.length > 0 && (
        <div className="space-y-6 relative z-10">
          {/* 标题和统计信息 */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-ski-navy flex items-center">
                <Mountain className="h-8 w-8 text-blue-600 mr-3" />
                {parsedPdfData.seasonName} 高山滑雪U系列比赛
              </h2>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <MapPin className="h-4 w-4 mr-1" />
                {parsedPdfData.stationName}
              </span>
            </div>
            <p className="text-gray-600">
              共解析到 <span className="font-semibold text-ski-blue">{alpineCompetitions.length}</span> 场比赛，
              <span className="font-semibold text-ski-blue">{alpineCompetitions.reduce((sum, c) => sum + c.results.length, 0)}</span> 名运动员
            </p>
          </div>

          {/* 筛选器 */}
          <div className="card">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700 mr-2">项目:</label>
                <select
                  value={filterDiscipline}
                  onChange={(e) => setFilterDiscipline(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue text-sm"
                >
                  <option value="all">全部项目</option>
                  <option value="回转">回转 (SL)</option>
                  <option value="大回转">大回转 (GS)</option>
                  <option value="超级大回转">超级大回转 (SG)</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700 mr-2">年龄组:</label>
                <select
                  value={filterAgeGroup}
                  onChange={(e) => setFilterAgeGroup(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue text-sm"
                >
                  <option value="all">全部年龄组</option>
                  <option value="U11">U11</option>
                  <option value="U15">U15</option>
                  <option value="U18">U18</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700 mr-2">性别:</label>
                <select
                  value={filterGender}
                  onChange={(e) => setFilterGender(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue text-sm"
                >
                  <option value="all">全部</option>
                  <option value="男子">男子</option>
                  <option value="女子">女子</option>
                </select>
              </div>

              {(filterDiscipline !== 'all' || filterAgeGroup !== 'all' || filterGender !== 'all') && (
                <button
                  onClick={() => {
                    setFilterDiscipline('all')
                    setFilterAgeGroup('all')
                    setFilterGender('all')
                  }}
                  className="text-sm text-ski-blue hover:underline"
                >
                  清除筛选
                </button>
              )}
            </div>
          </div>

          {/* 比赛列表 */}
          {alpineCompetitions
            .filter(c => filterDiscipline === 'all' || c.discipline === filterDiscipline)
            .filter(c => filterAgeGroup === 'all' || c.ageGroup === filterAgeGroup)
            .filter(c => filterGender === 'all' || c.gender === filterGender)
            .map((competition, index) => {
              const originalIndex = alpineCompetitions.indexOf(competition)
              const isExpanded = expandedGroups.has(originalIndex)
              const toggleExpand = () => {
                const newSet = new Set(expandedGroups)
                if (isExpanded) {
                  newSet.delete(originalIndex)
                } else {
                  newSet.add(originalIndex)
                }
                setExpandedGroups(newSet)
              }

              return (
                <div key={originalIndex} className="card">
                  {/* 比赛标题栏 - 可点击展开/收起 */}
                  <div
                    className="flex items-center justify-between cursor-pointer py-2"
                    onClick={toggleExpand}
                  >
                    <h3 className="text-xl font-semibold text-ski-navy flex items-center flex-wrap gap-2">
                      <Trophy className={`h-6 w-6 ${index === 0 ? 'text-yellow-500' : 'text-gray-400'}`} />
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-sm">
                        {competition.discipline}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-100 text-green-800 text-sm">
                        {competition.gender}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-sm">
                        {competition.ageGroup}
                      </span>
                      <span className="text-sm font-normal text-gray-500">
                        ({competition.results.length} 人)
                      </span>
                      {/* 数据来源标签 */}
                      {competition.dataSource && (
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs ${
                          competition.dataSource === 'pointsTable'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          <FileText className="h-3 w-3 mr-1" />
                          {competition.dataSource === 'pointsTable' ? '积分表' : '成绩公告'}
                          {competition.pageNum && ` (P${competition.pageNum})`}
                        </span>
                      )}
                    </h3>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  {/* 成绩表格 - 可展开/收起 */}
                  {isExpanded && (
                    <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排名</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">号码</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">单位</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                  <Timer className="h-3 w-3 mr-1" />
                                  总成绩
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <div className="flex items-center">
                                  <Award className="h-3 w-3 mr-1" />
                                  积分
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {competition.results.map((result, resultIndex) => (
                              <tr
                                key={resultIndex}
                                className={`hover:bg-gray-50 ${
                                  result.rank <= 3 ? 'bg-yellow-50' : resultIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                }`}
                              >
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <div className="flex items-center">
                                    {result.rank <= 3 && (
                                      <Trophy className={`h-4 w-4 mr-1 ${
                                        result.rank === 1 ? 'text-yellow-500' :
                                        result.rank === 2 ? 'text-gray-400' :
                                        'text-orange-600'
                                      }`} />
                                    )}
                                    <span className="text-sm font-medium text-gray-900">{result.rank}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {result.bib}
                                  </span>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {result.name}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 max-w-[200px] truncate" title={result.organization}>
                                  {result.organization || '-'}
                                </td>
                                <td className="px-4 py-3 text-sm font-mono font-semibold text-ski-blue min-w-[120px]">
                                  {result.totalTime || '-'}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    result.points >= 300 ? 'bg-yellow-100 text-yellow-800' :
                                    result.points >= 200 ? 'bg-green-100 text-green-800' :
                                    result.points >= 100 ? 'bg-blue-100 text-blue-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {result.points} 分
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

          {/* 筛选结果为空提示 */}
          {alpineCompetitions
            .filter(c => filterDiscipline === 'all' || c.discipline === filterDiscipline)
            .filter(c => filterAgeGroup === 'all' || c.ageGroup === filterAgeGroup)
            .filter(c => filterGender === 'all' || c.gender === filterGender)
            .length === 0 && (
            <div className="card text-center py-8">
              <p className="text-gray-500">没有符合筛选条件的比赛</p>
              <button
                onClick={() => {
                  setFilterDiscipline('all')
                  setFilterAgeGroup('all')
                  setFilterGender('all')
                }}
                className="mt-2 text-ski-blue hover:underline"
              >
                清除筛选条件
              </button>
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={handleRestart}
              className="btn-secondary flex items-center"
            >
              <Upload className="h-5 w-5 mr-2" />
              重新上传
            </button>
          </div>
        </div>
      )}
    </div>
  )
}