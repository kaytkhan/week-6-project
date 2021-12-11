import Deck from "./deck.js";

const deck = new Deck();
deck.shuffleCard();

let computerPlayer = [];
let humanPlayer = [];
let playing_card_1 = document.querySelector(".playing_card_1");
let demo_card_1 = document.querySelector(".demo_card_1");
let demo_card_2 = document.querySelector(".demo_card_2");
let playing_card_2 = document.querySelector(".playing_card_2");
let start_game = document.getElementById("start_game");
let result = document.querySelector(".result");
let turns = 0;
let computer_score = 0;
let human_score = 0;

// these dataset card divided value;
demo_card_1.dataset.value = computerPlayer.length;
demo_card_1.innerHTML = demo_card_1.dataset.value;
demo_card_2.dataset.value = humanPlayer.length;
demo_card_2.innerHTML = demo_card_2.dataset.value;

//start game
const startGame = start_game.addEventListener("click", function () {
  console.log(`final score => ${human_score} : ${computer_score}`);
  start_game.disable = true;
  playing_card_1.classList.remove("hide");
  playing_card_2.classList.remove("hide");
  for (let i = 0; i < deck.cardsFromCards.length; i++) {
    if (i < 26) {
      computerPlayer.push(deck.cardsFromCards[i]);
    } else {
      humanPlayer.push(deck.cardsFromCards[i]);
    }
  }
});

// click on demo card 1
const clickdemocard =  demo_card_1.addEventListener("click", function () {
  turns++;
  console.log(turns);
  playing_card_1.dataset.value = `${computerPlayer[turns].suit} ${computerPlayer[turns].value}`;
  if(parseInt(computerPlayer[turns].value)) {
    computer_score += parseInt(computerPlayer[turns].value);
    return computer_score;
  }
});

// click on demo card 2
demo_card_2.addEventListener("click", function () {
  turns++;
  console.log(turns);
  playing_card_2.dataset.value = `${humanPlayer[turns].suit} ${humanPlayer[turns].value}`;
  if (parseInt(humanPlayer[turns].value)) {
    human_score += parseInt(humanPlayer[turns].value);
    return human_score;
  }
});

if(turns === 25) {
  turns = 0;
  if(human_score > computer_score) {
    console.log(`final score => ${human_score} : ${computer_score}`);
    console.log(human_score);
    result.innerText = "win";
  } 
  else if(human_score < computer_score) {
    result.innerText = "lose";
  } 
  else {
    result.innerText = "draw";
  }
}




