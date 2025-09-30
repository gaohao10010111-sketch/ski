// German language pack - Deutsche Sprachpaket
import { TranslationKeys } from './zh';

export const de: TranslationKeys = {
  // Allgemein
  common: {
    loading: 'Lädt...',
    error: 'Fehler',
    success: 'Erfolgreich',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    save: 'Speichern',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    search: 'Suchen',
    filter: 'Filtern',
    export: 'Exportieren',
    import: 'Importieren',
    back: 'Zurück',
    next: 'Weiter',
    previous: 'Zurück',
    submit: 'Senden',
    reset: 'Zurücksetzen',
    home: 'Startseite',
    language: 'Sprache',
    login: 'Anmelden',
    logout: 'Abmelden',
    register: 'Registrieren',
    profile: 'Profil'
  },

  // Navigation
  navigation: {
    title: 'Chinesisches Ski-Punktesystem',
    titleShort: 'CSPS',
    disciplines: 'Disziplinen',
    points: 'Punkte',
    events: 'Events',
    my: 'Mein',
    docs: 'Docs',
    about: 'Info',
    
    // Untermenüs
    submenus: {
      // Ski-Disziplinen
      alpine: 'Ski Alpin',
      snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
      snowboardParallel: 'Snowboard Parallel',
      freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
      
      // Punkte-Center
      myPoints: 'Meine Punkte',
      pointsQuery: 'Punkte-Abfrage',
      pointsCalculator: 'Punkte-Rechner',
      pointsRankings: 'Punkte-Rangliste',
      pointsTrends: 'Punkte-Trend-Analyse',
      
      // Wettkämpfe
      eventsSchedule: 'Wettkampf-Kalender',
      eventsRegister: 'Online-Anmeldung',
      eventsList: 'Wettkampf-Liste',
      eventsResults: 'Ergebnis-Abfrage',
      eventsStats: 'Datenstatistik',
      
      // Mein Bereich
      personalCenter: 'Persönliches Center',
      myRegistrations: 'Meine Anmeldungen',
      athleteProfile: 'Athletenprofil',
      resultsHistory: 'Ergebnis-Historie',
      
      // Wissensdatenbank
      pointsRules: 'Punkte-Regelwerk',
      competitionRules: 'Wettkampf-Reglement',
      venueStandards: 'Wettkampfstätten-Standards',
      fisRules: 'FIS-Regeln',
      userGuide: 'Benutzerhandbuch'
    }
  },

  // Breadcrumb-Navigation
  breadcrumb: {
    home: 'Startseite',
    disciplines: 'Ski-Disziplinen',
    alpine: 'Ski Alpin',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallel',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Punkte-Center',
    events: 'Wettkämpfe',
    my: 'Mein Bereich',
    docs: 'Wissensdatenbank',
    about: 'Über das System'
  },

  // Ski Alpin Seite
  alpine: {
    title: 'Ski Alpin Punktesystem',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0 zeitbasierte Formel',
    
    // Tags
    tags: {
      timeBasedFormula: 'v4.0 zeitbasierte Formel',
      raceLevels: 'A/B/C Wettkampf-Stufen',
      penaltyCalculation: 'Dynamische Strafpunkte-Berechnung'
    },
    
    // Schnellzugriff
    quickLinks: {
      title: 'Funktions-Schnellzugriff',
      pointsRanking: {
        title: 'Punkte-Rangliste',
        description: 'Aktuelle Saison-Punkte-Rankings anzeigen'
      },
      pointsCalculator: {
        title: 'Punkte-Rechner',
        description: 'v4.0 Formel Echtzeit-Berechnung'
      },
      competitions: {
        title: 'Wettkampf-Management',
        description: 'Zeitplan und Rennergebnisse anzeigen'
      },
      athletes: {
        title: 'Athletenprofile',
        description: 'Athleteninformationen und Ergebnis-Abfrage'
      },
      registration: {
        title: 'Online-Anmeldung',
        description: 'An Ski Alpin Wettkämpfen teilnehmen'
      },
      rules: {
        title: 'Regel-Dokumentation',
        description: 'Ski Alpin Wettkampf-Reglement'
      },
      enterFunction: 'Funktion aufrufen'
    },
    
    // Punkte-Regeln
    pointsRules: {
      title: 'Ski Alpin Punkte-Regeln (v4.0)',
      baseFormula: {
        title: 'Basis-Rennpunkte Formel',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Basispunkte | F=Disziplin-Faktor | Tx=Läufer-Zeit | To=Sieger-Zeit'
      },
      finalFormula: {
        title: 'Endpunkte-Berechnung',
        formula: 'Endpunkte = (P + Strafpunkte) × Wettkampf-Koeffizient',
        description: 'A-Stufe(1.0) | B-Stufe(0.6) | C-Stufe(0.3)'
      },
      disciplineFactors: {
        title: 'Disziplin-Faktoren-Tabelle',
        downhill: 'Abfahrt DH',
        slalom: 'Slalom SL',
        giantSlalom: 'Riesenslalom GS',
        superG: 'Super-G SG',
        combined: 'Alpine Kombination AC'
      }
    },
    
    // Statistiken
    statistics: {
      title: 'Echtzeit-Statistiken',
      registeredAthletes: 'Registrierte Athleten',
      seasonEvents: 'Saison-Wettkämpfe',
      raceCount: 'Anzahl Rennen',
      averagePoints: 'Durchschnittspunkte',
      monthlyIncrease: '12 Neuzugänge diesen Monat',
      seasonGrowth: '16% Wachstum ggü. letzter Saison',
      pandemicImpact: 'Leichter Rückgang durch Pandemie',
      levelImprovement: 'Gesamtniveau stetig verbessernd'
    }
  },

  // Freeski Slopestyle Seite
  freeskiSlopestyle: {
    title: 'Freeski Slopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Punkte-System',
      judgingSystem: 'Kampfrichter-Bewertungssystem',
      competitionFormat: 'Qualifikation/Finale Format'
    },
    
    pointsSystem: {
      title: 'Gestuftes Punkte-System',
      class1: {
        title: 'Klasse 1 Wettkämpfe',
        description: 'Nationale Meisterschaften und Top-Level Events'
      },
      class2: {
        title: 'Klasse 2 Wettkämpfe',
        description: 'Regionale wichtige Wettkämpfe'
      },
      class3: {
        title: 'Klasse 3 Wettkämpfe',
        description: 'Lokale reguläre Wettkämpfe'
      }
    }
  },

  // Snowboard Slopestyle Seite
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Punkte-System',
      judgingSystem: 'Kampfrichter-Bewertungssystem',
      competitionFormat: 'Qualifikation/Finale Format'
    }
  },

  // Snowboard Parallel Seite
  snowboardParallel: {
    title: 'Snowboard Parallel Disziplinen',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Zeitbasierte Bewertung',
      eliminationFormat: 'Ausscheidungs-Format',
      parallelEvents: 'PGS/PSL Disziplinen'
    }
  },

  // Sprachauswahl
  languageSelector: {
    title: 'Sprache auswählen',
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Authentifizierung und Berechtigungen
  auth: {
    needsLogin: 'Anmeldung erforderlich',
    loginToUnlock: 'Anmelden um mehr Funktionen freizuschalten',
    comingSoon: 'Demnächst verfügbar'
  }
};