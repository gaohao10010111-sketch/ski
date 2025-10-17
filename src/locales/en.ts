// English language pack
import type { TranslationKeys } from './zh';

export const en: Partial<TranslationKeys> = {
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
    },
    docs: {
      competitionRules: {
        title: 'Competition Rules',
        description: 'Technical rules and officiating standards',
        backLabel: 'Back to Knowledge Base'
      },
      pointsRules: {
        title: 'Points Rules',
        description: 'Points calculation documentation',
        backLabel: 'Back to Knowledge Base'
      },
      venueStandards: {
        title: 'Venue Standards',
        description: 'Facility requirements and safety guidelines',
        backLabel: 'Back to Knowledge Base'
      },
      fisRules: {
        title: 'FIS Rules',
        description: 'International Ski Federation references',
        backLabel: 'Back to Knowledge Base'
      },
      guide: {
        title: 'Platform Guide',
        description: 'Usage guides and FAQs',
        backLabel: 'Back to Knowledge Base'
      }
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

  // Coming soon component
  comingSoon: {
    title: 'Coming Soon',
    description: 'This feature is currently under development. Please check back soon.',
    backLabel: 'Back to Home',
    learnMoreLabel: 'Learn More',
    progressLabel: 'Development Progress',
    progressValue: '30%',
    eta: 'Estimated launch: 2-4 weeks',
    upcomingFeaturesTitle: 'Upcoming Features',
    upcomingFeatures: [
      'Real-time data updates',
      'Intelligent analytics',
      'Personalised recommendations',
      'Mobile optimisation'
    ]
  },

  // Docs hub
  docsPage: {
    hero: {
      title: 'Knowledge Base',
      description: 'Competition rules, technical standards, and platform user guides'
    },
    viewDocLabel: 'View document',
    categories: {
      pointsRules: {
        title: 'Points Rules',
        description: 'Detailed guide to China ski points calculations',
        topics: ['Points formulas', 'Event tier coefficients', 'Penalty mechanisms', 'BL/NL points tables']
      },
      competitionRules: {
        title: 'Competition Rules',
        description: 'Technical rules and officiating standards',
        topics: ['Competition flow', 'Judging rules', 'Timing systems', 'Appeal procedures']
      },
      venueStandards: {
        title: 'Venue Standards',
        description: 'Facility requirements and safety compliance',
        topics: ['Venue standards', 'Facility requirements', 'Safety guidelines', 'Certification process']
      },
      fisRules: {
        title: 'FIS International Rules',
        description: 'International Ski Federation rulebook references',
        topics: ['FIS points rules', 'ICR competition rules', 'International standards', 'Bilingual references']
      },
      guide: {
        title: 'Platform Guide',
        description: 'Feature walkthroughs and common questions',
        topics: ['Registration flow', 'Entry guide', 'Points lookup', 'FAQs']
      }
    },
    popular: {
      title: 'Popular Documents',
      viewsLabel: 'views',
      items: {
        alpineRulesV4: { title: 'China Alpine Ski Points Rules v4.0', category: 'Points Rules' },
        seasonGrading: { title: '2024-2025 Event Tier Standards', category: 'Competition Rules' },
        youthSeries: { title: 'U-Series Youth Event Plan', category: 'Competition Rules' },
        fisPointsGuide: { title: 'FIS Points Calculation Guide', category: 'FIS Rules' }
      }
    }
  },

  // Page copy (ComingSoon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Athlete Directory',
          description: 'Browse all registered athlete profiles',
          backLabel: 'Back to Alpine Skiing'
        },
        rankings: {
          title: 'Athlete Rankings',
          description: 'Comprehensive athlete rankings based on points and results',
          backLabel: 'Back to Alpine Skiing'
        },
        stats: {
          title: 'Athlete Statistics',
          description: 'In-depth athlete statistics and visual analytics',
          backLabel: 'Back to Alpine Skiing'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Competition Rules',
          description: 'Detailed competition technical standards',
          backLabel: 'Back to Alpine Skiing'
        },
        'points-rules': {
          title: 'Points Rules',
          description: 'Explore alpine skiing v4.0 points rules',
          backLabel: 'Back to Alpine Skiing'
        },
        'venue-standards': {
          title: 'Venue Standards',
          description: 'Alpine skiing venue standards and certification requirements',
          backLabel: 'Back to Alpine Skiing'
        }
      },
      events: {
        register: {
          title: 'Online Registration',
          description: 'Streamlined event registration system coming soon',
          backLabel: 'Back to Alpine Skiing'
        },
        results: {
          title: 'Results Lookup',
          description: 'Check race results and points updates in real time',
          backLabel: 'Back to Alpine Skiing'
        },
        schedule: {
          title: 'Event Calendar',
          description: 'View upcoming alpine skiing events',
          backLabel: 'Back to Alpine Skiing'
        },
        stats: {
          title: 'Event Statistics',
          description: 'Comprehensive event data analytics suite',
          backLabel: 'Back to Alpine Skiing'
        }
      },
      points: {
        calculator: {
          title: 'Points Calculator',
          description: 'Accurate v4.0 points calculator coming soon',
          backLabel: 'Back to Alpine Skiing'
        },
        rankings: {
          title: 'Points Rankings',
          description: 'Real-time athlete leaderboard coming soon',
          backLabel: 'Back to Alpine Skiing'
        },
        trends: {
          title: 'Points Trends',
          description: 'Visual points trend analytics tools coming soon',
          backLabel: 'Back to Alpine Skiing'
        }
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Athlete Directory',
          description: 'Browse all registered athlete profiles',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        rankings: {
          title: 'Athlete Rankings',
          description: 'Comprehensive athlete rankings based on points and results',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        stats: {
          title: 'Athlete Statistics',
          description: 'In-depth athlete statistics and visual analytics',
          backLabel: 'Back to Freestyle Slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Competition Rules',
          description: 'Detailed competition technical standards',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        'points-rules': {
          title: 'Points Rules',
          description: 'Read detailed points calculation rules',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        'venue-standards': {
          title: 'Venue Standards',
          description: 'Venue technical standards and certification requirements',
          backLabel: 'Back to Freestyle Slopestyle'
        }
      },
      events: {
        register: {
          title: 'Online Registration',
          description: 'Streamlined event registration system',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        results: {
          title: 'Results Lookup',
          description: 'Check race results and points updates in real time',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        schedule: {
          title: 'Event Calendar',
          description: 'View upcoming event schedule',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        stats: {
          title: 'Event Statistics',
          description: 'Comprehensive event data analytics suite',
          backLabel: 'Back to Freestyle Slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Points Calculator',
          description: 'Precise points calculator coming soon',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        rankings: {
          title: 'Points Rankings',
          description: 'Real-time athlete points leaderboard',
          backLabel: 'Back to Freestyle Slopestyle'
        },
        trends: {
          title: 'Points Trends',
          description: 'Visualise points trends with analytics tools',
          backLabel: 'Back to Freestyle Slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Athlete Directory',
          description: 'Browse all registered athlete profiles',
          backLabel: 'Back to Snowboard Parallel'
        },
        rankings: {
          title: 'Athlete Rankings',
          description: 'Comprehensive athlete rankings based on points and results',
          backLabel: 'Back to Snowboard Parallel'
        },
        stats: {
          title: 'Athlete Statistics',
          description: 'In-depth athlete statistics and visual analytics',
          backLabel: 'Back to Snowboard Parallel'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Competition Rules',
          description: 'Detailed competition technical standards',
          backLabel: 'Back to Snowboard Parallel'
        },
        'points-rules': {
          title: 'Points Rules',
          description: 'Read detailed points calculation rules',
          backLabel: 'Back to Snowboard Parallel'
        },
        'venue-standards': {
          title: 'Venue Standards',
          description: 'Venue technical standards and certification requirements',
          backLabel: 'Back to Snowboard Parallel'
        }
      },
      events: {
        register: {
          title: 'Online Registration',
          description: 'Streamlined event registration system',
          backLabel: 'Back to Snowboard Parallel'
        },
        results: {
          title: 'Results Lookup',
          description: 'Check race results and points updates in real time',
          backLabel: 'Back to Snowboard Parallel'
        },
        schedule: {
          title: 'Event Calendar',
          description: 'View upcoming event schedule',
          backLabel: 'Back to Snowboard Parallel'
        },
        stats: {
          title: 'Event Statistics',
          description: 'Comprehensive event data analytics suite',
          backLabel: 'Back to Snowboard Parallel'
        }
      },
      points: {
        calculator: {
          title: 'Points Calculator',
          description: 'Precise points calculator coming soon',
          backLabel: 'Back to Snowboard Parallel'
        },
        rankings: {
          title: 'Points Rankings',
          description: 'Real-time athlete points leaderboard',
          backLabel: 'Back to Snowboard Parallel'
        },
        trends: {
          title: 'Points Trends',
          description: 'Visualise points trends with analytics tools',
          backLabel: 'Back to Snowboard Parallel'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Athlete Directory',
          description: 'Browse all registered athlete profiles',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        rankings: {
          title: 'Athlete Rankings',
          description: 'Comprehensive athlete rankings based on points and results',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        stats: {
          title: 'Athlete Statistics',
          description: 'In-depth athlete statistics and visual analytics',
          backLabel: 'Back to Snowboard Slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Competition Rules',
          description: 'Detailed competition technical standards',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        'points-rules': {
          title: 'Points Rules',
          description: 'Read detailed points calculation rules',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        'venue-standards': {
          title: 'Venue Standards',
          description: 'Venue technical standards and certification requirements',
          backLabel: 'Back to Snowboard Slopestyle'
        }
      },
      events: {
        register: {
          title: 'Online Registration',
          description: 'Streamlined event registration system',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        results: {
          title: 'Results Lookup',
          description: 'Check race results and points updates in real time',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        schedule: {
          title: 'Event Calendar',
          description: 'View upcoming event schedule',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        stats: {
          title: 'Event Statistics',
          description: 'Comprehensive event data analytics suite',
          backLabel: 'Back to Snowboard Slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Points Calculator',
          description: 'Precise points calculator coming soon',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        rankings: {
          title: 'Points Rankings',
          description: 'Real-time athlete points leaderboard',
          backLabel: 'Back to Snowboard Slopestyle'
        },
        trends: {
          title: 'Points Trends',
          description: 'Visualise points trends with analytics tools',
          backLabel: 'Back to Snowboard Slopestyle'
        }
      }
    }
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
      continueCarousel: 'Continue Carousel',
      statuses: {
        live: 'Live',
        updated: 'Updated',
        upcoming: 'Upcoming'
      },
      items: [
        { id: 'nc-men-gs', title: '2024 National Championships', subtitle: 'Giant Slalom · Live Now', status: 'live', pinned: true },
        { id: 'points-refresh', title: 'Points Rankings Refreshed', subtitle: '14-Day Cycle · Published', status: 'updated', pinned: false },
        { id: 'rules-update', title: 'New Season Regulations', subtitle: 'Technical Committee · Released', status: 'updated', pinned: false },
        { id: 'registration-open', title: 'Athlete Registration Open', subtitle: '2024-25 Season · Open Enrollment', status: 'upcoming', pinned: false },
        { id: 'camp', title: 'Training Camp Notice', subtitle: 'Winter Program · Starting Soon', status: 'upcoming', pinned: false }
      ]
    },
    latestResults: {
      title: 'Latest Competition Results',
      subtitle: 'Real-time competition results and points rankings',
      recentResults: 'Recent Results',
      liveUpdate: 'Live Update',
      viewMore: 'View More Events →',
      statusLabels: {
        live: 'Live',
        completed: 'Completed'
      },
      results: [
        { id: 'nc-men-gs', title: '2024 National Championships', subtitle: 'Men Giant Slalom · Tianchi Resort', status: 'live', time: 'Dec 15 · 14:30' },
        { id: 'china-cup-sl', title: 'China Cup Alpine Open', subtitle: 'Women Slalom · Wanlong Resort', status: 'completed', time: 'Dec 14 · 16:45' },
        { id: 'northeast-league', title: 'Northeast League', subtitle: 'Mixed Alpine Combined · Yabuli Resort', status: 'completed', time: 'Dec 13 · 15:20' }
      ]
    },
    rankings: {
      title: 'Points Leaderboard',
      updatedOn: 'Updated on',
      points: 'Points',
      viewFullRankings: 'View Full Rankings →',
      entries: [
        { rank: 1, name: 'Wei Zhang', event: 'Men Giant Slalom', points: '0.00' },
        { rank: 2, name: 'Xue Li', event: 'Women Slalom', points: '8.45' },
        { rank: 3, name: 'Bing Wang', event: 'Women Giant Slalom', points: '12.30' },
        { rank: 4, name: 'Qiang Liu', event: 'Men Slalom', points: '15.67' }
      ]
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
  },

  // About Page
  aboutPage: {
    pageTitle: 'About Us',
    heroDescription: 'China Skiing Points Management Platform is a professional ski sports points management service, committed to promoting the standardization and professionalization of skiing sports',

    platformTitle: 'Platform Introduction',
    platformDescription1: 'China Skiing Points Management Platform is a comprehensive skiing sports management platform established based on official points calculation rules and youth U-series competition programs.',
    platformDescription2: 'The platform supports three major disciplines: alpine skiing, freestyle skiing, and snowboarding, covering multiple sub-disciplines including downhill, slalom, giant slalom, super-G, combined, big air, slopestyle, halfpipe and other events for points calculation and event management.',
    platformDescription3: 'We are committed to providing professional, accurate, and efficient digital management services for skiing sports, promoting the standardized development of skiing.',

    stats: {
      pointsSystems: { value: '4', label: 'Points Systems' },
      registeredAthletes: { value: '1000+', label: 'Registered Athletes' },
      annualEvents: { value: '50+', label: 'Annual Events' },
      onlineService: { value: '24/7', label: 'Online Service' }
    },

    coreFeaturesTitle: 'Core Features',
    coreFeaturesSubtitle: 'Professional, comprehensive, and user-friendly ski event management solution',

    pointsCalculation: {
      title: 'Points Calculation System',
      description: 'Accurate points calculation based on official rules, supporting dual points systems'
    },
    eventManagement: {
      title: 'Event Management',
      description: 'Full-process digital management from registration to results publication'
    },
    athleteManagement: {
      title: 'Athlete Management',
      description: 'Athlete registration, qualification review, and points record management'
    },
    dataAnalysis: {
      title: 'Data Analysis',
      description: 'Professional data statistics analysis and visualization reports'
    },

    technicalFeaturesTitle: 'Technical Features',

    dualPointsEngine: {
      title: 'Dual Points Calculation Engine',
      features: [
        'Alpine Skiing: Time-based points calculation',
        'Freestyle/Snowboard: Rank-based 240/360/120 tier system',
        'Dynamic penalty points calculation',
        'Multi-discipline points management'
      ]
    },
    rulesSupport: {
      title: 'Rules System Support',
      features: [
        'Alpine Skiing points calculation rules',
        'National BA/SS Youth U-Series program',
        'FIS International Ski Federation rules compatibility',
        'Venue technical standards management'
      ]
    },
    userExperience: {
      title: 'User Experience',
      features: [
        'Responsive design, multi-platform adaptation',
        'Real-time data updates',
        'Intuitive data visualization',
        'Convenient operation workflow'
      ]
    },

    contactTitle: 'Contact Us',
    contactDescription: 'If you have any questions or suggestions, please feel free to contact us',

    technicalSupport: {
      title: 'Technical Support',
      email: 'Email: support@ski-points.com',
      phone: 'Phone: 400-123-4567'
    },
    businessCooperation: {
      title: 'Business Cooperation',
      email: 'Email: business@ski-points.com',
      wechat: 'WeChat: ski-points-service'
    }
  }
};
