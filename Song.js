class Song{
    constructor(songname){
        this.songname = songname;
        this.rating = 0;
    }
    vote(){ this.rating++; }
    superVote(){ this.rating += 10; }
    playSong() {
        console.log(this.songname + "\t" + this.rating)
        this.rating = 0;
    }
}

module.exports = Song; //Exportanweisung um die Klasse in der Mainfunktion o.Ä. zu haben.