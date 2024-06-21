//variables
let randomNumber = Math.round(Math.random() * 20)
let randomIterations = Math.round(Math.random() * 20)
let randomTimeout = Math.round(Math.random() * 5000)
console.log(randomNumber)
console.log(randomIterations)
console.log(randomTimeout)
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

const phrase = document.querySelector(".message")
const authorPhrase = document.querySelector(".author")
const sticker = document.querySelector(".author-wrapper")
const initialBiscuit = document.querySelector("#closed-biscuit")
const firstScreen = document.querySelector("#closed-biscuit-screen")
const secondScreen = document.querySelector("#opened-biscuit-screen")
const returnButton = document.querySelector("#return-btn")
const wrapperMessage = document.querySelector(".message-wrapper")

const shaking = [
  { transform: "rotateZ(1deg) translate(0.1rem, 0.3rem)" },
  { transform: "rotateZ(0) translate(0)" },
  { transform: "rotateZ(1deg) translate(-0.2rem, 0.1rem)" },
]
const shakingTime = {
  duration: 100,
  iterations: randomIterations,
}

const animationAuthorIn = [
  { opacity: 0, transform: "translateY(0) rotateZ(0)" },
  { opacity: 1, transform: "translateY(4rem) rotateZ(3deg)" },
]
const animationAuthorTimingIn = {
  duration: 250,
  delay: 500,
  iterations: 1,
  fill: "forwards",
}
const animationAuthorOut = [
  { opacity: 1, transform: "translateY(4rem) rotateZ(3deg)" },
  { opacity: 0, transform: "translateY(0) rotateZ(0)" },
]
const animationAuthorTimingOut = {
  duration: 200,
  delay: 500,
  iterations: 1,
  fill: "forwards",
}

//event listeners
initialBiscuit.addEventListener("click", openBiscuit)
returnButton.addEventListener("click", toggleScreen)
phrase.addEventListener("mouseenter", animationIn)
phrase.addEventListener("mouseout", animationOut)
document.addEventListener("DOMContentLoaded", shakingFrenetically)

//functions
function generateNewMessage() {
  randomNumber = Math.round(Math.random() * 20)
}
function generateValueShaking() {
  randomIterations = Math.round(Math.random() * 20)
  randomTimeout = Math.round(Math.random() * 5000)
}

function openBiscuit() {
  toggleScreen()
  generateNewMessage()
  console.log(randomNumber)
  phrase.innerHTML = `${randomMessage[randomNumber].phrase}`
  authorPhrase.innerHTML = `${randomMessage[randomNumber].author}`
}
function toggleScreen() {
  firstScreen.classList.toggle("hide")
  secondScreen.classList.toggle("hide")
}
function animationIn() {
  sticker.animate(animationAuthorIn, animationAuthorTimingIn)
}
function animationOut() {
  sticker.animate(animationAuthorOut, animationAuthorTimingOut)
}
function shakingFrenetically() {
  const biscuitAnimation = initialBiscuit.animate(shaking, shakingTime)

  biscuitAnimation.onfinish = function () {
    setTimeout(shakingFrenetically, randomTimeout)
    generateValueShaking()
  }
}
shakingFrenetically()
