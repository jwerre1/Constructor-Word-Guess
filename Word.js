var Letter = require("./Letter.js");

var Word = function () {
  this.letterArray = [];
  this.addLetter = function (input) {
    var splitWord = input.split("");
    var alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    for (var h = 0; h < splitWord.length; h++) {
      var n = alphabet.includes(splitWord[h]);

      if (n === true) this.letterArray.push(new Letter(splitWord[h]));
      else this.letterArray.push(splitWord[h]);
    }
  };
  this.display = function () {
    var displayWord = this.letterArray[0].toString();
    for (var i = 1; i < this.letterArray.length; i++) {
      if (typeof this.letterArray[i] === "object") {
        displayWord += " " + this.letterArray[i].toString();
      } else {
        displayWord += " " + this.letterArray[i];
      }
    }
    return displayWord;
  };
  this.checkGuess = function (y) {
    for (var j = 0; j < this.letterArray.length; j++) {
      if (typeof this.letterArray[j] === "object") {
        this.letterArray[j].check(y);
      }
    }
  };
};

module.exports = Word;
