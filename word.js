var letters = require("./letter.js");

function Word (newLetters) {
    this.newLetters = newLetters;

    // An array of new Letter objects representing the letters of the underlying word
    var newLetters = [];

    // A function that returns a string representing the word. This should call the 
    // function on each letter object (the first function defined in Letter.js) that 
    // displays the character or an underscore and concatenate those together.
    this.toString = function() {
        for (var i = 0; i < newLetters.length; i++){
            var letter = new letters(newLetters[i]);
            this.newLetters.push(letter);
        }

    };

    // A function that takes a character as an argument and calls the guess function 
    // on each letter object (the second function defined in Letter.js)
    this.checkLetters = function() {

    };
}

// Exporting the Letter Constructor 
module.exports = Word;





