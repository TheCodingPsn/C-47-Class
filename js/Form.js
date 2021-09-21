class Form{
    constructor(){
        this.button = createButton("Join Server")
        this.input = createInput("Enter your name")
        this.title = createElement('h1');
        this.greeting = createElement('h3');
    }

    display(){

            this.title.html("Coin Collector");
            this.title.position(800, 100)
            this.button.position(840, 500)
            this.input.position(815, 450);      


            this.button.mousePressed(()=>{
                this.input.hide();
                this.title.hide();
                this.button.hide();

                player.name = this.input.value();
              
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updatePlayerCount(playerCount);

                this.greeting.html("Hello "+player.name);
                this.greeting.position(815, 450);


               
                
            });
        }


}