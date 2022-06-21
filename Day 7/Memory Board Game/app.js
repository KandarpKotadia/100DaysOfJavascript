const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const result = document.querySelector("#result");
let cardChosen = [];
let cardChoseIds = [];
const cardsWon = [];
result.innerHTML = cardsWon.length;

function createBoard() {
     for(let i = 0; i < cardArray.length; i++){
          const card = document.createElement("img");
          card.setAttribute("src", "images/blank.png");
          card.setAttribute("data-id", i);
          card.addEventListener("click", flipcard);
          gridDisplay.append(card);
     }
}

createBoard();

function checkMatch(){
     const cards = document.querySelectorAll("img");

     // if(cardChosen[0] == cardChosen[1]){
     //      cards[cardChoseIds[0]].setAttribute("src", "images/blank.png");
     //      cards[cardChoseIds[1]].setAttribute("src", "images/blank.png");
     //      alert("You've clicked the same image");
     // }

     if(cardChosen[0] == cardChosen[1]){
          alert("You've found a match!");
          cards[cardChoseIds[0]].setAttribute("src", "images/white.png");
          cards[cardChoseIds[1]].setAttribute("src", "images/white.png");

          cards[cardChoseIds[0]].removeEventListener("click", flipcard);
          cards[cardChoseIds[1]].removeEventListener("click", flipcard);

          cardsWon.push(cardChosen);
     }else{
          cards[cardChoseIds[0]].setAttribute("src", "images/blank.png");
          cards[cardChoseIds[1]].setAttribute("src", "images/blank.png");
     }
     result.innerHTML = cardsWon.length;

     cardChosen = [];
     cardChoseIds = [];

     if(cardsWon.length == (cardArray.length/2)){
          result.innerHTML = "Congratulations, you've found them all!";
     }
}

function flipcard (){
     const cardId = this.getAttribute("data-id");
     cardChosen.push(cardArray[cardId].name);
     cardChoseIds.push(cardId);
     this.setAttribute("src", cardArray[cardId].img);

     if(cardChosen.length === 2){
          setTimeout(checkMatch, 500);
     }
}