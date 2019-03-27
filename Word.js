var Letter = require("./Letter.js");

// make "if else" so that if the character in a word is a space, it just pushes the space
var Word = function() {
    this.letterArray = [];
    this.addLetter = function(input) {
        var splitWord = input.split("");
        var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        for (var h = 0; h < splitWord.length; h++) {
            var n = alphabet.includes(splitWord[h])

            if (n === true) {
            this.letterArray.push(new Letter(splitWord[h]));
            }

            else {
                this.letterArray.push(splitWord[h]);
            }
        }
    };
    this.display = function() {
        var displayWord = this.letterArray[0].dashes();
        for (var i = 1; i < this.letterArray.length; i++) {
            if (typeof(this.letterArray[i]) === "object") {
            displayWord += " " + this.letterArray[i].dashes();
            }
            else {
                displayWord += " " + this.letterArray[i];
            }
        }
        return displayWord;
    };
    this.checkGuess = function(y) {
        for (var j = 0; this.letterArray.length; j++) {
            this.letterArray[j].check(y);
        }
    }
}

var test = new Word();
test.addLetter("STAR WARS IV : A NEW HOPE");
console.log(test.letterArray);
console.log(test.display());




// var wordOne = ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];
// var wordArray = [];

// var genWordArray = function(x) {
//     for (i = 0; i < x.length; i++) {
//         var newLetter = new LetterJS.Letter(x[i]);
//         wordArray.push(newLetter);
//     }
// }

// genWordArray(wordOne);
// console.log(wordArray);

module.exports = Word;