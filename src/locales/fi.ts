// Finnish language pack - Suomalainen kielipaketti
import { TranslationKeys } from './zh';

export const fi: TranslationKeys = {
  // Yleiset
  common: {
    loading: 'Ladataan...',
    error: 'Virhe',
    success: 'Onnistui',
    cancel: 'Peruuta',
    confirm: 'Vahvista',
    save: 'Tallenna',
    edit: 'Muokkaa',
    delete: 'Poista',
    search: 'Haku',
    filter: 'Suodatin',
    export: 'Vie',
    import: 'Tuo',
    back: 'Takaisin',
    next: 'Seuraava',
    previous: 'Edellinen',
    submit: 'Lähetä',
    reset: 'Nollaa',
    home: 'Koti',
    language: 'Kieli',
    login: 'Kirjaudu',
    logout: 'Kirjaudu ulos',
    register: 'Rekisteröidy',
    profile: 'Profiili',
    viewDetails: 'Näytä yksityiskohdat',
    viewFullSchedule: 'Näytä täydellinen kilpailukalenteri →',
    viewFullRankings: 'Näytä täydellinen sijoitus →',
    readMore: 'Lue lisää'
  },

  // Navigointi
  navigation: {
    title: 'Kiinalainen Hiihtopistejärjestelmä',
    titleShort: 'CSPS',

    // Projektinvalitsin
    disciplines: 'Lajit',
    alpine: 'Alppihiihto',
    snowboardSlopestyle: 'Lumilautaslopestyle',
    snowboardParallel: 'Lumilautaparalleli',
    freestyleSlopestyle: 'Vapaalaskuslopestyle',

    // Yleinen navigointi
    my: 'Oma',
    docs: 'Dokumentit',
    about: 'Tietoa',

    // Projektitason navigointi
    points: 'Pisteiden hallinta',
    events: 'Kilpailujen hallinta',
    athletes: 'Urheilijat',

    // Alavalikot
    submenus: {
      // Pisteiden hallinta alavalikot
      pointsCalculator: 'Pistelaskin',
      pointsRankings: 'Pistesijoitus',
      pointsTrends: 'Pisteiden trendit',

      // Kilpailujen hallinta alavalikot
      eventsSchedule: 'Kilpailukalenteri',
      eventsRegister: 'Verkkorekisteröinti',
      eventsResults: 'Tuloskysely',
      eventsStats: 'Datatilastot',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Urheilijat alavalikot
      athletesList: 'Urheilijalista',
      athletesProfile: 'Urheilijan profiili',
      athletesStats: 'Urheilijan tilastot',

      // Dokumentit alavalikot
      docsPointsRules: 'Pistesäännöt',
      docsCompetitionRules: 'Kilpailusäännöt',
      docsVenueStandards: 'Paikkastandardit',
      docsGuide: 'Käyttöopas',

      // Oma alue alavalikot
      myProfile: 'Henkilökohtainen keskus',
      myPoints: 'Omat pisteet',
      myRegistrations: 'Omat rekisteröinnit',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Murupolku navigointi
  breadcrumb: {
    home: 'Koti',
    disciplines: 'Hiihtolajit',
    alpine: 'Alppihiihto',
    snowboardSlopestyle: 'Lumilautaslopestyle/Big Air',
    snowboardParallel: 'Lumilautaparalleli',
    freeskiSlopestyle: 'Vapaalaskuslopestyle/Big Air',
    points: 'Pistekeskus',
    events: 'Kilpailut',
    my: 'Oma Alue',
    docs: 'Tietokanta',
    about: 'Järjestelmästä'
  },

  // Alppihiihto sivu
  alpine: {
    title: 'Alppihiihto',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alppihiihto',

    hero: {
      slide1: {
        title: '2024 Kansallisten Mestaruuskilpailujen Kohokohdat',
        subtitle: 'Todista kiinalaisen alppihiihdon loistavia hetkiä'
      },
      slide2: {
        title: 'Pistejärjestelmän Päivitys',
        subtitle: 'Tarkempi pistelaskenta v4.0-sääntöjen pohjalta'
      },
      slide3: {
        title: 'Talviharjoitusleiri Ilmoittautuminen Avoinna',
        subtitle: 'Ammattimainen valmennusryhmä auttaa taitojesi parantamisessa'
      }
    },

    quickAccess: {
      results: { title: 'Kilpailutulokset', nameEn: 'Results' },
      rankings: { title: 'Pistesijoitus', nameEn: 'Rankings' },
      schedule: { title: 'Kilpailukalenteri', nameEn: 'Calendar' },
      videos: { title: 'Videokeskus', nameEn: 'Videos' },
      athletes: { title: 'Urheilijarekisteri', nameEn: 'Athletes' },
      documents: { title: 'Sääntödokumentit', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Tulevat'
    },

    latestNews: {
      title: 'Uusimmat Uutiset'
    },

    topAthletes: {
      title: 'Pistesijoitus'
    }
  },

  // Vapaalaskuslopestyle sivu
  freestyleSlopestyle: {
    title: 'Vapaalaskuslopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freeski SS',

    hero: {
      slide1: {
        title: '2024 Kansalliset Vapaalaskuslopestyle Mestaruuskilpailut',
        subtitle: 'Todista kiinalaisen freeskiin rajojen ylittämistä'
      },
      slide2: {
        title: '360 Porrastettu Pistejärjestelmä',
        subtitle: 'Oikeudenmukainen pistemekanismi vaikeuskertoimen pohjalta'
      },
      slide3: {
        title: 'U-sarjan Nuorten Kehitysohjelma',
        subtitle: 'U12/U15/U18 lahjakkuuksien kehitysjärjestelmä'
      }
    },

    quickAccess: {
      results: { title: 'Kilpailutulokset', nameEn: 'Results' },
      rankings: { title: 'Pistesijoitus', nameEn: 'Rankings' },
      schedule: { title: 'Kilpailukalenteri', nameEn: 'Calendar' },
      videos: { title: 'Videokeskus', nameEn: 'Videos' },
      athletes: { title: 'Urheilijarekisteri', nameEn: 'Athletes' },
      documents: { title: 'Sääntödokumentit', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Tulevat'
    },

    latestNews: {
      title: 'Uusimmat Uutiset'
    },

    topAthletes: {
      title: 'Pistesijoitus'
    }
  },

  // Lumilautaslopestyle sivu
  snowboardSlopestyle: {
    title: 'Lumilautaslopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Kansalliset Lumilautaslopestyle Mestaruuskilpailut',
        subtitle: 'Todista kiinalaisen lumilautailun jännittäviä hetkiä'
      },
      slide2: {
        title: '360 Porrastettu Pistejärjestelmä',
        subtitle: 'Pistelaskentasäännöt kansainvälisten standardien pohjalta'
      },
      slide3: {
        title: 'U-sarjan Nuorten Kehitysohjelma',
        subtitle: 'U12/U15/U18 kolmiportainen kehitysjärjestelmä'
      }
    },

    quickAccess: {
      results: { title: 'Kilpailutulokset', nameEn: 'Results' },
      rankings: { title: 'Pistesijoitus', nameEn: 'Rankings' },
      schedule: { title: 'Kilpailukalenteri', nameEn: 'Calendar' },
      videos: { title: 'Videokeskus', nameEn: 'Videos' },
      athletes: { title: 'Urheilijarekisteri', nameEn: 'Athletes' },
      documents: { title: 'Sääntödokumentit', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Tulevat'
    },

    latestNews: {
      title: 'Uusimmat Uutiset'
    },

    topAthletes: {
      title: 'Pistesijoitus'
    }
  },

  // Lumilautaparalleli sivu
  snowboardParallel: {
    title: 'Lumilautaparalleli',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Lumilautaparalleli',

    hero: {
      slide1: {
        title: '2024 Kansalliset Lumilautaparalleli Mestaruuskilpailut',
        subtitle: 'Täydellinen yhdistelmä nopeutta ja taitoa'
      },
      slide2: {
        title: 'Turnauspistysjärjestelmä',
        subtitle: 'Oikeudenmukainen pistelaskenta ottelurankingin pohjalta'
      },
      slide3: {
        title: 'Eliittien Urheilijan Kehitysohjelma',
        subtitle: 'Paranna kilpailutasoasi ja haasta kansainväliset kilpailut'
      }
    },

    quickAccess: {
      results: { title: 'Kilpailutulokset', nameEn: 'Results' },
      rankings: { title: 'Pistesijoitus', nameEn: 'Rankings' },
      schedule: { title: 'Kilpailukalenteri', nameEn: 'Calendar' },
      videos: { title: 'Videokeskus', nameEn: 'Videos' },
      athletes: { title: 'Urheilijarekisteri', nameEn: 'Athletes' },
      documents: { title: 'Sääntödokumentit', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Tulevat'
    },

    latestNews: {
      title: 'Uusimmat Uutiset'
    },

    topAthletes: {
      title: 'Pistesijoitus'
    }
  },

  // Kielivalitsin
  languageSelector: {
    title: 'Valitse kieli',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Tunnistautuminen ja käyttöoikeudet
  auth: {
    needsLogin: 'Kirjautuminen vaaditaan',
    loginToUnlock: 'Kirjaudu avataksesi lisää toimintoja',
    comingSoon: 'Tulossa pian',
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
