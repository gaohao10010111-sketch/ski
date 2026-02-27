// Finnish language pack - Suomalainen kielipaketti
import type { PartialTranslationKeys } from './zh';

export const fi: PartialTranslationKeys = {
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
      resultsLive: 'Livetulokset',
      resultsImport: 'Tuo tulokset',
      resultsAnnouncement: 'Tulosten julkaisu',

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
      myAthlete: 'Urheilijan profiili',
      myHistory: 'Tuloshistoria',

      // Lisää ominaisuuksia
      moreFeatures: 'Lisää'
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
        subtitle: 'U11/U15/U18 lahjakkuuksien kehitysjärjestelmä'
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
        subtitle: 'U11/U15/U18 kolmiportainen kehitysjärjestelmä'
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
    languages: {
      zh: 'Kiina',
      en: 'Englanti',
      ja: 'Japani',
      ko: 'Korea',
      de: 'Saksa',
      fr: 'Ranska',
      it: 'Italia',
      ru: 'Venäjä',
      no: 'Norja',
      sv: 'Ruotsi',
      fi: 'Suomi',
      es: 'Espanja'
    }
  },

  // Tulossa pian -komponentti
  comingSoon: {
    title: 'Tulossa pian',
    description: 'Tämä toiminto on parhaillaan kehityksessä. Palaa pian uudelleen.',
    backLabel: 'Takaisin etusivulle',
    learnMoreLabel: 'Lisätietoja',
    progressLabel: 'Kehityksen tila',
    progressValue: '30%',
    eta: 'Arvioitu julkaisu: 2–4 viikkoa',
    upcomingFeaturesTitle: 'Tulevat ominaisuudet',
    upcomingFeatures: ['Reaaliaikaiset päivitykset', 'Älykäs analytiikka', 'Personoidut suositukset', 'Mobiilioptimointi']
  },

  // Dokumenttikeskus
  docsPage: {
    hero: {
      title: 'Tietopankki',
      description: 'Kilpailusäännöt, tekniset standardit ja alustankäyttöohjeet'
    },
    viewDocLabel: 'Näytä dokumentti',
    categories: {
      pointsRules: {
        title: 'Pistesäännöt',
        description: 'Yksityiskohtainen opas Kiinan pistesäännöistä',
        topics: ['Pistelaskukaavat', 'Kilpailuluokkien kertoimet', 'Sanktiomekanismi', 'BL/NL pistetaulukot']
      },
      competitionRules: {
        title: 'Kilpailusäännöt',
        description: 'Kilpailujen tekniset säännöt ja tuomaristandardit',
        topics: ['Kilpailun kulku', 'Tuomarointisäännöt', 'Ajastinjärjestelmät', 'Valitusprosessi']
      },
      venueStandards: {
        title: 'Ratastandardit',
        description: 'Alustavaatimukset ja turvallisuusohjeet',
        topics: ['Ratastandardit', 'Laitteistovaatimukset', 'Turvallisuusohjeet', 'Sertifiointiprosessi']
      },
      fisRules: {
        title: 'FIS-säännöt',
        description: 'Kansainvälisen hiihtoliiton sääntökokoelma',
        topics: ['FIS pistesäännöt', 'ICR kilpailusäännöt', 'Kansainväliset standardit', 'Kaksikieliset viitteet']
      },
      guide: {
        title: 'Alustan käyttöopas',
        description: 'Toiminto-oppaat ja usein kysytyt kysymykset',
        topics: ['Rekisteröityminen', 'Ilmoittautumisohje', 'Pisteiden tarkastus', 'UKK']
      }
    },
    popular: {
      title: 'Suositut dokumentit',
      viewsLabel: 'katselua',
      items: {
        alpineRulesV4: { title: 'Kiina alppipistesäännöt v4.0', category: 'Pistesäännöt' },
        seasonGrading: { title: 'Kauden 2025-2026 kilpailuluokitus', category: 'Kilpailusäännöt' },
        youthSeries: { title: 'U-sarjan nuorisokilpailujen suunnitelma', category: 'Kilpailusäännöt' },
        fisPointsGuide: { title: 'FIS-pisteiden laskentaopas', category: 'FIS-säännöt' }
      }
    }
  },

  rulesPage: {
    header: {
      title: 'Kiinalaisen alppihiihdon sääntökirjasto',
      description: 'Tutustu yksinkertaistettuun sääntöjärjestelmään: pisteiden laskenta, kilpailujen hallinta ja junioritoiminta.',
      highlights: [
        { icon: 'award', text: 'Virallinen standardi' },
        { icon: 'target', text: 'Yksinkertaistettu laskenta' },
        { icon: 'users', text: 'Laajennettu nuorisojärjestelmä' }
      ]
    },
    headings: {
      ruleModules: 'Sääntömoduulit'
    },
    toc: {
      toggleTitle: 'Näytä/piilota sisällysluettelo',
      title: 'Sivun sisällysluettelo',
      download: 'Lataa PDF-versio',
      items: {
        coreFormula: 'Pääkaava',
        ruleModules: 'Sääntömoduulit',
        coreFeatures: 'Keskeiset ominaisuudet',
        quickLinks: 'Pikalinkit',
        upgradeInfo: 'Päivitystiedot',
        importantNotice: 'Tärkeät tiedot'
      }
    },
    formula: {
      title: 'Pääkaava',
      expression: 'Loppupisteet = (Peruspisteet + Rangaistuspisteet) × Kilpailukerroin',
      description: 'Verrattuna versioon 2.0 monimutkaiset tekijät on poistettu. Kolmiportainen malli parantaa tehokkuutta ja läpinäkyvyyttä.',
      copyButton: 'Kopioi kaava',
      copySuccess: 'Kopioitu leikepöydälle!',
      calculatorButton: 'Avaa laskuri'
    },
    ruleModules: {
      points: {
        title: 'Kiina piste­säännöt',
        description: 'Kolmiportaiseen malliin perustuva yksinkertaistettu pistejärjestelmä.',
        features: ['Kolmiportainen laskentakaava', 'A/B/C -tasoinen kilpailurakenne', 'Laajennetut nuorisoluokat', 'Parempi läpinäkyvyys'],
        linkLabel: 'Näytä tiedot'
      },
      competition: {
        title: 'Kilpailuopas',
        description: 'Ymmärrä päivitetyt kilpailusäännöt ja laajennettu nuorisojärjestelmä käytännön ohjeiden avulla.',
        features: ['Lajien yleiskuva', 'Ikäluokitus', 'Osallistumisprosessi', 'Turvallisuus- ja tekniikkastandardit'],
        linkLabel: 'Näytä tiedot'
      },
      documents: {
        title: 'Piste­dokumentaatio',
        description: 'Kaikki yksinkertaistetun pistejärjestelmän materiaalit ja työkalut yhdessä paikassa.',
        features: ['Yksityiskohtaiset selitykset', 'Kaavan osien kuvaus', 'Online-laskuri', 'PDF-lataukset'],
        linkLabel: 'Näytä tiedot'
      }
    },
    v4Features: {
      title: 'Keskeiset ominaisuudet',
      items: {
        simplified: {
          title: 'Yksinkertaistettu laskenta',
          description: 'Poistaa laatu-, osallistuja- ja lisäpisteiden kaltaiset monimutkaiset tekijät.'
        },
        tiers: {
          title: 'Kolmiportainen rakenne',
          description: 'A (1.0), B (0.6) ja C (0.3) -tasot helpottavat hallintaa.'
        },
        youth: {
          title: 'Nuorten laajennus',
          description: 'Kohdennettu tuki U15–U18 -ikäluokille.'
        },
        efficiency: {
          title: 'Tehokas ja läpinäkyvä',
          description: 'Kolmiportainen prosessi nopeuttaa ja selkeyttää toimintaa.'
        }
      }
    },
    quickLinks: {
      title: 'Pikalinkit',
      items: {
        calculator: { label: 'Pistelaskuri' },
        rankings: { label: 'Pistelista' },
        data: { label: 'Kilpailudatan hallinta' },
        association: { label: 'China Ski Association', external: true }
      }
    },
    upgradeInfo: {
      title: 'Päivitystiedot',
      improvements: {
        title: 'Keskeiset parannukset',
        items: ['Yksinkertaistettu kaava ilman monimutkaisia tekijöitä', 'Kolmitasoinen kilpailurakenne', 'Laajennetut nuorisoluokat', 'Parempi läpinäkyvyys ja tehokkuus']
      },
      advantages: {
        title: 'Tekniset edut',
        items: ['Kolmiportainen laskenta on helppo ottaa käyttöön', 'Standardoitu hallinta kansainvälisten normien mukaan', 'Digitaaliset työkalut ja verkkotuki', 'Avoin ja reilu kilpailuympäristö']
      }
    },
    importantNotice: {
      title: 'Tärkeät tiedot',
      version: {
        title: 'Sääntöversio',
        items: ['Nykyinen versio: uusin julkaisu', 'Voimassa kaudella 2024–2025', 'Soveltuu Kiinan kotimaisiin kilpailuihin', 'Päivityssykli: tilanteen mukaan']
      },
      usage: {
        title: 'Käyttövinkit',
        items: ['Aloita piste­säännön yleiskatsauksesta', 'Tarkista tulokset online-laskurilla', 'Seuraa nuorisopoliitikkoja aktiivisesti', 'Pysy ajan tasalla sääntöpäivityksistä']
      },
      support: 'Säännöstö yhdistää kansainvälisen kokemuksen ja Kiinan tarpeet tarjoten oikeudenmukaiset ja tehokkaat puitteet alppihiihdon kehitykselle. Kysymysten tai ehdotusten osalta ota yhteyttä ilmoitettuihin kanaviin.'
    }
  },

  // Sivutekstit (Coming Soon)
  pages: {
    alpine: {
      athletes: {
        list: {
          title: 'Urheilijarekisteri',
          description: 'Selaa kaikkia rekisteröityjä urheilijaprofiileja',
          backLabel: 'Takaisin alppihiihtoon'
        },
        rankings: {
          title: 'Urheilijoiden ranking',
          description: 'Kattava ranking pisteiden ja tulosten perusteella',
          backLabel: 'Takaisin alppihiihtoon'
        },
        stats: {
          title: 'Urheilijatiedot',
          description: 'Yksityiskohtaiset urheilijatilastot ja visualisoinnit',
          backLabel: 'Takaisin alppihiihtoon'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Kilpailusäännöt',
          description: 'Yksityiskohtaiset tekniset kilpailustandardit',
          backLabel: 'Takaisin alppihiihtoon'
        },
        'points-rules': {
          title: 'Pistesäännöt',
          description: 'Tutustu alppihiihdon v4.0 pisteytyssääntöihin',
          backLabel: 'Takaisin alppihiihtoon'
        },
        'venue-standards': {
          title: 'Ratastandardit',
          description: 'Alppihiihtoratojen standardit ja sertifiointivaatimukset',
          backLabel: 'Takaisin alppihiihtoon'
        }
      },
      events: {
        register: {
          title: 'Verkkoilmoittautuminen',
          description: 'Helppokäyttöinen ilmoittautumisjärjestelmä tulossa pian',
          backLabel: 'Takaisin alppihiihtoon'
        },
        results: {
          title: 'Tuloshaku',
          description: 'Tarkastele kilpailutuloksia ja pistepäivityksiä reaaliajassa',
          backLabel: 'Takaisin alppihiihtoon'
        },
        schedule: {
          title: 'Kilpailukalenteri',
          description: 'Näe tulevat alppihiihtotapahtumat',
          backLabel: 'Takaisin alppihiihtoon'
        },
        stats: {
          title: 'Tapahtumatilastot',
          description: 'Laaja analytiikkapaketti tapahtumadatalle',
          backLabel: 'Takaisin alppihiihtoon'
        }
      },
      points: {
        calculator: {
          title: 'Pistelaskuri',
          description: 'Tarkka v4.0 pistelaskuri tulossa pian',
          backLabel: 'Takaisin alppihiihtoon'
        },
        rankings: {
          title: 'Pisteranking',
          description: 'Reaaliaikainen ranking tulossa pian',
          backLabel: 'Takaisin alppihiihtoon'
        },
        trends: {
          title: 'Pisteiden trendit',
          description: 'Pistetrendien visualisointityökalut tulossa pian',
          backLabel: 'Takaisin alppihiihtoon'
        }
      }
    },
    rules: {
      competition: {
        title: 'Kilpailuopas',
        description: 'Sivu on parhaillaan työn alla. Palaa pian uudelleen.',
        backLabel: 'Takaisin sääntöihin'
      }
    },
    'freestyle-slopestyle': {
      athletes: {
        list: {
          title: 'Urheilijarekisteri',
          description: 'Selaa kaikkia rekisteröityjä urheilijaprofiileja',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        rankings: {
          title: 'Urheilijoiden ranking',
          description: 'Kattava ranking pisteiden ja tulosten perusteella',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        stats: {
          title: 'Urheilijatiedot',
          description: 'Yksityiskohtaiset urheilijatilastot ja visualisoinnit',
          backLabel: 'Takaisin freestyle slopestyleen'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Kilpailusäännöt',
          description: 'Yksityiskohtaiset tekniset kilpailustandardit',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        'points-rules': {
          title: 'Pistesäännöt',
          description: 'Tutustu pisteiden laskentasääntöihin',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        'venue-standards': {
          title: 'Ratastandardit',
          description: 'Ratojen tekniset standardit ja sertifiointivaatimukset',
          backLabel: 'Takaisin freestyle slopestyleen'
        }
      },
      events: {
        register: {
          title: 'Verkkoilmoittautuminen',
          description: 'Helppokäyttöinen ilmoittautumisjärjestelmä tulossa pian',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        results: {
          title: 'Tuloshaku',
          description: 'Tarkastele kilpailutuloksia ja pistepäivityksiä reaaliajassa',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        schedule: {
          title: 'Kilpailukalenteri',
          description: 'Näe tulevien kilpailujen aikataulu',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        stats: {
          title: 'Tapahtumatilastot',
          description: 'Laaja analytiikkapaketti tapahtumadatalle',
          backLabel: 'Takaisin freestyle slopestyleen'
        }
      },
      points: {
        calculator: {
          title: 'Pistelaskuri',
          description: 'Tarkka pistelaskuri tulossa pian',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        rankings: {
          title: 'Pisteranking',
          description: 'Reaaliaikainen ranking tulossa pian',
          backLabel: 'Takaisin freestyle slopestyleen'
        },
        trends: {
          title: 'Pisteiden trendit',
          description: 'Pistetrendien analyysityökalut tulossa pian',
          backLabel: 'Takaisin freestyle slopestyleen'
        }
      }
    },
    'snowboard-parallel': {
      athletes: {
        list: {
          title: 'Urheilijarekisteri',
          description: 'Selaa kaikkia rekisteröityjä urheilijaprofiileja',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        rankings: {
          title: 'Urheilijoiden ranking',
          description: 'Kattava ranking pisteiden ja tulosten perusteella',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        stats: {
          title: 'Urheilijatiedot',
          description: 'Yksityiskohtaiset urheilijatilastot ja visualisoinnit',
          backLabel: 'Takaisin snowboard paralleeliin'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Kilpailusäännöt',
          description: 'Yksityiskohtaiset tekniset kilpailustandardit',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        'points-rules': {
          title: 'Pistesäännöt',
          description: 'Tutustu pisteiden laskentasääntöihin',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        'venue-standards': {
          title: 'Ratastandardit',
          description: 'Ratojen tekniset standardit ja sertifiointivaatimukset',
          backLabel: 'Takaisin snowboard paralleeliin'
        }
      },
      events: {
        register: {
          title: 'Verkkoilmoittautuminen',
          description: 'Helppokäyttöinen ilmoittautumisjärjestelmä tulossa pian',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        results: {
          title: 'Tuloshaku',
          description: 'Tarkastele kilpailutuloksia ja pistepäivityksiä reaaliajassa',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        schedule: {
          title: 'Kilpailukalenteri',
          description: 'Näe tulevien kilpailujen aikataulu',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        stats: {
          title: 'Tapahtumatilastot',
          description: 'Laaja analytiikkapaketti tapahtumadatalle',
          backLabel: 'Takaisin snowboard paralleeliin'
        }
      },
      points: {
        calculator: {
          title: 'Pistelaskuri',
          description: 'Tarkka pistelaskuri tulossa pian',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        rankings: {
          title: 'Pisteranking',
          description: 'Reaaliaikainen ranking tulossa pian',
          backLabel: 'Takaisin snowboard paralleeliin'
        },
        trends: {
          title: 'Pisteiden trendit',
          description: 'Pistetrendien analyysityökalut tulossa pian',
          backLabel: 'Takaisin snowboard paralleeliin'
        }
      }
    },
    'snowboard-slopestyle': {
      athletes: {
        list: {
          title: 'Urheilijarekisteri',
          description: 'Selaa kaikkia rekisteröityjä urheilijaprofiileja',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        rankings: {
          title: 'Urheilijoiden ranking',
          description: 'Kattava ranking pisteiden ja tulosten perusteella',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        stats: {
          title: 'Urheilijatiedot',
          description: 'Yksityiskohtaiset urheilijatilastot ja visualisoinnit',
          backLabel: 'Takaisin snowboard slopestyleen'
        }
      },
      docs: {
        'competition-rules': {
          title: 'Kilpailusäännöt',
          description: 'Yksityiskohtaiset tekniset kilpailustandardit',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        'points-rules': {
          title: 'Pistesäännöt',
          description: 'Tutustu pisteiden laskentasääntöihin',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        'venue-standards': {
          title: 'Ratastandardit',
          description: 'Ratojen tekniset standardit ja sertifiointivaatimukset',
          backLabel: 'Takaisin snowboard slopestyleen'
        }
      },
      events: {
        register: {
          title: 'Verkkoilmoittautuminen',
          description: 'Helppokäyttöinen ilmoittautumisjärjestelmä tulossa pian',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        results: {
          title: 'Tuloshaku',
          description: 'Tarkastele kilpailutuloksia ja pistepäivityksiä reaaliajassa',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        schedule: {
          title: 'Kilpailukalenteri',
          description: 'Näe tulevien kilpailujen aikataulu',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        stats: {
          title: 'Tapahtumatilastot',
          description: 'Laaja analytiikkapaketti tapahtumadatalle',
          backLabel: 'Takaisin snowboard slopestyleen'
        }
      },
      points: {
        calculator: {
          title: 'Pistelaskuri',
          description: 'Tarkka pistelaskuri tulossa pian',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        rankings: {
          title: 'Pisteranking',
          description: 'Reaaliaikainen ranking tulossa pian',
          backLabel: 'Takaisin snowboard slopestyleen'
        },
        trends: {
          title: 'Pisteiden trendit',
          description: 'Pistetrendien analyysityökalut tulossa pian',
          backLabel: 'Takaisin snowboard slopestyleen'
        }
      }
    }
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
      title: 'Kiinalainen Hiihtopistejärjestelmä',
      titleEn: 'China Skiing Points System',
      subtitle: 'Auktoritatiivinen · Ammattitaitoinen · Tarkka hiihtopisteiden hallintaalusta',
      exploreDisciplines: 'Tutustu Lajeihin',
      freeRegister: 'Ilmainen Rekisteröinti',
      platformIntro: 'Ensisijainen alusta ammattilaisurheilijoille, valmentajille ja tapahtumajärjestäjille • Urheiluministeriön sertifioima'
    },
    features: {
      title: 'Alustan Keskeiset Ominaisuudet',
      platformIntro: {
        title: 'Tietoa Alustasta',
        description: 'Tutustu Kiinan alppihiihtopistejärjestelmään'
      },
      memberRegister: {
        title: 'Jäsenrekisteröinti',
        description: 'Rekisteröidy jäseneksi nähdäksesi henkilökohtaiset pisteesi'
      },
      eventAnnouncement: {
        title: 'Kilpailuilmoitukset',
        description: 'Katso uusimmat kilpailukalenterit ja ilmoitukset'
      },
      pointsRules: {
        title: 'Pistesäännöt',
        description: 'Tutustu Kiinan alppihiihdon pistelaskentasääntöihin'
      },
      competitionManagement: {
        title: 'Kilpailuhallinta',
        description: 'Hallinnoi kilpailutietoja, tulosten syöttöä ja tilastoja'
      },
      athleteProfiles: {
        title: 'Urheilijaprofilit',
        description: 'Urheilijoiden tiedot ja pistehistoria'
      },
      onlineRegistration: {
        title: 'Verkkoilmoittautuminen',
        description: 'Helppo ilmoittautuminen ja maksujenhallinta'
      },
      dataAnalysis: {
        title: 'Data-analyysi',
        description: 'Syvällinen data-analyysi ja visuaaliset raportit'
      }
    },
    stats: {
      title: 'Alustan Tilastot',
      subtitle: 'Reaaliaikainen järjestelmädata ja toimintatila',
      disciplines: { label: 'Hiihtolajit', value: '15+', description: 'Alppihiihto·Freeski·Lumilautailu' },
      pointsRules: { label: 'Pistesäännöt', value: '100%', description: 'Kiinan standardien mukainen' },
      updateCycle: { label: 'Pistepäivitys', value: '7 Päivää', description: 'Viikottaiset päivitykset' },
      users: { label: 'Rekisteröityneet', value: '1 200+', description: 'Urheilijat ja valmentajat' }
    },
    news: {
      title: 'Uusimmat Uutiset',
      pauseCarousel: 'Keskeytä Karuselli',
      continueCarousel: 'Jatka Karusellia'
    },
    latestResults: {
      title: 'Uusimmat Kilpailutulokset',
      subtitle: 'Reaaliaikaiset kilpailutulokset ja pistesijoitukset',
      recentResults: 'Viimeisimmät Tulokset',
      liveUpdate: 'Live-päivitys',
      viewMore: 'Katso Lisää Kilpailuja →'
    },
    rankings: {
      title: 'Pistetaulukko',
      updatedOn: 'Päivitetty',
      points: 'Pisteet',
      viewFullRankings: 'Näytä Koko Ranking →'
    },
    memberWelcome: {
      welcomeBack: 'Tervetuloa Takaisin',
      accountStatus: 'Tili Aktiivinen',
      pendingReview: 'Odottaa Tarkistusta',
      currentPoints: 'Nykyiset Pisteet',
      systemPermissions: 'Järjestelmäoikeudet',
      personalCenter: 'Henkilökohtainen Keskus',
      myPoints: 'Omat Pisteet',
      adminPanel: 'Hallintapaneeli'
    },
    memberValue: {
      unlockFeatures: 'Avaa Kaikki Ammattiominaisuudet',
      registerToUnlock: 'Rekisteröidy jäseneksi nauttiaksesi täydellisestä pisteidenhallinnasta ja kilpailupalveluista',
      pointsSystem: {
        title: 'Pistejärjestelmä',
        features: ['Henkilökohtainen pistekysely ja historian seuranta', 'Reaaliaikainen pistetaulukko', 'Pistelaskuri', 'Trendianalyysi']
      },
      eventManagement: {
        title: 'Tapahtumahallinta',
        features: ['Näytä kilpailulista ja kalenteri', 'Verkkoilmoittautuminen', 'Reaaliaikaiset tulokset', 'Tulosilmoitukset']
      },
      professionalFeatures: {
        title: 'Ammattiominaisuudet',
        features: ['Henkilökohtainen urheilijaprofiili', 'Yksityiskohtaiset pistesäännöt', 'Tilastot ja analyysi', 'Tekninen tuki']
      },
      registerUnlock: 'Rekisteröidy Avataksesi'
    },
    about: {
      title: 'Tietoa Alustasta',
      description1: 'Kiinalainen Hiihtopistejärjestelmä on kattava kilpailunhallinta-alusta, joka on rakennettu Urheiluministeriön Talviurheilukeskuksen standardien mukaan. Se kattaa kaikki alppihiihdon, freeskin ja lumilautailun lajit, käyttää monitasoisia pistelaskenta-algoritmeja Kiinan standardien mukaisesti ja tarjoaa auktoritatiivisia ja tarkkoja datapalveluita kiinalaisille hiihtokilpailuille.',
      description2: 'Olemme sitoutuneet edistämään kiinalaisen hiihtourheilun digitaalista ja standardoitua kehitystä, tarjoamalla moderneja työkaluja tiedonhallintaan, pistelaskentaan ja tulosstatistiikkaan urheilijoille, valmentajille, järjestäjille ja tuomareille, kattaen laajasti big air, slopestyle, rinnakkais- ja muut talvilajit, parantaen kiinalaisen hiihtourheilun organisatorista ja kilpailullista tasoa.',
      multiTierPoints: { title: 'Monitasoinen Pistejärjestelmä', description: 'Pistetasot 360/240/120' },
      uSeries: { title: 'U-sarja Kilpailut', description: 'Täysi kattavuus U11/U15/U18' },
      officialCertification: { title: 'Virallinen Sertifiointi', description: 'Talviurheilukeskuksen standardit' },
      allDisciplines: { title: 'Kaikki Lajit', description: 'Alppihiihto·Freeski·Lumilautailu' }
    },
    systemFeatures: {
      title: 'Järjestelmän Ominaisuudet',
      feature1: 'Kiinan alppihiihtopisteiden sääntöstandardi',
      feature2: 'Freeski/Lumilautailu 360/240/120 pistetasojärjestelmä',
      feature3: 'Täysi kattavuus Big Air, Slopestyle ja rinnakkaislajit',
      feature4: 'U11/U15/U18 juniorisarjojen hallinta',
      feature5: 'Urheiluministeriön Talviurheilukeskuksen sertifioima',
      feature6: 'Monilajiset pistesijoitukset ja datavisualisointi'
    }
  }
};
