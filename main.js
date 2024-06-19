//variables
const randomMessage = [
  {
    phrase:
      "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    author: "Madre Teresa de Calcutá",
  },
  {
    phrase:
      "As palavras de bondade são mais curativas para o coração ferido do que o bálsamo puro.",
    author: "São Francisco de Assis",
  },
  {
    phrase: "Que ninguém jamais venha a você sem sair melhor e mais feliz.",
    author: "Madre Teresa de Calcutá",
  },
  {
    phrase:
      "Um sorriso e um bom humor são para o coração o que a luz do sol é para as flores.",
    author: "São Francisco de Sales",
  },
  {
    phrase: "A oração é o oxigênio da alma.",
    author: "São Pio de Pietrelcina",
  },
  {
    phrase:
      "O amor e a humildade são os dois pontos mais importantes no mundo e o que une todas as virtudes.",
    author: "Santa Faustina Kowalska",
  },
  {
    phrase:
      "Não se canse de fazer o bem, pois no tempo certo colherá os frutos.",
    author: "São Paulo (Gálatas 6:9)",
  },
  {
    phrase: "A caridade é o vínculo da perfeição.",
    author: "São Paulo (Colossenses 3:14)",
  },
  {
    phrase: "A medida do amor é amar sem medida.",
    author: "Santo Agostinho",
  },
  {
    phrase: "Nunca se deve abandonar o bom humor.",
    author: "São Filipe Néri",
  },
  {
    phrase: "A paz começa com um sorriso.",
    author: "Madre Teresa de Calcutá",
  },
  {
    phrase: "Pequenas coisas feitas com grande amor transformarão o mundo.",
    author: "Santa Teresinha do Menino Jesus",
  },
  {
    phrase:
      "Seja amável e tenha o coração compassivo, pois cada pessoa que você encontrar está lutando uma batalha da qual você nada sabe.",
    author: "São João Batista de La Salle",
  },
  {
    phrase: "Onde há caridade e amor, Deus aí está.",
    author: "Santo Ambrósio",
  },
  {
    phrase: "Nada é pequeno aos olhos de Deus. Faça tudo com amor.",
    author: "Santa Teresa de Lisieux",
  },
  {
    phrase:
      "Aqueles que amam nunca envelhecem; podem morrer de velhice, mas morrem jovens.",
    author: "São Francisco de Sales",
  },
  {
    phrase:
      "A fé se nutre com orações, se fortalece com caridade e se aperfeiçoa com obras.",
    author: "São Vicente de Paulo",
  },
  {
    phrase: "A paciência é a companheira da sabedoria.",
    author: "Santo Agostinho",
  },
  {
    phrase:
      "Para cada minuto que você está com raiva, você perde sessenta segundos de felicidade.",
    author: "Santa Catarina de Sena",
  },
  {
    phrase:
      "Não podemos fazer grandes coisas, apenas pequenas coisas com grande amor.",
    author: "Madre Teresa de Calcutá",
  },
]
const paragraph = document.querySelector("p")
const initialBiscuit = document.querySelector("#closed-biscuit")
const firstScreen = document.querySelector("#closed-biscuit-screen")
const secondScreen = document.querySelector("#opened-biscuit-screen")
const returnButton = document.querySelector("#return-btn")
let randomNumber = Math.round(Math.random() * 10)

//event listeners
initialBiscuit.addEventListener("click", openBiscuit)
returnButton.addEventListener("click", toggleScreen)

//functions
function generateNumber() {
  randomNumber = Math.round(Math.random() * 10)
}
function openBiscuit() {
  toggleScreen()
  generateNumber()
  console.log(randomNumber)
  paragraph.innerHTML = `${randomMessage[randomNumber].phrase}`
}
function toggleScreen() {
  firstScreen.classList.toggle("hide")
  secondScreen.classList.toggle("hide")
}
function returnToBegin() {
  toggleScreen()
}
