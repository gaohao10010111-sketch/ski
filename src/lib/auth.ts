import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';

// JWT配置
const JWT_SECRET = process.env.JWT_SECRET || 'ski_points_jwt_secret_key_2024_production_change_this';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export interface JWTPayload {
  userId: number;
  email: string;
  role: string;
}

/**
 * 加密密码
 */
export async function hashPassword(password: string): Promise<string> {
  const rounds = parseInt(process.env.BCRYPT_ROUNDS || '10');
  return bcrypt.hash(password, rounds);
}

/**
 * 验证密码
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * 生成JWT Token
 */
export function generateToken(payload: JWTPayload): string {
  return jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN } as SignOptions
  );
}

/**
 * 验证JWT Token
 */
export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch {
    return null;
  }
}

/**
 * 从Authorization header中提取token
 */
export function extractTokenFromHeader(authHeader: string | null): string | null {
  if (!authHeader) return null;

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }

  return parts[1];
}

/**
 * 验证用户名格式
 */
export function validateUsername(username: string): {
  valid: boolean;
  error?: string;
} {
  if (!username || username.length < 3) {
    return { valid: false, error: '用户名至少3个字符' };
  }

  if (username.length > 20) {
    return { valid: false, error: '用户名最多20个字符' };
  }

  if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(username)) {
    return {
      valid: false,
      error: '用户名只能包含字母、数字、下划线和中文',
    };
  }

  return { valid: true };
}

/**
 * 验证邮箱格式
 */
export function validateEmail(email: string): {
  valid: boolean;
  error?: string;
} {
  if (!email) {
    return { valid: false, error: '邮箱不能为空' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: '邮箱格式不正确' };
  }

  return { valid: true };
}

/**
 * 验证密码强度
 */
export function validatePassword(password: string): {
  valid: boolean;
  error?: string;
  strength?: 'weak' | 'medium' | 'strong';
} {
  if (!password) {
    return { valid: false, error: '密码不能为空' };
  }

  if (password.length < 6) {
    return { valid: false, error: '密码至少6个字符' };
  }

  if (password.length > 50) {
    return { valid: false, error: '密码最多50个字符' };
  }

  // 计算密码强度
  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  const criteriaCount = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  if (password.length >= 8 && criteriaCount >= 3) {
    strength = 'strong';
  } else if (password.length >= 6 && criteriaCount >= 2) {
    strength = 'medium';
  }

  return { valid: true, strength };
}

const authUtils = {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  extractTokenFromHeader,
  validateUsername,
  validateEmail,
  validatePassword,
};

export default authUtils;
