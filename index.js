var Word = require("./Word");
var inquirer = require("inquirer");

var wordBank = ["THE GODFATHER", "SCHINDLER'S LIST", "THE LORD OF THE RINGS - THE RETURN OF THE KING", "FIGHT CLUB", "THE GOOD, THE BAD & THE UGLY"]

// shuffle the wordBank into a random order (found on Stack Overflow)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

// run shuffle function
shuffle(wordBank);

var gameWord = new Word();
// test.addLetter(wordBank[0]);
// console.log(test.display());
var round = 0;
var wrongCount = 5;
var dashfill = "_"

function startGame() {
    console.log("\n--------\nLet's Begin\n--------\n");
    gameWord.addLetter(wordBank[round]);
    // console.log(gameWord.letterArray.length);
    console.log(gameWord.display() + "\n");
    inquirer
    .prompt([
        {
            name: "guess",
            message: "Guess a letter! "
        }
    ]).then(function(answer) {
        var answerUpper = answer.guess.toUpperCase();
        // console.log(answerUpper);
        // var n = alphabet.includes(splitWord[h])
        if (wordBank[round].includes(answerUpper)){
            gameWord.checkGuess(answerUpper);
            correctGuess();
        }
        else {
            wrongGuess();
        }

    })
}

function nextWord() {
    // gameWord.addLetter(wordBank[0]);
    gameWord = new Word();
    round += 1;
    wrongCount = 5;
    gameWord.addLetter(wordBank[round]);
    console.log("Correct!!!\n");
    console.log("You got it right! Next word!\n");
    console.log(gameWord.display() + "\n\n");
    
    inquirer
    .prompt([
        {
            name: "guess",
            message: "Guess a letter! "
        }
    ]).then(function(answer) {
        var answerUpper = answer.guess.toUpperCase();
        // console.log(answerUpper);
        // var n = alphabet.includes(splitWord[h])
        if (wordBank[round].includes(answerUpper)){
            gameWord.checkGuess(answerUpper);
            correctGuess();
        }
        else {
            wrongGuess();
        }
    })
}

function correctGuess() {
    // gameWord.addLetter(wordBank[0]);
    console.log("\n" + gameWord.display() + "\n\n");
    if (gameWord.display().includes(dashfill)) {
    console.log("Correct!!!\n")
    inquirer
    .prompt([
        {
            name: "guess",
            message: "Guess a letter! "
        }
    ]).then(function(answer) {
        var answerUpper = answer.guess.toUpperCase();
        // console.log(answerUpper);
        // var n = alphabet.includes(splitWord[h])
        if (wordBank[round].includes(answerUpper)){
            gameWord.checkGuess(answerUpper);
            correctGuess();
        }
        else {
            wrongGuess();
        }
    })
}
else if (round < wordBank.length - 1) {
    nextWord();
}
else {
    gameComplete();
}
}

function wrongGuess() {
    // gameWord.addLetter(wordBank[0]);
    wrongCount -= 1;
    if (wrongCount > 0) {
        console.log("\n" + gameWord.display() + "\n\n");
        console.log("Wrong!!!\n\n" + wrongCount + " guesses remaining\n")
        inquirer
        .prompt([
            {
                name: "guess",
                message: "Guess a letter! "
            }
        ]).then(function(answer) {
            var answerUpper = answer.guess.toUpperCase();
            // console.log(answerUpper);
            // var n = alphabet.includes(splitWord[h])
            if (wordBank[round].includes(answerUpper)){
                gameWord.checkGuess(answerUpper);
                correctGuess();
            }
            else {
                wrongGuess();
            }
        })
    }
    else {
        console.log("\nWrong!!!\n\n" + wrongCount + " guesses remaining")
        console.log("\n--------\nGAME OVER\n--------\n");
    }
}

function gameComplete() {
    console.log("--------\nYOU WON!!!\n\nGAME OVER!!!\n--------\n");
}

startGame();