var Letter = function(character) {
    this.character = character;
    this.guessed = false;
    this.toString = function() {
        if (this.guessed === true) {
            return this.character
        }
        else {
            return "_";
        }
    };
    this.check = function(x) {
        if (x === this.character) {
            this.guessed = true;
        }
    }
}

// Exporting our Letter constructor. We will require it in Word.js
module.exports = Letter;




// var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var alphaArray = [];

// var genAlphaArray = function() {
//     for (i = 0; i < alphabet.length; i++) {
//         var newLetter = new Letter(alphabet[i]);
//         alphaArray.push(newLetter);
//     }

    // for checking
//     for (var x = 0; x < alphaArray.length; x++) {
//         if (input === alphaArray[x].character) {
//             console.log("Found!");
//             console.log(alphaArray[x].character);
//             console.log(alphaArray[x].guessed);
//             alphaArray[x].check(input);
//             console.log(alphaArray[x].dashes());
//         }
//     }
// }


// console.log(alphaArray);

// var input = process.argv[2].toUpperCase();
// console.log(input);

// var checkInput = function() {
//     for (var x = 0; x < alphaArray.length; x++) {
//         if (input === alphaArray[x].character) {
//             console.log("Found!");
//             console.log(alphaArray[x].character);
//             console.log(alphaArray[x].guessed);
//         }
//     }
// }

// genAlphaArray();
// checkInput();
