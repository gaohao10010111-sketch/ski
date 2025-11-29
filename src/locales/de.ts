// German language pack - Deutsche Sprachpaket
import type { PartialTranslationKeys } from './zh';

export const de: PartialTranslationKeys = {
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
    profile: 'Profil',
    viewDetails: 'Details ansehen',
    viewFullSchedule: 'Vollständigen Zeitplan ansehen →',
    viewFullRankings: 'Vollständige Rangliste ansehen →',
    readMore: 'Weiterlesen'
  },

  // Navigation
  navigation: {
    title: 'Chinesisches Ski-Punktesystem',
    titleShort: 'CSPS',

    // Disziplin-Umschalter
    disciplines: 'Disziplinen',
    alpine: 'Ski Alpin',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallel',
    freestyleSlopestyle: 'Freestyle Slopestyle',

    // Globale Navigation
    my: 'Mein',
    docs: 'Docs',
    about: 'Info',

    // Disziplin-Level Navigation
    points: 'Punkte',
    events: 'Wettkämpfe',
    athletes: 'Athleten',

    // Untermenüs
    submenus: {
      // Punkte-Management Untermenü
      pointsCalculator: 'Rechner',
      pointsRankings: 'Rangliste',
      pointsTrends: 'Trends',

      // Wettkampf-Management Untermenü
      eventsSchedule: 'Zeitplan',
      eventsRegister: 'Anmeldung',
      eventsResults: 'Ergebnisse',
      eventsStats: 'Statistiken',
      resultsLive: 'Live-Ergebnisse',
      resultsImport: 'Ergebnisse importieren',
      resultsAnnouncement: 'Ergebnisbekanntgabe',

      // Athleten Untermenü
      athletesList: 'Athletenliste',
      athletesProfile: 'Athletenprofil',
      athletesStats: 'Statistiken',

      // Docs Untermenü
      docsPointsRules: 'Punkte-Regelwerk',
      docsCompetitionRules: 'Wettkampf-Reglement',
      docsVenueStandards: 'Wettkampfstätten-Standards',
      docsGuide: 'Benutzerhandbuch',

      // Persönlicher Bereich Untermenü
      myProfile: 'Persönliches Center',
      myPoints: 'Meine Punkte',
      myRegistrations: 'Meine Anmeldungen',
      myAthlete: 'Athletenprofil',
      myHistory: 'Ergebnishistorie',

      // Weitere Funktionen
      moreFeatures: 'Mehr'
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
    title: 'Ski Alpin',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpin',

    hero: {
      slide1: {
        title: '2024 Nationale Meisterschaft Highlights',
        subtitle: 'Erleben Sie die glorreichen Momente des chinesischen Skisports'
      },
      slide2: {
        title: 'Punktesystem Upgrade',
        subtitle: 'Präzisere Punkteberechnung basierend auf v4.0 Regeln'
      },
      slide3: {
        title: 'Winter-Trainingscamp Anmeldung',
        subtitle: 'Professionelles Trainerteam zur Verbesserung Ihrer Fähigkeiten'
      }
    },

    subDisciplines: [],

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend',
      events: []
    },

    latestNews: {
      title: 'Aktuelle Nachrichten',
      items: []
    },

    topAthletes: {
      title: 'Rangliste',
      athletes: []
    }
  },

  // Freestyle Slopestyle Seite
  freestyleSlopestyle: {
    title: 'Freestyle Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freestyle SS',

    hero: {
      slide1: {
        title: '2024 Nationale Freestyle Slopestyle Meisterschaft',
        subtitle: 'Erleben Sie den extremen Durchbruch des chinesischen Freestyle-Skisports'
      },
      slide2: {
        title: '360 Punkte Stufensystem',
        subtitle: 'Fairer Bewertungsmechanismus basierend auf Schwierigkeitskoeffizient'
      },
      slide3: {
        title: 'U-Serie Jugendentwicklungsprogramm',
        subtitle: 'U12/U15/U18 Talentfördersystem'
      }
    },

    subDisciplines: [],

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend',
      events: []
    },

    latestNews: {
      title: 'Aktuelle Nachrichten',
      items: []
    },

    topAthletes: {
      title: 'Rangliste',
      athletes: []
    }
  },

  // Snowboard Slopestyle Seite
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Nationale Snowboard Slopestyle Meisterschaft',
        subtitle: 'Erleben Sie die aufregenden Momente des chinesischen Snowboardings'
      },
      slide2: {
        title: '360 Punkte Stufensystem',
        subtitle: 'Punkteberechnungsregeln basierend auf internationalen Standards'
      },
      slide3: {
        title: 'U-Serie Jugendtrainingsprogramm',
        subtitle: 'U12/U15/U18 dreistufiges Kultivierungssystem'
      }
    },

    subDisciplines: [],

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend',
      events: []
    },

    latestNews: {
      title: 'Aktuelle Nachrichten',
      items: []
    },

    topAthletes: {
      title: 'Rangliste',
      athletes: []
    }
  },

  // Snowboard Parallel Seite
  snowboardParallel: {
    title: 'Snowboard Parallel',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallel',

    hero: {
      slide1: {
        title: '2024 Nationale Snowboard Parallel Meisterschaft',
        subtitle: 'Perfekte Kombination aus Geschwindigkeit und Können'
      },
      slide2: {
        title: 'Ausscheidungs-Punktesystem',
        subtitle: 'Faire Punkteberechnung basierend auf Kopf-an-Kopf-Rankings'
      },
      slide3: {
        title: 'Elite-Athleten-Entwicklungsprogramm',
        subtitle: 'Verbesserung des Rennniveaus und Teilnahme an internationalen Wettkämpfen'
      }
    },

    subDisciplines: [],

    quickAccess: {
      results: { title: 'Ergebnisse', nameEn: 'Results' },
      rankings: { title: 'Rangliste', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videos', nameEn: 'Videos' },
      athletes: { title: 'Athleten', nameEn: 'Athletes' },
      documents: { title: 'Dokumente', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Bevorstehend',
      events: []
    },

    latestNews: {
      title: 'Aktuelle Nachrichten',
      items: []
    },

    topAthletes: {
      title: 'Rangliste',
      athletes: []
    }
  },

  // Sprachauswahl
  languageSelector: {
    title: 'Sprache auswählen',
    languages: {
      zh: 'Chinesisch',
      en: 'Englisch',
      ja: 'Japanisch',
      ko: 'Koreanisch',
      de: 'Deutsch',
      fr: 'Französisch',
      it: 'Italienisch',
      ru: 'Russisch',
      no: 'Norwegisch',
      sv: 'Schwedisch',
      fi: 'Finnisch',
      es: 'Spanisch'
    }
  },

  // Demnächst-Komponente
  comingSoon: {
    title: 'Demnächst verfügbar',
    description: 'Diese Funktion befindet sich derzeit in Entwicklung. Bitte schau bald wieder vorbei.',
    backLabel: 'Zur Startseite',
    learnMoreLabel: 'Mehr erfahren',
    progressLabel: 'Entwicklungsfortschritt',
    progressValue: '30%',
    eta: 'Geplanter Start: 2–4 Wochen',
    upcomingFeaturesTitle: 'Bevorstehende Funktionen',
    upcomingFeatures: ['Echtzeit-Datenaktualisierung', 'Intelligente Analysen', 'Personalisierte Empfehlungen', 'Mobile Optimierung']
  },

  // Dokumentationszentrum
  docsPage: {
    hero: {
      title: 'Wissensdatenbank',
      description: 'Wettkampfregeln, technische Standards und Plattformhandbuch'
    },
    viewDocLabel: 'Dokument ansehen',
    categories: {
      pointsRules: {
        title: 'Punkterichtlinien',
        description: 'Ausführliche Erläuterungen zur chinesischen Ski-Punkteberechnung',
        topics: ['Punkteformeln', 'Veranstaltungsfaktoren', 'Strafpunkt-Mechanismus', 'BL/NL-Punktetabellen']
      },
      competitionRules: {
        title: 'Wettkampftechnische Regeln',
        description: 'Technische Wettkampfregeln und Schiedsrichterstandards',
        topics: ['Ablauf des Wettkampfs', 'Schiedsrichterregeln', 'Zeitmesssysteme', 'Einspruchsverfahren']
      },
      venueStandards: {
        title: 'Stättenstandards',
        description: 'Anforderungen an Anlagen und Sicherheit',
        topics: ['Stättenstandards', 'Anforderungen an Einrichtungen', 'Sicherheitsrichtlinien', 'Zertifizierungsprozess']
      },
      fisRules: {
        title: 'FIS-Regelwerk',
        description: 'Regeln des Internationalen Skiverbandes',
        topics: ['FIS-Punkterichtlinien', 'ICR-Wettkampfregeln', 'Internationale Standards', 'Zweisprachige Referenzen']
      },
      guide: {
        title: 'Plattformhandbuch',
        description: 'Funktionsanleitungen und häufige Fragen',
        topics: ['Registrierungsablauf', 'Anmeldeleitfaden', 'Punkteeinsicht', 'FAQ']
      }
    },
    popular: {
      title: 'Beliebte Dokumente',
      viewsLabel: 'Aufrufe',
      items: {
        alpineRulesV4: { title: 'China Alpin-Punkteregelwerk v4.0', category: 'Punkterichtlinien' },
        seasonGrading: { title: 'Wettkampfeinstufung 2024-2025', category: 'Wettkampfregeln' },
        youthSeries: { title: 'U-Serie Jugend-Wettkampfkonzept', category: 'Wettkampfregeln' },
        fisPointsGuide: { title: 'FIS Punkterechner Leitfaden', category: 'FIS-Regeln' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'China Alpine Ski Regelbibliothek',
      description: 'Entdecke das vereinfachte Regelwerk zur Punkteberechnung, zum Wettkampfmanagement und zur Nachwuchsförderung.',
      highlights: [
        { icon: 'award', text: 'Offizieller Standard' },
        { icon: 'target', text: 'Vereinfachte Berechnung' },
        { icon: 'users', text: 'Erweitertes Nachwuchssystem' }
      ]
    },
    headings: {
      ruleModules: 'Regelmodule'
    },
    toc: {
      toggleTitle: 'Inhaltsverzeichnis ein-/ausblenden',
      title: 'Seitenübersicht',
      download: 'PDF-Version herunterladen',
      items: {
        coreFormula: 'Kernformel',
        ruleModules: 'Regelmodule',
        coreFeatures: 'Wesentliche Merkmale',
        quickLinks: 'Schnellzugriffe',
        upgradeInfo: 'Upgrade-Hinweise',
        importantNotice: 'Wichtige Hinweise'
      }
    },
    formula: {
      title: 'Kernformel',
      expression: 'Endpunkte = (Grundpunkte + Strafpunkte) × Wettkampffaktor',
      description: 'Im Vergleich zu v2.0 wurden komplexe Qualitäts-, Teilnehmer- und Zusatzfaktoren entfernt. Die dreistufige Methode steigert Effizienz und Transparenz.',
      copyButton: 'Formel kopieren',
      copySuccess: 'In die Zwischenablage kopiert!',
      calculatorButton: 'Rechner öffnen'
    },
    ruleModules: {
      points: {
        title: 'Punkterichtlinien China',
        description: 'Vereinfachtes Punktesystem auf Basis einer dreistufigen Berechnung.',
        features: ['Dreistufige Berechnungsformel', 'Drei Wettbewerbsstufen (A/B/C)', 'Erweiterte Nachwuchskategorien', 'Mehr Transparenz'],
        linkLabel: 'Details ansehen'
      },
      competition: {
        title: 'Wettkampfleitfaden',
        description: 'Aktuelle Wettkampfregeln und Nachwuchssystem – praxisnah erklärt.',
        features: ['Überblick über Disziplinen', 'Altersklassensystem', 'Teilnahme- und Ablaufplan', 'Sicherheits- und Technikstandards'],
        linkLabel: 'Details ansehen'
      },
      documents: {
        title: 'Punkte-Dokumentation',
        description: 'Alle Unterlagen und Tools zum vereinfachten Punktesystem auf einen Blick.',
        features: ['Regelerläuterungen', 'Beschreibung der Formelelemente', 'Online-Punkterechner', 'PDF-Downloads'],
        linkLabel: 'Details ansehen'
      }
    },
    v4Features: {
      title: 'Wesentliche Merkmale',
      items: {
        simplified: {
          title: 'Vereinfachte Berechnung',
          description: 'Entfernt komplexe Qualitäts-, Teilnehmer- und Zusatzfaktoren.'
        },
        tiers: {
          title: 'Dreistufiges System',
          description: 'Klassen A (1.0), B (0.6) und C (0.3) sorgen für klare Struktur.'
        },
        youth: {
          title: 'Erweiterter Nachwuchs',
          description: 'Gezielte Förderung der Altersklassen U15 bis U18.'
        },
        efficiency: {
          title: 'Effizient & Transparent',
          description: 'Dreistufiger Ablauf steigert Geschwindigkeit und Nachvollziehbarkeit.'
        }
      }
    },
    quickLinks: {
      title: 'Schnellzugriffe',
      items: {
        calculator: { label: 'Punkterechner' },
        rankings: { label: 'Punktetabellen' },
        data: { label: 'Wettkampfdaten-Verwaltung' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Upgrade-Hinweise',
      improvements: {
        title: 'Wesentliche Verbesserungen',
        items: ['Vereinfachte Formel ohne komplexe Faktoren', 'Drei-Stufen-System für klare Struktur', 'Erweiterte Nachwuchsförderung', 'Mehr Transparenz und Effizienz']
      },
      advantages: {
        title: 'Technische Vorteile',
        items: ['Dreischritt-Berechnung, leicht verständlich', 'Standardisiertes Management nach internationalen Maßstäben', 'Digitale Tools und Online-Support', 'Offenes und faires Wettbewerbsumfeld']
      }
    },
    importantNotice: {
      title: 'Wichtige Hinweise',
      version: {
        title: 'Regelversion',
        items: ['Aktuelle Version: neueste Ausgabe', 'Gültig für Saison 2024–2025', 'Geltungsbereich: nationale Wettbewerbe in China', 'Update-Zyklus: nach Bedarf']
      },
      usage: {
        title: 'Anwendungstipps',
        items: ['Mit den Punkterichtlinien beginnen', 'Online-Rechner zur Kontrolle nutzen', 'Jugendprogramme und Richtlinien im Blick behalten', 'Regelupdates regelmäßig prüfen']
      },
      support: 'Das Regelwerk kombiniert internationale Erfahrungen mit chinesischen Anforderungen, um faire und effiziente Wettkämpfe zu ermöglichen. Bei Fragen oder Anregungen kontaktiere uns über die angegebenen Kanäle.'
    }
  },

  // Seiteninhalte (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Athletenverzeichnis',
          description: 'Alle registrierten Athletenprofile ansehen',
          backLabel: 'Zurück zu Alpin'
        },
        rankings: {
          title: 'Athletenrangliste',
          description: 'Umfassende Athletenrangliste basierend auf Punkten und Ergebnissen',
          backLabel: 'Zurück zu Alpin'
        },
        stats: {
          title: 'Athletenstatistiken',
          description: 'Detaillierte Athletenstatistiken und Visualisierungen',
          backLabel: 'Zurück zu Alpin'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Wettkampfregeln',
          description: 'Ausführliche technische Wettkampfnormen',
          backLabel: 'Zurück zu Alpin'
        },
        'points-rules': {
          title: 'Punkterichtlinien',
          description: 'Punkteregelwerk v4.0 für Alpin erkunden',
          backLabel: 'Zurück zu Alpin'
        },
        'venue-standards': {
          title: 'Stättenstandards',
          description: 'Pistenstandards und Zertifizierungsanforderungen für Alpin',
          backLabel: 'Zurück zu Alpin'
        }
      },
      events: {
        register: {
          title: 'Online-Anmeldung',
          description: 'Optimiertes Meldesystem folgt in Kürze',
          backLabel: 'Zurück zu Alpin'
        },
        results: {
          title: 'Ergebnisse',
          description: 'Rennresultate und Punkteaktualisierungen in Echtzeit einsehen',
          backLabel: 'Zurück zu Alpin'
        },
        schedule: {
          title: 'Wettkampfkalender',
          description: 'Bevorstehende Alpin-Wettkämpfe ansehen',
          backLabel: 'Zurück zu Alpin'
        },
        stats: {
          title: 'Wettkampfstatistiken',
          description: 'Umfassendes Analysepaket für Veranstaltungsdaten',
          backLabel: 'Zurück zu Alpin'
        }
      },
      points: {
        calculator: {
          title: 'Punkterechner',
          description: 'Präziser v4.0 Punkte-Rechner folgt in Kürze',
          backLabel: 'Zurück zu Alpin'
        },
        rankings: {
          title: 'Punkterangliste',
          description: 'Live-Rangliste der Athleten folgt in Kürze',
          backLabel: 'Zurück zu Alpin'
        },
        trends: {
          title: 'Punktetrends',
          description: 'Visualisierte Punktrend-Analysen folgen in Kürze',
          backLabel: 'Zurück zu Alpin'
        }
      }
    },
    rules: {
      competition: {
        title: 'Wettkampfleitfaden',
        description: 'Diese Seite wird derzeit erstellt. Bitte schau später noch einmal vorbei.',
        backLabel: 'Zurück zur Regelübersicht'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Athletenverzeichnis',
          description: 'Alle registrierten Athletenprofile ansehen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        rankings: {
          title: 'Athletenrangliste',
          description: 'Umfassende Athletenrangliste basierend auf Punkten und Ergebnissen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        stats: {
          title: 'Athletenstatistiken',
          description: 'Detaillierte Athletenstatistiken und Visualisierungen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Wettkampfregeln',
          description: 'Ausführliche technische Wettkampfnormen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        'points-rules': {
          title: 'Punkterichtlinien',
          description: 'Details zu den Punktberechnungsregeln einsehen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        'venue-standards': {
          title: 'Stättenstandards',
          description: 'Technische Anforderungen und Zertifizierungen der Austragungsorte',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        }
      },
      events: {
        register: {
          title: 'Online-Anmeldung',
          description: 'Optimiertes Meldesystem folgt in Kürze',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        results: {
          title: 'Ergebnisse',
          description: 'Rennresultate und Punkteaktualisierungen in Echtzeit einsehen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        schedule: {
          title: 'Wettkampfkalender',
          description: 'Bevorstehende Wettkämpfe ansehen',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        stats: {
          title: 'Wettkampfstatistiken',
          description: 'Umfassendes Analysepaket für Veranstaltungsdaten',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Punkterechner',
          description: 'Präziser Punkterechner folgt in Kürze',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        rankings: {
          title: 'Punkterangliste',
          description: 'Live-Rangliste der Athleten folgt in Kürze',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        },
        trends: {
          title: 'Punktetrends',
          description: 'Analysewerkzeuge für Punktrends folgen in Kürze',
          backLabel: 'Zurück zu Freestyle Slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Athletenverzeichnis',
          description: 'Alle registrierten Athletenprofile ansehen',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        rankings: {
          title: 'Athletenrangliste',
          description: 'Umfassende Athletenrangliste basierend auf Punkten und Ergebnissen',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        stats: {
          title: 'Athletenstatistiken',
          description: 'Detaillierte Athletenstatistiken und Visualisierungen',
          backLabel: 'Zurück zu Snowboard Parallel'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Wettkampfregeln',
          description: 'Ausführliche technische Wettkampfnormen',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        'points-rules': {
          title: 'Punkterichtlinien',
          description: 'Details zu den Punktberechnungsregeln einsehen',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        'venue-standards': {
          title: 'Stättenstandards',
          description: 'Technische Anforderungen und Zertifizierungen der Austragungsorte',
          backLabel: 'Zurück zu Snowboard Parallel'
        }
      },
      events: {
        register: {
          title: 'Online-Anmeldung',
          description: 'Optimiertes Meldesystem folgt in Kürze',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        results: {
          title: 'Ergebnisse',
          description: 'Rennresultate und Punkteaktualisierungen in Echtzeit einsehen',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        schedule: {
          title: 'Wettkampfkalender',
          description: 'Bevorstehende Wettkämpfe ansehen',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        stats: {
          title: 'Wettkampfstatistiken',
          description: 'Umfassendes Analysepaket für Veranstaltungsdaten',
          backLabel: 'Zurück zu Snowboard Parallel'
        }
      },
      points: {
        calculator: {
          title: 'Punkterechner',
          description: 'Präziser Punkterechner folgt in Kürze',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        rankings: {
          title: 'Punkterangliste',
          description: 'Live-Rangliste der Athleten folgt in Kürze',
          backLabel: 'Zurück zu Snowboard Parallel'
        },
        trends: {
          title: 'Punktetrends',
          description: 'Analysewerkzeuge für Punktrends folgen in Kürze',
          backLabel: 'Zurück zu Snowboard Parallel'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Athletenverzeichnis',
          description: 'Alle registrierten Athletenprofile ansehen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        rankings: {
          title: 'Athletenrangliste',
          description: 'Umfassende Athletenrangliste basierend auf Punkten und Ergebnissen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        stats: {
          title: 'Athletenstatistiken',
          description: 'Detaillierte Athletenstatistiken und Visualisierungen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Wettkampfregeln',
          description: 'Ausführliche technische Wettkampfnormen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        'points-rules': {
          title: 'Punkterichtlinien',
          description: 'Details zu den Punktberechnungsregeln einsehen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        'venue-standards': {
          title: 'Stättenstandards',
          description: 'Technische Anforderungen und Zertifizierungen der Austragungsorte',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        }
      },
      events: {
        register: {
          title: 'Online-Anmeldung',
          description: 'Optimiertes Meldesystem folgt in Kürze',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        results: {
          title: 'Ergebnisse',
          description: 'Rennresultate und Punkteaktualisierungen in Echtzeit einsehen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        schedule: {
          title: 'Wettkampfkalender',
          description: 'Bevorstehende Wettkämpfe ansehen',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        stats: {
          title: 'Wettkampfstatistiken',
          description: 'Umfassendes Analysepaket für Veranstaltungsdaten',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Punkterechner',
          description: 'Präziser Punkterechner folgt in Kürze',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        rankings: {
          title: 'Punkterangliste',
          description: 'Live-Rangliste der Athleten folgt in Kürze',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        },
        trends: {
          title: 'Punktetrends',
          description: 'Analysewerkzeuge für Punktrends folgen in Kürze',
          backLabel: 'Zurück zu Snowboard Slopestyle'
        }
      }
    },
    docs: {
      competitionRules: {
        title: 'Wettkampfregeln',
        description: 'Technische Wettkampfregeln und Schiedsrichterstandards',
        backLabel: 'Zurück zur Wissensdatenbank'
      },
      pointsRules: {
        title: 'Punkteregeln',
        description: 'Dokumentation der chinesischen Ski-Punkteberechnung',
        backLabel: 'Zurück zur Wissensdatenbank'
      },
      venueStandards: {
        title: 'Stättenstandards',
        description: 'Anforderungen an Veranstaltungsorte und Einrichtungen',
        backLabel: 'Zurück zur Wissensdatenbank'
      },
      fisRules: {
        title: 'FIS Internationale Regeln',
        description: 'Wettkampfregeln des Internationalen Skiverbandes',
        backLabel: 'Zurück zur Wissensdatenbank'
      },
      guide: {
        title: 'Plattform-Benutzerhandbuch',
        description: 'Systemfunktionen und häufig gestellte Fragen',
        backLabel: 'Zurück zur Wissensdatenbank'
      }
    }
  },

  // Authentifizierung und Berechtigungen
  auth: {
    needsLogin: 'Anmeldung erforderlich',
    loginToUnlock: 'Anmelden um mehr Funktionen freizuschalten',
    comingSoon: 'Demnächst verfügbar',
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
      title: 'Chinesisches Ski-Punktesystem',
      titleEn: 'China Skiing Points System',
      subtitle: 'Maßgeblich · Professionell · Präzise Punkte-Verwaltungsplattform',
      exploreDisciplines: 'Disziplinen erkunden',
      freeRegister: 'Kostenlos registrieren',
      platformIntro: 'Erste Wahl für Profi-Athleten, Trainer und Veranstalter',
      highlights: [
        { label: 'Vier Punktesysteme', color: 'bg-ski-blue' },
        { label: 'Offizielle Zertifizierung', color: 'bg-green-400' },
        { label: 'U-Serie · Öffentliche Events', color: 'bg-yellow-400' }
      ]
    },
    features: {
      title: 'Kernfunktionen der Plattform',
      description: 'Komplette Ski-Wettkampf-Management-Lösung basierend auf FIS-Standards',
      online: 'Online',
      useNow: 'Jetzt nutzen',
      fisPointsQuery: {
        title: 'FIS-Punkte-Abfrage',
        description: 'FIS-Punkte und Rankings von Athleten abfragen'
      },
      pointsCalculator: {
        title: 'Punkterechner',
        description: 'Echtzeit-Punkteberechnung basierend auf Rennergebnissen'
      },
      pointsRankings: {
        title: 'Punkterangliste',
        description: 'Echtzeit aktualisierte Athleten-Punkterangliste'
      },
      platformIntro: {
        title: 'Plattformeinführung',
        description: 'Erfahren Sie mehr über das China Ski-Punktesystem'
      },
      memberRegister: {
        title: 'Mitgliedschaftsregistrierung',
        description: 'Registrieren Sie sich, um persönliche Punkte einzusehen'
      },
      eventAnnouncement: {
        title: 'Veranstaltungsankündigungen',
        description: 'Aktuelle Wettkampftermine und Ankündigungen'
      },
      pointsRules: {
        title: 'Punkteregeln',
        description: 'Punkteberechnungsregeln des chinesischen Skisports'
      },
      competitionManagement: {
        title: 'Wettkampfverwaltung',
        description: 'Wettkampfinfos, Ergebniseingabe und Statistiken verwalten'
      },
      athleteProfiles: {
        title: 'Athletenprofile',
        description: 'Athletenverwaltung und Punktehistorie'
      },
      onlineRegistration: {
        title: 'Online-Anmeldung',
        description: 'Bequeme Veranstaltungsanmeldung und Gebührenverwaltung'
      },
      dataAnalysis: {
        title: 'Datenanalyse',
        description: 'Tiefgehende Datenanalyse und Visualisierungsberichte'
      }
    },
    stats: {
      title: 'Plattformdaten-Übersicht',
      subtitle: 'Echtzeit-Systemdaten und Betriebsstatus',
      disciplines: { label: 'Ski-Disziplinen', value: '15+', description: 'Alpin·Freestyle·Snowboard' },
      pointsRules: { label: 'Punkteregeln', value: '100%', description: 'China-Standards konform' },
      updateCycle: { label: 'Punkte-Update', value: '7 Tage', description: 'Wöchentliche Updates' },
      users: { label: 'Registrierte Nutzer', value: '1.200+', description: 'Athleten & Trainer' }
    },
    news: {
      title: 'Aktuelle Meldungen',
      pauseCarousel: 'Karussell pausieren',
      continueCarousel: 'Karussell fortsetzen',
      statuses: {
        live: 'Live',
        updated: 'Aktualisiert',
        upcoming: 'Bevorstehend'
      },
      items: []
    },
    latestResults: {
      title: 'Neueste Wettkampfergebnisse',
      subtitle: 'Echtzeit-Ergebnisse und Punkteranglisten',
      recentResults: 'Aktuelle Ergebnisse',
      liveUpdate: 'Live-Update',
      viewMore: 'Mehr Events ansehen →',
      statusLabels: {
        live: 'Live',
        completed: 'Abgeschlossen'
      },
      results: []
    },
    rankings: {
      title: 'Punktebestenliste',
      updatedOn: 'Aktualisiert am',
      points: 'Punkte',
      viewFullRankings: 'Vollständige Rangliste →',
      entries: []
    },
    memberWelcome: {
      welcomeBack: 'Willkommen zurück',
      accountStatus: 'Konto aktiv',
      pendingReview: 'In Prüfung',
      currentPoints: 'Aktuelle Punkte',
      systemPermissions: 'Systemberechtigungen',
      personalCenter: 'Persönlicher Bereich',
      myPoints: 'Meine Punkte',
      adminPanel: 'Admin-Panel'
    },
    memberValue: {
      unlockFeatures: 'Alle Profi-Funktionen freischalten',
      registerToUnlock: 'Als Mitglied registrieren für vollständige Punkteverwaltung und Event-Services',
      pointsSystem: {
        title: 'Punktesystem',
        features: ['Persönliche Punkteabfrage und Historie', 'Echtzeit-Punktebestenliste', 'Punkterechner-Tool', 'Punktetrend-Analyse']
      },
      eventManagement: {
        title: 'Eventmanagement',
        features: ['Wettkampfliste und Zeitplan', 'Online-Eventanmeldung', 'Echtzeit-Ergebnisansicht', 'Event-Benachrichtigungen']
      },
      professionalFeatures: {
        title: 'Profi-Funktionen',
        features: ['Persönliches Athletenprofil', 'Detaillierte Punkteregeln', 'Datenstatistik und Analyse', 'Technischer Support']
      },
      registerUnlock: 'Registrieren zum Freischalten'
    },
    about: {
      title: 'Über die Plattform',
      description1: 'Das Chinesische Ski-Punktesystem ist eine umfassende Wettkampf-Management-Plattform basierend auf den Standards des Wintersport-Zentrums. Es deckt alle Disziplinen des Alpinen Skilaufs, Freestyle-Skifahrens und Snowboardens ab und bietet maßgebliche und präzise Datenverwaltung und Punkteberechnung für chinesische Skiwettkämpfe.',
      description2: 'Wir setzen uns für die digitale und standardisierte Entwicklung des chinesischen Skisports ein und bieten moderne Datenverwaltung, Punkteberechnung und Ergebnisstatistik-Tools für Athleten, Trainer, Veranstalter und Wettkampfrichter.',
      multiTierPoints: { title: 'Mehrstufiges Punktesystem', description: '360/240/120 Punktestufen' },
      uSeries: { title: 'U-Serie Events', description: 'U12/U15/U18 vollständig' },
      officialCertification: { title: 'Offizielle Zertifizierung', description: 'Wintersport-Zentrum Standards' },
      allDisciplines: { title: 'Alle Disziplinen', description: 'Alpin·Freestyle·Snowboard' }
    },
    systemFeatures: {
      title: 'Systemmerkmale',
      feature1: 'China Alpin-Ski Punkteregelwerk',
      feature2: 'Freestyle/Snowboard 360/240/120 Punktestufensystem',
      feature3: 'Big Air, Slopestyle, Parallel Events vollständig abgedeckt',
      feature4: 'U12/U15/U18 Jugendserien-Eventmanagement',
      feature5: 'Vom Wintersport-Zentrum zertifiziert',
      feature6: 'Multi-Disziplin Punkteranglisten und Datenvisualisierung'
    }
  },

  // Disziplinen-Übersicht
  disciplinesPage: {
    hero: {
      backLabel: 'Zurück zur Startseite',
      title: 'Chinesisches Jugend-Ski-Punktesystem',
      subtitle: 'Vier unabhängige Punktesysteme | Professionelle Eventmanagement-Plattform'
    },
    continuation: {
      title: 'Punkteübertragungs-Mechanismus für vier Disziplinen',
      description: 'Wissenschaftlich fundierte Übertragungsstrategie für konsistente Leistungsbewertung',
      cards: [
        {
          id: 'carry-forward',
          value: '×50%',
          title: 'Übertragungsrate',
          description: 'Am Saisonende werden 50% der Punkte jeder Disziplin in die nächste Saison übertragen',
          accent: 'blue'
        },
        {
          id: 'season',
          value: '1.7.–30.6.',
          title: 'Saisonzeitraum',
          description: 'Ein einheitlicher Saisonzyklus vom 1. Juli bis 30. Juni gewährleistet konsistente Berechnungen',
          accent: 'green'
        },
        {
          id: 'best-two',
          value: 'Beste 2',
          title: 'Ergebnisberechnung',
          description: 'Der Durchschnitt der besten zwei Ergebnisse jeder Disziplin wird als Saisonpunkte gewertet',
          accent: 'purple'
        }
      ]
    },
    cardsSection: {
      title: 'Wähle deine Disziplin',
      ctaLabel: 'Disziplin öffnen',
      cards: [
        {
          id: 'alpine',
          name: 'Ski Alpin',
          nameEn: 'Alpine Skiing',
          icon: 'alpine',
          color: 'from-blue-600 to-cyan-600',
          description: 'v4.0 zeitbasierte Punkteformel mit A/B/C Event-Koeffizienten',
          features: ['Abfahrt', 'Slalom', 'Riesenslalom', 'Super-G', 'Kombination']
        },
        {
          id: 'snowboard-slopestyle',
          name: 'Snowboard Slopestyle & Big Air',
          nameEn: 'Snowboard Slopestyle & Big Air',
          icon: 'snowboard',
          color: 'from-orange-600 to-yellow-600',
          description: '240/360/120 Punktestufen mit Juryumwandlung in Rankings',
          features: ['Slopestyle', 'Big Air', 'Halfpipe']
        },
        {
          id: 'snowboard-parallel',
          name: 'Snowboard Parallel',
          nameEn: 'Snowboard Parallel',
          icon: 'snowboard',
          color: 'from-purple-600 to-pink-600',
          description: 'Zeitbasierte Rennpunkte mit K.o.-Runden',
          features: ['Parallel-Riesenslalom (PGS)', 'Parallel-Slalom (PSL)']
        },
        {
          id: 'freeski-slopestyle',
          name: 'Freeski Slopestyle & Big Air',
          nameEn: 'Freeski Slopestyle & Big Air',
          icon: 'freeski',
          color: 'from-red-600 to-rose-600',
          description: '240/360/120 Punktestufen mit Trick-Schwierigkeitskoeffizienten',
          features: ['Slopestyle', 'Big Air', 'Aerials']
        }
      ]
    },
    highlights: {
      title: 'Kernfunktionen der Plattform',
      items: [
        {
          id: 'independent',
          icon: 'award',
          title: 'Unabhängige Rankings',
          description: 'Dedizierte Rankings und Analysen für jede Disziplin'
        },
        {
          id: 'realtime',
          icon: 'barChart',
          title: 'Echtzeit-Berechnungen',
          description: 'Punkte werden automatisch nach jedem Wettkampf aktualisiert'
        },
        {
          id: 'u-series',
          icon: 'target',
          title: 'U-Serie Management',
          description: 'Jugend-Altersgruppen U12, U15 und U18'
        },
        {
          id: 'continuation',
          icon: 'rotateCcw',
          title: 'Übertragungs-Mechanismus',
          description: '50% der Saisonpunkte werden für kontinuierliche Bewertung übertragen'
        }
      ]
    }
  },

  // Athletenseite
  athletesPage: {
    pageTitle: 'Athletenverwaltung',
    pageSubtitle: 'Chinesische Ski-Athletenprofile und Punkteanalysen',
    searchPlaceholder: 'Nach Athletenname oder Provinz suchen...',
    filterOptions: [
      { value: 'all', label: 'Alle Disziplinen' },
      { value: 'alpine', label: 'Ski Alpin' },
      { value: 'freestyle', label: 'Freestyle-Skifahren' },
      { value: 'snowboard', label: 'Snowboarding' }
    ],
    resultsSummary: '{count} Athleten gefunden',
    exportLabel: 'Liste exportieren',
    stats: [
      { id: 'registered', value: '1.247', label: 'Registrierte Athleten', icon: 'user', theme: 'blue' },
      { id: 'active', value: '563', label: 'Aktive Athleten', icon: 'trophy', theme: 'green' },
      { id: 'awarded', value: '89', label: 'Medaillengewinner', icon: 'medal', theme: 'purple' },
      { id: 'improved', value: '156', label: 'Punkteverbesserungen', icon: 'trendingUp', theme: 'red' }
    ],
    tableHeaders: {
      rank: 'Rang',
      athlete: 'Athlet',
      discipline: 'Disziplin',
      points: 'Punkte',
      competitions: 'Events',
      bestResult: 'Bestes Ergebnis',
      province: 'Provinz'
    },
    list: []
  },

  // Über-uns-Seite
  aboutPage: {
    pageTitle: 'Über uns',
    heroDescription: 'Die China Ski-Punkteplattform ist ein professioneller Punkteverwaltungsdienst für Skisport, der sich der Standardisierung und Professionalisierung des Skisports widmet',

    platformTitle: 'Plattformeinführung',
    platformDescription1: 'Die China Ski-Punkteplattform ist eine umfassende Skisport-Management-Plattform basierend auf offiziellen Punkteberechnungsregeln und Jugend-U-Serie-Wettbewerbsprogrammen.',
    platformDescription2: 'Die Plattform unterstützt drei Hauptdisziplinen: Ski Alpin, Freestyle-Skifahren und Snowboarding, einschließlich Abfahrt, Slalom, Riesenslalom, Super-G, Kombination, Big Air, Slopestyle, Halfpipe und mehr.',
    platformDescription3: 'Wir sind bestrebt, professionelle, präzise und effiziente digitale Verwaltungsdienste für den Skisport bereitzustellen.',

    stats: {
      pointsSystems: { value: '4', label: 'Punktesysteme' },
      registeredAthletes: { value: '1000+', label: 'Registrierte Athleten' },
      annualEvents: { value: '50+', label: 'Jährliche Events' },
      onlineService: { value: '24/7', label: 'Online-Service' }
    },

    coreFeaturesTitle: 'Kernfunktionen',
    coreFeaturesSubtitle: 'Professionelle, umfassende und benutzerfreundliche Ski-Event-Management-Lösung',

    pointsCalculation: {
      title: 'Punkteberechnungssystem',
      description: 'Präzise Punkteberechnung basierend auf offiziellen Regeln mit Dual-Punktesystem'
    },
    eventManagement: {
      title: 'Eventmanagement',
      description: 'Vollständig digitales Management von der Anmeldung bis zur Ergebnisveröffentlichung'
    },
    athleteManagement: {
      title: 'Athletenverwaltung',
      description: 'Athletenregistrierung, Qualifikationsprüfung und Punkteerfassung'
    },
    dataAnalysis: {
      title: 'Datenanalyse',
      description: 'Professionelle Datenstatistiken und Visualisierungsberichte'
    },

    technicalFeaturesTitle: 'Technische Merkmale',

    dualPointsEngine: {
      title: 'Dual-Punkteberechnungs-Engine',
      features: [
        'Ski Alpin: Zeitbasierte Punkteberechnung',
        'Freestyle/Snowboard: Rangbasierte 240/360/120 Stufen',
        'Dynamische Strafpunktberechnung',
        'Multi-Disziplin-Punkteverwaltung'
      ]
    },
    rulesSupport: {
      title: 'Regelwerk-Unterstützung',
      features: [
        'Ski Alpin Punkteberechnungsregeln',
        'Nationales BA/SS Jugend-U-Serie-Programm',
        'FIS-Regelwerk-Kompatibilität',
        'Stätten-Technikstandards-Verwaltung'
      ]
    },
    userExperience: {
      title: 'Benutzererfahrung',
      features: [
        'Responsives Design, Multi-Plattform-Anpassung',
        'Echtzeit-Datenaktualisierung',
        'Intuitive Datenvisualisierung',
        'Bequemer Arbeitsablauf'
      ]
    },

    contactTitle: 'Kontaktieren Sie uns',
    contactDescription: 'Bei Fragen oder Anregungen kontaktieren Sie uns gerne',

    technicalSupport: {
      title: 'Technischer Support',
      email: 'E-Mail: support@ski-points.com',
      phone: 'Telefon: 400-123-4567'
    },
    businessCooperation: {
      title: 'Geschäftskooperation',
      email: 'E-Mail: business@ski-points.com',
      wechat: 'WeChat: ski-points-service'
    }
  }
};
