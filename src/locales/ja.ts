// Japanese language pack
import type { TranslationKeys } from './zh';

export const ja: Partial<TranslationKeys> = {
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
    },
    docs: {
      competitionRules: {
        title: '競技技術規則',
        description: '競技運営ルールと審判基準',
        backLabel: 'ナレッジベースに戻る'
      },
      pointsRules: {
        title: 'ポイント規則',
        description: '中国スキーポイント計算ルール文書',
        backLabel: 'ナレッジベースに戻る'
      },
      venueStandards: {
        title: '会場基準',
        description: '会場施設の要件と安全基準',
        backLabel: 'ナレッジベースに戻る'
      },
      fisRules: {
        title: 'FIS国際規則',
        description: '国際スキー連盟の公式規則',
        backLabel: 'ナレッジベースに戻る'
      },
      guide: {
        title: 'プラットフォームガイド',
        description: 'システム機能の使い方とFAQ',
        backLabel: 'ナレッジベースに戻る'
      }
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

  // 近日公開コンポーネント
  comingSoon: {
    title: '近日公開',
    description: 'この機能は現在開発中です。後ほど再度ご確認ください。',
    backLabel: 'ホームに戻る',
    learnMoreLabel: '詳しく見る',
    progressLabel: '開発進捗',
    progressValue: '30%',
    eta: 'リリース予定：2〜4週間',
    upcomingFeaturesTitle: '今後追加される機能',
    upcomingFeatures: ['リアルタイムデータ更新', '高度な分析', 'パーソナライズされたレコメンド', 'モバイル最適化']
  },

  // ドキュメントセンター
  docsPage: {
    hero: {
      title: 'ナレッジベース',
      description: '競技ルール・技術標準・プラットフォーム利用ガイド'
    },
    viewDocLabel: 'ドキュメントを見る',
    categories: {
      pointsRules: {
        title: 'ポイント規定ドキュメント',
        description: '中国スキーポイント計算ルールの詳細解説',
        topics: ['ポイント計算式', '大会グレード係数', '減点・加点メカニズム', 'BL/NLポイント表']
      },
      competitionRules: {
        title: '競技技術規則',
        description: '競技運営ルールと審判基準',
        topics: ['競技運営フロー', '審判規定', '計時システム', '抗議手続き']
      },
      venueStandards: {
        title: '会場技術基準',
        description: '会場施設の要件と安全基準',
        topics: ['会場基準', '設備要件', '安全ガイドライン', '認証プロセス']
      },
      fisRules: {
        title: 'FIS国際規則',
        description: '国際スキー連盟の公式ルール',
        topics: ['FISポイント規定', 'ICR競技規則', '国際標準', 'バイリンガル資料']
      },
      guide: {
        title: 'プラットフォームガイド',
        description: 'システム機能の使い方とよくある質問',
        topics: ['登録手順', 'エントリーガイド', 'ポイント照会', 'FAQ']
      }
    },
    popular: {
      title: '人気ドキュメント',
      viewsLabel: '件の閲覧',
      items: {
        alpineRulesV4: { title: '中国アルペンスキー ポイント規則 v4.0', category: 'ポイント規則' },
        seasonGrading: { title: '2024-2025シーズン大会グレード基準', category: '競技規則' },
        youthSeries: { title: 'Uシリーズジュニア大会管理ガイド', category: '競技規則' },
        fisPointsGuide: { title: 'FISポイント計算ガイド', category: 'FIS規則' }
      }
    }
  },

  // ページ文言（Coming Soon）
  pages: {
    alpine: {
      athletes: {
        list: {
          title: '選手名簿',
          description: '登録済み選手のプロフィールを一覧表示',
          backLabel: 'アルペンスキーに戻る'
        },
        rankings: {
          title: '選手ランキング',
          description: 'ポイントと成績に基づく総合選手ランキング',
          backLabel: 'アルペンスキーに戻る'
        },
        stats: {
          title: '選手統計',
          description: '選手統計と可視化分析を詳細に表示',
          backLabel: 'アルペンスキーに戻る'
        }
      },
      docs: {
        'competition-rules': {
          title: '競技規則',
          description: '競技の技術基準を詳細に解説',
          backLabel: 'アルペンスキーに戻る'
        },
        'points-rules': {
          title: 'ポイント規則',
          description: 'アルペンスキー v4.0 のポイント規則を確認',
          backLabel: 'アルペンスキーに戻る'
        },
        'venue-standards': {
          title: '会場基準',
          description: 'アルペンスキー会場の基準と認証要件',
          backLabel: 'アルペンスキーに戻る'
        }
      },
      events: {
        register: {
          title: 'オンライン登録',
          description: 'イベント登録システムはまもなく公開予定',
          backLabel: 'アルペンスキーに戻る'
        },
        results: {
          title: '結果照会',
          description: 'レース結果とポイント推移をリアルタイムで確認',
          backLabel: 'アルペンスキーに戻る'
        },
        schedule: {
          title: '大会スケジュール',
          description: 'アルペンスキーの今後の大会予定を確認',
          backLabel: 'アルペンスキーに戻る'
        },
        stats: {
          title: '大会統計',
          description: '大会データの総合分析ツール',
          backLabel: 'アルペンスキーに戻る'
        }
      },
      points: {
        calculator: {
          title: 'ポイント計算機',
          description: '正確な v4.0 ポイント計算ツールは近日公開',
          backLabel: 'アルペンスキーに戻る'
        },
        rankings: {
          title: 'ポイントランキング',
          description: 'リアルタイム選手ランキングは近日公開',
          backLabel: 'アルペンスキーに戻る'
        },
        trends: {
          title: 'ポイント推移',
          description: 'ポイント推移の可視化ツールは近日公開',
          backLabel: 'アルペンスキーに戻る'
        }
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: '選手名簿',
          description: '登録済み選手のプロフィールを一覧表示',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        rankings: {
          title: '選手ランキング',
          description: 'ポイントと成績に基づく総合選手ランキング',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        stats: {
          title: '選手統計',
          description: '選手統計と可視化分析を詳細に表示',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        }
      },
      docs: {
        'competition-rules': {
          title: '競技規則',
          description: '競技の技術基準を詳細に解説',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        'points-rules': {
          title: 'ポイント規則',
          description: 'ポイント計算ルールの詳細を確認',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        'venue-standards': {
          title: '会場基準',
          description: '会場の技術基準と認証要件',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        }
      },
      events: {
        register: {
          title: 'オンライン登録',
          description: 'イベント登録システムはまもなく公開予定',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        results: {
          title: '結果照会',
          description: 'レース結果とポイント推移をリアルタイムで確認',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        schedule: {
          title: '大会スケジュール',
          description: '今後の大会日程を確認',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        stats: {
          title: '大会統計',
          description: '大会データの総合分析ツール',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        }
      },
      points: {
        calculator: {
          title: 'ポイント計算機',
          description: '正確なポイント計算ツールは近日公開',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        rankings: {
          title: 'ポイントランキング',
          description: 'リアルタイム選手ランキングは近日公開',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        },
        trends: {
          title: 'ポイント推移',
          description: 'ポイント推移分析ツールは近日公開',
          backLabel: 'フリースタイル・スロープスタイルに戻る'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: '選手名簿',
          description: '登録済み選手のプロフィールを一覧表示',
          backLabel: 'スノーボードパラレルに戻る'
        },
        rankings: {
          title: '選手ランキング',
          description: 'ポイントと成績に基づく総合選手ランキング',
          backLabel: 'スノーボードパラレルに戻る'
        },
        stats: {
          title: '選手統計',
          description: '選手統計と可視化分析を詳細に表示',
          backLabel: 'スノーボードパラレルに戻る'
        }
      },
      docs: {
        'competition-rules': {
          title: '競技規則',
          description: '競技の技術基準を詳細に解説',
          backLabel: 'スノーボードパラレルに戻る'
        },
        'points-rules': {
          title: 'ポイント規則',
          description: 'ポイント計算ルールの詳細を確認',
          backLabel: 'スノーボードパラレルに戻る'
        },
        'venue-standards': {
          title: '会場基準',
          description: '会場の技術基準と認証要件',
          backLabel: 'スノーボードパラレルに戻る'
        }
      },
      events: {
        register: {
          title: 'オンライン登録',
          description: 'イベント登録システムはまもなく公開予定',
          backLabel: 'スノーボードパラレルに戻る'
        },
        results: {
          title: '結果照会',
          description: 'レース結果とポイント推移をリアルタイムで確認',
          backLabel: 'スノーボードパラレルに戻る'
        },
        schedule: {
          title: '大会スケジュール',
          description: '今後の大会日程を確認',
          backLabel: 'スノーボードパラレルに戻る'
        },
        stats: {
          title: '大会統計',
          description: '大会データの総合分析ツール',
          backLabel: 'スノーボードパラレルに戻る'
        }
      },
      points: {
        calculator: {
          title: 'ポイント計算機',
          description: '正確なポイント計算ツールは近日公開',
          backLabel: 'スノーボードパラレルに戻る'
        },
        rankings: {
          title: 'ポイントランキング',
          description: 'リアルタイム選手ランキングは近日公開',
          backLabel: 'スノーボードパラレルに戻る'
        },
        trends: {
          title: 'ポイント推移',
          description: 'ポイント推移分析ツールは近日公開',
          backLabel: 'スノーボードパラレルに戻る'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: '選手名簿',
          description: '登録済み選手のプロフィールを一覧表示',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        rankings: {
          title: '選手ランキング',
          description: 'ポイントと成績に基づく総合選手ランキング',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        stats: {
          title: '選手統計',
          description: '選手統計と可視化分析を詳細に表示',
          backLabel: 'スノーボードスロープスタイルに戻る'
        }
      },
      docs: {
        'competition-rules': {
          title: '競技規則',
          description: '競技の技術基準を詳細に解説',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        'points-rules': {
          title: 'ポイント規則',
          description: 'ポイント計算ルールの詳細を確認',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        'venue-standards': {
          title: '会場基準',
          description: '会場の技術基準と認証要件',
          backLabel: 'スノーボードスロープスタイルに戻る'
        }
      },
      events: {
        register: {
          title: 'オンライン登録',
          description: 'イベント登録システムはまもなく公開予定',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        results: {
          title: '結果照会',
          description: 'レース結果とポイント推移をリアルタイムで確認',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        schedule: {
          title: '大会スケジュール',
          description: '今後の大会日程を確認',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        stats: {
          title: '大会統計',
          description: '大会データの総合分析ツール',
          backLabel: 'スノーボードスロープスタイルに戻る'
        }
      },
      points: {
        calculator: {
          title: 'ポイント計算機',
          description: '正確なポイント計算ツールは近日公開',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        rankings: {
          title: 'ポイントランキング',
          description: 'リアルタイム選手ランキングは近日公開',
          backLabel: 'スノーボードスロープスタイルに戻る'
        },
        trends: {
          title: 'ポイント推移',
          description: 'ポイント推移分析ツールは近日公開',
          backLabel: 'スノーボードスロープスタイルに戻る'
        }
      }
    }
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
