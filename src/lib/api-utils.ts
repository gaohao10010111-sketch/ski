import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

// ========== 响应类型 ==========

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// ========== 成功响应 ==========

export function successResponse<T>(data: T, status = 200): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    { success: true, data },
    { status }
  );
}

export function paginatedResponse<T>(
  data: T[],
  pagination: { page: number; pageSize: number; total: number }
): NextResponse<ApiResponse<T[]>> {
  return NextResponse.json({
    success: true,
    data,
    meta: {
      page: pagination.page,
      pageSize: pagination.pageSize,
      total: pagination.total,
      totalPages: Math.ceil(pagination.total / pagination.pageSize),
    },
  });
}

export function createdResponse<T>(data: T): NextResponse<ApiResponse<T>> {
  return successResponse(data, 201);
}

export function noContentResponse(): NextResponse {
  return new NextResponse(null, { status: 204 });
}

// ========== 错误响应 ==========

export function errorResponse(
  code: string,
  message: string,
  status = 500,
  details?: unknown
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: { code, message, details },
    },
    { status }
  );
}

export function badRequestResponse(message: string, details?: unknown): NextResponse<ApiResponse> {
  return errorResponse('BAD_REQUEST', message, 400, details);
}

export function unauthorizedResponse(message = '未授权访问'): NextResponse<ApiResponse> {
  return errorResponse('UNAUTHORIZED', message, 401);
}

export function forbiddenResponse(message = '禁止访问'): NextResponse<ApiResponse> {
  return errorResponse('FORBIDDEN', message, 403);
}

export function notFoundResponse(message = '资源不存在'): NextResponse<ApiResponse> {
  return errorResponse('NOT_FOUND', message, 404);
}

export function conflictResponse(message: string): NextResponse<ApiResponse> {
  return errorResponse('CONFLICT', message, 409);
}

export function validationErrorResponse(error: ZodError): NextResponse<ApiResponse> {
  const details = error.issues.map((issue) => ({
    field: issue.path.join('.'),
    message: issue.message,
  }));
  return errorResponse('VALIDATION_ERROR', '输入验证失败', 400, details);
}

export function internalErrorResponse(message = '服务器内部错误'): NextResponse<ApiResponse> {
  return errorResponse('INTERNAL_ERROR', message, 500);
}

// ========== 辅助函数 ==========

export function parseSearchParams(searchParams: URLSearchParams): Record<string, string> {
  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

export function getCurrentSeason(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  // 赛季从每年7月开始
  if (month >= 7) {
    return `${year}-${year + 1}`;
  }
  return `${year - 1}-${year}`;
}

// ========== 权限检查（简化版） ==========

export function isAdmin(role?: string): boolean {
  return role === 'ADMIN';
}

export function requireAdmin(role?: string): void {
  if (!isAdmin(role)) {
    throw new Error('FORBIDDEN');
  }
}
