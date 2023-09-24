const ui = {
  sentence: document.querySelector('.sentence'),
  button: document.querySelector('button'),
}

const sentences =  [
    "Ogni scelta è una rinuncia",
    "La vita è troppo breve per perdere tempo con i rompicoglioni",
    "Posso resistere a tutto, tranne che ai rompicoglioni",
    "Quel che non c'è non si rompe. Ma nemmeno funziona",
    "La solitudine è libertà, ma anche solitudine",
    "No plan is a plan, but a shitty one",
    "Tutte le persone che incontri sono state giovani, ma non tutte diventeranno vecchie",
    "Invecchiare non è il massimo, ma l'alternativa è peggiore",
    "Forza e coraggio che la vita è di passaggio",
    "Il problema di chi è veramente stupido è che non sa di esserlo",
    "La fortuna è quando la preparazione incontra l'occasione",
    "Un comportamento è oggettivamente stupido quando arreca danno agli altri senza portare un vantaggio a chi lo mette in pratica",
    "In un progetto complesso l'unico modo di fare presto è fare bene",
    "Attento a quello che desideri perché potresti ottenerlo",
    "Una cosa non è necessariamente sensata solo perché già esiste",
    "Per mettere in ordine bisogna prima mettere in disordine",
    "Preferisco l'entusiasmo un po' ingenuo dei bambini per il futuro al rimpianto un po' falso dei vecchi per il passato",
    "Una pessima memoria è un requisito indispensabile per un amore duraturo",
    "Solo la monogamia garantisce di avere un partner sempre diverso",
    "Il pessimista è sempre contento: quando le cose vanno male è contento di aver avuto ragione, quando vanno bene è contento di essersi sbagliato",
    "Chi non risica non gli diamo i carrarmatini",
    "È incredibile quante cose si possano ottenere, semplicemente chidendole",
    "Un genitore non può avere paura di sbagliare perché è sicuro di sbagliare",
    "È meglio chiedere e dare l'impressione di essere stupido, che tacere e rimanere ignorante",
    "Sono disposto a dare la vita perché tu possa dire la tua stronzata",
    "La noia è la fonte del genio",
    "Più impari,  più ti accorgi di essere ignorante",
    "Preferisco ridere con le persone che delle persone",
    "È bug free",
    "Chissà perché siamo tutti convinti che agli altri interessino i cazziata nostri",
    "Quando sei giù  ricordati che dopotutto sei solo un ammasso un po complicato di proteine",
    "C'è sempre qualcuno più bravo di te",
    "Ogni volta che una cosa deve scorrere dentro un' altra la lubrificazione è essenziale",
    "Comunque...  Comunque... La cacca la fa chiunque",
    "Eh, D'altra parte è così",
    "Mai cercare di risolvere un problema prima di essersi accertati della sua esistenza",
    "Professionalità è lavorare per rendersi inutile",
    "Il successo di un genitore è diventare inutile",
    "Le opinioni sono come i maroni, ognuno ha i suoi",
    "La pigrizia muove il mondo",
    "Fare qualcosa di nuovo è impossibile. E se ci riuscissi nessuno lo capirebbe.",
    "Le donne belle sono per gli uomini senza fantasia",
    "Il cervello è solo un muscolo che si dà delle arie",
    "Un sito veloce è meglio di uno lento",
    "Perché la merda non è caffè",
    "Se la merda fosse oro i poveri non avrebbero il buco del culo",
    "Adattarsi, improvvisare e raggiungere lo scopo",
    "Il segreto per avere le cose quando servono è farle quando non servono",
    "La pigrizia è la madre del progresso",
    "Se mio nonno aveva tre palle era un flipper",
    "Se un maiale ti mangiasse la testa, poi dovrebbe leccarsi il culo per rifarsi la bocca"
  ]

function showSentence() {
  const selectedIndex = Math.round(Math.random() * (sentences.length - 1))
  const selectedSentence = sentences[selectedIndex]
  ui.sentence.innerText = selectedSentence
}

ui.button.addEventListener('click', showSentence)

showSentence()
