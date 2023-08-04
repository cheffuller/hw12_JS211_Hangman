// brings in the readline module to access the command line
const readline = require("readline");
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const word = "HELLO";
const wordArray = Array.from(word);
const hangmanWord = [];
let hangmanCount = 0;

const initializeHangmanWord = () => {
  for (let i = 0; i < wordArray.length; i++) {
    hangmanWord.push("-");
  }
};

const assignLetter = () => {
  wordArray.forEach((element, index) => {
    if (element === inputLetter) {
      hangmanWord[index] = inputLetter;
    }
  });
};

const checkForWin = () => {
  if (wordArray.join() === hangmanWord.join()) {
    console.log(hangmanWord.join(" "));
    console.log("You Win!");
  } else {
    playHangman();
  }
};

const drawHangman = () => {
  switch (hangmanCount) {
    case 0:
        console.log("  ________");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log(" ---");
    case 1:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |");
      console.log("  |");
      console.log("  |");
      console.log(" ---");
      break;
    case 2:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |      O");
      console.log("  |");
      console.log("  |");
      console.log(" ---");
      break;
    case 3:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |      O");
      console.log("  |      |");
      console.log("  |");
      console.log(" ---");
      break;
    case 4:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |      O");
      console.log("  |     /|");
      console.log("  |");
      console.log(" ---");
      break;
    case 5:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |      O");
      console.log("  |     /|\\");
      console.log("  |");
      console.log(" ---");
      break;
    case 6:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |      O");
      console.log("  |     /|\\");
      console.log("  |     /");
      console.log(" ---");
      break;
    case 7:
      console.log("  ________");
      console.log("  |      |");
      console.log("  |      O");
      console.log("  |     /|\\");
      console.log("  |     / \\");
      console.log(" ---");
      console.log()
      break;
  }
};

const playHangman = () => {
  console.log(hangmanWord.join(" "));
  rl.question("> ", (inputLetter) => {
    if (wordArray.includes(inputLetter)) {
      assignLetter();
      checkForWin();
      drawHangman;
    } else {
      console.log("No matches");
      hangmanCount++;
      drawHangman();
      playHangman();
    }
  });
};

const getPrompt = () => {
  rl.question("hello, would you like to play hangman? (y/n)", (answer1) => {
    if (answer1 === "y") {
      console.log("YaY!");
      initializeHangmanWord();
      playHangman();
    } else {
      console.log("Ok, bye!");
    }
  });
};

getPrompt();
