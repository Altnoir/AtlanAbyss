onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }

    remove('industrialforegoing:stonework_generate/cobblestone')
    event.custom({
        type: 'industrialforegoing:stonework_generate',
        output: {
            item: 'minecraft:stone',
            count: 1
        },
        waterNeed: 1000,
        lavaNeed: 1000,
        waterConsume: 0,
        lavaConsume: 0
    }).id("atlanabyss:stonework_generate_stone")

    //发电机
    remove('industrialforegoing:pitiful_generator')

    //塑料
    remove('industrialforegoing:plastic')
    event.smelting('pneumaticcraft:plastic', 'industrialforegoing:dryrubber').xp(.3).id("atlanabyss:smelting_dryrubber")
    //肉汤注射器
    remove('industrialforegoing:meat_feeder')
    event.shaped('industrialforegoing:meat_feeder', [
        'ABA',
        'CBC',
        ' B '
    ], {
        A: 'pneumaticcraft:plastic',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:glass_bottle'
    }).id("atlanabyss:meat_feeder")
})