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
  booking: { penzion: "https://www.booking.com/Share-Sb28KL" },
  photos: {
    chata: ["img/chata-1.jpg","img/chata-2.jpg","img/chata-3.jpg","img/chata-4.jpg","img/chata-5.jpg","img/chata-6.jpg"],
    penzion: ["img/penzion-1.jpg","img/penzion-2.jpg"]
  }
},
  text: {
  en:{ locale:"en-GB", eyebrow:"Save the date", dateHero:"1<sup>st</sup> May 2027", place:"Gazárka · Slovakia",
    intro:"We're getting married at Gazárka, and we'd love you to be there.",
    mapBtn:"Open in Maps", orLabel:"Then, either", orWord:"or", bookBtn:"See on Booking.com", stationBtn:"Train station in Maps",
    venueLabel:"Where", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Gifts", giftTitle:"Please, no gifts", giftText:"Having you there is the best gift. If you'd still like to give something, a small contribution in cash is welcome, but it really isn't expected.",
    progLabel:"The programme", progTitle:"Coming soon", progText:"We start around midday on Saturday and keep going until 4 in the morning. The full programme will follow.",
    menuLabel:"Food", menuTitle:"The menu", menuText:"Closer to the date we'll ask everyone about allergies, diets and preferences. Nothing to do for now.",
    travelLabel:"Getting there", travelTitle:"How to reach Gazárka",
    travelIntro:"Gazárka is a lakeside spot in western Slovakia, about an hour from Bratislava. Bratislava airport is the closest and the simplest. Vienna airport also works: it's a bus to Bratislava and then a train or taxi to us.",
    opt1:{ kicker:"Option 1", title:"Via Bratislava",
      steps:[
        "Land at Bratislava airport (BTS).",
        {or:[
          "Taxi straight to Gazárka. About 1 hour, prices below.",
          "<a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> to Gazárka. About 60 to 80 € during the day."
        ]}
      ],
      note:"We're arranging a group rate with a taxi company. Details and prices soon. We can also match people up to share a car. If you arrive a day early, you can also sleep in Bratislava, see the city, and come out to us in the morning by train, see option 2."},
    opt2:{ kicker:"Option 2", title:"Via Vienna",
      steps:[
        "Land at Vienna airport (VIE).",
        "<a href='https://www.slovaklines.sk/en/slovakia/destinations-and-experiences/vienna/' target='_blank' rel='noopener'>Slovak Lines</a> bus from the airport to Bratislava main station (Hlavná stanica). Almost every hour, 15 €, 50 minutes. For 2 € more the ticket is refundable if the bus is cancelled or late.",
        {or:[
          "Train to <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>. About 1 h 15, every 1 to 2 hours, last train at 19:58, about 4 €. Tickets in the <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme Vlakom</a> app or on <a href='https://www.thetrainline.com' target='_blank' rel='noopener'>Trainline</a>. Gazárka is a short ride from the station.",
          "Taxi or <a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> from the station to Gazárka. About 1 hour, 50 to 80 €."
        ]}
      ],
      note:""},
    travelOutro:"",
    localTravel:"",
    ideasLabel:"Make a trip of it", ideasTitle:"Come a few days early or stay on",
    ideasText:"You'll be close to three capitals. Bratislava's old town is an easy afternoon, Vienna is under an hour away by bus, and Budapest is about 3 hours by train. Arrive a few days early or stay on after the wedding and see one of them.",
    stayLabel:"Where to stay", stayTitle:"We've booked a chalet for you",
    stayIntro:"Don't worry about accommodation. We've reserved Chata Kovalinka for guests from abroad: everyone together, 2 minutes on foot from the venue. We think it's the best option. If you'd prefer something else, see the alternative below.", stayAlt:"Other options", stayAltText:"Penzión Gazárka, if you'd like something more private.", stayMore:"Or search on <a href='https://www.booking.com/searchresults.html?ss=%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>Booking.com</a> or <a href='https://www.airbnb.com/s/%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe--Slovakia/homes' target='_blank' rel='noopener'>Airbnb</a> around Šaštín-Stráže. If you'd like a proper hotel, there are none nearby, but <a href='https://www.booking.com/searchresults.html?ss=Bratislava' target='_blank' rel='noopener'>Bratislava has plenty</a>, from boutique to luxury: stay there and come out in the morning, about 1 hour by train or taxi.",
    pension:{ title:"Penzión Gazárka", facts:[["Walk","2 min"],["Price","70 – 80 € / night"]],
      text:"Small hotel with private bathrooms, no kitchen. Slovak-style breakfast for an extra fee, served until 10:00. About 70 to 80 € per double room per night.", cta:""},
    chata:{ title:"Chata Kovalinka", facts:[["Dates","30.4 – 3.5"],["Places","35"],["Price","about 45 € / person"]],
      text:"We've reserved 35 places for guests from abroad, from Friday 15:00 to Monday 11:00. About 45 € per person for the whole stay, depending on how many of us there are. Shared rooms with 3 or 4 beds, four shared bathrooms and a shared kitchen. Breakfast is on us every day, and we'll stock coffee, something to cook, drinks, some towels, an iron, shampoo and soap. Tell us if you need anything else.", cta:"Write to us to reserve a place."} },
  it:{ locale:"it-IT", eyebrow:"Segnatevi la data", dateHero:"Sabato 1<sup>o</sup> maggio 2027", place:"Gazárka · Slovacchia",
    intro:"Ci sposiamo a Gazárka e ci piacerebbe tanto avervi con noi.",
    mapBtn:"Apri in Maps", orLabel:"Poi, a scelta", orWord:"oppure", bookBtn:"Vedi su Booking.com", stationBtn:"Stazione in Maps",
    venueLabel:"Dove", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Regali", giftTitle:"Niente regali, per favore", giftText:"Il regalo più bello è avervi con noi. Se proprio volete dare qualcosa, un piccolo contributo in contanti è gradito, ma davvero non è dovuto.",
    progLabel:"Il programma", progTitle:"In arrivo", progText:"Si comincia sabato verso mezzogiorno e si va avanti fino alle 4 del mattino. Il programma completo arriverà più avanti.",
    menuLabel:"Cibo", menuTitle:"Il menù", menuText:"Più avanti chiederemo a tutti allergie, intolleranze e preferenze. Per ora non dovete fare nulla.",
    travelLabel:"Come arrivare", travelTitle:"Come raggiungere Gazárka",
    travelIntro:"Gazárka è una località sul lago nella Slovacchia occidentale, a circa un'ora da Bratislava. Dall'Italia ci sono due strade comode, più una per i temerari. L'opzione 1 è la più semplice e vi lascia più vicino. L'opzione 2 passa da Vienna, utile se volete vedere anche la città.",
    opt1:{ kicker:"Opzione 1", title:"Via Bratislava",
      steps:[
        "Volo <a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Milano Malpensa (MXP) a Bratislava (BTS). Per esempio venerdì 30 aprile, 21:35 → 23:05, ideale per chi ha poche ferie, al momento circa 35 € senza bagaglio. Altri voli lunedì 26, martedì 27 e giovedì 29 aprile, uno al giorno.",
        "Atterrate a Bratislava.",
        {or:[
          "Taxi diretto a Gazárka. Circa 1 ora, prezzi qui sotto.",
          "<a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> fino a Gazárka. Circa 60 – 80 € di giorno."
        ]}
      ],
      note:"Stiamo trattando una tariffa di gruppo con una compagnia di taxi. Dettagli e prezzi presto. Possiamo anche mettervi in contatto per condividere l'auto. Se arrivate un giorno prima, potete anche dormire a Bratislava, vedere la città e raggiungerci la mattina in treno, vedi opzione 2."},
    opt2:{ kicker:"Opzione 2", title:"Via Vienna",
      steps:[
        "Volo per Vienna (VIE): <a href='https://www.easyjet.com' target='_blank' rel='noopener'>easyJet</a> da Milano Linate (LIN), <a href='https://www.ryanair.com' target='_blank' rel='noopener'>Ryanair</a> da Milano Malpensa (MXP) o Bergamo Orio al Serio (BGY). Consigliamo 08:55 BGY → 10:20, 09:45 MXP → 11:15, oppure venerdì 30 aprile 13:25 LIN → 14:50. C'è anche un volo 17:15 → 18:40, ma arrivereste tardi e la sera non ci sono più treni.",
        "Bus <a href='https://www.slovaklines.sk/en/slovakia/destinations-and-experiences/vienna/' target='_blank' rel='noopener'>Slovak Lines</a> dall'aeroporto alla stazione centrale di Bratislava (Hlavná stanica). Quasi ogni ora, 15 €, 50 minuti. Con 2 € in più il biglietto è rimborsabile in caso di cancellazione o ritardo.",
        {or:[
          "Treno per <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a>. Circa 1 h 15, ogni 1 o 2 ore, ultimo treno alle 19:58, circa 4 €. Biglietti sull'app <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme Vlakom</a> o su <a href='https://www.thetrainline.com' target='_blank' rel='noopener'>Trainline</a>. Dalla stazione Gazárka è a pochi minuti.",
          "Taxi o <a href='https://www.uber.com' target='_blank' rel='noopener'>Uber</a> dalla stazione fino a Gazárka. Circa 1 ora, 50 – 80 €."
        ]}
      ],
      note:""},
    opt3:{ kicker:"Opzione 3, per i temerari", title:"Road trip",
      steps:[
        "Da Milano sono circa 950 km e 9 – 10 ore di guida, <a href='https://www.google.com/maps/dir/Milano/Gaz%C3%A1rka,+%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>qui il percorso</a>. Spezzato in due giorni diventa un bel viaggio.",
        "Lungo la strada ci sono tante belle soste: Verona, il lago di Garda, Trieste, Lubiana, Graz e Vienna. Oppure dal Brennero: Innsbruck, Salisburgo e i laghi del Salzkammergut.",
        "Servono le vignette autostradali di Austria, Slovenia e Slovacchia: si comprano online in pochi minuti."
      ],
      note:"Sul posto l'auto non serve: la baita è a 2 minuti a piedi dalla festa. Torna utile per il viaggio e per le gite nei dintorni."},
    travelOutro:"",
    localTravel:"",
    ideasLabel:"Fatene un viaggio", ideasTitle:"Venite qualche giorno prima o allungate la gita",
    ideasText:"Sarete vicini a tre capitali. Il centro di Bratislava si gira in un pomeriggio, Vienna è a meno di un'ora di bus e Budapest a circa 3 ore di treno. Arrivate qualche giorno prima o fermatevi dopo il matrimonio e visitatene una.",
    stayLabel:"Dove dormire", stayTitle:"Abbiamo prenotato una baita per voi",
    stayIntro:"Per dormire non dovete preoccuparvi. Abbiamo riservato la Chata Kovalinka per chi arriva dall'estero: tutti insieme, a 2 minuti a piedi dalla festa. Per noi è l'opzione migliore. Se preferite qualcos'altro, qui sotto trovate un'alternativa.", stayAlt:"Altre opzioni", stayAltText:"Penzión Gazárka, se volete qualcosa di più riservato.", stayMore:"Oppure cercate su <a href='https://www.booking.com/searchresults.html?ss=%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe' target='_blank' rel='noopener'>Booking.com</a> o <a href='https://www.airbnb.com/s/%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe--Slovakia/homes' target='_blank' rel='noopener'>Airbnb</a> nei dintorni di Šaštín-Stráže. Se volete un vero hotel, qui vicino non ce ne sono, ma <a href='https://www.booking.com/searchresults.html?ss=Bratislava' target='_blank' rel='noopener'>a Bratislava ce ne sono tanti</a>, dai boutique ai lusso: dormite lì e venite la mattina, circa 1 ora di treno o taxi.",
    pension:{ title:"Penzión Gazárka", facts:[["A piedi","2 min"],["Prezzo","70 – 80 € / notte"]],
      text:"Piccolo hotel con bagno privato, senza cucina. Colazione slovacca a pagamento, servita fino alle 10:00. Circa 70 – 80 € a notte per camera doppia.", cta:""},
    chata:{ title:"Chata Kovalinka", facts:[["Date","30.4 – 3.5"],["Posti","35"],["Prezzo","circa 45 € a persona"]],
      text:"Abbiamo riservato 35 posti per chi arriva dall'estero, dal venerdì alle 15:00 al lunedì alle 11:00. Circa 45 € a persona per tutto il soggiorno, a seconda di quanti saremo. Camere condivise da 3 o 4 letti, quattro bagni in comune e cucina condivisa. La colazione la offriamo noi ogni giorno, e ci pensiamo noi a caffè, qualcosa da cucinare, bevande, qualche asciugamano, ferro da stiro, shampoo e sapone. Diteci se vi serve altro.", cta:"Scriveteci per prenotare un posto."} },
  sk:{ locale:"sk-SK", eyebrow:"Poznačte si dátum", dateHero:"1. mája 2027", place:"Gazárka · Slovensko",
    intro:"Berieme sa na Gazárke a budeme radi, ak prídete.",
    mapBtn:"Otvoriť v Mapách", bookBtn:"Pozrieť na Booking.com", stationBtn:"Stanica v Mapách",
    venueLabel:"Kde", venueTitle:"Tropic Pizza, Gazárka",
    giftLabel:"Dary", giftTitle:"Prosíme, žiadne dary", giftText:"Najkrajším darom je, že prídete. Ak by ste predsa chceli niečo dať, poteší nás malý finančný príspevok, ale naozaj to nie je potrebné.",
    progLabel:"Program", progTitle:"Už čoskoro", progText:"Začíname v sobotu okolo poludnia a oslavujeme do 4:00 ráno. Podrobný program pošleme neskôr.",
    menuLabel:"Jedlo", menuTitle:"Menu", menuText:"Bližšie k termínu sa všetkých opýtame na alergie, diéty a preferencie. Zatiaľ nemusíte nič riešiť.",
    travelLabel:"Cesta", travelTitle:"Ako sa dostať na Gazárku",
    travelIntro:"", opt1:null, opt2:null, travelOutro:"",
    localTravel:"Autom podľa mapy vyššie. Vlakom do stanice <a href='https://maps.app.goo.gl/YXfyM3RzLKd5Nks98' target='_blank' rel='noopener'>Šaštín-Stráže</a> (z Bratislavy hl. st. asi 1 h 15, smer Kúty), odtiaľ je Gazárka kúsok pešo alebo taxíkom. Autobusom priamo na zastávku Šaštín-Stráže, Gazárka: spoje z Bratislavy, Senice a Malaciek nájdete na <a href='https://cp.sk/vlakbus/spojenie/' target='_blank' rel='noopener'>cp.sk</a>. Lístky na vlak aj v aplikácii <a href='https://apps.apple.com/de/app/ideme-vlakom/id1465574367?l=en-GB' target='_blank' rel='noopener'>Ideme vlakom</a>.",
    ideasLabel:"", ideasTitle:"", ideasText:"",
    stayLabel:"Ubytovanie", stayTitle:"Hneď vedľa miesta svadby", stayIntro:"", stayAlt:"",
    pension:{ title:"Penzión Gazárka", facts:[["Pešo","2 min"],["Cena","70 – 80 € / noc"]],
      text:"Malý penzión s vlastnou kúpeľňou, bez kuchyne. Slovenské raňajky za príplatok, podávajú sa do 10:00. Približne 70 – 80 € za dvojlôžkovú izbu na noc.",
      cta:"Pár izieb máme rezervovaných, ozvite sa nám. Alebo si nájdite ubytovanie v okolí."},
    chata:null }
}
};
