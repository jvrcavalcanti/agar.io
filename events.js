const onEvents = (player) => {
    document.addEventListener("keydown", event => {
        const key = event.key
        player.move(key)
    })
}

export default onEvents