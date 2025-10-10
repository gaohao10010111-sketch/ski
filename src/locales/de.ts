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
      myAthlete: 'Athletenprofil',
      myHistory: 'Ergebnis-Historie'
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
    comingSoon: 'Demnächst verfügbar'
  }
};
