import { NextRequest, NextResponse } from 'next/server'
import { PDFResultParser } from '@/utils/pdfParser'
import * as pdfjs from 'pdfjs-dist'

// 设置PDF.js worker
if (typeof window === 'undefined') {
  // 服务端环境，禁用worker
  pdfjs.GlobalWorkerOptions.workerSrc = ''
}

// 从PDF文档中提取文本
async function extractTextFromPDF(arrayBuffer: ArrayBuffer): Promise<{ text: string; numPages: number }> {
  const uint8Array = new Uint8Array(arrayBuffer)
  const loadingTask = pdfjs.getDocument({
    data: uint8Array,
    useSystemFonts: true,
    standardFontDataUrl: undefined
  })

  const pdf = await loadingTask.promise
  const numPages = pdf.numPages
  let fullText = ''

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    const pageText = textContent.items
      .map((item) => ('str' in item ? item.str : ''))
      .join(' ')
    fullText += pageText + '\n'
  }

  return { text: fullText, numPages }
}

// PDF解析API - 处理上传的PDF文件并返回解析后的比赛成绩
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { error: '未提供PDF文件' },
        { status: 400 }
      )
    }

    // 验证文件类型
    if (!file.type.includes('pdf') && !file.name.endsWith('.pdf')) {
      return NextResponse.json(
        { error: '请上传PDF格式的文件' },
        { status: 400 }
      )
    }

    // 验证文件大小 (最大20MB)
    const MAX_SIZE = 20 * 1024 * 1024
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: '文件大小超过限制 (最大20MB)' },
        { status: 400 }
      )
    }

    // 读取文件内容
    const arrayBuffer = await file.arrayBuffer()

    // 使用pdfjs-dist提取文本
    const { text, numPages } = await extractTextFromPDF(arrayBuffer)

    // 使用我们的解析器处理文本
    const parsedData = PDFResultParser.parseResults(text)

    // 转换为系统通用格式
    const competitionData = PDFResultParser.toCompetitionData(parsedData)

    return NextResponse.json({
      success: true,
      message: `成功解析 ${competitionData.competitors.length} 名运动员的成绩`,
      data: competitionData,
      rawParsed: parsedData,
      pdfInfo: {
        pages: numPages,
        textLength: text.length
      }
    })

  } catch (error) {
    console.error('PDF解析错误:', error)
    return NextResponse.json(
      {
        error: 'PDF解析失败',
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}

// 支持预检请求
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
