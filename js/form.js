class Form{
    constructor(){
        this.input = createInput("Enter your name")
        this.button = createButton("Play")
        this.greating = createElement("H3")
    }
    display(){
        console.log("display")
        var title = createElement("H2")
        title.html("car racing game")
        title.position(displayWidth/2-50,10)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greating.html("Hello "+player.name)
            this.greating.position(displayWidth/2-70,displayHeight/4)
        })
    }
    hide(){
        this.greating.hide()
        this.button.hide()
        this.input.hide()
    }
}