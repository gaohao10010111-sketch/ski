// Swedish language pack - Svenska språkpaket
import type { PartialTranslationKeys } from './zh';

export const sv: PartialTranslationKeys = {
  // Gemensamt
  common: {
    loading: 'Laddar...',
    error: 'Fel',
    success: 'Framgång',
    cancel: 'Avbryt',
    confirm: 'Bekräfta',
    save: 'Spara',
    edit: 'Redigera',
    delete: 'Ta bort',
    search: 'Sök',
    filter: 'Filter',
    export: 'Exportera',
    import: 'Importera',
    back: 'Tillbaka',
    next: 'Nästa',
    previous: 'Föregående',
    submit: 'Skicka',
    reset: 'Återställ',
    home: 'Hem',
    language: 'Språk',
    login: 'Logga in',
    logout: 'Logga ut',
    register: 'Registrera',
    profile: 'Profil',
    viewDetails: 'Visa detaljer',
    viewFullSchedule: 'Visa fullständig tävlingskalender →',
    viewFullRankings: 'Visa fullständig rankning →',
    readMore: 'Läs mer'
  },

  // Navigation
  navigation: {
    title: 'Kinesiska Skidpoäng System',
    titleShort: 'CSPS',

    // Projektväxlare
    disciplines: 'Discipliner',
    alpine: 'Alpin Skidåkning',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallel',
    freestyleSlopestyle: 'Freeski Slopestyle',

    // Global navigation
    my: 'Min',
    docs: 'Dokument',
    about: 'Om',

    // Projektnivå navigation
    points: 'Poänghantering',
    events: 'Tävlingshantering',
    athletes: 'Atleter',

    // Undermenyer
    submenus: {
      // Poänghantering undermenyer
      pointsCalculator: 'Poängkalkylator',
      pointsRankings: 'Poängrankning',
      pointsTrends: 'Poängtrender',

      // Tävlingshantering undermenyer
      eventsSchedule: 'Tävlingskalender',
      eventsRegister: 'Onlineregistrering',
      eventsResults: 'Resultatförfrågan',
      eventsStats: 'Datastatistik',
      resultsLive: 'Liveresultat',
      resultsImport: 'Importera resultat',
      resultsAnnouncement: 'Resultatpublicering',

      // Atlet undermenyer
      athletesList: 'Atletlista',
      athletesProfile: 'Atletprofil',
      athletesStats: 'Atletstatistik',

      // Dokument undermenyer
      docsPointsRules: 'Poängregler',
      docsCompetitionRules: 'Tävlingsregler',
      docsVenueStandards: 'Anläggningsstandarder',
      docsGuide: 'Användarguide',

      // Min sida undermenyer
      myProfile: 'Personligt Center',
      myPoints: 'Mina Poäng',
      myRegistrations: 'Mina Registreringar',
      myAthlete: 'Atletprofil',
      myHistory: 'Resultathistorik',

      // Fler funktioner
      moreFeatures: 'Mer'
    }
  },

  // Breadcrumb navigation
  breadcrumb: {
    home: 'Hem',
    disciplines: 'Skiddiscipliner',
    alpine: 'Alpin Skidåkning',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallel',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Poängcenter',
    events: 'Tävlingar',
    my: 'Min Sida',
    docs: 'Kunskapsbas',
    about: 'Om Systemet'
  },

  // Alpin skidåkning sida
  alpine: {
    title: 'Alpin Skidåkning',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpin',

    hero: {
      slide1: {
        title: '2024 Nationella Mästerskapet Höjdpunkter',
        subtitle: 'Bevittna de lysande ögonblicken av kinesisk alpin skidåkning'
      },
      slide2: {
        title: 'Poängsystem Uppgradering',
        subtitle: 'Mer exakt poängberäkning baserad på v4.0-regler'
      },
      slide3: {
        title: 'Vinterträningsläger Registrering Öppen',
        subtitle: 'Professionellt tränarteam hjälper dig förbättra dina färdigheter'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videoce center', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Freeski Slopestyle sida
  freestyleSlopestyle: {
    title: 'Freeski Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freeski SS',

    hero: {
      slide1: {
        title: '2024 Nationella Freeski Slopestyle Mästerskapet',
        subtitle: 'Bevittna grensgränsöverskridande ögonblick av kinesisk freeski'
      },
      slide2: {
        title: '360 Graderat Poängsystem',
        subtitle: 'Rättvis poängmekanism baserad på svårighetskoefficient'
      },
      slide3: {
        title: 'U-serien Ungdomsutvecklingsprogram',
        subtitle: 'U12/U15/U18 talantutvecklingssystem'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videocenter', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Snowboard Slopestyle sida
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Nationella Snowboard Slopestyle Mästerskapet',
        subtitle: 'Bevittna spännande ögonblick av kinesisk snowboard'
      },
      slide2: {
        title: '360 Graderat Poängsystem',
        subtitle: 'Poängberäkningsregler baserade på internationella standarder'
      },
      slide3: {
        title: 'U-serien Ungdomsutvecklingsprogram',
        subtitle: 'U12/U15/U18 trestegs utvecklingssystem'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videocenter', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Snowboard Parallel sida
  snowboardParallel: {
    title: 'Snowboard Parallel',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallel',

    hero: {
      slide1: {
        title: '2024 Nationella Snowboard Parallel Mästerskapet',
        subtitle: 'Perfekt kombination av hastighet och skicklighet'
      },
      slide2: {
        title: 'Turneringspoängsystem',
        subtitle: 'Rättvis poängberäkning baserad på matchningsrankning'
      },
      slide3: {
        title: 'Elitatletutvecklingsprogram',
        subtitle: 'Förbättra racenivå och utmana internationella tävlingar'
      }
    },

    quickAccess: {
      results: { title: 'Tävlingsresultat', nameEn: 'Results' },
      rankings: { title: 'Poängrankning', nameEn: 'Rankings' },
      schedule: { title: 'Tävlingskalender', nameEn: 'Calendar' },
      videos: { title: 'Videocenter', nameEn: 'Videos' },
      athletes: { title: 'Atletregister', nameEn: 'Athletes' },
      documents: { title: 'Regeldokument', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommande'
    },

    latestNews: {
      title: 'Senaste Nytt'
    },

    topAthletes: {
      title: 'Poängrankning'
    }
  },

  // Språkväljare
  languageSelector: {
    title: 'Välj språk',
    languages: {
      zh: 'Kinesiska',
      en: 'Engelska',
      ja: 'Japanska',
      ko: 'Koreanska',
      de: 'Tyska',
      fr: 'Franska',
      it: 'Italienska',
      ru: 'Ryska',
      no: 'Norska',
      sv: 'Svenska',
      fi: 'Finska',
      es: 'Spanska'
    }
  },

  // Kommer snart-komponent
  comingSoon: {
    title: 'Kommer snart',
    description: 'Den här funktionen är under utveckling. Titta tillbaka snart.',
    backLabel: 'Tillbaka till startsidan',
    learnMoreLabel: 'Läs mer',
    progressLabel: 'Utvecklingsstatus',
    progressValue: '30%',
    eta: 'Beräknad lansering: 2–4 veckor',
    upcomingFeaturesTitle: 'Kommande funktioner',
    upcomingFeatures: ['Uppdateringar i realtid', 'Intelligent analys', 'Personliga rekommendationer', 'Mobiloptimering']
  },

  // Dokumentcenter
  docsPage: {
    hero: {
      title: 'Kunskapsbank',
      description: 'Tävlingsregler, tekniska standarder och plattformsguider'
    },
    viewDocLabel: 'Visa dokument',
    categories: {
      pointsRules: {
        title: 'Poängregler',
        description: 'Detaljerad genomgång av det kinesiska poängsystemet',
        topics: ['Poängformler', 'Tävlingsfaktorer', 'Straff-/bonusmekanismer', 'BL/NL-poängtabeller']
      },
      competitionRules: {
        title: 'Tävlingsregler',
        description: 'Tekniska regler och domarstandarder',
        topics: ['Tävlingsflöde', 'Domarregler', 'Tidtagningssystem', 'Överklagandeprocess']
      },
      venueStandards: {
        title: 'Arenastandarder',
        description: 'Krav på anläggningar och säkerhet',
        topics: ['Arenastandarder', 'Utrustningskrav', 'Säkerhetsriktlinjer', 'Certifieringsprocess']
      },
      fisRules: {
        title: 'FIS-regelverk',
        description: 'Referenser från Internationella skidförbundet',
        topics: ['FIS-poängregler', 'ICR-regelverk', 'Internationella standarder', 'Tvåspråkiga referenser']
      },
      guide: {
        title: 'Plattformsguide',
        description: 'Funktionsguider och vanliga frågor',
        topics: ['Registreringsflöde', 'Anmälningsguide', 'Poängsökning', 'FAQ']
      }
    },
    popular: {
      title: 'Populära dokument',
      viewsLabel: 'visningar',
      items: {
        alpineRulesV4: { title: 'Kinesiska alpina poängregler v4.0', category: 'Poängregler' },
        seasonGrading: { title: 'Tävlingsklassning 2025-2026', category: 'Tävlingsregler' },
        youthSeries: { title: 'U-serien ungdomsplan', category: 'Tävlingsregler' },
        fisPointsGuide: { title: 'Guide för FIS-poängberäkning', category: 'FIS-regler' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Bibliotek med regler för kinesisk alpin skidåkning',
      description: 'Utforska det förenklade regelverket för poängberäkning, tävlingshantering och ungdomsutveckling.',
      highlights: [
        { icon: 'award', text: 'Officiell standard' },
        { icon: 'target', text: 'Förenklade beräkningar' },
        { icon: 'users', text: 'Utökat ungdomssystem' }
      ]
    },
    headings: {
      ruleModules: 'Regelmoduler'
    },
    toc: {
      toggleTitle: 'Visa/dölj innehållsförteckning',
      title: 'Sidöversikt',
      download: 'Ladda ner PDF-version',
      items: {
        coreFormula: 'Grundformel',
        ruleModules: 'Regelmoduler',
        coreFeatures: 'Viktiga egenskaper',
        quickLinks: 'Snabblänkar',
        upgradeInfo: 'Uppgraderingsinformation',
        importantNotice: 'Viktig information'
      }
    },
    formula: {
      title: 'Grundformel',
      expression: 'Slutpoäng = (Grundpoäng + Straffpoäng) × Tävlingskoefficient',
      description: 'Jämfört med version 2.0 har komplexa faktorer tagits bort. Den tredelade metoden ökar effektivitet och transparens.',
      copyButton: 'Kopiera formel',
      copySuccess: 'Kopierat till urklipp!',
      calculatorButton: 'Öppna kalkylator'
    },
    ruleModules: {
      points: {
        title: 'Kinesiska poängregler',
        description: 'Ett förenklat poängsystem baserat på tre steg.',
        features: ['Tre-stegs beräkningsformel', 'Tre tävlingsnivåer A/B/C', 'Utökade ungdomskategorier', 'Ökad transparens'],
        linkLabel: 'Visa detaljer'
      },
      competition: {
        title: 'Tävlingguide',
        description: 'Förstå de uppdaterade reglerna och ungdomssystemet med praktisk vägledning.',
        features: ['Översikt över grenar', 'Ålderskategorier', 'Deltagarflöde', 'Säkerhets- och tekniska standarder'],
        linkLabel: 'Visa detaljer'
      },
      documents: {
        title: 'Poängdokumentation',
        description: 'Få tillgång till dokument och verktyg för det förenklade poängsystemet.',
        features: ['Detaljerade förklaringar', 'Beskrivning av formelkomponenter', 'Onlinekalkylator', 'PDF-nedladdningar'],
        linkLabel: 'Visa detaljer'
      }
    },
    v4Features: {
      title: 'Viktiga egenskaper',
      items: {
        simplified: {
          title: 'Förenklad beräkning',
          description: 'Tar bort faktorer för kvalitet, deltagare och bonuspoäng.'
        },
        tiers: {
          title: 'Tre nivåer',
          description: 'Kategorierna A (1,0), B (0,6) och C (0,3) säkerställer tydlig struktur.'
        },
        youth: {
          title: 'Utökad ungdom',
          description: 'Riktat stöd för U15–U18.'
        },
        efficiency: {
          title: 'Effektivt och transparent',
          description: 'Tre-stegsprocessen förbättrar tempo och tydlighet.'
        }
      }
    },
    quickLinks: {
      title: 'Snabblänkar',
      items: {
        calculator: { label: 'Poängkalkylator' },
        rankings: { label: 'Poängtabell' },
        data: { label: 'Tävlingsdatahantering' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Uppgraderingsinformation',
      improvements: {
        title: 'Viktiga förbättringar',
        items: ['Förenklad formel utan komplexa faktorer', 'Tre nivåer för tävlingsstruktur', 'Utökade ungdomskategorier', 'Större transparens och effektivitet']
      },
      advantages: {
        title: 'Tekniska fördelar',
        items: ['Tre-stegs beräkning är lätt att använda', 'Standardiserad hantering i linje med internationella normer', 'Digitala verktyg och onlinesupport', 'Öppen och rättvis tävlingsmiljö']
      }
    },
    importantNotice: {
      title: 'Viktig information',
      version: {
        title: 'Regelversion',
        items: ['Aktuell version: senaste utgåvan', 'Gäller säsongen 2024–2025', 'Omfattning: nationella tävlingar i Kina', 'Uppdateringscykel: efter behov']
      },
      usage: {
        title: 'Användningstips',
        items: ['Börja med en översikt av poängreglerna', 'Kontrollera resultat med onlinekalkylatorn', 'Följ ungdomssatsningar noga', 'Håll koll på regeluppdateringar']
      },
      support: 'Detta regelverk kombinerar internationell erfarenhet med Kinas behov för att stödja en rättvis och effektiv utveckling av alpin skidåkning. Kontakta oss via angivna kanaler vid frågor eller förslag.'
    }
  },

  // Sidtexter (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Atletregister',
          description: 'Visa alla registrerade atletprofiler',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        rankings: {
          title: 'Atletranking',
          description: 'Heltäckande ranking baserad på poäng och resultat',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        stats: {
          title: 'Atletstatistik',
          description: 'Detaljerad statistik och visualiseringar',
          backLabel: 'Tillbaka till alpin skidåkning'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Tävlingsregler',
          description: 'Detaljerade tekniska tävlingsstandarder',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        'points-rules': {
          title: 'Poängregler',
          description: 'Utforska poängreglerna v4.0 för alpin skidåkning',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Standarder och certifieringskrav för alpina arenor',
          backLabel: 'Tillbaka till alpin skidåkning'
        }
      },
      events: {
        register: {
          title: 'Onlineanmälan',
          description: 'Förenklat anmälningssystem kommer snart',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        results: {
          title: 'Resultat',
          description: 'Se resultat och poänguppdateringar i realtid',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        schedule: {
          title: 'Tävlingskalender',
          description: 'Visa kommande alpina tävlingar',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        stats: {
          title: 'Tävlingsstatistik',
          description: 'Omfattande analysverktyg för tävlingsdata',
          backLabel: 'Tillbaka till alpin skidåkning'
        }
      },
      points: {
        calculator: {
          title: 'Poängräknare',
          description: 'Noggrann v4.0-poängräknare kommer snart',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        rankings: {
          title: 'Poängranking',
          description: 'Live-ranking för atleter kommer snart',
          backLabel: 'Tillbaka till alpin skidåkning'
        },
        trends: {
          title: 'Poängtrender',
          description: 'Visualiseringsverktyg för poängtrender kommer snart',
          backLabel: 'Tillbaka till alpin skidåkning'
        }
      }
    },
    rules: {
      competition: {
        title: 'Tävlingsguide',
        description: 'Den här sidan håller på att färdigställas. Välkommen tillbaka snart.',
        backLabel: 'Tillbaka till reglerna'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Atletregister',
          description: 'Visa alla registrerade atletprofiler',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        rankings: {
          title: 'Atletranking',
          description: 'Heltäckande ranking baserad på poäng och resultat',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        stats: {
          title: 'Atletstatistik',
          description: 'Detaljerad statistik och visualiseringar',
          backLabel: 'Tillbaka till freestyle slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Tävlingsregler',
          description: 'Detaljerade tekniska tävlingsstandarder',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        'points-rules': {
          title: 'Poängregler',
          description: 'Läs mer om reglerna för poängberäkning',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Tekniska krav och certifiering av arenor',
          backLabel: 'Tillbaka till freestyle slopestyle'
        }
      },
      events: {
        register: {
          title: 'Onlineanmälan',
          description: 'Förenklat anmälningssystem kommer snart',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        results: {
          title: 'Resultat',
          description: 'Se resultat och poänguppdateringar i realtid',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        schedule: {
          title: 'Tävlingskalender',
          description: 'Visa kommande tävlingar',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        stats: {
          title: 'Tävlingsstatistik',
          description: 'Omfattande analysverktyg för tävlingsdata',
          backLabel: 'Tillbaka till freestyle slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Poängräknare',
          description: 'Noggrann poängräknare kommer snart',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        rankings: {
          title: 'Poängranking',
          description: 'Live-ranking för atleter kommer snart',
          backLabel: 'Tillbaka till freestyle slopestyle'
        },
        trends: {
          title: 'Poängtrender',
          description: 'Analysverktyg för poängtrender kommer snart',
          backLabel: 'Tillbaka till freestyle slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Atletregister',
          description: 'Visa alla registrerade atletprofiler',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        rankings: {
          title: 'Atletranking',
          description: 'Heltäckande ranking baserad på poäng och resultat',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        stats: {
          title: 'Atletstatistik',
          description: 'Detaljerad statistik och visualiseringar',
          backLabel: 'Tillbaka till snowboard parallell'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Tävlingsregler',
          description: 'Detaljerade tekniska tävlingsstandarder',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        'points-rules': {
          title: 'Poängregler',
          description: 'Läs mer om reglerna för poängberäkning',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Tekniska krav och certifiering av arenor',
          backLabel: 'Tillbaka till snowboard parallell'
        }
      },
      events: {
        register: {
          title: 'Onlineanmälan',
          description: 'Förenklat anmälningssystem kommer snart',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        results: {
          title: 'Resultat',
          description: 'Se resultat och poänguppdateringar i realtid',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        schedule: {
          title: 'Tävlingskalender',
          description: 'Visa kommande tävlingar',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        stats: {
          title: 'Tävlingsstatistik',
          description: 'Omfattande analysverktyg för tävlingsdata',
          backLabel: 'Tillbaka till snowboard parallell'
        }
      },
      points: {
        calculator: {
          title: 'Poängräknare',
          description: 'Noggrann poängräknare kommer snart',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        rankings: {
          title: 'Poängranking',
          description: 'Live-ranking för atleter kommer snart',
          backLabel: 'Tillbaka till snowboard parallell'
        },
        trends: {
          title: 'Poängtrender',
          description: 'Analysverktyg för poängtrender kommer snart',
          backLabel: 'Tillbaka till snowboard parallell'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Atletregister',
          description: 'Visa alla registrerade atletprofiler',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        rankings: {
          title: 'Atletranking',
          description: 'Heltäckande ranking baserad på poäng och resultat',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        stats: {
          title: 'Atletstatistik',
          description: 'Detaljerad statistik och visualiseringar',
          backLabel: 'Tillbaka till snowboard slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Tävlingsregler',
          description: 'Detaljerade tekniska tävlingsstandarder',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        'points-rules': {
          title: 'Poängregler',
          description: 'Läs mer om reglerna för poängberäkning',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Tekniska krav och certifiering av arenor',
          backLabel: 'Tillbaka till snowboard slopestyle'
        }
      },
      events: {
        register: {
          title: 'Onlineanmälan',
          description: 'Förenklat anmälningssystem kommer snart',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        results: {
          title: 'Resultat',
          description: 'Se resultat och poänguppdateringar i realtid',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        schedule: {
          title: 'Tävlingskalender',
          description: 'Visa kommande tävlingar',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        stats: {
          title: 'Tävlingsstatistik',
          description: 'Omfattande analysverktyg för tävlingsdata',
          backLabel: 'Tillbaka till snowboard slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Poängräknare',
          description: 'Noggrann poängräknare kommer snart',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        rankings: {
          title: 'Poängranking',
          description: 'Live-ranking för atleter kommer snart',
          backLabel: 'Tillbaka till snowboard slopestyle'
        },
        trends: {
          title: 'Poängtrender',
          description: 'Analysverktyg för poängtrender kommer snart',
          backLabel: 'Tillbaka till snowboard slopestyle'
        }
      }
    }
  },

  // Autentisering och behörigheter
  auth: {
    needsLogin: 'Inloggning krävs',
    loginToUnlock: 'Logga in för att låsa upp fler funktioner',
    comingSoon: 'Kommer snart',
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
      title: 'Kinesiska Skidpoäng System',
      titleEn: 'China Skiing Points System',
      subtitle: 'Auktoritativ · Professionell · Exakt plattform för skidpoänghantering',
      exploreDisciplines: 'Utforska Discipliner',
      freeRegister: 'Gratis Registrering',
      platformIntro: 'Förstahandsval för professionella atleter, tränare och evenemangsarrangörer • Certifierat av Idrottsministeriet'
    },
    features: {
      title: 'Plattformens Kärnfunktioner',
      platformIntro: {
        title: 'Om Plattformen',
        description: 'Lär dig om Kinas alpina skidpoängsystem'
      },
      memberRegister: {
        title: 'Medlemsregistrering',
        description: 'Registrera dig som plattformsmedlem för att se dina personliga poäng'
      },
      eventAnnouncement: {
        title: 'Tävlingsmeddelanden',
        description: 'Se de senaste tävlingslistorna och meddelandena'
      },
      pointsRules: {
        title: 'Poängregler',
        description: 'Läs om reglerna för poängberäkning i kinesisk alpin skidåkning'
      },
      competitionManagement: {
        title: 'Tävlingshantering',
        description: 'Hantera tävlingsinformation, resultatregistrering och statistik'
      },
      athleteProfiles: {
        title: 'Atletprofiler',
        description: 'Atletinformation och poänghistorik'
      },
      onlineRegistration: {
        title: 'Onlineanmälan',
        description: 'Enkel anmälan och avgiftshantering'
      },
      dataAnalysis: {
        title: 'Dataanalys',
        description: 'Djupgående dataanalys och visuella rapporter'
      }
    },
    stats: {
      title: 'Plattformsstatistik',
      subtitle: 'Realtidsdata och driftstatus',
      disciplines: { label: 'Skiddiscipliner', value: '15+', description: 'Alpin·Freeski·Snowboard' },
      pointsRules: { label: 'Poängregler', value: '100%', description: 'I enlighet med kinesiska standarder' },
      updateCycle: { label: 'Poänguppdatering', value: '7 Dagar', description: 'Veckovisa uppdateringar' },
      users: { label: 'Registrerade Användare', value: '1 200+', description: 'Atleter och tränare' }
    },
    news: {
      title: 'Senaste Nytt',
      pauseCarousel: 'Pausa Karusell',
      continueCarousel: 'Fortsätt Karusell'
    },
    latestResults: {
      title: 'Senaste Tävlingsresultat',
      subtitle: 'Tävlingsresultat och poängplaceringar i realtid',
      recentResults: 'Senaste Resultat',
      liveUpdate: 'Live Uppdatering',
      viewMore: 'Se Fler Tävlingar →'
    },
    rankings: {
      title: 'Poängtabell',
      updatedOn: 'Uppdaterad',
      points: 'Poäng',
      viewFullRankings: 'Se Fullständig Ranking →'
    },
    memberWelcome: {
      welcomeBack: 'Välkommen Tillbaka',
      accountStatus: 'Konto Aktivt',
      pendingReview: 'Väntar på Granskning',
      currentPoints: 'Nuvarande Poäng',
      systemPermissions: 'Systembehörigheter',
      personalCenter: 'Personligt Center',
      myPoints: 'Mina Poäng',
      adminPanel: 'Administrationspanel'
    },
    memberValue: {
      unlockFeatures: 'Lås Upp Alla Professionella Funktioner',
      registerToUnlock: 'Registrera dig som medlem för fullständig poänghantering och tävlingstjänster',
      pointsSystem: {
        title: 'Poängsystem',
        features: ['Personlig poängöversikt och historik', 'Realtidspoängtabell', 'Poängkalkylator', 'Trendanalys']
      },
      eventManagement: {
        title: 'Tävlingshantering',
        features: ['Se tävlingslista och kalender', 'Onlineanmälan', 'Realtidsresultat', 'Resultatnotiser']
      },
      professionalFeatures: {
        title: 'Professionella Funktioner',
        features: ['Personlig atletprofil', 'Detaljerade poängregler', 'Statistik och analys', 'Teknisk support']
      },
      registerUnlock: 'Registrera för att Låsa Upp'
    },
    about: {
      title: 'Om Plattformen',
      description1: 'Kinesiska Skidpoäng System är en omfattande tävlingshanteringsplattform byggd enligt standarderna från Vintersportcentret vid Idrottsministeriet. Den täcker alla discipliner inom alpin skidåkning, freeski och snowboard, och använder poängberäkningsalgoritmer på flera nivåer i enlighet med kinesiska standarder, och tillhandahåller auktoritativa och exakta datatjänster för kinesiska skidtävlingar.',
      description2: 'Vi är engagerade i att främja den digitala och standardiserade utvecklingen av kinesisk skidsport, och erbjuder moderna verktyg för datahantering, poängberäkning och resultatstatistik för atleter, tränare, arrangörer och domare, med fullständig täckning av big air, slopestyle, parallella discipliner och andra snösporter, för att höja den organisatoriska och tävlingsmässiga nivån inom kinesisk skidsport.',
      multiTierPoints: { title: 'Flernivå Poängsystem', description: 'Poängnivåer 360/240/120' },
      uSeries: { title: 'U-Serie Tävlingar', description: 'Full täckning U12/U15/U18' },
      officialCertification: { title: 'Officiell Certifiering', description: 'Vintersportcentrets standarder' },
      allDisciplines: { title: 'Alla Discipliner', description: 'Alpin·Freeski·Snowboard' }
    },
    systemFeatures: {
      title: 'Systemfunktioner',
      feature1: 'Kinesisk standard för alpina skidpoäng',
      feature2: 'Freeski/Snowboard 360/240/120 poängnivåsystem',
      feature3: 'Full täckning av Big Air, Slopestyle och parallella discipliner',
      feature4: 'Hantering av U12/U15/U18 ungdomsserier',
      feature5: 'Certifierat av Idrottsministeriets vintersportcenter',
      feature6: 'Tvärvetenskapliga poängplaceringar och datavisualisering'
    }
  }
};
