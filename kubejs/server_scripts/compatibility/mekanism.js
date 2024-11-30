onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }

    //锭
    remove('mekanism:processing/osmium/ingot/from_nuggets')
    remove('mekanism:processing/osmium/ingot/from_block')
    remove('create:blasting/ingot_osmium_compat_mekanism')
    remove('mekanism:processing/osmium/ingot/from_raw_blasting')
    remove('mekanism:processing/osmium/ingot/from_ore_blasting')
    remove('mekanism:processing/osmium/ingot/from_dust_blasting')
    remove('create:smelting/ingot_osmium_compat_mekanism')
    remove('mekanism:processing/osmium/ingot/from_raw_smelting')
    remove('mekanism:processing/osmium/ingot/from_ore_smelting')
    remove('mekanism:processing/osmium/ingot/from_dust_smelting')
    remove('thermal:compat/mekanism/smelter_mek_osmium_ore')

    remove('mekanism:processing/tin/ingot/from_nuggets')
    remove('mekanism:processing/tin/ingot/from_block')
    remove('create:blasting/ingot_tin_compat_mekanism')
    remove('mekanism:processing/tin/ingot/from_raw_blasting')
    remove('mekanism:processing/tin/ingot/from_ore_blasting')
    remove('mekanism:processing/tin/ingot/from_dust_blasting')
    remove('create:smelting/ingot_tin_compat_mekanism')
    remove('mekanism:processing/tin/ingot/from_raw_smelting')
    remove('mekanism:processing/tin/ingot/from_ore_smelting')
    remove('mekanism:processing/tin/ingot/from_dust_smelting')

    remove('mekanism:processing/lead/ingot/from_nuggets')
    remove('mekanism:processing/lead/ingot/from_block')
    remove('create:blasting/ingot_lead_compat_mekanism')
    remove('mekanism:processing/lead/ingot/from_raw_blasting')
    remove('mekanism:processing/lead/ingot/from_ore_blasting')
    remove('mekanism:processing/lead/ingot/from_dust_blasting')
    remove('create:smelting/ingot_lead_compat_mekanism')
    remove('mekanism:processing/lead/ingot/from_raw_smelting')
    remove('mekanism:processing/lead/ingot/from_ore_smelting')
    remove('mekanism:processing/lead/ingot/from_dust_smelting')

    remove('mekanism:processing/uranium/ingot/from_nuggets')
    remove('mekanism:processing/uranium/ingot/from_block')
    remove('create:blasting/ingot_uranium_compat_mekanism')
    remove('mekanism:processing/uranium/ingot/from_raw_blasting')
    remove('mekanism:processing/uranium/ingot/from_ore_blasting')
    remove('mekanism:processing/uranium/ingot/from_dust_blasting')
    remove('create:smelting/ingot_uranium_compat_mekanism')
    remove('mekanism:processing/uranium/ingot/from_raw_smelting')
    remove('mekanism:processing/uranium/ingot/from_ore_smelting')
    remove('mekanism:processing/uranium/ingot/from_dust_smelting')

    //粒
    remove('mekanism:processing/osmium/nugget/from_ingot')
    remove('mekanism:processing/tin/nugget/from_ingot')
    remove('mekanism:processing/lead/nugget/from_ingot')
    remove('mekanism:processing/uranium/nugget/from_ingot')
    remove('create:splashing/mekanism/crushed_raw_osmium')
    remove('create:splashing/mekanism/crushed_raw_tin')
    remove('create:splashing/mekanism/crushed_raw_lead')

    //粗
    remove('mekanism:processing/osmium/raw/from_raw_block')
    remove('mekanism:processing/tin/raw/from_raw_block')
    remove('mekanism:processing/lead/raw/from_raw_block')
    remove('mekanism:processing/uranium/raw/from_raw_block')
    remove('mekanism:processing/osmium/raw_storage_blocks/from_raw')
    remove('mekanism:processing/tin/raw_storage_blocks/from_raw')
    remove('mekanism:processing/lead/raw_storage_blocks/from_raw')
    remove('mekanism:processing/uranium/raw_storage_blocks/from_raw')

    //块
    remove('mekanism:processing/tin/storage_blocks/from_ingots')
    remove('mekanism:processing/lead/storage_blocks/from_ingots')
    remove('mekanism:processing/uranium/storage_blocks/from_ingots')
    remove('mekanism:storage_blocks/steel')
    remove('mekanism:storage_blocks/charcoal')
    remove('mekanism:charcoal')

    //矿
    remove('thermal:compat/mekanism/pulverizer_mek_osmium_ore')
    remove('mekanism:processing/osmium/ore/from_raw')
    remove('mekanism:processing/osmium/ore/deepslate_from_raw')
    remove('mekanism:processing/tin/ore/from_raw')
    remove('mekanism:processing/tin/ore/deepslate_from_raw')
    remove('mekanism:processing/lead/ore/from_raw')
    remove('mekanism:processing/lead/ore/deepslate_from_raw')
    remove('mekanism:processing/uranium/ore/from_raw')
    remove('mekanism:processing/uranium/ore/deepslate_from_raw')

    //粉
    remove('mekanism:processing/iron/dust/from_ingot')
    remove('mekanism:processing/iron/dust/from_dirty_dust')
    remove('mekanism:processing/iron/dust/from_raw_ore')
    remove('mekanism:processing/iron/dust/from_raw_block')
    remove('mekanism:processing/iron/dust/from_ore')

    remove('mekanism:processing/gold/dust/from_ingot')
    remove('mekanism:processing/gold/dust/from_dirty_dust')
    remove('mekanism:processing/gold/dust/from_raw_ore')
    remove('mekanism:processing/gold/dust/from_raw_block')
    remove('mekanism:processing/gold/dust/from_ore')

    remove('mekanism:processing/copper/dust/from_ingot')
    remove('mekanism:processing/copper/dust/from_dirty_dust')
    remove('mekanism:processing/copper/dust/from_raw_ore')
    remove('mekanism:processing/copper/dust/from_raw_block')
    remove('mekanism:processing/copper/dust/from_ore')

    remove('mekanism:processing/tin/dust/from_ingot')
    remove('mekanism:processing/tin/dust/from_dirty_dust')
    remove('mekanism:processing/tin/dust/from_raw_ore')
    remove('mekanism:processing/tin/dust/from_raw_block')
    remove('mekanism:processing/tin/dust/from_ore')

    remove('mekanism:processing/lead/dust/from_ingot')
    remove('mekanism:processing/lead/dust/from_dirty_dust')
    remove('mekanism:processing/lead/dust/from_raw_ore')
    remove('mekanism:processing/lead/dust/from_raw_block')
    remove('mekanism:processing/lead/dust/from_ore')

    //钢修复
    remove('mekanism:processing/steel/ingot/from_nuggets')
    remove('mekanism:processing/steel/ingot/from_block')
    remove('mekanism:nuggets/steel')
    remove('mekanism:processing/steel/ingot/from_dust_smelting')
    remove('mekanism:processing/steel/ingot/from_dust_blasting')
    remove('mekanism:processing/steel/ingot_to_dust')
    remove('mekanism:processing/steel/enriched_iron_to_dust')

    //biggerreactors修复
    remove('biggerreactors:compat/mekanism/crushing/crusher_cyanite_ingot')
    remove('biggerreactors:compat/mekanism/crushing/crusher_blutonium_ingot')
    remove('biggerreactors:compat/mekanism/crushing/crusher_ludicrite_ingot')
    //音符盒修复
    remove('mekanism:sawing/jukebox')

    const { create, thermal, mekanism } = event.recipes;

    //兼容锇锭
    remove('mekanism:processing/osmium/dust/from_ingot')
    mekanism.crushing('kubejs:osmium_dust', 'kubejs:osmium_ingot').id('atlanabyss:crushing_osmium_ingot')
    event.smelting('kubejs:osmium_ingot', 'kubejs:osmium_dust').xp(.3).id('atlanabyss:smelting_dust_osmium')
    event.blasting('kubejs:osmium_ingot', 'kubejs:osmium_dust').xp(.3).id('atlanabyss:smoking_dust_osmium')

    //兼容铀锭
    event.shapeless('9x kubejs:uranium_nugget', [
        'kubejs:uranium_ingot'
    ]).id('atlanabyss:uranium_ingot_to_nugget')
    event.shaped('kubejs:uranium_ingot', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:uranium_nugget'
    }).id('atlanabyss:uranium_nugget_to_ingot')
    remove('mekanism:processing/uranium/yellow_cake_uranium')
    mekanism.enriching('2x mekanism:yellow_cake_uranium', 'kubejs:uranium_ingot').id('atlanabyss:enriching_uranium_ingot')



    //融合机兼容
    mekanism.combining('thermal:tin_ore', '8x thermal:raw_tin', 'minecraft:cobblestone').id('atlanabyss:combining_tin_ore')
    mekanism.combining('thermal:deepslate_tin_ore', '8x thermal:raw_tin', 'minecraft:cobbled_deepslate').id('atlanabyss:combining_deepslate_tin_ore')
    mekanism.combining('thermal:lead_ore', '8x thermal:raw_lead', 'minecraft:cobblestone').id('atlanabyss:combining_lead_ore')
    mekanism.combining('thermal:deepslate_lead_ore', '8x thermal:raw_lead', 'minecraft:cobbled_deepslate').id('atlanabyss:combining_deepslate_lead_ore')


    remove('tconstruct:smeltery/melting/metal/osmium/raw')
    remove('tconstruct:smeltery/melting/metal/osmium/raw_block')
    remove('tconstruct:smeltery/melting/metal/osmium/ore_singular')

    //镀锇机壳
    remove('mekanism:steel_casing')
    create.filling('kubejs:osmium_casing', [
        'create:railway_casing',
        Fluid.of('tconstruct:molten_osmium', 360)
    ]).id('atlanabyss:osmium_casing')
    event.replaceInput({}, 'mekanism:steel_casing', 'kubejs:osmium_casing')

    //锇碎片
    const ro = 'create:crushed_raw_osmium';
    create.pressing([
        '2x kubejs:osmium_scrap',
        Item.of('kubejs:osmium_scrap').withChance(0.5)
    ], 'create:crushed_raw_osmium',
    ).id('atlanabyss:pressing_osmium_scrap')//钢板

    //锇！
    create.mixing(Fluid.of('tconstruct:molten_osmium', 90), [
        'kubejs:osmium_scrap',
        '8x ae2:certus_quartz_dust',
        Fluid.of('minecraft:lava', 50)
    ]).superheated().id('atlanabyss:mixing_osmium_ingot')
    thermal.smelter('kubejs:osmium_ingot', [
        'kubejs:osmium_scrap',
        '8x ae2:certus_quartz_dust'
    ]).energy(24000).id('atlanabyss:smelter_osmium_ingot')
    //锇2
    create.mixing(Fluid.of('tconstruct:molten_osmium', 810), [
        'kubejs:osmium_scrap',
        '8x ae2:certus_quartz_dust',
        'kubejs:calamity_ingot'
    ]).superheated().id('atlanabyss:mixing_osmium_ingot_16')
    thermal.smelter('9x kubejs:osmium_ingot', [
        'kubejs:osmium_scrap',
        '8x ae2:certus_quartz_dust',
        'kubejs:calamity_ingot'
    ]).energy(24000).id('atlanabyss:smelter_osmium_ingot_16')


    remove('mekanism:processing/osmium/dust/from_dirty_dust')
    remove('mekanism:processing/osmium/dust/from_raw_ore')
    remove('mekanism:processing/osmium/dust/from_raw_block')
    remove('mekanism:processing/osmium/dust/from_ore')
    //锇粉！
    create.mixing(Fluid.of('tconstruct:molten_osmium', 90), [
        'mekanism:dirty_dust_osmium',
        '8x ae2:certus_quartz_dust',
        Fluid.of('minecraft:lava', 50)
    ]).superheated().id('atlanabyss:mixing_osmium_ingot_from_dust')
    //锇粉2
    create.mixing(Fluid.of('tconstruct:molten_osmium', 810), [
        'mekanism:dirty_dust_osmium',
        '8x ae2:certus_quartz_dust',
        'kubejs:calamity_ingot'
    ]).superheated().id('atlanabyss:mixing_osmium_ingot_16_from_dust')
    thermal.smelter('9x kubejs:osmium_ingot', [
        'mekanism:dirty_dust_osmium',
        '8x ae2:certus_quartz_dust',
        'kubejs:calamity_ingot'
    ]).energy(24000).id('atlanabyss:smelter_osmium_ingot_16_dust')

    //锇粒
    event.shaped('kubejs:osmium_ingot', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:osmium_nugget'
    }).id("atlanabyss:osmium_ingot_from_nugget")
    event.shapeless('9x kubejs:osmium_nugget', [
        'kubejs:osmium_ingot'
    ]).id('atlanabyss:osmium_nugget_from_ingot')

    //粗锇
    event.shaped('kubejs:raw_osmium_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:raw_osmium'
    }).id('atlanabyss:raw_osmium_block')
    event.shapeless('9x kubejs:raw_osmium', [
        'kubejs:raw_osmium_block'
    ]).id('atlanabyss:raw_osmium')

    //锇锭
    event.shapeless('9x kubejs:osmium_ingot', [
        'mekanism:block_osmium'
    ]).id('atlanabyss:osmium_ingot_from_block')


    //铀粉
    remove('mekanism:processing/uranium/dust/from_ingot')
    remove('mekanism:processing/uranium/dust/from_dirty_dust')
    remove('mekanism:processing/uranium/dust/from_raw_ore')
    remove('mekanism:processing/uranium/dust/from_raw_block')
    remove('mekanism:processing/uranium/dust/from_ore')
    remove('create:splashing/mekanism/crushed_raw_uranium')

    remove('biggerreactors:compat/mekanism/enriching/enrichment_uranium_ore')
    remove('biggerreactors:compat/mekanism/crushing/crusher_uranium_ingot')
    mekanism.crushing('biggerreactors:uranium_dust', 'kubejs:uranium_ingot')
    create.mixing(Fluid.of('tconstruct:molten_uranium', 125), [
        'mekanism:dirty_dust_uranium',
        'thermal:sulfur_dust'
    ]).superheated().id('atlanabyss:molten_uranium_from_dust')
    thermal.smelter('kubejs:uranium_ingot', [
        'mekanism:dirty_dust_uranium',
        'thermal:sulfur_dust'
    ]).energy(20000).id('atlanabyss:smelter_dirty_dust_uranium')

    //核废料转换
    event.custom({
        type: 'mekanism:oxidizing',
        input: {
            ingredient: { item: 'biggerreactors:cyanite_ingot' }
        },
        output: { gas: 'mekanism:nuclear_waste', amount: 100 }
    }).id('atlanabyss:oxidizing_nuclear_waste')
    event.custom({
        type: 'mekanism:crystallizing',
        chemicalType: 'gas',
        input: {
            amount: 100,
            gas: 'mekanism:nuclear_waste'
        },
        output: {
            item: 'biggerreactors:cyanite_ingot'
        }
    }).id('atlanabyss:crystallizing_nuclear_waste')

    //钚蒸发
    remove('mekanism:processing/lategame/plutonium')
    event.custom({
        "type": "mekanism:centrifuging",
        "input": {
            "amount": 50,
            "gas": "mekanism:nuclear_waste"
        },
        "output": {
            "gas": "mekanism:plutonium",
            "amount": 1
        }
    }).id('atlanabyss:centrifuging_plutonium')
    // event.custom({
    //     "type": "mekanism:rotary",
    //     "fluidInput": {
    //         "amount": 1,
    //         "tag": "forge:molten_plutonium"
    //     },
    //     "gasOutput": {
    //         "gas": "mekanism:plutonium",
    //         "amount": 1
    //     },
    //     "gasInput": {
    //         "amount": 1,
    //         "gas": "mekanism:plutonium"
    //     },
    //     "fluidOutput": {
    //         "fluid": "kubejs:molten_plutonium",
    //         "amount": 1
    //     }
    // }).id('atlanabyss:rotary_plutonium')
    //钚升华
    event.custom({
        type: 'mekanism:oxidizing',
        input: {
            ingredient: { item: 'kubejs:plutonium_nugget' }
        },
        output: { gas: 'mekanism:plutonium', amount: 10 }
    }).id('atlanabyss:oxidizing_plutonium_nugget')
    event.custom({
        type: 'mekanism:crystallizing',
        chemicalType: 'gas',
        input: {
            amount: 10,
            gas: 'mekanism:plutonium'
        },
        output: {
            item: 'kubejs:plutonium_nugget'
        }
    }).id('atlanabyss:crystallizing_plutonium_nugget')

    //粉兼容
    mekanism.crushing('thermal:iron_dust', 'minecraft:iron_ingot').id('atlanabyss:crushing_iron_ingot')
    mekanism.enriching('thermal:iron_dust', 'mekanism:dirty_dust_iron').id('atlanabyss:enriching_dirty_dust_iron')
    mekanism.enriching('4x thermal:iron_dust', '3x minecraft:raw_iron').id('atlanabyss:enriching_raw_iron')
    mekanism.enriching('12x thermal:iron_dust', 'minecraft:raw_iron_block').id('atlanabyss:enriching_raw_iron_block')
    mekanism.enriching('2x thermal:iron_dust', '#forge:ores/iron').id('atlanabyss:enriching_ore_iron')

    mekanism.crushing('thermal:gold_dust', 'minecraft:gold_ingot').id('atlanabyss:crushing_gold_ingot')
    mekanism.enriching('thermal:gold_dust', 'mekanism:dirty_dust_gold').id('atlanabyss:enriching_dirty_dust_gold')
    mekanism.enriching('4x thermal:gold_dust', '3x minecraft:raw_gold').id('atlanabyss:enriching_raw_gold')
    mekanism.enriching('12x thermal:gold_dust', 'minecraft:raw_gold_block').id('atlanabyss:enriching_raw_gold_block')
    mekanism.enriching('2x thermal:gold_dust', '#forge:ores/gold').id('atlanabyss:enriching_ore_gold')

    mekanism.crushing('thermal:copper_dust', 'minecraft:copper_ingot').id('atlanabyss:crushing_copper_ingot')
    mekanism.enriching('thermal:copper_dust', 'mekanism:dirty_dust_copper').id('atlanabyss:enriching_dirty_dust_copper')
    mekanism.enriching('4x thermal:copper_dust', '3x minecraft:raw_copper').id('atlanabyss:enriching_raw_copper')
    mekanism.enriching('12x thermal:copper_dust', 'minecraft:raw_copper_block').id('atlanabyss:enriching_raw_copper_block')
    mekanism.enriching('2x thermal:copper_dust', '#forge:ores/copper').id('atlanabyss:enriching_ore_copper')

    mekanism.crushing('thermal:tin_dust', 'thermal:tin_ingot').id('atlanabyss:crushing_tin_ingot')
    mekanism.enriching('thermal:tin_dust', 'mekanism:dirty_dust_tin').id('atlanabyss:enriching_dirty_dust_tin')
    mekanism.enriching('4x thermal:tin_dust', '3x thermal:raw_tin').id('atlanabyss:enriching_raw_tin')
    mekanism.enriching('12x thermal:tin_dust', 'thermal:raw_tin_block').id('atlanabyss:enriching_raw_tin_block')
    mekanism.enriching('2x thermal:tin_dust', '#forge:ores/tin').id('atlanabyss:enriching_ore_tin')

    mekanism.crushing('thermal:lead_dust', 'thermal:lead_ingot').id('atlanabyss:crushing_lead_ingot')
    mekanism.enriching('thermal:lead_dust', 'mekanism:dirty_dust_lead').id('atlanabyss:enriching_dirty_dust_lead')
    mekanism.enriching('4x thermal:lead_dust', '3x thermal:raw_lead').id('atlanabyss:enriching_raw_lead')
    mekanism.enriching('12x thermal:lead_dust', 'thermal:raw_lead_block').id('atlanabyss:enriching_raw_lead_block')
    mekanism.enriching('2x thermal:lead_dust', '#forge:ores/lead').id('atlanabyss:enriching_ore_lead')

    mekanism.enriching('2x kubejs:osmium_scrap', 'kubejs:antiquity_debris').id('atlanabyss:enriching_antiquity_debris')

    mekanism.crushing('thermal:steel_dust', 'thermal:steel_ingot').id('atlanabyss:crushing_steel_ingot')
    mekanism.metallurgic_infusing('thermal:steel_dust', 'mekanism:enriched_iron', 'mekanism:carbon', 10).id('atlanabyss:metallurgic_infusing_steel_dust')

    //磨制石英
    mekanism.enriching('kubejs:polished_candy_crystal', 'kubejs:candy_crystal').id('atlanabyss:enriching_candy_crystal')
    mekanism.enriching('kubejs:polished_sulfur', 'thermal:sulfur').id('atlanabyss:enriching_sulfur')
    mekanism.enriching('kubejs:polished_charged_certus_quartz', 'ae2:charged_certus_quartz_crystal').id('atlanabyss:enriching_charged_certus_quartz_crystal')
    //赛特斯石英粉
    remove('mekanism:compat/ae2/certus_ore_to_dust')
    mekanism.crushing('5x ae2:certus_quartz_dust', 'ae2:deepslate_quartz_ore').id('atlanabyss:deepslate_quartz_ore')
    //黑曜石粉
    remove('mekanism:enriching/conversion/obsidian_to_obsidian_dust')
    mekanism.crushing('4x create:powdered_obsidian', 'minecraft:obsidian').id('atlanabyss:enriching_obsidian')
    //石英粉
    remove('mekanism:processing/emerald/to_dust')
    mekanism.crushing('thermal:quartz_dust', 'minecraft:quartz').id('atlanabyss:enriching_quartz')
    //绿宝石粉
    remove('mekanism:processing/quartz/to_dust')
    mekanism.crushing('thermal:emerald_dust', 'minecraft:emerald').id('atlanabyss:enriching_emerald')
    //钻石粉
    remove('mekanism:processing/diamond/to_dust')
    mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond').id('atlanabyss:enriching_diamond')
    //下界合金粉
    remove('mekanism:processing/netherite/ingot_to_dust')
    remove('mekanism:processing/netherite/scrap_to_dust')
    mekanism.crushing('thermal:netherite_dust', 'minecraft:netherite_ingot').id('atlanabyss:enriching_netherite_ingot')
    mekanism.metallurgic_infusing('thermal:netherite_dust', '4x minecraft:netherite_scrap', 'mekanism:gold', 40).id('atlanabyss:metallurgic_infusing_netherite_dust')
    //硫粉
    remove('mekanism:injecting/gunpowder_to_sulfur')
    remove('mekanism:reaction/coal_gasification/blocks_coals')
    mekanism.injecting('thermal:sulfur_dust', 'minecraft:gunpowder', { gas: 'mekanism:hydrogen_chloride', amount: 1 }).id('atlanabyss:injecting_sulfur_dust')
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
            "ingredient": [
                {
                    "tag": "forge:storage_blocks/coal"
                },
                {
                    "tag": "forge:storage_blocks/charcoal"
                }
            ]
        },
        "fluidInput": {
            "amount": 1000,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 1000,
            "gas": "mekanism:oxygen"
        },
        "duration": 900,
        "itemOutput": {
            "item": "thermal:sulfur_dust",
            "count": 9
        },
        "gasOutput": {
            "gas": "mekanism:hydrogen",
            "amount": 1000
        }
    }).id('atlanabyss:reaction_sulfur_dust_by_block_coal')
    remove('mekanism:reaction/coal_gasification/coals')
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
            "ingredient": {
                "tag": "minecraft:coals"
            }
        },
        "fluidInput": {
            "amount": 100,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 100,
            "gas": "mekanism:oxygen"
        },
        "duration": 100,
        "itemOutput": {
            "item": "thermal:sulfur_dust",
        },
        "gasOutput": {
            "gas": "mekanism:hydrogen",
            "amount": 100
        }
    }).id('atlanabyss:reaction_sulfur_dust_by_coal')
    remove('mekanism:reaction/coal_gasification/dusts_coals')
    event.custom({
        "type": "mekanism:reaction",
        "itemInput": {
            "ingredient": [
                {
                    "tag": "forge:dusts/coal"
                },
                {
                    "tag": "forge:dusts/charcoal"
                }
            ]
        },
        "fluidInput": {
            "amount": 100,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 100,
            "gas": "mekanism:oxygen"
        },
        "duration": 100,
        "itemOutput": {
            "item": "thermal:sulfur_dust",
        },
        "gasOutput": {
            "gas": "mekanism:hydrogen",
            "amount": 100
        }
    }).id('atlanabyss:reaction_sulfur_dust_by_dust_coal')

    //强化玻璃
    remove('mekanismgenerators:reactor/glass')
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: {
            item: 'minecraft:glass'
        },
        cast_consumed: true,
        fluid: {
            tag: 'tconstruct:molten_osmium',
            amount: 180
        },
        result: 'mekanismgenerators:reactor_glass',
        cooling_time: 100
    }).id('atlanabyss:mek_reactor_glass')

    //能量板
    remove('mekanism:energy_tablet')
    event.shaped('mekanism:energy_tablet', [
        'ABA',
        'CBC',
        'ABA'
    ], {
        A: 'minecraft:redstone',
        B: 'createaddition:capacitor',
        C: 'mekanism:alloy_infused'
    }).id('atlanabyss:energy_tablet')

    //电阻加热器
    remove('mekanism:resistive_heater')
    event.shaped('mekanism:resistive_heater', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'thermal:tin_ingot',
        B: 'minecraft:redstone',
        C: 'kubejs:osmium_casing',
        D: 'mekanism:energy_tablet'
    }).id('atlanabyss:resistive_heater')
    //化学灌注器
    remove('mekanism:chemical_infuser')
    event.shaped('mekanism:chemical_infuser', [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'mekanism:alloy_infused',
        B: '#forge:circuits/basic',
        C: 'kubejs:osmium_casing',
        D: 'mekanism:basic_chemical_tank'
    }).id('atlanabyss:chemical_infuser')
    //化学溶解室
    remove('mekanism:chemical_dissolution_chamber')
    event.shaped('mekanism:chemical_dissolution_chamber', [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'mekanism:ingot_refined_obsidian',
        B: '#forge:circuits/ultimate',
        C: 'kubejs:osmium_casing',
        D: 'mekanism:basic_chemical_tank'
    }).id('atlanabyss:chemical_dissolution_chamber')
    //化学清洗机
    remove('mekanism:chemical_washer')
    event.shaped('mekanism:chemical_washer', [
        'AEA',
        'BCB',
        'ADA'
    ], {
        A: 'mekanism:ingot_refined_obsidian',
        B: '#forge:circuits/ultimate',
        C: 'kubejs:osmium_casing',
        D: 'mekanism:basic_chemical_tank',
        E: 'mekanism:basic_fluid_tank'
    }).id('atlanabyss:chemical_washer')
    //基础能量立方
    remove('mekanism:energy_cube/basic')
    event.shaped('mekanism:basic_energy_cube', [
        ' D ',
        'DCD',
        ' D '
    ], {
        C: 'kubejs:osmium_casing',
        D: 'mekanism:energy_tablet'
    }).id('atlanabyss:basic_energy_cube')
    //激光
    remove('mekanism:laser')
    event.shaped('mekanism:laser', [
        ' B ',
        'DCD',
        'AAA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'kubejs:charged_electron_tube',
        C: 'kubejs:osmium_casing',
        D: 'mekanism:energy_tablet'
    }).id('atlanabyss:laser')

    //化学罐1
    remove('mekanism:chemical_tank/basic')
    event.shaped('mekanism:basic_chemical_tank', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_chemical_tank')
    //化学罐2
    remove('mekanism:chemical_tank/advanced')
    event.shaped('mekanism:advanced_chemical_tank', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:basic_chemical_tank'
    }).id('atlanabyss:advanced_chemical_tank')
    //化学罐3
    remove('mekanism:chemical_tank/elite')
    event.shaped('mekanism:elite_chemical_tank', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'mekanism:alloy_reinforced',
        C: 'mekanism:advanced_chemical_tank'
    }).id('atlanabyss:elite_chemical_tank')
    //化学罐4
    remove('mekanism:chemical_tank/ultimate')
    event.shaped('mekanism:ultimate_chemical_tank', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'mekanism:alloy_atomic',
        C: 'mekanism:elite_chemical_tank'
    }).id('atlanabyss:ultimate_chemical_tank')

    //储罐1
    remove('mekanism:fluid_tank/basic')
    event.shaped('mekanism:basic_fluid_tank', [
        'A',
        'B',
        'A'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'create:fluid_tank'
    }).id('atlanabyss:basic_fluid_tank')
    //储罐2
    remove('mekanism:fluid_tank/advanced')
    event.shaped('mekanism:advanced_fluid_tank', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:basic_fluid_tank'
    }).id('atlanabyss:advanced_fluid_tank')
    //储罐3
    remove('mekanism:fluid_tank/elite')
    event.shaped('mekanism:elite_fluid_tank', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'mekanism:alloy_reinforced',
        C: 'mekanism:advanced_fluid_tank'
    }).id('atlanabyss:elite_fluid_tank')
    //储罐4
    remove('mekanism:fluid_tank/ultimate')
    event.shaped('mekanism:ultimate_fluid_tank', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'kubejs:osmium_sheet',
        B: 'mekanism:alloy_atomic',
        C: 'mekanism:elite_fluid_tank'
    }).id('atlanabyss:ultimate_fluid_tank')

    //物品管道
    remove('mekanism:transmitter/logistical_transporter/basic')
    event.shaped('4x mekanism:basic_logistical_transporter', [
        'B',
        'A',
        'B'
    ], {
        A: 'thermal:steel_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_logistical_transporter')
    event.shaped('4x mekanism:basic_logistical_transporter', [
        'BAB'
    ], {
        A: 'thermal:steel_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_logistical_transporter2')
    //流体管道
    remove('mekanism:transmitter/mechanical_pipe/basic')
    event.shaped('4x mekanism:basic_mechanical_pipe', [
        'B',
        'A',
        'B'
    ], {
        A: 'kubejs:aluminum_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_mechanical_pipe')
    event.shaped('4x mekanism:basic_mechanical_pipe', [
        'BAB'
    ], {
        A: 'kubejs:aluminum_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_mechanical_pipe2')
    //能量管道
    remove('mekanism:transmitter/universal_cable/basic')
    event.shaped('4x mekanism:basic_universal_cable', [
        'B',
        'A',
        'B'
    ], {
        A: 'minecraft:redstone',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_universal_cable')
    event.shaped('4x mekanism:basic_universal_cable', [
        'BAB'
    ], {
        A: 'minecraft:redstone',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_universal_cable2')
    //气体管道
    remove('mekanism:transmitter/pressurized_tube/basic')
    event.shaped('4x mekanism:basic_pressurized_tube', [
        'B',
        'A',
        'B'
    ], {
        A: 'kubejs:osmium_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_pressurized_tube')
    event.shaped('4x mekanism:basic_pressurized_tube', [
        'BAB'
    ], {
        A: 'kubejs:osmium_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_pressurized_tube2')
    //气体管道
    remove('mekanism:transmitter/pressurized_tube/basic')
    event.shaped('4x mekanism:basic_pressurized_tube', [
        'B',
        'A',
        'B'
    ], {
        A: 'kubejs:osmium_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_pressurized_tube')
    event.shaped('4x mekanism:basic_pressurized_tube', [
        'BAB'
    ], {
        A: 'kubejs:osmium_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_pressurized_tube2')
    //热量管道
    remove('mekanism:transmitter/thermodynamic_conductor/basic')
    event.shaped('4x mekanism:basic_thermodynamic_conductor', [
        'B',
        'A',
        'B'
    ], {
        A: 'thermal:constantan_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_thermodynamic_conductor')
    event.shaped('4x mekanism:basic_thermodynamic_conductor', [
        'BAB'
    ], {
        A: 'thermal:constantan_ingot',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:basic_thermodynamic_conductor2')
    //限流管道
    remove('mekanism:transmitter/restrictive_transporter')
    event.shaped('4x mekanism:restrictive_transporter', [
        'B',
        'A',
        'B'
    ], {
        A: 'minecraft:iron_bars',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:restrictive_transporter')
    event.shaped('4x mekanism:restrictive_transporter', [
        'BAB'
    ], {
        A: 'minecraft:iron_bars',
        B: 'kubejs:osmium_sheet'
    }).id('atlanabyss:restrictive_transporter2')
    //转运管道
    remove('mekanism:transmitter/diversion_transporter')
    event.shapeless('mekanism:diversion_transporter', [
        'mekanism:restrictive_transporter',
        'minecraft:redstone'
    ]).id('atlanabyss:diversion_transporter')

    //QIO1
    remove('mekanism:qio_drive_base')
    event.shaped('mekanism:qio_drive_base', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'thermal:lead_plate',
        B: 'ae2:cell_component_4k',
        C: 'mekanism:pellet_polonium'
    }).id('atlanabyss:qio_drive_base')
    //QIO2
    remove('mekanism:qio_drive_hyper_dense')
    event.shaped('mekanism:qio_drive_hyper_dense', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'thermal:lead_plate',
        B: 'mekanism:qio_drive_base',
        C: 'ae2:singularity'
    }).id('atlanabyss:qio_drive_hyper_dense')
    //QIO3
    remove('mekanism:qio_drive_time_dilating')
    event.shaped('mekanism:qio_drive_time_dilating', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'thermal:lead_plate',
        B: 'mekanism:qio_drive_hyper_dense',
        C: 'kubejs:plutonium_ingot'
    }).id('atlanabyss:qio_drive_time_dilating')
    //QIO4
    remove('mekanism:qio_drive_supermassive')
    event.shaped('mekanism:qio_drive_supermassive', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'thermal:lead_plate',
        B: 'mekanism:qio_drive_time_dilating',
        C: 'mekanism:pellet_antimatter'
    }).id('atlanabyss:qio_drive_supermassive')

    //化配置卡
    remove('mekanism:configuration_card')
    event.shaped('mekanism:configuration_card', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'industrialforegoing:plastic',
        B: '#forge:circuits/basic'
    }).id('atlanabyss:configuration_card');

    //数字矿机
    remove('mekanism:digital_miner')
    create.mechanical_crafting('mekanism:digital_miner', [
        'BDADB',
        'BECEB',
        'BFGFB',
        'B   B',
    ], {
        A: '#forge:circuits/basic',
        B: 'create:metal_girder',
        C: 'mekanism:robit',
        D: 'mekanism:alloy_atomic',
        E: 'mekanism:logistical_sorter',
        F: 'mekanism:teleportation_core',
        G: 'kubejs:osmium_casing'
    }).id('atlanabyss:mechanical_crafting_digital_miner')

    //纸箱
    remove('mekanism:cardboard_box')
    event.shaped('mekanism:cardboard_box', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'thermal:sawdust',
        B: 'mekanism:pellet_antimatter'
    }).id('atlanabyss:cardboard_box')

    //超临界移相器端口
    remove('mekanism:sps_port')
    event.shaped('mekanism:sps_port', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mekanism:sps_casing',
        B: 'kubejs:computation_matrix'
    }).id('atlanabyss:sps_port')



    //电路兼容
    remove('mekanism:control_circuit/basic')
    remove('mekanism:control_circuit/advanced')
    remove('mekanism:control_circuit/elite')
    remove('mekanism:control_circuit/ultimate')
    event.shaped('kubejs:integrated_circuit_advanced', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mekanism:alloy_infused',
        B: 'kubejs:integrated_circuit'
    }).id('atlanabyss:integrated_circuit_advanced')
    event.shaped('kubejs:integrated_circuit_elite', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'kubejs:integrated_circuit_advanced'
    }).id('atlanabyss:integrated_circuit_elite')
    event.shaped('kubejs:integrated_circuit_ultimate', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'kubejs:integrated_circuit_elite'
    }).id('atlanabyss:integrated_circuit_ultimate')

    //锯木机兼容
    remove('mekanism:sawing/log/warped')
    remove('mekanism:sawing/log/crimson')
    remove('mekanism:sawing/log/dark_oak')
    remove('mekanism:sawing/log/acacia')
    remove('mekanism:sawing/log/jungle')
    remove('mekanism:sawing/log/birch')
    remove('mekanism:sawing/log/spruce')
    remove('mekanism:sawing/log/oak')
    remove('mekanism:sawing/planks')
    remove('mekanism:sawing/stairs')
    remove('mekanism:sawing/slabs')
    remove('mekanism:sawing/stick')

    mekanism.sawing('6x minecraft:stick', '#minecraft:planks',
        Item.of('thermal:sawdust').withChance(0.25)).id('atlanabyss:sawing_planks')
    mekanism.sawing('9x minecraft:stick', '#minecraft:wooden_stairs',
        Item.of('thermal:sawdust').withChance(0.38)).id('atlanabyss:sawing_wooden_stairs')
    mekanism.sawing('3x minecraft:stick', '#minecraft:wooden_slabs',
        Item.of('thermal:sawdust').withChance(0.13)).id('atlanabyss:sawing_wooden_slabs')
    mekanism.sawing('thermal:sawdust', 'minecraft:stick'
    ).id('atlanabyss:sawing_stick')
    //批量锯末
    function sawdust(output, input, id) {
        mekanism.sawing(output, input,
            Item.of('thermal:sawdust').withChance(0.25)).id('atlanabyss:sawdust_from_sawing_' + id);
    }
    sawdust('6x minecraft:warped_planks', '#minecraft:warped_stems', 'warped_stems');
    sawdust('6x minecraft:crimson_planks', '#minecraft:crimson_stems', 'crimson_stems');
    sawdust('6x minecraft:dark_oak_planks', '#minecraft:dark_oak_logs', 'dark_oak_logs');
    sawdust('6x minecraft:acacia_planks', '#minecraft:acacia_logs', 'acacia_logs');
    sawdust('6x minecraft:jungle_planks', '#minecraft:jungle_logs', 'jungle_logs');
    sawdust('6x minecraft:birch_planks', '#minecraft:birch_logs', 'birch_logs');
    sawdust('6x minecraft:spruce_planks', '#minecraft:spruce_logs', 'spruce_logs');
    sawdust('6x minecraft:oak_planks', '#minecraft:oak_logs', 'oak_logs');
    sawdust('6x ars_nouveau:archwood_planks', '#forge:logs/archwood', 'archwood');
    sawdust('6x atmospheric:rosewood_planks', '#atmospheric:rosewood_logs', 'rosewood_logs');
    sawdust('6x atmospheric:morado_planks', '#atmospheric:morado_logs', 'morado_logs');
    sawdust('6x atmospheric:yucca_planks', '#atmospheric:yucca_logs', 'yucca_logs');
    sawdust('6x atmospheric:aspen_planks', '#atmospheric:aspen_logs', 'aspen_logs');
    sawdust('6x quark:blossom_planks', '#quark:blossom_logs', 'blossom_logs');
    //批量去皮
    function treebark(output, input, id) {
        mekanism.sawing(output, input, 'farmersdelight:tree_bark').id('atlanabyss:treebark_from_sawing_' + id);
    }
    treebark('atmospheric:stripped_rosewood_log', 'atmospheric:rosewood_log', 'rosewood_logs');
    treebark('atmospheric:stripped_morado_log', 'atmospheric:morado_log', 'morado_logs');
    treebark('atmospheric:stripped_yucca_log', 'atmospheric:yucca_log', 'yucca_logs');
    treebark('atmospheric:stripped_aspen_log', 'atmospheric:aspen_log', 'aspen_logs');
    treebark('atmospheric:stripped_aspen_log', 'atmospheric:watchful_aspen_log', 'watchful_aspen_log');
    treebark('quark:stripped_blossom_log', 'quark:blossom_log', 'blossom_logs');



    //化学品外壳
    remove('appmek:chemical_cell_housing')
    event.shaped('appmek:chemical_cell_housing', [
        'ABA',
        'C C',
        'DDD'
    ], {
        A: 'ae2:quartz_glass',
        B: 'minecraft:redstone_block',
        C: 'kubejs:integrated_circuit_advanced',
        D: 'kubejs:osmium_sheet'
    }).id('atlanabyss:ae_chemical_cell_housing');
    //化学品1k
    event.shaped('appmek:chemical_storage_cell_1k', [
        'ABA',
        'CEC',
        'DDD'
    ], {
        A: 'ae2:quartz_glass',
        B: 'minecraft:redstone_block',
        C: 'kubejs:integrated_circuit_advanced',
        D: 'kubejs:osmium_sheet',
        E: 'ae2:cell_component_1k'
    }).id('atlanabyss:ae_chemical_storage_cell_1k');
    //化学品4k
    event.shaped('appmek:chemical_storage_cell_4k', [
        'ABA',
        'CEC',
        'DDD'
    ], {
        A: 'ae2:quartz_glass',
        B: 'minecraft:redstone_block',
        C: 'kubejs:integrated_circuit_advanced',
        D: 'kubejs:osmium_sheet',
        E: 'ae2:cell_component_4k'
    }).id('atlanabyss:ae_chemical_storage_cell_4k');
    //化学品16k
    event.shaped('appmek:chemical_storage_cell_16k', [
        'ABA',
        'CEC',
        'DDD'
    ], {
        A: 'ae2:quartz_glass',
        B: 'minecraft:redstone_block',
        C: 'kubejs:integrated_circuit_advanced',
        D: 'kubejs:osmium_sheet',
        E: 'ae2:cell_component_16k'
    }).id('atlanabyss:ae_chemical_storage_cell_16k');
    //化学品64k
    event.shaped('appmek:chemical_storage_cell_64k', [
        'ABA',
        'CEC',
        'DDD'
    ], {
        A: 'ae2:quartz_glass',
        B: 'minecraft:redstone_block',
        C: 'kubejs:integrated_circuit_advanced',
        D: 'kubejs:osmium_sheet',
        E: 'ae2:cell_component_64k'
    }).id('atlanabyss:ae_chemical_storage_cell_64k');
    //化学品256k
    event.shaped('appmek:chemical_storage_cell_256k', [
        'ABA',
        'CEC',
        'DDD'
    ], {
        A: 'ae2:quartz_glass',
        B: 'minecraft:redstone_block',
        C: 'kubejs:integrated_circuit_advanced',
        D: 'kubejs:osmium_sheet',
        E: 'ae2:cell_component_256k'
    }).id('atlanabyss:ae_chemical_storage_cell_256k');

    //液体燃料
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: 'mekanism:hydrogen',
            amount: 1000
        },
        burnTime: 24000,
        superheated: true,
    }).id('atlanabyss:liquid_burning_hydrogen')
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: 'mekanism:ethene',
            amount: 1000
        },
        burnTime: 48000,
        superheated: true,
    }).id('atlanabyss:liquid_burning_ethene')




    //机械砧板
    function autoConvert(recipe) {
        const recipeString = JSON.parse(String(recipe.json))
        const newResult = recipeString.result
        const newRecipe = {
            type: 'mekanism:sawing',
            input: { ingredient: recipeString.ingredients[0] },
            mainOutput: newResult[0]
        }
        if (newResult[1]) {
            Object.assign(newRecipe, {
                secondaryChance: newResult[1].chance || 1,
                secondaryOutput: newResult[1]
            })
        }
        event.custom(newRecipe).id((recipe.id + '_auto').replace(/^\w+:/, 'atlanabyss:'))
    }
    event.forEachRecipe({ type: 'farmersdelight:cutting' }, autoConvert);
})