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
    profile: 'Profil'
  },

  // Navigation
  navigation: {
    title: 'Système de Points de Ski Chinois',
    titleShort: 'CSPS',
    disciplines: 'Disciplines',
    points: 'Points',
    events: 'Compétitions',
    my: 'Mon',
    docs: 'Docs',
    about: 'À propos',
    
    // Sous-menus
    submenus: {
      // Disciplines de Ski
      alpine: 'Ski Alpin',
      snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
      snowboardParallel: 'Snowboard Parallèle',
      freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
      
      // Centre des Points
      myPoints: 'Mes Points',
      pointsQuery: 'Consultation des Points',
      pointsCalculator: 'Calculateur de Points',
      pointsRankings: 'Classement des Points',
      pointsTrends: 'Analyse des Tendances',
      
      // Compétitions
      eventsSchedule: 'Calendrier des Épreuves',
      eventsRegister: 'Inscription en Ligne',
      eventsList: 'Liste des Compétitions',
      eventsResults: 'Consultation des Résultats',
      eventsStats: 'Statistiques',
      
      // Mon Espace
      personalCenter: 'Centre Personnel',
      myRegistrations: 'Mes Inscriptions',
      athleteProfile: 'Profil d\'Athlète',
      resultsHistory: 'Historique des Résultats',
      
      // Base de Connaissances
      pointsRules: 'Règlement des Points',
      competitionRules: 'Règlement de Compétition',
      venueStandards: 'Standards des Sites',
      fisRules: 'Règles FIS',
      userGuide: 'Guide d\'Utilisation'
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
    title: 'Système de Points Ski Alpin',
    subtitle: 'Alpine Skiing Points System',
    description: 'Formule basée sur le temps v4.0',
    
    // Tags
    tags: {
      timeBasedFormula: 'Formule basée sur le temps v4.0',
      raceLevels: 'Niveaux de course A/B/C',
      penaltyCalculation: 'Calcul dynamique des pénalités'
    },
    
    // Accès rapide
    quickLinks: {
      title: 'Accès Rapide aux Fonctions',
      pointsRanking: {
        title: 'Classement des Points',
        description: 'Voir le classement des points de la saison actuelle'
      },
      pointsCalculator: {
        title: 'Calculateur de Points',
        description: 'Calcul en temps réel avec la formule v4.0'
      },
      competitions: {
        title: 'Gestion des Compétitions',
        description: 'Voir le calendrier et les résultats de course'
      },
      athletes: {
        title: 'Profils d\'Athlètes',
        description: 'Informations d\'athlètes et consultation des résultats'
      },
      registration: {
        title: 'Inscription en Ligne',
        description: 'Participer aux compétitions de ski alpin'
      },
      rules: {
        title: 'Documentation des Règles',
        description: 'Règlement de compétition de ski alpin'
      },
      enterFunction: 'Accéder à la fonction'
    },
    
    // Règles des points
    pointsRules: {
      title: 'Règles des Points Ski Alpin (v4.0)',
      baseFormula: {
        title: 'Formule des Points de Course de Base',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Points de base | F=Facteur discipline | Tx=Temps concurrent | To=Temps vainqueur'
      },
      finalFormula: {
        title: 'Calcul des Points Finaux',
        formula: 'Points Finaux = (P + Pénalité) × Coefficient de Course',
        description: 'Niveau A(1.0) | Niveau B(0.6) | Niveau C(0.3)'
      },
      disciplineFactors: {
        title: 'Tableau des Facteurs de Discipline',
        downhill: 'Descente DH',
        slalom: 'Slalom SL',
        giantSlalom: 'Slalom Géant GS',
        superG: 'Super-G SG',
        combined: 'Combiné Alpin AC'
      }
    },
    
    // Statistiques
    statistics: {
      title: 'Statistiques en Temps Réel',
      registeredAthletes: 'Athlètes Inscrits',
      seasonEvents: 'Compétitions de la Saison',
      raceCount: 'Nombre de Courses',
      averagePoints: 'Points Moyens',
      monthlyIncrease: '12 nouveaux ce mois',
      seasonGrowth: '16% de croissance par rapport à la saison dernière',
      pandemicImpact: 'Légèrement affecté par la pandémie',
      levelImprovement: 'Niveau global en amélioration constante'
    }
  },

  // Page Freeski Slopestyle
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Système de Points 240/360/120',
      judgingSystem: 'Système de Jugement',
      competitionFormat: 'Format Qualifications/Finales'
    },
    
    pointsSystem: {
      title: 'Système de Points Échelonné',
      class1: {
        title: 'Compétitions Classe 1',
        description: 'Championnats nationaux et événements de haut niveau'
      },
      class2: {
        title: 'Compétitions Classe 2',
        description: 'Compétitions régionales importantes'
      },
      class3: {
        title: 'Compétitions Classe 3',
        description: 'Compétitions locales régulières'
      }
    }
  },

  // Page Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: 'Système de Points 240/360/120',
      judgingSystem: 'Système de Jugement',
      competitionFormat: 'Format Qualifications/Finales'
    }
  },

  // Page Snowboard Parallèle
  snowboardParallel: {
    title: 'Disciplines Snowboard Parallèle',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Notation basée sur le temps',
      eliminationFormat: 'Format d\'élimination',
      parallelEvents: 'Disciplines PGS/PSL'
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
    comingSoon: 'Bientôt disponible'
  }
};