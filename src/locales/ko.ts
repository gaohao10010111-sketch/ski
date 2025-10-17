// Korean language pack
import type { TranslationKeys } from './zh';

export const ko: Partial<TranslationKeys> = {
  // 공통
  common: {
    loading: '로딩 중...',
    error: '오류',
    success: '성공',
    cancel: '취소',
    confirm: '확인',
    save: '저장',
    edit: '편집',
    delete: '삭제',
    search: '검색',
    filter: '필터',
    export: '내보내기',
    import: '가져오기',
    back: '뒤로',
    next: '다음',
    previous: '이전',
    submit: '제출',
    reset: '재설정',
    home: '홈',
    language: '언어',
    login: '로그인',
    logout: '로그아웃',
    register: '회원가입',
    profile: '프로필',
    viewDetails: '세부정보 보기',
    viewFullSchedule: '전체 일정 보기 →',
    viewFullRankings: '전체 랭킹 보기 →',
    readMore: '더 읽기'
  },

  // 내비게이션
  navigation: {
    title: '중국 스키 포인트 시스템',
    titleShort: 'CSPS',

    // 종목 전환기
    disciplines: '종목',
    alpine: '알파인 스키',
    snowboardSlopestyle: '스노보드 슬로프스타일',
    snowboardParallel: '스노보드 패러렐',
    freestyleSlopestyle: '프리스타일 슬로프스타일',

    // 글로벌 내비게이션
    my: '마이',
    docs: '자료',
    about: '정보',

    // 종목별 내비게이션
    points: '포인트 관리',
    events: '대회 관리',
    athletes: '선수',

    // 서브메뉴
    submenus: {
      // 포인트 관리 서브메뉴
      pointsCalculator: '포인트 계산기',
      pointsRankings: '포인트 랭킹',
      pointsTrends: '포인트 추이',

      // 대회 관리 서브메뉴
      eventsSchedule: '대회 일정',
      eventsRegister: '온라인 등록',
      eventsResults: '결과 조회',
      eventsStats: '데이터 통계',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // 선수 서브메뉴
      athletesList: '선수 명단',
      athletesProfile: '선수 프로필',
      athletesStats: '선수 통계',

      // 자료 서브메뉴
      docsPointsRules: '포인트 규칙',
      docsCompetitionRules: '경기 규칙',
      docsVenueStandards: '경기장 기준',
      docsGuide: '사용 가이드',

      // 마이 서브메뉴
      myProfile: '개인 센터',
      myPoints: '내 포인트',
      myRegistrations: '내 등록',
      myAthlete: '선수 프로필',
      myHistory: '성적 이력',

      // More features
      moreFeatures: 'More'
    },
    docs: {
      competitionRules: {
        title: '경기 기술 규정',
        description: '스키 경기 기술 규정과 심판 기준',
        backLabel: '지식 센터로 돌아가기'
      },
      pointsRules: {
        title: '포인트 규정',
        description: '중국 스키 포인트 계산 규칙 문서',
        backLabel: '지식 센터로 돌아가기'
      },
      venueStandards: {
        title: '경기장 기준',
        description: '경기장 시설 요구 사항과 안전 기준',
        backLabel: '지식 센터로 돌아가기'
      },
      fisRules: {
        title: 'FIS 국제 규정',
        description: '국제스키연맹 공식 규정',
        backLabel: '지식 센터로 돌아가기'
      },
      guide: {
        title: '플랫폼 가이드',
        description: '시스템 기능 사용 방법과 FAQ',
        backLabel: '지식 센터로 돌아가기'
      }
    }
  },

  // 브레드크럼 내비게이션
  breadcrumb: {
    home: '홈',
    disciplines: '스키 종목',
    alpine: '알파인 스키',
    snowboardSlopestyle: '스노보드 슬로프스타일/빅에어',
    snowboardParallel: '스노보드 패러렐',
    freeskiSlopestyle: '프리스타일 슬로프스타일/빅에어',
    points: '포인트 센터',
    events: '대회',
    my: '마이페이지',
    docs: '지식 베이스',
    about: '시스템 소개'
  },

  // 알파인 스키 페이지
  alpine: {
    title: '알파인 스키',
    subtitle: 'Alpine Skiing',
    projectLabel: '알파인',

    hero: {
      slide1: {
        title: '2024 전국 선수권 대회 하이라이트',
        subtitle: '중국 알파인 스키의 영광스러운 순간 목격'
      },
      slide2: {
        title: '포인트 시스템 업그레이드',
        subtitle: 'v4.0 규칙 기반 더 정확한 포인트 계산'
      },
      slide3: {
        title: '겨울 훈련 캠프 등록',
        subtitle: '전문 코칭 팀이 기술 향상 지원'
      }
    },

    quickAccess: {
      results: { title: '대회 결과', nameEn: 'Results' },
      rankings: { title: '포인트 랭킹', nameEn: 'Rankings' },
      schedule: { title: '대회 캘린더', nameEn: 'Calendar' },
      videos: { title: '비디오 센터', nameEn: 'Videos' },
      athletes: { title: '선수 명단', nameEn: 'Athletes' },
      documents: { title: '규칙 문서', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '예정된 일정'
    },

    latestNews: {
      title: '최신 뉴스'
    },

    topAthletes: {
      title: '포인트 랭킹'
    }
  },

  // 프리스타일 슬로프스타일 페이지
  freestyleSlopestyle: {
    title: '프리스타일 슬로프스타일',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: '프리스타일 SS',

    hero: {
      slide1: {
        title: '2024 전국 프리스타일 슬로프스타일 선수권',
        subtitle: '중국 프리스타일 스키의 극한 돌파 목격'
      },
      slide2: {
        title: '360 포인트 단계 시스템',
        subtitle: '난이도 계수 기반 공정한 채점 메커니즘'
      },
      slide3: {
        title: 'U 시리즈 청소년 육성 프로그램',
        subtitle: 'U12/U15/U18 인재 육성 시스템'
      }
    },

    quickAccess: {
      results: { title: '대회 결과', nameEn: 'Results' },
      rankings: { title: '포인트 랭킹', nameEn: 'Rankings' },
      schedule: { title: '대회 캘린더', nameEn: 'Calendar' },
      videos: { title: '비디오 센터', nameEn: 'Videos' },
      athletes: { title: '선수 명단', nameEn: 'Athletes' },
      documents: { title: '규칙 문서', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '예정된 일정'
    },

    latestNews: {
      title: '최신 뉴스'
    },

    topAthletes: {
      title: '포인트 랭킹'
    }
  },

  // 스노보드 슬로프스타일 페이지
  snowboardSlopestyle: {
    title: '스노보드 슬로프스타일',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: '스노보드 SS',

    hero: {
      slide1: {
        title: '2024 전국 스노보드 슬로프스타일 선수권',
        subtitle: '중국 스노보드의 흥미진진한 순간 목격'
      },
      slide2: {
        title: '360 포인트 단계 시스템',
        subtitle: '국제 표준 기반 포인트 계산 규칙'
      },
      slide3: {
        title: 'U 시리즈 청소년 육성 프로그램',
        subtitle: 'U12/U15/U18 3단계 육성 시스템'
      }
    },

    quickAccess: {
      results: { title: '대회 결과', nameEn: 'Results' },
      rankings: { title: '포인트 랭킹', nameEn: 'Rankings' },
      schedule: { title: '대회 캘린더', nameEn: 'Calendar' },
      videos: { title: '비디오 센터', nameEn: 'Videos' },
      athletes: { title: '선수 명단', nameEn: 'Athletes' },
      documents: { title: '규칙 문서', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '예정된 일정'
    },

    latestNews: {
      title: '최신 뉴스'
    },

    topAthletes: {
      title: '포인트 랭킹'
    }
  },

  // 스노보드 패러렐 페이지
  snowboardParallel: {
    title: '스노보드 패러렐',
    subtitle: 'Snowboard Parallel',
    projectLabel: '스노보드 패러렐',

    hero: {
      slide1: {
        title: '2024 전국 스노보드 패러렐 선수권',
        subtitle: '속도와 기술의 완벽한 조합'
      },
      slide2: {
        title: '토너먼트 포인트 시스템',
        subtitle: '대결 순위 기반 공정한 포인트 계산'
      },
      slide3: {
        title: '엘리트 선수 육성 프로그램',
        subtitle: '레이싱 레벨 향상 및 국제 대회 도전'
      }
    },

    quickAccess: {
      results: { title: '대회 결과', nameEn: 'Results' },
      rankings: { title: '포인트 랭킹', nameEn: 'Rankings' },
      schedule: { title: '대회 캘린더', nameEn: 'Calendar' },
      videos: { title: '비디오 센터', nameEn: 'Videos' },
      athletes: { title: '선수 명단', nameEn: 'Athletes' },
      documents: { title: '규칙 문서', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '예정된 일정'
    },

    latestNews: {
      title: '최신 뉴스'
    },

    topAthletes: {
      title: '포인트 랭킹'
    }
  },

  // 언어 선택기
  languageSelector: {
    title: '언어 선택',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // 곧 공개 컴포넌트
  comingSoon: {
    title: '곧 공개',
    description: '이 기능은 현재 개발 중입니다. 잠시 후 다시 확인해 주세요.',
    backLabel: '홈으로 돌아가기',
    learnMoreLabel: '자세히 보기',
    progressLabel: '개발 진행 상황',
    progressValue: '30%',
    eta: '예상 오픈: 2~4주',
    upcomingFeaturesTitle: '예정된 기능',
    upcomingFeatures: ['실시간 데이터 업데이트', '지능형 분석', '맞춤형 추천', '모바일 최적화']
  },

  // 문서 센터
  docsPage: {
    hero: {
      title: '지식 센터',
      description: '스키 경기 규정, 기술 표준, 플랫폼 사용 가이드'
    },
    viewDocLabel: '문서 보기',
    categories: {
      pointsRules: {
        title: '포인트 규정 문서',
        description: '중국 스키 포인트 계산 규정 상세 설명',
        topics: ['포인트 계산 공식', '대회 등급 계수', '감점/가산 메커니즘', 'BL/NL 포인트 표']
      },
      competitionRules: {
        title: '경기 기술 규정',
        description: '스키 경기 기술 규정과 심판 기준',
        topics: ['경기 운영 절차', '심판 규정', '타이밍 시스템', '이의 제기 절차']
      },
      venueStandards: {
        title: '경기장 기술 기준',
        description: '경기장 시설 요구 사항과 안전 기준',
        topics: ['경기장 기준', '시설 요구 사항', '안전 가이드라인', '인증 절차']
      },
      fisRules: {
        title: 'FIS 국제 규정',
        description: '국제스키연맹 공식 규정',
        topics: ['FIS 포인트 규정', 'ICR 경기 규정', '국제 표준', '중영 대조 자료']
      },
      guide: {
        title: '플랫폼 사용 가이드',
        description: '시스템 기능 사용 방법과 자주 묻는 질문',
        topics: ['회원 가입 절차', '대회 신청 가이드', '포인트 조회', 'FAQ']
      }
    },
    popular: {
      title: '인기 문서',
      viewsLabel: '회 조회',
      items: {
        alpineRulesV4: { title: '중국 알파인 스키 포인트 규정 v4.0', category: '포인트 규정' },
        seasonGrading: { title: '2024-2025 시즌 대회 등급 기준', category: '경기 규정' },
        youthSeries: { title: 'U시리즈 청소년 대회 운영 지침', category: '경기 규정' },
        fisPointsGuide: { title: 'FIS 포인트 계산 가이드', category: 'FIS 규정' }
      }
    }
  },

  // 페이지 문구 (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: '선수 명단',
          description: '등록된 모든 선수 프로필 보기',
          backLabel: '알파인 스키로 돌아가기'
        },
        rankings: {
          title: '선수 순위',
          description: '포인트와 성적에 기반한 종합 선수 순위',
          backLabel: '알파인 스키로 돌아가기'
        },
        stats: {
          title: '선수 통계',
          description: '선수 통계와 시각화 분석을 상세 제공',
          backLabel: '알파인 스키로 돌아가기'
        }
      },
      docs: {
        'competition-rules': {
          title: '경기 규정',
          description: '경기 기술 규정을 상세히 안내',
          backLabel: '알파인 스키로 돌아가기'
        },
        'points-rules': {
          title: '포인트 규정',
          description: '알파인 스키 v4.0 포인트 규정을 확인',
          backLabel: '알파인 스키로 돌아가기'
        },
        'venue-standards': {
          title: '경기장 기준',
          description: '알파인 스키 경기장 기준과 인증 요건',
          backLabel: '알파인 스키로 돌아가기'
        }
      },
      events: {
        register: {
          title: '온라인 등록',
          description: '간편한 대회 등록 시스템이 곧 제공됩니다',
          backLabel: '알파인 스키로 돌아가기'
        },
        results: {
          title: '결과 조회',
          description: '레이스 결과 및 포인트 변화를 실시간 확인',
          backLabel: '알파인 스키로 돌아가기'
        },
        schedule: {
          title: '대회 일정',
          description: '다가오는 알파인 스키 대회 일정을 확인',
          backLabel: '알파인 스키로 돌아가기'
        },
        stats: {
          title: '대회 통계',
          description: '대회 데이터를 종합 분석하는 도구',
          backLabel: '알파인 스키로 돌아가기'
        }
      },
      points: {
        calculator: {
          title: '포인트 계산기',
          description: '정확한 v4.0 포인트 계산기는 곧 제공됩니다',
          backLabel: '알파인 스키로 돌아가기'
        },
        rankings: {
          title: '포인트 순위',
          description: '실시간 선수 순위표는 곧 제공됩니다',
          backLabel: '알파인 스키로 돌아가기'
        },
        trends: {
          title: '포인트 추이',
          description: '포인트 추세 시각화 도구는 곧 제공됩니다',
          backLabel: '알파인 스키로 돌아가기'
        }
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: '선수 명단',
          description: '등록된 모든 선수 프로필 보기',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        rankings: {
          title: '선수 순위',
          description: '포인트와 성적에 기반한 종합 선수 순위',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        stats: {
          title: '선수 통계',
          description: '선수 통계와 시각화 분석을 상세 제공',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        }
      },
      docs: {
        'competition-rules': {
          title: '경기 규정',
          description: '경기 기술 규정을 상세히 안내',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        'points-rules': {
          title: '포인트 규정',
          description: '포인트 계산 규칙을 자세히 확인',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        'venue-standards': {
          title: '경기장 기준',
          description: '경기장 기술 기준과 인증 요건',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        }
      },
      events: {
        register: {
          title: '온라인 등록',
          description: '간편한 대회 등록 시스템이 곧 제공됩니다',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        results: {
          title: '결과 조회',
          description: '레이스 결과 및 포인트 변화를 실시간 확인',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        schedule: {
          title: '대회 일정',
          description: '다가오는 대회 일정을 확인',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        stats: {
          title: '대회 통계',
          description: '대회 데이터를 종합 분석하는 도구',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        }
      },
      points: {
        calculator: {
          title: '포인트 계산기',
          description: '정확한 포인트 계산기는 곧 제공됩니다',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        rankings: {
          title: '포인트 순위',
          description: '실시간 선수 순위표는 곧 제공됩니다',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        },
        trends: {
          title: '포인트 추이',
          description: '포인트 추세 분석 도구는 곧 제공됩니다',
          backLabel: '프리스타일 슬로프스타일로 돌아가기'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: '선수 명단',
          description: '등록된 모든 선수 프로필 보기',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        rankings: {
          title: '선수 순위',
          description: '포인트와 성적에 기반한 종합 선수 순위',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        stats: {
          title: '선수 통계',
          description: '선수 통계와 시각화 분석을 상세 제공',
          backLabel: '스노보드 패럴렐로 돌아가기'
        }
      },
      docs: {
        'competition-rules': {
          title: '경기 규정',
          description: '경기 기술 규정을 상세히 안내',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        'points-rules': {
          title: '포인트 규정',
          description: '포인트 계산 규칙을 자세히 확인',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        'venue-standards': {
          title: '경기장 기준',
          description: '경기장 기술 기준과 인증 요건',
          backLabel: '스노보드 패럴렐로 돌아가기'
        }
      },
      events: {
        register: {
          title: '온라인 등록',
          description: '간편한 대회 등록 시스템이 곧 제공됩니다',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        results: {
          title: '결과 조회',
          description: '레이스 결과 및 포인트 변화를 실시간 확인',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        schedule: {
          title: '대회 일정',
          description: '다가오는 대회 일정을 확인',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        stats: {
          title: '대회 통계',
          description: '대회 데이터를 종합 분석하는 도구',
          backLabel: '스노보드 패럴렐로 돌아가기'
        }
      },
      points: {
        calculator: {
          title: '포인트 계산기',
          description: '정확한 포인트 계산기는 곧 제공됩니다',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        rankings: {
          title: '포인트 순위',
          description: '실시간 선수 순위표는 곧 제공됩니다',
          backLabel: '스노보드 패럴렐로 돌아가기'
        },
        trends: {
          title: '포인트 추이',
          description: '포인트 추세 분석 도구는 곧 제공됩니다',
          backLabel: '스노보드 패럴렐로 돌아가기'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: '선수 명단',
          description: '등록된 모든 선수 프로필 보기',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        rankings: {
          title: '선수 순위',
          description: '포인트와 성적에 기반한 종합 선수 순위',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        stats: {
          title: '선수 통계',
          description: '선수 통계와 시각화 분석을 상세 제공',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        }
      },
      docs: {
        'competition-rules': {
          title: '경기 규정',
          description: '경기 기술 규정을 상세히 안내',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        'points-rules': {
          title: '포인트 규정',
          description: '포인트 계산 규칙을 자세히 확인',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        'venue-standards': {
          title: '경기장 기준',
          description: '경기장 기술 기준과 인증 요건',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        }
      },
      events: {
        register: {
          title: '온라인 등록',
          description: '간편한 대회 등록 시스템이 곧 제공됩니다',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        results: {
          title: '결과 조회',
          description: '레이스 결과 및 포인트 변화를 실시간 확인',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        schedule: {
          title: '대회 일정',
          description: '다가오는 대회 일정을 확인',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        stats: {
          title: '대회 통계',
          description: '대회 데이터를 종합 분석하는 도구',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        }
      },
      points: {
        calculator: {
          title: '포인트 계산기',
          description: '정확한 포인트 계산기는 곧 제공됩니다',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        rankings: {
          title: '포인트 순위',
          description: '실시간 선수 순위표는 곧 제공됩니다',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        },
        trends: {
          title: '포인트 추이',
          description: '포인트 추세 분석 도구는 곧 제공됩니다',
          backLabel: '스노보드 슬로프스타일로 돌아가기'
        }
      }
    }
  },

  // 인증 및 권한
  auth: {
    needsLogin: '로그인 필요',
    loginToUnlock: '로그인하여 더 많은 기능 해제',
    comingSoon: '곧 출시',
    roles: {
      admin: 'Administrator',
      coach: 'Coach',
      athlete: 'Athlete',
      user: 'User'
    }
  },

  // Homepage
  home: {
    hero: {
      title: 'China Skiing Points System',
      titleEn: 'China Skiing Points System',
      subtitle: 'Authoritative · Professional · Accurate skiing points management platform',
      exploreDisciplines: 'Explore Disciplines',
      freeRegister: 'Free Registration',
      platformIntro: 'First choice platform for professional athletes, coaches, and event organizers • Certified by General Administration of Sport'
    },
    features: {
      title: 'Core Platform Features',
      platformIntro: {
        title: 'Platform Introduction',
        description: 'Learn about China Alpine Skiing Points System'
      },
      memberRegister: {
        title: 'Member Registration',
        description: 'Register as a platform member to view personal points'
      },
      eventAnnouncement: {
        title: 'Event Announcements',
        description: 'View the latest event schedules and announcements'
      },
      pointsRules: {
        title: 'Points Rules',
        description: 'View China Alpine Skiing points calculation rules'
      },
      competitionManagement: {
        title: 'Competition Management',
        description: 'Manage competition information, results entry and statistics'
      },
      athleteProfiles: {
        title: 'Athlete Profiles',
        description: 'Athlete information management and points history'
      },
      onlineRegistration: {
        title: 'Online Registration',
        description: 'Convenient event registration and fee management'
      },
      dataAnalysis: {
        title: 'Data Analysis',
        description: 'In-depth data analysis and visualization reports'
      }
    },
    stats: {
      title: 'Platform Data Overview',
      subtitle: 'Real-time system data and operational status',
      disciplines: { label: 'Ski Disciplines', value: '15+', description: 'Alpine·Freestyle·Snowboard' },
      pointsRules: { label: 'Points Rules', value: '100%', description: 'Compliant with China Standards' },
      updateCycle: { label: 'Points Update', value: '7 Days', description: 'Weekly Updates' },
      users: { label: 'Registered Users', value: '1,200+', description: 'Athletes & Coaches' }
    },
    news: {
      title: 'Latest Updates',
      pauseCarousel: 'Pause Carousel',
      continueCarousel: 'Continue Carousel'
    },
    latestResults: {
      title: 'Latest Competition Results',
      subtitle: 'Real-time competition results and points rankings',
      recentResults: 'Recent Results',
      liveUpdate: 'Live Update',
      viewMore: 'View More Events →'
    },
    rankings: {
      title: 'Points Leaderboard',
      updatedOn: 'Updated on',
      points: 'Points',
      viewFullRankings: 'View Full Rankings →'
    },
    memberWelcome: {
      welcomeBack: 'Welcome Back',
      accountStatus: 'Account Active',
      pendingReview: 'Pending Review',
      currentPoints: 'Current Points',
      systemPermissions: 'System Permissions',
      personalCenter: 'Personal Center',
      myPoints: 'My Points',
      adminPanel: 'Admin Panel'
    },
    memberValue: {
      unlockFeatures: 'Unlock All Professional Features',
      registerToUnlock: 'Register as a member to enjoy complete points management and event services',
      pointsSystem: {
        title: 'Points System',
        features: ['Personal points query and history tracking', 'Real-time points leaderboard', 'Points calculator tool', 'Points trend analysis']
      },
      eventManagement: {
        title: 'Event Management',
        features: ['View competition list and event schedule', 'Online event registration', 'Real-time results viewing', 'Event result notifications']
      },
      professionalFeatures: {
        title: 'Professional Features',
        features: ['Personal athlete profile management', 'Detailed points rules', 'Data statistics and analysis', 'Technical support service']
      },
      registerUnlock: 'Register to Unlock'
    },
    about: {
      title: 'About Platform',
      description1: 'China Skiing Points System is a comprehensive competition management platform built based on the standards of the Winter Sports Management Center of the General Administration of Sport. Covering all disciplines of alpine skiing, freestyle skiing, and snowboarding, using multi-tier points calculation algorithms compliant with China standards, providing authoritative and accurate data management and points calculation services for Chinese skiing competitions.',
      description2: 'We are committed to promoting the digital and standardized development of Chinese skiing sports, providing modern data management, points calculation, and results statistics tools for athletes, coaches, event organizers, and competition referees, comprehensively covering big air, slopestyle, parallel events and other snow sports, improving the organizational and competitive level of Chinese skiing.',
      multiTierPoints: { title: 'Multi-tier Points System', description: '360/240/120 Points Tiers' },
      uSeries: { title: 'U-Series Events', description: 'U12/U15/U18 Full Coverage' },
      officialCertification: { title: 'Official Certification', description: 'Winter Sports Center Standards' },
      allDisciplines: { title: 'All Disciplines Support', description: 'Alpine·Freestyle·Snowboard' }
    },
    systemFeatures: {
      title: 'System Features',
      feature1: 'China Alpine Skiing Points Rules Standard',
      feature2: 'Freestyle/Snowboard 360/240/120 Points Tier System',
      feature3: 'Big Air, Slopestyle, Parallel Events Full Coverage',
      feature4: 'U12/U15/U18 Youth Series Event Management',
      feature5: 'General Administration of Sport Winter Sports Center Certified',
      feature6: 'Multi-discipline Points Rankings and Data Visualization'
    }
  }
};
