// array of 100 words from which the hangman word will be randomly selected
const arrayOfWords = ['include',
  'course',
  'house',
  'report',
  'group',
  'woman',
  'around',
  'book',
  'family',
  'seem',
  'again',
  'system',
  'every',
  'question',
  'during',
  'always',
  'small',
  'study',
  'follow',
  'begin',
  'important',
  'since',
  'under',
  'turn',
  'bring',
  'early',
  'hand',
  'state',
  'move',
  'money',
  'fact',
  'however',
  'area',
  'provide',
  'read',
  'friend',
  'month',
  'large',
  'business',
  'without',
  'information',
  'order',
  'government',
  'word',
  'issue',
  'market',
  'build',
  'hold',
  'service',
  'against',
  'believe',
  'second',
  'though',
  'love',
  'increase',
  'plan',
  'result',
  'away',
  'example',
  'happen',
  'offer',
  'young',
  'program',
  'lead',
  'understand',
  'thank',
  'today',
  'hour',
  'student',
  'face',
  'hope',
  'until',
  'reason',
  'spend',
  'head',
  'learn',
  'level',
  'person',
  'experience',
  'member',
  'enough',
  'city',
  'night',
  'support',
  'whether',
  'present',
  'quite',
  'although',
  'least',
  'speak',
  'within',
  'process',
  'public',
  'often',
  'train',
  'possible',
  'actually',
  'rather',
  'together',
  'consider']

// brings in the readline module to access the command line
const readline = require("readline");

// uses the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// global variables for the hangman game
let word = "";
let wordArray = [];
let hangmanWord = [];
let guessedLetters = [];
let hangmanCount = 0;

// function to reset global variables if game is replayed
const resetGame = () => {
  wordArray = Array.from(word);
  hangmanWord = [];
  guessedLetters = [];
  hangmanCount = 0;
};

// function to generate a random number between 1-99
const generateRandom = () => {
  let rand = Math.random() * 100;
  rand = Math.floor(rand); 
  return rand;
}

// function to assign hangman word, create the wordArray from that word, and
// create the appropriate number of dashes to display for the hangman word
const initializeHangmanWord = () => {
  word = arrayOfWords[generateRandom()]
  wordArray = Array.from(word)
  for (let i = 0; i < wordArray.length; i++) {
    hangmanWord.push("-");
  }
};

// function to replace the dashes with the appropriate letter when correctly guessed
const assignLetter = (letter) => {
  wordArray.forEach((element, index) => {
    if (element === letter) {
      hangmanWord[index] = letter;
    }
  });
};

// function to check for the win condition
const checkForWin = () => {
  if (wordArray.join() === hangmanWord.join()) {
    console.log(hangmanWord.join(" "));
    console.log("You Win!");
    playAgain();
  } else {
    playHangman();
  }
};

// function to draw the hangman in the terminal based on the number of incorrect guesses
const drawHangman = () => {
  console.log(' ')
  console.log(' ')
  console.log(' ')
  switch (hangmanCount) {
    case 0:
      console.log("  ________");
      console.log("  |");
      console.log("  |");
      console.log("  |");
      console.log("  |");
      console.log(" ---");
      break;
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
      console.log(`the hangman word was ${word}`);
      break;
  }
};

// function that runs on either loss or win to give player the option to play again
const playAgain = () => {
  rl.question("would you like to play again? (y/n) >", (answer) => {
    if (answer === "y") {
      console.log("YaY!");
      resetGame();
      initializeHangmanWord();
      playHangman();
    } else {
      console.log("Ok, bye!");
    }
  });
}

// function that displays the hangman word (with dashes for unguessed letters)
// and the guessed letters that didn't match the hangman word
const displayWords = () => {
  console.log(hangmanWord.join(" "));
  console.log(guessedLetters.map(char => char + '\u0336').join(" "))
  console.log(' ')
}


// function with main body of hangman code, it provides the prompt, receives the
// input letter and calls the other functions 
const playHangman = () => {
  displayWords();
  rl.question("> ", (inputLetter) => {
    if (wordArray.includes(inputLetter)) {
      assignLetter(inputLetter);
      drawHangman();
      checkForWin();
    } else {
      guessedLetters.push(inputLetter)
      hangmanCount++;
      drawHangman();
      if (hangmanCount === 7) {
        playAgain();
      } else {
        playHangman();
      }
    }
  });
};

// function that starts the hangman game
const getPrompt = () => {
  rl.question("hello, would you like to play hangman? (y/n) >", (answer) => {
    if (answer === "y") {
      console.log("YaY!");
      initializeHangmanWord();
      playHangman();
    } else {
      console.log("Ok, bye!");
    }
  });
};

// function call to start the hangman game
getPrompt();
