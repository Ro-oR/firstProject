class Playlist{
    constructor(){
        var list = new Array;
        //var addsong = function(song) {
        //    list.
        //}
    }
}
class Test{
    constructor(songname){
        this.songname = songname;
        this.rating = 0;

        /*function playSong() {
            console.log(this.songname + "\t" + this.rating)
            this.rating = 0;
        }*/
    }
    playSong() {
        console.log(this.songname + "\t" + this.rating)
        this.rating = 0;
    }
}

var test1 = new Test("Test-1");
var test2 = new Test("Test-2");

test1.rating += 3;

console.log(test1.songname);
console.log(test2.songname);
console.log(test1.rating);
test1.playSong();
console.log(test1.rating);