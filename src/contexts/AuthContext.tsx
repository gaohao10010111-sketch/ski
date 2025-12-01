'use client'

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { User, UserRole, UserStatus, AuthState, LoginRequest, RegisterRequest, Resource, Action } from '@/types/auth'

// 权限规则配置 - 中国高山滑雪积分管理平台
const PERMISSIONS_MAP: Record<UserRole, Record<Resource, Action[]>> = {
  [UserRole.PUBLIC]: {
    // 公开内容：未登录用户只能查看基础信息
    [Resource.HOME]: [Action.READ],
    [Resource.ABOUT]: [Action.READ],
    [Resource.NEWS]: [Action.READ],
    [Resource.CONTACT]: [Action.READ],

    // 积分体系介绍：公开展示，但不能查询具体积分
    [Resource.RULES_POINTS]: [Action.READ],

    // 赛事信息：公开展示赛程，但不能报名或管理
    [Resource.COMPETITIONS]: [Action.READ],
    [Resource.COMPETITIONS_SCHEDULE]: [Action.READ],
    [Resource.RESULTS_ANNOUNCEMENT]: [Action.READ],

    // 会员专享功能：不允许访问
    // [Resource.PROFILE]: 需要登录
    // [Resource.MY_POINTS]: 需要登录
    // [Resource.POINTS_QUERY]: 需要登录
    // [Resource.POINTS_RANKING]: 需要登录
    // [Resource.POINTS_CALCULATOR]: 需要登录
    // [Resource.POINTS_TRENDS]: 需要登录
    // [Resource.REGISTRATION]: 需要登录
    // [Resource.RESULTS_IMPORT]: 需要登录
    // [Resource.EVENTS]: 需要登录

    // 管理员功能：完全不允许访问
    // [Resource.ADMIN_DASHBOARD]: 管理员专用
    // [Resource.POINTS_CALCULATION]: 管理员专用
    // [Resource.USER_MANAGEMENT]: 管理员专用
    // [Resource.STATISTICS]: 管理员专用
    // [Resource.SYSTEM_CONFIG]: 管理员专用
  } as Record<Resource, Action[]>,

  [UserRole.ATHLETE]: {
    // 公众信息
    [Resource.HOME]: [Action.READ],
    [Resource.ABOUT]: [Action.READ],
    [Resource.NEWS]: [Action.READ],
    [Resource.CONTACT]: [Action.READ],

    // 会员专享功能
    [Resource.PROFILE]: [Action.READ, Action.UPDATE],
    [Resource.MY_POINTS]: [Action.READ],
    [Resource.POINTS_QUERY]: [Action.READ],
    [Resource.POINTS_RANKING]: [Action.READ],
    [Resource.POINTS_CALCULATOR]: [Action.READ],
    [Resource.POINTS_TRENDS]: [Action.READ],
    [Resource.RULES_POINTS]: [Action.READ],

    // 赛事功能
    [Resource.COMPETITIONS]: [Action.READ],
    [Resource.COMPETITIONS_SCHEDULE]: [Action.READ],
    [Resource.REGISTRATION]: [Action.READ, Action.WRITE],
    [Resource.EVENTS]: [Action.READ, Action.WRITE],
  } as Record<Resource, Action[]>,

  [UserRole.COACH]: {
    // 公众信息
    [Resource.HOME]: [Action.READ],
    [Resource.ABOUT]: [Action.READ],
    [Resource.NEWS]: [Action.READ],
    [Resource.CONTACT]: [Action.READ],

    // 会员专享功能
    [Resource.PROFILE]: [Action.READ, Action.UPDATE],
    [Resource.MY_POINTS]: [Action.READ],
    [Resource.POINTS_QUERY]: [Action.READ],
    [Resource.POINTS_RANKING]: [Action.READ],
    [Resource.POINTS_CALCULATOR]: [Action.READ],
    [Resource.POINTS_TRENDS]: [Action.READ],
    [Resource.RULES_POINTS]: [Action.READ],

    // 赛事功能 (教练权限更高)
    [Resource.COMPETITIONS]: [Action.READ],
    [Resource.COMPETITIONS_SCHEDULE]: [Action.READ],
    [Resource.REGISTRATION]: [Action.READ, Action.WRITE],
    [Resource.EVENTS]: [Action.READ, Action.WRITE],
  } as Record<Resource, Action[]>,

  [UserRole.ADMIN]: {
    // 公众信息
    [Resource.HOME]: [Action.READ],
    [Resource.ABOUT]: [Action.READ, Action.UPDATE],
    [Resource.NEWS]: [Action.READ, Action.WRITE, Action.UPDATE, Action.DELETE],
    [Resource.CONTACT]: [Action.READ, Action.UPDATE],

    // 会员功能
    [Resource.PROFILE]: [Action.READ, Action.UPDATE],
    [Resource.MY_POINTS]: [Action.READ],
    [Resource.POINTS_QUERY]: [Action.READ],
    [Resource.POINTS_RANKING]: [Action.READ],
    [Resource.POINTS_CALCULATOR]: [Action.READ],
    [Resource.POINTS_TRENDS]: [Action.READ],
    [Resource.RULES_POINTS]: [Action.READ, Action.UPDATE],

    // 赛事管理 (完全权限)
    [Resource.COMPETITIONS]: [Action.READ, Action.WRITE, Action.UPDATE, Action.DELETE],
    [Resource.COMPETITIONS_SCHEDULE]: [Action.READ, Action.WRITE, Action.UPDATE],
    [Resource.RESULTS_IMPORT]: [Action.READ, Action.WRITE],
    [Resource.RESULTS_ANNOUNCEMENT]: [Action.READ, Action.WRITE],
    [Resource.REGISTRATION]: [Action.READ, Action.WRITE, Action.UPDATE, Action.DELETE],
    [Resource.EVENTS]: [Action.READ, Action.WRITE, Action.UPDATE, Action.DELETE],

    // 管理员专享
    [Resource.ADMIN_DASHBOARD]: [Action.READ],
    [Resource.POINTS_CALCULATION]: [Action.READ, Action.WRITE, Action.UPDATE],
    [Resource.USER_MANAGEMENT]: [Action.READ, Action.WRITE, Action.UPDATE, Action.DELETE],
    [Resource.STATISTICS]: [Action.READ],
    [Resource.SYSTEM_CONFIG]: [Action.READ, Action.UPDATE],
  } as Record<Resource, Action[]>
}

