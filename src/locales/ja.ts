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
    profile: 'プロフィール',
    viewDetails: '詳細を表示',
    viewFullSchedule: '完全なスケジュールを表示 →',
    viewFullRankings: '完全なランキングを表示 →',
    readMore: '続きを読む'
  },

  // ナビゲーション
  navigation: {
    title: '中国スキーポイントシステム',
    titleShort: 'CSPS',

    // プロジェクトスイッチャー
    disciplines: '競技',
    alpine: 'アルペンスキー',
    snowboardSlopestyle: 'スノーボードスロープスタイル',
    snowboardParallel: 'スノーボードパラレル',
    freestyleSlopestyle: 'フリースタイルスロープスタイル',

    // グローバルナビゲーション
    my: 'マイ',
    docs: '資料',
    about: '情報',

    // プロジェクトレベルナビゲーション
    points: 'ポイント管理',
    events: '大会管理',
    athletes: '選手',

    // サブメニュー
    submenus: {
      // ポイント管理サブメニュー
      pointsCalculator: 'ポイント計算機',
      pointsRankings: 'ポイントランキング',
      pointsTrends: 'ポイント推移',

      // 大会管理サブメニュー
      eventsSchedule: '大会スケジュール',
      eventsRegister: 'オンライン登録',
      eventsResults: '結果照会',
      eventsStats: 'データ統計',
      resultsLive: 'ライブ結果',
      resultsImport: '結果インポート',
      resultsAnnouncement: '結果発表',

      // 選手サブメニュー
      athletesList: '選手名簿',
      athletesProfile: '選手プロフィール',
      athletesStats: '選手統計',

      // 資料サブメニュー
      docsPointsRules: 'ポイントルール',
      docsCompetitionRules: '競技規則',
      docsVenueStandards: '会場基準',
      docsGuide: '利用ガイド',

      // マイページサブメニュー
      myProfile: 'パーソナルセンター',
      myPoints: 'マイポイント',
      myRegistrations: 'マイ登録',
      myAthlete: '選手プロフィール',
      myHistory: '成績履歴',

      // その他の機能
      moreFeatures: 'その他'
    }
  },

  // パンくずナビゲーション
  breadcrumb: {
    home: 'ホーム',
    disciplines: 'スキー競技',
    alpine: 'アルペンスキー',
    snowboardSlopestyle: 'スノーボードスロープスタイル/ビッグエア',
    snowboardParallel: 'スノーボードパラレル',
    freeskiSlopestyle: 'フリースタイルスロープスタイル/ビッグエア',
    points: 'ポイントセンター',
    events: '大会',
    my: 'マイページ',
    docs: 'ナレッジベース',
    about: 'システムについて'
  },

  // アルペンスキーページ
  alpine: {
    title: 'アルペンスキー',
    subtitle: 'Alpine Skiing',
    projectLabel: 'アルペン',

    hero: {
      slide1: {
        title: '2024全国選手権ハイライト',
        subtitle: '中国アルペンスキーの輝かしい瞬間を目撃'
      },
      slide2: {
        title: 'ポイントシステムのアップグレード',
        subtitle: 'v4.0ルールに基づくより正確なポイント計算'
      },
      slide3: {
        title: '冬季トレーニングキャンプ受付中',
        subtitle: 'プロのコーチングチームがスキルアップをサポート'
      }
    },

    quickAccess: {
      results: { title: '大会結果', nameEn: 'Results' },
      rankings: { title: 'ポイントランキング', nameEn: 'Rankings' },
      schedule: { title: '大会カレンダー', nameEn: 'Calendar' },
      videos: { title: 'ビデオセンター', nameEn: 'Videos' },
      athletes: { title: '選手名簿', nameEn: 'Athletes' },
      documents: { title: 'ルール文書', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '今後の予定'
    },

    latestNews: {
      title: '最新ニュース'
    },

    topAthletes: {
      title: 'ポイントランキング'
    }
  },

  // フリースタイルスロープスタイルページ
  freestyleSlopestyle: {
    title: 'フリースタイルスロープスタイル',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'フリーSS',

    hero: {
      slide1: {
        title: '2024全国フリースタイルスロープスタイル選手権',
        subtitle: '中国フリースタイルスキーの限界突破を目撃'
      },
      slide2: {
        title: '360ポイント段階システム',
        subtitle: '難易度係数に基づく公正な採点メカニズム'
      },
      slide3: {
        title: 'Uシリーズユース育成プログラム',
        subtitle: 'U12/U15/U18人材育成システム'
      }
    },

    quickAccess: {
      results: { title: '大会結果', nameEn: 'Results' },
      rankings: { title: 'ポイントランキング', nameEn: 'Rankings' },
      schedule: { title: '大会カレンダー', nameEn: 'Calendar' },
      videos: { title: 'ビデオセンター', nameEn: 'Videos' },
      athletes: { title: '選手名簿', nameEn: 'Athletes' },
      documents: { title: 'ルール文書', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '今後の予定'
    },

    latestNews: {
      title: '最新ニュース'
    },

    topAthletes: {
      title: 'ポイントランキング'
    }
  },

  // スノーボードスロープスタイルページ
  snowboardSlopestyle: {
    title: 'スノーボードスロープスタイル',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'スノボSS',

    hero: {
      slide1: {
        title: '2024全国スノーボードスロープスタイル選手権',
        subtitle: '中国スノーボードのエキサイティングな瞬間を目撃'
      },
      slide2: {
        title: '360ポイント段階システム',
        subtitle: '国際基準に基づくポイント計算ルール'
      },
      slide3: {
        title: 'Uシリーズユース育成プログラム',
        subtitle: 'U12/U15/U18三段階育成システム'
      }
    },

    quickAccess: {
      results: { title: '大会結果', nameEn: 'Results' },
      rankings: { title: 'ポイントランキング', nameEn: 'Rankings' },
      schedule: { title: '大会カレンダー', nameEn: 'Calendar' },
      videos: { title: 'ビデオセンター', nameEn: 'Videos' },
      athletes: { title: '選手名簿', nameEn: 'Athletes' },
      documents: { title: 'ルール文書', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '今後の予定'
    },

    latestNews: {
      title: '最新ニュース'
    },

    topAthletes: {
      title: 'ポイントランキング'
    }
  },

  // スノーボードパラレルページ
  snowboardParallel: {
    title: 'スノーボードパラレル',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'スノボパラレル',

    hero: {
      slide1: {
        title: '2024全国スノーボードパラレル選手権',
        subtitle: 'スピードとスキルの完璧な組み合わせ'
      },
      slide2: {
        title: 'トーナメントポイントシステム',
        subtitle: '対戦ランキングに基づく公正なポイント計算'
      },
      slide3: {
        title: 'エリート選手育成プログラム',
        subtitle: 'レーシングレベルの向上と国際大会への挑戦'
      }
    },

    quickAccess: {
      results: { title: '大会結果', nameEn: 'Results' },
      rankings: { title: 'ポイントランキング', nameEn: 'Rankings' },
      schedule: { title: '大会カレンダー', nameEn: 'Calendar' },
      videos: { title: 'ビデオセンター', nameEn: 'Videos' },
      athletes: { title: '選手名簿', nameEn: 'Athletes' },
      documents: { title: 'ルール文書', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: '今後の予定'
    },

    latestNews: {
      title: '最新ニュース'
    },

    topAthletes: {
      title: 'ポイントランキング'
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
    comingSoon: '近日公開',
    roles: {
      admin: '管理者',
      coach: 'コーチ',
      athlete: '選手',
      user: 'ユーザー'
    }
  }
};
