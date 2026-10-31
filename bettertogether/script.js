
const questions = {
  it: {
    light: [
      "Qual è il posto più bello in cui sei stato/a?",
      "Quale piccola cosa ti migliora subito la giornata?",
      "Quale film/programma guarderesti all'infinito?",
      "Qual è un ricordo che ti fa sempre sorridere?",
      "Se potessi partire domani, dove andresti?",
      "Quale talento ti piacerebbe avere?",
      "Come sarebbe per te una giornata perfetta?",
      "Qual è un cibo che non ti stancheresti mai di mangiare?",
      "Preferisci organizzare tutto o lasciarti sorprendere?",
      "Qual è una cosa nuova che vorresti provare?"
    ],
    medium: [
      "Chi è la persona che ti ha influenzato di più nella vita?",
      "Quale scelta ha cambiato il tuo percorso?",
      "Di quale esperienza sei particolarmente fiero/a?",
      "Che cosa hai imparato da un errore importante?",
      "In quali momenti ti senti più te stesso/a?",
      "Che cosa apprezzi di più in un'amicizia?",
      "Quale abitudine ti ha fatto bene nel tempo?",
      "Che cosa vorresti imparare a fare meglio?",
      "Qual è un consiglio che non hai dimenticato?",
      "Che cosa significa per te sentirti capito/a?"
    ],
    deep: [
      "C'è qualcosa che hai fatto e che ti pesa ancora oggi?",
      "Qual è una cosa che vorresti che gli altri capissero meglio di te?",
      "Quale paura vorresti riuscire a superare?",
      "Quando ti è stato difficile chiedere aiuto?",
      "C'è qualcosa che stai cercando di perdonare a te stesso/a?",
      "Che cosa fai fatica a dire ad alta voce?",
      "In quale momento della vita ti sei sentito/a più vulnerabile?",
      "Che cosa temi di perdere e perché?",
      "Che cosa significa per te sentirti davvero accettato/a?",
      "C'è qualcosa che vorresti lasciarti alle spalle?"
    ]
  },
  tn: {
    light: [
      "Chnowa a7la blassa mcheetelha fi 7yetek?",
      "Chnowa 7aja sghira tnajem t7assenlek nharek?",
      "Chnowa el barnemej elly tnajem tetfarrej fyh dima w ma tmelch mennou?",
      "Chnowa dhikra dima tkhallik tetbassem?",
      "Ken tnajem tsefer ghodwa, win temchi?",
      "Chnowa el mawhba elli tetmanna tkoun 3andek?",
      "Kifech tetkhayel nhar parfait bennesba lik?",
      "Chnowa el mekla elly tnajem tekelha dima w ma tmelch menha?",
      "T7eb tkhattet kol chay walla tkhalli rou7ek lel mofaja2et?",
      "Chnowa 7aja jdida tetmanna tjarrabha?"
    ],
    medium: [
      "Chkoun akther ensen ather fik fi 7yetek?",
      "Chnowa el 9arar elli baddallek masar 7yetek?",
      "Anehi tajrba enti fakhour b'rou7ek barcha biha?",
      "Chnowa ta3allemt men ghalta mohema?",
      "Waqtech t7ess rou7ek 3la tabi3tek?",
      "Chnowa akther 7aja t9adderha fi s7abtek?",
      "Chnowa 3ada 3awnetek barcha m3a el wa9t?",
      "Chnowa t7eb tet3allem ta3mlou a7sen?",
      "Chnowa nasi7a mazelt tetdhakkerha lyoum?",
      "Chma3neha bennesba lik ki ensen yefhmek bel7a9?"
    ],
    deep: [
      "Famma 7aja 3maltha w mazelt t9alla9 fik lyoum?",
      "Chnowa 7aja tetmanna la3bed tefhemha 3lik akther?",
      "Chnowa khouf t7eb tetghallab 3lih?",
      "Waqtech s3ib 3lik totleb el mousa3da?",
      "Famma 7aja mazelt t7awel tsema7 rou7ek 3liha?",
      "Chnowa el 7aja elli yos3ob 3lik t9oulha belsout?",
      "Waqtech 7assit rou7ek dh3if barcha?",
      "Chnowa tkhaf tekhser, w 3lech?",
      "Chma3neha bennesba lik ki t7ess elli la3bed 9ablinek kima enti?",
      "Famma 7aja tetmanna tkhalliha wrak w tet3addeha?"
    ]
  }
};

