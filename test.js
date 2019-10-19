const Song = require("./Song.js");
const Playlist = require("./Playlist.js");

var song1 = new Song("Testname1");
var song2 = new Song("Testname2");
var song3 = new Song("Testname3");
var song4 = new Song("Testname4");
var song5 = new Song("Testname5");
var pl = new Playlist();

song1.superVote();
song1.vote();
song2.rating = 51;
song3.rating = 23;
song4.rating = 41;
song5.rating = 32;

//console.log(song1);

pl.addSong(song1);
pl.addSong(song2);
pl.addSong(song3);
pl.addSong(song4);
pl.addSong(song5);

pl.printAll();
pl.sort();
pl.printAll();

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