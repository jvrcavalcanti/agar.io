class Food {
    constructor(game) {
        this.screen = game
        this.context = this.screen.context

        this.color = "white"
        this.radius = 5

        this.x = parseInt(Math.random() * (this.screen.width - (this.radius * 2))) + this.radius
        this.y = parseInt(Math.random() * (this.screen.height - (this.radius * 2))) + this.radius
    }

    draw() {
        this.context.beginPath()
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.context.fillStyle = this.color
        this.context.fill()
        this.context.closePath()
    }
}

export default Food