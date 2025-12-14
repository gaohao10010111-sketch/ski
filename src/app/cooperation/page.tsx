'use client';

import { useState } from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  Building2,
  Send,
  CheckCircle,
  Loader2,
  Users,
  Trophy,
  Target,
  Star
} from 'lucide-react';
import GlobalNavigation from '@/components/GlobalNavigation';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  cooperationType: string;
  message: string;
}

export default function CooperationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    cooperationType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cooperationTypes = [
    { value: 'sponsor', label: '赛事赞助' },
    { value: 'venue', label: '场馆合作' },
    { value: 'training', label: '培训机构合作' },
    { value: 'media', label: '媒体合作' },
    { value: 'technology', label: '技术合作' },
    { value: 'other', label: '其他合作' }
  ];

  const cooperationHighlights = [
    {
      icon: Users,
      title: '覆盖全国运动员',
      description: '平台服务全国青少年滑雪运动员，影响力广泛'
    },
    {
      icon: Trophy,
      title: '官方赛事数据',
      description: '提供权威的积分排名和比赛成绩数据服务'
    },
    {
      icon: Target,
      title: '精准目标群体',
      description: '直接触达滑雪爱好者、家长和专业教练群体'
    },
    {
      icon: Star,
      title: '品牌曝光机会',
      description: '在赛事报道和平台展示中获得品牌露出机会'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // 重置表单
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      cooperationType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ski-navy via-ski-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">合作咨询</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              欢迎各类机构与我们建立合作关系，共同推动中国青少年滑雪运动的发展
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cooperationHighlights.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ski-blue/10 text-ski-blue mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-ski-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-ski-navy mb-6 text-center">提交合作意向</h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">提交成功！</h3>
                <p className="text-gray-600 mb-6">
                  我们已收到您的合作意向，工作人员将在3个工作日内与您联系。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-ski-blue text-white rounded-lg hover:bg-ski-navy transition-colors"
                >
                  继续提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      联系人姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司/机构名称 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                      placeholder="请输入公司或机构名称"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      电子邮箱 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent"
                        placeholder="请输入联系电话"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="cooperationType" className="block text-sm font-medium text-gray-700 mb-1">
                    合作类型 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="cooperationType"
                      name="cooperationType"
                      value={formData.cooperationType}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">请选择合作类型</option>
                      {cooperationTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    合作意向说明 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ski-blue focus:border-transparent resize-none"
                    placeholder="请详细描述您的合作意向和期望..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-ski-blue text-white rounded-lg hover:bg-ski-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      提交中...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      提交合作意向
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-ski-navy mb-6">其他联系方式</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-5 h-5 text-ski-blue" />
              <span>cooperation@cnskipoints.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-5 h-5 text-ski-blue" />
              <span>400-XXX-XXXX</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
