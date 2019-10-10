console.log("Philipp"); //Aufgabe 1

//Aufgabe 2
const maxRating = 10;
let overallRatings = 5;
let currentRating = 8;

console.log(maxRating + "\n" + overallRatings + "\n" + currentRating);

overallRatings = 7;
currentRating = 8.1;
//maxRating = 9; TypeError: Assignment to constant variable.

console.log(maxRating + "\n" + overallRatings + "\n" + currentRating);

//Aufgabe 3
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Test? ", function(answer){
    let input = answer;
    console.log(input);
    rl.close();
});

//958 512 651

//RB1Scr5HUH