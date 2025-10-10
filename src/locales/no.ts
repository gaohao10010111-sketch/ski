// Norwegian language pack - Norsk språkpakke
import { TranslationKeys } from './zh';

export const no: TranslationKeys = {
  // Felles
  common: {
    loading: 'Laster...',
    error: 'Feil',
    success: 'Vellykket',
    cancel: 'Avbryt',
    confirm: 'Bekreft',
    save: 'Lagre',
    edit: 'Rediger',
    delete: 'Slett',
    search: 'Søk',
    filter: 'Filter',
    export: 'Eksporter',
    import: 'Importer',
    back: 'Tilbake',
    next: 'Neste',
    previous: 'Forrige',
    submit: 'Send inn',
    reset: 'Tilbakestill',
    home: 'Hjem',
    language: 'Språk',
    login: 'Logg inn',
    logout: 'Logg ut',
    register: 'Registrer',
    profile: 'Profil',
    viewDetails: 'Vis detaljer',
    viewFullSchedule: 'Vis full timeplan →',
    viewFullRankings: 'Vis full rangering →',
    readMore: 'Les mer'
  },

  // Navigasjon
  navigation: {
    title: 'Kinesisk Skipoeng System',
    titleShort: 'CSPS',

    // Disiplinvelger
    disciplines: 'Disipliner',
    alpine: 'Alpint',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallell',
    freestyleSlopestyle: 'Freeski Slopestyle',

    // Global navigasjon
    my: 'Min',
    docs: 'Dokumenter',
    about: 'Om',

    // Disiplin-nivå navigasjon
    points: 'Poeng',
    events: 'Konkurranser',
    athletes: 'Utøvere',

    // Undermenyer
    submenus: {
      // Poengstyring undermeny
      pointsCalculator: 'Kalkulator',
      pointsRankings: 'Rangeringer',
      pointsTrends: 'Trender',

      // Konkurransestyring undermeny
      eventsSchedule: 'Tidsplan',
      eventsRegister: 'Registrering',
      eventsResults: 'Resultater',
      eventsStats: 'Statistikk',

      // Utøvere undermeny
      athletesList: 'Utøverliste',
      athletesProfile: 'Utøverprofil',
      athletesStats: 'Statistikk',

      // Docs undermeny
      docsPointsRules: 'Poengregler',
      docsCompetitionRules: 'Konkurranseregler',
      docsVenueStandards: 'Anleggsstandarder',
      docsGuide: 'Brukerveiledning',

      // Personlig senter undermeny
      myProfile: 'Personlig Senter',
      myPoints: 'Mine Poeng',
      myRegistrations: 'Mine Registreringer',
      myAthlete: 'Utøverprofil',
      myHistory: 'Resultathistorikk'
    }
  },

  // Breadcrumb navigasjon
  breadcrumb: {
    home: 'Hjem',
    disciplines: 'Skidisipliner',
    alpine: 'Alpint',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallell',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Poengsenter',
    events: 'Konkurranser',
    my: 'Min Side',
    docs: 'Kunnskapsbase',
    about: 'Om Systemet'
  },

  // Alpint side
  alpine: {
    title: 'Alpint',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpint',

    hero: {
      slide1: {
        title: '2024 Nasjonale Mesterskap Høydepunkter',
        subtitle: 'Opplev de strålende øyeblikkene av kinesisk alpint'
      },
      slide2: {
        title: 'Poengsystem Oppgradert',
        subtitle: 'Mer nøyaktig poengberegning basert på v4.0 regler'
      },
      slide3: {
        title: 'Vinter Treningsleir Påmelding',
        subtitle: 'Profesjonelt trenerteam for å forbedre ferdighetene dine'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Freeski Slopestyle side
  freestyleSlopestyle: {
    title: 'Freeski Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freeski SS',

    hero: {
      slide1: {
        title: '2024 Nasjonale Freeski Slopestyle Mesterskap',
        subtitle: 'Opplev det ekstreme gjennombruddet av kinesisk freestyle skiing'
      },
      slide2: {
        title: '360 Poeng Trinnsystem',
        subtitle: 'Rettferdig vurderingsmekanisme basert på vanskelighetsgrad'
      },
      slide3: {
        title: 'U-Serie Ungdomsutviklingsprogram',
        subtitle: 'U12/U15/U18 talentkultiveringsssystem'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Snowboard Slopestyle side
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Nasjonale Snowboard Slopestyle Mesterskap',
        subtitle: 'Opplev de spennende øyeblikkene av kinesisk snowboarding'
      },
      slide2: {
        title: '360 Poeng Trinnsystem',
        subtitle: 'Poengberegningsregler basert på internasjonale standarder'
      },
      slide3: {
        title: 'U-Serie Ungdomstreningsprogram',
        subtitle: 'U12/U15/U18 tre-trinns kultiveringsssystem'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Snowboard Parallell side
  snowboardParallel: {
    title: 'Snowboard Parallell',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallell',

    hero: {
      slide1: {
        title: '2024 Nasjonale Snowboard Parallell Mesterskap',
        subtitle: 'Perfekt kombinasjon av hastighet og ferdighet'
      },
      slide2: {
        title: 'Utslagssystem Poeng',
        subtitle: 'Rettferdig poengberegning basert på hode-mot-hode rangeringer'
      },
      slide3: {
        title: 'Elite Utøver Utviklingsprogram',
        subtitle: 'Forbedre racenivået og konkurrere i internasjonale arrangementer'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Språkvelger
  languageSelector: {
    title: 'Velg språk',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Autentisering og tillatelser
  auth: {
    needsLogin: 'Innlogging kreves',
    loginToUnlock: 'Logg inn for å låse opp flere funksjoner',
    comingSoon: 'Kommer snart'
  }
};
