'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, X, Trophy, Medal } from 'lucide-react'
import { searchAthletes, getBadgeDataFromSearch, type SearchResultItem, type BadgeCardData } from '@/lib/badgeData'

interface AthleteSearchProps {
  dataType: 'season' | 'race'
  onSelect: (data: BadgeCardData) => void
}

export default function AthleteSearch({ dataType, onSelect }: AthleteSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResultItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  // Debounced search
  const doSearch = useCallback((q: string, dt: 'season' | 'race') => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (!q.trim()) {
      setResults([])
      setIsOpen(false)
      setIsSearching(false)
      return
    }
    setIsSearching(true)
    debounceRef.current = setTimeout(() => {
      const items = searchAthletes(q, dt)
      setResults(items)
      setIsOpen(items.length > 0)
      setIsSearching(false)
    }, 300)
  }, [])

  useEffect(() => {
    doSearch(query, dataType)
  }, [query, dataType, doSearch])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSelect = (item: SearchResultItem) => {
    const data = getBadgeDataFromSearch(item)
    if (data) {
      onSelect(data)
      setQuery(item.athleteName)
      setIsOpen(false)
    }
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          placeholder="输入运动员姓名搜索..."
          className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Loading indicator */}
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-center text-gray-500 text-sm z-50">
          搜索中...
        </div>
      )}

      {/* Results dropdown */}
      {isOpen && !isSearching && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
          {results.map((item, idx) => (
            <button
              key={`${item.athleteName}-${item.discipline}-${item.ageGroup}-${item.competitionName || ''}-${idx}`}
              onClick={() => handleSelect(item)}
              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors text-left border-b border-gray-50 last:border-b-0"
            >
              {/* Rank icon */}
              <div className="flex-shrink-0">
                {item.rank <= 3 ? (
                  <Medal className={`h-5 w-5 ${
                    item.rank === 1 ? 'text-yellow-500' :
                    item.rank === 2 ? 'text-gray-400' :
                    'text-orange-400'
                  }`} />
                ) : (
                  <Trophy className="h-5 w-5 text-blue-400" />
                )}
              </div>

              {/* Athlete info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{item.athleteName}</span>
                  <span className="text-xs text-gray-500 truncate">{item.team}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">
                    {item.discipline}
                  </span>
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                    {item.ageGroup}
                  </span>
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                    {item.gender}
                  </span>
                  {item.dataType === 'race' && item.competitionName && (
                    <span className="text-[10px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded truncate max-w-[200px]">
                      {item.competitionName.replace(/2025-2026赛季/, '').replace(/U系列比赛/, '')}
                    </span>
                  )}
                </div>
              </div>

              {/* Points */}
              <div className="flex-shrink-0 text-right">
                <div className="text-sm font-bold text-gray-900">{item.points}分</div>
                <div className="text-xs text-gray-500">第{item.rank}名</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No results */}
      {isOpen && !isSearching && results.length === 0 && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-center text-gray-500 text-sm z-50">
          未找到匹配的运动员
        </div>
      )}
    </div>
  )
}
