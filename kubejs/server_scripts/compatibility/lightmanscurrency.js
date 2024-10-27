onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }

    //禁止私自印钞
    remove('lightmanscurrency:coinmint')

    //交易终端
    remove('lightmanscurrency:gem_terminal')
    event.shaped('lightmanscurrency:gem_terminal', [
        'A',
        'B'
    ], {
        A: 'kubejs:vibration_mechanism',
        B: 'minecraft:amethyst_block'
    }).id('atlanabyss:gem_terminal')
})