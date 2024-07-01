ServerEvents.recipes(e => {
    const {
        recipes: {
            kubejs,
            create
        }
    } = e;

    function remove(id) {
        e.remove({ id: id })
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
        A: 'minecraft:moss_block',
        B: 'minecraft:andesite'
    }).id('atlanabyss2:andesite_alloy')

    create.mixing('create:andesite_alloy', [
        'minecraft:andesite',
        'minecraft:moss_block'
    ]).id('atlanabyss2:mixing_andesite_alloy')

    e.recipes.createaddition.charging(
        'minecraft:diamond',
        'minecraft:coal',
        4000,
        200
    )
})