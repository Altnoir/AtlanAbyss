onEvent('tags.items', event => {
	//多余的
	const tagsToRemove = [
		//信标激活物品移除
		['minecraft:beacon_payment_items', 'ars_nouveau:source_gem'],
		//火药块
		['forge:storage_blocks/gunpowder', 'thermal:gunpowder_block'],
		//多余的巧克力棒
		['forge:bars/chocolate', 'create:bar_of_chocolate'],
		//奶桶
		['forge:bottles', '#forge:bottles/milk'],
		['forge:bottles/milk', 'neapolitan:milk_bottle'],
		//面团
		['forge:dough', 'create:dough'],
		['forge:dough/wheat', 'create:dough'],
		//背包
		['curios:back', 'thermal:satchel'],
		['curios:back', 'thermal:potion_quiver'],
		//byd钢
		['forge:ingots/steel', 'beyond_earth:steel_ingot'],
		['forge:nuggets/steel', 'beyond_earth:steel_nugget'],
		['forge:storage_blocks/steel', 'beyond_earth:steel_block'],
		//byd铁
		['forge:plates/iron', 'beyond_earth:iron_plate'],
		['forge:rods/iron', 'beyond_earth:iron_stick'],
		//粉
		['forge:dusts/diamond', 'createaddition:diamond_grit'],
		['forge:dusts', 'createaddition:diamond_grit'],
		['forge:dusts/ender_pearl', 'ae2:ender_dust'],
		['forge:dusts', 'ae2:ender_dust'],
		//铜粒
		['forge:nuggets/copper', 'thermal:copper_nugget'],
		['forge:nuggets/copper', 'tconstruct:copper_nugget'],
		//板
		['forge:plates/iron', 'thermal:iron_plate'],
		['forge:plates/gold', 'thermal:gold_plate'],
		['forge:plates/copper', 'thermal:copper_plate'],
		//青铜
		['forge:storage_blocks/bronze', 'thermal:bronze_block'],
		['forge:ingots/bronze', 'thermal:bronze_ingot'],
		['forge:nuggets/bronze', 'thermal:bronze_nugget'],
		['forge:dusts/bronze', 'thermal:bronze_dust'],
		['forge:plates/bronze', 'thermal:bronze_plate'],
		['forge:coins/bronze', 'thermal:bronze_coin'],
		//琥珀金
		['forge:ingots', 'createaddition:electrum_ingot'],
		['forge:ingots/electrum', 'createaddition:electrum_ingot'],
		['forge:nuggets', 'createaddition:electrum_nugget'],
		['forge:nuggets/electrum', 'createaddition:electrum_nugget'],
		['forge:plates', 'createaddition:electrum_sheet'],
		['forge:plates/electrum', 'createaddition:electrum_sheet'],
		//玫瑰金
		['forge:ingots', 'thermal:rose_gold_ingot'],
		['forge:ingots/rose_gold', 'thermal:rose_gold_ingot'],
		['forge:nuggets', 'thermal:rose_gold_nugget'],
		['forge:nuggets/rose_gold', 'thermal:rose_gold_nugget'],
		['forge:plates', 'thermal:rose_gold_plate'],
		['forge:plates/rose_gold', 'thermal:rose_gold_plate'],
		['forge:dusts/rose_gold', 'thermal:rose_gold_dust'],
		['forge:gears/rose_gold', 'thermal:rose_gold_gear'],
		['forge:coins/rose_gold', 'thermal:rose_gold_coin'],
		['forge:storage_blocks/rose_gold', 'thermal:rose_gold_block'],
		//齿轮
		['forge:gears/iron', 'thermal:iron_gear'],
		['forge:gears/gold', 'thermal:gold_gear'],
		['forge:gears/copper', 'thermal:copper_gear'],
		['forge:gears/netherite', 'thermal:netherite_gear'],
		['forge:gears/lapis', 'thermal:lapis_gear'],
		['forge:gears/diamond', 'thermal:diamond_gear'],
		['forge:gears/emerald', 'thermal:emerald_gear'],
		['forge:gears/quartz', 'thermal:quartz_gear'],
		['forge:gears/tin', 'thermal:tin_gear'],
		['forge:gears/lead', 'thermal:lead_gear'],
		['forge:gears/silver', 'thermal:silver_gear'],
		['forge:gears/nickel', 'thermal:nickel_gear'],
		['forge:gears/bronze', 'thermal:bronze_gear'],
		['forge:gears/electrum', 'thermal:electrum_gear'],
		['forge:gears/invar', 'thermal:invar_gear'],
		['forge:gears/constantan', 'thermal:constantan_gear'],
		['forge:gears/signalum', 'thermal:signalum_gear'],
		['forge:gears/lumium', 'thermal:lumium_gear'],
		['forge:gears/enderium', 'thermal:enderium_gear'],
		['forge:gears/steel', 'thermal:steel_gear'],
		//原木
		['minecraft:logs_that_burn', '#botania:livingwood_logs'],//植物魔法
		['minecraft:logs_that_burn', '#botania:dreamwood_logs'],
		['minecraft:logs_that_burn', 'ars_nouveau:red_archwood_log'],//新生魔艺
		['minecraft:logs_that_burn', 'ars_nouveau:blue_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:purple_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:green_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:red_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:blue_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:green_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:purple_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_blue_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_blue_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_green_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_green_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_red_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_red_archwood_wood'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_purple_archwood_log'],
		['minecraft:logs_that_burn', 'ars_nouveau:stripped_purple_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:red_archwood_log'],
		['minecraft:logs', 'ars_nouveau:blue_archwood_log'],
		['minecraft:logs', 'ars_nouveau:purple_archwood_log'],
		['minecraft:logs', 'ars_nouveau:green_archwood_log'],
		['minecraft:logs', 'ars_nouveau:red_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:blue_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:green_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:purple_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:stripped_blue_archwood_log'],
		['minecraft:logs', 'ars_nouveau:stripped_blue_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:stripped_green_archwood_log'],
		['minecraft:logs', 'ars_nouveau:stripped_green_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:stripped_red_archwood_log'],
		['minecraft:logs', 'ars_nouveau:stripped_red_archwood_wood'],
		['minecraft:logs', 'ars_nouveau:stripped_purple_archwood_log'],
		['minecraft:logs', 'ars_nouveau:stripped_purple_archwood_wood'],
		['minecraft:logs', '#tconstruct:slimy_logs'],//匠魂
		//木板
		['minecraft:planks', 'botania:livingwood_planks'],//植物魔法
		['minecraft:planks', 'botania:mossy_livingwood_planks'],
		['minecraft:planks', 'botania:framed_livingwood'],
		['minecraft:planks', 'botania:pattern_framed_livingwood'],
		['minecraft:planks', 'botania:dreamwood_planks'],
		['minecraft:planks', 'botania:mossy_dreamwood_planks'],
		['minecraft:planks', 'botania:framed_dreamwood'],
		['minecraft:planks', 'botania:pattern_framed_dreamwood'],
		['minecraft:planks', 'botania:shimmerwood_planks'],
		['minecraft:planks', 'ars_nouveau:archwood_planks'],//新生魔艺
		['minecraft:planks', '#tconstruct:slimy_planks'],//匠魂
		//铀
		['forge:ingots', 'biggerreactors:uranium_ingot'],
		['forge:ores', 'biggerreactors:uranium_ore'],
		['forge:ores/uranium', 'biggerreactors:uranium_ore'],
		//钚
		['forge:ingots', 'biggerreactors:blutonium_ingot'],
		['forge:dusts', 'biggerreactors:blutonium_dust'],
		//蓝晶
		['forge:ingots', 'biggerreactors:cyanite_ingot'],
		['forge:dusts', 'biggerreactors:cyanite_dust'],
		['forge:dusts/cyanite', 'biggerreactors:cyanite_dust'],
		['forge:storage_blocks/cyanite', 'biggerreactors:cyanite_block'],
		//镥
		['forge:ingots', 'biggerreactors:ludicrite_ingot'],
		['forge:ingots/ludicrite', 'biggerreactors:ludicrite_ingot'],
		['forge:dusts', 'biggerreactors:ludicrite_dust'],
		['forge:dusts/ludicrite', 'biggerreactors:ludicrite_dust']
	];
	for (const [tag, item] of tagsToRemove) {
		event.remove(tag, item);
	}
	//移除气动工艺强化石台阶的标签
	event.remove('pneumaticcraft:slabs', ['pneumaticcraft:reinforced_brick_slab', 'pneumaticcraft:reinforced_stone_slab']);



	//加！
	const tagToAdd = [
		//信标激活物品添加
		['minecraft:beacon_payment_items', 'kubejs:aluminium_alloy_ingot'],
		//替身是个好东西之生物质
		['forge:fuels', 'createaddition:biomass'],
		['forge:fuels/bio', 'createaddition:biomass'],
		//替身是个好东西之电路板
		['forge:circuits', 'pneumaticcraft:printed_circuit_board'],
		['forge:circuits/basic', 'pneumaticcraft:printed_circuit_board'],
		//九头蛇肉
		['kubejs:hydra_meat', 'kubejs:hydra_piece'],
		['kubejs:hydra_meat', 'twilightforest:hydra_chop'],
		//鹿肉
		['kubejs:vension_raw', 'twilightforest:raw_venison'],
		['kubejs:vension_raw', 'kubejs:raw_venison_rib'],
		//牛头人肉
		['kubejs:meef_raw', 'twilightforest:raw_meef'],
		['kubejs:meef_raw', 'kubejs:raw_meef_slice'],
		//熟牛头人肉
		['kubejs:meef_cooked', 'twilightforest:cooked_meef'],
		['kubejs:meef_cooked', 'kubejs:cooked_meef_slice'],
		//铝
		['forge:ores', 'kubejs:nether_aluminum_ore'],//矿石
		['forge:ores/aluminum', 'kubejs:nether_aluminum_ore'],
		['forge:raw_materials/aluminum', 'kubejs:raw_aluminum'],//粗矿
		['forge:storage_blocks/raw_aluminum', 'kubejs:raw_aluminum_block'],//粗矿块
		['forge:ingots/aluminum', 'kubejs:aluminum_ingot'],//锭
		['forge:nuggets/aluminum', 'kubejs:aluminum_nugget'],//粒
		['forge:plates/aluminum', 'kubejs:aluminum_sheet'],//板
		['forge:storage_blocks/aluminum', 'kubejs:aluminum_block'],//块
		['forge:dusts/aluminum', 'kubejs:aluminum_dust'],//粉
		//铋
		['forge:ores', 'kubejs:end_bismuth_ore'],//矿石
		['forge:ores/bismuth', 'kubejs:end_bismuth_ore'],
		['forge:raw_materials/bismuth', 'kubejs:raw_bismuth'],//粗矿
		['forge:storage_blocks/raw_bismuth', 'kubejs:raw_bismuth_block'],//粗矿块
		['forge:ingots/bismuth', 'kubejs:bismuth_ingot'],//锭
		//铀
		['forge:ores', 'kubejs:inversia_uranium_ore'],//矿石
		['forge:ores/uranium', 'kubejs:inversia_uranium_ore'],
		['forge:raw_materials/uranium', 'kubejs:raw_uranium'],//粗矿
		['forge:storage_blocks/raw_uranium', 'kubejs:raw_uranium_block'],//粗矿块
		//铂
		['forge:ingots/platinum', 'kubejs:platinum_ingot'],//锭
		['forge:nuggets/platinum', 'kubejs:platinum_nugget'],//粒
		['forge:storage_blocks/platinum', 'kubejs:platinum_block'],//块
		//钨
		['forge:ingots/tungsten', 'kubejs:tungsten_ingot'],//锭
		['forge:nuggets/tungsten', 'kubejs:tungsten_nugget'],//粒
		['forge:storage_blocks/tungsten', 'kubejs:tungsten_block'],//块
		//锇
		['forge:ingots/osmium', 'kubejs:osmium_ingot'],//锭
		['forge:plates/osmium', 'kubejs:osmium_sheet'],//板
	];
	for (const [tag, item] of tagToAdd) {
		event.add(tag, item);
	}

	//原木标签
	event.add('llmion:unstripped_wood', [
		'minecraft:oak_log', 'minecraft:oak_wood',
		'minecraft:spruce_log', 'minecraft:spruce_wood',
		'minecraft:birch_log', 'minecraft:birch_wood',
		'minecraft:jungle_log', 'minecraft:jungle_wood',
		'minecraft:acacia_log', 'minecraft:acacia_wood',
		'minecraft:dark_oak_log', 'minecraft:dark_oak_wood',
		'minecraft:crimson_stem', 'minecraft:crimson_hyphae',
		'minecraft:warped_stem', 'minecraft:warped_hyphae'
	]);
	event.add('llmion:vanilla_saplings', [
		'minecraft:oak_sapling', 'minecraft:spruce_sapling',
		'minecraft:birch_sapling', 'minecraft:jungle_sapling',
		'minecraft:acacia_sapling', 'minecraft:dark_oak_sapling',
		'atmospheric:rosewood_sapling', 'atmospheric:morado_sapling',
		'atmospheric:yucca_sapling', 'atmospheric:aspen_sapling'
	]);

	//喝！
	let drinkable = (name) => {
		event.add('drinkit:drinkable', name)
	}
	let thick = (name) => {
		event.add('drinkit:drinkable', name)
		event.add('drinkit:thick', name)
	}
	drinkable('kubejs:thorn_rose_tea')
	drinkable('kubejs:torchberry_juice')
	drinkable('kubejs:phytochemical_juice')
	drinkable('kubejs:glacier_ice_tea')
	drinkable('kubejs:twilight_spring')
	drinkable('kubejs:tear_drink')
	thick('biggerreactors:cyanite_ingot')
	thick('kubejs:glowstew')
	thick('kubejs:mushgloom_sauce')
	thick('kubejs:borer_tear_soup')
	thick('kubejs:thousand_plant_stew')
})

onEvent('tags.blocks', event => {
	//信标激活方块移除
	let removeBeaconBase = (name) => {
		event.remove('minecraft:beacon_base_blocks', name)
	}
	removeBeaconBase('thermal:rose_gold_block')
	removeBeaconBase('twilightforest:arctic_fur_block')
	removeBeaconBase('beyond_earth:steel_block')

	//机械动力扳手标签
	event.add('create:wrench_pickup', [
		/^thermal:machine_/,
		/^thermal:device_/,
		/^thermal:energy_cell/,
		/^thermal:fluid_cell/,
		'thermal:charge_bench',
		'thermal:tinker_bench',
		/^functionalstorage:/
	])
})

onEvent('tags.fluids', event => {
	event.remove('forge:crude_oil', 'pneumaticcraft:oil')//石油
	event.remove('forge:ender', 'thermal:ender')//谐振末影
	event.remove('forge:honey', 'cofh_core:honey')//蜂蜜
	event.remove('forge:potion', 'cofh_core:potion')//药水
	event.add('forge:ethanol', 'createaddition:bioethanol')//乙醇
	event.add('forge:molten_plutonium', 'kubejs:molten_plutonium')//钚
	event.add('llmion:water', 'minecraft:water')//原版水
})