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
  },

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
