class Playlist{
    constructor(){ this.list = new Array; }
    addSong(s/*Song*/){ this.list.push(s); }
    sort(){ this.list.sort(this.compare(s1, s2)) }
    compare(s1, s2){
        if (s1.rating > s2.rating) return -1;
        if (s1.rating < s2.rating) return 1;
        return 0;
    }

    /*Testfunktion*/
    printAll(){
        var i;
        for(i = 0; i < this.list.length; i++){
            console.log(this.list[i]);
        }
    }
}

module.exports = Playlist;