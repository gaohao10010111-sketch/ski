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
};
