ServerEvents.recipes(event => {
    let { recipes } = event;
    let { kubejs, create } = recipes;

    function remove(id) {
        event.remove({ id: id })
    }

    // 安山合金
    remove('create:crafting/materials/andesite_alloy')
    remove('create:crafting/materials/andesite_alloy_from_zinc')
    remove('create_dd:industrial_iron/andesite_alloy')
    remove('create:mixing/andesite_alloy')
    remove('create:mixing/andesite_alloy_from_zinc')
    remove('create_dd:industrial_iron/andesite_alloy_mixing')

    kubejs.shaped('create:andesite_alloy', [
        'AB',
        'BA'
    ], {
        A: 'immersive_weathering:moss_clump',
        B: 'minecraft:andesite'
    }).id('atlanabyss2:andesite_alloy')

    create.mixing('create:andesite_alloy', [
        'minecraft:andesite',
        'immersive_weathering:moss_clump'
    ]).id('atlanabyss2:mixing_andesite_alloy')
})

