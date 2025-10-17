// Spanish language pack - Paquete de idioma español
import { TranslationKeys } from './zh';

export const es: TranslationKeys = {
  // Común
  common: {
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Guardar',
    edit: 'Editar',
    delete: 'Eliminar',
    search: 'Buscar',
    filter: 'Filtrar',
    export: 'Exportar',
    import: 'Importar',
    back: 'Atrás',
    next: 'Siguiente',
    previous: 'Anterior',
    submit: 'Enviar',
    reset: 'Restablecer',
    home: 'Inicio',
    language: 'Idioma',
    login: 'Iniciar Sesión',
    logout: 'Cerrar Sesión',
    register: 'Registrarse',
    profile: 'Perfil',
    viewDetails: 'Ver detalles',
    viewFullSchedule: 'Ver calendario completo →',
    viewFullRankings: 'Ver clasificación completa →',
    readMore: 'Leer más'
  },

  // Navegación
  navigation: {
    title: 'Sistema de Puntos de Esquí Chino',
    titleShort: 'CSPS',

    // Selector de proyectos
    disciplines: 'Disciplinas',
    alpine: 'Esquí Alpino',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Paralelo',
    freestyleSlopestyle: 'Freeski Slopestyle',

    // Navegación global
    my: 'Mi',
    docs: 'Documentos',
    about: 'Acerca',

    // Navegación de nivel de proyecto
    points: 'Gestión de Puntos',
    events: 'Gestión de Competencias',
    athletes: 'Atletas',

    // Submenús
    submenus: {
      // Submenús de gestión de puntos
      pointsCalculator: 'Calculadora de Puntos',
      pointsRankings: 'Clasificación de Puntos',
      pointsTrends: 'Tendencias de Puntos',

      // Submenús de gestión de competencias
      eventsSchedule: 'Calendario de Eventos',
      eventsRegister: 'Registro en Línea',
      eventsResults: 'Consulta de Resultados',
      eventsStats: 'Estadísticas de Datos',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Submenús de atletas
      athletesList: 'Lista de Atletas',
      athletesProfile: 'Perfil de Atleta',
      athletesStats: 'Estadísticas de Atletas',

      // Submenús de documentos
      docsPointsRules: 'Reglas de Puntos',
      docsCompetitionRules: 'Reglas de Competencia',
      docsVenueStandards: 'Estándares de Instalaciones',
      docsGuide: 'Guía del Usuario',

      // Submenús de mi área
      myProfile: 'Centro Personal',
      myPoints: 'Mis Puntos',
      myRegistrations: 'Mis Registros',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Navegación breadcrumb
  breadcrumb: {
    home: 'Inicio',
    disciplines: 'Disciplinas de Esquí',
    alpine: 'Esquí Alpino',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Paralelo',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Centro de Puntos',
    events: 'Competencias',
    my: 'Mi Área',
    docs: 'Base de Conocimientos',
    about: 'Acerca del Sistema'
  },

  // Página de Esquí Alpino
  alpine: {
    title: 'Esquí Alpino',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpino',

    hero: {
      slide1: {
        title: 'Destacados del Campeonato Nacional 2024',
        subtitle: 'Presencia los momentos gloriosos del esquí alpino chino'
      },
      slide2: {
        title: 'Actualización del Sistema de Puntos',
        subtitle: 'Cálculo de puntos más preciso basado en reglas v4.0'
      },
      slide3: {
        title: 'Campamento de Entrenamiento de Invierno Abierto',
        subtitle: 'Equipo de entrenadores profesionales ayuda a mejorar tus habilidades'
      }
    },

    quickAccess: {
      results: { title: 'Resultados de Competencias', nameEn: 'Results' },
      rankings: { title: 'Clasificación de Puntos', nameEn: 'Rankings' },
      schedule: { title: 'Calendario de Eventos', nameEn: 'Calendar' },
      videos: { title: 'Centro de Videos', nameEn: 'Videos' },
      athletes: { title: 'Registro de Atletas', nameEn: 'Athletes' },
      documents: { title: 'Documentos de Reglas', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Próximos Eventos'
    },

    latestNews: {
      title: 'Últimas Noticias'
    },

    topAthletes: {
      title: 'Clasificación de Puntos'
    }
  },

  // Página Freeski Slopestyle
  freestyleSlopestyle: {
    title: 'Freeski Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freeski SS',

    hero: {
      slide1: {
        title: 'Campeonato Nacional de Freeski Slopestyle 2024',
        subtitle: 'Presencia momentos de ruptura de límites del freeski chino'
      },
      slide2: {
        title: 'Sistema de Puntos Graduado 360',
        subtitle: 'Mecanismo de puntuación justo basado en coeficiente de dificultad'
      },
      slide3: {
        title: 'Programa de Desarrollo Juvenil Serie U',
        subtitle: 'Sistema de desarrollo de talentos U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Resultados de Competencias', nameEn: 'Results' },
      rankings: { title: 'Clasificación de Puntos', nameEn: 'Rankings' },
      schedule: { title: 'Calendario de Eventos', nameEn: 'Calendar' },
      videos: { title: 'Centro de Videos', nameEn: 'Videos' },
      athletes: { title: 'Registro de Atletas', nameEn: 'Athletes' },
      documents: { title: 'Documentos de Reglas', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Próximos Eventos'
    },

    latestNews: {
      title: 'Últimas Noticias'
    },

    topAthletes: {
      title: 'Clasificación de Puntos'
    }
  },

  // Página Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: 'Campeonato Nacional de Snowboard Slopestyle 2024',
        subtitle: 'Presencia momentos emocionantes del snowboard chino'
      },
      slide2: {
        title: 'Sistema de Puntos Graduado 360',
        subtitle: 'Reglas de cálculo de puntos basadas en estándares internacionales'
      },
      slide3: {
        title: 'Programa de Desarrollo Juvenil Serie U',
        subtitle: 'Sistema de desarrollo de tres niveles U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Resultados de Competencias', nameEn: 'Results' },
      rankings: { title: 'Clasificación de Puntos', nameEn: 'Rankings' },
      schedule: { title: 'Calendario de Eventos', nameEn: 'Calendar' },
      videos: { title: 'Centro de Videos', nameEn: 'Videos' },
      athletes: { title: 'Registro de Atletas', nameEn: 'Athletes' },
      documents: { title: 'Documentos de Reglas', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Próximos Eventos'
    },

    latestNews: {
      title: 'Últimas Noticias'
    },

    topAthletes: {
      title: 'Clasificación de Puntos'
    }
  },

  // Página Snowboard Paralelo
  snowboardParallel: {
    title: 'Snowboard Paralelo',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Paralelo',

    hero: {
      slide1: {
        title: 'Campeonato Nacional de Snowboard Paralelo 2024',
        subtitle: 'Combinación perfecta de velocidad y habilidad'
      },
      slide2: {
        title: 'Sistema de Puntos de Torneo',
        subtitle: 'Cálculo justo de puntos basado en clasificación de enfrentamientos'
      },
      slide3: {
        title: 'Programa de Desarrollo de Atletas Elite',
        subtitle: 'Mejora tu nivel de carrera y desafía competencias internacionales'
      }
    },

    quickAccess: {
      results: { title: 'Resultados de Competencias', nameEn: 'Results' },
      rankings: { title: 'Clasificación de Puntos', nameEn: 'Rankings' },
      schedule: { title: 'Calendario de Eventos', nameEn: 'Calendar' },
      videos: { title: 'Centro de Videos', nameEn: 'Videos' },
      athletes: { title: 'Registro de Atletas', nameEn: 'Athletes' },
      documents: { title: 'Documentos de Reglas', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Próximos Eventos'
    },

    latestNews: {
      title: 'Últimas Noticias'
    },

    topAthletes: {
      title: 'Clasificación de Puntos'
    }
  },

  // Selector de idioma
  languageSelector: {
    title: 'Seleccionar idioma',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Autenticación y permisos
  auth: {
    needsLogin: 'Inicio de sesión requerido',
    loginToUnlock: 'Iniciar sesión para desbloquear más funciones',
    comingSoon: 'Próximamente disponible',
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
