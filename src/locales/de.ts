// German language pack - Deutsche Sprachpaket
import { TranslationKeys } from './zh';

export const de: TranslationKeys = {
  // Allgemein
  common: {
    loading: 'Lädt...',
    error: 'Fehler',
    success: 'Erfolgreich',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    save: 'Speichern',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    search: 'Suchen',
    filter: 'Filtern',
    export: 'Exportieren',
    import: 'Importieren',
    back: 'Zurück',
    next: 'Weiter',
    previous: 'Zurück',
    submit: 'Senden',
    reset: 'Zurücksetzen',
    home: 'Startseite',
    language: 'Sprache',
    login: 'Anmelden',
    logout: 'Abmelden',
    register: 'Registrieren',
    profile: 'Profil',
    viewDetails: 'Details ansehen',
    viewFullSchedule: 'Vollständigen Zeitplan ansehen →',
    viewFullRankings: 'Vollständige Rangliste ansehen →',
    readMore: 'Weiterlesen'
  },

  // Navigation
  navigation: {
    title: 'Chinesisches Ski-Punktesystem',
    titleShort: 'CSPS',

    // Disziplin-Umschalter
    disciplines: 'Disziplinen',
    alpine: 'Ski Alpin',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallel',
    freestyleSlopestyle: 'Freestyle Slopestyle',

    // Globale Navigation
    my: 'Mein',
    docs: 'Docs',
    about: 'Info',

    // Disziplin-Level Navigation
    points: 'Punkte',
    events: 'Wettkämpfe',
    athletes: 'Athleten',

    // Untermenüs
    submenus: {
      // Punkte-Management Untermenü
      pointsCalculator: 'Rechner',
      pointsRankings: 'Rangliste',
      pointsTrends: 'Trends',

      // Wettkampf-Management Untermenü
      eventsSchedule: 'Zeitplan',
      eventsRegister: 'Anmeldung',
      eventsResults: 'Ergebnisse',
      eventsStats: 'Statistiken',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Athleten Untermenü
      athletesList: 'Athletenliste',
      athletesProfile: 'Athletenprofil',
      athletesStats: 'Statistiken',

      // Docs Untermenü
      docsPointsRules: 'Punkte-Regelwerk',
      docsCompetitionRules: 'Wettkampf-Reglement',
      docsVenueStandards: 'Wettkampfstätten-Standards',
      docsGuide: 'Benutzerhandbuch',

      // Persönlicher Bereich Untermenü
      myProfile: 'Persönliches Center',
      myPoints: 'Meine Punkte',
      myRegistrations: 'Meine Anmeldungen',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Breadcrumb-Navigation
  breadcrumb: {
    home: 'Startseite',
    disciplines: 'Ski-Disziplinen',
    alpine: 'Ski Alpin',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallel',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Punkte-Center',
    events: 'Wettkämpfe',
    my: 'Mein Bereich',
    docs: 'Wissensdatenbank',
    about: 'Über das System'
  },

  // Ski Alpin Seite
  alpine: {
    title: 'Ski Alpin',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpin',

    hero: {
      slide1: {
        title: '2024 Nationale Meisterschaft Highlights',
        subtitle: 'Erleben Sie die glorreichen Momente des chinesischen Skisports'
      },
      slide2: {
        title: 'Punktesystem Upgrade',
        subtitle: 'Präzisere Punkteberechnung basierend auf v4.0 Regeln'
      },
      slide3: {
        title: 'Winter-Trainingscamp Anmeldung',
        subtitle: 'Professionelles Trainerteam zur Verbesserung Ihrer Fähigkeiten'
      }
    },

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend'
    },

    latestNews: {
      title: 'Aktuelle Nachrichten'
    },

    topAthletes: {
      title: 'Rangliste'
    }
  },

  // Freestyle Slopestyle Seite
  freestyleSlopestyle: {
    title: 'Freestyle Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freestyle SS',

    hero: {
      slide1: {
        title: '2024 Nationale Freestyle Slopestyle Meisterschaft',
        subtitle: 'Erleben Sie den extremen Durchbruch des chinesischen Freestyle-Skisports'
      },
      slide2: {
        title: '360 Punkte Stufensystem',
        subtitle: 'Fairer Bewertungsmechanismus basierend auf Schwierigkeitskoeffizient'
      },
      slide3: {
        title: 'U-Serie Jugendentwicklungsprogramm',
        subtitle: 'U12/U15/U18 Talentfördersystem'
      }
    },

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend'
    },

    latestNews: {
      title: 'Aktuelle Nachrichten'
    },

    topAthletes: {
      title: 'Rangliste'
    }
  },

  // Snowboard Slopestyle Seite
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Nationale Snowboard Slopestyle Meisterschaft',
        subtitle: 'Erleben Sie die aufregenden Momente des chinesischen Snowboardings'
      },
      slide2: {
        title: '360 Punkte Stufensystem',
        subtitle: 'Punkteberechnungsregeln basierend auf internationalen Standards'
      },
      slide3: {
        title: 'U-Serie Jugendtrainingsprogramm',
        subtitle: 'U12/U15/U18 dreistufiges Kultivierungssystem'
      }
    },

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend'
    },

    latestNews: {
      title: 'Aktuelle Nachrichten'
    },

    topAthletes: {
      title: 'Rangliste'
    }
  },

  // Snowboard Parallel Seite
  snowboardParallel: {
    title: 'Snowboard Parallel',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallel',

    hero: {
      slide1: {
        title: '2024 Nationale Snowboard Parallel Meisterschaft',
        subtitle: 'Perfekte Kombination aus Geschwindigkeit und Können'
      },
      slide2: {
        title: 'Ausscheidungs-Punktesystem',
        subtitle: 'Faire Punkteberechnung basierend auf Kopf-an-Kopf-Rankings'
      },
      slide3: {
        title: 'Elite-Athleten-Entwicklungsprogramm',
        subtitle: 'Verbesserung des Rennniveaus und Teilnahme an internationalen Wettkämpfen'
      }
    },

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend'
    },

    latestNews: {
      title: 'Aktuelle Nachrichten'
    },

    topAthletes: {
      title: 'Rangliste'
    }
  },

  // Sprachauswahl
  languageSelector: {
    title: 'Sprache auswählen',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Authentifizierung und Berechtigungen
  auth: {
    needsLogin: 'Anmeldung erforderlich',
    loginToUnlock: 'Anmelden um mehr Funktionen freizuschalten',
    comingSoon: 'Demnächst verfügbar',
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
