// English language pack
import { TranslationKeys } from './zh';

export const en: TranslationKeys = {
  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    filter: 'Filter',
    export: 'Export',
    import: 'Import',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    reset: 'Reset',
    home: 'Home',
    language: 'Language',
    login: 'Login',
    logout: 'Logout',
    register: 'Register',
    profile: 'Profile'
  },

  // Navigation
  navigation: {
    title: 'China Ski Points System',
    titleShort: 'CSPS',

    // Discipline Switcher
    disciplines: 'Disciplines',
    alpine: 'Alpine Skiing',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallel',
    freestyleSlopestyle: 'Freestyle Slopestyle',

    // Global Navigation
    my: 'My',
    docs: 'Docs',
    about: 'About',

    // Discipline-level Navigation
    points: 'Points',
    events: 'Events',
    athletes: 'Athletes',

    // Submenus
    submenus: {
      // Points Management Submenu
      pointsCalculator: 'Calculator',
      pointsRankings: 'Rankings',
      pointsTrends: 'Trends',

      // Events Management Submenu
      eventsSchedule: 'Schedule',
      eventsRegister: 'Register',
      eventsResults: 'Results',
      eventsStats: 'Statistics',

      // Athletes Submenu
      athletesList: 'Athletes List',
      athletesProfile: 'Athlete Profile',
      athletesStats: 'Statistics',

      // Docs Submenu
      docsPointsRules: 'Points Rules',
      docsCompetitionRules: 'Competition Rules',
      docsVenueStandards: 'Venue Standards',
      docsGuide: 'User Guide',

      // Personal Center Submenu
      myProfile: 'Personal Center',
      myPoints: 'My Points',
      myRegistrations: 'My Registrations',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History'
    }
  },

  // Breadcrumb navigation
  breadcrumb: {
    home: 'Home',
    disciplines: 'Ski Disciplines',
    alpine: 'Alpine Skiing',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallel',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Points Center',
    events: 'Events',
    my: 'My',
    docs: 'Knowledge Base',
    about: 'About System'
  },

  // Alpine skiing page
  alpine: {
    title: 'Alpine Skiing Points System',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0 Time-based Formula',
    
    // Tags
    tags: {
      timeBasedFormula: 'v4.0 Time-based Formula',
      raceLevels: 'A/B/C Level Events',
      penaltyCalculation: 'Dynamic Penalty Calculation'
    },
    
    // Quick links
    quickLinks: {
      title: 'Quick Access',
      pointsRanking: {
        title: 'Points Rankings',
        description: 'View current season points rankings'
      },
      pointsCalculator: {
        title: 'Points Calculator',
        description: 'Real-time v4.0 formula calculation'
      },
      competitions: {
        title: 'Event Management',
        description: 'View schedule and race results'
      },
      athletes: {
        title: 'Athlete Profiles',
        description: 'Athlete information and results query'
      },
      registration: {
        title: 'Online Registration',
        description: 'Register for alpine skiing events'
      },
      rules: {
        title: 'Rules Documentation',
        description: 'Alpine skiing competition rules'
      },
      enterFunction: 'Enter Function'
    },
    
    // Points rules
    pointsRules: {
      title: 'Alpine Skiing Points Rules (v4.0)',
      baseFormula: {
        title: 'Base Race Points Formula',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Base Points | F=Discipline Factor | Tx=Competitor Time | To=Winner Time'
      },
      finalFormula: {
        title: 'Final Points Calculation',
        formula: 'Final Points = (P + Penalty) × Race Coefficient',
        description: 'A-Level(1.0) | B-Level(0.6) | C-Level(0.3)'
      },
      disciplineFactors: {
        title: 'Discipline Factors',
        downhill: 'Downhill DH',
        slalom: 'Slalom SL',
        giantSlalom: 'Giant Slalom GS',
        superG: 'Super-G SG',
        combined: 'Alpine Combined AC'
      }
    },
    
    // Statistics
    statistics: {
      title: 'Real-time Statistics',
      registeredAthletes: 'Registered Athletes',
      seasonEvents: 'Season Events',
      raceCount: 'Race Count',
      averagePoints: 'Average Points',
      monthlyIncrease: '12 new this month',
      seasonGrowth: '16% growth vs last season',
      pandemicImpact: 'Slightly affected by pandemic',
      levelImprovement: 'Overall level steadily improving'
    }
  },

  // Freeski slopestyle page
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Points System',
      judgingSystem: 'Judge Scoring System',
      competitionFormat: 'Qualifying/Finals Format'
    },
    
    pointsSystem: {
      title: 'Tiered Points System',
      class1: {
        title: 'Class 1 Events',
        description: 'National championships and top-tier events'
      },
      class2: {
        title: 'Class 2 Events',
        description: 'Regional important events'
      },
      class3: {
        title: 'Class 3 Events',
        description: 'Local regular events'
      }
    }
  },

  // Snowboard slopestyle page
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Points System',
      judgingSystem: 'Judge Scoring System',
      competitionFormat: 'Qualifying/Finals Format'
    }
  },

  // Snowboard parallel page
  snowboardParallel: {
    title: 'Snowboard Parallel Events',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Time-based Scoring',
      eliminationFormat: 'Elimination Format',
      parallelEvents: 'PGS/PSL Events'
    }
  },

  // Language selector
  languageSelector: {
    title: 'Select Language',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Authentication and permissions
  auth: {
    needsLogin: 'Login Required',
    loginToUnlock: 'Login to unlock more features',
    comingSoon: 'Coming Soon'
  }
};