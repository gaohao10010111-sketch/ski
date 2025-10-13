// Italian language pack - Pacchetto lingua italiana
import { TranslationKeys } from './zh';

export const it: TranslationKeys = {
  // Comune
  common: {
    loading: 'Caricamento...',
    error: 'Errore',
    success: 'Successo',
    cancel: 'Annulla',
    confirm: 'Conferma',
    save: 'Salva',
    edit: 'Modifica',
    delete: 'Elimina',
    search: 'Cerca',
    filter: 'Filtra',
    export: 'Esporta',
    import: 'Importa',
    back: 'Indietro',
    next: 'Avanti',
    previous: 'Precedente',
    submit: 'Invia',
    reset: 'Reimposta',
    home: 'Home',
    language: 'Lingua',
    login: 'Accedi',
    logout: 'Esci',
    register: 'Registrati',
    profile: 'Profilo',
    viewDetails: 'Visualizza dettagli',
    viewFullSchedule: 'Visualizza calendario completo →',
    viewFullRankings: 'Visualizza classifica completa →',
    readMore: 'Leggi di più'
  },

  // Navigazione
  navigation: {
    title: 'Sistema Punti Sci Cinese',
    titleShort: 'CSPS',

    // Selettore discipline
    disciplines: 'Discipline',
    alpine: 'Sci Alpino',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallelo',
    freestyleSlopestyle: 'Freestyle Slopestyle',

    // Navigazione globale
    my: 'Mia',
    docs: 'Docs',
    about: 'Info',

    // Navigazione livello discipline
    points: 'Punti',
    events: 'Competizioni',
    athletes: 'Atleti',

    // Sottomenu
    submenus: {
      // Sottomenu gestione punti
      pointsCalculator: 'Calcolatore',
      pointsRankings: 'Classifica',
      pointsTrends: 'Tendenze',

      // Sottomenu gestione competizioni
      eventsSchedule: 'Calendario',
      eventsRegister: 'Iscrizione',
      eventsResults: 'Risultati',
      eventsStats: 'Statistiche',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Sottomenu atleti
      athletesList: 'Lista Atleti',
      athletesProfile: 'Profilo Atleta',
      athletesStats: 'Statistiche',

      // Sottomenu docs
      docsPointsRules: 'Regolamento Punti',
      docsCompetitionRules: 'Regolamento Competizioni',
      docsVenueStandards: 'Standard Impianti',
      docsGuide: 'Guida Utente',

      // Sottomenu centro personale
      myProfile: 'Centro Personale',
      myPoints: 'I Miei Punti',
      myRegistrations: 'Le Mie Iscrizioni',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Navigazione breadcrumb
  breadcrumb: {
    home: 'Home',
    disciplines: 'Discipline Sciistiche',
    alpine: 'Sci Alpino',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallelo',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Centro Punti',
    events: 'Competizioni',
    my: 'La Mia Area',
    docs: 'Base di Conoscenza',
    about: 'Informazioni sul Sistema'
  },

  // Pagina Sci Alpino
  alpine: {
    title: 'Sci Alpino',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpino',

    hero: {
      slide1: {
        title: 'Highlights Campionato Nazionale 2024',
        subtitle: 'Testimoni dei momenti gloriosi dello sci alpino cinese'
      },
      slide2: {
        title: 'Sistema Punti Aggiornato',
        subtitle: 'Calcolo punti più accurato basato su regole v4.0'
      },
      slide3: {
        title: 'Iscrizione Camp di Allenamento Invernale',
        subtitle: 'Team di allenatori professionisti per migliorare le tue abilità'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Pagina Freestyle Slopestyle
  freestyleSlopestyle: {
    title: 'Freestyle Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freestyle SS',

    hero: {
      slide1: {
        title: 'Campionato Nazionale di Freestyle Slopestyle 2024',
        subtitle: 'Testimoni della svolta estrema dello sci freestyle cinese'
      },
      slide2: {
        title: 'Sistema Punti a 360 Livelli',
        subtitle: 'Meccanismo di punteggio equo basato sul coefficiente di difficoltà'
      },
      slide3: {
        title: 'Programma di Sviluppo Giovanile Serie U',
        subtitle: 'Sistema di coltivazione talenti U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Pagina Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: 'Campionato Nazionale di Snowboard Slopestyle 2024',
        subtitle: 'Testimoni dei momenti emozionanti dello snowboard cinese'
      },
      slide2: {
        title: 'Sistema Punti a 360 Livelli',
        subtitle: 'Regole di calcolo punti basate su standard internazionali'
      },
      slide3: {
        title: 'Programma di Formazione Giovanile Serie U',
        subtitle: 'Sistema di coltivazione a tre livelli U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Pagina Snowboard Parallelo
  snowboardParallel: {
    title: 'Snowboard Parallelo',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallelo',

    hero: {
      slide1: {
        title: 'Campionato Nazionale di Snowboard Parallelo 2024',
        subtitle: 'Perfetta combinazione di velocità e abilità'
      },
      slide2: {
        title: 'Sistema Punti a Eliminazione',
        subtitle: 'Calcolo punti equo basato su classifiche testa a testa'
      },
      slide3: {
        title: 'Programma di Sviluppo Atleti d\'Élite',
        subtitle: 'Migliorare il livello di gara e competere in eventi internazionali'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Selettore lingua
  languageSelector: {
    title: 'Seleziona lingua',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Autenticazione e permessi
  auth: {
    needsLogin: 'Accesso richiesto',
    loginToUnlock: 'Accedi per sbloccare più funzioni',
    comingSoon: 'Prossimamente disponibile',
    roles: {
      admin: 'Administrator',
      coach: 'Coach',
      athlete: 'Athlete',
      user: 'User'
    }
  }

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
