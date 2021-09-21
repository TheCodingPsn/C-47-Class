class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.score =  0;
        this.coins = 0;
    }

getPlayerCount(){
    var playerCountRef = playerCount.ref('playerCount')
    playerCountRef.on("value", function(data){
        playerCount = data.val();
    });
}

updatePlayerCount(count){
database.ref('/').update({
    playerCount:count
});
}

update(){
    var playerIndex = 'players/player' + this.index;// player1 
    database.ref(playerIndex).set({
        name:this.name, 
        score:this.score,
        coins:this.coins,
    })
}

}