// Ogni contesto ha il proprio mazzo per lingua e livello.
const questionsByAudience = {
  friends: questions,
    "family": {
      "it": {
        "light": [
          "Quale tradizione di famiglia ti piace di più?",
          "Quale piatto ti ricorda subito casa?",
          "Chi in famiglia racconta le storie più divertenti?",
          "Qual è un momento semplice che ti piace condividere con la famiglia?",
          "Se organizzassi una giornata in famiglia, che cosa fareste?",
          "Quale canzone, film o programma vi fa pensare alla famiglia?",
          "Quale piccola abitudine di qualcuno in famiglia ti fa sorridere?",
          "Quale posto ti piacerebbe visitare insieme alla tua famiglia?",
          "Chi sceglieresti come compagno/a per una gara di cucina in famiglia?",
          "Qual è una cosa nuova che ti piacerebbe fare tutti insieme?"
        ],
        "medium": [
          "Quale ricordo di famiglia ti è particolarmente caro?",
          "Che cosa hai imparato da una persona della tua famiglia?",
          "Quale qualità ammiri di più nella tua famiglia?",
          "In che modo la tua famiglia è cambiata negli anni?",
          "Quale gesto ti fa sentire sostenuto/a dalla tua famiglia?",
          "C'è una storia di famiglia che vorresti conoscere meglio?",
          "Che cosa rende speciale il tempo passato insieme?",
          "Quale consiglio ricevuto in famiglia ti è rimasto?",
          "Come vi piace affrontare insieme i momenti difficili?",
          "Quale tradizione ti piacerebbe mantenere o inventare?"
        ],
        "deep": [
          "Che cosa vorresti riuscire a dire più spesso alla tua famiglia?",
          "In quali momenti ti senti davvero ascoltato/a in famiglia?",
          "C'è qualcosa che vorresti fosse capito meglio del tuo modo di essere?",
          "Che cosa ti aiuta a ricucire un rapporto dopo un disaccordo?",
          "Quale parte della tua storia familiare ha contribuito a renderti ciò che sei?",
          "Quando ti è più facile chiedere aiuto a qualcuno della famiglia?",
          "Che cosa significa per te sentirti accolto/a dalla tua famiglia?",
          "C'è un ricordo familiare che oggi guardi con occhi diversi?",
          "Quale confine o bisogno personale vorresti riuscire a esprimere con serenità?",
          "Che cosa speri che la tua famiglia ricordi dei momenti vissuti insieme?"
        ]
      },
      "tn": {
        "light": [
          "Chnowa akther 3ada 3ayliyya t7ebha?",
          "Anehi mekla tfakkrek dima fi dar?",
          "Chkoun fi 3ayeltek ya7ki a7la 7keyet mdha7ka?",
          "Chnowa wa9t sghir t7eb t9adhih m3a 3ayeltek?",
          "Ken tnadhem nhar m3a 3ayeltek, chnowa ta3mlou?",
          "Anehi ghneya, film wala barnemej yefakkrek fi 3ayeltek?",
          "Chnowa 3ada sghira fi 3ayeltek dima tkhallik tetbassem?",
          "Win t7eb temchi m3a 3ayeltek?",
          "Chkoun tekhtar ykoun m3ak fi concours tayebh fi 3ayeltek?",
          "Chnowa 7aja jdida t7eb ta3mlouha lkol m3a baadhkom?"
        ],
        "medium": [
          "Anehi dhikra 3ayliyya 3ziza 3lik barcha?",
          "Chnowa ta3allemt men ensen fi 3ayeltek?",
          "Anehi sifet t9adderha akther fi 3ayeltek?",
          "Kifech tbaddlet 3ayeltek m3a el snin?",
          "Chnowa tasarrof ykhalik t7ess elli 3ayeltek sanedtek?",
          "Famma 7keya 3ayliyya t7eb ta3ref 3liha akther?",
          "Chnowa ykhal-li el wa9t m3a baadhkom special?",
          "Anehi nasi7a men 3ayeltek mazelt tetdhakkerha?",
          "Kifech t7ebbou tet3amlou m3a el wa9t ess3ib kima 3ayla?",
          "Anehi 3ada t7eb tkammel biha wala t5tar3ouha?"
        ],
        "deep": [
          "Chnowa t7eb tnajem t9oulou akther l3ayeltek?",
          "Waqtech t7ess elli 3ayeltek tesma3lek bel7a9?",
          "Famma 7aja t7eb la3bed tefhemha akther 3la tabi3tek?",
          "Chnowa y3awnek tsalla7 el 3ala9a ba3d khlef?",
          "Anehi partie men tarikh 3ayeltek 3awnetek twalli elli enti 3lih?",
          "Waqtech yji ashel 3lik totleb el mousa3da men 3ayeltek?",
          "Chma3neha bennesba lik ki 3ayeltek ta9blek kima enti?",
          "Famma dhikra 3ayliyya twalli tchoufha b 3inin okhrin tawa?",
          "Chnowa 7ad wala 7aja personnelle t7eb ta3ber 3liha b ra7tek?",
          "Chnowa tetmanna 3ayeltek dima tetdhakker men el wa9t elli 3additou m3a baadhkom?"
        ]
      }
    },
    "couple": {
      "it": {
        "light": [
          "Qual è una piccola cosa che facciamo insieme e che ti piace?",
          "Quale sarebbe per te il nostro appuntamento perfetto, anche a casa?",
          "Chi di noi due sceglierebbe meglio un film per la serata?",
          "Quale canzone ti fa pensare a noi?",
          "Quale posto ti piacerebbe scoprire insieme?",
          "Qual è una nostra abitudine buffa o tenera?",
          "Se avessimo un giorno libero senza impegni, come lo passeremmo?",
          "Quale attività nuova ti piacerebbe provare insieme?",
          "Quale ricordo di noi ti fa sorridere subito?",
          "Quale piccolo gesto ti fa sentire coccolato/a?"
        ],
        "medium": [
          "Quando ti senti più in sintonia con me?",
          "Che cosa apprezzi del modo in cui affrontiamo le decisioni insieme?",
          "Quale esperienza vorresti vivere insieme nei prossimi mesi?",
          "Che cosa ti fa sentire ascoltato/a nella nostra relazione?",
          "Quale qualità pensi che ci aiutiamo a far emergere a vicenda?",
          "Come ti piace che ci sosteniamo quando uno dei due ha una giornata difficile?",
          "C'è una cosa che hai scoperto di te grazie alla nostra relazione?",
          "Quale progetto, grande o piccolo, ti piacerebbe costruire insieme?",
          "Che cosa rende speciale per te il tempo che passiamo insieme?",
          "Come possiamo ritagliarci più momenti di qualità nella vita di tutti i giorni?"
        ],
        "deep": [
          "Che cosa ti aiuta a sentirti al sicuro e libero/a di essere te stesso/a con me?",
          "C'è un bisogno importante che vorresti riuscire a comunicarmi meglio?",
          "Come possiamo affrontare un disaccordo facendo sentire entrambi rispettati?",
          "Quale paura o incertezza vorresti poter condividere con me senza sentirti giudicato/a?",
          "In quale momento ti sei sentito/a particolarmente vicino/a a me?",
          "Che cosa significa per te prendersi cura della nostra relazione?",
          "C'è qualcosa che vorresti imparassimo a fare meglio insieme?",
          "Come posso esserti vicino/a quando hai bisogno di spazio o di sostegno?",
          "Quale valore vorresti che guidasse le scelte che facciamo come coppia?",
          "Che cosa speri che continui a crescere tra noi nel tempo?"
        ]
      },
      "tn": {
        "light": [
          "Chnowa 7aja sghira na3mlouha m3a baadhna w t3ajbek?",
          "Kifech ykoun rendez-vous parfait bennesba lik, 7atta fi dar?",
          "Chkoun fina yekhtar film a7sen lel 3chiyya?",
          "Anehi ghneya tfakkrek fina?",
          "Win t7eb nemchiw w nektachfouh m3a baadhna?",
          "Chnowa 3ada binetna dharifa wala 7nina?",
          "Ken 3andna nhar feragh bla maw3ed, kifech n9adhouh?",
          "Chnowa activité jdida t7eb njarrbouha m3a baadhna?",
          "Anehi dhikra binetna dima tkhallik tetbassem?",
          "Chnowa tasarrof sghir ykhalik t7ess elli n7annou 3lik?"
        ],
        "medium": [
          "Waqtech t7ess rou7ek akther fi nafs el mouja m3aya?",
          "Chnowa t9adder fi tari9etna kif n5ammou fi 9rarat m3a baadhna?",
          "Anehi tajrba t7eb na3ichouha m3a baadhna fi chhor jeyin?",
          "Chnowa ykhalik t7ess elli sma3tek fi 3ala9etna?",
          "Anehi sifet t7ess elli n3awnou baadhna bech tbane akther?",
          "Kifech t7eb nsanadou baadhna ki wa7ed fina y3addi nhar s3ib?",
          "Famma 7aja 3reft'ha 3la rou7ek b sabab 3ala9etna?",
          "Anehi projet, kbir wala sghir, t7eb nbniwh m3a baadhna?",
          "Chnowa ykhal-li el wa9t elli n9adhouh m3a baadhna spécial?",
          "Kifech najjmou n5alliw 3andna wa9t akther l baadhna fi nhar l3adi?"
        ],
        "deep": [
          "Chnowa y3awnek t7ess rou7ek merte7/merte7a w 3la tabi3tek m3aya?",
          "Famma 7aja mohema t7eb tnajem t9olli b tari9a awdha7?",
          "Kifech najjmou net3amlou m3a khlef w kol wa7ed fina y7ess elli ya7tarmouh?",
          "Famma khouf wala 9la9 t7eb t9asmou m3aya bla ma t7ess elli bech n7okm 3lik?",
          "Waqtech 7assit rou7ek 9rib/9riba menni barcha?",
          "Chma3neha bennesba lik na3mlou belna l 3ala9etna?",
          "Famma 7aja t7eb net3allmou na3mlouha a7sen m3a baadhna?",
          "Kifech najjm nkoun 9rib/9riba mennek ki t7eb espace wala saned?",
          "Anehi 9ima t7eb tkoun dalil lel 9rarat elli na5dhouhom ka couple?",
          "Chnowa tetmanna yeb9a ykber binetna m3a el wa9t?"
        ]
      }
    }
};

