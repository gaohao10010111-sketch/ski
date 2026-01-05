import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: 提交合作意向
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, cooperationType, message } = body;

    // 验证必填字段
    if (!name || !company || !email || !phone || !cooperationType || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '请输入有效的电子邮箱' },
        { status: 400 }
      );
    }

    // 创建合作意向记录
    const inquiry = await prisma.cooperationInquiry.create({
      data: {
        name,
        company,
        email,
        phone,
        cooperationType,
        message,
        status: 'pending'
      }
    });

    return NextResponse.json({
      success: true,
      message: '合作意向提交成功',
      id: inquiry.id
    });
  } catch (error) {
    console.error('提交合作意向失败:', error);
    return NextResponse.json(
      { error: '提交失败，请稍后重试' },
      { status: 500 }
    );
  }
}

// GET: 获取合作意向列表（管理后台用）
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where = status ? { status } : {};

    const [inquiries, total] = await Promise.all([
      prisma.cooperationInquiry.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      }),
      prisma.cooperationInquiry.count({ where })
    ]);

    return NextResponse.json({
      inquiries,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('获取合作意向列表失败:', error);
    return NextResponse.json(
      { error: '获取失败' },
      { status: 500 }
    );
  }
}
