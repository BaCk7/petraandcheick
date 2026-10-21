/* ============================================================
   TESTI E IMPOSTAZIONI DEL SITO  ·  SITE TEXTS AND SETTINGS
   ------------------------------------------------------------
   Modificate qui i testi: il file index.html li legge da qui.
   Edit the texts here; index.html reads them from this file.

   Regole / Rules
   - Ogni testo sta tra virgolette doppie "...".
     Se nel testo serve una virgoletta doppia, scrivetela \"
   - Gli apostrofi (l'auto, we're) vanno bene così come sono.
   - Non togliete le virgole alla fine delle righe.
   - Le righe con <a href='...'>...</a> sono link: cambiate pure
     l'indirizzo tra apici singoli e il testo tra > e <.
   - Le date: new Date(2027, 4, 1) = 1 maggio 2027 (i mesi partono da 0).
   - Dopo una modifica, aprite index.html: se la pagina resta vuota,
     manca una virgola o una virgoletta.
   ============================================================ */
window.SITE = {
  config: {
  names: ["Petra", "Cheick"],
  date: new Date(2027, 4, 1),            // 1 May 2027 (month is 0-based)
  maps: {
    venue: "https://maps.app.goo.gl/35SjaaBctbu8KHAPA",
    station: "https://maps.app.goo.gl/YXfyM3RzLKd5Nks98",
    kovalinka: "https://maps.app.goo.gl/BATRRxTWzp5rVxjc9"
  },
  booking: { penzion: "https://www.booking.com/Share-Sb28KL", karpatia: "https://www.booking.com/Share-v2ESjC" },
  photos: {
    chata: ["img/chata-1.jpg","img/chata-2.jpg","img/chata-3.jpg","img/chata-4.jpg","img/chata-5.jpg","img/chata-6.jpg"],
    penzion: ["img/penzion-1.jpg","img/penzion-2.jpg"],
    karpatia: ["img/karpatia-1.jpg"]
  }
},
  text: {
  en:{ locale:"en-GB", eyebrow:"Save the date", dateHero:"1<sup>st</sup> May 2027", place:"Gazárka · Slovakia",
    intro:"We're getting married at Gazárka, and we'd love to have you there.",
    mapBtn:"Open in Maps", orLabel:"Then, either", orWord:"or", bookBtn:"See on Booking.com", stationBtn:"Train station in Maps",
    venueLabel:"Where", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Gifts", giftTitle:"Please, no gifts", giftText:"As you know, we don't care much for presents. We love minimalism and travelling. \nHaving you there is what we appreciate the most. \nIf you'd still like to give something, the best gift is a small contribution to our honeymoon. \nPlease skip physical gifts, flowers and bottles: they'd only weigh down your suitcase.",
    progLabel:"The programme", progTitle:"Coming soon", progText:"Saturday from around midday until 4 in the morning, or until the last of you gives up. Full programme to follow.",
    menuLabel:"Food", menuTitle:"The menu", menuText:"Closer to the date we'll ask about allergies, intolerances and preferences. Nothing to do for now.",
    travelLabel:"Getting there", travelTitle:"How to reach Gazárka",
    travelIntro:"Gazárka is a little lake in western Slovakia, an hour from Bratislava. Fly to Bratislava if you can. Vienna works too: bus to Bratislava, then train or taxi.",
    opt1:{ kicker:"Option 1", title:"Via Bratislava",
      steps:[
        "Land at Bratislava (BTS).",
        {or:[
          "Taxi to Gazárka, about 1 hour. Group price coming, see below.",
          "<a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> to Gazárka, about 1 hour, 60 – 80 € by day, more at night."
        ]}
      ],
      note:"We're arranging a group taxi rate, and we can put you in touch with each other to share a car. Arriving early? Sleep in Bratislava and come out Saturday morning by train, about 1 h 30, see option 2."},
    opt2:{ kicker:"Option 2", title:"Via Vienna",
      steps:[
        "Land at Vienna (VIE).",
        "<a href='https://www.slovaklines.sk/en/slovakia/destinations-and-experiences/vienna/' target='_blank' rel='noopener'>Slovak Lines</a> bus to Bratislava main station: hourly, 50 min, 15 € (+2 € for a refundable ticket).",
        {or:[
          "Train to <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>: 1 h 15, every 1 to 2 hours, last one 19:58, about 4 €. Tickets on <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme Vlakom</a> or <a href='https://www.thetrainline.com' target='_blank' rel='noopener'>Trainline</a>. Then a few minutes by taxi.",
          "Taxi or <a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> from Bratislava main station to Gazárka: about 1 hour, 60 – 80 €."
        ]}
      ],
      note:""},
    travelOutro:"",
    localTravel:"",
    ideasLabel:"Make a trip of it", ideasTitle:"Come a few days early or stay on",
    ideasText:"We'll be a stone's throw from three capitals. Bratislava's old town is worth an afternoon, and from there Vienna is under an hour by bus and Budapest 3 hours by train. Come a few days early or stay on.",
    stayLabel:"Where to stay", stayTitle:"We've booked a cottage for you",
    stayIntro:"We've reserved the cottage Chata Kovalinka for guests from abroad: everyone together, 2 minutes on foot from the party. If you'd rather something else, see below.", stayAlt:"Other options", stayAltText:"Penzión Gazárka, if you'd like something more private.", stayMore:"Or search <a href='https://www.booking.com/searchresults.html?ss=%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>Booking.com</a> or <a href='https://www.airbnb.com/s/%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe--Slovakia/homes' target='_blank' rel='noopener'>Airbnb</a> around Šaštín-Stráže. No real hotels nearby, but <a href='https://www.booking.com/searchresults.html?ss=Bratislava' target='_blank' rel='noopener'>Bratislava has plenty</a>: sleep there and come out in the morning, 1 hour by taxi or 1 h 30 by train.",
    pension:{ title:"Penzión Gazárka", facts:[["Walk","2 min"],["Price","70 – 80 € / night, 2 people"]],
      text:"Small guesthouse, private bathrooms, no kitchen. Breakfast until 10:00 for a small fee. 70 – 80 € per night for two.", cta:""},
    chata:{ title:"Chata Kovalinka", facts:[["Dates","30 Apr – 3 May"],["Places","35"],["Price","about 45 € / person for all 3 nights"]],
      text:"35 places, Friday 15:00 to Monday 11:00. About 45 € per person for the three nights, depending on numbers. Rooms of 3 or 4 beds, four shared bathrooms, a kitchen. Breakfast on us, plus coffee, basics to cook, drinks, towels, an iron, shampoo and soap. Need anything else? Tell us.", cta:"Message us to reserve."} },
  it:{ locale:"it-IT", eyebrow:"Save the date", dateHero:"Sabato 1<sup>o</sup> maggio 2027", place:"Gazárka · Slovacchia",
    intro:"Ci sposiamo a Gazárka e ci piacerebbe tanto avervi con noi.",
    mapBtn:"Apri in Maps", orLabel:"Poi, a scelta", orWord:"oppure", bookBtn:"Vedi su Booking.com", stationBtn:"Stazione in Maps",
    venueLabel:"Dove", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Regali", giftTitle:"Niente regali, per favore", giftText:"Come sapete, non siamo tipi da regali: ci piacciono le cose semplici e viaggiare. \nQuello che ci fa più piacere è avervi con noi. \nSe proprio volete farci un regalo, il più bello è un piccolo contributo per il viaggio di nozze. \nPer favore, niente oggetti, fiori o bottiglie: vi peserebbero solo in valigia.",
    progLabel:"Il programma", progTitle:"In arrivo", progText:"Sabato da mezzogiorno fino alle 4 del mattino, o finché reggete. Programma completo più avanti.",
    menuLabel:"Cibo", menuTitle:"Il menù", menuText:"Più avanti chiederemo allergie, intolleranze e preferenze. Per ora niente da fare.",
    travelLabel:"Come arrivare", travelTitle:"Come raggiungere Gazárka",
    travelIntro:"Gazárka è un laghetto nella Slovacchia occidentale, a un'ora da Bratislava. Due strade comode dall'Italia, più una per i temerari. L'opzione 1 è la più semplice, la 2 passa da Vienna se volete vedere anche la città.",
    opt1:{ kicker:"Opzione 1", title:"Via Bratislava",
      steps:[
        "<a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Malpensa (MXP) a Bratislava (BTS). Per chi ha poche ferie: venerdì 30 aprile 21:35 → 23:05, oggi circa 35 € senza bagaglio. Altri voli lunedì 26, martedì 27 e giovedì 29 aprile.",
        "Atterrate a Bratislava.",
        {or:[
          "Taxi fino a Gazárka, circa 1 ora. Tariffa di gruppo in arrivo, vedi sotto.",
          "<a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> fino a Gazárka, circa 1 ora, 60 – 80 € di giorno, di più di notte."
        ]}
      ],
      note:"Stiamo trattando una tariffa di gruppo con i taxi e possiamo mettervi in contatto per dividere l'auto. Se arrivate venerdì sera, fatecelo sapere: proviamo a organizzarvi il passaggio. Se arrivate prima, dormite a Bratislava e raggiungeteci sabato mattina in treno, circa 1 ora e mezza, vedi opzione 2."},
    opt2:{ kicker:"Opzione 2", title:"Via Vienna",
      steps:[
        "Volo per Vienna (VIE). Ecco alcune opzioni per venerdì 30 aprile:<ul class='flights'><li><a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Bergamo (BGY), 08:55 → 10:20</li><li><a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Malpensa (MXP), 09:45 → 11:15</li><li><a href='https://www.easyjet.com' target='_blank' rel='noopener'>easyJet</a> da Linate (LIN), 13:25 → 14:50</li><li>Ci sono voli anche nei giorni prima e dopo, se volete allungare.</li></ul>Evitate il volo delle 17:15 → 18:40: rischiate di perdere l'ultimo treno.",
        "Bus <a href='https://www.slovaklines.sk/en/slovakia/destinations-and-experiences/vienna/' target='_blank' rel='noopener'>Slovak Lines</a> fino alla stazione centrale di Bratislava: ogni ora, 50 minuti, 15 € (+2 € per il biglietto rimborsabile).",
        {or:[
          "Treno per <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>: 1 h 15, ogni 1 o 2 ore, ultimo alle 19:58, circa 4 €. Biglietti su <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme Vlakom</a> o <a href='https://www.thetrainline.com' target='_blank' rel='noopener'>Trainline</a>. Poi pochi minuti di taxi.",
          "Taxi o <a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> dalla stazione di Bratislava a Gazárka: circa 1 ora, 60 – 80 €."
        ]}
      ],
      note:""},
    opt3:{ kicker:"Opzione 3, per i temerari", title:"Road trip",
      steps:[
        "Da Milano circa 950 km, 9 – 10 ore, <a href='https://www.google.com/maps/dir/Milano/Gaz%C3%A1rka,+%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>qui il percorso</a>. In due giorni diventa un bel viaggio.",
        "Soste belle lungo la strada: Verona, Garda, Trieste, Lubiana, Graz, Vienna. O dal Brennero: Innsbruck, Salisburgo, Salzkammergut.",
        "Occhio alle vignette autostradali: a seconda del percorso servono quelle di Austria, Slovenia o Slovacchia, si comprano online."
      ],
      note:"Sul posto l'auto non serve, la baita è a 2 minuti a piedi. Utile per il viaggio e le gite."},
    travelOutro:"",
    localTravel:"",
    ideasLabel:"Fatene un viaggio", ideasTitle:"Venite qualche giorno prima o allungate la gita",
    ideasText:"Saremo a due passi da tre capitali. Il centro di Bratislava si gira in un pomeriggio, e da lì Vienna è a meno di un'ora di bus e Budapest a 3 ore di treno. Arrivate qualche giorno prima o fermatevi dopo.",
    stayLabel:"Dove dormire", stayTitle:"Abbiamo prenotato una baita per voi",
    stayIntro:"Abbiamo riservato la Chata Kovalinka per chi arriva dall'estero: tutti insieme, a 2 minuti a piedi dalla festa. Se preferite altro, guardate sotto.", stayAlt:"Altre opzioni", stayAltText:"Penzión Gazárka, se volete qualcosa di più riservato.", stayMore:"Oppure cercate su <a href='https://www.booking.com/searchresults.html?ss=%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>Booking.com</a> o <a href='https://www.airbnb.com/s/%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe--Slovakia/homes' target='_blank' rel='noopener'>Airbnb</a> nei dintorni di Šaštín-Stráže. Hotel veri qui vicino non ce ne sono, ma <a href='https://www.booking.com/searchresults.html?ss=Bratislava' target='_blank' rel='noopener'>a Bratislava sì</a>: dormite lì e venite la mattina, 1 ora di taxi o 1 ora e mezza di treno.",
    pension:{ title:"Penzión Gazárka", facts:[["A piedi","2 min"],["Prezzo","70 – 80 € / notte, 2 persone"]],
      text:"Piccola pensione, bagno privato, senza cucina. Colazione fino alle 10:00 a pagamento. 70 – 80 € a notte per due.", cta:""},
    chata:{ title:"Chata Kovalinka", facts:[["Date","30.4 – 3.5"],["Posti","35"],["Prezzo","circa 45 € a persona per tutte e 3 le notti"]],
      text:"35 posti, da venerdì alle 15:00 a lunedì alle 11:00. Circa 45 € a persona per le tre notti, dipende da quanti saremo. Camere da 3 o 4 letti, quattro bagni in comune, una cucina. Colazione offerta, più caffè, qualcosa da cucinare, bevande, asciugamani, ferro, shampoo e sapone. Vi serve altro? Diteci.", cta:"Scriveteci per prenotare."} },
  sk:{ locale:"sk-SK", eyebrow:"Poznačte si dátum", dateHero:"1. mája 2027", place:"Gazárka · Slovensko",
    intro:"Berieme sa na Gazárke a tešíme sa na Vašu účasť.",
    mapBtn:"Otvoriť v Mapách", orLabel:"Potom buď", orWord:"alebo", bookBtn:"Pozrieť na Booking.com", stationBtn:"Stanica v Mapách",
    venueLabel:"Kde", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Dary", giftTitle:"Prosíme, žiadne dary", giftText:"Ak nás poznáte, tak viete, že si na nadarčeky nepotrpíme. Milujeme minimalizmus a cestovanie. \nNajviac sa potešíme Vašej účasti. \nAk nám predsalen chcete niečo darovať, najlepším darčekom bude malý príspevok na svadobnú cestu. \nA aj keď vieme, že veľa z vás výborne pečie, alebo pozná dobrú pekárku, prosíme vás o to, aby ste prišli na svadbu bez tradičných koláčikov a tórt. Sladké na svadbu si v dostatočnej miere zabezpečíme. \nRovnako sa prosím vyhnite vecným darom, kyticiam a alkoholu.",
    progLabel:"Program", progTitle:"Už čoskoro", progText:"Začíname v sobotu okolo poludnia a oslavujeme do 4:00 ráno. Podrobný program pošleme neskôr.",
    menuLabel:"Jedlo", menuTitle:"Menu", menuText:"Alergie a preferencie budú zohladnené.",
    travelLabel:"Cesta", travelTitle:"Ako sa dostať na Gazárku",
    travelIntro:"", opt1:null, opt2:null, opt3:null, travelOutro:"",
    localTravel:"<ul><li>Autom: parkovanie priamo pred reštauráciou.</li><li>Vlakom: do stanice <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>, odtiaľ 12 minút pešo.</li><li>Autobusom: pokúsime sa zorganizovať autobus, ktorý vás vyzdvihne priamo z domu, ak ste z okolia Podbranča alebo po ceste na Gazárku (Sobotište, Senica). Viac informácií pošleme neskôr.</li></ul>",
    ideasLabel:"", ideasTitle:"", ideasText:"",
    stayLabel:"Ubytovanie", stayTitle:"Kde prespať", stayIntro:"", stayAlt:"",
    pension:{ title:"Penzión Gazárka", facts:[["Pešo","2 min"],["Cena","70 – 80 € / noc pre 2 osoby"]],
      text:"Malý penzión s vlastnou kúpeľňou, bez kuchyne. Slovenské raňajky za príplatok, podávajú sa do 10:00.",
      cta:"Predbežne sme rezervovali pár 2 a 3 lôžkových izieb - v prípade záujmu nás kontaktujte."},
    karpatia:{ title:"Ubytovňa Karpatia", facts:[["Pešo","30 min"],["Autom","10 min"],["Cena","30 € / noc, 2 osoby"]],
      text:"Jednoduchšia a lacnejšia možnosť v obci. Asi 30 minút pešo alebo 10 minút autom od miesta svadby, približne 30 € za dvojlôžkovú izbu na noc. V prípade potreby vám zabezpečíme taxík.", cta:""},
    chata:null }
}
};