const islamicQuestions = {
  "it": {
    "light": [
      "Quale valore dell'Islam ti piacerebbe ricordare più spesso nella vita quotidiana?",
      "Quale momento o tradizione del Ramadan ti è più caro?",
      "C'è una storia di un profeta che ti incuriosisce o ti ispira?",
      "Quale gesto di gentilezza, anche piccolo, ti sembra importante nella fede?",
      "Quale festa islamica ti piace celebrare e perché?",
      "Quale parola o insegnamento religioso ti dà serenità?",
      "Quale piatto associ a un momento speciale vissuto durante il Ramadan o l'Eid?",
      "Se potessi visitare un luogo importante per la storia islamica, quale sceglieresti?",
      "Quale buona abitudine ti piacerebbe coltivare con più costanza?",
      "Quale domanda sulla cultura o sulle tradizioni islamiche ti piacerebbe approfondire?"
    ],
    "medium": [
      "Quale insegnamento islamico influenza il modo in cui tratti gli altri?",
      "Che cosa significa per te la gratitudine nella vita di tutti i giorni?",
      "In che modo il Ramadan cambia il tuo ritmo o le tue priorità?",
      "Quale pratica o tradizione ti aiuta a ritrovare calma e concentrazione?",
      "Quale valore vorresti trasmettere alle persone a cui vuoi bene?",
      "Come può la comunità aiutare le persone a sentirsi accolte e sostenute?",
      "C'è un insegnamento religioso che hai compreso diversamente crescendo?",
      "Che cosa rende significativo per te un atto di carità o di aiuto?",
      "Quale aspetto della storia islamica vorresti conoscere meglio?",
      "Come trovi un equilibrio tra i tuoi impegni e il tempo dedicato alla spiritualità?"
    ],
    "deep": [
      "Che posto ha la fede nel modo in cui affronti i momenti difficili?",
      "Quale domanda spirituale ti accompagna in questo periodo?",
      "Che cosa ti aiuta a vivere la tua fede con sincerità, senza sentirti giudicato/a?",
      "C'è un valore religioso che vorresti mettere più al centro delle tue scelte?",
      "Come vivi i momenti in cui hai dubbi o ti senti distante dalla spiritualità?",
      "Che cosa significa per te chiedere perdono e provare a ricominciare?",
      "In che modo la fede influenza il tuo rapporto con te stesso/a?",
      "Quale parte del tuo cammino spirituale vorresti condividere con qualcuno di fiducia?",
      "Che cosa ti aiuta a rispettare le convinzioni religiose diverse dalle tue?",
      "Quale speranza o intenzione spirituale vorresti portare con te nel futuro?"
    ]
  },
  "tn": {
    "light": [
      "Anehi 9ima men el Islam t7eb tetdhakkerha akther fi 7yetek el 3adiya?",
      "Anehi akther la7dha wala 3ada fi Ramadan 3ziza 3lik?",
      "Famma 7keya 3la nabi t7eb ta3ref 3liha wala t3ajbek?",
      "Chnowa tasarrof tayeb, 7atta ken sghir, t7essou mohem fi eddin?",
      "Anehi 3id islami t7eb t7tafel bih w 3lech?",
      "Anehi kelma wala ta3lim dini y3atik ra7a?",
      "Anehi mekla tfakkrek fi la7dha behya fi Ramadan wala el 3id?",
      "Ken tnajem tzour blassa mohema fi tarikh el Islam, anehya tekhtar?",
      "Anehi 3ada behya t7eb twalli ta3melha b intidham akther?",
      "Chnowa sou2el 3la th9afa wala 3adet el Islam t7eb ta3ref 3lih akther?"
    ],
    "medium": [
      "Anehi ta3lim islami y2athther fi tari9tek m3a la3bed?",
      "Chma3neha bennesba lik echokran fi 7yetek el youmiya?",
      "Kifech Ramadan ybaddel rythme wala awlawiyetek?",
      "Anehi 3ibada wala 3ada t3awnek tal9a el hdo2 w tarkiz?",
      "Anehi 9ima t7eb twasselha lel 3bed elli t7ebhom?",
      "Kifech el jem3a tnajem t3awen la3bed bech y7essou rou7hom mar7oub bihom w msanoudin?",
      "Famma ta3lim dini fhemtou b tari9a okhra ki kbert?",
      "Chnowa ykhal-li 3andek sada9a wala mousa3da ma3na?",
      "Anehi partie men tarikh el Islam t7eb ta3ref 3liha akther?",
      "Kifech tal9a tawazon bin mas2ouliyatek w el wa9t elli ta3tih lel rou7aniyet?"
    ],
    "deep": [
      "Chnowa blasset eddin fi tari9tek kif tet3adda men wa9t s3ib?",
      "Anehi sou2el rou7ani yji fi belek el ayam hedhi?",
      "Chnowa y3awnek ta3ich eddin b sid9, bla ma t7ess elli 7ad ya7kem 3lik?",
      "Famma 9ima diniya t7eb tkhalleha fi 9alb 9raratek akther?",
      "Kifech t3ich wa9t elli yjiwek chkouk wala t7ess rou7ek b3id 3la errou7aniyet?",
      "Chma3neha bennesba lik testa3ref b ghaltek w t7awel tebda men jdid?",
      "Kifech eddin y2athther fi 3ala9tek b rou7ek?",
      "Anehi partie men masirek errou7ani t7eb t9asmha m3a ensen thi9a?",
      "Chnowa y3awnek t7tarem 9ana3at diniya m5alfa 3la 9ana3atek?",
      "Anehi amniya wala niya rou7aniya t7eb ta5ouha m3ak lel mosta9bel?"
    ]
  }
};

