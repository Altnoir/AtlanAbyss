onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }

    const { create } = event.recipes;

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
    //remove('industrialforegoing:plastic')

    //肉汤注射器
    remove('industrialforegoing:meat_feeder')
    event.shaped('industrialforegoing:meat_feeder', [
        'ABA',
        'CBC',
        ' B '
    ], {
        A: 'industrialforegoing:plastic',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:glass_bottle'
    }).id('atlanabyss:meat_feeder')

    //胶乳统一
    remove('industrialforegoing:fluid_extractor')
    create.mixing(Fluid.of('industrialforegoing:latex', 50), [
        Fluid.of('thermal:latex', 25),
        Fluid.of('createdieselgenerators:gasoline', 25)
    ]).heated().id('atlanabyss:mixing_heated_latex');

    let dissolution_chamber = (inputs, outputItem, outputCount, fluid, fluidAmount, time) => {
        let inputList = []

        inputs.forEach(list => {
            let input = { item: list }
            inputList.push(input)
        })
        event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: inputList,
            inputFluid: `{FluidName:\"${fluid}\",Amount:${fluidAmount}}`,
            output: {
                item: outputItem,
                count: outputCount
            },
            processingTime: time
        }).id('atlanabyss:dissolution_chamber_' + outputItem.replace(':', '_'))
    }

    //无限核弹
    remove('industrialforegoing:dissolution_chamber/infinity_nuke')
    dissolution_chamber([
        'thermal:nuke_tnt',
        'thermal:nuke_tnt',
        'thermal:nuke_tnt',
        'thermal:nuke_tnt',
        'industrialforegoing:range_addon11',
        'minecraft:diamond_block',
        'minecraft:nether_star',
        'minecraft:nether_star'
    ], 'industrialforegoing:infinity_nuke', 1,
        'industrialforegoing:ether_gas', 2000,
        400)


    //齿轮配方调整
    remove('tconstruct:smeltery/casting/metal/iron/gear_gold_cast')
    remove('tconstruct:smeltery/melting/metal/iron/gear')
    remove('tconstruct:smeltery/melting/metal/gold/gear')
    remove('industrialforegoing:iron_gear')
    remove('industrialforegoing:gold_gear')
    remove('industrialforegoing:diamond_gear')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, '#forge:gears/iron', 'thermal:iron_gear')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, '#forge:gears/gold', 'kubejs:brass_gear')
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, '#forge:gears/diamond', 'thermal:enderium_gear')
    event.replaceInput({ type: 'industrialforegoing:dissolution_chamber' }, '#forge:gears/gold', 'kubejs:brass_gear')
    event.replaceInput({ type: 'industrialforegoing:dissolution_chamber' }, '#forge:gears/diamond', 'thermal:enderium_gear')

    //铁齿轮
    remove('thermal:parts/iron_gear')
    event.shaped('thermal:iron_gear', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'createaddition:iron_rod',
        B: 'create:iron_sheet'
    }).id('atlanabyss:iron_gear')
    //黄铜齿轮
    event.shaped('kubejs:brass_gear', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'createaddition:brass_rod',
        B: 'create:brass_sheet'
    }).id('atlanabyss:brass_gear')
    //末影齿轮
    remove('thermal:parts/enderium_gear')
    event.shaped('thermal:enderium_gear', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'kubejs:enderium_rod',
        B: 'thermal:enderium_plate'
    }).id('atlanabyss:enderium_gear')
    //末影棒
    event.custom({
        type: 'createaddition:rolling',
        input: { tag: 'forge:ingots/enderium' },
        result: { item: 'kubejs:enderium_rod', count: 1 }
    }).id('atlanabyss:rolling_enderium_ingot')

    //溶解成型机
    remove('industrialforegoing:dissolution_chamber')
    event.smithing('industrialforegoing:dissolution_chamber',
        'thermal:machine_frame',
        'thermal:machine_frame'
    ).id('atlanabyss:smithing_dissolution_chamber')

    //银空PCB
    dissolution_chamber([
        'createaddition:copper_rod',
        'industrialforegoing:plastic',
        'createaddition:copper_rod',
        'create:copper_sheet',
        'create:copper_sheet',
        'createaddition:copper_rod',
        'industrialforegoing:plastic',
        'createaddition:copper_rod',
    ], 'kubejs:empty_pcb', 12,
        'tconstruct:molten_silver', 500,
        100)

    //钢框架
    remove('industrialforegoing:machine_frame_pity')
    dissolution_chamber([
        'beyond_earth:compressed_steel',
        'tconstruct:amethyst_bronze_block',
        'beyond_earth:compressed_steel',
        'beyond_earth:compressed_steel',
        'beyond_earth:compressed_steel',
        'beyond_earth:compressed_steel',
        'thermal:iron_gear',
        'beyond_earth:compressed_steel'
    ], 'kubejs:steel_machine_frame', 1,
        'industrialforegoing:latex', 250,
        200)
    //戴斯框架
    remove('industrialforegoing:dissolution_chamber/simple_machine_frame')
    dissolution_chamber([
        'beyond_earth:compressed_desh',
        'kubejs:steel_machine_frame',
        'beyond_earth:compressed_desh',
        'beyond_earth:compressed_desh',
        'beyond_earth:compressed_desh',
        'beyond_earth:compressed_desh',
        'kubejs:brass_gear',
        'beyond_earth:compressed_desh'
    ], 'kubejs:desh_machine_frame', 1,
        'industrialforegoing:pink_slime', 500,
        300)
    //紫金框架
    remove('industrialforegoing:dissolution_chamber/advanced_machine_frame')
    dissolution_chamber([
        'beyond_earth:compressed_ostrum',
        'kubejs:desh_machine_frame',
        'beyond_earth:compressed_ostrum',
        'beyond_earth:compressed_ostrum',
        'beyond_earth:compressed_ostrum',
        'beyond_earth:compressed_ostrum',
        'thermal:enderium_gear',
        'beyond_earth:compressed_ostrum'
    ], 'kubejs:ostrum_machine_frame', 1,
        'industrialforegoing:ether_gas', 100,
        400)
    //耐热框架
    remove('industrialforegoing:dissolution_chamber/supreme_machine_frame')
    dissolution_chamber([
        'beyond_earth:compressed_calorite',
        'kubejs:ostrum_machine_frame',
        'beyond_earth:compressed_calorite',
        'beyond_earth:compressed_calorite',
        'beyond_earth:compressed_calorite',
        'beyond_earth:compressed_calorite',
        'thermal:enderium_gear',
        'beyond_earth:compressed_calorite'
    ], 'kubejs:calorite_machine_frame', 1,
        'minecraft:lava', 2000,
        500)

    //流体钻
    remove('industrialforegoing:fluid_laser_base')
    event.shaped('industrialforegoing:fluid_laser_base', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'thermal:drill_head',
        C: 'create:fluid_pipe',
        D: 'kubejs:desh_machine_frame',
        E: 'thermal:enderium_gear',
        F: 'minecraft:redstone_block'
    }).id('atlanabyss:fluid_laser_base')
    //镭射钻
    remove('industrialforegoing:ore_laser_base')
    event.shaped('industrialforegoing:ore_laser_base', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'thermal:drill_head',
        C: 'create:chute',
        D: 'kubejs:ostrum_machine_frame',
        E: 'thermal:enderium_gear',
        F: 'minecraft:redstone_block'
    }).id('atlanabyss:ore_laser_base')
    //造石机
    remove('industrialforegoing:material_stonework_factory')
    event.shaped('industrialforegoing:material_stonework_factory', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'minecraft:crafting_table',
        C: 'thermal:drill_head',
        D: 'kubejs:ostrum_machine_frame',
        E: 'minecraft:furnace',
        F: 'kubejs:brass_gear',
        G: 'industrialforegoing:pink_slime'
    }).id('atlanabyss:material_stonework_factory')
    //破坏器
    remove('industrialforegoing:block_breaker')
    event.shaped('industrialforegoing:block_breaker', [
        'ABA',
        'CDC',
        'FGF'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'kubejs:brass_gear',
        C: 'thermal:drill_head',
        D: 'kubejs:steel_machine_frame',
        F: 'thermal:iron_gear',
        G: 'minecraft:redstone_block'
    }).id('atlanabyss:block_breaker')
    //收割机
    remove('industrialforegoing:plant_gatherer')
    event.shaped('industrialforegoing:plant_gatherer', [
        'ABA',
        'CDC',
        'FGF'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'create:iron_sheet',
        C: 'thermal:saw_blade',
        D: 'kubejs:steel_machine_frame',
        F: 'kubejs:brass_gear',
        G: 'minecraft:redstone_block'
    }).id('atlanabyss:plant_gatherer')
    //屠宰场
    remove('industrialforegoing:mob_slaughter_factory')
    event.shaped('industrialforegoing:mob_slaughter_factory', [
        'ABA',
        'CDC',
        'FGF'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'kubejs:brass_gear',
        C: 'botania:rune_pride',
        D: 'kubejs:steel_machine_frame',
        F: 'thermal:saw_blade',
        G: 'minecraft:redstone_block'
    }).id('atlanabyss:mob_slaughter_factory')
    //屠宰机
    remove('industrialforegoing:mob_crusher')
    event.shaped('industrialforegoing:mob_crusher', [
        'ABA',
        'CDC',
        'FGF'
    ], {
        A: 'industrialforegoing:plastic',
        B: 'botania:rune_greed',
        C: 'minecraft:book',
        D: 'kubejs:ostrum_machine_frame',
        F: 'kubejs:brass_gear',
        G: 'minecraft:redstone_block'
    }).id('atlanabyss:mob_crusher')
    //水培床
    remove('industrialforegoing:hydroponic_bed')
    event.shaped('industrialforegoing:hydroponic_bed', [
        'ABA',
        'CDC',
        'FGF'
    ], {
        A: 'industrialforegoing:plastic',
        B: '#minecraft:dirt',
        C: 'create:iron_sheet',
        D: '#botanypots:basic_botany_pots',
        F: 'kubejs:brass_gear',
        G: 'kubejs:desh_machine_frame'
    }).id('atlanabyss:hydroponic_bed')

    //肉汤注射器
    event.shaped('industrialforegoing:meat_feeder', [
        'ABA',
        'CAC',
        ' A '
    ], {
        A: 'industrialforegoing:plastic',
        B: 'mekanism:pellet_antimatter',
        C: 'create:fluid_tank'
    }).id('atlanabyss:meat_feeder')
})