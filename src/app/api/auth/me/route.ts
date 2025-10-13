import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { verifyToken, extractTokenFromHeader } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // 从请求头中提取token
    const authHeader = request.headers.get('Authorization');
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return NextResponse.json(
        { error: '未提供认证token' },
        { status: 401 }
      );
    }

    // 验证token
    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { error: 'Token无效或已过期' },
        { status: 401 }
      );
    }

    // 查询用户信息
    const result = await query(
      `SELECT id, username, email, name, role, phone, created_at, last_login
       FROM users
       WHERE id = $1`,
      [payload.userId]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      );
    }

    const user = result.rows[0];

    // 查询用户是否有关联的运动员信息
    const athleteResult = await query(
      `SELECT id, fis_code, nationality, birth_date, gender, discipline, team, status
       FROM athletes
       WHERE user_id = $1`,
      [user.id]
    );

    const athlete = athleteResult.rows.length > 0 ? athleteResult.rows[0] : null;

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role,
        phone: user.phone,
        createdAt: user.created_at,
        lastLogin: user.last_login,
      },
      athlete,
    });
  } catch (error) {
    console.error('获取用户信息错误:', error);
    return NextResponse.json(
      { error: '获取用户信息失败' },
      { status: 500 }
    );
  }
}
