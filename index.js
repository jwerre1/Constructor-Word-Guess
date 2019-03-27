var Word = require("./Word");
var inquirer = require("inquirer");

var wordBank = ["THE GODFATHER", "SCHINDLER'S LIST", "THE LORD OF THE RINGS - THE RETURN OF THE KING", "FIGHT CLUB", "THE GOOD, THE BAD & THE UGLY"]
var rand = Math.floor(Math.random()*wordBank.length);

var test = new Word();
test.addLetter(wordBank[rand]);
console.log(test.display());