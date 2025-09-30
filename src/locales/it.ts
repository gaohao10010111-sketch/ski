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
    profile: 'Profilo'
  },

  // Navigazione
  navigation: {
    title: 'Sistema Punti Sci Cinese',
    disciplines: 'Discipline Sciistiche',
    points: 'Centro Punti',
    events: 'Competizioni',
    my: 'La Mia Area',
    docs: 'Base di Conoscenza',
    about: 'Informazioni sul Sistema',
    
    // Sottomenu
    submenus: {
      // Discipline Sciistiche
      alpine: 'Sci Alpino',
      snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
      snowboardParallel: 'Snowboard Parallelo',
      freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
      
      // Centro Punti
      myPoints: 'I Miei Punti',
      pointsQuery: 'Consultazione Punti',
      pointsCalculator: 'Calcolatore Punti',
      pointsRankings: 'Classifica Punti',
      pointsTrends: 'Analisi Tendenze Punti',
      
      // Competizioni
      eventsSchedule: 'Calendario Gare',
      eventsRegister: 'Iscrizione Online',
      eventsList: 'Lista Competizioni',
      eventsResults: 'Consultazione Risultati',
      eventsStats: 'Statistiche Dati',
      
      // La Mia Area
      personalCenter: 'Centro Personale',
      myRegistrations: 'Le Mie Iscrizioni',
      athleteProfile: 'Profilo Atleta',
      resultsHistory: 'Storico Risultati',
      
      // Base di Conoscenza
      pointsRules: 'Regolamento Punti',
      competitionRules: 'Regolamento Competizioni',
      venueStandards: 'Standard Impianti',
      fisRules: 'Regole FIS',
      userGuide: 'Guida Utente'
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
    title: 'Sistema Punti Sci Alpino',
    subtitle: 'Alpine Skiing Points System',
    description: 'Formula basata sul tempo v4.0',
    
    // Tag
    tags: {
      timeBasedFormula: 'Formula basata sul tempo v4.0',
      raceLevels: 'Livelli gara A/B/C',
      penaltyCalculation: 'Calcolo dinamico penalità'
    },
    
    // Accesso rapido
    quickLinks: {
      title: 'Accesso Rapido alle Funzioni',
      pointsRanking: {
        title: 'Classifica Punti',
        description: 'Visualizza la classifica punti della stagione corrente'
      },
      pointsCalculator: {
        title: 'Calcolatore Punti',
        description: 'Calcolo in tempo reale con formula v4.0'
      },
      competitions: {
        title: 'Gestione Competizioni',
        description: 'Visualizza calendario e risultati gare'
      },
      athletes: {
        title: 'Profili Atleti',
        description: 'Informazioni atleti e consultazione risultati'
      },
      registration: {
        title: 'Iscrizione Online',
        description: 'Partecipa alle competizioni di sci alpino'
      },
      rules: {
        title: 'Documentazione Regole',
        description: 'Regolamento competizioni sci alpino'
      },
      enterFunction: 'Accedi alla funzione'
    },
    
    // Regole punti
    pointsRules: {
      title: 'Regole Punti Sci Alpino (v4.0)',
      baseFormula: {
        title: 'Formula Punti Gara Base',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Punti base | F=Fattore disciplina | Tx=Tempo concorrente | To=Tempo vincitore'
      },
      finalFormula: {
        title: 'Calcolo Punti Finali',
        formula: 'Punti Finali = (P + Penalità) × Coefficiente Gara',
        description: 'Livello A(1.0) | Livello B(0.6) | Livello C(0.3)'
      },
      disciplineFactors: {
        title: 'Tabella Fattori Disciplina',
        downhill: 'Discesa Libera DH',
        slalom: 'Slalom Speciale SL',
        giantSlalom: 'Slalom Gigante GS',
        superG: 'Super Gigante SG',
        combined: 'Combinata Alpina AC'
      }
    },
    
    // Statistiche
    statistics: {
      title: 'Statistiche in Tempo Reale',
      registeredAthletes: 'Atleti Registrati',
      seasonEvents: 'Competizioni Stagione',
      raceCount: 'Numero Gare',
      averagePoints: 'Punti Medi',
      monthlyIncrease: '12 nuovi questo mese',
      seasonGrowth: '16% di crescita rispetto alla stagione scorsa',
      pandemicImpact: 'Leggermente influenzato dalla pandemia',
      levelImprovement: 'Livello generale in costante miglioramento'
    }
  },

  // Pagina Freeski Slopestyle
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Sistema Punti 240/360/120',
      judgingSystem: 'Sistema di Giudizio',
      competitionFormat: 'Formato Qualifiche/Finali'
    },
    
    pointsSystem: {
      title: 'Sistema Punti Graduato',
      class1: {
        title: 'Competizioni Classe 1',
        description: 'Campionati nazionali e eventi di alto livello'
      },
      class2: {
        title: 'Competizioni Classe 2',
        description: 'Competizioni regionali importanti'
      },
      class3: {
        title: 'Competizioni Classe 3',
        description: 'Competizioni locali regolari'
      }
    }
  },

  // Pagina Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Sistema Punti 240/360/120',
      judgingSystem: 'Sistema di Giudizio',
      competitionFormat: 'Formato Qualifiche/Finali'
    }
  },

  // Pagina Snowboard Parallelo
  snowboardParallel: {
    title: 'Discipline Snowboard Parallelo',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Punteggio basato sul tempo',
      eliminationFormat: 'Formato a eliminazione',
      parallelEvents: 'Discipline PGS/PSL'
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
    comingSoon: 'Prossimamente disponibile'
  }
};