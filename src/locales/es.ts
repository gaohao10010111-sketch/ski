// Spanish language pack - Paquete de idioma español
import type { PartialTranslationKeys } from './zh';

export const es: PartialTranslationKeys = {
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
    readMore: 'Leer más',
    cancelled: 'Cancelado'
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
      resultsLive: 'Resultados en vivo',
      resultsImport: 'Importar resultados',
      resultsAnnouncement: 'Publicación de resultados',

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
      myAthlete: 'Perfil de Atleta',
      myHistory: 'Historial de Resultados',

      // Más funciones
      moreFeatures: 'Más'
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
      title: 'Próximos Eventos',
      events: []
    },

    latestNews: {
      title: 'Últimas Noticias',
      items: []
    },

    topAthletes: {
      title: 'Clasificación de Puntos',
      athletes: []
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
      title: 'Próximos Eventos',
      events: []
    },

    latestNews: {
      title: 'Últimas Noticias',
      items: []
    },

    topAthletes: {
      title: 'Clasificación de Puntos',
      athletes: []
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
      title: 'Próximos Eventos',
      events: []
    },

    latestNews: {
      title: 'Últimas Noticias',
      items: []
    },

    topAthletes: {
      title: 'Clasificación de Puntos',
      athletes: []
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
      title: 'Próximos Eventos',
      events: []
    },

    latestNews: {
      title: 'Últimas Noticias',
      items: []
    },

    topAthletes: {
      title: 'Clasificación de Puntos',
      athletes: []
    }
  },

  // Selector de idioma
  languageSelector: {
    title: 'Seleccionar idioma',
    languages: {
      zh: 'Chino',
      en: 'Inglés',
      ja: 'Japonés',
      ko: 'Coreano',
      de: 'Alemán',
      fr: 'Francés',
      it: 'Italiano',
      ru: 'Ruso',
      no: 'Noruego',
      sv: 'Sueco',
      fi: 'Finlandés',
      es: 'Español'
    }
  },

  // Componente Próximamente
  comingSoon: {
    title: 'Próximamente',
    description: 'Esta función está en desarrollo. Vuelve a visitarnos pronto.',
    backLabel: 'Volver al inicio',
    learnMoreLabel: 'Más información',
    progressLabel: 'Progreso del desarrollo',
    progressValue: '30%',
    eta: 'Lanzamiento estimado: 2-4 semanas',
    upcomingFeaturesTitle: 'Funciones previstas',
    upcomingFeatures: ['Actualizaciones de datos en tiempo real', 'Analítica inteligente', 'Recomendaciones personalizadas', 'Optimización móvil']
  },

  // Centro de documentación
  docsPage: {
    hero: {
      title: 'Base de conocimiento',
      description: 'Reglamentos de competición, estándares técnicos y guías de la plataforma'
    },
    viewDocLabel: 'Ver documento',
    categories: {
      pointsRules: {
        title: 'Reglas de puntos',
        description: 'Guía detallada del sistema de puntos en China',
        topics: ['Fórmulas de puntos', 'Coeficientes de categoría', 'Mecanismo de penalización', 'Tablas de puntos BL/NL']
      },
      competitionRules: {
        title: 'Reglamento técnico',
        description: 'Normas de competición y criterios de arbitraje',
        topics: ['Flujo de la competición', 'Reglas de arbitraje', 'Sistemas de cronometraje', 'Procedimiento de apelación']
      },
      venueStandards: {
        title: 'Normas de sedes',
        description: 'Requisitos de infraestructura y seguridad',
        topics: ['Normas de sedes', 'Requisitos de equipamiento', 'Directrices de seguridad', 'Proceso de certificación']
      },
      fisRules: {
        title: 'Reglas FIS',
        description: 'Referencias de la Federación Internacional de Esquí',
        topics: ['Reglas de puntos FIS', 'Reglamento ICR', 'Normas internacionales', 'Referencias bilingües']
      },
      guide: {
        title: 'Guía de la plataforma',
        description: 'Manual de funciones y preguntas frecuentes',
        topics: ['Proceso de registro', 'Guía de inscripción', 'Consulta de puntos', 'Preguntas frecuentes']
      }
    },
    popular: {
      title: 'Documentos populares',
      viewsLabel: 'visualizaciones',
      items: {
        alpineRulesV4: { title: 'Reglas de puntos de esquí alpino en China v4.0', category: 'Reglas de puntos' },
        seasonGrading: { title: 'Estándares de clasificación 2025-2026', category: 'Reglamento técnico' },
        youthSeries: { title: 'Plan de gestión de la serie juvenil U', category: 'Reglamento técnico' },
        fisPointsGuide: { title: 'Guía de cálculo de puntos FIS', category: 'Reglas FIS' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Biblioteca de reglas del esquí alpino chino',
      description: 'Revisa el sistema de reglas simplificado: cálculo de puntos, gestión de competiciones y desarrollo juvenil.',
      highlights: [
        { icon: 'award', text: 'Estándar oficial' },
        { icon: 'target', text: 'Cálculo simplificado' },
        { icon: 'users', text: 'Sistema juvenil ampliado' }
      ]
    },
    headings: {
      ruleModules: 'Módulos de reglas'
    },
    toc: {
      toggleTitle: 'Mostrar/ocultar índice',
      title: 'Estructura de la página',
      download: 'Descargar versión PDF',
      items: {
        coreFormula: 'Fórmula principal',
        ruleModules: 'Módulos de reglas',
        coreFeatures: 'Aspectos destacados',
        quickLinks: 'Accesos rápidos',
        upgradeInfo: 'Información de actualización',
        importantNotice: 'Avisos importantes'
      }
    },
    formula: {
      title: 'Fórmula principal',
      expression: 'Puntuación final = (Puntos base + Penalizaciones) × Coeficiente de la prueba',
      description: 'Frente a la versión 2.0 se eliminaron factores complejos; el método en tres pasos mejora la eficiencia y la transparencia.',
      copyButton: 'Copiar fórmula',
      copySuccess: '¡Copiado al portapapeles!',
      calculatorButton: 'Abrir calculadora'
    },
    ruleModules: {
      points: {
        title: 'Reglas de puntos de China',
        description: 'Sistema simplificado de cálculo basado en tres etapas.',
        features: ['Fórmula de tres pasos', 'Estructura de tres niveles A/B/C', 'Categorías juveniles ampliadas', 'Transparencia mejorada'],
        linkLabel: 'Ver detalles'
      },
      competition: {
        title: 'Guía de competiciones',
        description: 'Comprende las reglas actualizadas y el sistema juvenil con una guía práctica.',
        features: ['Resumen de las pruebas', 'Sistema de categorías por edad', 'Itinerario de participación', 'Normas de seguridad y técnicas'],
        linkLabel: 'Ver detalles'
      },
      documents: {
        title: 'Documentación de puntos',
        description: 'Accede a los documentos y herramientas del sistema de puntos simplificado.',
        features: ['Explicaciones detalladas', 'Componentes de la fórmula', 'Calculadora en línea', 'Descargas PDF'],
        linkLabel: 'Ver detalles'
      }
    },
    v4Features: {
      title: 'Aspectos destacados',
      items: {
        simplified: {
          title: 'Cálculo simplificado',
          description: 'Elimina factores de calidad, participación y bonificaciones adicionales.'
        },
        tiers: {
          title: 'Sistema de tres niveles',
          description: 'Categorías A (1.0), B (0.6) y C (0.3) para una gestión clara.'
        },
        youth: {
          title: 'Juventud ampliada',
          description: 'Apoyo específico para las franjas U15-U18.'
        },
        efficiency: {
          title: 'Eficiente y transparente',
          description: 'El proceso de tres pasos mejora rapidez y claridad.'
        }
      }
    },
    quickLinks: {
      title: 'Accesos rápidos',
      items: {
        calculator: { label: 'Calculadora de puntos' },
        rankings: { label: 'Clasificación de puntos' },
        data: { label: 'Gestión de datos de competiciones' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Información de actualización',
      improvements: {
        title: 'Mejoras principales',
        items: ['Fórmula simplificada sin factores complejos', 'Estructura de competiciones en tres niveles', 'Categorías juveniles ampliadas', 'Mayor transparencia y eficiencia']
      },
      advantages: {
        title: 'Ventajas técnicas',
        items: ['Cálculo en tres pasos fácil de aplicar', 'Gestión estandarizada alineada con estándares internacionales', 'Herramientas digitales y soporte en línea completos', 'Entorno competitivo justo y transparente']
      }
    },
    importantNotice: {
      title: 'Avisos importantes',
      version: {
        title: 'Versión del reglamento',
        items: ['Versión actual: última edición', 'Temporada de aplicación: 2025-2026', 'Ámbito: competiciones nacionales en China', 'Ciclo de actualización: según se requiera']
      },
      usage: {
        title: 'Recomendaciones de uso',
        items: ['Comienza por la visión general de las reglas de puntos', 'Verifica los resultados con la calculadora en línea', 'Sigue de cerca las políticas juveniles', 'Mantente al día con las actualizaciones de las reglas']
      },
      support: 'Este marco normativo combina la experiencia internacional con las necesidades de China para apoyar un desarrollo justo y eficiente del esquí alpino. Si tienes dudas o sugerencias, contáctanos a través de los canales indicados.'
    }
  },

  // Textos de páginas (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Directorio de atletas',
          description: 'Consulta todos los perfiles de atletas registrados',
          backLabel: 'Volver a Esquí Alpino'
        },
        rankings: {
          title: 'Clasificación de atletas',
          description: 'Clasificación integral basada en puntos y resultados',
          backLabel: 'Volver a Esquí Alpino'
        },
        stats: {
          title: 'Estadísticas de atletas',
          description: 'Estadísticas detalladas y análisis visual de atletas',
          backLabel: 'Volver a Esquí Alpino'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Reglamento de competición',
          description: 'Normativa técnica de competición detallada',
          backLabel: 'Volver a Esquí Alpino'
        },
        'points-rules': {
          title: 'Reglas de puntos',
          description: 'Consulta las reglas de puntos v4.0 de esquí alpino',
          backLabel: 'Volver a Esquí Alpino'
        },
        'venue-standards': {
          title: 'Normas de sedes',
          description: 'Requisitos y estándares de homologación para pistas de esquí alpino',
          backLabel: 'Volver a Esquí Alpino'
        }
      },
      events: {
        register: {
          title: 'Inscripción en línea',
          description: 'Sistema de inscripción simplificado disponible próximamente',
          backLabel: 'Volver a Esquí Alpino'
        },
        results: {
          title: 'Consulta de resultados',
          description: 'Consulta en tiempo real resultados y actualizaciones de puntos',
          backLabel: 'Volver a Esquí Alpino'
        },
        schedule: {
          title: 'Calendario de eventos',
          description: 'Consulta los próximos eventos de esquí alpino',
          backLabel: 'Volver a Esquí Alpino'
        },
        stats: {
          title: 'Estadísticas de eventos',
          description: 'Suite completa de análisis de datos de eventos',
          backLabel: 'Volver a Esquí Alpino'
        }
      },
      points: {
        calculator: {
          title: 'Calculadora de puntos',
          description: 'Calculadora de puntos v4.0 precisa disponible próximamente',
          backLabel: 'Volver a Esquí Alpino'
        },
        rankings: {
          title: 'Clasificación por puntos',
          description: 'Clasificación en tiempo real disponible próximamente',
          backLabel: 'Volver a Esquí Alpino'
        },
        trends: {
          title: 'Tendencias de puntos',
          description: 'Herramientas de análisis de tendencias de puntos disponibles próximamente',
          backLabel: 'Volver a Esquí Alpino'
        }
      }
    },
    rules: {
      competition: {
        title: 'Guía de competiciones',
        description: 'Esta página está en preparación. Vuelve a visitarnos pronto.',
        backLabel: 'Volver a la sección de reglas'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Directorio de atletas',
          description: 'Consulta todos los perfiles de atletas registrados',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        rankings: {
          title: 'Clasificación de atletas',
          description: 'Clasificación integral basada en puntos y resultados',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        stats: {
          title: 'Estadísticas de atletas',
          description: 'Estadísticas detalladas y análisis visual de atletas',
          backLabel: 'Volver a Freestyle Slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Reglamento de competición',
          description: 'Normativa técnica de competición detallada',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        'points-rules': {
          title: 'Reglas de puntos',
          description: 'Consulta el detalle de las reglas de cálculo de puntos',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        'venue-standards': {
          title: 'Normas de sedes',
          description: 'Requisitos técnicos y de certificación de las sedes',
          backLabel: 'Volver a Freestyle Slopestyle'
        }
      },
      events: {
        register: {
          title: 'Inscripción en línea',
          description: 'Sistema de inscripción simplificado disponible próximamente',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        results: {
          title: 'Consulta de resultados',
          description: 'Consulta en tiempo real resultados y actualizaciones de puntos',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        schedule: {
          title: 'Calendario de eventos',
          description: 'Consulta el calendario de próximos eventos',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        stats: {
          title: 'Estadísticas de eventos',
          description: 'Suite completa de análisis de datos de eventos',
          backLabel: 'Volver a Freestyle Slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Calculadora de puntos',
          description: 'Calculadora de puntos precisa disponible próximamente',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        rankings: {
          title: 'Clasificación por puntos',
          description: 'Clasificación en tiempo real disponible próximamente',
          backLabel: 'Volver a Freestyle Slopestyle'
        },
        trends: {
          title: 'Tendencias de puntos',
          description: 'Herramientas de análisis de tendencias disponibles próximamente',
          backLabel: 'Volver a Freestyle Slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Directorio de atletas',
          description: 'Consulta todos los perfiles de atletas registrados',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        rankings: {
          title: 'Clasificación de atletas',
          description: 'Clasificación integral basada en puntos y resultados',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        stats: {
          title: 'Estadísticas de atletas',
          description: 'Estadísticas detalladas y análisis visual de atletas',
          backLabel: 'Volver a Snowboard Paralelo'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Reglamento de competición',
          description: 'Normativa técnica de competición detallada',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        'points-rules': {
          title: 'Reglas de puntos',
          description: 'Consulta el detalle de las reglas de cálculo de puntos',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        'venue-standards': {
          title: 'Normas de sedes',
          description: 'Requisitos técnicos y de certificación de las sedes',
          backLabel: 'Volver a Snowboard Paralelo'
        }
      },
      events: {
        register: {
          title: 'Inscripción en línea',
          description: 'Sistema de inscripción simplificado disponible próximamente',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        results: {
          title: 'Consulta de resultados',
          description: 'Consulta en tiempo real resultados y actualizaciones de puntos',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        schedule: {
          title: 'Calendario de eventos',
          description: 'Consulta el calendario de próximos eventos',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        stats: {
          title: 'Estadísticas de eventos',
          description: 'Suite completa de análisis de datos de eventos',
          backLabel: 'Volver a Snowboard Paralelo'
        }
      },
      points: {
        calculator: {
          title: 'Calculadora de puntos',
          description: 'Calculadora de puntos precisa disponible próximamente',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        rankings: {
          title: 'Clasificación por puntos',
          description: 'Clasificación en tiempo real disponible próximamente',
          backLabel: 'Volver a Snowboard Paralelo'
        },
        trends: {
          title: 'Tendencias de puntos',
          description: 'Herramientas de análisis de tendencias disponibles próximamente',
          backLabel: 'Volver a Snowboard Paralelo'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Directorio de atletas',
          description: 'Consulta todos los perfiles de atletas registrados',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        rankings: {
          title: 'Clasificación de atletas',
          description: 'Clasificación integral basada en puntos y resultados',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        stats: {
          title: 'Estadísticas de atletas',
          description: 'Estadísticas detalladas y análisis visual de atletas',
          backLabel: 'Volver a Snowboard Slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Reglamento de competición',
          description: 'Normativa técnica de competición detallada',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        'points-rules': {
          title: 'Reglas de puntos',
          description: 'Consulta el detalle de las reglas de cálculo de puntos',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        'venue-standards': {
          title: 'Normas de sedes',
          description: 'Requisitos técnicos y de certificación de las sedes',
          backLabel: 'Volver a Snowboard Slopestyle'
        }
      },
      events: {
        register: {
          title: 'Inscripción en línea',
          description: 'Sistema de inscripción simplificado disponible próximamente',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        results: {
          title: 'Consulta de resultados',
          description: 'Consulta en tiempo real resultados y actualizaciones de puntos',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        schedule: {
          title: 'Calendario de eventos',
          description: 'Consulta el calendario de próximos eventos',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        stats: {
          title: 'Estadísticas de eventos',
          description: 'Suite completa de análisis de datos de eventos',
          backLabel: 'Volver a Snowboard Slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Calculadora de puntos',
          description: 'Calculadora de puntos precisa disponible próximamente',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        rankings: {
          title: 'Clasificación por puntos',
          description: 'Clasificación en tiempo real disponible próximamente',
          backLabel: 'Volver a Snowboard Slopestyle'
        },
        trends: {
          title: 'Tendencias de puntos',
          description: 'Herramientas de análisis de tendencias disponibles próximamente',
          backLabel: 'Volver a Snowboard Slopestyle'
        }
      }
    },
    docs: {
      competitionRules: {
        title: 'Reglas de Competición',
        description: 'Reglas técnicas de competición y estándares de arbitraje',
        backLabel: 'Volver a la Base de Conocimiento'
      },
      pointsRules: {
        title: 'Reglas de Puntos',
        description: 'Documentación de cálculo de puntos de esquí de China',
        backLabel: 'Volver a la Base de Conocimiento'
      },
      venueStandards: {
        title: 'Estándares de Sedes',
        description: 'Requisitos de instalaciones y sedes de eventos',
        backLabel: 'Volver a la Base de Conocimiento'
      },
      fisRules: {
        title: 'Reglas Internacionales FIS',
        description: 'Reglas de competición de la Federación Internacional de Esquí',
        backLabel: 'Volver a la Base de Conocimiento'
      },
      guide: {
        title: 'Guía de Usuario',
        description: 'Instrucciones del sistema y preguntas frecuentes',
        backLabel: 'Volver a la Base de Conocimiento'
      }
    }
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
      title: 'Sistema de Puntos de Esquí de China',
      titleEn: 'China Skiing Points System',
      subtitle: 'Autoritativo · Profesional · Plataforma precisa de gestión de puntos de esquí',
      exploreDisciplines: 'Explorar Disciplinas',
      freeRegister: 'Registro Gratuito',
      platformIntro: 'Primera opción para atletas, entrenadores y organizadores profesionales • Certificado por la Administración General del Deporte',
      highlights: [
        { label: 'Cuatro Sistemas de Puntos', color: 'bg-ski-blue' },
        { label: 'Certificación Oficial', color: 'bg-green-400' },
        { label: 'Serie U · Eventos Públicos', color: 'bg-yellow-400' }
      ]
    },
    features: {
      title: 'Funciones Principales de la Plataforma',
      description: 'Solución completa de gestión de competiciones de esquí basada en estándares FIS',
      online: 'En línea',
      useNow: 'Usar ahora',
      fisPointsQuery: {
        title: 'Consulta de Puntos FIS',
        description: 'Consulta puntos FIS y clasificación de atletas'
      },
      pointsCalculator: {
        title: 'Calculadora de Puntos',
        description: 'Cálculo de puntos en tiempo real basado en resultados'
      },
      pointsRankings: {
        title: 'Clasificación de Puntos',
        description: 'Clasificación de puntos de atletas actualizada en tiempo real'
      },
      platformIntro: {
        title: 'Introducción a la Plataforma',
        description: 'Conoce el Sistema de Puntos de Esquí Alpino de China'
      },
      memberRegister: {
        title: 'Registro de Miembros',
        description: 'Regístrate como miembro de la plataforma para ver tus puntos personales'
      },
      eventAnnouncement: {
        title: 'Anuncios de Eventos',
        description: 'Consulta los calendarios y anuncios de eventos más recientes'
      },
      pointsRules: {
        title: 'Reglas de Puntos',
        description: 'Consulta las reglas de cálculo de puntos de esquí alpino de China'
      },
      competitionManagement: {
        title: 'Gestión de Competiciones',
        description: 'Gestiona información de competiciones, entrada de resultados y estadísticas'
      },
      athleteProfiles: {
        title: 'Perfiles de Atletas',
        description: 'Gestión de información de atletas e historial de puntos'
      },
      onlineRegistration: {
        title: 'Inscripción en Línea',
        description: 'Inscripción conveniente en eventos y gestión de tarifas'
      },
      dataAnalysis: {
        title: 'Análisis de Datos',
        description: 'Análisis de datos detallado e informes visuales'
      }
    },
    stats: {
      title: 'Datos de la Plataforma',
      subtitle: 'Datos del sistema en tiempo real y estado operativo',
      disciplines: { label: 'Disciplinas de Esquí', value: '4 Categorías', description: 'Alpino·Freestyle·Snowboard' },
      pointsRules: { label: 'Reglas de Puntos', value: '-', description: 'Conforme a Estándares de China' },
      updateCycle: { label: 'Actualización de Puntos', value: '-', description: 'Actualizaciones Semanales' },
      users: { label: 'Usuarios Registrados', value: '-', description: 'Atletas y Entrenadores' }
    },
    news: {
      title: 'Últimas Actualizaciones',
      pauseCarousel: 'Pausar Carrusel',
      continueCarousel: 'Continuar Carrusel',
      statuses: {
        live: 'En vivo',
        updated: 'Actualizado',
        upcoming: 'Próximamente'
      },
      items: []
    },
    latestResults: {
      title: 'Últimos Resultados de Competiciones',
      subtitle: 'Resultados y clasificaciones de puntos en tiempo real',
      recentResults: 'Resultados Recientes',
      liveUpdate: 'Actualización en Vivo',
      viewMore: 'Ver Más Eventos →',
      noData: 'No hay datos de competición disponibles para esta disciplina',
      statusLabels: {
        live: 'En vivo',
        completed: 'Completado',
        upcoming: 'Próximamente'
      },
      results: []
    },
    rankings: {
      title: 'Clasificación de Puntos',
      updatedOn: 'Actualizado el',
      points: 'Puntos',
      viewFullRankings: 'Ver Clasificación Completa →',
      season: 'Temporada',
      noData: 'No hay datos de clasificación disponibles para esta disciplina',
      entries: []
    },
    memberWelcome: {
      welcomeBack: 'Bienvenido de Nuevo',
      accountStatus: 'Cuenta Activa',
      pendingReview: 'Revisión Pendiente',
      currentPoints: 'Puntos Actuales',
      systemPermissions: 'Permisos del Sistema',
      personalCenter: 'Centro Personal',
      myPoints: 'Mis Puntos',
      adminPanel: 'Panel de Administración'
    },
    memberValue: {
      unlockFeatures: 'Desbloquea Todas las Funciones Profesionales',
      registerToUnlock: 'Regístrate como miembro para disfrutar de la gestión completa de puntos y servicios de eventos',
      pointsSystem: {
        title: 'Sistema de Puntos',
        features: ['Consulta de puntos personales y seguimiento de historial', 'Clasificación de puntos en tiempo real', 'Herramienta de calculadora de puntos', 'Análisis de tendencias de puntos']
      },
      eventManagement: {
        title: 'Gestión de Eventos',
        features: ['Ver lista de competiciones y calendario', 'Inscripción en línea a eventos', 'Visualización de resultados en tiempo real', 'Notificaciones de resultados']
      },
      professionalFeatures: {
        title: 'Funciones Profesionales',
        features: ['Gestión de perfil personal de atleta', 'Reglas de puntos detalladas', 'Estadísticas y análisis de datos', 'Servicio de soporte técnico']
      },
      registerUnlock: 'Registrarse para Desbloquear'
    },
    about: {
      title: 'Acerca de la Plataforma',
      description1: 'El Sistema de Puntos de Esquí de China es una plataforma integral de gestión de competiciones basada en los estándares del Centro de Deportes de Invierno de la Administración General del Deporte. Cubre todas las disciplinas de esquí alpino, esquí estilo libre y snowboard, utilizando algoritmos de cálculo de puntos multinivel conformes a los estándares de China, proporcionando servicios autorizados y precisos de gestión de datos y cálculo de puntos para las competiciones de esquí chinas.',
      description2: 'Nos comprometemos a promover el desarrollo digital y estandarizado del esquí chino, proporcionando herramientas modernas de gestión de datos, cálculo de puntos y estadísticas de resultados para atletas, entrenadores, organizadores de eventos y árbitros, abarcando de manera integral big air, slopestyle, eventos paralelos y otros deportes de nieve, mejorando el nivel organizativo y competitivo del esquí chino.',
      multiTierPoints: { title: 'Sistema de Puntos Multinivel', description: 'Niveles de Puntos 360/240/120' },
      uSeries: { title: 'Eventos Serie U', description: 'Cobertura Completa U12/U15/U18' },
      officialCertification: { title: 'Certificación Oficial', description: 'Estándares del Centro de Deportes de Invierno' },
      allDisciplines: { title: 'Todas las Disciplinas', description: 'Alpino·Freestyle·Snowboard' }
    },
    systemFeatures: {
      title: 'Características del Sistema',
      feature1: 'Estándar de Reglas de Puntos de Esquí Alpino de China',
      feature2: 'Sistema de Niveles de Puntos 360/240/120 para Freestyle/Snowboard',
      feature3: 'Cobertura Completa de Big Air, Slopestyle y Eventos Paralelos',
      feature4: 'Gestión de Eventos de la Serie Juvenil U12/U15/U18',
      feature5: 'Certificado por el Centro de Deportes de Invierno de la Administración General del Deporte',
      feature6: 'Clasificaciones de Puntos Multidisciplina y Visualización de Datos'
    }
  }
};
