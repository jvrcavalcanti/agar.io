export default class {
    constructor(canvas, context) {
        this.canvas = canvas
        this.context = context
        this.width = this.canvas.width
        this.height = this.canvas.height

        this.players = []
        this.foods = []

        this.runging = true
    }

    update() {
        if(!this.runging) {
            return false
        }

        this.context.beginPath()
        this.context.rect(0, 0, this.canvas.width, this.canvas.height)
        // this.context.fillStyle = "rgba(148, 144, 143, 1)"
        this.context.fillStyle = "black"
        this.context.fill()
        this.context.closePath()

        this.players.forEach(player => {
            player.collision()
            player.draw()
        })

        this.foods.forEach(food => {
            food.draw()
        })
    }

    addPlayer(player) {
        const pl = new player(this)
        this.players.push(pl)
        return pl
    }

    addFood(food) {
        this.foods.push(new food(this))
    }
}