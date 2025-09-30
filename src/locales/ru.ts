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
    profile: 'Профиль'
  },

  // Навигация
  navigation: {
    title: 'Китайская Система Очков в Лыжном Спорте',
    titleShort: 'CSPS',
    disciplines: 'Дисциплины',
    points: 'Очки',
    events: 'События',
    my: 'Моё',
    docs: 'Документы',
    about: 'О нас',
    
    // Подменю
    submenus: {
      // Лыжные Дисциплины
      alpine: 'Горные Лыжи',
      snowboardSlopestyle: 'Сноуборд Слоупстайл/Биг-Эйр',
      snowboardParallel: 'Сноуборд Параллель',
      freeskiSlopestyle: 'Фристайл Слоупстайл/Биг-Эйр',
      
      // Центр Очков
      myPoints: 'Мои Очки',
      pointsQuery: 'Запрос Очков',
      pointsCalculator: 'Калькулятор Очков',
      pointsRankings: 'Рейтинг Очков',
      pointsTrends: 'Анализ Трендов Очков',
      
      // Соревнования
      eventsSchedule: 'Календарь Соревнований',
      eventsRegister: 'Онлайн Регистрация',
      eventsList: 'Список Соревнований',
      eventsResults: 'Запрос Результатов',
      eventsStats: 'Статистика Данных',
      
      // Мой Раздел
      personalCenter: 'Личный Центр',
      myRegistrations: 'Мои Регистрации',
      athleteProfile: 'Профиль Спортсмена',
      resultsHistory: 'История Результатов',
      
      // База Знаний
      pointsRules: 'Правила Очков',
      competitionRules: 'Правила Соревнований',
      venueStandards: 'Стандарты Объектов',
      fisRules: 'Правила ФИС',
      userGuide: 'Руководство Пользователя'
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
    title: 'Система Очков Горных Лыж',
    subtitle: 'Alpine Skiing Points System',
    description: 'Формула на основе времени v4.0',
    
    // Теги
    tags: {
      timeBasedFormula: 'Формула на основе времени v4.0',
      raceLevels: 'Уровни гонок A/B/C',
      penaltyCalculation: 'Динамический расчет штрафов'
    },
    
    // Быстрый доступ
    quickLinks: {
      title: 'Быстрый Доступ к Функциям',
      pointsRanking: {
        title: 'Рейтинг Очков',
        description: 'Просмотр рейтинга очков текущего сезона'
      },
      pointsCalculator: {
        title: 'Калькулятор Очков',
        description: 'Расчет в реальном времени по формуле v4.0'
      },
      competitions: {
        title: 'Управление Соревнованиями',
        description: 'Просмотр расписания и результатов гонок'
      },
      athletes: {
        title: 'Профили Спортсменов',
        description: 'Информация о спортсменах и запрос результатов'
      },
      registration: {
        title: 'Онлайн Регистрация',
        description: 'Участие в соревнованиях по горным лыжам'
      },
      rules: {
        title: 'Документация Правил',
        description: 'Правила соревнований по горным лыжам'
      },
      enterFunction: 'Войти в функцию'
    },
    
    // Правила очков
    pointsRules: {
      title: 'Правила Очков Горных Лыж (v4.0)',
      baseFormula: {
        title: 'Формула Базовых Очков Гонки',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Базовые очки | F=Фактор дисциплины | Tx=Время участника | To=Время победителя'
      },
      finalFormula: {
        title: 'Расчет Финальных Очков',
        formula: 'Финальные Очки = (P + Штраф) × Коэффициент Гонки',
        description: 'Уровень A(1.0) | Уровень B(0.6) | Уровень C(0.3)'
      },
      disciplineFactors: {
        title: 'Таблица Факторов Дисциплин',
        downhill: 'Скоростной Спуск DH',
        slalom: 'Слалом SL',
        giantSlalom: 'Гигантский Слалом GS',
        superG: 'Супер-Гигант SG',
        combined: 'Альпийское Двоеборье AC'
      }
    },
    
    // Статистика
    statistics: {
      title: 'Статистика в Реальном Времени',
      registeredAthletes: 'Зарегистрированные Спортсмены',
      seasonEvents: 'Соревнования Сезона',
      raceCount: 'Количество Гонок',
      averagePoints: 'Средние Очки',
      monthlyIncrease: '12 новых в этом месяце',
      seasonGrowth: '16% роста по сравнению с прошлым сезоном',
      pandemicImpact: 'Незначительно затронуто пандемией',
      levelImprovement: 'Общий уровень стабильно улучшается'
    }
  },

  // Страница Фристайл Слоупстайл
  freeskiSlopestyle: {
    title: 'Фристайл Слоупстайл/Биг-Эйр',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Система Очков 240/360/120',
      judgingSystem: 'Система Судейства',
      competitionFormat: 'Формат Квалификация/Финал'
    },
    
    pointsSystem: {
      title: 'Ступенчатая Система Очков',
      class1: {
        title: 'Соревнования Класса 1',
        description: 'Национальные чемпионаты и мероприятия высшего уровня'
      },
      class2: {
        title: 'Соревнования Класса 2',
        description: 'Региональные важные соревнования'
      },
      class3: {
        title: 'Соревнования Класса 3',
        description: 'Местные регулярные соревнования'
      }
    }
  },

  // Страница Сноуборд Слоупстайл
  snowboardSlopestyle: {
    title: 'Сноуборд Слоупстайл/Биг-Эйр',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Система Очков 240/360/120',
      judgingSystem: 'Система Судейства',
      competitionFormat: 'Формат Квалификация/Финал'
    }
  },

  // Страница Сноуборд Параллель
  snowboardParallel: {
    title: 'Дисциплины Сноуборд Параллель',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Оценка на основе времени',
      eliminationFormat: 'Формат на выбывание',
      parallelEvents: 'Дисциплины PGS/PSL'
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