'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import { getImagePath } from '@/utils/paths'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [touched, setTouched] = useState(false)

  const validateEmail = (email: string): string => {
    if (!email) return '请输入邮箱地址'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return '请输入有效的邮箱地址'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)

    const validationError = validateEmail(email)
    if (validationError) {
      setError(validationError)
      return
    }

    setError('')
    setIsLoading(true)

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500))

      // 模拟成功
      setIsSuccess(true)
    } catch {
      setError('发送失败，请稍后重试')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (touched) {
      setError(validateEmail(e.target.value))
    }
  }

  const handleBlur = () => {
    setTouched(true)
    setError(validateEmail(email))
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">邮件已发送</h2>
            <p className="text-gray-600 mb-6">
              我们已向 <span className="font-medium text-ski-blue">{email}</span> 发送了密码重置链接。
              请查收邮件并按照说明操作。
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-700">
                如果几分钟内未收到邮件，请检查垃圾邮件文件夹。
              </p>
            </div>
            <div className="space-y-3">
              <Link
                href="/login"
                className="block w-full py-3 px-4 bg-ski-blue text-white rounded-lg hover:bg-ski-blue/90 transition-colors font-medium"
              >
                返回登录
              </Link>
              <button
                onClick={() => {
                  setIsSuccess(false)
                  setEmail('')
                  setTouched(false)
                }}
                className="block w-full py-3 px-4 text-ski-blue hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                使用其他邮箱
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo区域 */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <img
              src={getImagePath('/images/logo.png')}
              alt="中国滑雪积分系统"
              className="h-16 w-auto mx-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            找回密码
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            输入您的注册邮箱，我们将发送密码重置链接
          </p>
        </div>

        {/* 表单区域 */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 邮箱输入 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                邮箱地址
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 ${error && touched ? 'text-red-400' : 'text-gray-400'}`} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-ski-blue transition-colors ${
                    error && touched
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-300'
                  }`}
                  placeholder="请输入您的注册邮箱"
                  disabled={isLoading}
                />
              </div>
              {error && touched && (
                <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* 提交按钮 */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-all ${
                isLoading
                  ? 'bg-ski-blue/70 cursor-not-allowed'
                  : 'bg-ski-blue hover:bg-ski-blue/90 hover:shadow-md'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  发送中...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  发送重置链接
                </>
              )}
            </button>
          </form>

          {/* 返回登录 */}
          <div className="mt-6">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 text-sm text-ski-blue hover:text-ski-blue/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回登录
            </Link>
          </div>
        </div>

        {/* 帮助信息 */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            还没有账号？{' '}
            <Link href="/register" className="font-medium text-ski-blue hover:text-ski-blue/80">
              立即注册
            </Link>
          </p>
        </div>

        {/* 安全提示 */}
        <div className="bg-white/60 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">安全提示</h3>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• 重置链接有效期为24小时</li>
            <li>• 如果您没有请求重置密码，请忽略该邮件</li>
            <li>• 请勿将重置链接分享给他人</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
