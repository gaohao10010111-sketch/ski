// Japanese language pack
import { TranslationKeys } from './zh';

export const ja: TranslationKeys = {
  // 共通
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    cancel: 'キャンセル',
    confirm: '確認',
    save: '保存',
    edit: '編集',
    delete: '削除',
    search: '検索',
    filter: 'フィルター',
    export: 'エクスポート',
    import: 'インポート',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    submit: '送信',
    reset: 'リセット',
    home: 'ホーム',
    language: '言語',
    login: 'ログイン',
    logout: 'ログアウト',
    register: '登録',
    profile: 'プロフィール'
  },

  // ナビゲーション
  navigation: {
    title: '中国スキーポイントシステム',
    disciplines: 'スキー競技',
    points: 'ポイントセンター',
    events: '大会',
    my: 'マイページ',
    docs: 'ナレッジベース',
    about: 'システムについて',
    
    // サブメニュー
    submenus: {
      // スキー競技
      alpine: 'アルペンスキー',
      snowboardSlopestyle: 'スノーボードスロープスタイル/ビッグエア',
      snowboardParallel: 'スノーボードパラレル',
      freeskiSlopestyle: 'フリースキースロープスタイル/ビッグエア',
      
      // ポイントセンター
      myPoints: 'マイポイント',
      pointsQuery: 'ポイント照会',
      pointsCalculator: 'ポイント計算機',
      pointsRankings: 'ポイントランキング',
      pointsTrends: 'ポイント推移分析',
      
      // 大会
      eventsSchedule: '大会スケジュール',
      eventsRegister: 'オンライン登録',
      eventsList: '大会一覧',
      eventsResults: '結果照会',
      eventsStats: 'データ統計',
      
      // マイページ
      personalCenter: 'パーソナルセンター',
      myRegistrations: 'マイ登録',
      athleteProfile: '選手プロフィール',
      resultsHistory: '成績履歴',
      
      // ナレッジベース
      pointsRules: 'ポイントルール',
      competitionRules: '競技規則',
      venueStandards: '会場基準',
      fisRules: 'FISルール',
      userGuide: '利用ガイド'
    }
  },

  // パンくずナビゲーション
  breadcrumb: {
    home: 'ホーム',
    disciplines: 'スキー競技',
    alpine: 'アルペンスキー',
    snowboardSlopestyle: 'スノーボードスロープスタイル/ビッグエア',
    snowboardParallel: 'スノーボードパラレル',
    freeskiSlopestyle: 'フリースキースロープスタイル/ビッグエア',
    points: 'ポイントセンター',
    events: '大会',
    my: 'マイページ',
    docs: 'ナレッジベース',
    about: 'システムについて'
  },

  // アルペンスキーページ
  alpine: {
    title: 'アルペンスキーポイントシステム',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0時間ベース計算式',
    
    // タグ
    tags: {
      timeBasedFormula: 'v4.0時間ベース計算式',
      raceLevels: 'A/B/C級大会',
      penaltyCalculation: 'ペナルティ動的計算'
    },
    
    // クイックリンク
    quickLinks: {
      title: 'クイックアクセス',
      pointsRanking: {
        title: 'ポイントランキング',
        description: '今シーズンのポイントランキングを表示'
      },
      pointsCalculator: {
        title: 'ポイント計算機',
        description: 'v4.0計算式でリアルタイム計算'
      },
      competitions: {
        title: '大会管理',
        description: 'スケジュールとレース結果を表示'
      },
      athletes: {
        title: '選手プロフィール',
        description: '選手情報と成績照会'
      },
      registration: {
        title: 'オンライン登録',
        description: 'アルペンスキー大会に参加'
      },
      rules: {
        title: 'ルール文書',
        description: 'アルペンスキー競技規則'
      },
      enterFunction: '機能に入る'
    },
    
    // ポイントルール
    pointsRules: {
      title: 'アルペンスキーポイントルール (v4.0)',
      baseFormula: {
        title: 'ベースレースポイント計算式',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=ベースポイント | F=種目係数 | Tx=選手タイム | To=優勝タイム'
      },
      finalFormula: {
        title: '最終ポイント計算',
        formula: '最終ポイント = (P + ペナルティ) × 大会係数',
        description: 'Aレベル(1.0) | Bレベル(0.6) | Cレベル(0.3)'
      },
      disciplineFactors: {
        title: '種目係数表',
        downhill: 'ダウンヒル DH',
        slalom: 'スラローム SL',
        giantSlalom: 'ジャイアントスラローム GS',
        superG: 'スーパー大回転 SG',
        combined: 'アルペン複合 AC'
      }
    },
    
    // 統計
    statistics: {
      title: 'リアルタイム統計',
      registeredAthletes: '登録選手',
      seasonEvents: '今シーズン大会',
      raceCount: 'レース数',
      averagePoints: '平均ポイント',
      monthlyIncrease: '今月12名増加',
      seasonGrowth: '前シーズン比16%増',
      pandemicImpact: 'パンデミックの影響で若干減少',
      levelImprovement: '全体レベルが着実に向上'
    }
  },

  // フリースキースロープスタイルページ
  freeskiSlopestyle: {
    title: 'フリースキースロープスタイル/ビッグエア',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120ポイントシステム',
      judgingSystem: '審判採点システム',
      competitionFormat: '予選/決勝形式'
    },
    
    pointsSystem: {
      title: '段階別ポイントシステム',
      class1: {
        title: '1級大会',
        description: '全国選手権などトップレベル大会'
      },
      class2: {
        title: '2級大会',
        description: '地域重要大会'
      },
      class3: {
        title: '3級大会',
        description: '地方一般大会'
      }
    }
  },

  // スノーボードスロープスタイルページ
  snowboardSlopestyle: {
    title: 'スノーボードスロープスタイル/ビッグエア',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120ポイントシステム',
      judgingSystem: '審判採点システム',
      competitionFormat: '予選/決勝形式'
    }
  },

  // スノーボードパラレルページ
  snowboardParallel: {
    title: 'スノーボードパラレル競技',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'タイムベース採点',
      eliminationFormat: 'トーナメント形式',
      parallelEvents: 'PGS/PSL競技'
    }
  },

  // 言語セレクター
  languageSelector: {
    title: '言語を選択',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // 認証と権限
  auth: {
    needsLogin: 'ログインが必要',
    loginToUnlock: 'ログインして機能を解除',
    comingSoon: '近日公開'
  }
};