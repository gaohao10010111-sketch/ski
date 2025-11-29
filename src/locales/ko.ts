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
      resultsLive: '실시간 결과',
      resultsImport: '결과 가져오기',
      resultsAnnouncement: '결과 발표',

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

      // 더 많은 기능
      moreFeatures: '더보기'
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
    languages: {
      zh: '중국어',
      en: '영어',
      ja: '일본어',
      ko: '한국어',
      de: '독일어',
      fr: '프랑스어',
      it: '이탈리아어',
      ru: '러시아어',
      no: '노르웨이어',
      sv: '스웨덴어',
      fi: '핀란드어',
      es: '스페인어'
    }
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

  rulesPage: {
    header: {
      title: '중국 알파인 스키 규정 라이브러리',
      description: '포인트 계산, 경기 운영, 청소년 육성까지 간소화된 최신 규정을 한 곳에서 확인하세요.',
      highlights: [
        { icon: 'award', text: '공식 표준' },
        { icon: 'target', text: '간소화된 계산 체계' },
        { icon: 'users', text: '확장된 청소년 시스템' }
      ]
    },
    headings: {
      ruleModules: '규정 모듈'
    },
    toc: {
      toggleTitle: '목차 표시/숨기기',
      title: '페이지 목차',
      download: 'PDF 버전 다운로드',
      items: {
        coreFormula: '핵심 공식',
        ruleModules: '규정 모듈',
        coreFeatures: '주요 특징',
        quickLinks: '바로가기',
        upgradeInfo: '업그레이드 안내',
        importantNotice: '중요 안내'
      }
    },
    formula: {
      title: '핵심 공식',
      expression: '최종 포인트 = (기본 경기 포인트 + 판정 포인트) × 경기 계수',
      description: 'v2.0의 복잡한 체계와 달리 품질·참가·추가 포인트 요소를 제거하고, 3단계 계산 방식으로 효율과 투명성을 높였습니다.',
      copyButton: '공식 복사',
      copySuccess: '클립보드에 복사되었습니다!',
      calculatorButton: '계산기 사용하기'
    },
    ruleModules: {
      points: {
        title: '중국 알파인 스키 포인트 규정',
        description: '3단계 계산식에 기반한 간소화된 포인트 계산 체계입니다.',
        features: ['3단계 계산 절차', 'A/B/C 3단계 대회 분류', '확장된 청소년 카테고리', '향상된 투명성'],
        linkLabel: '자세히 보기'
      },
      competition: {
        title: '경기 규정 가이드',
        description: '최신 경기 규정과 청소년 시스템을 이해하고, 참가를 위한 실무 가이드를 제공합니다.',
        features: ['경기 종목 소개', '연령별 카테고리', '참가 가이드 흐름', '안전 및 기술 기준'],
        linkLabel: '자세히 보기'
      },
      documents: {
        title: '중국 포인트 자료',
        description: '간소화된 포인트 규정과 지원 도구를 한 번에 조회할 수 있습니다.',
        features: ['규정 상세 해설', '공식 구성 설명', '온라인 계산 도구', 'PDF 문서 다운로드'],
        linkLabel: '자세히 보기'
      }
    },
    v4Features: {
      title: '주요 특징',
      items: {
        simplified: {
          title: '계산 간소화',
          description: '품질·참가 계수와 추가 포인트 등 복잡한 요소를 제거했습니다.'
        },
        tiers: {
          title: '3단계 체계',
          description: 'A(1.0)·B(0.6)·C(0.3) 대회 분류로 명확하게 관리합니다.'
        },
        youth: {
          title: '청소년 확대',
          description: 'U15~U18 핵심 연령대를 집중적으로 지원합니다.'
        },
        efficiency: {
          title: '효율과 투명성',
          description: '3단계 계산법으로 속도와 투명성을 높입니다.'
        }
      }
    },
    quickLinks: {
      title: '바로가기',
      items: {
        calculator: { label: '포인트 계산기' },
        rankings: { label: '포인트 랭킹' },
        data: { label: '대회 데이터 관리' },
        association: { label: '중국 스키 협회', external: true }
      }
    },
    upgradeInfo: {
      title: '업그레이드 안내',
      improvements: {
        title: '주요 개선 사항',
        items: ['복잡한 계수를 제거한 계산식', '3단계 대회 체계로 명확한 관리', '청소년 카테고리 확대 및 전 과정 지원', '계산 과정의 투명성과 효율 향상']
      },
      advantages: {
        title: '기술적 강점',
        items: ['3단계 계산으로 이해와 적용이 용이', '국제 기준과 연계된 표준화 관리', '디지털 도구 지원으로 온라인 운영 강화', '공정하고 투명한 경쟁 환경']
      }
    },
    importantNotice: {
      title: '중요 안내',
      version: {
        title: '규정 버전',
        items: ['현재 버전: 최신 릴리스', '적용 시즌: 2024-2025', '적용 범위: 중국 국내 대회', '업데이트 주기: 운영 상황에 따라 조정']
      },
      usage: {
        title: '이용 가이드',
        items: ['포인트 규정 개요부터 확인하는 것을 권장', '온라인 계산기로 결과 검증', '청소년 확장 정책을 지속적으로 확인', '규정 업데이트 소식을 신속히 확인']
      },
      support: '본 규정 체계는 국제 경험과 중국의 실정을 결합해 공정하고 효율적인 경기 운영을 지원합니다. 문의나 제안 사항은 안내된 채널로 연락해 주십시오.'
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
    rules: {
      competition: {
        title: '경기 규정 안내',
        description: '이 페이지는 현재 준비 중입니다. 잠시만 기다려 주세요.',
        backLabel: '규정 센터로 돌아가기'
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
      title: '시스템 특징',
      feature1: '중국 알파인 스키 포인트 규칙 표준',
      feature2: '프리스타일/스노보드 360/240/120 포인트 등급 시스템',
      feature3: '빅에어, 슬로프스타일, 패러렐 종목 완전 지원',
      feature4: 'U12/U15/U18 유스 시리즈 이벤트 관리',
      feature5: '동계스포츠센터 인증',
      feature6: '다종목 포인트 순위 및 데이터 시각화'
    }
  },

  // 종목 페이지
  disciplinesPage: {
    hero: {
      backLabel: '홈으로 돌아가기',
      title: '중국 유스 스키 포인트 순위 공식 플랫폼',
      subtitle: '4개의 독립 포인트 시스템 | 전문 이벤트 관리 플랫폼'
    },
    continuation: {
      title: '4개 종목 포인트 이월 메커니즘',
      description: '일관된 성과 평가를 위한 과학적 이월 전략',
      cards: [
        {
          id: 'carry-forward',
          value: '×50%',
          title: '이월 비율',
          description: '시즌 종료 시 각 종목 포인트의 50%가 다음 시즌으로 이월',
          accent: 'blue'
        },
        {
          id: 'season',
          value: '7/1-6/30',
          title: '시즌 기간',
          description: '7월 1일부터 6월 30일까지의 통일된 시즌 주기',
          accent: 'green'
        },
        {
          id: 'best-two',
          value: '베스트 2',
          title: '성적 계산',
          description: '각 종목의 최고 2개 성적 평균이 시즌 포인트로 계산',
          accent: 'purple'
        }
      ]
    },
    cardsSection: {
      title: '종목 선택',
      ctaLabel: '종목 시스템 열기',
      cards: [
        {
          id: 'alpine',
          name: '알파인 스키',
          nameEn: 'Alpine Skiing',
          icon: 'alpine',
          color: 'from-blue-600 to-cyan-600',
          description: 'v4.0 시간 기반 포인트 공식, A/B/C 등급 계수',
          features: ['활강', '회전', '대회전', '슈퍼대회전', '복합']
        },
        {
          id: 'snowboard-slopestyle',
          name: '스노보드 슬로프스타일 & 빅에어',
          nameEn: 'Snowboard Slopestyle & Big Air',
          icon: 'snowboard',
          color: 'from-orange-600 to-yellow-600',
          description: '240/360/120 포인트 등급, 심판 점수를 순위로 전환',
          features: ['슬로프스타일', '빅에어', '하프파이프']
        },
        {
          id: 'snowboard-parallel',
          name: '스노보드 패러렐',
          nameEn: 'Snowboard Parallel',
          icon: 'snowboard',
          color: 'from-purple-600 to-pink-600',
          description: '시간 기반 레이스 포인트, 토너먼트 방식',
          features: ['패러렐대회전(PGS)', '패러렐회전(PSL)']
        },
        {
          id: 'freeski-slopestyle',
          name: '프리스키 슬로프스타일 & 빅에어',
          nameEn: 'Freeski Slopestyle & Big Air',
          icon: 'freeski',
          color: 'from-red-600 to-rose-600',
          description: '240/360/120 포인트 등급, 트릭 난이도 계수',
          features: ['슬로프스타일', '빅에어', '에어리얼']
        }
      ]
    },
    highlights: {
      title: '플랫폼 핵심 기능',
      items: [
        {
          id: 'independent',
          icon: 'award',
          title: '독립 순위',
          description: '각 종목별 전용 순위 및 분석'
        },
        {
          id: 'realtime',
          icon: 'barChart',
          title: '실시간 계산',
          description: '대회 후 자동 포인트 업데이트'
        },
        {
          id: 'u-series',
          icon: 'target',
          title: 'U시리즈 관리',
          description: 'U12, U15, U18 연령대별 그룹'
        },
        {
          id: 'continuation',
          icon: 'rotateCcw',
          title: '이월 메커니즘',
          description: '시즌 포인트의 50%가 지속 평가용으로 이월'
        }
      ]
    }
  },

  // 선수 페이지
  athletesPage: {
    pageTitle: '선수 관리',
    pageSubtitle: '중국 스키 선수 프로필 및 포인트 통계',
    searchPlaceholder: '선수명 또는 성으로 검색...',
    filterOptions: [
      { value: 'all', label: '전체 종목' },
      { value: 'alpine', label: '알파인 스키' },
      { value: 'freestyle', label: '프리스타일 스키' },
      { value: 'snowboard', label: '스노보드' }
    ],
    resultsSummary: '{count}명의 선수를 찾았습니다',
    exportLabel: '목록 내보내기',
    stats: [
      { id: 'registered', value: '1,247', label: '등록 선수', icon: 'user', theme: 'blue' },
      { id: 'active', value: '563', label: '활동 선수', icon: 'trophy', theme: 'green' },
      { id: 'awarded', value: '89', label: '메달리스트', icon: 'medal', theme: 'purple' },
      { id: 'improved', value: '156', label: '포인트 향상', icon: 'trendingUp', theme: 'red' }
    ],
    tableHeaders: {
      rank: '순위',
      athlete: '선수',
      discipline: '종목',
      points: '포인트',
      competitions: '대회수',
      bestResult: '최고 성적',
      province: '소속 성'
    },
    list: []
  },

  // 소개 페이지
  aboutPage: {
    pageTitle: '소개',
    heroDescription: '중국 스키 포인트 플랫폼은 스키 스포츠의 표준화와 전문화에 헌신하는 전문 포인트 관리 서비스입니다',

    platformTitle: '플랫폼 소개',
    platformDescription1: '중국 스키 포인트 플랫폼은 공식 포인트 계산 규칙과 유스 U시리즈 대회 프로그램을 기반으로 한 종합 스키 관리 플랫폼입니다.',
    platformDescription2: '알파인 스키, 프리스타일 스키, 스노보드의 3대 종목을 지원하며, 활강, 회전, 대회전, 슈퍼대회전, 복합, 빅에어, 슬로프스타일, 하프파이프 등을 포함합니다.',
    platformDescription3: '스키 스포츠에 전문적이고 정확하며 효율적인 디지털 관리 서비스를 제공하기 위해 노력합니다.',

    stats: {
      pointsSystems: { value: '4', label: '포인트 시스템' },
      registeredAthletes: { value: '1000+', label: '등록 선수' },
      annualEvents: { value: '50+', label: '연간 이벤트' },
      onlineService: { value: '24/7', label: '온라인 서비스' }
    },

    coreFeaturesTitle: '핵심 기능',
    coreFeaturesSubtitle: '전문적이고 포괄적이며 사용하기 쉬운 스키 이벤트 관리 솔루션',

    pointsCalculation: {
      title: '포인트 계산 시스템',
      description: '듀얼 포인트 시스템으로 공식 규칙 기반 정밀 계산'
    },
    eventManagement: {
      title: '이벤트 관리',
      description: '등록부터 결과 발표까지 완전한 디지털 관리'
    },
    athleteManagement: {
      title: '선수 관리',
      description: '선수 등록, 자격 심사, 포인트 기록 관리'
    },
    dataAnalysis: {
      title: '데이터 분석',
      description: '전문 데이터 통계 및 시각화 보고서'
    },

    technicalFeaturesTitle: '기술 특징',

    dualPointsEngine: {
      title: '듀얼 포인트 계산 엔진',
      features: [
        '알파인 스키: 시간 기반 계산',
        '프리스타일/스노보드: 순위 기반 240/360/120 등급',
        '동적 페널티 포인트 계산',
        '다종목 포인트 관리'
      ]
    },
    rulesSupport: {
      title: '규정 지원',
      features: [
        '알파인 스키 포인트 계산 규칙',
        '전국 BA/SS 유스 U시리즈 프로그램',
        'FIS 규정 호환성',
        '시설 기술 표준 관리'
      ]
    },
    userExperience: {
      title: '사용자 경험',
      features: [
        '반응형 디자인, 멀티플랫폼 적응',
        '실시간 데이터 업데이트',
        '직관적인 데이터 시각화',
        '편리한 워크플로우'
      ]
    },

    contactTitle: '문의하기',
    contactDescription: '질문이나 제안이 있으시면 언제든 연락주세요',

    technicalSupport: {
      title: '기술 지원',
      email: '이메일: support@ski-points.com',
      phone: '전화: 400-123-4567'
    },
    businessCooperation: {
      title: '비즈니스 협력',
      email: '이메일: business@ski-points.com',
      wechat: 'WeChat: ski-points-service'
    }
  }
};
