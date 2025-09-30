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
    profile: 'Profil'
  },

  // Navigation
  navigation: {
    title: 'Kinesiska Skidpoäng System',
    disciplines: 'Skiddiscipliner',
    points: 'Poängcenter',
    events: 'Tävlingar',
    my: 'Min Sida',
    docs: 'Kunskapsbas',
    about: 'Om Systemet',
    
    // Undermenyer
    submenus: {
      // Skiddiscipliner
      alpine: 'Alpin Skidåkning',
      snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
      snowboardParallel: 'Snowboard Parallel',
      freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
      
      // Poängcenter
      myPoints: 'Mina Poäng',
      pointsQuery: 'Poängförfrågan',
      pointsCalculator: 'Poängkalkylator',
      pointsRankings: 'Poängranking',
      pointsTrends: 'Poängtrendanalys',
      
      // Tävlingar
      eventsSchedule: 'Tävlingskalender',
      eventsRegister: 'Onlineregistrering',
      eventsList: 'Tävlingslista',
      eventsResults: 'Resultatförfrågan',
      eventsStats: 'Datastatistik',
      
      // Min Sida
      personalCenter: 'Personligt Center',
      myRegistrations: 'Mina Registreringar',
      athleteProfile: 'Atletprofil',
      resultsHistory: 'Resultathistorik',
      
      // Kunskapsbas
      pointsRules: 'Poängregler',
      competitionRules: 'Tävlingsregler',
      venueStandards: 'Anläggningsstandarder',
      fisRules: 'FIS-regler',
      userGuide: 'Användarguide'
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
    title: 'Alpin Skidåkning Poängsystem',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0 tidsbaserad formel',
    
    // Taggar
    tags: {
      timeBasedFormula: 'v4.0 tidsbaserad formel',
      raceLevels: 'A/B/C tävlingsnivåer',
      penaltyCalculation: 'Dynamisk straffpoängberäkning'
    },
    
    // Snabbåtkomst
    quickLinks: {
      title: 'Snabbåtkomst till Funktioner',
      pointsRanking: {
        title: 'Poängranking',
        description: 'Visa nuvarande säsongs poängranking'
      },
      pointsCalculator: {
        title: 'Poängkalkylator',
        description: 'v4.0 formel realtidsberäkning'
      },
      competitions: {
        title: 'Tävlingshantering',
        description: 'Visa schema och tävlingsresultat'
      },
      athletes: {
        title: 'Atletprofiler',
        description: 'Atletinformation och resultatförfrågan'
      },
      registration: {
        title: 'Onlineregistrering',
        description: 'Delta i alpina skidtävlingar'
      },
      rules: {
        title: 'Regeldokumentation',
        description: 'Alpina skidtävlingsregler'
      },
      enterFunction: 'Gå till funktion'
    },
    
    // Poängregler
    pointsRules: {
      title: 'Alpina Poängregler (v4.0)',
      baseFormula: {
        title: 'Grundläggande Tävlingspoäng Formel',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Baspoäng | F=Disciplinfaktor | Tx=Tävlandets tid | To=Vinnartid'
      },
      finalFormula: {
        title: 'Slutpoängberäkning',
        formula: 'Slutpoäng = (P + Straff) × Tävlingskoefficient',
        description: 'A-nivå(1.0) | B-nivå(0.6) | C-nivå(0.3)'
      },
      disciplineFactors: {
        title: 'Disciplinfaktorer Tabell',
        downhill: 'Störtlopp DH',
        slalom: 'Slalom SL',
        giantSlalom: 'Storslalom GS',
        superG: 'Super-G SG',
        combined: 'Alpin Kombination AC'
      }
    },
    
    // Statistik
    statistics: {
      title: 'Realtidsstatistik',
      registeredAthletes: 'Registrerade Atleter',
      seasonEvents: 'Säsongens Tävlingar',
      raceCount: 'Antal Tävlingar',
      averagePoints: 'Genomsnittspoäng',
      monthlyIncrease: '12 nya denna månad',
      seasonGrowth: '16% tillväxt från föregående säsong',
      pandemicImpact: 'Något påverkad av pandemin',
      levelImprovement: 'Totalnivå förbättras stadigt'
    }
  },

  // Freeski Slopestyle sida
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Poängsystem',
      judgingSystem: 'Domarsystem',
      competitionFormat: 'Kvalificering/Final Format'
    },
    
    pointsSystem: {
      title: 'Trappstegspoängsystem',
      class1: {
        title: 'Klass 1 Tävlingar',
        description: 'Nationella mästerskap och toppnivå evenemang'
      },
      class2: {
        title: 'Klass 2 Tävlingar',
        description: 'Regionala viktiga tävlingar'
      },
      class3: {
        title: 'Klass 3 Tävlingar',
        description: 'Lokala reguljära tävlingar'
      }
    }
  },

  // Snowboard Slopestyle sida
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Poängsystem',
      judgingSystem: 'Domarsystem',
      competitionFormat: 'Kvalificering/Final Format'
    }
  },

  // Snowboard Parallel sida
  snowboardParallel: {
    title: 'Snowboard Parallel Discipliner',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Tidsbaserad poängberäkning',
      eliminationFormat: 'Eliminationsformat',
      parallelEvents: 'PGS/PSL discipliner'
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