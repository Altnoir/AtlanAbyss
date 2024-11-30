onEvent('recipes', event => {
    let remove = (name) => {
        event.remove({ id: name })
    }
    const { create, thermal } = event.recipes;
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
        'C C',
        'ACA'
    ], {
        A: 'kubejs:gravitation_mechanism',
        C: 'thermal:obsidian_glass'
    }).id('atlanabyss:extendedcrafting_frame')
    //压缩机
    event.shaped('extendedcrafting:compressor', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'extendedcrafting:frame'
    }).id('atlanabyss:extendedcrafting_compressor')

    //水晶矩阵锭
    create.mixing('kubejs:crystal_matrix_ingot', [
        'minecraft:nether_star',
        Fluid.of('thermal:ender', 500)
    ]).id('atlanabyss:crystal_matrix_ingot')
    //无尽之锭
    create.mechanical_crafting('kubejs:infinity_ingot', [
        'ABCDEFG',
        'PPPPPPP'
    ], {
        A: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:magbismuth"}').weakNBT(),
        B: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:meteosteel"}').weakNBT(),
        C: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:zirconium"}').weakNBT(),
        D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:elemental"}').weakNBT(),
        E: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lutetium"}').weakNBT(),
        F: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminium"}').weakNBT(),
        G: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:virgin"}').weakNBT(),
        P: 'mekanism:pellet_antimatter'
    }).id('atlanabyss:infinity_ingot');


    function compressor(output, input, count, power) {
        event.custom({
            type: 'extendedcrafting:compressor',
            powerCost: power,
            inputCount: count,
            ingredient: { item: input },
            catalyst: { item: 'kubejs:crystal_matrix_ingot' },
            result: { item: 'extendedcrafting:singularity', nbt: `{Id:\"extendedcrafting:${output}\"}` }
        }).id('atlanabyss:compressor_' + output);

        thermal.insolator([
            Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${output}"}`),
            Item.of(input).withChance(1.5)
        ], [
            Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${output}"}`)
        ]).energy(300000).id('atlanabyss:insolator_' + output);
    }
    //锆奇点
    compressor('zirconium', 'kubejs:zirconium_alloy_ingot', 8640, 864000)
    //原初奇点
    compressor('virgin', 'kubejs:virgin_ingot', 1728, 1728000)
    //铝合金奇点
    compressor('aluminium', 'kubejs:aluminium_alloy_ingot', 13824, 1382400)
    //镥奇点
    compressor('lutetium', 'kubejs:lutetium_ingot', 3456, 691200)
    //神铋奇点
    compressor('magbismuth', 'kubejs:magbismuth_ingot', 5184, 1036800)
    //陨钢奇点
    compressor('meteosteel', 'kubejs:meteosteel_ingot', 12096, 1209600)
    //神铋奇点
    compressor('elemental', 'kubejs:elemental_ingot', 7210, 721000)



    //加速火把
    remove('torcherino:torcherino')
    event.shaped('torcherino:torcherino', [
        'A',
        'B'
    ], {
        A: 'tiab:time_in_a_bottle',
        B: 'minecraft:stick'
    }).id('atlanabyss:tor_torcherino')
    //加速南瓜
    remove('torcherino:lanterino')
    event.shaped('torcherino:lanterino', [
        'A',
        'B'
    ], {
        A: 'minecraft:carved_pumpkin',
        B: 'torcherino:torcherino'
    }).id('atlanabyss:tor_lanterino')
    remove('torcherino:compressed_lanterino')
    event.shaped('torcherino:compressed_lanterino', [
        'A',
        'B'
    ], {
        A: 'minecraft:carved_pumpkin',
        B: 'torcherino:compressed_torcherino'
    }).id('atlanabyss:tor_compressed_lanterino')
    remove('torcherino:double_compressed_lanterino')
    event.shaped('torcherino:double_compressed_lanterino', [
        'A',
        'B'
    ], {
        A: 'minecraft:carved_pumpkin',
        B: 'torcherino:double_compressed_torcherino'
    }).id('atlanabyss:tor_double_compressed_lanterino')
    //加速灯笼
    remove('torcherino:lantern')
    event.shaped('torcherino:lantern', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'torcherino:torcherino'
    }).id('atlanabyss:tor_lantern')
    remove('torcherino:compressed_lantern')
    event.shaped('torcherino:compressed_lantern', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'torcherino:compressed_torcherino'
    }).id('atlanabyss:tor_compressed_lantern')
    remove('torcherino:double_compressed_lantern')
    event.shaped('torcherino:double_compressed_lantern', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_nugget',
        B: 'torcherino:double_compressed_torcherino'
    }).id('atlanabyss:tor_double_compressed_lantern')

    //创造箱子
    create.mechanical_crafting('create:creative_crate', [
        'CCCCCCC',
        'C     C',
        'C     C',
        'C     C',
        'C     C',
        'C     C',
        'CCCCCCC'
    ], {
        C: 'kubejs:infinity_ingot'
    }).id('atlanabyss:creative_crate')

    //创造储罐
    event.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 7210000,
        inputCount: 2233,
        ingredient: { item: 'create:fluid_tank' },
        catalyst: { item: 'kubejs:infinity_ingot' },
        result: { item: 'create:creative_fluid_tank' }
    }).id('atlanabyss:compressor_creative_fluid_tank');
})