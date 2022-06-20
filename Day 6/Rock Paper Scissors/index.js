const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => { // here for any button click this function is invoked and thus it is generalized as we are never going to change the button (adding or removing).
     userChoice = e.target.id;
     userChoiceDisplay.innerHTML = userChoice;
     generateComputerChoice();
}))

function generateComputerChoice(){
     const randomNumber = Math.floor(Math.random() * 3) + 1;

     if(randomNumber === 1){
          computerChoice = "Rock";
     }
     if(randomNumber === 2){
          computerChoice = "Paper";
     }
     if(randomNumber === 3){
          computerChoice = "Scissors";
     }

     computerChoiceDisplay.innerHTML = computerChoice;
     getResult();
}

function getResult(){
     if(computerChoice == userChoice){
          result.innerHTML = "Draw";
     }
     
     if(computerChoice == "Rock" && userChoice == "Paper"){
          result.innerHTML = "You won!";
     }
     
     if(computerChoice == "Paper" && userChoice == "Rock"){
          result.innerHTML = "Computer won";
     }
     
     if(computerChoice == "Rock" && userChoice == "Scissors"){
          result.innerHTML = "Computer won";
     }
     
     if(computerChoice == "Scissors" && userChoice == "Rock"){
          result.innerHTML = "You won!";
     }
     
     if(computerChoice == "Scissors" && userChoice == "Paper"){
          result.innerHTML = "Computer won";
     }
     
     if(computerChoice == "Paper" && userChoice == "Scissors"){
          result.innerHTML = "You won!";
     }
}