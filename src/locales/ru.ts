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
      myAthlete: 'Профиль Спортсмена',
      myHistory: 'История Результатов'
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
    comingSoon: 'Скоро доступно'
  }
};
