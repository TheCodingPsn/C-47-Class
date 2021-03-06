class Game {
    constructor(){
        
    }

    getGameState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function (data){
            gameState = data.val();
        })
    }

    updateGameState(state){ 
        database.ref('/').update({
            gameState:state
        })
        
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value") ;
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
            form = new Form();
            form.display(); 
        }
        
       
    }



play(){
    console.log("Game Begins!")
}


}