onEvent('recipes', event => {
    let { create, botania, thermal } = event.recipes;

    let remove = (name) => {
        event.remove({ id: name })
    }

    //萝卜水晶
    remove('umapyoi:jewel')
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: {
            item: 'minecraft:carrot'
        },
        output: 'umapyoi:jewel',
        count: 1,
        source: 500,
        pedestalItems: []
    }).id('atlanabyss:uma_jewel')

    //人工煤炭
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: {
            item: 'minecraft:charcoal'
        },
        output: 'minecraft:coal',
        count: 1,
        source: 500,
        pedestalItems: []
    }).id('atlanabyss:imbuement_coal')

    remove('thermal:gunpowder_4')
    remove('tac:gun_powder')
    //魔法火药
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: {
            item: 'minecraft:gravel'
        },
        output: 'minecraft:gunpowder',
        count: 1,
        source: 200,
        pedestalItems: []
    }).id('atlanabyss:imbuement_gunpowder')
    //魔法皮革
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: {
            item: 'minecraft:rotten_flesh'
        },
        output: 'minecraft:leather',
        count: 1,
        source: 100,
        pedestalItems: []
    }).id('atlanabyss:imbuement_leather')

    //宝石粉
    create.milling('apotheosis:gem_dust', [
        'apotheosis:gem'
    ]).id("atlanabyss:milling_ap_gem")
    thermal.pulverizer(Item.of('apotheosis:gem_dust').withChance(1.25), [
        'apotheosis:gem'
    ]).energy(4000).id('atlanabyss:pulverizer_ap_gem')

    //活根
    event.shaped('twilightforest:liveroot_block', [
        'AA',
        'AA'
    ], {
        A: 'twilightforest:liveroot'
    }).id('atlanabyss:liveroot_block_from_liveroot')
    event.shapeless('4x twilightforest:liveroot', [
        'twilightforest:liveroot_block'
    ]).id('atlanabyss:liveroot_from_liveroot_block')
    //废金属
    create.splashing([
        Item.of('apotheosis:common_material').withChance(.5),
        Item.of('5x minecraft:iron_nugget').withChance(.75),
        Item.of('minecraft:gold_nugget').withChance(.25)
    ], [
        'twilightforest:raw_ironwood'
    ]).id('atlanabyss:splashing_common_material')
    //绿材料
    event.shaped('apotheosis:uncommon_material', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'apotheosis:common_material',
        B: 'farmersdelight:canvas'
    }).id('atlanabyss:uncommon_material')
    //蓝材料
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        reagent: [{ item: 'minecraft:amethyst_shard' }],
        pedestalItems: [
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
            { item: { item: 'apotheosis:uncommon_material' } },
        ],
        output: { item: 'apotheosis:rare_material' },
        sourceCost: 0,
        keepNbtOfReagent: false
    }).id('atlanabyss:enchanting_apparatus_rare_material')
    //紫材料
    create.compacting('apotheosis:epic_material', [
        '8x apotheosis:rare_material',
        Fluid.of('tconstruct:ender_slime', 500)
    ]).heated().id('atlanabyss:compacting_epic_material')
    event.custom({
        type: 'kitchenkarrot:brewing_barrel',
        content: {
            recipe: [
                { item: 'apotheosis:rare_material' },
                { item: 'apotheosis:rare_material' },
                { item: 'apotheosis:rare_material' },
                { item: 'apotheosis:rare_material' },
                { item: 'create:cinder_flour' },
                { item: 'create:cinder_flour' }
            ],
            craftingtime: 3000
        },
        result: { item: 'apotheosis:epic_material' }
    }).id('atlanabyss:brewing_barrel_epic_material')
    //橙材料
    create.mechanical_crafting('apotheosis:mythic_material', [
        '  A  ',
        '  A  ',
        'AABAA',
        '  A  ',
        '  A  '
    ], {
        A: 'apotheosis:epic_material',
        B: 'botania:mana_pearl'
    }).id('atlanabyss:mechanical_crafting_mythic_material')
    //白材料
    botania.runic_altar('apotheosis_modern_ragnarok:izanagi_object', [
        'apotheosis:mythic_material', 'apotheosis:mythic_material',
        'apotheosis:mythic_material', 'apotheosis:mythic_material',
        'apotheosis:mythic_material', 'apotheosis:mythic_material',
        'apotheosis:mythic_material', 'apotheosis:mythic_material'
    ], 50000).id('atlanabyss:runic_altar_izanagi_object')



    //传送门珍珠
    function gateRecipe(a, b, id) {
        remove('gateways:' + id)
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: { A: { item: a }, B: { item: b } },
            result: { item: 'gateways:gate_pearl' },
            gateway: 'gateways:' + id
        }).id('atlanabyss:' + id)
    }
    function newGate(a, b, id) {
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: { A: { item: a }, B: { item: b } },
            result: { item: 'gateways:gate_pearl' },
            gateway: 'gateways:' + id
        }).id('atlanabyss:' + id)
    }

    //烈焰人
    gateRecipe('botania:mana_pearl', 'minecraft:blaze_rod', 'blaze_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:blaze_rod', 'blaze_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:blaze_rod', 'blaze_gate_large')
    //苦力怕
    gateRecipe('botania:mana_pearl', 'minecraft:gunpowder', 'creeper_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:gunpowder', 'creeper_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:gunpowder', 'creeper_gate_large')
    //末影人
    gateRecipe('botania:mana_pearl', 'minecraft:ender_pearl', 'enderman_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:ender_pearl', 'enderman_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:ender_pearl', 'enderman_gate_large')
    //恶魂
    gateRecipe('botania:mana_pearl', 'minecraft:ghast_tear', 'ghast_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:ghast_tear', 'ghast_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:ghast_tear', 'ghast_gate_large')
    //岩浆怪
    gateRecipe('botania:mana_pearl', 'minecraft:magma_cream', 'magma_cube_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:magma_cream', 'magma_cube_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:magma_cream', 'magma_cube_gate_large')
    //潜影壳
    gateRecipe('botania:mana_pearl', 'minecraft:shulker_shell', 'shulker_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:shulker_shell', 'shulker_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:shulker_shell', 'shulker_gate_large')
    //骷髅
    gateRecipe('botania:mana_pearl', 'minecraft:bone', 'skeleton_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:bone', 'skeleton_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:bone', 'skeleton_gate_large')
    //史莱姆
    gateRecipe('botania:mana_pearl', 'minecraft:slime_ball', 'slime_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:slime_ball', 'slime_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:slime_ball', 'slime_gate_large')
    //蜘蛛
    gateRecipe('botania:mana_pearl', 'minecraft:spider_eye', 'spider_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:spider_eye', 'spider_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:spider_eye', 'spider_gate_large')
    //僵尸
    gateRecipe('botania:mana_pearl', 'minecraft:rotten_flesh', 'zombie_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:rotten_flesh', 'zombie_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:rotten_flesh', 'zombie_gate_large')
    newGate('botania:life_essence', 'minecraft:rotten_flesh', 'zombie_gate_ultra')
    //凋零骷髅
    newGate('botania:mana_pearl', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_small')
    newGate('waystones:warp_stone', 'tconstruct:necrotic_bone', 'wither_skeleton_gate')
    newGate('ae2:fluix_pearl', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_large')

    //女巫
    function gateWitch(item, id) {
        remove('gateways:' + id)
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: { item: 'minecraft:glowstone_dust' },
                B: { item: 'minecraft:redstone' },
                C: { item: item },
                D: { item: 'minecraft:gunpowder' }
            },
            result: { item: 'gateways:gate_pearl' },
            gateway: 'gateways:' + id
        }).id('atlanabyss:' + id)
    }
    gateWitch('botania:mana_pearl', 'witch_gate_small')
    gateWitch('waystones:warp_stone', 'witch_gate')
    gateWitch('ae2:fluix_pearl', 'witch_gate_large')

    //附魔灌注台
    remove('enchantinginfuser:enchanting_infuser')
    event.custom({
        type: 'apotheosis:enchanting',
        conditions: [{
            type: 'apotheosis:module',
            module: 'enchantment'
        }],
        input: { item: 'minecraft:enchanting_table' },
        requirements: {
            eterna: 40.0,
            quanta: 25,
            arcana: 25
        },
        display_level: 5,
        result: { item: 'enchantinginfuser:enchanting_infuser', count: 1 }
    }).id('atlanabyss:enchanting_enchanting_infuser')
    //高级附魔灌注台
    remove('enchantinginfuser:advanced_enchanting_infuser')
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        reagent: [{ item: 'enchantinginfuser:enchanting_infuser' }],
        pedestalItems: [
            { item: { item: 'botania:terrasteel_ingot' } },
            { item: { item: 'kubejs:polished_charged_certus_quartz' } },
            { item: { item: 'kubejs:polished_sulfur' } },
            { item: { item: 'kubejs:polished_candy_crystal' } },
            { item: { item: 'create:polished_rose_quartz' } }
        ],
        output: { item: 'enchantinginfuser:advanced_enchanting_infuser' },
        sourceCost: 0,
        keepNbtOfReagent: false
    }).id('atlanabyss:enchanting_apparatus_advanced_enchanting_infuser')

    //时间之瓶
    remove('tiab:time_in_a_bottle')
    botania.runic_altar('tiab:time_in_a_bottle', [
        'minecraft:clock',
        'kubejs:virgin_ingot',
        'kubejs:virgin_ingot',
        'create_enchantment_industry:hyper_experience_bottle',
        'kubejs:virgin_ingot',
        'kubejs:virgin_ingot'
    ], 100000).id('atlanabyss:runic_altar_time_bottle')

    //元素锭
    botania.terra_plate('kubejs:elemental_ingot', [
        'kubejs:chlorophyll_ingot',
        'kubejs:abyss_ingot',
        'kubejs:planetary_ingot',
        'kubejs:calamity_ingot',
        'kubejs:end_ingot'
    ], 2500000).id('atlanabyss:terra_plate_elemental_ingot')

    //铝矿
    botania.orechid_ignem('tconstruct:cobalt_ore', 'minecraft:netherrack',
        4000).id('atlanabyss:orechid_ignem_cobalt_ore')
    //铝矿
    botania.orechid_ignem('kubejs:nether_aluminum_ore', 'minecraft:netherrack',
        6542).id('atlanabyss:orechid_ignem_nether_aluminum_ore')
    //硫矿
    botania.orechid_ignem('kubejs:nether_sulfur_ore', 'minecraft:netherrack',
        12050).id('atlanabyss:orechid_ignem_nether_sulfur_ore')

    //锡矿
    botania.orechid('thermal:tin_ore', 'minecraft:stone',
        8686).id('atlanabyss:orechid_tin_ore')
    //镍矿
    botania.orechid('thermal:nickel_ore', 'minecraft:stone',
        18072).id('atlanabyss:orechid_nickel_ore')
    //银矿
    botania.orechid('thermal:silver_ore', 'minecraft:stone',
        1521).id('atlanabyss:orechid_silver_ore')
    //锌矿
    botania.orechid('create:zinc_ore', 'minecraft:stone',
        23242).id('atlanabyss:orechid_zinc_ore')

    //深层锡矿
    botania.orechid('thermal:deepslate_tin_ore', 'minecraft:deepslate',
        210).id('atlanabyss:orechid_deepslate_tin_ore')
    //深层镍矿
    botania.orechid('thermal:deepslate_nickel_ore', 'minecraft:deepslate',
        100).id('atlanabyss:orechid_deepslate_nickel_ore')
    //深层银矿
    botania.orechid('thermal:deepslate_silver_ore', 'minecraft:deepslate',
        120).id('atlanabyss:orechid_deepslate_silver_ore')
    //深层铅矿
    botania.orechid('thermal:deepslate_lead_ore', 'minecraft:deepslate',
        50).id('atlanabyss:orechid_deepslate_lead_ore')
    //深层锌矿
    botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate',
        150).id('atlanabyss:orechid_deepslate_zinc_ore')
})