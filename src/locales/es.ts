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
  }
};