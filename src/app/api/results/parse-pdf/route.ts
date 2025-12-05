import { NextRequest, NextResponse } from 'next/server'
import { PDFResultParser } from '@/utils/pdfParser'

// 动态导入pdf-parse以避免SSR问题
async function extractTextFromPDF(buffer: Buffer): Promise<{ text: string; numPages: number }> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const pdfParse = require('pdf-parse')
  const data = await pdfParse(buffer)
  return {
    text: data.text,
    numPages: data.numpages
  }
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
    const buffer = Buffer.from(arrayBuffer)

    // 使用pdf-parse提取文本
    const { text, numPages } = await extractTextFromPDF(buffer)

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
