var database
var form, player, game;
var gameState, playerCount;


function setup(){
    createCanvas(1080, 720);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();


}

function draw(){


    if(playerCount === 2){
        game.updateGameState(1);
    }

    if(gameState === 1){
        game.play();
    }


}


