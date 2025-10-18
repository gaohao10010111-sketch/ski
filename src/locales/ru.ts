// Russian language pack - Русский языковой пакет
import type { TranslationKeys } from './zh';

export const ru: Partial<TranslationKeys> = {
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
    },
    docs: {
      competitionRules: {
        title: 'Технический регламент',
        description: 'Правила проведения соревнований и стандарты судейства',
        backLabel: 'Назад к базе знаний'
      },
      pointsRules: {
        title: 'Правила очков',
        description: 'Документация по расчёту очков',
        backLabel: 'Назад к базе знаний'
      },
      venueStandards: {
        title: 'Стандарты площадок',
        description: 'Требования к инфраструктуре и безопасности',
        backLabel: 'Назад к базе знаний'
      },
      fisRules: {
        title: 'Правила FIS',
        description: 'Регламенты Международной федерации лыжного спорта',
        backLabel: 'Назад к базе знаний'
      },
      guide: {
        title: 'Руководство по платформе',
        description: 'Инструкции по функциям и ответы на вопросы',
        backLabel: 'Назад к базе знаний'
      }
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
    languages: {
      zh: 'Китайский',
      en: 'Английский',
      ja: 'Японский',
      ko: 'Корейский',
      de: 'Немецкий',
      fr: 'Французский',
      it: 'Итальянский',
      ru: 'Русский',
      no: 'Норвежский',
      sv: 'Шведский',
      fi: 'Финский',
      es: 'Испанский'
    }
  },

  // Компонент «Скоро»
  comingSoon: {
    title: 'Скоро доступно',
    description: 'Функция находится в разработке. Загляните позже.',
    backLabel: 'Вернуться на главную',
    learnMoreLabel: 'Узнать больше',
    progressLabel: 'Ход разработки',
    progressValue: '30%',
    eta: 'Ориентировочный запуск: 2–4 недели',
    upcomingFeaturesTitle: 'Предстоящие возможности',
    upcomingFeatures: ['Обновления данных в реальном времени', 'Интеллектуальная аналитика', 'Персональные рекомендации', 'Оптимизация для мобильных устройств']
  },

  // Центр документации
  docsPage: {
    hero: {
      title: 'База знаний',
      description: 'Соревновательные правила, технические стандарты и руководства по платформе'
    },
    viewDocLabel: 'Открыть документ',
    categories: {
      pointsRules: {
        title: 'Правила начисления очков',
        description: 'Подробное руководство по китайской системе очков',
        topics: ['Формулы расчёта очков', 'Коэффициенты уровней соревнований', 'Механизм штрафов', 'Таблицы очков BL/NL']
      },
      competitionRules: {
        title: 'Технический регламент',
        description: 'Правила проведения соревнований и стандарты судейства',
        topics: ['Ход соревнований', 'Судейские правила', 'Системы хронометража', 'Процедура апелляций']
      },
      venueStandards: {
        title: 'Стандарты площадок',
        description: 'Требования к инфраструктуре и безопасности',
        topics: ['Стандарты трасс', 'Требования к оборудованию', 'Меры безопасности', 'Процесс сертификации']
      },
      fisRules: {
        title: 'Правила FIS',
        description: 'Регламенты Международной федерации лыжного спорта',
        topics: ['Правила очков FIS', 'Регламент ICR', 'Международные стандарты', 'Двуязычные материалы']
      },
      guide: {
        title: 'Руководство по платформе',
        description: 'Инструкции по функциям и ответы на вопросы',
        topics: ['Процесс регистрации', 'Руководство по заявке', 'Просмотр очков', 'Частые вопросы']
      }
    },
    popular: {
      title: 'Популярные документы',
      viewsLabel: 'просмотров',
      items: {
        alpineRulesV4: { title: 'Правила очков по горным лыжам (Китай) v4.0', category: 'Правила очков' },
        seasonGrading: { title: 'Стандарты классификации сезона 2024-2025', category: 'Технический регламент' },
        youthSeries: { title: 'Программа соревнований серии U для юниоров', category: 'Технический регламент' },
        fisPointsGuide: { title: 'Руководство по расчёту очков FIS', category: 'Правила FIS' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Библиотека правил китайского горнолыжного спорта',
      description: 'Изучите упрощённую систему правил: расчёт очков, управление соревнованиями и развитие молодёжи.',
      highlights: [
        { icon: 'award', text: 'Официальный стандарт' },
        { icon: 'target', text: 'Упрощённый расчёт' },
        { icon: 'users', text: 'Расширенная молодёжная система' }
      ]
    },
    headings: {
      ruleModules: 'Модули правил'
    },
    toc: {
      toggleTitle: 'Показать/скрыть оглавление',
      title: 'Структура страницы',
      download: 'Скачать PDF-версию',
      items: {
        coreFormula: 'Базовая формула',
        ruleModules: 'Модули правил',
        coreFeatures: 'Ключевые особенности',
        quickLinks: 'Быстрые ссылки',
        upgradeInfo: 'Информация об обновлении',
        importantNotice: 'Важные сведения'
      }
    },
    formula: {
      title: 'Базовая формула',
      expression: 'Итоговые очки = (Базовые очки + Штрафные очки) × Коэффициент соревнования',
      description: 'По сравнению с версией 2.0 исключены сложные корректирующие факторы. Трёхшаговый метод повышает эффективность и прозрачность.',
      copyButton: 'Скопировать формулу',
      copySuccess: 'Скопировано в буфер обмена!',
      calculatorButton: 'Открыть калькулятор'
    },
    ruleModules: {
      points: {
        title: 'Правила начисления очков',
        description: 'Упрощённая система расчёта, основанная на трёх шагах.',
        features: ['Трёхшаговая формула', 'Трёхуровневая классификация A/B/C', 'Расширенные молодёжные категории', 'Повышенная прозрачность'],
        linkLabel: 'Подробнее'
      },
      competition: {
        title: 'Гид по соревнованиям',
        description: 'Понимание обновлённых правил и молодёжной системы с практическими рекомендациями.',
        features: ['Обзор дисциплин', 'Возрастные категории', 'Путь участника', 'Стандарты безопасности и технические требования'],
        linkLabel: 'Подробнее'
      },
      documents: {
        title: 'Документация по очкам',
        description: 'Все материалы и инструменты упрощённой системы начисления очков в одном месте.',
        features: ['Подробные разъяснения', 'Описание компонентов формулы', 'Онлайн-калькулятор', 'PDF-загрузки'],
        linkLabel: 'Подробнее'
      }
    },
    v4Features: {
      title: 'Ключевые особенности',
      items: {
        simplified: {
          title: 'Упрощённый расчёт',
          description: 'Удалены сложные корректирующие факторы.'
        },
        tiers: {
          title: 'Трёхуровневая система',
          description: 'Категории A (1,0), B (0,6) и C (0,3) обеспечивают понятную структуру.'
        },
        youth: {
          title: 'Поддержка молодёжи',
          description: 'Адресная поддержка возрастных групп U15–U18.'
        },
        efficiency: {
          title: 'Эффективность и прозрачность',
          description: 'Трёхшаговый процесс ускоряет и упрощает контроль.'
        }
      }
    },
    quickLinks: {
      title: 'Быстрые ссылки',
      items: {
        calculator: { label: 'Калькулятор очков' },
        rankings: { label: 'Рейтинги очков' },
        data: { label: 'Управление данными соревнований' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Информация об обновлении',
      improvements: {
        title: 'Основные улучшения',
        items: ['Упрощённая формула без сложных коэффициентов', 'Трёхуровневая классификация соревнований', 'Расширенные молодёжные категории', 'Повышенная прозрачность и эффективность']
      },
      advantages: {
        title: 'Технические преимущества',
        items: ['Трёхшаговый расчёт легко внедрить', 'Стандартизованное управление по международным нормам', 'Цифровые инструменты и онлайн-поддержка', 'Открытая и справедливая соревновательная среда']
      }
    },
    importantNotice: {
      title: 'Важные сведения',
      version: {
        title: 'Версия правил',
        items: ['Текущая версия: последняя редакция', 'Период действия: сезон 2024–2025', 'Сфера применения: соревнования в Китае', 'Цикл обновления: при необходимости']
      },
      usage: {
        title: 'Рекомендации по использованию',
        items: ['Начните с обзора правил начисления очков', 'Проверяйте расчёты с помощью онлайн-калькулятора', 'Следите за новыми программами для молодёжи', 'Оперативно отслеживайте обновления правил']
      },
      support: 'Это правило объединяет международный опыт и особенности Китая, обеспечивая справедливое и эффективное развитие горнолыжного спорта. Вопросы и предложения направляйте по указанным каналам.'
    }
  },

  // Тексты страниц (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Каталог спортсменов',
          description: 'Просмотрите все профили зарегистрированных спортсменов',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        rankings: {
          title: 'Рейтинг спортсменов',
          description: 'Комплексный рейтинг по очкам и результатам',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        stats: {
          title: 'Статистика спортсменов',
          description: 'Подробная статистика и визуальная аналитика',
          backLabel: 'Вернуться к горнолыжному спорту'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Регламент соревнований',
          description: 'Подробные технические стандарты соревнований',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        'points-rules': {
          title: 'Правила начисления очков',
          description: 'Изучите правила начисления очков v4.0 для горных лыж',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        'venue-standards': {
          title: 'Стандарты трасс',
          description: 'Стандарты площадок и требования к сертификации',
          backLabel: 'Вернуться к горнолыжному спорту'
        }
      },
      events: {
        register: {
          title: 'Онлайн-заявка',
          description: 'Упрощённая система регистрации появится скоро',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        results: {
          title: 'Результаты',
          description: 'Просматривайте результаты и обновления очков в реальном времени',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        schedule: {
          title: 'Календарь стартов',
          description: 'Узнайте о предстоящих соревнованиях по горным лыжам',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        stats: {
          title: 'Статистика соревнований',
          description: 'Комплексный набор аналитических инструментов',
          backLabel: 'Вернуться к горнолыжному спорту'
        }
      },
      points: {
        calculator: {
          title: 'Калькулятор очков',
          description: 'Точный калькулятор очков v4.0 появится скоро',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        rankings: {
          title: 'Рейтинг по очкам',
          description: 'Онлайн-рейтинг спортсменов появится скоро',
          backLabel: 'Вернуться к горнолыжному спорту'
        },
        trends: {
          title: 'Динамика очков',
          description: 'Инструменты визуального анализа динамики очков появятся скоро',
          backLabel: 'Вернуться к горнолыжному спорту'
        }
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Каталог спортсменов',
          description: 'Просмотрите все профили зарегистрированных спортсменов',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        rankings: {
          title: 'Рейтинг спортсменов',
          description: 'Комплексный рейтинг по очкам и результатам',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        stats: {
          title: 'Статистика спортсменов',
          description: 'Подробная статистика и визуальная аналитика',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Регламент соревнований',
          description: 'Подробные технические стандарты соревнований',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        'points-rules': {
          title: 'Правила начисления очков',
          description: 'Подробные правила расчёта очков',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        'venue-standards': {
          title: 'Стандарты площадок',
          description: 'Технические требования и сертификация площадок',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        }
      },
      events: {
        register: {
          title: 'Онлайн-заявка',
          description: 'Упрощённая система регистрации появится скоро',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        results: {
          title: 'Результаты',
          description: 'Просматривайте результаты и обновления очков в реальном времени',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        schedule: {
          title: 'Календарь стартов',
          description: 'Узнайте о предстоящих соревнованиях',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        stats: {
          title: 'Статистика соревнований',
          description: 'Комплексный набор аналитических инструментов',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        }
      },
      points: {
        calculator: {
          title: 'Калькулятор очков',
          description: 'Точный калькулятор очков появится скоро',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        rankings: {
          title: 'Рейтинг по очкам',
          description: 'Онлайн-рейтинг спортсменов появится скоро',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        },
        trends: {
          title: 'Динамика очков',
          description: 'Инструменты для анализа динамики очков появятся скоро',
          backLabel: 'Вернуться к фристайлу слоупстайл'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Каталог спортсменов',
          description: 'Просмотрите все профили зарегистрированных спортсменов',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        rankings: {
          title: 'Рейтинг спортсменов',
          description: 'Комплексный рейтинг по очкам и результатам',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        stats: {
          title: 'Статистика спортсменов',
          description: 'Подробная статистика и визуальная аналитика',
          backLabel: 'Вернуться к параллельному сноуборду'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Регламент соревнований',
          description: 'Подробные технические стандарты соревнований',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        'points-rules': {
          title: 'Правила начисления очков',
          description: 'Подробные правила расчёта очков',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        'venue-standards': {
          title: 'Стандарты площадок',
          description: 'Технические требования и сертификация площадок',
          backLabel: 'Вернуться к параллельному сноуборду'
        }
      },
      events: {
        register: {
          title: 'Онлайн-заявка',
          description: 'Упрощённая система регистрации появится скоро',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        results: {
          title: 'Результаты',
          description: 'Просматривайте результаты и обновления очков в реальном времени',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        schedule: {
          title: 'Календарь стартов',
          description: 'Узнайте о предстоящих соревнованиях',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        stats: {
          title: 'Статистика соревнований',
          description: 'Комплексный набор аналитических инструментов',
          backLabel: 'Вернуться к параллельному сноуборду'
        }
      },
      points: {
        calculator: {
          title: 'Калькулятор очков',
          description: 'Точный калькулятор очков появится скоро',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        rankings: {
          title: 'Рейтинг по очкам',
          description: 'Онлайн-рейтинг спортсменов появится скоро',
          backLabel: 'Вернуться к параллельному сноуборду'
        },
        trends: {
          title: 'Динамика очков',
          description: 'Инструменты для анализа динамики очков появятся скоро',
          backLabel: 'Вернуться к параллельному сноуборду'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Каталог спортсменов',
          description: 'Просмотрите все профили зарегистрированных спортсменов',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        rankings: {
          title: 'Рейтинг спортсменов',
          description: 'Комплексный рейтинг по очкам и результатам',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        stats: {
          title: 'Статистика спортсменов',
          description: 'Подробная статистика и визуальная аналитика',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Регламент соревнований',
          description: 'Подробные технические стандарты соревнований',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        'points-rules': {
          title: 'Правила начисления очков',
          description: 'Подробные правила расчёта очков',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        'venue-standards': {
          title: 'Стандарты площадок',
          description: 'Технические требования и сертификация площадок',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        }
      },
      events: {
        register: {
          title: 'Онлайн-заявка',
          description: 'Упрощённая система регистрации появится скоро',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        results: {
          title: 'Результаты',
          description: 'Просматривайте результаты и обновления очков в реальном времени',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        schedule: {
          title: 'Календарь стартов',
          description: 'Узнайте о предстоящих соревнованиях',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        stats: {
          title: 'Статистика соревнований',
          description: 'Комплексный набор аналитических инструментов',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        }
      },
      points: {
        calculator: {
          title: 'Калькулятор очков',
          description: 'Точный калькулятор очков появится скоро',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        rankings: {
          title: 'Рейтинг по очкам',
          description: 'Онлайн-рейтинг спортсменов появится скоро',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        },
        trends: {
          title: 'Динамика очков',
          description: 'Инструменты для анализа динамики очков появятся скоро',
          backLabel: 'Вернуться к слоупстайлу на сноуборде'
        }
      }
    }
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
