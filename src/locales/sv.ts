// Swedish language pack - Svenska språkpaket
import { TranslationKeys } from './zh';

export const sv: TranslationKeys = {
  // Gemensamt
  common: {
    loading: 'Laddar...',
    error: 'Fel',
    success: 'Framgång',
    cancel: 'Avbryt',
    confirm: 'Bekräfta',
    save: 'Spara',
    edit: 'Redigera',
    delete: 'Ta bort',
    search: 'Sök',
    filter: 'Filter',
    export: 'Exportera',
    import: 'Importera',
    back: 'Tillbaka',
    next: 'Nästa',
    previous: 'Föregående',
    submit: 'Skicka',
    reset: 'Återställ',
    home: 'Hem',
    language: 'Språk',
    login: 'Logga in',
    logout: 'Logga ut',
    register: 'Registrera',
    profile: 'Profil',
    viewDetails: 'Visa detaljer',
    viewFullSchedule: 'Visa fullständig tävlingskalender →',
    viewFullRankings: 'Visa fullständig rankning →',
    readMore: 'Läs mer'
  },

  // Navigation
  navigation: {
    title: 'Kinesiska Skidpoäng System',
    titleShort: 'CSPS',

    // Projektväxlare
    disciplines: 'Discipliner',
    alpine: 'Alpin Skidåkning',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallel',
    freestyleSlopestyle: 'Freeski Slopestyle',

    // Global navigation
    my: 'Min',
    docs: 'Dokument',
    about: 'Om',

    // Projektnivå navigation
    points: 'Poänghantering',
    events: 'Tävlingshantering',
    athletes: 'Atleter',

    // Undermenyer
    submenus: {
      // Poänghantering undermenyer
      pointsCalculator: 'Poängkalkylator',
      pointsRankings: 'Poängrankning',
      pointsTrends: 'Poängtrender',

      // Tävlingshantering undermenyer
      eventsSchedule: 'Tävlingskalender',
      eventsRegister: 'Onlineregistrering',
      eventsResults: 'Resultatförfrågan',
      eventsStats: 'Datastatistik',

      // Atlet undermenyer
      athletesList: 'Atletlista',
      athletesProfile: 'Atletprofil',
      athletesStats: 'Atletstatistik',

      // Dokument undermenyer
      docsPointsRules: 'Poängregler',
      docsCompetitionRules: 'Tävlingsregler',
      docsVenueStandards: 'Anläggningsstandarder',
      docsGuide: 'Användarguide',

      // Min sida undermenyer
      myProfile: 'Personligt Center',
      myPoints: 'Mina Poäng',
      myRegistrations: 'Mina Registreringar',
      myAthlete: 'Atletprofil',
      myHistory: 'Resultathistorik'
    }
  },

  // Breadcrumb navigation
  breadcrumb: {
    home: 'Hem',
    disciplines: 'Skiddiscipliner',
    alpine: 'Alpin Skidåkning',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallel',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Poängcenter',
    events: 'Tävlingar',
    my: 'Min Sida',
    docs: 'Kunskapsbas',
    about: 'Om Systemet'
  },

  // Alpin skidåkning sida
  alpine: {
    title: 'Alpin Skidåkning',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpin',

    hero: {
      slide1: {
        title: '2024 Nationella Mästerskapet Höjdpunkter',
        subtitle: 'Bevittna de lysande ögonblicken av kinesisk alpin skidåkning'
      },
      slide2: {
        title: 'Poängsystem Uppgradering',
        subtitle: 'Mer exakt poängberäkning baserad på v4.0-regler'
      },
      slide3: {
        title: 'Vinterträningsläger Registrering Öppen',
        subtitle: 'Professionellt tränarteam hjälper dig förbättra dina färdigheter'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videoce center', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Freeski Slopestyle sida
  freestyleSlopestyle: {
    title: 'Freeski Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freeski SS',

    hero: {
      slide1: {
        title: '2024 Nationella Freeski Slopestyle Mästerskapet',
        subtitle: 'Bevittna grensgränsöverskridande ögonblick av kinesisk freeski'
      },
      slide2: {
        title: '360 Graderat Poängsystem',
        subtitle: 'Rättvis poängmekanism baserad på svårighetskoefficient'
      },
      slide3: {
        title: 'U-serien Ungdomsutvecklingsprogram',
        subtitle: 'U12/U15/U18 talantutvecklingssystem'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videocenter', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Snowboard Slopestyle sida
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Nationella Snowboard Slopestyle Mästerskapet',
        subtitle: 'Bevittna spännande ögonblick av kinesisk snowboard'
      },
      slide2: {
        title: '360 Graderat Poängsystem',
        subtitle: 'Poängberäkningsregler baserade på internationella standarder'
      },
      slide3: {
        title: 'U-serien Ungdomsutvecklingsprogram',
        subtitle: 'U12/U15/U18 trestegs utvecklingssystem'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videocenter', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Snowboard Parallel sida
  snowboardParallel: {
    title: 'Snowboard Parallel',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallel',

    hero: {
      slide1: {
        title: '2024 Nationella Snowboard Parallel Mästerskapet',
        subtitle: 'Perfekt kombination av hastighet och skicklighet'
      },
      slide2: {
        title: 'Turneringspoängsystem',
        subtitle: 'Rättvis poängberäkning baserad på matchningsrankning'
      },
      slide3: {
        title: 'Elitatletutvecklingsprogram',
        subtitle: 'Förbättra racenivå och utmana internationella tävlingar'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videocenter', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Språkväljare
  languageSelector: {
    title: 'Välj språk',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Autentisering och behörigheter
  auth: {
    needsLogin: 'Inloggning krävs',
    loginToUnlock: 'Logga in för att låsa upp fler funktioner',
    comingSoon: 'Kommer snart'
  }
};