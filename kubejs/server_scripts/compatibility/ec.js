onEvent('recipes', event => {
    let remove = (name) => {
        event.remove({ id: name })
    }
    //删除锭合块配方
    remove('extendedcrafting:luminessence_block')
    remove('extendedcrafting:black_iron_block')
    remove('extendedcrafting:redstone_ingot_block')
    remove('extendedcrafting:ender_ingot_block')
    remove('extendedcrafting:enhanced_ender_ingot_block')
    remove('extendedcrafting:crystaltine_block')
    remove('extendedcrafting:the_ultimate_block')
    remove('extendedcrafting:nether_star_block')
    remove('extendedcrafting:ender_star_block')
    //删除块合锭配方
    remove('extendedcrafting:luminessence_block_uncraft')
    remove('extendedcrafting:black_iron_block_uncraft')
    remove('extendedcrafting:redstone_ingot_block_uncraft')
    remove('extendedcrafting:ender_ingot_block_uncraft')
    remove('extendedcrafting:enhanced_ender_ingot_block_uncraft')
    remove('extendedcrafting:crystaltine_block_uncraft')
    remove('extendedcrafting:the_ultimate_block_uncraft')
    remove('extendedcrafting:nether_star_block_uncraft')
    remove('extendedcrafting:ender_star_block_uncraft')
    //删除粒合锭配方
    remove('extendedcrafting:black_iron_ingot_recraft')
    remove('extendedcrafting:redstone_ingot_recraft')
    remove('extendedcrafting:ender_ingot_recraft')
    remove('extendedcrafting:enhanced_ender_ingot_recraft')
    remove('extendedcrafting:crystaltine_ingot_recraft')
    remove('extendedcrafting:the_ultimate_ingot_recraft')
    //删除锭合粒配方
    remove('extendedcrafting:black_iron_ingot_uncraft')
    remove('extendedcrafting:redstone_ingot_uncraft')
    remove('extendedcrafting:ender_ingot_uncraft')
    remove('extendedcrafting:enhanced_ender_ingot_uncraft')
    remove('extendedcrafting:crystaltine_ingot_uncraft')
    remove('extendedcrafting:the_ultimate_ingot_uncraft')
    //删除锭配方
    remove('extendedcrafting:luminessence')
    remove('extendedcrafting:black_iron_ingot')
    remove('extendedcrafting:redstone_ingot')
    remove('extendedcrafting:ender_ingot')

    //板
    remove('extendedcrafting:black_iron_slate')
    remove('extendedcrafting:basic_component')
    remove('extendedcrafting:advanced_component')
    remove('extendedcrafting:elite_component')
    remove('extendedcrafting:ultimate_component')
    remove('extendedcrafting:redstone_component')
    remove('extendedcrafting:ender_component')
    remove('extendedcrafting:enhanced_ender_component')
    remove('extendedcrafting:crystaltine_component')
    remove('extendedcrafting:the_ultimate_component')
    //催化剂
    remove('extendedcrafting:basic_catalyst')
    remove('extendedcrafting:advanced_catalyst')
    remove('extendedcrafting:elite_catalyst')
    remove('extendedcrafting:ultimate_catalyst')
    remove('extendedcrafting:redstone_catalyst')
    remove('extendedcrafting:ender_catalyst')
    remove('extendedcrafting:enhanced_ender_catalyst')
    remove('extendedcrafting:crystaltine_catalyst')
    remove('extendedcrafting:the_ultimate_catalyst')

    //奇点
    remove('extendedcrafting:frame')
    remove('extendedcrafting:compressor')
    remove('extendedcrafting:ultimate_singularity')
    //框架
    event.shaped('extendedcrafting:frame', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'beyond_earth:compressed_ostrum',
        B: 'kubejs:thermal_mechanism',
        C: 'thermal:obsidian_glass'
    }).id('atlanabyss:extendedcrafting_frame')
    //压缩机
    event.shaped('extendedcrafting:compressor', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'pneumaticcraft:pressure_chamber_wall',
        B: 'extendedcrafting:frame'
    }).id('atlanabyss:extendedcrafting_compressor')

    //水晶矩阵锭
    event.recipes.create.mixing('kubejs:crystal_matrix_ingot', [
        'minecraft:nether_star',
        Fluid.of('thermal:ender', 500)
    ]).id('atlanabyss:crystal_matrix_ingot')
    //无尽之锭
    event.recipes.create.mechanical_crafting('kubejs:infinity_ingot', [
        ' AB',
        'CDE',
        'FG '
    ], {
        A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:magbismuth"}').weakNBT(),
        B: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:meteosteel"}').weakNBT(),
        C: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:zirconium"}').weakNBT(),
        D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:elemental"}').weakNBT(),
        E: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lutetium"}').weakNBT(),
        F: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminium"}').weakNBT(),
        G: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:virgin"}').weakNBT()
    }).id("atlanabyss:infinity_ingot");
})