const Song = require("./Song.js");

var song1 = new Song("Testname");

song1.rating += 10;
song1.playSong();
console.log(song1);

// // Diese Konstante wird für die Berechnung eines Kreisumfangs benötigt
// const PI = 3.141592653589793;
// /* 
//  * Nimmt die Variable message entgegen 
//  * und gibt diese auf der Konsole aus
//  */ 
// var out = PI * 100;
// var message = "Wallo Helt: " + out;
// console.log(message);

// ///////////////////////

// // ist global und überall verfügbar
// var x = 0;
// if(x == 0){ 
// // gibt 0 auf der Konsole aus
// console.log(x);
// let a = 5;
// // gibt 5 auf der Konsole aus
// console.log(a);
// }
// // existiert nicht, da lokal sichtbar (und wirft deswegen einen Fehler)
// //console.log(a)

// console.log(); //Leerzeile

// for (let x = 0; x < 10; x++){
//     console.log(x)
// }

// console.log(); //Leerzeile

// const log = function(message){
//     console.log(message)
// };

// const min = function(a, b, callback){
//     if(a>b){
//         callback("a größer b");
//     } else if (a < b){
//         callback("b größer a");
//     } else {
//         callback("gleich");
//     }
// }

// min(5,6,log);

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Radius?", function(answer){
//     console.log('Antwort: ' + answer);
//     rl.close();
// });