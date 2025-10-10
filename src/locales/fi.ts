// Finnish language pack - Suomalainen kielipaketti
import { TranslationKeys } from './zh';

export const fi: TranslationKeys = {
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
      myHistory: 'Tuloshistoria'
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
        subtitle: 'U12/U15/U18 lahjakkuuksien kehitysjärjestelmä'
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
        subtitle: 'U12/U15/U18 kolmiportainen kehitysjärjestelmä'
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
    chinese: '中文',
    english: 'English',
    japanese: '日本語',
    korean: '한국어'
  },

  // Tunnistautuminen ja käyttöoikeudet
  auth: {
    needsLogin: 'Kirjautuminen vaaditaan',
    loginToUnlock: 'Kirjaudu avataksesi lisää toimintoja',
    comingSoon: 'Tulossa pian'
  }
};