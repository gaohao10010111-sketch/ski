// Korean language pack
import { TranslationKeys } from './zh';

export const ko: TranslationKeys = {
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
    profile: '프로필'
  },

  // 내비게이션
  navigation: {
    title: '중국 스키 포인트 시스템',
    disciplines: '스키 종목',
    points: '포인트 센터',
    events: '대회',
    my: '마이페이지',
    docs: '지식 베이스',
    about: '시스템 소개',
    
    // 서브메뉴
    submenus: {
      // 스키 종목
      alpine: '알파인 스키',
      snowboardSlopestyle: '스노보드 슬로프스타일/빅에어',
      snowboardParallel: '스노보드 패러렐',
      freeskiSlopestyle: '프리스키 슬로프스타일/빅에어',
      
      // 포인트 센터
      myPoints: '내 포인트',
      pointsQuery: '포인트 조회',
      pointsCalculator: '포인트 계산기',
      pointsRankings: '포인트 랭킹',
      pointsTrends: '포인트 추이 분석',
      
      // 대회
      eventsSchedule: '대회 일정',
      eventsRegister: '온라인 등록',
      eventsList: '대회 목록',
      eventsResults: '결과 조회',
      eventsStats: '데이터 통계',
      
      // 마이페이지
      personalCenter: '개인 센터',
      myRegistrations: '내 등록',
      athleteProfile: '선수 프로필',
      resultsHistory: '성적 이력',
      
      // 지식 베이스
      pointsRules: '포인트 규칙',
      competitionRules: '경기 규칙',
      venueStandards: '경기장 기준',
      fisRules: 'FIS 규칙',
      userGuide: '사용 가이드'
    }
  },

  // 브레드크럼 내비게이션
  breadcrumb: {
    home: '홈',
    disciplines: '스키 종목',
    alpine: '알파인 스키',
    snowboardSlopestyle: '스노보드 슬로프스타일/빅에어',
    snowboardParallel: '스노보드 패러렐',
    freeskiSlopestyle: '프리스키 슬로프스타일/빅에어',
    points: '포인트 센터',
    events: '대회',
    my: '마이페이지',
    docs: '지식 베이스',
    about: '시스템 소개'
  },

  // 알파인 스키 페이지
  alpine: {
    title: '알파인 스키 포인트 시스템',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0 시간 기반 공식',
    
    // 태그
    tags: {
      timeBasedFormula: 'v4.0 시간 기반 공식',
      raceLevels: 'A/B/C급 대회',
      penaltyCalculation: '페널티 동적 계산'
    },
    
    // 빠른 링크
    quickLinks: {
      title: '빠른 접근',
      pointsRanking: {
        title: '포인트 랭킹',
        description: '현재 시즌 포인트 랭킹 보기'
      },
      pointsCalculator: {
        title: '포인트 계산기',
        description: 'v4.0 공식 실시간 계산'
      },
      competitions: {
        title: '대회 관리',
        description: '일정 및 경기 결과 보기'
      },
      athletes: {
        title: '선수 프로필',
        description: '선수 정보 및 성적 조회'
      },
      registration: {
        title: '온라인 등록',
        description: '알파인 스키 대회 참가'
      },
      rules: {
        title: '규칙 문서',
        description: '알파인 스키 경기 규칙'
      },
      enterFunction: '기능 들어가기'
    },
    
    // 포인트 규칙
    pointsRules: {
      title: '알파인 스키 포인트 규칙 (v4.0)',
      baseFormula: {
        title: '기본 경기 포인트 공식',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=기본포인트 | F=종목계수 | Tx=선수시간 | To=우승시간'
      },
      finalFormula: {
        title: '최종 포인트 계산',
        formula: '최종포인트 = (P + 페널티) × 대회계수',
        description: 'A급(1.0) | B급(0.6) | C급(0.3)'
      },
      disciplineFactors: {
        title: '종목 계수표',
        downhill: '다운힐 DH',
        slalom: '슬라롬 SL',
        giantSlalom: '대회전 GS',
        superG: '수퍼대회전 SG',
        combined: '알파인복합 AC'
      }
    },
    
    // 통계
    statistics: {
      title: '실시간 통계',
      registeredAthletes: '등록 선수',
      seasonEvents: '이번 시즌 대회',
      raceCount: '경기 횟수',
      averagePoints: '평균 포인트',
      monthlyIncrease: '이번 달 12명 증가',
      seasonGrowth: '지난 시즌 대비 16% 증가',
      pandemicImpact: '팬데믹 영향으로 소폭 감소',
      levelImprovement: '전체 수준 꾸준히 향상'
    }
  },

  // 프리스키 슬로프스타일 페이지
  freeskiSlopestyle: {
    title: '프리스키 슬로프스타일/빅에어',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 포인트 시스템',
      judgingSystem: '심판 채점 시스템',
      competitionFormat: '예선/결선 형식'
    },
    
    pointsSystem: {
      title: '단계별 포인트 시스템',
      class1: {
        title: '1급 대회',
        description: '전국 선수권 등 최고급 대회'
      },
      class2: {
        title: '2급 대회',
        description: '지역 중요 대회'
      },
      class3: {
        title: '3급 대회',
        description: '지방 일반 대회'
      }
    }
  },

  // 스노보드 슬로프스타일 페이지
  snowboardSlopestyle: {
    title: '스노보드 슬로프스타일/빅에어',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 포인트 시스템',
      judgingSystem: '심판 채점 시스템',
      competitionFormat: '예선/결선 형식'
    }
  },

  // 스노보드 패러렐 페이지
  snowboardParallel: {
    title: '스노보드 패러렐 종목',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: '시간 기반 채점',
      eliminationFormat: '토너먼트 형식',
      parallelEvents: 'PGS/PSL 종목'
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

  // 인증 및 권한
  auth: {
    needsLogin: '로그인 필요',
    loginToUnlock: '로그인하여 더 많은 기능 해제',
    comingSoon: '곧 출시'
  }
};