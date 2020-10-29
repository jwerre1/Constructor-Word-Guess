const Letter = require("./Letter.js");

const Word = function () {
  this.letterArray = [];
  this.addLetter = input => {
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
    for (let h = 0; h < splitWord.length; h++) {
      let n = alphabet.includes(splitWord[h]);

      if (n === true) this.letterArray.push(new Letter(splitWord[h]));
      else this.letterArray.push(splitWord[h]);
    }
  };
  this.display = () => {
    let displayWord = this.letterArray[0].toString();
    for (let i = 1; i < this.letterArray.length; i++) {
      if (typeof this.letterArray[i] === "object") {
        displayWord += " " + this.letterArray[i].toString();
      } else {
        displayWord += " " + this.letterArray[i];
      }
    }
    return displayWord;
  };
  this.checkGuess = y => {
    for (var j = 0; j < this.letterArray.length; j++) {
      if (typeof this.letterArray[j] === "object") {
        this.letterArray[j].check(y);
      }
    }
  };
};

module.exports = Word;
