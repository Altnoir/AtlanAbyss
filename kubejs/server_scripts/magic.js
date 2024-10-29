onEvent('recipes', event => {
    const { create, botania, thermal } = event.recipes;

    let remove = (name) => {
        event.remove({ id: name })
    }



    //附魔金苹果
    event.shaped('minecraft:enchanted_golden_apple', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:storage_blocks/gold',
        B: 'minecraft:apple'
    }).id('atlanabyss:enchanted_golden_apple')
    //不死图腾
    botania.mana_infusion('minecraft:totem_of_undying', 'minecraft:enchanted_golden_apple', 13500, 'botania:alchemy_catalyst').id('atlanabyss:mana_infusion_totem_of_undying')

    //人工煤炭
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: { item: 'minecraft:charcoal' },
        output: 'minecraft:coal',
        count: 1,
        source: 500,
        pedestalItems: []
    }).id('atlanabyss:imbuement_coal')

    //P点
    botania.mana_infusion(
        '10x touhou_little_maid:power_point',
        'minecraft:experience_bottle', 240,
        'botania:alchemy_catalyst'
    ).id("atlanabyss:touhou_power_point")

    //萝卜宝石
    remove('umapyoi:jewel')
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: { item: 'minecraft:golden_carrot' },
        output: 'umapyoi:jewel',
        count: 1,
        source: 100,
        pedestalItems: []
    }).id('atlanabyss:imbuement_jewel')

    remove('thermal:gunpowder_4')
    //魔法火药
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: { item: 'minecraft:gravel' },
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

    //活根
    // event.shaped('twilightforest:liveroot_block', [
    //     'AA',
    //     'AA'
    // ], {
    //     A: 'twilightforest:liveroot'
    // }).id('atlanabyss:liveroot_block_from_liveroot')
    // event.shapeless('4x twilightforest:liveroot', [
    //     'twilightforest:liveroot_block'
    // ]).id('atlanabyss:liveroot_from_liveroot_block')


    //便宜的彼方兰
    remove('botania:petal_apothecary/gourmaryllis')
    botania.petal_apothecary('botania:gourmaryllis', [
        '#botania:petals/yellow',
        '#botania:petals/yellow',
        '#botania:petals/red',
        '#botania:petals/light_gray'
    ])
        .id('atlanabyss:petal_apothecary_gourmaryllis')

    //自然水晶
    remove('botania:natura_pylon')
    event.shaped('botania:natura_pylon', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: 'botania:terrasteel_nugget',
        B: 'botania:mana_pylon',
        C: 'kubejs:vibration_mechanism'
    }).id('atlanabyss:natura_pylon')


    //附魔灌注台
    remove('enchantinginfuser:enchanting_infuser')
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: {
            item: 'minecraft:enchanting_table'
        },
        cast_consumed: true,
        fluid: {
            tag: "tconstruct:molten_amethyst",
            amount: 1600
        },
        result: 'enchantinginfuser:enchanting_infuser',
        cooling_time: 300
    }).id('atlanabyss:casting_basin_enchanting_infuser')
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
    event.custom({
        type: 'mythicbotany:infusion',
        group: 'infuser',
        output: { item: 'kubejs:elemental_ingot', count: 1 },
        mana: 2500000,
        ingredients: [
            { item: 'kubejs:chlorophyll_ingot' },
            { item: 'kubejs:abyss_ingot' },
            { item: 'kubejs:planetary_ingot' },
            { item: 'kubejs:calamity_ingot' },
            { item: 'kubejs:end_ingot' }
        ],
        fromColor: 8388352,
        toColor: 16740039
    }).id('atlanabyss:infusion_elemental_ingot')

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
    //锌矿
    botania.orechid('create:zinc_ore', 'minecraft:stone',
        23242).id('atlanabyss:orechid_zinc_ore')

    //深层锡矿
    botania.orechid('thermal:deepslate_tin_ore', 'minecraft:deepslate',
        210).id('atlanabyss:orechid_deepslate_tin_ore')
    //深层镍矿
    botania.orechid('thermal:deepslate_nickel_ore', 'minecraft:deepslate',
        100).id('atlanabyss:orechid_deepslate_nickel_ore')
    //深层铅矿
    botania.orechid('thermal:deepslate_lead_ore', 'minecraft:deepslate',
        50).id('atlanabyss:orechid_deepslate_lead_ore')
    //深层锌矿
    botania.orechid('create:deepslate_zinc_ore', 'minecraft:deepslate',
        150).id('atlanabyss:orechid_deepslate_zinc_ore')

    //月球铁矿
    botania.orechid('beyond_earth:moon_iron_ore', 'beyond_earth:moon_stone',
        600).id('atlanabyss:orechid_moon_iron_ore')
    //月球戴斯
    botania.orechid('beyond_earth:moon_desh_ore', 'beyond_earth:moon_stone',
        300).id('atlanabyss:orechid_moon_desh_ore')
    //月球锇矿
    botania.orechid('kubejs:moon_osmium_ore', 'beyond_earth:moon_stone',
        100).id('atlanabyss:orechid_moon_osmium_ore')

    //火星铁矿
    botania.orechid('beyond_earth:mars_iron_ore', 'beyond_earth:mars_stone',
        500).id('atlanabyss:orechid_mars_iron_ore')
    //火星紫金
    botania.orechid('beyond_earth:mars_ostrum_ore', 'beyond_earth:mars_stone',
        420).id('atlanabyss:orechid_mars_ostrum_ore')
    //火星铀矿
    botania.orechid('kubejs:mars_uranium_ore', 'beyond_earth:mars_stone',
        80).id('atlanabyss:orechid_mars_uranium_ore')

    //水星铁矿
    botania.orechid_ignem('beyond_earth:mercury_iron_ore', 'beyond_earth:mercury_stone',
        800).id('atlanabyss:orechid_mercury_iron_ore')
    //水星铀矿
    botania.orechid_ignem('kubejs:mercury_uranium_ore', 'beyond_earth:mercury_stone',
        120).id('atlanabyss:orechid_mercury_uranium_ore')
    //水星银矿
    botania.orechid_ignem('kubejs:mercury_silver_ore', 'beyond_earth:mercury_stone',
        80).id('atlanabyss:orechid_mercury_silver_ore')

    //闪长合金
    event.shaped('kubejs:diorite_alloy', [
        'AB',
        'BA'
    ], {
        A: 'ars_nouveau:source_berry',
        B: 'minecraft:diorite'
    }).id('atlanabyss:diorite_alloy');
    event.shaped('16x kubejs:diorite_alloy', [
        'AB',
        'BA'
    ], {
        A: 'kubejs:planetary_ingot',
        B: 'minecraft:diorite'
    }).id('atlanabyss:diorite_alloy_x');

    create.mixing('kubejs:diorite_alloy', [
        'minecraft:diorite',
        'ars_nouveau:source_berry'
    ]).id('atlanabyss:mixing_diorite_alloy');
    create.mixing('16x kubejs:diorite_alloy', [
        'minecraft:diorite',
        'kubejs:planetary_ingot'
    ]).id('atlanabyss:mixing_diorite_alloy_x');

    thermal.smelter('kubejs:diorite_alloy', [
        'ars_nouveau:source_berry',
        'minecraft:diorite'
    ]).energy(3200).id('atlanabyss:smelter_diorite_alloy');
    thermal.smelter('16x kubejs:diorite_alloy', [
        'kubejs:planetary_ingot',
        'minecraft:diorite'
    ]).energy(3200).id('atlanabyss:smelter_diorite_alloy_x');

    //活石
    create.item_application('botania:livingrock', [
        'minecraft:stone',
        'kubejs:diorite_alloy'
    ]).id('atlanabyss:item_application_livingrock')

    //魔力浆果
    botania.mana_infusion('ars_nouveau:source_berry', 'minecraft:sweet_berries', 100, 'ars_nouveau:arcane_stone').id("atlanabyss:mana_infusion_source_berry")


    //其他魔艺树
    remove('ars_nouveau:manipulation_essence_to_flourishing_sapling')
    remove('ars_nouveau:manipulation_essence_to_cascading_sapling')
    remove('ars_nouveau:manipulation_essence_to_blazin_sapling')
    remove('ars_nouveau:manipulation_essence_to_vexing_sapling')
    botania.mana_infusion('ars_nouveau:blue_archwood_sapling', 'ars_nouveau:green_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:blue_archwood_sapling")
    botania.mana_infusion('ars_nouveau:purple_archwood_sapling', 'ars_nouveau:blue_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:purple_archwood_sapling")
    botania.mana_infusion('ars_nouveau:red_archwood_sapling', 'ars_nouveau:purple_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:red_archwood_sapling")
    botania.mana_infusion('ars_nouveau:green_archwood_sapling', 'ars_nouveau:red_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:mana_infusion_green_archwood_sapling")
    //活石
    remove('botania:pure_daisy/livingrock')
    botania.pure_daisy('botania:livingrock', 'minecraft:calcite', 30).id("atlanabyss:livingrock")
    //活木
    remove('botania:pure_daisy/livingwood')
    botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:green_archwood_log', 30).id("atlanabyss:livingwood_by_green")
    botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:blue_archwood_log', 30).id("atlanabyss:livingwood_by_blue")
    botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:purple_archwood_log', 30).id("atlanabyss:livingwood_by_purple")
    botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:red_archwood_log', 30).id("atlanabyss:livingwood_by_red")

    //荧光花花瓣
    function petal(dye) {
        event.shapeless(Item.of(`botania:${dye}_petal`, 2), [
            `botania:${dye}_shiny_flower`
        ]).id(`atlanabyss:${dye}_petal_3`)
    }
    petal('white')
    petal('light_gray')
    petal('gray')
    petal('black')
    petal('brown')
    petal('orange')
    petal('magenta')
    petal('yellow')
    petal('lime')
    petal('pink')
    petal('cyan')
    petal('purple')
    petal('gray')
    petal('blue')
    petal('green')
    petal('red')


    //创造书
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: {
            item: 'ars_nouveau:archmage_spell_book'
        },
        output: 'ars_nouveau:creative_spell_book',
        count: 1,
        source: 5000,
        pedestalItems: [
            { item: { item: 'kubejs:infinity_ingot' } },
            { item: { item: 'kubejs:infinity_ingot' } }
        ]
    }).id('atlanabyss:imbuement_creative_spell_book')
    //创造罐
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        reagent: [{ item: 'ars_nouveau:source_jar' }],
        pedestalItems: [
            { item: { item: 'kubejs:infinity_ingot' } },
            { item: { item: 'kubejs:infinity_ingot' } },
            { item: { item: 'kubejs:infinity_ingot' } },
            { item: { item: 'kubejs:infinity_ingot' } }
        ],
        output: { item: 'ars_nouveau:creative_source_jar' },
        sourceCost: 0,
        keepNbtOfReagent: false
    }).id('atlanabyss:enchanting_apparatus_creative_source_jar')
    //创造池
    botania.runic_altar('botania:creative_pool', [
        'kubejs:infinity_ingot',
        'kubejs:infinity_ingot',
        'kubejs:infinity_ingot',
        'kubejs:infinity_ingot'
    ], 200000).id('atlanabyss:runic_altar_creative_pool')
})