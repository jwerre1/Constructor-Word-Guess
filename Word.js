var Letter = require("./Letter.js");

var Word = function() {
    this.letterArray = [];
    this.addLetter = function(input) {
        var splitWord = input.split("");
        for (var h = 0; h < splitWord.length; h++) {
            this.letterArray.push(new Letter(splitWord[h]));
        }
    };
    this.display = function() {
        var displayWord = this.letterArray[0].dashes();
        for (var i = 1; i < this.letterArray.length; i++) {
            displayWord += " " + this.letterArray[i].dashes();
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
test.addLetter("JORDAN");
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