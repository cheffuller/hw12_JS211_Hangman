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

const initializeHangmanWord = () => {
  for (let i = 0; i < wordArray.length; i++) {
    hangmanWord.push("-");
  }
};

const checkForWin = () => {
    if (wordArray.join() === hangmanWord.join()) {
        console.log(hangmanWord.join(" "));
        console.log('You Win!')
    } else {
        playHangman();
    }
}

const playHangman = () => {
  console.log("Input: Any Letter");
  console.log(hangmanWord.join(" "));
  rl.question("> ", (inputLetter) => {
    if (wordArray.includes(inputLetter)) {
      wordArray.forEach((element, index) => {
        if (element === inputLetter) {
          hangmanWord[index] = inputLetter;
        }
      });
      checkForWin();
    } else {
        console.log('No matches')
        playHangman()
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