// 认证状态管理
type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_ERROR' }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
}

interface AuthContextType extends AuthState {
  login: (credentials: LoginRequest) => Promise<void>
  register: (data: RegisterRequest) => Promise<void>
  logout: () => void
  hasPermission: (resource: Resource, action: Action) => boolean
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // 权限检查函数
  const hasPermission = (resource: Resource, action: Action): boolean => {
    if (!state.user) {
      // 未登录用户默认为公众角色
      const publicPermissions = PERMISSIONS_MAP[UserRole.PUBLIC]
      return publicPermissions[resource]?.includes(action) || false
    }

    const userPermissions = PERMISSIONS_MAP[state.user.role]
    return userPermissions[resource]?.includes(action) || false
  }

  // 登录函数
  const login = async (credentials: LoginRequest): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true })

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: credentials.email, // API支持用户名或邮箱登录
          password: credentials.password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '登录失败')
      }

      // 将API返回的用户角色映射到前端枚举
      const roleMap: Record<string, UserRole> = {
        'USER': UserRole.ATHLETE, // 普通用户默认为运动员角色
        'ATHLETE': UserRole.ATHLETE,
        'COACH': UserRole.COACH,
        'ADMIN': UserRole.ADMIN
      }

      const user: User = {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        name: data.user.name,
        role: roleMap[data.user.role] || UserRole.ATHLETE,
        status: UserStatus.ACTIVE,
        createdAt: new Date(),
        lastLoginAt: new Date()
      }

      // 保存token
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem('auth_token', data.token)
          localStorage.setItem('auth_user', JSON.stringify(user))
        }
      } catch { /* localStorage not available */ }

      dispatch({ type: 'LOGIN_SUCCESS', payload: user })
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error instanceof Error ? error.message : '登录失败' })
      throw error
    }
  }

  // 注册函数
  const register = async (registerData: RegisterRequest): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true })

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: registerData.username,
          email: registerData.email,
          password: registerData.password,
          name: registerData.realName || registerData.username
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '注册失败')
      }

      // 将API返回的用户角色映射到前端枚举
      const roleMap: Record<string, UserRole> = {
        'USER': UserRole.ATHLETE,
        'ATHLETE': UserRole.ATHLETE,
        'COACH': UserRole.COACH,
        'ADMIN': UserRole.ADMIN
      }

      const user: User = {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        name: data.user.name,
        role: roleMap[data.user.role] || UserRole.ATHLETE,
        status: UserStatus.ACTIVE,
        createdAt: new Date()
      }

      // 保存token
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem('auth_token', data.token)
          localStorage.setItem('auth_user', JSON.stringify(user))
        }
      } catch { /* localStorage not available */ }

      dispatch({ type: 'LOGIN_SUCCESS', payload: user })
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error instanceof Error ? error.message : '注册失败' })
      throw error
    }
  }

  // 登出函数
  const logout = (): void => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_user')
        localStorage.removeItem('auth_token')
      }
    } catch { /* localStorage not available */ }
    dispatch({ type: 'LOGOUT' })
  }

  // 清除错误
  const clearError = (): void => {
    dispatch({ type: 'CLEAR_ERROR' })
  }

  // 初始化时检查本地存储
  useEffect(() => {
    // 检查是否在浏览器环境
    if (typeof window !== 'undefined') {
      try {
        const savedUser = localStorage.getItem('auth_user')
        if (savedUser) {
          try {
            const user = JSON.parse(savedUser)
            dispatch({ type: 'LOGIN_SUCCESS', payload: user })
          } catch {
            localStorage.removeItem('auth_user')
          }
        }
      } catch { /* localStorage not available */ }
    }
  }, [])

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    hasPermission,
    clearError
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
