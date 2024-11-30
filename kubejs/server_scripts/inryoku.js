onEvent('recipes', event => {
    const { create, botania } = event.recipes;

    let remove = (name) => {
        event.remove({ id: name })
    }
    // remove('beyond_earth:coal_generator')//燃煤发电机
    // remove('beyond_earth:water_pump')//水泵
    // //戴斯板
    // remove('beyond_earth:desh_plate')
    // remove('beyond_earth:smeltery/casting/metal/desh/plate_gold_cast')
    // //奶酪
    // remove('beyond_earth:cheese')
    // remove('beyond_earth:blasting/cheese_from_moon_ore')

    //纠缠箱子
    remove('entangled:block')
    event.shaped('entangled:block', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:gravitation_mechanism'
    }).id('atlanabyss:entangled_block')
    //纠缠绑定器
    remove('entangled:item')
    event.shaped('entangled:item', [
        'A A',
        ' B ',
        ' B '
    ], {
        A: 'kubejs:magbismuth_sheet',
        B: 'minecraft:stick'
    }).id('atlanabyss:entangled_item')


    // //nasa工作台
    // remove('beyond_earth:nasa_workbench')
    // create.mechanical_crafting('beyond_earth:nasa_workbench', [
    //     'ABA',
    //     'DDD',
    //     'DED',
    //     'DDD'
    // ], {
    //     A: 'create:mechanical_arm',
    //     B: 'create:depot',
    //     D: 'kubejs:gravitation_mechanism',
    //     E: 'kubejs:computation_matrix'
    // }).id('atlanabyss:mechanical_crafting_nasa_workbench')

    // //航空燃油
    // remove('beyond_earth:fuel_refining/fuel_from_oil')
    // event.custom({
    //     "type": "beyond_earth:fuel_refinery",
    //     "input": {
    //         "name": "thermal:refined_fuel",
    //         "amount": 2
    //     },
    //     "output": {
    //         "name": "beyond_earth:fuel",
    //         "amount": 1
    //     }
    // }).id('atlanabyss:rocket_fuel_refinery')

    // //便宜压缩钢板
    // const sb = 'thermal:steel_block';
    // create.sequenced_assembly([
    //     Item.of('beyond_earth:compressed_steel').withChance(0.25),
    //     Item.of('thermal:steel_plate').withChance(0.75)
    // ], '#forge:storage_blocks/steel', [
    //     create.pressing(sb, sb)
    // ]).transitionalItem(sb).loops(10).id('atlanabyss:sequenced_assembly_steel_block')

    // //压缩钢板
    // remove('beyond_earth:compressing/compressed_steel')
    // event.custom({
    //     "type": "beyond_earth:compressor",
    //     "input": {
    //         "tag": "forge:storage_blocks/steel"
    //     },
    //     "output": {
    //         "item": "beyond_earth:compressed_steel",
    //         "count": 1
    //     },
    //     "cookTime": 200
    // }).id('atlanabyss:compressor_steel_block')
    // //压缩戴斯板
    // remove('beyond_earth:compressing/compressed_desh')
    // event.custom({
    //     "type": "beyond_earth:compressor",
    //     "input": {
    //         "tag": "forge:storage_blocks/desh"
    //     },
    //     "output": {
    //         "item": "beyond_earth:compressed_desh",
    //         "count": 1
    //     },
    //     "cookTime": 300
    // }).id('atlanabyss:compressor_desh_block')
    // //压缩紫金板
    // remove('beyond_earth:compressing/compressed_ostrum')
    // event.custom({
    //     "type": "beyond_earth:compressor",
    //     "input": {
    //         "tag": "forge:storage_blocks/ostrum"
    //     },
    //     "output": {
    //         "item": "beyond_earth:compressed_ostrum",
    //         "count": 1
    //     },
    //     "cookTime": 400
    // }).id('atlanabyss:compressor_ostrum_block')
    // //压缩耐热金属板
    // remove('beyond_earth:compressing/compressed_calorite')
    // event.custom({
    //     "type": "beyond_earth:compressor",
    //     "input": {
    //         "tag": "forge:storage_blocks/calorite"
    //     },
    //     "output": {
    //         "item": "beyond_earth:compressed_calorite",
    //         "count": 1
    //     },
    //     "cookTime": 600
    // }).id('atlanabyss:compressor_calorite_block')


    // //太阳能
    // remove('beyond_earth:solar_panel')
    // event.smithing('beyond_earth:solar_panel',
    //     'kubejs:steel_machine_frame',
    //     'minecraft:daylight_detector'
    // ).id('atlanabyss:smithing_byd_solar_panel')
    // //压缩机
    // remove('beyond_earth:compressor')
    // event.smithing('beyond_earth:compressor',
    //     'kubejs:steel_machine_frame',
    //     'compactmachines:wall'
    // ).id('atlanabyss:smithing_byd_compressor')
    // //精炼机
    // remove('beyond_earth:fuel_refinery')
    // event.smithing('beyond_earth:fuel_refinery',
    //     'kubejs:steel_machine_frame',
    //     'createdieselgenerators:oil_barrel'
    // ).id('atlanabyss:smithing_byd_fuel_refinery')
    // //氧气机
    // remove('beyond_earth:oxygen_loader')
    // event.smithing('beyond_earth:oxygen_loader',
    //     'kubejs:steel_machine_frame',
    //     'beyond_earth:oxygen_tank'
    // ).id('atlanabyss:smithing_byd_oxygen_loader')
    // //氧气瓶
    // remove('beyond_earth:oxygen_tank')
    // event.shaped('beyond_earth:oxygen_tank', [
    //     'A',
    //     'B',
    //     'B'
    // ], {
    //     A: 'thermal:signalum_plate',
    //     B: 'kubejs:aluminium_alloy_ingot'
    // }).id('atlanabyss:byd_oxygen_tank')
    // //供氧设备
    // remove('beyond_earth:oxygen_gear')
    // event.shaped('beyond_earth:oxygen_gear', [
    //     ' A ',
    //     'CBC',
    //     'CBC'
    // ], {
    //     A: 'minecraft:redstone_torch',
    //     B: 'createaddition:iron_rod',
    //     C: 'thermal:steel_plate'
    // }).id('atlanabyss:byd_oxygen_gear')
    // //车轮
    // remove('beyond_earth:wheel')
    // event.shaped('beyond_earth:wheel', [
    //     'AAA',
    //     'ABA',
    //     'AAA'
    // ], {
    //     A: 'thermal:cured_rubber',
    //     B: 'kubejs:aluminium_alloy_ingot'
    // }).id('atlanabyss:byd_wheel')
    // //引擎框架
    // remove('beyond_earth:engine_frame')
    // event.shaped('beyond_earth:engine_frame', [
    //     'ABA',
    //     'B B',
    //     'ABA'
    // ], {
    //     A: 'thermal:steel_plate',
    //     B: 'createaddition:iron_rod'
    // }).id('atlanabyss:byd_engine_frame')
    // //引擎扇叶
    // remove('beyond_earth:engine_fan')
    // event.shaped('beyond_earth:engine_fan', [
    //     ' A ',
    //     'ABA',
    //     ' A '
    // ], {
    //     A: 'thermal:steel_plate',
    //     B: 'kubejs:aluminium_alloy_ingot'
    // }).id('atlanabyss:byd_engine_fan')

    // //氧气面罩
    // remove('beyond_earth:oxygen_mask')
    // event.shaped('beyond_earth:oxygen_mask', [
    //     'AAA',
    //     'A A'
    // ], {
    //     A: 'kubejs:aluminium_alloy_ingot'
    // }).id('atlanabyss:byd_oxygen_mask')
    // //航天服
    // remove('beyond_earth:space_suit')
    // event.shaped('beyond_earth:space_suit', [
    //     'A A',
    //     'BCB',
    //     'AAA'
    // ], {
    //     A: 'kubejs:aluminium_alloy_ingot',
    //     B: 'beyond_earth:oxygen_tank',
    //     C: 'beyond_earth:oxygen_gear'
    // }).id('atlanabyss:byd_space_suit')
    // //航天裤
    // remove('beyond_earth:space_leggings')
    // event.shaped('beyond_earth:space_pants', [
    //     'AAA',
    //     'A A',
    //     'A A'
    // ], {
    //     A: 'kubejs:aluminium_alloy_ingot'
    // }).id('atlanabyss:byd_space_leggings')
    // //航天靴
    // remove('beyond_earth:space_boots')
    // event.shaped('beyond_earth:space_boots', [
    //     'A A',
    //     'A A'
    // ], {
    //     A: 'kubejs:aluminium_alloy_ingot'
    // }).id('atlanabyss:byd_space_boots')

    // //戴斯引擎
    // remove('beyond_earth:gold_engine')
    // event.shaped('beyond_earth:desh_engine', [
    //     'ABC',
    //     'DEF',
    //     'ABG'
    // ], {
    //     A: 'beyond_earth:desh_ingot',
    //     B: 'minecraft:redstone_block',
    //     C: 'beyond_earth:compressed_steel',
    //     D: 'create:iron_sheet',
    //     E: 'beyond_earth:engine_fan',
    //     F: 'beyond_earth:engine_frame',
    //     G: 'beyond_earth:compressed_desh'
    // }).id('atlanabyss:byd_desh_engine')
    // //紫金引擎
    // remove('beyond_earth:diamond_engine')
    // event.shaped('beyond_earth:ostrum_engine', [
    //     'ABC',
    //     'DEF',
    //     'ABG'
    // ], {
    //     A: 'beyond_earth:ostrum_ingot',
    //     B: 'minecraft:redstone_block',
    //     C: 'beyond_earth:compressed_steel',
    //     D: 'create:iron_sheet',
    //     E: 'beyond_earth:engine_fan',
    //     F: 'beyond_earth:engine_frame',
    //     G: 'beyond_earth:compressed_ostrum'
    // }).id('atlanabyss:byd_ostrum_engine')
    // //耐热引擎
    // remove('beyond_earth:calorite_engine')
    // event.shaped('beyond_earth:calorite_engine', [
    //     'ABC',
    //     'DEF',
    //     'ABG'
    // ], {
    //     A: 'beyond_earth:calorite_ingot',
    //     B: 'minecraft:redstone_block',
    //     C: 'beyond_earth:compressed_steel',
    //     D: 'create:iron_sheet',
    //     E: 'beyond_earth:engine_fan',
    //     F: 'beyond_earth:engine_frame',
    //     G: 'beyond_earth:compressed_calorite'
    // }).id('atlanabyss:byd_calorite_engine')

    //淵骸
    botania.pure_daisy('minecraft:ancient_debris',
        'kubejs:antiquity_debris',
        100).id('atlanabyss:pure_daisy_antiquity_debris')
    //铋铝
    botania.pure_daisy('kubejs:aluminum_block',
        'kubejs:bismuth_block',
        100).id('atlanabyss:pure_daisy_bismuth_block')
    //漩涡幸运方块
    botania.pure_daisy('kubejs:lucky_block',
        'kubejs:vortex_stone',
        100).id('atlanabyss:pure_daisy_vortex_stone')
})