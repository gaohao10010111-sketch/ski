// Russian language pack - Русский языковой пакет
import { TranslationKeys } from './zh';

export const ru: TranslationKeys = {
  // Общие
  common: {
    loading: 'Загрузка...',
    error: 'Ошибка',
    success: 'Успешно',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    save: 'Сохранить',
    edit: 'Редактировать',
    delete: 'Удалить',
    search: 'Поиск',
    filter: 'Фильтр',
    export: 'Экспорт',
    import: 'Импорт',
    back: 'Назад',
    next: 'Далее',
    previous: 'Предыдущий',
    submit: 'Отправить',
    reset: 'Сброс',
    home: 'Главная',
    language: 'Язык',
    login: 'Войти',
    logout: 'Выйти',
    register: 'Регистрация',
    profile: 'Профиль',
    viewDetails: 'Просмотр деталей',
    viewFullSchedule: 'Просмотр полного расписания →',
    viewFullRankings: 'Просмотр полного рейтинга →',
    readMore: 'Читать далее'
  },

  // Навигация
  navigation: {
    title: 'Китайская Система Очков в Лыжном Спорте',
    titleShort: 'CSPS',

    // Переключатель дисциплин
    disciplines: 'Дисциплины',
    alpine: 'Горные Лыжи',
    snowboardSlopestyle: 'Сноуборд Слоупстайл',
    snowboardParallel: 'Сноуборд Параллель',
    freestyleSlopestyle: 'Фристайл Слоупстайл',

    // Глобальная навигация
    my: 'Моё',
    docs: 'Документы',
    about: 'О нас',

    // Навигация на уровне дисциплины
    points: 'Очки',
    events: 'События',
    athletes: 'Спортсмены',

    // Подменю
    submenus: {
      // Подменю управления очками
      pointsCalculator: 'Калькулятор',
      pointsRankings: 'Рейтинг',
      pointsTrends: 'Тренды',

      // Подменю управления соревнованиями
      eventsSchedule: 'Расписание',
      eventsRegister: 'Регистрация',
      eventsResults: 'Результаты',
      eventsStats: 'Статистика',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Подменю спортсменов
      athletesList: 'Список Спортсменов',
      athletesProfile: 'Профиль Спортсмена',
      athletesStats: 'Статистика',

      // Подменю документов
      docsPointsRules: 'Правила Очков',
      docsCompetitionRules: 'Правила Соревнований',
      docsVenueStandards: 'Стандарты Объектов',
      docsGuide: 'Руководство Пользователя',

      // Подменю личного центра
      myProfile: 'Личный Центр',
      myPoints: 'Мои Очки',
      myRegistrations: 'Мои Регистрации',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Навигация breadcrumb
  breadcrumb: {
    home: 'Главная',
    disciplines: 'Лыжные Дисциплины',
    alpine: 'Горные Лыжи',
    snowboardSlopestyle: 'Сноуборд Слоупстайл/Биг-Эйр',
    snowboardParallel: 'Сноуборд Параллель',
    freeskiSlopestyle: 'Фристайл Слоупстайл/Биг-Эйр',
    points: 'Центр Очков',
    events: 'Соревнования',
    my: 'Мой Раздел',
    docs: 'База Знаний',
    about: 'О Системе'
  },

  // Страница Горных Лыж
  alpine: {
    title: 'Горные Лыжи',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Горные',

    hero: {
      slide1: {
        title: 'Основные моменты Национального чемпионата 2024',
        subtitle: 'Свидетель славных моментов китайских горных лыж'
      },
      slide2: {
        title: 'Обновление Системы Очков',
        subtitle: 'Более точный расчет очков на основе правил v4.0'
      },
      slide3: {
        title: 'Регистрация на Зимний Тренировочный Лагерь',
        subtitle: 'Профессиональная команда тренеров для улучшения ваших навыков'
      }
    },

    quickAccess: {
      results: { title: 'Результаты', nameEn: 'Results' },
      rankings: { title: 'Рейтинг', nameEn: 'Rankings' },
      schedule: { title: 'Календарь', nameEn: 'Calendar' },
      videos: { title: 'Видео', nameEn: 'Videos' },
      athletes: { title: 'Спортсмены', nameEn: 'Athletes' },
      documents: { title: 'Документы', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Предстоящие'
    },

    latestNews: {
      title: 'Последние Новости'
    },

    topAthletes: {
      title: 'Рейтинг'
    }
  },

  // Страница Фристайл Слоупстайл
  freestyleSlopestyle: {
    title: 'Фристайл Слоупстайл',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Фристайл SS',

    hero: {
      slide1: {
        title: 'Национальный чемпионат по Фристайлу Слоупстайл 2024',
        subtitle: 'Свидетель экстремального прорыва китайского фристайла'
      },
      slide2: {
        title: 'Система Очков с 360 Уровнями',
        subtitle: 'Справедливый механизм оценки на основе коэффициента сложности'
      },
      slide3: {
        title: 'Программа Развития Молодежи Серии U',
        subtitle: 'Система воспитания талантов U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Результаты', nameEn: 'Results' },
      rankings: { title: 'Рейтинг', nameEn: 'Rankings' },
      schedule: { title: 'Календарь', nameEn: 'Calendar' },
      videos: { title: 'Видео', nameEn: 'Videos' },
      athletes: { title: 'Спортсмены', nameEn: 'Athletes' },
      documents: { title: 'Документы', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Предстоящие'
    },

    latestNews: {
      title: 'Последние Новости'
    },

    topAthletes: {
      title: 'Рейтинг'
    }
  },

  // Страница Сноуборд Слоупстайл
  snowboardSlopestyle: {
    title: 'Сноуборд Слоупстайл',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Сноуборд SS',

    hero: {
      slide1: {
        title: 'Национальный чемпионат по Сноуборду Слоупстайл 2024',
        subtitle: 'Свидетель захватывающих моментов китайского сноуборда'
      },
      slide2: {
        title: 'Система Очков с 360 Уровнями',
        subtitle: 'Правила расчета очков на основе международных стандартов'
      },
      slide3: {
        title: 'Программа Подготовки Молодежи Серии U',
        subtitle: 'Трехуровневая система воспитания U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Результаты', nameEn: 'Results' },
      rankings: { title: 'Рейтинг', nameEn: 'Rankings' },
      schedule: { title: 'Календарь', nameEn: 'Calendar' },
      videos: { title: 'Видео', nameEn: 'Videos' },
      athletes: { title: 'Спортсмены', nameEn: 'Athletes' },
      documents: { title: 'Документы', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Предстоящие'
    },

    latestNews: {
      title: 'Последние Новости'
    },

    topAthletes: {
      title: 'Рейтинг'
    }
  },

  // Страница Сноуборд Параллель
  snowboardParallel: {
    title: 'Сноуборд Параллель',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Сноуборд Параллель',

    hero: {
      slide1: {
        title: 'Национальный чемпионат по Сноуборду Параллель 2024',
        subtitle: 'Идеальное сочетание скорости и мастерства'
      },
      slide2: {
        title: 'Система Очков Выбывания',
        subtitle: 'Справедливый расчет очков на основе рейтингов один на один'
      },
      slide3: {
        title: 'Программа Развития Элитных Спортсменов',
        subtitle: 'Повышение гоночного уровня и участие в международных соревнованиях'
      }
    },

    quickAccess: {
      results: { title: 'Результаты', nameEn: 'Results' },
      rankings: { title: 'Рейтинг', nameEn: 'Rankings' },
      schedule: { title: 'Календарь', nameEn: 'Calendar' },
      videos: { title: 'Видео', nameEn: 'Videos' },
      athletes: { title: 'Спортсмены', nameEn: 'Athletes' },
      documents: { title: 'Документы', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Предстоящие'
    },

    latestNews: {
      title: 'Последние Новости'
    },

    topAthletes: {
      title: 'Рейтинг'
    }
  },

  // Селектор языка
  languageSelector: {
    title: 'Выберите язык',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Аутентификация и разрешения
  auth: {
    needsLogin: 'Требуется вход',
    loginToUnlock: 'Войдите чтобы разблокировать больше функций',
    comingSoon: 'Скоро доступно',
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
