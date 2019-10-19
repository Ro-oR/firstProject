class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
        this.votes = 10;
        this.superVote = 0;
    }
    vote(){ this.votes--; }
    voteRefresh(){ this.votes = 10; }
}

module.exports = User; //Exportanweisung um die Klasse in der Mainfunktion o.Ä. zu haben.