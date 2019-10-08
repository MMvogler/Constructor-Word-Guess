var Letter = require("./letter.js");

function Word (newLetters) {
    this.letters = [];
    this.init = function() {
        for (var i = 0; i < newLetters.length; i++){
            var letter = new Letter(newLetters[i], false);
            this.letters.push(letter);
        };
    }
    this.init()
    // An array of new Letter objects representing the letters of the underlying word
  
    //var newLetters = [];

    // A function that returns a string representing the word. This displays 
    // the character or an underscore and concatenate those together.
    this.toString = function() {
        this.display=""
        for (var i = 0; i < this.letters.length; i++){
            this.display += this.letters[i].toString()   
        }
        return this.display
    };

    // A function that takes a character as an argument and calls the guess function 
    // on each letter object 
    this.checkLetters = function(guess) {
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].checkLetter(guess)
        }
        // "this" is referrring to Letter constructor
        return this
    };
}

// Exporting the Letter Constructor 
module.exports = Word;

// let mystery= new Word(['s','e','c','r','e','t'])
// console.log(mystery.checkLetters("s").toString())
// console.log(mystery.checkLetters("e").toString())