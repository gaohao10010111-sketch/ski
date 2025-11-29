// Spanish language pack - Paquete de idioma español
import type { TranslationKeys } from './zh';

export const es: Partial<TranslationKeys> = {
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
        seasonGrading: { title: 'Estándares de clasificación 2024-2025', category: 'Reglamento técnico' },
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
        items: ['Versión actual: última edición', 'Temporada de aplicación: 2024-2025', 'Ámbito: competiciones nacionales en China', 'Ciclo de actualización: según se requiera']
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
