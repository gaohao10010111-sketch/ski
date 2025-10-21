// Italian language pack - Pacchetto lingua italiana
import type { TranslationKeys } from './zh';

export const it: Partial<TranslationKeys> = {
  // Comune
  common: {
    loading: 'Caricamento...',
    error: 'Errore',
    success: 'Successo',
    cancel: 'Annulla',
    confirm: 'Conferma',
    save: 'Salva',
    edit: 'Modifica',
    delete: 'Elimina',
    search: 'Cerca',
    filter: 'Filtra',
    export: 'Esporta',
    import: 'Importa',
    back: 'Indietro',
    next: 'Avanti',
    previous: 'Precedente',
    submit: 'Invia',
    reset: 'Reimposta',
    home: 'Home',
    language: 'Lingua',
    login: 'Accedi',
    logout: 'Esci',
    register: 'Registrati',
    profile: 'Profilo',
    viewDetails: 'Visualizza dettagli',
    viewFullSchedule: 'Visualizza calendario completo →',
    viewFullRankings: 'Visualizza classifica completa →',
    readMore: 'Leggi di più'
  },

  // Navigazione
  navigation: {
    title: 'Sistema Punti Sci Cinese',
    titleShort: 'CSPS',

    // Selettore discipline
    disciplines: 'Discipline',
    alpine: 'Sci Alpino',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallelo',
    freestyleSlopestyle: 'Freestyle Slopestyle',

    // Navigazione globale
    my: 'Mia',
    docs: 'Docs',
    about: 'Info',

    // Navigazione livello discipline
    points: 'Punti',
    events: 'Competizioni',
    athletes: 'Atleti',

    // Sottomenu
    submenus: {
      // Sottomenu gestione punti
      pointsCalculator: 'Calcolatore',
      pointsRankings: 'Classifica',
      pointsTrends: 'Tendenze',

      // Sottomenu gestione competizioni
      eventsSchedule: 'Calendario',
      eventsRegister: 'Iscrizione',
      eventsResults: 'Risultati',
      eventsStats: 'Statistiche',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Sottomenu atleti
      athletesList: 'Lista Atleti',
      athletesProfile: 'Profilo Atleta',
      athletesStats: 'Statistiche',

      // Sottomenu docs
      docsPointsRules: 'Regolamento Punti',
      docsCompetitionRules: 'Regolamento Competizioni',
      docsVenueStandards: 'Standard Impianti',
      docsGuide: 'Guida Utente',

      // Sottomenu centro personale
      myProfile: 'Centro Personale',
      myPoints: 'I Miei Punti',
      myRegistrations: 'Le Mie Iscrizioni',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Navigazione breadcrumb
  breadcrumb: {
    home: 'Home',
    disciplines: 'Discipline Sciistiche',
    alpine: 'Sci Alpino',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallelo',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Centro Punti',
    events: 'Competizioni',
    my: 'La Mia Area',
    docs: 'Base di Conoscenza',
    about: 'Informazioni sul Sistema'
  },

  // Pagina Sci Alpino
  alpine: {
    title: 'Sci Alpino',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpino',

    hero: {
      slide1: {
        title: 'Highlights Campionato Nazionale 2024',
        subtitle: 'Testimoni dei momenti gloriosi dello sci alpino cinese'
      },
      slide2: {
        title: 'Sistema Punti Aggiornato',
        subtitle: 'Calcolo punti più accurato basato su regole v4.0'
      },
      slide3: {
        title: 'Iscrizione Camp di Allenamento Invernale',
        subtitle: 'Team di allenatori professionisti per migliorare le tue abilità'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Pagina Freestyle Slopestyle
  freestyleSlopestyle: {
    title: 'Freestyle Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freestyle SS',

    hero: {
      slide1: {
        title: 'Campionato Nazionale di Freestyle Slopestyle 2024',
        subtitle: 'Testimoni della svolta estrema dello sci freestyle cinese'
      },
      slide2: {
        title: 'Sistema Punti a 360 Livelli',
        subtitle: 'Meccanismo di punteggio equo basato sul coefficiente di difficoltà'
      },
      slide3: {
        title: 'Programma di Sviluppo Giovanile Serie U',
        subtitle: 'Sistema di coltivazione talenti U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Pagina Snowboard Slopestyle
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: 'Campionato Nazionale di Snowboard Slopestyle 2024',
        subtitle: 'Testimoni dei momenti emozionanti dello snowboard cinese'
      },
      slide2: {
        title: 'Sistema Punti a 360 Livelli',
        subtitle: 'Regole di calcolo punti basate su standard internazionali'
      },
      slide3: {
        title: 'Programma di Formazione Giovanile Serie U',
        subtitle: 'Sistema di coltivazione a tre livelli U12/U15/U18'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Pagina Snowboard Parallelo
  snowboardParallel: {
    title: 'Snowboard Parallelo',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallelo',

    hero: {
      slide1: {
        title: 'Campionato Nazionale di Snowboard Parallelo 2024',
        subtitle: 'Perfetta combinazione di velocità e abilità'
      },
      slide2: {
        title: 'Sistema Punti a Eliminazione',
        subtitle: 'Calcolo punti equo basato su classifiche testa a testa'
      },
      slide3: {
        title: 'Programma di Sviluppo Atleti d\'Élite',
        subtitle: 'Migliorare il livello di gara e competere in eventi internazionali'
      }
    },

    quickAccess: {
      results: { title: 'Risultati', nameEn: 'Results' },
      rankings: { title: 'Classifica', nameEn: 'Rankings' },
      schedule: { title: 'Calendario', nameEn: 'Calendar' },
      videos: { title: 'Video', nameEn: 'Videos' },
      athletes: { title: 'Atleti', nameEn: 'Athletes' },
      documents: { title: 'Documenti', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'In arrivo'
    },

    latestNews: {
      title: 'Ultime Notizie'
    },

    topAthletes: {
      title: 'Classifica'
    }
  },

  // Selettore lingua
  languageSelector: {
    title: 'Seleziona lingua',
    languages: {
      zh: 'Cinese',
      en: 'Inglese',
      ja: 'Giapponese',
      ko: 'Coreano',
      de: 'Tedesco',
      fr: 'Francese',
      it: 'Italiano',
      ru: 'Russo',
      no: 'Norvegese',
      sv: 'Svedese',
      fi: 'Finlandese',
      es: 'Spagnolo'
    }
  },

  // Componente In arrivo
  comingSoon: {
    title: 'In arrivo',
    description: 'Questa funzionalità è attualmente in sviluppo. Torna a trovarci presto.',
    backLabel: 'Torna alla home',
    learnMoreLabel: 'Scopri di più',
    progressLabel: 'Avanzamento',
    progressValue: '30%',
    eta: 'Rilascio stimato: 2-4 settimane',
    upcomingFeaturesTitle: 'Funzionalità in arrivo',
    upcomingFeatures: ['Aggiornamenti dati in tempo reale', 'Analisi intelligente', 'Raccomandazioni personalizzate', 'Ottimizzazione mobile']
  },

  // Centro documentazione
  docsPage: {
    hero: {
      title: 'Base di conoscenza',
      description: 'Regolamenti di gara, standard tecnici e guide della piattaforma'
    },
    viewDocLabel: 'Vedi documento',
    categories: {
      pointsRules: {
        title: 'Regole di punteggio',
        description: 'Guida dettagliata al sistema di punti cinese',
        topics: ['Formule di punteggio', 'Coefficienti di categoria', 'Meccanismo di penalità', 'Tabelle punti BL/NL']
      },
      competitionRules: {
        title: 'Regolamento tecnico',
        description: 'Regole di gara e standard arbitrali',
        topics: ['Flusso di gara', 'Regole di arbitraggio', 'Sistemi di cronometraggio', 'Procedura di ricorso']
      },
      venueStandards: {
        title: 'Standard delle sedi',
        description: 'Requisiti infrastrutturali e norme di sicurezza',
        topics: ['Standard delle sedi', 'Requisiti delle strutture', 'Linee guida sulla sicurezza', 'Processo di certificazione']
      },
      fisRules: {
        title: 'Regole FIS',
        description: 'Riferimenti della Federazione Internazionale di Sci',
        topics: ['Regole di punteggio FIS', 'Regolamento ICR', 'Standard internazionali', 'Riferimenti bilingue']
      },
      guide: {
        title: 'Guida della piattaforma',
        description: 'Manuale delle funzioni e domande frequenti',
        topics: ['Procedura di registrazione', 'Guida all’iscrizione', 'Consultazione punti', 'FAQ']
      }
    },
    popular: {
      title: 'Documenti popolari',
      viewsLabel: 'visualizzazioni',
      items: {
        alpineRulesV4: { title: 'Regole punti sci alpino Cina v4.0', category: 'Regole di punteggio' },
        seasonGrading: { title: 'Standard di classificazione 2024-2025', category: 'Regolamento tecnico' },
        youthSeries: { title: 'Piano gare giovanili serie U', category: 'Regolamento tecnico' },
        fisPointsGuide: { title: 'Guida al calcolo dei punti FIS', category: 'Regole FIS' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Biblioteca delle regole dello sci alpino cinese',
      description: 'Esplora il sistema di regole semplificato: calcolo dei punti, gestione delle gare e sviluppo giovanile.',
      highlights: [
        { icon: 'award', text: 'Standard ufficiale' },
        { icon: 'target', text: 'Calcolo semplificato' },
        { icon: 'users', text: 'Sistema giovanile ampliato' }
      ]
    },
    headings: {
      ruleModules: 'Moduli di regolamento'
    },
    toc: {
      toggleTitle: 'Mostra/nascondi sommario',
      title: 'Indice della pagina',
      download: 'Scarica la versione PDF',
      items: {
        coreFormula: 'Formula principale',
        ruleModules: 'Moduli di regolamento',
        coreFeatures: 'Caratteristiche principali',
        quickLinks: 'Link rapidi',
        upgradeInfo: 'Note di aggiornamento',
        importantNotice: 'Avvisi importanti'
      }
    },
    formula: {
      title: 'Formula principale',
      expression: 'Punteggio finale = (Punteggio base + Penalità) × Coefficiente gara',
      description: 'Rispetto alla versione 2.0 sono stati rimossi i fattori complessi. Il metodo in tre passaggi migliora efficienza e trasparenza.',
      copyButton: 'Copia formula',
      copySuccess: 'Copiato negli appunti!',
      calculatorButton: 'Apri calcolatore'
    },
    ruleModules: {
      points: {
        title: 'Regole di punteggio cinesi',
        description: 'Sistema di calcolo semplificato basato su tre fasi.',
        features: ['Formula in tre passaggi', 'Struttura a tre livelli A/B/C', 'Categorie giovanili ampliate', 'Maggiore trasparenza'],
        linkLabel: 'Dettagli'
      },
      competition: {
        title: 'Guida alle competizioni',
        description: 'Comprendi le regole aggiornate e il sistema giovanile con una guida pratica.',
        features: ['Panoramica delle discipline', 'Categorie per età', 'Percorso di partecipazione', 'Standard di sicurezza e tecnici'],
        linkLabel: 'Dettagli'
      },
      documents: {
        title: 'Documentazione sui punti',
        description: 'Accedi ai documenti e agli strumenti del sistema di punti semplificato.',
        features: ['Spiegazioni dettagliate', 'Componenti della formula', 'Calcolatore online', 'Download PDF'],
        linkLabel: 'Dettagli'
      }
    },
    v4Features: {
      title: 'Caratteristiche principali',
      items: {
        simplified: {
          title: 'Calcolo semplificato',
          description: 'Elimina fattori di qualità, partecipazione e bonus aggiuntivi.'
        },
        tiers: {
          title: 'Sistema a tre livelli',
          description: 'Categorie A (1.0), B (0.6) e C (0.3) per una gestione chiara.'
        },
        youth: {
          title: 'Sviluppo giovanile',
          description: 'Supporto mirato alle fasce U15–U18.'
        },
        efficiency: {
          title: 'Efficiente e trasparente',
          description: 'La procedura in tre fasi migliora velocità e chiarezza.'
        }
      }
    },
    quickLinks: {
      title: 'Link rapidi',
      items: {
        calculator: { label: 'Calcolatore punti' },
        rankings: { label: 'Classifiche punti' },
        data: { label: 'Gestione dati gare' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Note di aggiornamento',
      improvements: {
        title: 'Principali miglioramenti',
        items: ['Formula semplificata senza fattori complessi', 'Struttura delle gare su tre livelli', 'Categorie giovanili ampliate', 'Maggiore trasparenza ed efficienza']
      },
      advantages: {
        title: 'Vantaggi tecnici',
        items: ['Calcolo in tre passaggi facile da adottare', 'Gestione standardizzata in linea con gli standard internazionali', 'Strumenti digitali e supporto online completi', 'Ambiente di gara equo e trasparente']
      }
    },
    importantNotice: {
      title: 'Avvisi importanti',
      version: {
        title: 'Versione del regolamento',
        items: ['Versione attuale: ultima edizione', 'Stagione di applicazione: 2024-2025', 'Ambito: gare nazionali in Cina', 'Ciclo di aggiornamento: secondo necessità']
      },
      usage: {
        title: 'Suggerimenti d’uso',
        items: ['Iniziare dalla panoramica delle regole di punteggio', 'Verificare i risultati con il calcolatore online', 'Seguire le politiche dedicate ai giovani', 'Rimanere aggiornati sulle revisioni delle regole']
      },
      support: 'Questo quadro normativo combina l’esperienza internazionale con le esigenze della Cina per offrire un supporto equo ed efficace allo sviluppo dello sci alpino. Per domande o suggerimenti, contattaci tramite i canali indicati.'
    }
  },

  // Testi delle pagine (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Elenco atleti',
          description: 'Consulta tutti i profili degli atleti registrati',
          backLabel: 'Torna allo sci alpino'
        },
        rankings: {
          title: 'Classifica atleti',
          description: 'Classifica completa basata su punti e risultati',
          backLabel: 'Torna allo sci alpino'
        },
        stats: {
          title: 'Statistiche atleti',
          description: 'Statistiche dettagliate e analisi visive degli atleti',
          backLabel: 'Torna allo sci alpino'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Regolamento di gara',
          description: 'Norme tecniche di gara dettagliate',
          backLabel: 'Torna allo sci alpino'
        },
        'points-rules': {
          title: 'Regole di punteggio',
          description: 'Esplora le regole di punteggio v4.0 dello sci alpino',
          backLabel: 'Torna allo sci alpino'
        },
        'venue-standards': {
          title: 'Standard delle sedi',
          description: 'Standard delle piste e requisiti di certificazione per lo sci alpino',
          backLabel: 'Torna allo sci alpino'
        }
      },
      events: {
        register: {
          title: 'Iscrizione online',
          description: 'Sistema di iscrizione semplificato in arrivo',
          backLabel: 'Torna allo sci alpino'
        },
        results: {
          title: 'Risultati',
          description: 'Consulta in tempo reale risultati e aggiornamenti dei punti',
          backLabel: 'Torna allo sci alpino'
        },
        schedule: {
          title: 'Calendario eventi',
          description: 'Visualizza i prossimi eventi di sci alpino',
          backLabel: 'Torna allo sci alpino'
        },
        stats: {
          title: 'Statistiche eventi',
          description: 'Suite completa di analisi dei dati degli eventi',
          backLabel: 'Torna allo sci alpino'
        }
      },
      points: {
        calculator: {
          title: 'Calcolatore punti',
          description: 'Calcolatore punti v4.0 accurato in arrivo',
          backLabel: 'Torna allo sci alpino'
        },
        rankings: {
          title: 'Classifica punti',
          description: 'Classifica atleti in tempo reale in arrivo',
          backLabel: 'Torna allo sci alpino'
        },
        trends: {
          title: 'Trend dei punti',
          description: 'Strumenti di analisi delle tendenze dei punti in arrivo',
          backLabel: 'Torna allo sci alpino'
        }
      }
    },
    rules: {
      competition: {
        title: 'Guida alle competizioni',
        description: 'Questa pagina è in preparazione. Torna a trovarci a breve.',
        backLabel: 'Torna alla sezione delle regole'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Elenco atleti',
          description: 'Consulta tutti i profili degli atleti registrati',
          backLabel: 'Torna al freestyle slopestyle'
        },
        rankings: {
          title: 'Classifica atleti',
          description: 'Classifica completa basata su punti e risultati',
          backLabel: 'Torna al freestyle slopestyle'
        },
        stats: {
          title: 'Statistiche atleti',
          description: 'Statistiche dettagliate e analisi visive degli atleti',
          backLabel: 'Torna al freestyle slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Regolamento di gara',
          description: 'Norme tecniche di gara dettagliate',
          backLabel: 'Torna al freestyle slopestyle'
        },
        'points-rules': {
          title: 'Regole di punteggio',
          description: 'Consulta nel dettaglio le regole di calcolo dei punti',
          backLabel: 'Torna al freestyle slopestyle'
        },
        'venue-standards': {
          title: 'Standard delle sedi',
          description: 'Requisiti tecnici e di certificazione delle sedi',
          backLabel: 'Torna al freestyle slopestyle'
        }
      },
      events: {
        register: {
          title: 'Iscrizione online',
          description: 'Sistema di iscrizione semplificato in arrivo',
          backLabel: 'Torna al freestyle slopestyle'
        },
        results: {
          title: 'Risultati',
          description: 'Consulta in tempo reale risultati e aggiornamenti dei punti',
          backLabel: 'Torna al freestyle slopestyle'
        },
        schedule: {
          title: 'Calendario eventi',
          description: 'Visualizza il calendario dei prossimi eventi',
          backLabel: 'Torna al freestyle slopestyle'
        },
        stats: {
          title: 'Statistiche eventi',
          description: 'Suite completa di analisi dei dati degli eventi',
          backLabel: 'Torna al freestyle slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Calcolatore punti',
          description: 'Calcolatore punti accurato in arrivo',
          backLabel: 'Torna al freestyle slopestyle'
        },
        rankings: {
          title: 'Classifica punti',
          description: 'Classifica atleti in tempo reale in arrivo',
          backLabel: 'Torna al freestyle slopestyle'
        },
        trends: {
          title: 'Trend dei punti',
          description: 'Strumenti di analisi delle tendenze in arrivo',
          backLabel: 'Torna al freestyle slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Elenco atleti',
          description: 'Consulta tutti i profili degli atleti registrati',
          backLabel: 'Torna allo snowboard parallelo'
        },
        rankings: {
          title: 'Classifica atleti',
          description: 'Classifica completa basata su punti e risultati',
          backLabel: 'Torna allo snowboard parallelo'
        },
        stats: {
          title: 'Statistiche atleti',
          description: 'Statistiche dettagliate e analisi visive degli atleti',
          backLabel: 'Torna allo snowboard parallelo'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Regolamento di gara',
          description: 'Norme tecniche di gara dettagliate',
          backLabel: 'Torna allo snowboard parallelo'
        },
        'points-rules': {
          title: 'Regole di punteggio',
          description: 'Consulta nel dettaglio le regole di calcolo dei punti',
          backLabel: 'Torna allo snowboard parallelo'
        },
        'venue-standards': {
          title: 'Standard delle sedi',
          description: 'Requisiti tecnici e di certificazione delle sedi',
          backLabel: 'Torna allo snowboard parallelo'
        }
      },
      events: {
        register: {
          title: 'Iscrizione online',
          description: 'Sistema di iscrizione semplificato in arrivo',
          backLabel: 'Torna allo snowboard parallelo'
        },
        results: {
          title: 'Risultati',
          description: 'Consulta in tempo reale risultati e aggiornamenti dei punti',
          backLabel: 'Torna allo snowboard parallelo'
        },
        schedule: {
          title: 'Calendario eventi',
          description: 'Visualizza il calendario dei prossimi eventi',
          backLabel: 'Torna allo snowboard parallelo'
        },
        stats: {
          title: 'Statistiche eventi',
          description: 'Suite completa di analisi dei dati degli eventi',
          backLabel: 'Torna allo snowboard parallelo'
        }
      },
      points: {
        calculator: {
          title: 'Calcolatore punti',
          description: 'Calcolatore punti accurato in arrivo',
          backLabel: 'Torna allo snowboard parallelo'
        },
        rankings: {
          title: 'Classifica punti',
          description: 'Classifica atleti in tempo reale in arrivo',
          backLabel: 'Torna allo snowboard parallelo'
        },
        trends: {
          title: 'Trend dei punti',
          description: 'Strumenti di analisi delle tendenze in arrivo',
          backLabel: 'Torna allo snowboard parallelo'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Elenco atleti',
          description: 'Consulta tutti i profili degli atleti registrati',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        rankings: {
          title: 'Classifica atleti',
          description: 'Classifica completa basata su punti e risultati',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        stats: {
          title: 'Statistiche atleti',
          description: 'Statistiche dettagliate e analisi visive degli atleti',
          backLabel: 'Torna allo snowboard slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Regolamento di gara',
          description: 'Norme tecniche di gara dettagliate',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        'points-rules': {
          title: 'Regole di punteggio',
          description: 'Consulta nel dettaglio le regole di calcolo dei punti',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        'venue-standards': {
          title: 'Standard delle sedi',
          description: 'Requisiti tecnici e di certificazione delle sedi',
          backLabel: 'Torna allo snowboard slopestyle'
        }
      },
      events: {
        register: {
          title: 'Iscrizione online',
          description: 'Sistema di iscrizione semplificato in arrivo',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        results: {
          title: 'Risultati',
          description: 'Consulta in tempo reale risultati e aggiornamenti dei punti',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        schedule: {
          title: 'Calendario eventi',
          description: 'Visualizza il calendario dei prossimi eventi',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        stats: {
          title: 'Statistiche eventi',
          description: 'Suite completa di analisi dei dati degli eventi',
          backLabel: 'Torna allo snowboard slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Calcolatore punti',
          description: 'Calcolatore punti accurato in arrivo',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        rankings: {
          title: 'Classifica punti',
          description: 'Classifica atleti in tempo reale in arrivo',
          backLabel: 'Torna allo snowboard slopestyle'
        },
        trends: {
          title: 'Trend dei punti',
          description: 'Strumenti di analisi delle tendenze in arrivo',
          backLabel: 'Torna allo snowboard slopestyle'
        }
      }
    }
  },

  // Autenticazione e permessi
  auth: {
    needsLogin: 'Accesso richiesto',
    loginToUnlock: 'Accedi per sbloccare più funzioni',
    comingSoon: 'Prossimamente disponibile',
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
