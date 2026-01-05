'use client';

import { useState, useEffect } from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  Building2,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  RefreshCw,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface CooperationInquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  cooperationType: string;
  message: string;
  status: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

const cooperationTypeLabels: Record<string, string> = {
  sponsor: '赛事赞助',
  venue: '场馆合作',
  training: '培训机构合作',
  media: '媒体合作',
  technology: '技术合作',
  other: '其他合作'
};

const statusLabels: Record<string, { label: string; color: string }> = {
  pending: { label: '待处理', color: 'bg-yellow-100 text-yellow-800' },
  contacted: { label: '已联系', color: 'bg-blue-100 text-blue-800' },
  completed: { label: '已完成', color: 'bg-green-100 text-green-800' },
  rejected: { label: '已拒绝', color: 'bg-red-100 text-red-800' }
};

export default function AdminCooperationPage() {
  const [inquiries, setInquiries] = useState<CooperationInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [selectedInquiry, setSelectedInquiry] = useState<CooperationInquiry | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10'
      });
      if (statusFilter) {
        params.set('status', statusFilter);
      }

      const response = await fetch(`/api/cooperation?${params}`);
      const data = await response.json();

      if (response.ok) {
        setInquiries(data.inquiries);
        setTotalPages(data.totalPages);
        setTotal(data.total);
      } else {
        setError(data.error || '加载失败');
      }
    } catch {
      setError('加载失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [page, statusFilter]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-ski-blue/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-ski-blue" />
            </div>
            <h1 className="text-2xl font-bold text-ski-navy">合作意向管理</h1>
          </div>
          <p className="text-gray-600">查看和管理用户提交的合作意向</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">状态筛选:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setStatusFilter(''); setPage(1); }}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  statusFilter === '' ? 'bg-ski-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                全部
              </button>
              {Object.entries(statusLabels).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => { setStatusFilter(key); setPage(1); }}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    statusFilter === key ? 'bg-ski-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={fetchInquiries}
              className="ml-auto flex items-center gap-1 px-3 py-1.5 text-sm text-ski-blue hover:bg-ski-blue/10 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              刷新
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">
              共 <span className="font-semibold text-ski-navy">{total}</span> 条记录
            </span>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-700">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <RefreshCw className="w-8 h-8 text-ski-blue animate-spin mx-auto mb-4" />
            <p className="text-gray-600">加载中...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">暂无合作意向记录</p>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">提交时间</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">联系人</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">公司/机构</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">合作类型</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {inquiries.map((inquiry) => (
                      <tr key={inquiry.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-gray-400" />
                            {formatDate(inquiry.createdAt)}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Phone className="w-3 h-3" />
                            {inquiry.phone}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1 text-sm text-gray-900">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            {inquiry.company}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Mail className="w-3 h-3" />
                            {inquiry.email}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {cooperationTypeLabels[inquiry.cooperationType] || inquiry.cooperationType}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            statusLabels[inquiry.status]?.color || 'bg-gray-100 text-gray-800'
                          }`}>
                            {statusLabels[inquiry.status]?.label || inquiry.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedInquiry(inquiry)}
                            className="text-ski-blue hover:text-ski-navy text-sm font-medium"
                          >
                            查看详情
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="px-4 py-2 text-sm text-gray-600">
                  第 {page} / {totalPages} 页
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Detail Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-ski-navy">合作意向详情</h3>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <XCircle className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">联系人</label>
                      <p className="font-medium">{selectedInquiry.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">公司/机构</label>
                      <p className="font-medium">{selectedInquiry.company}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">电子邮箱</label>
                      <p className="font-medium flex items-center gap-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {selectedInquiry.email}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">联系电话</label>
                      <p className="font-medium flex items-center gap-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {selectedInquiry.phone}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">合作类型</label>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {cooperationTypeLabels[selectedInquiry.cooperationType] || selectedInquiry.cooperationType}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">状态</label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        statusLabels[selectedInquiry.status]?.color || 'bg-gray-100 text-gray-800'
                      }`}>
                        {statusLabels[selectedInquiry.status]?.label || selectedInquiry.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-1">提交时间</label>
                    <p className="text-sm text-gray-600">{formatDate(selectedInquiry.createdAt)}</p>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-500 mb-1">合作意向说明</label>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 whitespace-pre-wrap">{selectedInquiry.message}</p>
                      </div>
                    </div>
                  </div>

                  {selectedInquiry.notes && (
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">备注</label>
                      <p className="text-gray-700">{selectedInquiry.notes}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t flex justify-end">
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
