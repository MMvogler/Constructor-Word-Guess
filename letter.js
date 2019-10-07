function Letter (underlinedLetter, letterGuessed) {
    this.underlinedLetter = underlinedLetter;
    this.letterGuessed = letterGuessed;

    // A string value to store the underlying character for the letter
    var underlinedLetter = [];

    // A boolean value that stores whether that letter has been guessed yet
    var letterGuessed = true;

    // A function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed.
    this.toString = function() {
        if(this.underlinedLetter === " ") {
            this.letterGuessed = true;
            return " ";
        }else if (this.letterGuessed === false){
            return "_";

        }else {
            return this.underlinedLetter;
        }
    };
    // A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly.
    this.checkLetters = function(checkLetters) {
        if(checkLetters === this.underlinedLetter){
            this.letterGuessed = true;
        }
    };
};
// Exporting the Letter Constructor 
module.exports = Letter;
