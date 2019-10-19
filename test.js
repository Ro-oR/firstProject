const Song = require("./Song.js");              //
const Playlist = require("./Playlist.js");      //Importanweisung für externe Klassen
const User = require("./User.js");              //

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

pl.addSong(song1);
pl.addSong(song2);
pl.addSong(song3);
pl.addSong(song4);
pl.addSong(song5);

pl.printAll();
pl.sort();
pl.printAll();