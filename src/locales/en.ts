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
    profile: 'Profile',
    viewDetails: 'View Details',
    viewFullSchedule: 'View Full Schedule →',
    viewFullRankings: 'View Full Rankings →',
    readMore: 'Read More'
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
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

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
      myHistory: 'Results History',

      // More Features
      moreFeatures: 'More'
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
    title: 'Alpine Skiing',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpine',

    hero: {
      slide1: {
        title: '2024 National Championship Highlights',
        subtitle: 'Witness the glorious moments of Chinese alpine skiing'
      },
      slide2: {
        title: 'Points System Upgraded',
        subtitle: 'More accurate points calculation based on v4.0 rules'
      },
      slide3: {
        title: 'Winter Training Camp Registration',
        subtitle: 'Professional coaching team to improve your skills'
      }
    },

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming'
    },

    latestNews: {
      title: 'Latest News'
    },

    topAthletes: {
      title: 'Rankings'
    }
  },

  // Freestyle slopestyle page
  freestyleSlopestyle: {
    title: 'Freestyle Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freestyle SS',

    hero: {
      slide1: {
        title: '2024 National Freestyle Slopestyle Championship',
        subtitle: 'Witness the extreme breakthrough of Chinese freestyle skiing'
      },
      slide2: {
        title: '360 Points Tier System',
        subtitle: 'Fair scoring mechanism based on difficulty coefficient'
      },
      slide3: {
        title: 'U-Series Youth Development Program',
        subtitle: 'U12/U15/U18 talent cultivation system'
      }
    },

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming'
    },

    latestNews: {
      title: 'Latest News'
    },

    topAthletes: {
      title: 'Rankings'
    }
  },

  // Snowboard slopestyle page
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 National Snowboard Slopestyle Championship',
        subtitle: 'Witness the exciting moments of Chinese snowboarding'
      },
      slide2: {
        title: '360 Points Tier System',
        subtitle: 'Points calculation rules based on international standards'
      },
      slide3: {
        title: 'U-Series Youth Training Program',
        subtitle: 'U12/U15/U18 three-tier cultivation system'
      }
    },

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming'
    },

    latestNews: {
      title: 'Latest News'
    },

    topAthletes: {
      title: 'Rankings'
    }
  },

  // Snowboard parallel page
  snowboardParallel: {
    title: 'Snowboard Parallel',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallel',

    hero: {
      slide1: {
        title: '2024 National Snowboard Parallel Championship',
        subtitle: 'Perfect combination of speed and skill'
      },
      slide2: {
        title: 'Elimination Points System',
        subtitle: 'Fair points calculation based on head-to-head rankings'
      },
      slide3: {
        title: 'Elite Athlete Development Program',
        subtitle: 'Improve racing level and compete in international events'
      }
    },

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming'
    },

    latestNews: {
      title: 'Latest News'
    },

    topAthletes: {
      title: 'Rankings'
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
    comingSoon: 'Coming Soon',
    roles: {
      admin: 'Administrator',
      coach: 'Coach',
      athlete: 'Athlete',
      user: 'User'
    }
  }
};
