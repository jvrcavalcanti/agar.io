class Player {
    constructor(game) {
        this.screen = game
        this.context = this.screen.context

        this.radius = 5
        this.velocity = this.radius * 2
        this.color = "red"

        // this.id = btoa(new Date().getMilliseconds())
        this.id = "player1"
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

    move(key) {
        const moves = {
            "ArrowUp": player => {
                player.y = Math.max(0 + this.radius, player.y - this.velocity)
            },
            "ArrowDown": player => {
                player.y = Math.min(this.screen.height - this.radius, player.y + this.velocity)
            },
            "ArrowLeft": player => {
                player.x = Math.max(0 + this.radius, player.x - this.velocity)
            },
            "ArrowRight": player => {
                player.x = Math.min(this.screen.width - this.radius, player.x + this.velocity)
            }
        }

        if(moves[key]) {
            moves[key](this)
        }
    }

    distance(obj1, obj2) {
        return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y ,2))
    }

    collision() {
        this.screen.foods.forEach((food, index) => {
            const distance = this.distance(food, this)

            if(distance - food.radius < this.radius) {
                delete this.screen.foods[index]
                this.radius ++
            }
        })
    }
}

export default Player