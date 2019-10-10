// var words = require("./word.js");
// var inquirer = require("inquirer");


// var letterArray = "abcdefghijklmnopqrstuvwxyz";

// var colors = [
//     "blue",
//     "green",
//     "orange",
//     "red",
//     "pink",
//     "grey",
//     "white",
//     "black",
//     "yellow",
//     "gold"
// ];

// var correctLetters = [];

// var incorrectLetters = [];

// var guessesLeft = 10;

// // Randomly selects a word and uses the Word constructor to store it
// function wordGame() {
//     if(newWord) {
//         var randomIndex = Math.floor(Math.random() * colors.length);
//         var randomWord = colors[randomIndex];
//         var chosenWord = new words(randomWord);
//         var newWord = false;
//     }
//     var completeWord = [];

//     if(completeWord.includes(false)) {
//         // Prompts the user for each guess and keeps track of the user's remaining guesses
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "Type a letter from A to Z",
//                 name: "userinput"
//             }
//         ]).then(function(input){
//             if (!letterArray.includes(input.userinput) || 
//                 input.userinput.length > 1) {
//                 console.log("\n Try again! \n");
//                 wordGame();
//             } else if(
//                 incorrectLetters.includes(input.userinput) || 
//                 correctLetters.includes(input.userinput) ||
//                 input.userinput === ""
//             ) {
//                 console.log("\n Already guessed! \n");
//                 wordGame();
//             } else {
//                 var checkWord = [];
//                 chosenWord.userGuess(input.userinput);
//                 chosenWord.objArray.forEach(checkWord);

//                 if (checkWord.join("") === completeWord.join("")) {
//                     console.log("\nIncorrect!\n");
//                     incorrectLetters.push(input.userinput);
//                     guessesLeft--;
//                 } else {
//                     console.log("\nCorrect!\n");
//                     correctLetters.push(input.userinput);
//                 }
//                 chosenWord();

//                 console.log("Guesses left: " + guessesLeft + "\n");
//                 console.log("Letters guessed: " + incorrectLetters + "\n");

//                 if(guessesLeft > 0) {
//                     wordGame();
//                 } else {
//                     console.log("\n You lost! \n");
//                 }
//             }
        
//         });
//     } else {
//         console.log("\n You win! \n");
//     }

//     function wordCheck(key) {
//         completeWord.push(key.guessed)
//     }

//     function restartGame() {
//         inquirer.prompt([
//             {
//                 type: "list",
//                 message: "Would you like to: ",
//                 choices: ["Start new game", "Exit"],
//                 name: "restart"
//             }
//         ]).then(function(input){
//             if(input.restart === "Play Again") {
//                 newWord = true;
//                 incorrectLetters = [];
//                 correctLetters = [];
//                 guessesLeft = 10;
//                 wordGame();
                
//             } else {
//                 return;
//             }
//         })
//     } 
// }

// wordGame();