// French language pack - Pack de langue française
import type { TranslationKeys } from './zh';

export const fr: Partial<TranslationKeys> = {
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
    },
    docs: {
      competitionRules: {
        title: 'Règlement technique',
        description: 'Règles de compétition et standards d’arbitrage',
        backLabel: 'Retour à la base de connaissances'
      },
      pointsRules: {
        title: 'Règles de points',
        description: 'Documentation sur le calcul des points',
        backLabel: 'Retour à la base de connaissances'
      },
      venueStandards: {
        title: 'Normes des sites',
        description: 'Exigences d’infrastructure et de sécurité',
        backLabel: 'Retour à la base de connaissances'
      },
      fisRules: {
        title: 'Règles FIS',
        description: 'Références de la Fédération internationale de ski',
        backLabel: 'Retour à la base de connaissances'
      },
      guide: {
        title: 'Guide de la plateforme',
        description: 'Mode d’emploi et FAQ',
        backLabel: 'Retour à la base de connaissances'
      }
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
    languages: {
      zh: 'Chinois',
      en: 'Anglais',
      ja: 'Japonais',
      ko: 'Coréen',
      de: 'Allemand',
      fr: 'Français',
      it: 'Italien',
      ru: 'Russe',
      no: 'Norvégien',
      sv: 'Suédois',
      fi: 'Finnois',
      es: 'Espagnol'
    }
  },

  // Composant Bientôt disponible
  comingSoon: {
    title: 'Bientôt disponible',
    description: 'Cette fonctionnalité est en cours de développement. Revenez bientôt.',
    backLabel: 'Retour à l’accueil',
    learnMoreLabel: 'En savoir plus',
    progressLabel: 'Avancement',
    progressValue: '30%',
    eta: 'Mise en ligne estimée : 2 à 4 semaines',
    upcomingFeaturesTitle: 'Fonctionnalités à venir',
    upcomingFeatures: ['Mises à jour des données en temps réel', 'Analyses intelligentes', 'Recommandations personnalisées', 'Optimisation mobile']
  },

  // Centre de documentation
  docsPage: {
    hero: {
      title: 'Base de connaissances',
      description: 'Règlements de compétition, normes techniques et guides d’utilisation de la plateforme'
    },
    viewDocLabel: 'Voir le document',
    categories: {
      pointsRules: {
        title: 'Règles de points',
        description: 'Guide détaillé du calcul des points en Chine',
        topics: ['Formules de points', 'Coefficients de catégorie', 'Mécanisme de pénalité', 'Tableaux de points BL/NL']
      },
      competitionRules: {
        title: 'Règlement technique',
        description: 'Règles de compétition et standards d’arbitrage',
        topics: ['Déroulement de la compétition', 'Règles d’arbitrage', 'Systèmes de chronométrage', 'Procédure d’appel']
      },
      venueStandards: {
        title: 'Normes des sites',
        description: 'Exigences d’infrastructure et de sécurité',
        topics: ['Normes des sites', 'Exigences d’équipement', 'Directives de sécurité', 'Processus de certification']
      },
      fisRules: {
        title: 'Règles FIS',
        description: 'Référentiel de la Fédération internationale de ski',
        topics: ['Règles de points FIS', 'Règlement ICR', 'Normes internationales', 'Références bilingues']
      },
      guide: {
        title: 'Guide de la plateforme',
        description: 'Mode d’emploi des fonctionnalités et FAQ',
        topics: ['Processus d’inscription', 'Guide d’engagement', 'Consultation des points', 'FAQ']
      }
    },
    popular: {
      title: 'Documents populaires',
      viewsLabel: 'vues',
      items: {
        alpineRulesV4: { title: 'Règles de points du ski alpin chinois v4.0', category: 'Règles de points' },
        seasonGrading: { title: 'Normes de classement 2024-2025', category: 'Règlement technique' },
        youthSeries: { title: 'Plan de gestion des compétitions U-Series', category: 'Règlement technique' },
        fisPointsGuide: { title: 'Guide de calcul des points FIS', category: 'Règles FIS' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Bibliothèque des règles du ski alpin chinois',
      description: 'Consultez le système de règles simplifié couvrant le calcul des points, la gestion des compétitions et le développement des jeunes.',
      highlights: [
        { icon: 'award', text: 'Standard officiel' },
        { icon: 'target', text: 'Calcul simplifié' },
        { icon: 'users', text: 'Système jeunesse renforcé' }
      ]
    },
    headings: {
      ruleModules: 'Modules de règles'
    },
    toc: {
      toggleTitle: 'Afficher/masquer le sommaire',
      title: 'Plan de la page',
      download: 'Télécharger la version PDF',
      items: {
        coreFormula: 'Formule principale',
        ruleModules: 'Modules de règles',
        coreFeatures: 'Points clés',
        quickLinks: 'Liens rapides',
        upgradeInfo: 'Informations de mise à jour',
        importantNotice: 'Informations importantes'
      }
    },
    formula: {
      title: 'Formule principale',
      expression: 'Points finaux = (Points de base + Points de pénalité) × Coefficient de l’épreuve',
      description: 'Par rapport à la version 2.0, les facteurs de qualité, de participation et les bonus supplémentaires ont été supprimés. La méthode en trois étapes améliore l’efficacité et la transparence.',
      copyButton: 'Copier la formule',
      copySuccess: 'Copié dans le presse-papiers !',
      calculatorButton: 'Ouvrir le calculateur'
    },
    ruleModules: {
      points: {
        title: 'Règles de points chinoises',
        description: 'Système de calcul simplifié basé sur une formule en trois étapes.',
        features: ['Méthode de calcul en trois étapes', 'Structure d’épreuves A/B/C', 'Catégories jeunesse étendues', 'Transparence renforcée'],
        linkLabel: 'Voir les détails'
      },
      competition: {
        title: 'Guide des compétitions',
        description: 'Comprendre les règles actualisées et le système jeunesse élargi, avec un guide pratique de participation.',
        features: ['Présentation des épreuves', 'Système de catégories d’âge', 'Parcours de participation', 'Normes de sécurité et techniques'],
        linkLabel: 'Voir les détails'
      },
      documents: {
        title: 'Documentation sur les points',
        description: 'Accédez à l’ensemble des documents et outils relatifs au système de points simplifié.',
        features: ['Explications détaillées', 'Description des composantes de la formule', 'Calculateur en ligne', 'Téléchargements PDF'],
        linkLabel: 'Voir les détails'
      }
    },
    v4Features: {
      title: 'Points clés',
      items: {
        simplified: {
          title: 'Calcul simplifié',
          description: 'Suppression des facteurs de qualité, de participation et des bonus supplémentaires.'
        },
        tiers: {
          title: 'Système à trois niveaux',
          description: 'Catégories A (1,0), B (0,6) et C (0,3) pour une gestion claire.'
        },
        youth: {
          title: 'Jeunesse renforcée',
          description: 'Soutien ciblé pour les catégories U15 à U18.'
        },
        efficiency: {
          title: 'Efficace et transparent',
          description: 'Méthode en trois étapes améliorant vitesse et lisibilité.'
        }
      }
    },
    quickLinks: {
      title: 'Liens rapides',
      items: {
        calculator: { label: 'Calculateur de points' },
        rankings: { label: 'Classements de points' },
        data: { label: 'Gestion des données d’épreuves' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Informations de mise à jour',
      improvements: {
        title: 'Principales améliorations',
        items: ['Formule simplifiée sans facteurs complexes', 'Structure d’épreuves à trois niveaux', 'Extension des catégories jeunesse', 'Transparence et efficacité accrues']
      },
      advantages: {
        title: 'Atouts techniques',
        items: ['Calcul en trois étapes facile à appliquer', 'Gestion standardisée alignée sur les standards internationaux', 'Outils numériques et support en ligne complets', 'Environnement de compétition ouvert et équitable']
      }
    },
    importantNotice: {
      title: 'Informations importantes',
      version: {
        title: 'Version des règles',
        items: ['Version actuelle : dernière édition', 'Saison d’application : 2024-2025', 'Portée : compétitions nationales en Chine', 'Cycle de mise à jour : ajustements selon les besoins']
      },
      usage: {
        title: 'Recommandations d’utilisation',
        items: ['Commencer par l’aperçu des règles de points', 'Vérifier les calculs avec l’outil en ligne', 'Suivre de près les politiques jeunesse', 'Rester informé des mises à jour']
      },
      support: 'Ce cadre réglementaire combine l’expérience internationale et les besoins chinois afin d’offrir un soutien équitable et efficace au développement du ski alpin. Pour toute question ou suggestion, contactez-nous via les canaux indiqués.'
    }
  },

  // Pages (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Répertoire des athlètes',
          description: 'Consulter tous les profils d’athlètes enregistrés',
          backLabel: 'Retour au ski alpin'
        },
        rankings: {
          title: 'Classement des athlètes',
          description: 'Classement complet basé sur les points et les résultats',
          backLabel: 'Retour au ski alpin'
        },
        stats: {
          title: 'Statistiques des athlètes',
          description: 'Statistiques détaillées et analyses visuelles des athlètes',
          backLabel: 'Retour au ski alpin'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Règlement de compétition',
          description: 'Normes techniques de compétition détaillées',
          backLabel: 'Retour au ski alpin'
        },
        'points-rules': {
          title: 'Règles de points',
          description: 'Découvrir les règles de points v4.0 du ski alpin',
          backLabel: 'Retour au ski alpin'
        },
        'venue-standards': {
          title: 'Normes des sites',
          description: 'Normes des sites et exigences de certification pour le ski alpin',
          backLabel: 'Retour au ski alpin'
        }
      },
      events: {
        register: {
          title: 'Inscription en ligne',
          description: 'Système d’inscription simplifié disponible prochainement',
          backLabel: 'Retour au ski alpin'
        },
        results: {
          title: 'Résultats',
          description: 'Consulter les résultats et mises à jour des points en temps réel',
          backLabel: 'Retour au ski alpin'
        },
        schedule: {
          title: 'Calendrier des épreuves',
          description: 'Voir les prochaines compétitions de ski alpin',
          backLabel: 'Retour au ski alpin'
        },
        stats: {
          title: 'Statistiques des épreuves',
          description: 'Suite complète d’analyses de données pour les événements',
          backLabel: 'Retour au ski alpin'
        }
      },
      points: {
        calculator: {
          title: 'Calculateur de points',
          description: 'Calculateur de points v4.0 précis disponible prochainement',
          backLabel: 'Retour au ski alpin'
        },
        rankings: {
          title: 'Classement par points',
          description: 'Classement des athlètes en temps réel disponible prochainement',
          backLabel: 'Retour au ski alpin'
        },
        trends: {
          title: 'Tendances des points',
          description: 'Outils d’analyse des tendances de points disponibles prochainement',
          backLabel: 'Retour au ski alpin'
        }
      }
    },
    rules: {
      competition: {
        title: 'Guide des compétitions',
        description: 'Cette page est en cours de préparation. Revenez prochainement.',
        backLabel: 'Retour aux règles'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Répertoire des athlètes',
          description: 'Consulter tous les profils d’athlètes enregistrés',
          backLabel: 'Retour au freestyle slopestyle'
        },
        rankings: {
          title: 'Classement des athlètes',
          description: 'Classement complet basé sur les points et les résultats',
          backLabel: 'Retour au freestyle slopestyle'
        },
        stats: {
          title: 'Statistiques des athlètes',
          description: 'Statistiques détaillées et analyses visuelles des athlètes',
          backLabel: 'Retour au freestyle slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Règlement de compétition',
          description: 'Normes techniques de compétition détaillées',
          backLabel: 'Retour au freestyle slopestyle'
        },
        'points-rules': {
          title: 'Règles de points',
          description: 'Consulter les règles détaillées de calcul des points',
          backLabel: 'Retour au freestyle slopestyle'
        },
        'venue-standards': {
          title: 'Normes des sites',
          description: 'Exigences techniques et de certification des sites',
          backLabel: 'Retour au freestyle slopestyle'
        }
      },
      events: {
        register: {
          title: 'Inscription en ligne',
          description: 'Système d’inscription simplifié disponible prochainement',
          backLabel: 'Retour au freestyle slopestyle'
        },
        results: {
          title: 'Résultats',
          description: 'Consulter les résultats et mises à jour des points en temps réel',
          backLabel: 'Retour au freestyle slopestyle'
        },
        schedule: {
          title: 'Calendrier des épreuves',
          description: 'Voir le calendrier des prochaines compétitions',
          backLabel: 'Retour au freestyle slopestyle'
        },
        stats: {
          title: 'Statistiques des épreuves',
          description: 'Suite complète d’analyses de données pour les événements',
          backLabel: 'Retour au freestyle slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Calculateur de points',
          description: 'Calculateur de points précis disponible prochainement',
          backLabel: 'Retour au freestyle slopestyle'
        },
        rankings: {
          title: 'Classement par points',
          description: 'Classement des athlètes en temps réel disponible prochainement',
          backLabel: 'Retour au freestyle slopestyle'
        },
        trends: {
          title: 'Tendances des points',
          description: 'Outils d’analyse des tendances disponibles prochainement',
          backLabel: 'Retour au freestyle slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Répertoire des athlètes',
          description: 'Consulter tous les profils d’athlètes enregistrés',
          backLabel: 'Retour au snowboard parallèle'
        },
        rankings: {
          title: 'Classement des athlètes',
          description: 'Classement complet basé sur les points et les résultats',
          backLabel: 'Retour au snowboard parallèle'
        },
        stats: {
          title: 'Statistiques des athlètes',
          description: 'Statistiques détaillées et analyses visuelles des athlètes',
          backLabel: 'Retour au snowboard parallèle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Règlement de compétition',
          description: 'Normes techniques de compétition détaillées',
          backLabel: 'Retour au snowboard parallèle'
        },
        'points-rules': {
          title: 'Règles de points',
          description: 'Consulter les règles détaillées de calcul des points',
          backLabel: 'Retour au snowboard parallèle'
        },
        'venue-standards': {
          title: 'Normes des sites',
          description: 'Exigences techniques et de certification des sites',
          backLabel: 'Retour au snowboard parallèle'
        }
      },
      events: {
        register: {
          title: 'Inscription en ligne',
          description: 'Système d’inscription simplifié disponible prochainement',
          backLabel: 'Retour au snowboard parallèle'
        },
        results: {
          title: 'Résultats',
          description: 'Consulter les résultats et mises à jour des points en temps réel',
          backLabel: 'Retour au snowboard parallèle'
        },
        schedule: {
          title: 'Calendrier des épreuves',
          description: 'Voir le calendrier des prochaines compétitions',
          backLabel: 'Retour au snowboard parallèle'
        },
        stats: {
          title: 'Statistiques des épreuves',
          description: 'Suite complète d’analyses de données pour les événements',
          backLabel: 'Retour au snowboard parallèle'
        }
      },
      points: {
        calculator: {
          title: 'Calculateur de points',
          description: 'Calculateur de points précis disponible prochainement',
          backLabel: 'Retour au snowboard parallèle'
        },
        rankings: {
          title: 'Classement par points',
          description: 'Classement des athlètes en temps réel disponible prochainement',
          backLabel: 'Retour au snowboard parallèle'
        },
        trends: {
          title: 'Tendances des points',
          description: 'Outils d’analyse des tendances disponibles prochainement',
          backLabel: 'Retour au snowboard parallèle'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Répertoire des athlètes',
          description: 'Consulter tous les profils d’athlètes enregistrés',
          backLabel: 'Retour au snowboard slopestyle'
        },
        rankings: {
          title: 'Classement des athlètes',
          description: 'Classement complet basé sur les points et les résultats',
          backLabel: 'Retour au snowboard slopestyle'
        },
        stats: {
          title: 'Statistiques des athlètes',
          description: 'Statistiques détaillées et analyses visuelles des athlètes',
          backLabel: 'Retour au snowboard slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Règlement de compétition',
          description: 'Normes techniques de compétition détaillées',
          backLabel: 'Retour au snowboard slopestyle'
        },
        'points-rules': {
          title: 'Règles de points',
          description: 'Consulter les règles détaillées de calcul des points',
          backLabel: 'Retour au snowboard slopestyle'
        },
        'venue-standards': {
          title: 'Normes des sites',
          description: 'Exigences techniques et de certification des sites',
          backLabel: 'Retour au snowboard slopestyle'
        }
      },
      events: {
        register: {
          title: 'Inscription en ligne',
          description: 'Système d’inscription simplifié disponible prochainement',
          backLabel: 'Retour au snowboard slopestyle'
        },
        results: {
          title: 'Résultats',
          description: 'Consulter les résultats et mises à jour des points en temps réel',
          backLabel: 'Retour au snowboard slopestyle'
        },
        schedule: {
          title: 'Calendrier des épreuves',
          description: 'Voir le calendrier des prochaines compétitions',
          backLabel: 'Retour au snowboard slopestyle'
        },
        stats: {
          title: 'Statistiques des épreuves',
          description: 'Suite complète d’analyses de données pour les événements',
          backLabel: 'Retour au snowboard slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Calculateur de points',
          description: 'Calculateur de points précis disponible prochainement',
          backLabel: 'Retour au snowboard slopestyle'
        },
        rankings: {
          title: 'Classement par points',
          description: 'Classement des athlètes en temps réel disponible prochainement',
          backLabel: 'Retour au snowboard slopestyle'
        },
        trends: {
          title: 'Tendances des points',
          description: 'Outils d’analyse des tendances disponibles prochainement',
          backLabel: 'Retour au snowboard slopestyle'
        }
      }
    }
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
