import Game from "./src/Agar.js"
import Player from "./src/Player.js"
import Food from "./src/Food.js"
import onEvents from "./events.js"


const canvas = document.getElementsByTagName("canvas")[0]
const context = canvas.getContext("2d")
// const ID = "player1"

const game = new Game(canvas, context)
const player = game.addPlayer(Player)
setInterval(() => game.addFood(Food), 1000 * 0.5)
onEvents(player)
setInterval(() => game.update(), 1000 / 60)