const translations = {
  it: {
    islamic: "Domande islamiche", islamicDesc: "Fede e tradizione",
    islamicTagline: "Domande sulla fede e sulla tradizione islamica.",
    islamicPrefix: "Islamiche · ",
    chooseAudience: "Con chi stai giocando?",
    friends: "Amici", family: "Famiglia", couple: "Coppia",
    friendsDesc: "Complicità e ricordi", familyDesc: "Storie e legami", coupleDesc: "Intimità e progetti",
    changeAudience: "← Cambia gruppo",
    friendsTagline: "Domande per conoscersi meglio tra amici.",
    familyTagline: "Domande per condividere storie e ricordi in famiglia.",
    coupleTagline: "Domande per conoscersi e avvicinarsi ancora di più.",
    tagline: "Carte, domande, conversazioni.<br>Per conoscersi davvero.",
    chooseLevel: "Scegli il livello di profondità",
    lightName: "Leggere",
    lightDesc: "Per rompere<br>il ghiaccio",
    mediumName: "Medie",
    mediumDesc: "Esperienze<br>e relazioni",
    deepName: "Profonde",
    deepDesc: "Riflessioni<br>personali",
    start: "Inizia il gioco&nbsp; →",
    footer: "Nessuna risposta è obbligatoria. Ascoltatevi, senza giudicare.",
    home: "← Home",
    changeLevel: "Cambia livello",
    lightTitle: "Livello Leggero",
    mediumTitle: "Livello Medio",
    deepTitle: "Livello Profondo",
    remaining: "Carte rimaste: ",
    complete: "Mazzo completato",
    tap: "Tocca la carta per scoprirla",
    draw: "Pesca un'altra carta ↻",
    next: "Prossima carta ↻",
    reveal: "Scopri la domanda",
    skip: "Salta questa domanda →",
    helpHidden: "Girate la carta e lasciate spazio a tutti per rispondere.",
    helpShown: "Prendetevi il tempo per ascoltare e conversare.",
    helpTap: "Tocca la carta per scoprire la domanda.",
    notice: "💛 Potete rispondere a turno o liberamente. Se una domanda mette a disagio qualcuno, passate alla prossima.",
    finished: "Avete esplorato tutte le domande di questo livello.",
    restart: "Ricomincia il livello ↻",
    finishHelp: "Potete rigiocare il livello oppure sceglierne un altro."
  },
  tn: {
    islamic: "As2la islamiya", islamicDesc: "Eddin w ett9alid",
    islamicTagline: "As2la 3la eddin w ett9alid el islamiya.",
    islamicPrefix: "Islamiya · ",
    chooseAudience: "M3a chkoun tla3bou?",
    friends: "S7ab", family: "3ayla", couple: "Couple",
    friendsDesc: "S7ab w dhikrayet", familyDesc: "7keyet w 3ala9at", coupleDesc: "9orb w mosta9bel",
    changeAudience: "← Baddel el groupe",
    friendsTagline: "As2la bech tet3arfou akther bin s7ab.",
    familyTagline: "As2la bech t9asmou 7keyet w dhikrayet m3a el 3ayla.",
    coupleTagline: "As2la bech tet3arfou w t9arbou akther lba3dhkom.",
    tagline: "Karta, as2la, w 7keyet.<br>Bech net3arfou 3la baadhna bel7a9.",
    chooseLevel: "Ekhtar 9addech t7eb el as2la tkoun 3ami9a",
    lightName: "Khfifa",
    lightDesc: "Bech nabdew<br>el 7keya",
    mediumName: "MoutawassTa",
    mediumDesc: "Tajarob<br>w 3ala9at",
    deepName: "3ami9a",
    deepDesc: "ta'amulat<br>3ami9a",
    start: "Ebda el lo3ba&nbsp; →",
    footer: "Ma fama 7atta ijeba majboura. Esma3ou baadhkom bla 7okm.",
    home: "← Erja3",
    changeLevel: "Baddel el niveau",
    lightTitle: "Niveau khfif",
    mediumTitle: "Niveau moutawasset",
    deepTitle: "Niveau 3mi9",
    remaining: "El wra9 elli ba9yin: ",
    complete: "El mazou kemel",
    tap: "Enzel 3al carta bech techouf essou2el",
    draw: "Carta okhra ↻",
    next: "Essou2el elli ba3dou ↻",
    reveal: "Warri essou2el",
    skip: "Fout essou2el hedha →",
    helpHidden: "E9elbou el carta w khalliou kol we7ed ya7ki.",
    helpShown: "Khouthou wa9tkom bech tesm3ou baadhkom w ta7kiw.",
    helpTap: "Enzel 3al carta bech tchouf essou2el.",
    notice: "💛 Tnajemou ta7kiw bel dour wala kol we7ed kima y7eb. Ken sou2el y9alla9 7ad, foutouh w emchiw lel ba3dou.",
    finished: "Kammaltou as2let el niveau hedha.",
    restart: "Aawed el niveau ↻",
    finishHelp: "Tnajemou taawedou el niveau wala tekhtarou niveau ekher."
  }
};

