// Norwegian language pack - Norsk språkpakke
import type { TranslationKeys } from './zh';

export const no: Partial<TranslationKeys> = {
  // Felles
  common: {
    loading: 'Laster...',
    error: 'Feil',
    success: 'Vellykket',
    cancel: 'Avbryt',
    confirm: 'Bekreft',
    save: 'Lagre',
    edit: 'Rediger',
    delete: 'Slett',
    search: 'Søk',
    filter: 'Filter',
    export: 'Eksporter',
    import: 'Importer',
    back: 'Tilbake',
    next: 'Neste',
    previous: 'Forrige',
    submit: 'Send inn',
    reset: 'Tilbakestill',
    home: 'Hjem',
    language: 'Språk',
    login: 'Logg inn',
    logout: 'Logg ut',
    register: 'Registrer',
    profile: 'Profil',
    viewDetails: 'Vis detaljer',
    viewFullSchedule: 'Vis full timeplan →',
    viewFullRankings: 'Vis full rangering →',
    readMore: 'Les mer'
  },

  // Navigasjon
  navigation: {
    title: 'Kinesisk Skipoeng System',
    titleShort: 'CSPS',

    // Disiplinvelger
    disciplines: 'Disipliner',
    alpine: 'Alpint',
    snowboardSlopestyle: 'Snowboard Slopestyle',
    snowboardParallel: 'Snowboard Parallell',
    freestyleSlopestyle: 'Freeski Slopestyle',

    // Global navigasjon
    my: 'Min',
    docs: 'Dokumenter',
    about: 'Om',

    // Disiplin-nivå navigasjon
    points: 'Poeng',
    events: 'Konkurranser',
    athletes: 'Utøvere',

    // Undermenyer
    submenus: {
      // Poengstyring undermeny
      pointsCalculator: 'Kalkulator',
      pointsRankings: 'Rangeringer',
      pointsTrends: 'Trender',

      // Konkurransestyring undermeny
      eventsSchedule: 'Tidsplan',
      eventsRegister: 'Registrering',
      eventsResults: 'Resultater',
      eventsStats: 'Statistikk',
      resultsLive: 'Live Results',
      resultsImport: 'Import Results',
      resultsAnnouncement: 'Results Announcement',

      // Utøvere undermeny
      athletesList: 'Utøverliste',
      athletesProfile: 'Utøverprofil',
      athletesStats: 'Statistikk',

      // Docs undermeny
      docsPointsRules: 'Poengregler',
      docsCompetitionRules: 'Konkurranseregler',
      docsVenueStandards: 'Anleggsstandarder',
      docsGuide: 'Brukerveiledning',

      // Personlig senter undermeny
      myProfile: 'Personlig Senter',
      myPoints: 'Mine Poeng',
      myRegistrations: 'Mine Registreringer',
      myAthlete: 'Athlete Profile',
      myHistory: 'Results History',

      // More features
      moreFeatures: 'More'
    }
  },

  // Breadcrumb navigasjon
  breadcrumb: {
    home: 'Hjem',
    disciplines: 'Skidisipliner',
    alpine: 'Alpint',
    snowboardSlopestyle: 'Snowboard Slopestyle/Big Air',
    snowboardParallel: 'Snowboard Parallell',
    freeskiSlopestyle: 'Freeski Slopestyle/Big Air',
    points: 'Poengsenter',
    events: 'Konkurranser',
    my: 'Min Side',
    docs: 'Kunnskapsbase',
    about: 'Om Systemet'
  },

  // Alpint side
  alpine: {
    title: 'Alpint',
    subtitle: 'Alpine Skiing',
    projectLabel: 'Alpint',

    hero: {
      slide1: {
        title: '2024 Nasjonale Mesterskap Høydepunkter',
        subtitle: 'Opplev de strålende øyeblikkene av kinesisk alpint'
      },
      slide2: {
        title: 'Poengsystem Oppgradert',
        subtitle: 'Mer nøyaktig poengberegning basert på v4.0 regler'
      },
      slide3: {
        title: 'Vinter Treningsleir Påmelding',
        subtitle: 'Profesjonelt trenerteam for å forbedre ferdighetene dine'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Freeski Slopestyle side
  freestyleSlopestyle: {
    title: 'Freeski Slopestyle',
    subtitle: 'Freestyle Slopestyle',
    projectLabel: 'Freeski SS',

    hero: {
      slide1: {
        title: '2024 Nasjonale Freeski Slopestyle Mesterskap',
        subtitle: 'Opplev det ekstreme gjennombruddet av kinesisk freestyle skiing'
      },
      slide2: {
        title: '360 Poeng Trinnsystem',
        subtitle: 'Rettferdig vurderingsmekanisme basert på vanskelighetsgrad'
      },
      slide3: {
        title: 'U-Serie Ungdomsutviklingsprogram',
        subtitle: 'U12/U15/U18 talentkultiveringsssystem'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Snowboard Slopestyle side
  snowboardSlopestyle: {
    title: 'Snowboard Slopestyle',
    subtitle: 'Snowboard Slopestyle',
    projectLabel: 'Snowboard SS',

    hero: {
      slide1: {
        title: '2024 Nasjonale Snowboard Slopestyle Mesterskap',
        subtitle: 'Opplev de spennende øyeblikkene av kinesisk snowboarding'
      },
      slide2: {
        title: '360 Poeng Trinnsystem',
        subtitle: 'Poengberegningsregler basert på internasjonale standarder'
      },
      slide3: {
        title: 'U-Serie Ungdomstreningsprogram',
        subtitle: 'U12/U15/U18 tre-trinns kultiveringsssystem'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Snowboard Parallell side
  snowboardParallel: {
    title: 'Snowboard Parallell',
    subtitle: 'Snowboard Parallel',
    projectLabel: 'Snowboard Parallell',

    hero: {
      slide1: {
        title: '2024 Nasjonale Snowboard Parallell Mesterskap',
        subtitle: 'Perfekt kombinasjon av hastighet og ferdighet'
      },
      slide2: {
        title: 'Utslagssystem Poeng',
        subtitle: 'Rettferdig poengberegning basert på hode-mot-hode rangeringer'
      },
      slide3: {
        title: 'Elite Utøver Utviklingsprogram',
        subtitle: 'Forbedre racenivået og konkurrere i internasjonale arrangementer'
      }
    },

    quickAccess: {
      results: { title: 'Resultater', nameEn: 'Results' },
      rankings: { title: 'Rangeringer', nameEn: 'Rankings' },
      schedule: { title: 'Kalender', nameEn: 'Calendar' },
      videos: { title: 'Videoer', nameEn: 'Videos' },
      athletes: { title: 'Utøvere', nameEn: 'Athletes' },
      documents: { title: 'Dokumenter', nameEn: 'Documents' }
    },

    upcomingEvents: {
      title: 'Kommende'
    },

    latestNews: {
      title: 'Siste Nyheter'
    },

    topAthletes: {
      title: 'Rangeringer'
    }
  },

  // Språkvelger
  languageSelector: {
    title: 'Velg språk',
    languages: {
      zh: 'Kinesisk',
      en: 'Engelsk',
      ja: 'Japansk',
      ko: 'Koreansk',
      de: 'Tysk',
      fr: 'Fransk',
      it: 'Italiensk',
      ru: 'Russisk',
      no: 'Norsk',
      sv: 'Svensk',
      fi: 'Finsk',
      es: 'Spansk'
    }
  },

  // Kommer snart-komponent
  comingSoon: {
    title: 'Kommer snart',
    description: 'Denne funksjonen er under utvikling. Kom tilbake om litt.',
    backLabel: 'Tilbake til forsiden',
    learnMoreLabel: 'Les mer',
    progressLabel: 'Fremdrift',
    progressValue: '30%',
    eta: 'Estimert lansering: 2–4 uker',
    upcomingFeaturesTitle: 'Kommende funksjoner',
    upcomingFeatures: ['Oppdateringer i sanntid', 'Intelligent analyse', 'Personlige anbefalinger', 'Mobiloptimalisering']
  },

  // Dokumentasjonssenter
  docsPage: {
    hero: {
      title: 'Kunnskapsbank',
      description: 'Konkurranseregler, tekniske standarder og plattformveiledninger'
    },
    viewDocLabel: 'Vis dokument',
    categories: {
      pointsRules: {
        title: 'Poengregler',
        description: 'Detaljert gjennomgang av det kinesiske poengsystemet',
        topics: ['Poengformler', 'Konkurransekoeffisienter', 'Sanksjonsmekanisme', 'BL/NL-poengtabeller']
      },
      competitionRules: {
        title: 'Tekniske konkurranseregler',
        description: 'Regler for gjennomføring og dommerstandarder',
        topics: ['Konkurranseflyt', 'Dommerregler', 'Tidtakingssystemer', 'Klageprosess']
      },
      venueStandards: {
        title: 'Arenastandarder',
        description: 'Krav til anlegg og sikkerhet',
        topics: ['Arenastandarder', 'Utstyrskrav', 'Sikkerhetsretningslinjer', 'Sertifiseringsprosess']
      },
      fisRules: {
        title: 'FIS-regelverk',
        description: 'Regler fra det internasjonale skiforbundet',
        topics: ['FIS-poengregler', 'ICR-regelverk', 'Internasjonale standarder', 'Tospråklige referanser']
      },
      guide: {
        title: 'Plattformveiledning',
        description: 'Funksjonsguider og ofte stilte spørsmål',
        topics: ['Registreringsprosess', 'Påmeldingsguide', 'Poengoppslag', 'FAQ']
      }
    },
    popular: {
      title: 'Populære dokumenter',
      viewsLabel: 'visninger',
      items: {
        alpineRulesV4: { title: 'Kinesisk alpin-poengregelverk v4.0', category: 'Poengregler' },
        seasonGrading: { title: 'Konkurranseklassifisering 2024-2025', category: 'Tekniske regler' },
        youthSeries: { title: 'U-serien ungdomsprogram', category: 'Tekniske regler' },
        fisPointsGuide: { title: 'Veiledning for FIS-poengberegning', category: 'FIS-regler' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Kinesisk alpint regelbibliotek',
      description: 'Se det forenklede regelverket for poengberegning, konkurranseforvaltning og ungdomsutvikling.',
      highlights: [
        { icon: 'award', text: 'Offisiell standard' },
        { icon: 'target', text: 'Forenklet beregning' },
        { icon: 'users', text: 'Utvidet ungdomssystem' }
      ]
    },
    headings: {
      ruleModules: 'Regelmoduler'
    },
    toc: {
      toggleTitle: 'Vis/skjul innholdsfortegnelse',
      title: 'Sidens innhold',
      download: 'Last ned PDF-versjon',
      items: {
        coreFormula: 'Grunnformel',
        ruleModules: 'Regelmoduler',
        coreFeatures: 'Nøkkelpunkter',
        quickLinks: 'Hurtiglenker',
        upgradeInfo: 'Oppgraderingsinformasjon',
        importantNotice: 'Viktige merknader'
      }
    },
    formula: {
      title: 'Grunnformel',
      expression: 'Sluttpoeng = (Grunnpoeng + Straffepoeng) × Konkurransefaktor',
      description: 'Sammenlignet med versjon 2.0 er komplekse faktorer fjernet. Den tredelte metoden øker effektiviteten og innsynet.',
      copyButton: 'Kopier formel',
      copySuccess: 'Kopiert til utklippstavlen!',
      calculatorButton: 'Åpne kalkulator'
    },
    ruleModules: {
      points: {
        title: 'Kinesiske poengregler',
        description: 'Et forenklet poengsystem basert på tre steg.',
        features: ['Tredelt beregningsformel', 'Tre nivåer A/B/C', 'Utvidede ungdomsklasser', 'Bedre åpenhet'],
        linkLabel: 'Vis detaljer'
      },
      competition: {
        title: 'Konkurranseveiledning',
        description: 'Forstå de oppdaterte konkurransereglene og ungdomssystemet med en praktisk veiledning.',
        features: ['Oversikt over grener', 'Aldersinndeling', 'Deltakerflyt', 'Sikkerhets- og tekniske standarder'],
        linkLabel: 'Vis detaljer'
      },
      documents: {
        title: 'Poengdokumentasjon',
        description: 'Få tilgang til dokumenter og verktøy for det forenklede poengsystemet.',
        features: ['Detaljerte forklaringer', 'Beskrivelse av formelkomponenter', 'Nettbasert kalkulator', 'PDF-nedlastinger'],
        linkLabel: 'Vis detaljer'
      }
    },
    v4Features: {
      title: 'Nøkkelpunkter',
      items: {
        simplified: {
          title: 'Forenklet beregning',
          description: 'Fjerner komplekse kvalitets-, deltaker- og tilleggspoeng.'
        },
        tiers: {
          title: 'Tre nivåer',
          description: 'Kategorier A (1,0), B (0,6) og C (0,3) for tydelig struktur.'
        },
        youth: {
          title: 'Utvidet ungdom',
          description: 'Målrettet støtte til U15–U18.'
        },
        efficiency: {
          title: 'Effektivt og transparent',
          description: 'Tre-stegs prosess som forbedrer tempo og klarhet.'
        }
      }
    },
    quickLinks: {
      title: 'Hurtiglenker',
      items: {
        calculator: { label: 'Poengkalkulator' },
        rankings: { label: 'Poengrangeringsliste' },
        data: { label: 'Konkurransedata' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Oppgraderingsinformasjon',
      improvements: {
        title: 'Viktige forbedringer',
        items: ['Forenklet formel uten komplekse faktorer', 'Tredelt konkurransesystem', 'Utvidede ungdomskategorier', 'Økt åpenhet og effektivitet']
      },
      advantages: {
        title: 'Tekniske fordeler',
        items: ['Tre-stegs beregning som er enkel å ta i bruk', 'Standardisert styring i tråd med internasjonale normer', 'Digitale verktøy og nettstøtte', 'Åpent og rettferdig konkurransemiljø']
      }
    },
    importantNotice: {
      title: 'Viktige merknader',
      version: {
        title: 'Regelversjon',
        items: ['Gjeldende versjon: siste utgave', 'Gjelder sesongen 2024–2025', 'Omfang: nasjonale konkurranser i Kina', 'Oppdateringssyklus: ved behov']
      },
      usage: {
        title: 'Brukstips',
        items: ['Start med oversikten over poengreglene', 'Kontroller resultater med nettbasert kalkulator', 'Følg med på ungdomstiltakene', 'Hold deg oppdatert på regelendringer']
      },
      support: 'Dette regelverket kombinerer internasjonal erfaring med kinesiske behov for å støtte en rettferdig og effektiv utvikling av alpint. Kontakt oss via oppgitte kanaler dersom du har spørsmål eller innspill.'
    }
  },

  // Sidetekster (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Utøveroversikt',
          description: 'Se alle registrerte utøverprofiler',
          backLabel: 'Tilbake til alpint'
        },
        rankings: {
          title: 'Utøversranking',
          description: 'Helhetlig ranking basert på poeng og resultater',
          backLabel: 'Tilbake til alpint'
        },
        stats: {
          title: 'Utøverstatistikk',
          description: 'Detaljerte statistikker og visualiseringer',
          backLabel: 'Tilbake til alpint'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Konkurranseregler',
          description: 'Detaljerte tekniske konkurransestandarder',
          backLabel: 'Tilbake til alpint'
        },
        'points-rules': {
          title: 'Poengregler',
          description: 'Utforsk poengreglene v4.0 for alpint',
          backLabel: 'Tilbake til alpint'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Standarder og sertifiseringskrav for alpinanlegg',
          backLabel: 'Tilbake til alpint'
        }
      },
      events: {
        register: {
          title: 'Online påmelding',
          description: 'Forenklet påmeldingssystem kommer snart',
          backLabel: 'Tilbake til alpint'
        },
        results: {
          title: 'Resultater',
          description: 'Se resultater og poengoppdateringer i sanntid',
          backLabel: 'Tilbake til alpint'
        },
        schedule: {
          title: 'Terminliste',
          description: 'Se kommende alpinarrangementer',
          backLabel: 'Tilbake til alpint'
        },
        stats: {
          title: 'Arrangementsstatistikk',
          description: 'Omfattende analyseverktøy for arrangementdata',
          backLabel: 'Tilbake til alpint'
        }
      },
      points: {
        calculator: {
          title: 'Poengkalkulator',
          description: 'Presis v4.0 poengkalkulator kommer snart',
          backLabel: 'Tilbake til alpint'
        },
        rankings: {
          title: 'Poengranking',
          description: 'Live poengoversikt kommer snart',
          backLabel: 'Tilbake til alpint'
        },
        trends: {
          title: 'Poengtrender',
          description: 'Verktøy for poengtrendanalyse kommer snart',
          backLabel: 'Tilbake til alpint'
        }
      }
    },
    rules: {
      competition: {
        title: 'Konkurranseveiledning',
        description: 'Denne siden utarbeides nå. Kom tilbake snart.',
        backLabel: 'Tilbake til regeloversikten'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Utøveroversikt',
          description: 'Se alle registrerte utøverprofiler',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        rankings: {
          title: 'Utøversranking',
          description: 'Helhetlig ranking basert på poeng og resultater',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        stats: {
          title: 'Utøverstatistikk',
          description: 'Detaljerte statistikker og visualiseringer',
          backLabel: 'Tilbake til freestyle slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Konkurranseregler',
          description: 'Detaljerte tekniske konkurransestandarder',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        'points-rules': {
          title: 'Poengregler',
          description: 'Les mer om reglene for poengberegning',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Tekniske krav og sertifisering av arenaer',
          backLabel: 'Tilbake til freestyle slopestyle'
        }
      },
      events: {
        register: {
          title: 'Online påmelding',
          description: 'Forenklet påmeldingssystem kommer snart',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        results: {
          title: 'Resultater',
          description: 'Se resultater og poengoppdateringer i sanntid',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        schedule: {
          title: 'Terminliste',
          description: 'Se kommende arrangementer',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        stats: {
          title: 'Arrangementsstatistikk',
          description: 'Omfattende analyseverktøy for arrangementdata',
          backLabel: 'Tilbake til freestyle slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Poengkalkulator',
          description: 'Presis poengkalkulator kommer snart',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        rankings: {
          title: 'Poengranking',
          description: 'Live poengoversikt kommer snart',
          backLabel: 'Tilbake til freestyle slopestyle'
        },
        trends: {
          title: 'Poengtrender',
          description: 'Verktøy for poengtrendanalyse kommer snart',
          backLabel: 'Tilbake til freestyle slopestyle'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Utøveroversikt',
          description: 'Se alle registrerte utøverprofiler',
          backLabel: 'Tilbake til snowboard parallell'
        },
        rankings: {
          title: 'Utøversranking',
          description: 'Helhetlig ranking basert på poeng og resultater',
          backLabel: 'Tilbake til snowboard parallell'
        },
        stats: {
          title: 'Utøverstatistikk',
          description: 'Detaljerte statistikker og visualiseringer',
          backLabel: 'Tilbake til snowboard parallell'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Konkurranseregler',
          description: 'Detaljerte tekniske konkurransestandarder',
          backLabel: 'Tilbake til snowboard parallell'
        },
        'points-rules': {
          title: 'Poengregler',
          description: 'Les mer om reglene for poengberegning',
          backLabel: 'Tilbake til snowboard parallell'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Tekniske krav og sertifisering av arenaer',
          backLabel: 'Tilbake til snowboard parallell'
        }
      },
      events: {
        register: {
          title: 'Online påmelding',
          description: 'Forenklet påmeldingssystem kommer snart',
          backLabel: 'Tilbake til snowboard parallell'
        },
        results: {
          title: 'Resultater',
          description: 'Se resultater og poengoppdateringer i sanntid',
          backLabel: 'Tilbake til snowboard parallell'
        },
        schedule: {
          title: 'Terminliste',
          description: 'Se kommende arrangementer',
          backLabel: 'Tilbake til snowboard parallell'
        },
        stats: {
          title: 'Arrangementsstatistikk',
          description: 'Omfattende analyseverktøy for arrangementdata',
          backLabel: 'Tilbake til snowboard parallell'
        }
      },
      points: {
        calculator: {
          title: 'Poengkalkulator',
          description: 'Presis poengkalkulator kommer snart',
          backLabel: 'Tilbake til snowboard parallell'
        },
        rankings: {
          title: 'Poengranking',
          description: 'Live poengoversikt kommer snart',
          backLabel: 'Tilbake til snowboard parallell'
        },
        trends: {
          title: 'Poengtrender',
          description: 'Verktøy for poengtrendanalyse kommer snart',
          backLabel: 'Tilbake til snowboard parallell'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Utøveroversikt',
          description: 'Se alle registrerte utøverprofiler',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        rankings: {
          title: 'Utøversranking',
          description: 'Helhetlig ranking basert på poeng og resultater',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        stats: {
          title: 'Utøverstatistikk',
          description: 'Detaljerte statistikker og visualiseringer',
          backLabel: 'Tilbake til snowboard slopestyle'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Konkurranseregler',
          description: 'Detaljerte tekniske konkurransestandarder',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        'points-rules': {
          title: 'Poengregler',
          description: 'Les mer om reglene for poengberegning',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        'venue-standards': {
          title: 'Arenastandarder',
          description: 'Tekniske krav og sertifisering av arenaer',
          backLabel: 'Tilbake til snowboard slopestyle'
        }
      },
      events: {
        register: {
          title: 'Online påmelding',
          description: 'Forenklet påmeldingssystem kommer snart',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        results: {
          title: 'Resultater',
          description: 'Se resultater og poengoppdateringer i sanntid',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        schedule: {
          title: 'Terminliste',
          description: 'Se kommende arrangementer',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        stats: {
          title: 'Arrangementsstatistikk',
          description: 'Omfattende analyseverktøy for arrangementdata',
          backLabel: 'Tilbake til snowboard slopestyle'
        }
      },
      points: {
        calculator: {
          title: 'Poengkalkulator',
          description: 'Presis poengkalkulator kommer snart',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        rankings: {
          title: 'Poengranking',
          description: 'Live poengoversikt kommer snart',
          backLabel: 'Tilbake til snowboard slopestyle'
        },
        trends: {
          title: 'Poengtrender',
          description: 'Verktøy for poengtrendanalyse kommer snart',
          backLabel: 'Tilbake til snowboard slopestyle'
        }
      }
    }
  },

  // Autentisering og tillatelser
  auth: {
    needsLogin: 'Innlogging kreves',
    loginToUnlock: 'Logg inn for å låse opp flere funksjoner',
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
