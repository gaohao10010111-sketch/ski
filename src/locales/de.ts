// German language pack - Deutsche Sprachpaket
import type { TranslationKeys } from './zh';

export const de: Partial<TranslationKeys> = {
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
      title: 'China Skiing Points System',
      titleEn: 'China Skiing Points System',
      subtitle: 'Authoritative · Professional · Accurate skiing points management platform',
      exploreDisciplines: 'Explore Disciplines',
      freeRegister: 'Free Registration',
      platformIntro: 'First choice platform for professional athletes, coaches, and event organizers • Certified by General Administration of Sport',
      highlights: [
        { label: 'Four Points Systems', color: 'bg-ski-blue' },
        { label: 'Official Certification', color: 'bg-green-400' },
        { label: 'U-Series · Public Events', color: 'bg-yellow-400' }
      ]
    },
    features: {
      title: 'Core Platform Features',
      description: 'Complete skiing competition management solution based on FIS International Ski Federation standards',
      online: 'Online',
      useNow: 'Use Now',
      fisPointsQuery: {
        title: 'FIS Points Query',
        description: 'Query athlete FIS points and ranking information'
      },
      pointsCalculator: {
        title: 'Points Calculator',
        description: 'Real-time calculation of skiing points based on race results'
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
      items: []
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
      results: []
    },
    rankings: {
      title: 'Points Leaderboard',
      updatedOn: 'Updated on',
      points: 'Points',
      viewFullRankings: 'View Full Rankings →',
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

  // Page Metadata
  pageMetadata: {
    docs: {
      competitionRules: {
        title: 'Wettkampfregeln',
        description: 'Technische Wettkampfregeln und Schiedsrichterstandards'
      },
      pointsRules: {
        title: 'Punkterichtlinien',
        description: 'Chinesische Ski-Punkteberechnungsregeln'
      },
      venueStandards: {
        title: 'Stättenstandards',
        description: 'Anforderungen an Veranstaltungsorte'
      },
      fisRules: {
        title: 'FIS-Regelwerk',
        description: 'Internationales Skiverband-Regelwerk'
      },
      guide: {
        title: 'Plattformhandbuch',
        description: 'Funktionsanleitungen und FAQ'
      }
    }
  }
};