const config = {
  light: {
    title: "Livello Leggero",
    symbol: "❧",
    color: "light",
    colorValue: "#355f47"
  },
  medium: {
    title: "Livello Medio",
    symbol: "○",
    color: "medium",
    colorValue: "#8b611f"
  },
  deep: {
    title: "Livello Profondo",
    symbol: "♡",
    color: "deep",
    colorValue: "#684d7c"
  }
};

let selectedAudience = "friends";
let selectedLevel = "light";
let currentLanguage = "it";
let deck = [];
let currentQuestion = null;
let revealed = false;
let drawnCount = 0;

const audienceScreen = document.getElementById("audienceScreen");
const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const card = document.getElementById("playingCard");
const cardFront = document.getElementById("cardFront");
const questionText = document.getElementById("questionText");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const homeButton = document.getElementById("homeButton");

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function selectAudience(audience) {
  selectedAudience = audience;
  audienceScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
  homeButton.classList.remove("hidden");
  document.getElementById("audienceTagline").textContent =
    translations[currentLanguage][audience + "Tagline"];
}

document.querySelectorAll(".audience").forEach(button => {
  button.addEventListener("click", () => selectAudience(button.dataset.audience));
});

function selectLevel(level) {
  selectedLevel = level;

  document.querySelectorAll(".level").forEach(button => {
    const active = button.dataset.level === level;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".level").forEach(button => {
  button.addEventListener("click", () => {
    selectLevel(button.dataset.level);
  });
});

function getActiveQuestionSet() {
  return selectedAudience === "islamic"
    ? islamicQuestions[currentLanguage][selectedLevel]
    : questionsByAudience[selectedAudience][currentLanguage][selectedLevel];
}

function startGame() {
  deck = shuffle(getActiveQuestionSet());
  drawnCount = 0;

  homeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  homeButton.classList.remove("hidden");

  document.getElementById("levelTitle").textContent =
    (selectedAudience === "islamic" ? translations[currentLanguage].islamicPrefix : "") +
    translations[currentLanguage][selectedLevel + "Title"];

  document.getElementById("progressBar").style.background =
    config[selectedLevel].colorValue;

  drawCard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function drawCard() {
  if (deck.length === 0) {
    currentQuestion = null;
    card.classList.remove("flipped");
    revealed = false;

    questionText.textContent = translations[currentLanguage].finished;
    document.getElementById("cardSymbol").textContent =
      config[selectedLevel].symbol;
    document.getElementById("backSymbol").textContent =
      config[selectedLevel].symbol;
    document.getElementById("remaining").textContent =
      translations[currentLanguage].complete;
    document.getElementById("progressBar").style.width = "0%";
    nextButton.textContent = translations[currentLanguage].restart;
    skipButton.classList.add("hidden");
    document.getElementById("helpText").textContent =
      translations[currentLanguage].finishHelp;

    cardFront.className =
      "card-face card-front " + config[selectedLevel].color;

    return;
  }

  currentQuestion = deck.pop();
  drawnCount++;
  revealed = false;

  card.classList.remove("flipped");
  cardFront.className =
    "card-face card-front " + config[selectedLevel].color;

  document.querySelector(".card-back").className =
    "card-face card-back " + config[selectedLevel].color;

  questionText.textContent = currentQuestion;
  document.getElementById("cardSymbol").textContent =
    config[selectedLevel].symbol;
    document.getElementById("backSymbol").textContent =
      config[selectedLevel].symbol;
  document.getElementById("remaining").textContent =
    translations[currentLanguage].remaining + deck.length;

  document.getElementById("progressBar").style.width =
    (deck.length / getActiveQuestionSet().length * 100) + "%";

  nextButton.textContent = translations[currentLanguage].draw;
  skipButton.classList.add("hidden");
  document.getElementById("helpText").textContent =
    translations[currentLanguage].helpHidden;
}

function flipCard() {
  if (!currentQuestion) return;

  revealed = !revealed;
  card.classList.toggle("flipped", revealed);
  skipButton.classList.toggle("hidden", !revealed);

  nextButton.textContent = revealed
    ? translations[currentLanguage].next
    : translations[currentLanguage].reveal;

  document.getElementById("helpText").textContent = revealed
    ? translations[currentLanguage].helpShown
    : translations[currentLanguage].helpTap;
}

function applyLanguage() {
  currentLanguage = document.getElementById("languageSelect").value;

  document.documentElement.lang =
    currentLanguage === "it" ? "it" : "en";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML = translations[currentLanguage][key];
  });

  skipButton.textContent = translations[currentLanguage].skip;
  homeButton.textContent = translations[currentLanguage].home;
  homeButton.setAttribute("aria-label", translations[currentLanguage].home);
  document.querySelectorAll(".audience").forEach(button => {
    const key = button.dataset.audience;
    button.querySelector("strong").textContent = translations[currentLanguage][key];
    button.querySelector("span:last-child").textContent = translations[currentLanguage][key + "Desc"];
  });
  document.getElementById("audienceTagline").textContent =
    translations[currentLanguage][selectedAudience + "Tagline"];
  document.getElementById("tapHint").textContent =
    translations[currentLanguage].tap;
  document.getElementById("noticeText").textContent =
    translations[currentLanguage].notice;

  if (!gameScreen.classList.contains("hidden")) {
    document.getElementById("levelTitle").textContent =
      (selectedAudience === "islamic" ? translations[currentLanguage].islamicPrefix : "") +
      translations[currentLanguage][selectedLevel + "Title"];

    if (deck.length === 0 && !currentQuestion) {
      questionText.textContent = translations[currentLanguage].finished;
      document.getElementById("remaining").textContent =
        translations[currentLanguage].complete;
      nextButton.textContent = translations[currentLanguage].restart;
      document.getElementById("helpText").textContent =
        translations[currentLanguage].finishHelp;
    } else {
      questionText.textContent = currentQuestion || "";

      document.getElementById("remaining").textContent =
        translations[currentLanguage].remaining + deck.length;

      nextButton.textContent = revealed
        ? translations[currentLanguage].next
        : translations[currentLanguage].draw;

      document.getElementById("helpText").textContent = revealed
        ? translations[currentLanguage].helpShown
        : translations[currentLanguage].helpHidden;
    }
  }
}

function goHome() {
  gameScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("startButton").addEventListener("click", startGame);

document.getElementById("languageSelect").addEventListener("change", () => {
  const gameWasOpen = !gameScreen.classList.contains("hidden");
  applyLanguage();

  if (gameWasOpen) startGame();
});

card.addEventListener("click", flipCard);

card.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipCard();
  }
});

nextButton.addEventListener("click", () => {
  if (deck.length === 0) {
    startGame();
    return;
  }

  if (!revealed) {
    flipCard();
    return;
  }

  drawCard();
});

skipButton.addEventListener("click", drawCard);
function showAudienceScreen() {
  homeScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  audienceScreen.classList.remove("hidden");
  homeButton.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

homeButton.addEventListener("click", showAudienceScreen);
document.getElementById("changeAudienceButton").addEventListener("click", showAudienceScreen);
applyLanguage();

document.getElementById("changeLevelButton").addEventListener("click", goHome);

