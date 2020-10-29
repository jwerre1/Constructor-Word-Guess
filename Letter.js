const Letter = function (character) {
  this.character = character;
  this.guessed = false;
  this.toString = function () {
    if (this.guessed === true) return this.character;
    return "_";
  };
  this.check = function (x) {
    if (x === this.character) this.guessed = true;
  };
};

module.exports = Letter;
