// French language pack - Pack de langue française
import { TranslationKeys } from './zh';

export const fr: TranslationKeys = {
  // Commun
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    save: 'Sauvegarder',
    edit: 'Modifier',
    delete: 'Supprimer',
    search: 'Rechercher',
    filter: 'Filtrer',
    export: 'Exporter',
    import: 'Importer',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    reset: 'Réinitialiser',
    home: 'Accueil',
    language: 'Langue',
    login: 'Connexion',
    logout: 'Déconnexion',
    register: 'S\'inscrire',
    profile: 'Profil',
    viewDetails: 'Voir les détails',
    viewFullSchedule: 'Voir le calendrier complet →',
    viewFullRankings: 'Voir le classement complet →',
    readMore: 'Lire la suite'
  },

  // Navigation
  navigation: {
    title: 'Système de Points de Ski Chinois',
    titleShort: 'CSPS',

    // Sélecteur de discipline
    disciplines: 'Disciplines',
    alpine: 'Ski Alpin',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallèle',
    freestyleSlopestyle: 'Freestyle Slopestyle',

    // Navigation globale
    my: 'Mon',
    docs: 'Docs',
    about: 'À propos',

    // Navigation au niveau discipline
    points: 'Points',
    events: 'Compétitions',
    athletes: 'Athlètes',

    // Sous-menus
    submenus: {
      // Sous-menu gestion des points
      pointsCalculator: 'Calculateur',
      pointsRankings: 'Classement',
      pointsTrends: 'Tendances',

      // Sous-menu gestion des compétitions
      eventsSchedule: 'Calendrier',
      eventsRegister: 'Inscription',
      eventsResults: 'Résultats',
      eventsStats: 'Statistiques',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Sous-menu athlètes
      athletesList: 'Liste d\'Athlètes',
      athletesProfile: 'Profil d\'Athlète',
      athletesStats: 'Statistiques',

      // Sous-menu docs
      docsPointsRules: 'Règlement des Points',
      docsCompetitionRules: 'Règlement de Compétition',
      docsVenueStandards: 'Standards des Sites',
      docsGuide: 'Guide d\'Utilisation',

      // Sous-menu centre personnel
      myProfile: 'Centre Personnel',
      myPoints: 'Mes Points',
      myRegistrations: 'Mes Inscriptions',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Navigation fil d'Ariane
  breadcrumb: {
    home: 'Accueil',
    disciplines: 'Disciplines de Ski',
    alpine: 'Ski Alpin',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallèle',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Centre des Points',
    events: 'Compétitions',
    my: 'Mon Espace',
    docs: 'Base de Connaissances',
    about: 'À propos du Système'
  },

  // Page Ski Alpin
  alpine: {
    title: 'Ski Alpin',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpin',

    hero: {
      slide1: {
        title: 'Moments forts du Championnat National 2024',
        subtitle: 'Témoin des moments glorieux du ski alpin chinois'
      },
      slide2: {
        title: 'Système de Points Amélioré',
        subtitle: 'Calcul de points plus précis basé sur les règles v4.0'
      },
      slide3: {
        title: 'Inscription au Camp d\'Entraînement d\'Hiver',
        subtitle: 'Équipe d\'entraîneurs professionnels pour améliorer vos compétences'
      }
    },

    quickAccess: {
      results: { title: 'Résultats', nameEn: 'Results' },
      rankings: { title: 'Classement', nameEn: 'Rankings' },
      schedule: { title: 'Calendrier', nameEn: 'Calendar' },
      videos: { title: 'Vidéos', nameEn: 'Videos' },
      athletes: { title: 'Athlètes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'À venir'
    },

    latestNews: {
      title: 'Dernières Nouvelles'
    },

    topAthletes: {
      title: 'Classement'
    }
  },

  // Page Freestyle Slopestyle
  freestyleSlopestyle: {
    title: 'Freestyle Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freestyle SS',

    hero: {
      slide1: {
        title: 'Championnat National de Freestyle Slopestyle 2024',
        subtitle: 'Témoin de la percée extrême du ski freestyle chinois'
      },
      slide2: {
        title: 'Système de Points à 360 Niveaux',
        subtitle: 'Mécanisme de notation équitable basé sur le coefficient de difficulté'
      },
      slide3: {
        title: 'Programme de Développement de la Jeunesse Série U',
        subtitle: 'Système de culture des talents U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Résultats', nameEn: 'Results' },
      rankings: { title: 'Classement', nameEn: 'Rankings' },
      schedule: { title: 'Calendrier', nameEn: 'Calendar' },
      videos: { title: 'Vidéos', nameEn: 'Videos' },
      athletes: { title: 'Athlètes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'À venir'
    },

    latestNews: {
      title: 'Dernières Nouvelles'
    },

    topAthletes: {
      title: 'Classement'
    }
  },

  // Page Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: 'Championnat National de Snowboard Slopestyle 2024',
        subtitle: 'Témoin des moments passionnants du snowboard chinois'
      },
      slide2: {
        title: 'Système de Points à 360 Niveaux',
        subtitle: 'Règles de calcul de points basées sur les normes internationales'
      },
      slide3: {
        title: 'Programme de Formation de la Jeunesse Série U',
        subtitle: 'Système de culture à trois niveaux U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Résultats', nameEn: 'Results' },
      rankings: { title: 'Classement', nameEn: 'Rankings' },
      schedule: { title: 'Calendrier', nameEn: 'Calendar' },
      videos: { title: 'Vidéos', nameEn: 'Videos' },
      athletes: { title: 'Athlètes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'À venir'
    },

    latestNews: {
      title: 'Dernières Nouvelles'
    },

    topAthletes: {
      title: 'Classement'
    }
  },

  // Page Snowboard Parallèle
  snowboardParallel: {
    title: 'Snowboard Parallèle',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallèle',

    hero: {
      slide1: {
        title: 'Championnat National de Snowboard Parallèle 2024',
        subtitle: 'Combinaison parfaite de vitesse et de compétence'
      },
      slide2: {
        title: 'Système de Points d\'Élimination',
        subtitle: 'Calcul de points équitable basé sur les classements tête-à-tête'
      },
      slide3: {
        title: 'Programme de Développement d\'Athlètes d\'Élite',
        subtitle: 'Améliorer le niveau de course et participer aux compétitions internationales'
      }
    },

    quickAccess: {
      results: { title: 'Résultats', nameEn: 'Results' },
      rankings: { title: 'Classement', nameEn: 'Rankings' },
      schedule: { title: 'Calendrier', nameEn: 'Calendar' },
      videos: { title: 'Vidéos', nameEn: 'Videos' },
      athletes: { title: 'Athlètes', nameEn: 'Athletes' },
      documents: { title: 'Documents', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'À venir'
    },

    latestNews: {
      title: 'Dernières Nouvelles'
    },

    topAthletes: {
      title: 'Classement'
    }
  },

  // Sélecteur de langue
  languageSelector: {
    title: 'Sélectionner la langue',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Authentification et permissions
  auth: {
    needsLogin: 'Connexion requise',
    loginToUnlock: 'Se connecter pour débloquer plus de fonctions',
    comingSoon: 'Bientôt disponible',
    roles: {
      admin: 'Administrator',
      coach: 'Coach',
      athlete: 'Athlete',
      user: 'User'
    }
  }

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
