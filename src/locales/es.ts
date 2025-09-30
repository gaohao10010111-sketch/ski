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
    profile: 'Perfil'
  },

  // Navegación
  navigation: {
    title: 'Sistema de Puntos de Esquí Chino',
    titleShort: 'CSPS',
    disciplines: 'Disciplinas',
    points: 'Puntos',
    events: 'Competencias',
    my: 'Mi',
    docs: 'Documentos',
    about: 'Acerca',
    
    // Submenús
    submenus: {
      // Disciplinas de Esquí
      alpine: 'Esquí Alpino',
      snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
      snowboardParallel: 'Snowboard Paralelo',
      freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
      
      // Centro de Puntos
      myPoints: 'Mis Puntos',
      pointsQuery: 'Consulta de Puntos',
      pointsCalculator: 'Calculadora de Puntos',
      pointsRankings: 'Clasificación de Puntos',
      pointsTrends: 'Análisis de Tendencias',
      
      // Competencias
      eventsSchedule: 'Calendario de Eventos',
      eventsRegister: 'Registro en Línea',
      eventsList: 'Lista de Competencias',
      eventsResults: 'Consulta de Resultados',
      eventsStats: 'Estadísticas de Datos',
      
      // Mi Área
      personalCenter: 'Centro Personal',
      myRegistrations: 'Mis Registros',
      athleteProfile: 'Perfil de Atleta',
      resultsHistory: 'Historial de Resultados',
      
      // Base de Conocimientos
      pointsRules: 'Reglas de Puntos',
      competitionRules: 'Reglas de Competencia',
      venueStandards: 'Estándares de Instalaciones',
      fisRules: 'Reglas FIS',
      userGuide: 'Guía del Usuario'
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
    title: 'Sistema de Puntos de Esquí Alpino',
    subtitle: 'Alpine Skiing Points System',
    description: 'Fórmula basada en tiempo v4.0',
    
    // Etiquetas
    tags: {
      timeBasedFormula: 'Fórmula basada en tiempo v4.0',
      raceLevels: 'Niveles de carrera A/B/C',
      penaltyCalculation: 'Cálculo dinámico de penalizaciones'
    },
    
    // Acceso rápido
    quickLinks: {
      title: 'Acceso Rápido a Funciones',
      pointsRanking: {
        title: 'Clasificación de Puntos',
        description: 'Ver clasificaciones de puntos de la temporada actual'
      },
      pointsCalculator: {
        title: 'Calculadora de Puntos',
        description: 'Cálculo en tiempo real con fórmula v4.0'
      },
      competitions: {
        title: 'Gestión de Competencias',
        description: 'Ver calendario y resultados de carreras'
      },
      athletes: {
        title: 'Perfiles de Atletas',
        description: 'Información de atletas y consulta de resultados'
      },
      registration: {
        title: 'Registro en Línea',
        description: 'Participar en competencias de esquí alpino'
      },
      rules: {
        title: 'Documentación de Reglas',
        description: 'Reglas de competencia de esquí alpino'
      },
      enterFunction: 'Acceder a la función'
    },
    
    // Reglas de puntos
    pointsRules: {
      title: 'Reglas de Puntos de Esquí Alpino (v4.0)',
      baseFormula: {
        title: 'Fórmula de Puntos Base de Carrera',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Puntos base | F=Factor disciplina | Tx=Tiempo competidor | To=Tiempo ganador'
      },
      finalFormula: {
        title: 'Cálculo de Puntos Finales',
        formula: 'Puntos Finales = (P + Penalización) × Coeficiente de Carrera',
        description: 'Nivel A(1.0) | Nivel B(0.6) | Nivel C(0.3)'
      },
      disciplineFactors: {
        title: 'Tabla de Factores de Disciplina',
        downhill: 'Descenso DH',
        slalom: 'Eslalon SL',
        giantSlalom: 'Eslalon Gigante GS',
        superG: 'Super Gigante SG',
        combined: 'Combinada Alpina AC'
      }
    },
    
    // Estadísticas
    statistics: {
      title: 'Estadísticas en Tiempo Real',
      registeredAthletes: 'Atletas Registrados',
      seasonEvents: 'Eventos de la Temporada',
      raceCount: 'Número de Carreras',
      averagePoints: 'Puntos Promedio',
      monthlyIncrease: '12 nuevos este mes',
      seasonGrowth: '16% de crecimiento respecto a la temporada pasada',
      pandemicImpact: 'Ligeramente afectado por la pandemia',
      levelImprovement: 'Nivel general mejorando constantemente'
    }
  },

  // Página Freeski Slopestyle
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Sistema de Puntos 240/360/120',
      judgingSystem: 'Sistema de Jueces',
      competitionFormat: 'Formato Clasificatoria/Final'
    },
    
    pointsSystem: {
      title: 'Sistema de Puntos Escalonado',
      class1: {
        title: 'Competencias Clase 1',
        description: 'Campeonatos nacionales y eventos de alto nivel'
      },
      class2: {
        title: 'Competencias Clase 2',
        description: 'Competencias regionales importantes'
      },
      class3: {
        title: 'Competencias Clase 3',
        description: 'Competencias locales regulares'
      }
    }
  },

  // Página Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Sistema de Puntos 240/360/120',
      judgingSystem: 'Sistema de Jueces',
      competitionFormat: 'Formato Clasificatoria/Final'
    }
  },

  // Página Snowboard Paralelo
  snowboardParallel: {
    title: 'Disciplinas Snowboard Paralelo',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Puntuación basada en tiempo',
      eliminationFormat: 'Formato de eliminación',
      parallelEvents: 'Disciplinas PGS/PSL'
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
    comingSoon: 'Próximamente disponible'
  }
};