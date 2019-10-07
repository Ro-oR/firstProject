// Diese Konstante wird für die Berechnung eines Kreisumfangs benötigt
const PI = 3.141592653589793;
/* 
 * Nimmt die Variable message entgegen 
 * und gibt diese auf der Konsole aus
 */ 
var out = PI * 100;
var message = "Wallo Helt: " + out;
console.log(message);

///////////////////////

// ist global und überall verfügbar
var x = 0;
if(x == 0){ 
// gibt 0 auf der Konsole aus
console.log(x);
let a = 5;
// gibt 5 auf der Konsole aus
console.log(a);
}
// existiert nicht, da lokal sichtbar (und wirft deswegen einen Fehler)
console.log(a)