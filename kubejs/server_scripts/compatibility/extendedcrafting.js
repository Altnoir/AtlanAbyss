onEvent('recipes', event => {
    let remove = (name) => {
		event.remove({ id: name })
	}
    let {
		shaped_table
	} = event.recipes.extendedcrafting;
    shaped_table('minecraft:diamond', [
        'AAAAA',
        'AAAAA',
        'AAAAA',
        'AAAAA',
        'AAAAA'
    ], {
        A: 'minecraft:stone'
    })
})