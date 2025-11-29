import { NextResponse } from 'next/server';
import { testConnection } from '@/lib/db';

export async function GET() {
  try {
    // 测试数据库连接
    const dbConnected = await testConnection();

    if (!dbConnected) {
      return NextResponse.json(
        {
          status: 'unhealthy',
          database: 'disconnected',
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  } catch {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: 'Health check failed',
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
