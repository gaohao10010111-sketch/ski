// English language pack
import type { PartialTranslationKeys } from './zh';

export const en: PartialTranslationKeys = {
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
    readMore: 'Read More',
    cancelled: 'Cancelled'
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

    subDisciplines: [
      { id: 'all', name: 'All Events', nameEn: 'All Events' },
      { id: 'DH', name: 'Downhill', nameEn: 'Downhill' },
      { id: 'SL', name: 'Slalom', nameEn: 'Slalom' },
      { id: 'GS', name: 'Giant Slalom', nameEn: 'Giant Slalom' },
      { id: 'SG', name: 'Super-G', nameEn: 'Super-G' },
      { id: 'AC', name: 'Alpine Combined', nameEn: 'Alpine Combined' }
    ],

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming',
      events: [],
      emptyMessage: 'No events scheduled, please check official announcements'
    },

    latestNews: {
      title: 'Announcements',
      items: []
    },

    topAthletes: {
      title: 'Rankings',
      athletes: []
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

    subDisciplines: [
      { id: 'all', name: 'All Events', nameEn: 'All Events' },
      { id: 'SS', name: 'Slopestyle', nameEn: 'Slopestyle' },
      { id: 'BA', name: 'Big Air', nameEn: 'Big Air' }
    ],

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming',
      events: [],
      emptyMessage: 'No events scheduled, please check official announcements'
    },

    latestNews: {
      title: 'Announcements',
      items: []
    },

    topAthletes: {
      title: 'Rankings',
      athletes: []
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

    subDisciplines: [
      { id: 'all', name: 'All Events', nameEn: 'All Events' },
      { id: 'SS', name: 'Slopestyle', nameEn: 'Slopestyle' },
      { id: 'BA', name: 'Big Air', nameEn: 'Big Air' }
    ],

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming',
      events: [],
      emptyMessage: 'No events scheduled, please check official announcements'
    },

    latestNews: {
      title: 'Announcements',
      items: []
    },

    topAthletes: {
      title: 'Rankings',
      athletes: []
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

    subDisciplines: [
      { id: 'all', name: 'All Events', nameEn: 'All Events' },
      { id: 'PGS', name: 'Parallel Giant Slalom', nameEn: 'Parallel Giant Slalom' },
      { id: 'PSL', name: 'Parallel Slalom', nameEn: 'Parallel Slalom' }
    ],

    quickAccess: {
      results: { title: 'Results', nameEn: 'Results' },
      rankings: { title: 'Rankings', nameEn: 'Rankings' },
      schedule: { title: 'Calendar', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athletes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Upcoming',
      events: []
    },

    latestNews: {
      title: 'Latest News',
      items: []
    },

    topAthletes: {
      title: 'Rankings',
      athletes: []
    }
  },

  // Disciplines overview page
  disciplinesPage: {
    hero: {
      backLabel: 'Back to Home',
      title: 'China Ski Points System',
      subtitle: 'Four independent points systems | Professional event management platform'
    },
    continuation: {
      title: 'Four-Discipline Points Continuation',
      description: 'A scientifically designed carry-over strategy that keeps performance evaluation consistent across all disciplines.',
      cards: [
        {
          id: 'carry-forward',
          value: '×50%',
          title: 'Carry-over Ratio',
          description: 'At the end of each season, 50% of points for every discipline carry over to the next season.',
          accent: 'blue'
        },
        {
          id: 'season',
          value: 'Jul 1 – Jun 30',
          title: 'Season Window',
          description: 'A unified season cycle from July 1 to June 30 ensures consistent timing for all calculations.',
          accent: 'green'
        },
        {
          id: 'best-two',
          value: 'Best 2',
          title: 'Results Calculation',
          description: 'The average of the best two results in each discipline becomes the athlete’s season points.',
          accent: 'purple'
        }
      ]
    },
    cardsSection: {
      title: 'Choose Your Discipline',
      ctaLabel: 'Enter Discipline',
      cards: [
        {
          id: 'alpine',
          name: 'Alpine Skiing',
          nameEn: 'Alpine Skiing',
          icon: 'alpine',
          color: 'from-blue-600 to-cyan-600',
          description: 'v4.0 time-based points formula with A/B/C event coefficients.',
          features: ['Downhill', 'Slalom', 'Giant Slalom', 'Super-G', 'Alpine Combined']
        },
        {
          id: 'snowboard-slopestyle',
          name: 'Snowboard Slopestyle & Big Air',
          nameEn: 'Snowboard Slopestyle & Big Air',
          icon: 'snowboard',
          color: 'from-orange-600 to-yellow-600',
          description: '240/360/120 point tiers with judge scoring converted to rankings.',
          features: ['Slopestyle', 'Big Air', 'Halfpipe']
        },
        {
          id: 'snowboard-parallel',
          name: 'Snowboard Parallel',
          nameEn: 'Snowboard Parallel',
          icon: 'snowboard',
          color: 'from-purple-600 to-pink-600',
          description: 'Time-based racing points with elimination brackets.',
          features: ['Parallel GS (PGS)', 'Parallel SL (PSL)']
        },
        {
          id: 'freeski-slopestyle',
          name: 'Freeski Slopestyle & Big Air',
          nameEn: 'Freeski Slopestyle & Big Air',
          icon: 'freeski',
          color: 'from-red-600 to-rose-600',
          description: '240/360/120 point tiers with trick difficulty coefficients.',
          features: ['Slopestyle', 'Big Air', 'Aerials']
        }
      ]
    },
    highlights: {
      title: 'Core Platform Highlights',
      items: [
        {
          id: 'independent',
          icon: 'award',
          title: 'Independent Rankings',
          description: 'Dedicated rankings and analytics for each discipline.'
        },
        {
          id: 'realtime',
          icon: 'barChart',
          title: 'Real-Time Calculations',
          description: 'Points update automatically right after each competition.'
        },
        {
          id: 'u-series',
          icon: 'target',
          title: 'U-Series Management',
          description: 'Youth age groups for U12, U15, and U18 divisions.'
        },
        {
          id: 'continuation',
          icon: 'rotateCcw',
          title: 'Carry-over Mechanism',
          description: '50% of season points roll over for continuous evaluation.'
        }
      ]
    }
  },

  // Athletes page
  athletesPage: {
    pageTitle: 'Athlete Management',
    pageSubtitle: 'China ski athlete profiles and points analytics',
    searchPlaceholder: 'Search by athlete name or province…',
    filterOptions: [
      { value: 'all', label: 'All Disciplines' },
      { value: 'alpine', label: 'Alpine Skiing' },
      { value: 'freestyle', label: 'Freestyle Skiing' },
      { value: 'snowboard', label: 'Snowboarding' }
    ],
    resultsSummary: 'Found {count} athletes',
    exportLabel: 'Export List',
    stats: [
      { id: 'registered', value: '-', label: 'Registered Athletes', icon: 'user', theme: 'blue' },
      { id: 'active', value: '-', label: 'Active Athletes', icon: 'trophy', theme: 'green' },
      { id: 'awarded', value: '-', label: 'Medal Winners', icon: 'medal', theme: 'purple' },
      { id: 'improved', value: '-', label: 'Points Improved', icon: 'trendingUp', theme: 'red' }
    ],
    tableHeaders: {
      rank: 'Rank',
      athlete: 'Athlete',
      discipline: 'Discipline',
      points: 'Points',
      competitions: 'Events',
      bestResult: 'Best Result',
      province: 'Province'
    },
    list: []
  },

  // Language selector
  languageSelector: {
    title: 'Select Language',
    languages: {
      zh: 'Chinese',
      en: 'English',
      ja: 'Japanese',
      ko: 'Korean',
      de: 'German',
      fr: 'French',
      it: 'Italian',
      ru: 'Russian',
      no: 'Norwegian',
      sv: 'Swedish',
      fi: 'Finnish',
      es: 'Spanish'
    }
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
        seasonGrading: { title: '2025-2026 Event Tier Standards', category: 'Competition Rules' },
        youthSeries: { title: 'U-Series Youth Event Plan', category: 'Competition Rules' },
        fisPointsGuide: { title: 'FIS Points Calculation Guide', category: 'FIS Rules' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'China Alpine Ski Rules Library',
      description: 'Review the streamlined rules system covering points calculation, competition management, youth development and more.',
      highlights: [
        { icon: 'award', text: 'Official Standard' },
        { icon: 'target', text: 'Simplified Calculations' },
        { icon: 'users', text: 'Expanded Youth System' }
      ]
    },
    headings: {
      ruleModules: 'Rule Modules'
    },
    toc: {
      toggleTitle: 'Toggle table of contents',
      title: 'Page Outline',
      download: 'Download PDF version',
      items: {
        coreFormula: 'Core Formula',
        ruleModules: 'Rule Modules',
        coreFeatures: 'Key Highlights',
        quickLinks: 'Quick Links',
        upgradeInfo: 'Upgrade Notes',
        importantNotice: 'Important Notice'
      }
    },
    formula: {
      title: 'Core Formula',
      expression: 'Final Points = (Base Event Points + Penalty Points) × Event Coefficient',
      description: 'Compared with v2.0, complex quality, participation, and additional factors are removed. The streamlined three-step method improves efficiency and transparency.',
      copyButton: 'Copy Formula',
      copySuccess: 'Copied to clipboard!',
      calculatorButton: 'Use Calculator'
    },
    ruleModules: {
      points: {
        title: 'China Alpine Ski Points Rules',
        description: 'Streamlined points calculation system based on a three-step formula.',
        features: ['Simplified three-step formula', 'Three-tier competition structure (A/B/C)', 'Expanded youth categories', 'Improved transparency'],
        linkLabel: 'View details'
      },
      competition: {
        title: 'Competition Regulations',
        description: 'Understand the latest competition rules and youth system guidance.',
        features: ['Event overview', 'Age group system', 'Participation guide', 'Safety and technical standards'],
        linkLabel: 'View details'
      },
      documents: {
        title: 'China Points Documentation',
        description: 'Access documents and tools for the streamlined points system.',
        features: ['Detailed rule explanations', 'Formula component notes', 'Online calculator', 'Downloadable PDFs'],
        linkLabel: 'View details'
      }
    },
    v4Features: {
      title: 'Key Highlights',
      items: {
        simplified: {
          title: 'Simplified Calculations',
          description: 'Removes complex quality, participation, and additional factors.'
        },
        tiers: {
          title: 'Three-tier System',
          description: 'Classes A (1.0), B (0.6), and C (0.3) provide clear management.'
        },
        youth: {
          title: 'Expanded Youth',
          description: 'Focused support for U15–U18 age brackets.'
        },
        efficiency: {
          title: 'Efficient & Transparent',
          description: 'Three-step method improves speed and clarity.'
        }
      }
    },
    quickLinks: {
      title: 'Quick Links',
      items: {
        calculator: { label: 'Points Calculator' },
        rankings: { label: 'Points Rankings' },
        data: { label: 'Event Data Management' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Upgrade Notes',
      improvements: {
        title: 'Key Improvements',
        items: ['Streamlined formula without complex factors', 'Three-tier event classification for clarity', 'Expanded youth age brackets with full support', 'Enhanced transparency and efficiency']
      },
      advantages: {
        title: 'Technical Advantages',
        items: ['Three-step calculation, easy to adopt', 'Standardised management aligned with international practices', 'Digital tools with comprehensive online support', 'Open and transparent competition environment']
      }
    },
    importantNotice: {
      title: 'Important Notice',
      version: {
        title: 'Rule Version',
        items: ['Current version: latest release', 'Effective season: 2024–2025', 'Scope: domestic events in China', 'Update cycle: adjusted according to practice']
      },
      usage: {
        title: 'Usage Guidance',
        items: ['Start with the points rules overview', 'Use the online calculator for verification', 'Follow youth development policies closely', 'Stay informed on rule updates']
      },
      support: 'This rule framework builds upon international experience and China’s realities to provide accurate, fair, and efficient support for alpine skiing. For questions or suggestions, please contact us through the listed channels.'
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
    rules: {
      competition: {
        title: 'Competition Regulations',
        description: 'This page is under construction. Please check back soon.',
        backLabel: 'Back to Rules Overview'
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
    },
    docs: {
      competitionRules: {
        title: 'Competition Rules',
        description: 'Ski competition technical rules and officiating standards',
        backLabel: 'Back to Knowledge Base'
      },
      pointsRules: {
        title: 'Points Rules',
        description: 'China ski points calculation rules documentation',
        backLabel: 'Back to Knowledge Base'
      },
      venueStandards: {
        title: 'Venue Standards',
        description: 'Event venue facilities and technical requirements',
        backLabel: 'Back to Knowledge Base'
      },
      fisRules: {
        title: 'FIS International Rules',
        description: 'International Ski Federation competition rules',
        backLabel: 'Back to Knowledge Base'
      },
      guide: {
        title: 'Platform User Guide',
        description: 'System feature instructions and FAQs',
        backLabel: 'Back to Knowledge Base'
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
      exploreDisciplines: 'Explore Points System',
      freeRegister: 'Free Registration',
      platformIntro: 'First choice platform for professional athletes, coaches, and event organizers • Certified by General Administration of Sport',
      highlights: [
        { label: 'Four Integrated Points Systems', color: 'bg-ski-blue' },
        { label: 'Certified by Winter Sports Center', color: 'bg-green-400' },
        { label: 'U-Series & Mass Participation Events', color: 'bg-yellow-400' }
      ]
    },
    features: {
      title: 'Core Platform Features',
      description: 'Complete ski competition management solution based on FIS International Ski Federation standards, covering all core aspects from points calculation and athlete management to event organization for alpine skiing',
      online: 'Online',
      useNow: 'Use Now',
      fisPointsQuery: {
        title: 'FIS Points Query',
        description: 'Query athlete FIS points and ranking information'
      },
      pointsCalculator: {
        title: 'Points Calculator',
        description: 'Real-time calculation of ski points based on competition results'
      },
      pointsRankings: {
        title: 'Points Rankings',
        description: 'Real-time updated athlete points rankings'
      },
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
      noData: 'No competition data available for this discipline',
      statusLabels: {
        live: 'Live',
        completed: 'Completed',
        upcoming: 'Upcoming'
      },
      results: []
    },
    rankings: {
      title: 'Points Leaderboard',
      updatedOn: 'Updated on',
      points: 'Points',
      viewFullRankings: 'View Full Rankings →',
      season: 'Season',
      noData: 'No ranking data available for this discipline',
      entries: []
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
    heroDescription: 'China Youth Skiing Points Ranking Official Platform is a comprehensive competition management platform built on official standards, providing authoritative and accurate data management and points calculation services for Chinese skiing competitions',

    platformTitle: 'Platform Introduction',
    platformDescription1: 'According to the official announcement on the website of the Winter Sports Management Center of the General Administration of Sport of China, Beijing Huati Ice & Snow Industry Development Co., Ltd. ("Huati Ice & Snow") has officially become the organizer for the 2025-2028 three-season National Snowboard Slopestyle & Big Air Youth U-Series, Snowboard Parallel Youth U-Series, Freestyle Skiing Slopestyle & Big Air Youth U-Series, and Alpine Skiing Youth U-Series competitions.',
    platformDescription2: 'Authorized by Huati Ice & Snow, this platform serves as the designated operator of the competition points platform, responsible for event data collection, points calculation, and ranking publication. This platform is the designated official release platform for the National Youth Skiing U-Series competition points rankings, aiming to provide authoritative, fair, and timely competition information services for athletes, coaches, and all stakeholders.',
    platformDescription3: 'We are committed to promoting the digitalization and standardization of Chinese skiing sports, providing modern data management, points calculation, and results statistics tools for athletes, coaches, event organizers, and competition referees, comprehensively covering big air, slopestyle, parallel events, and other snow sports to enhance the organizational and competitive level of Chinese skiing.',

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
