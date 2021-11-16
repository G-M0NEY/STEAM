document.addEventListener('DOMContentLoaded', () => {
//cards 
const cardArray = [
    {
        name:'pumpkin',
        img: 'img/3pumpkins.png'
    },
    {
        name:'bat',
        img: 'img/bat.png'
    },
    {
        name:'candy',
        img: 'img/candy.png'
    },
    {
        name: 'candy2',
        img: 'img/candy2.png'
    },
    {
        name: 'mask2',
        img: 'img/mask2.png'
    },
    {
        name: 'pumpkinstick',
        img: 'img/pumpkinstick.png'
    },
    {
        name:'pumpkin',
        img: 'img/3pumpkins.png'
    },
    {
        name:'bat',
        img: 'img/bat.png'
    },
    {
        name:'candy',
        img: 'img/candy.png'
    },
    {
        name: 'candy2',
        img: 'img/candy2.png'
    },
    {
        name: 'mask2',
        img: 'img/mask2.png'
    },
    {
        name: 'pumpkinstick',
        img: 'img/pumpkinstick.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//board please work :)
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/moon.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
}
    //matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/moon.png')
      cards[optionTwoId].setAttribute('src', 'img/moon.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio('mp3/wolfshort.mp3');
      audio.play();
      cards[optionOneId].setAttribute('src', 'img/orange.png')
      cards[optionTwoId].setAttribute('src', 'img/orange.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/moon.png')
      cards[optionTwoId].setAttribute('src', 'img/moon.png')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      audio.pause()
      alert('You WIN!');
      var audio = new Audio('mp3/congrats.mp3');
      audio.play();
      resultDisplay.textContent = 'You WIN-[ANSWER KEY:Number 1-Turnip! | Number 2-2625 Pounds! | Number 3-Ireland | Number 4-True! | Number 5-True!]'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})