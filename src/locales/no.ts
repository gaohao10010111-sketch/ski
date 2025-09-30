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
    profile: 'Profil'
  },

  // Navigasjon
  navigation: {
    title: 'Kinesisk Skipoeng System',
    disciplines: 'Skidisipliner',
    points: 'Poengsenter',
    events: 'Konkurranser',
    my: 'Min Side',
    docs: 'Kunnskapsbase',
    about: 'Om Systemet',
    
    // Undermenyer
    submenus: {
      // Skidisipliner
      alpine: 'Alpint',
      snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
      snowboardParallel: 'Snowboard Parallell',
      freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
      
      // Poengsenter
      myPoints: 'Mine Poeng',
      pointsQuery: 'Poengforespørsel',
      pointsCalculator: 'Poengkalkulator',
      pointsRankings: 'Poengranking',
      pointsTrends: 'Poengtrendanalyse',
      
      // Konkurranser
      eventsSchedule: 'Konkurransekalender',
      eventsRegister: 'Nettregistrering',
      eventsList: 'Konkurranseliste',
      eventsResults: 'Resultatforespørsel',
      eventsStats: 'Datastatistikk',
      
      // Min Side
      personalCenter: 'Personlig Senter',
      myRegistrations: 'Mine Registreringer',
      athleteProfile: 'Utøverprofil',
      resultsHistory: 'Resultathistorikk',
      
      // Kunnskapsbase
      pointsRules: 'Poengregler',
      competitionRules: 'Konkurranseregler',
      venueStandards: 'Anleggsstandarder',
      fisRules: 'FIS-regler',
      userGuide: 'Brukerveiledning'
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
    title: 'Alpint Poengsystem',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0 tidsbasert formel',
    
    // Tags
    tags: {
      timeBasedFormula: 'v4.0 tidsbasert formel',
      raceLevels: 'A/B/C rennivåer',
      penaltyCalculation: 'Dynamisk straffpoengberegning'
    },
    
    // Hurtigtilgang
    quickLinks: {
      title: 'Hurtigtilgang til Funksjoner',
      pointsRanking: {
        title: 'Poengranking',
        description: 'Se nåværende sesongs poengrankinger'
      },
      pointsCalculator: {
        title: 'Poengkalkulator',
        description: 'v4.0 formel sanntidsberegning'
      },
      competitions: {
        title: 'Konkurransehåndtering',
        description: 'Se program og rennresultater'
      },
      athletes: {
        title: 'Utøverprofiler',
        description: 'Utøverinformasjon og resultatforespørsel'
      },
      registration: {
        title: 'Nettregistrering',
        description: 'Delta i alpine skikonkurranser'
      },
      rules: {
        title: 'Regeldokumentasjon',
        description: 'Alpine skikonkurranseregler'
      },
      enterFunction: 'Gå til funksjon'
    },
    
    // Poengregler
    pointsRules: {
      title: 'Alpine Poengregler (v4.0)',
      baseFormula: {
        title: 'Grunnleggende Rennpoeng Formel',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Grunnpoeng | F=Disiplinfaktor | Tx=Utøvertid | To=Vinnertid'
      },
      finalFormula: {
        title: 'Sluttpoengberegning',
        formula: 'Sluttpoeng = (P + Straff) × Rennkoeffisient',
        description: 'A-nivå(1.0) | B-nivå(0.6) | C-nivå(0.3)'
      },
      disciplineFactors: {
        title: 'Disiplinfaktorer Tabell',
        downhill: 'Utfor DH',
        slalom: 'Slalåm SL',
        giantSlalom: 'Storslalåm GS',
        superG: 'Super-G SG',
        combined: 'Alpinkombinasjon AC'
      }
    },
    
    // Statistikk
    statistics: {
      title: 'Sanntidsstatistikk',
      registeredAthletes: 'Registrerte Utøvere',
      seasonEvents: 'Sesongens Konkurranser',
      raceCount: 'Antall Renn',
      averagePoints: 'Gjennomsnittspoeng',
      monthlyIncrease: '12 nye denne måneden',
      seasonGrowth: '16% vekst fra forrige sesong',
      pandemicImpact: 'Litt påvirket av pandemien',
      levelImprovement: 'Totalnivå stadig forbedres'
    }
  },

  // Freeski Slopestyle side
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Poengsystem',
      judgingSystem: 'Dommersystem',
      competitionFormat: 'Kvalifisering/Finale Format'
    },
    
    pointsSystem: {
      title: 'Trinnvis Poengsystem',
      class1: {
        title: 'Klasse 1 Konkurranser',
        description: 'Nasjonale mesterskap og toppnivå arrangementer'
      },
      class2: {
        title: 'Klasse 2 Konkurranser',
        description: 'Regionale viktige konkurranser'
      },
      class3: {
        title: 'Klasse 3 Konkurranser',
        description: 'Lokale regulære konkurranser'
      }
    }
  },

  // Snowboard Slopestyle side
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Poengsystem',
      judgingSystem: 'Dommersystem',
      competitionFormat: 'Kvalifisering/Finale Format'
    }
  },

  // Snowboard Parallell side
  snowboardParallel: {
    title: 'Snowboard Parallell Disipliner',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Tidsbasert poenggiving',
      eliminationFormat: 'Eliminasjonsformat',
      parallelEvents: 'PGS/PSL disipliner'
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