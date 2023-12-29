onEvent('recipes', event => {
    let remove = (name) => {
        event.remove({ id: name })
    }
})