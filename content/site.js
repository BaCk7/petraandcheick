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
    giftLabel:"Gifts", giftTitle:"Please, no gifts", giftText:"As you know, we love minimalism and travelling. Having you there is what we appreciate the most. \nIf you'd still like to make a gift, the best option would be a small contribution to our honeymoon. \nPlease skip physical gifts, flowers and bottles: they'd only weigh down your suitcase.",
    progLabel:"The programme", progTitle:"Coming soon", progText:"Saturday from around midday until 4 in the morning, or until the last of you gives up. Full programme to follow.",
    menuLabel:"Food", menuTitle:"The menu", menuText:"Closer to the date we'll ask about allergies, intolerances and preferences. A form for this will be sent later.",
    travelLabel:"Getting there", travelTitle:"How to reach Gazárka",
    travelIntro:"Gazárka is a little lake in western Slovakia, an hour from Bratislava. The easiest way is to fly to Bratislava. Vienna Airport is also an option, but the way from there to Gazárka is a bit longer.",
    opt1:{ kicker:"Option 1", title:"Via Bratislava",
      steps:[
        "Fly to Bratislava airport (BTS).",
        {or:[
          "Taxi to Gazárka, about 1 hour.",
          "<a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> to Gazárka, about 1 hour, about 80 - 90 € by day, more at night."
        ]}
      ],
      note:"We can organise an 8-seater taxi from Bratislava airport to Gazárka for 110 €, about 14 € each. To make the groups work we need to know who lands when: book your flight and tell us the times. For other options, just ask us. <br> Arriving early? You can sleep in Bratislava and join us at your own pace during the day, or even on Saturday morning: about 1 h 30 by train, see option 2."},
    opt2:{ kicker:"Option 2", title:"Via Vienna",
      steps:[
        "Fly to Vienna airport (VIE).",
        "<a href='https://www.slovaklines.sk/en/slovakia/destinations-and-experiences/vienna/' target='_blank' rel='noopener'>Slovak Lines</a> bus to Bratislava main station (Hlavná stanica): it runs almost every hour, it takes around 50 mins. Cost: 15 € (+2 € for a refundable ticket).",
        {or:[
          "Train to <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>: 1 h 15, every 1 to 2 hours, last one 19:58, about 4 €. Tickets on <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme Vlakom</a> or <a href='https://www.thetrainline.com' target='_blank' rel='noopener'>Trainline</a>. Then a few minutes walking.",
          "Taxi or <a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> from Bratislava main station to Gazárka: about 1 hour, 60 – 80 €."
        ]}
      ],
      note:"Or skip the bus and train: we can organise an 8-seater taxi straight from Vienna airport to Gazárka for 170 €, about 21 € each. To make the groups work we need to know who lands when: book your flight and tell us the times. For other options, just ask us."},
    travelOutro:"",
    localTravel:"",
    ideasLabel:"Make a trip of it", ideasTitle:"Come a few days early or stay longer",
    ideasText:"Make more of your trip to Slovakia. Bratislava's old town is worth an afternoon, and we highly recommend it. Two or three days in Vienna are a memorable experience too. If you have more time, consider Budapest, 3 hours from Bratislava by train.",
    stayLabel:"Where to stay", stayTitle:"We've booked a cottage for you",
    stayIntro:"We've reserved the cottage Chata Kovalinka for guests from abroad: 2 minutes by foot from the venue. If you'd rather stay somewhere else, see below.", stayAlt:"Other options", stayAltText:"Penzión Gazárka, if you'd like something more private.", stayMore:"Or search <a href='https://www.booking.com/searchresults.html?ss=%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>Booking.com</a> or <a href='https://www.airbnb.com/s/%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe--Slovakia/homes' target='_blank' rel='noopener'>Airbnb</a> around Šaštín-Stráže. No real hotels nearby, but <a href='https://www.booking.com/searchresults.html?ss=Bratislava' target='_blank' rel='noopener'>Bratislava has plenty</a>: sleep there and join us in the morning, 1 hour by taxi or 1 h 30 by train.",
    pension:{ title:"Penzión Gazárka", facts:[["Walk","2 min"],["Price","70 – 80 € / night, for two"]],
      text:"Small guesthouse with private bathrooms, but without a kitchen. Breakfast available until 10:00 for an extra fee. Let us know if there is no availability, we can check with the pension.", cta:""},
    chata:{ title:"Chata Kovalinka", facts:[["Dates","30 Apr – 3 May"],["Places","35"],["Price","about 45 € / person for all 3 nights"]],
      text:"There are 35 places, with check-in from Friday at 15:00, check-out until Monday at 11:00. About 45 € per person for the three nights. There are rooms with 3 or 4 beds, there are also four shared bathrooms, and an equipped kitchen. Breakfast with coffee will be offered by us. \n Basics to cook, towels, an iron, shampoo and soap will be available. Need anything else? Tell us.", cta:"Message us to reserve."} },
  it:{ locale:"it-IT", eyebrow:"Save the date", dateHero:"Sabato 1<sup>o</sup> maggio 2027", place:"Gazárka · Slovacchia",
    intro:"Ci sposiamo a Gazárka e ci piacerebbe tanto avervi con noi.",
    mapBtn:"Apri in Maps", orLabel:"Poi, a scelta", orWord:"oppure", bookBtn:"Vedi su Booking.com", stationBtn:"Stazione in Maps",
    venueLabel:"Dove", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Regali", giftTitle:"Niente regali, per favore", giftText:"Come sapete, amiamo il minimalismo e viaggiare. Avervi con noi è quello che apprezziamo di più. \nSe volete comunque farci un regalo, la cosa migliore è un piccolo contributo per il viaggio di nozze. \nPer favore, niente cianfrusaglie, fiori o bottiglie: vi peserebbero solo in valigia.",
    progLabel:"Il programma", progTitle:"In arrivo", progText:"Sabato da mezzogiorno fino alle 4 del mattino di domenica, o finché reggete. Programma completo più avanti.",
    menuLabel:"Cibo", menuTitle:"Il menù", menuText:"Più avanti chiederemo allergie, intolleranze e preferenze. Vi manderemo un google form apposta.",
    travelLabel:"Come arrivare", travelTitle:"Come raggiungere Gazárka",
    travelIntro:"Gazárka è un laghetto nella Slovacchia occidentale, a un'ora da Bratislava. La via più semplice è prendere un volo per Bratislava. Anche l'aeroporto di Vienna è un'opzione, ma da lì il tragitto fino a Gazárka è un po' più lungo. Per i temerari c'è anche la macchina.",
    opt1:{ kicker:"Opzione 1", title:"Via Bratislava",
      steps:[
        "<a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Malpensa (MXP) a Bratislava (BTS). Per chi ha poche ferie: venerdì 30 aprile 21:35 → 23:05, oggi circa 35 € senza bagaglio. Altri voli lunedì 26, martedì 27 e giovedì 29 aprile.",
        "Atterrate all'aeroporto di Bratislava (BTS).",
        {or:[
          "Taxi fino a Gazárka, circa 1 ora.",
          "<a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> fino a Gazárka, circa 1 ora, 80 – 90 € di giorno, di più di notte."
        ]}
      ],
      note:"Possiamo organizzare un taxi da 8 posti dall'aeroporto di Bratislava a Gazárka per 110 €, circa 14 € a testa. Per organizzare i gruppi ci serve sapere chi atterra quando: appena avete il volo, scriveteci gli orari. E se vi serve una soluzione diversa, fatecelo sapere. <br> Se arrivate prima, potete dormire a Bratislava e raggiungerci con calma durante il giorno, o anche sabato mattina: col treno serve circa 1 ora e mezza, vedi opzione 2."},
    opt2:{ kicker:"Opzione 2", title:"Via Vienna",
      steps:[
        "Volo per Vienna (VIE). Ecco alcune opzioni per venerdì 30 aprile:<ul class='flights'><li><a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Bergamo (BGY), 08:55 → 10:20</li><li><a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Malpensa (MXP), 09:45 → 11:15</li><li><a href='https://www.easyjet.com' target='_blank' rel='noopener'>easyJet</a> da Linate (LIN), 13:25 → 14:50</li><li><a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Bergamo (BGY), 17:15 → 18:40: arrivate troppo tardi per l'ultimo treno, quindi bus fino a Bratislava e poi taxi.</li><li>Ci sono voli anche nei giorni prima e dopo, se volete allungare.</li></ul>",
        "Bus <a href='https://www.slovaklines.sk/en/slovakia/destinations-and-experiences/vienna/' target='_blank' rel='noopener'>Slovak Lines</a> fino alla stazione centrale di Bratislava (Hlavná stanica): quasi ogni ora, circa 50 minuti, 15 € (+2 € per il biglietto rimborsabile).",
        {or:[
          "Treno per <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>: 1 h 15, ogni 1 o 2 ore, ultimo alle 19:58, circa 4 €. Biglietti su <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme Vlakom</a> o <a href='https://www.thetrainline.com' target='_blank' rel='noopener'>Trainline</a>. Poi pochi minuti a piedi.",
          "Taxi o <a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> dalla stazione di Bratislava a Gazárka: circa 1 ora, 60 – 80 €."
        ]}
      ],
      note:"Oppure saltate bus e treno: possiamo organizzare un taxi da 8 posti direttamente dall'aeroporto di Vienna a Gazárka per 170 €, circa 21 € a testa. Per organizzare i gruppi ci serve sapere chi atterra quando: appena avete il volo, scriveteci gli orari. E se vi serve una soluzione diversa, chiedete pure."},
    opt3:{ kicker:"Opzione 3, per i temerari", title:"Road trip",
      steps:[
        "Da Milano circa 950 km, 9 – 10 ore, <a href='https://www.google.com/maps/dir/Milano/Gaz%C3%A1rka,+%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>qui il percorso</a>. In due giorni diventa un bel viaggio.",
        "Soste belle lungo la strada: Verona, Garda, Trieste, Lubiana, Graz, Vienna. O dal Brennero: Innsbruck, Salisburgo, Salzkammergut.",
        "Occhio alle vignette autostradali: a seconda del percorso servono quelle di Austria, Slovenia o Slovacchia, si comprano online."
      ],
      note:"Sul posto l'auto non serve, la baita è a 2 minuti a piedi dalla location. Utile per il viaggio e le gite."},
    travelOutro:"",
    localTravel:"",
    ideasLabel:"Fatene un viaggio", ideasTitle:"Venite qualche giorno prima o allungate la gita",
    ideasText:"Approfittate del viaggio in Slovacchia. Il centro di Bratislava merita un pomeriggio, e ve lo consigliamo. Anche due o tre giorni a Vienna sono un'esperienza che resta. Se avete più tempo, considerate anche Budapest, a 3 ore di treno da Bratislava.",
    stayLabel:"Dove dormire", stayTitle:"Abbiamo prenotato una baita per voi",
    stayIntro:"Abbiamo riservato la baita Chata Kovalinka per chi arriva dall'estero: a 2 minuti a piedi dalla location. Se preferite dormire altrove, guardate sotto.", stayAlt:"Altre opzioni", stayAltText:"Penzión Gazárka, se volete qualcosa di più riservato.", stayMore:"Oppure cercate su <a href='https://www.booking.com/searchresults.html?ss=%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>Booking.com</a> o <a href='https://www.airbnb.com/s/%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe--Slovakia/homes' target='_blank' rel='noopener'>Airbnb</a> nei dintorni di Šaštín-Stráže. Hotel veri qui vicino non ce ne sono, ma <a href='https://www.booking.com/searchresults.html?ss=Bratislava' target='_blank' rel='noopener'>a Bratislava sì</a>: dormite lì e venite la mattina, 1 ora di taxi o 1 ora e mezza di treno.",
    pension:{ title:"Penzión Gazárka", facts:[["A piedi","2 min"],["Prezzo","70 – 80 € / notte, per due"]],
      text:"Piccola pensione con bagno privato, senza cucina. Colazione fino alle 10:00 a pagamento. Se non trovate disponibilità, fateci sapere: possiamo sentire noi la pensione.", cta:""},
    chata:{ title:"Chata Kovalinka", facts:[["Date","30.4 – 3.5"],["Posti","35"],["Prezzo","circa 45 € a persona per tutte e 3 le notti"]],
      text:"35 posti, check-in da venerdì alle 15:00, check-out entro lunedì alle 11:00. Circa 45 € a persona per le tre notti. Camere da 3 o 4 letti, quattro bagni in comune e una cucina attrezzata. La colazione con caffè la offriamo noi. \nTroverete il necessario per cucinare, asciugamani, ferro da stiro, shampoo e sapone. Vi serve altro? Fateci sapere.", cta:"Scriveteci per prenotare."} },
  sk:{ locale:"sk-SK", eyebrow:"Poznačte si dátum", dateHero:"1. máj 2027", dateLong:"Sobota 1. máj 2027", place:"Gazárka · Slovensko",
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
