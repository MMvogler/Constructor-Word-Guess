function Letter (underlinedLetter, letterGuessed) {
    
    // A string value to store the underlying character for the letter
    this.underlinedLetter = underlinedLetter;
    //var underlinedLetter = [];
    
    // A boolean value that stores whether that letter has been guessed yet
    this.letterGuessed = letterGuessed;
    //var letterGuessed = true;

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
    this.checkLetter = function(checkLetter) {
        if(checkLetter === this.underlinedLetter){
            this.letterGuessed = true;
        }
    };
};
// Exporting the Letter Constructor 
module.exports = Letter;
// var a = new Letter("a", false)
// var b = new Letter("b", true)
// var c = new Letter("a", false)
// console.log(a.toString())
// console.log(b)
// console.log("1",c)
// console.log(c.checkLetters("a"))
// console.log("2",c)
