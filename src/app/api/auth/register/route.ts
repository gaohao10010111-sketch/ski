import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import {
  hashPassword,
  generateToken,
  validateUsername,
  validateEmail,
  validatePassword,
} from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password, name } = body;

    // 验证输入
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      return NextResponse.json(
        { error: usernameValidation.error },
        { status: 400 }
      );
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.error },
        { status: 400 }
      );
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.error },
        { status: 400 }
      );
    }

    // 检查用户名是否已存在
    const existingUsername = await query(
      'SELECT id FROM users WHERE username = $1',
      [username]
    );

    if (existingUsername.rows.length > 0) {
      return NextResponse.json(
        { error: '用户名已被使用' },
        { status: 409 }
      );
    }

    // 检查邮箱是否已存在
    const existingEmail = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingEmail.rows.length > 0) {
      return NextResponse.json(
        { error: '邮箱已被注册' },
        { status: 409 }
      );
    }

    // 加密密码
    const hashedPassword = await hashPassword(password);

    // 创建用户
    const result = await query(
      `INSERT INTO users (username, email, password_hash, name, role, status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
       RETURNING id, username, email, name, role, created_at`,
      [username, email, hashedPassword, name || username, 'USER', 'ACTIVE']
    );

    const user = result.rows[0];

    // 生成JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // 记录审计日志
    await query(
      `INSERT INTO audit_logs (user_id, action, entity_type, entity_id, new_value, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW())`,
      [
        user.id,
        'user_register',
        'users',
        user.id,
        JSON.stringify({
          username: user.username,
          email: user.email,
        }),
      ]
    );

    return NextResponse.json(
      {
        message: '注册成功',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          role: user.role,
        },
        token,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: '注册失败，请稍后重试' },
      { status: 500 }
    );
  }
}
