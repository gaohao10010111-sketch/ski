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
    profile: 'Profiili'
  },

  // Navigointi
  navigation: {
    title: 'Kiinalainen Hiihtopistejärjestelmä',
    disciplines: 'Hiihtolajit',
    points: 'Pistekeskus',
    events: 'Kilpailut',
    my: 'Oma Alue',
    docs: 'Tietokanta',
    about: 'Järjestelmästä',
    
    // Alavalikot
    submenus: {
      // Hiihtolajit
      alpine: 'Alppihiihto',
      snowboardSlopestyle: 'Lumilautaslopestyle/Big Air',
      snowboardParallel: 'Lumilautaparalleli',
      freeskiSlopestyle: 'Vapaalaskuslopestyle/Big Air',
      
      // Pistekeskus
      myPoints: 'Omat Pisteet',
      pointsQuery: 'Pistekysely',
      pointsCalculator: 'Pistelaskin',
      pointsRankings: 'Pistesijoitus',
      pointsTrends: 'Pistetrendianalyysi',
      
      // Kilpailut
      eventsSchedule: 'Kilpailukalenteri',
      eventsRegister: 'Verkkorekisteröinti',
      eventsList: 'Kilpailulista',
      eventsResults: 'Tuloskysely',
      eventsStats: 'Datatilastot',
      
      // Oma Alue
      personalCenter: 'Henkilökohtainen Keskus',
      myRegistrations: 'Omat Rekisteröinnit',
      athleteProfile: 'Urheilijan Profiili',
      resultsHistory: 'Tuloshistoria',
      
      // Tietokanta
      pointsRules: 'Pistesäännöt',
      competitionRules: 'Kilpailusäännöt',
      venueStandards: 'Paikkastandardit',
      fisRules: 'FIS-säännöt',
      userGuide: 'Käyttöopas'
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
    title: 'Alppihiihtopistejärjestelmä',
    subtitle: 'Alpine Skiing Points System',
    description: 'v4.0 aikapohjainen kaava',
    
    // Tunnisteet
    tags: {
      timeBasedFormula: 'v4.0 aikapohjainen kaava',
      raceLevels: 'A/B/C kilpailutasot',
      penaltyCalculation: 'Dynaaminen rangaistuspistelaskenta'
    },
    
    // Pikakäyttö
    quickLinks: {
      title: 'Pikakäyttö Toimintoihin',
      pointsRanking: {
        title: 'Pistesijoitus',
        description: 'Näytä nykykauden pistesijoitukset'
      },
      pointsCalculator: {
        title: 'Pistelaskin',
        description: 'v4.0 kaava reaaliaikainen laskenta'
      },
      competitions: {
        title: 'Kilpailuhallinta',
        description: 'Näytä aikataulu ja kilpailutulokset'
      },
      athletes: {
        title: 'Urheilijoiden Profiilit',
        description: 'Urheilijatiedot ja tuloskysely'
      },
      registration: {
        title: 'Verkkorekisteröinti',
        description: 'Osallistu alppihiihtokilpailuihin'
      },
      rules: {
        title: 'Sääntödokumentaatio',
        description: 'Alppihiihtokilpailusäännöt'
      },
      enterFunction: 'Siirry toimintoon'
    },
    
    // Pistesäännöt
    pointsRules: {
      title: 'Alppihiihtopistesäännöt (v4.0)',
      baseFormula: {
        title: 'Peruskilpailupisteiden Kaava',
        formula: 'P = F × (Tx/To - 1)',
        description: 'P=Peruspisteet | F=Lajitekeräin | Tx=Kilpailijan aika | To=Voittajan aika'
      },
      finalFormula: {
        title: 'Lopullisten Pisteiden Laskenta',
        formula: 'Lopulliset Pisteet = (P + Rangaistus) × Kilpailukerroin',
        description: 'A-taso(1.0) | B-taso(0.6) | C-taso(0.3)'
      },
      disciplineFactors: {
        title: 'Lajitekiöiden Taulukko',
        downhill: 'Syöksy DH',
        slalom: 'Pujotteluhiihto SL',
        giantSlalom: 'Suurpujottelu GS',
        superG: 'Super-G SG',
        combined: 'Alppiyhdistelmä AC'
      }
    },
    
    // Tilastot
    statistics: {
      title: 'Reaaliaikaiset Tilastot',
      registeredAthletes: 'Rekisteröityneet Urheilijat',
      seasonEvents: 'Kauden Kilpailut',
      raceCount: 'Kilpailujen Määrä',
      averagePoints: 'Keskimääräiset Pisteet',
      monthlyIncrease: '12 uutta tässä kuussa',
      seasonGrowth: '16% kasvu edellisestä kaudesta',
      pandemicImpact: 'Hieman pandemian vaikuttama',
      levelImprovement: 'Kokonaistaso parani tasaisesti'
    }
  },

  // Vapaalaskuslopestyle sivu
  freeskiSlopestyle: {
    title: 'Vapaalaskuslopestyle/Big Air',
    subtitle: 'Freeski Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Pistejärjestelmä',
      judgingSystem: 'Tuomarijärjestelmä',
      competitionFormat: 'Karsinta/Finaali Formaatti'
    },
    
    pointsSystem: {
      title: 'Porrastettu Pistejärjestelmä',
      class1: {
        title: 'Luokan 1 Kilpailut',
        description: 'Kansalliset mestaruuskilpailut ja huipputason tapahtumat'
      },
      class2: {
        title: 'Luokan 2 Kilpailut',
        description: 'Alueelliset tärkeät kilpailut'
      },
      class3: {
        title: 'Luokan 3 Kilpailut',
        description: 'Paikalliset säännölliset kilpailut'
      }
    }
  },

  // Lumilautaslopestyle sivu
  snowboardSlopestyle: {
    title: 'Lumilautaslopestyle/Big Air',
    subtitle: 'Snowboard Slopestyle & Big Air',
    
    tags: {
      pointsSystem: '240/360/120 Pistejärjestelmä',
      judgingSystem: 'Tuomarijärjestelmä',
      competitionFormat: 'Karsinta/Finaali Formaatti'
    }
  },

  // Lumilautaparalleli sivu
  snowboardParallel: {
    title: 'Lumilautaparalleli Lajit',
    subtitle: 'Snowboard Parallel Events',
    
    tags: {
      timeBasedScoring: 'Aikapohjainen pisteytys',
      eliminationFormat: 'Karsintaformaatti',
      parallelEvents: 'PGS/PSL lajit'
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