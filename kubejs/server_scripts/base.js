// priority: 100

onEvent('recipes', event => {
	//扬了一些默认配方
	const remove = (name) => {
		event.remove({ id: name })
	}

	const { create, botania } = event.recipes;

	//管道
	remove('pipez:universal_pipe')
	remove('pipez:item_pipe')
	remove('pipez:fluid_pipe')
	remove('pipez:energy_pipe')
	remove('pipez:gas_pipe')
	remove('pipez:basic_upgrade')
	remove('pipez:improved_upgrade')
	remove('pipez:advanced_upgrade')
	remove('pipez:ultimate_upgrade')
	remove('pipez:wrench')
	remove('pipez:filter_destination_tool')

	//花肥
	remove('botania:fertilizer_dye')
	//多余的牛奶瓶
	remove('neapolitan:milk/milk_bucket_from_bottles')
	remove('neapolitan:milk/milk_bottles_from_bucket')
	remove('create:compat/neapolitan/filling/milk_bottle')
	remove('create:compat/neapolitan/emptying/milk_bottle')
	//重复配方
	remove('neapolitan:cake')
	remove('minecraft:cake')

	//有机碎片
	create.mixing('kubejs:organic_scrap', [
		'#minecraft:dirt',
		'#createaddition:plants',
		'#minecraft:flowers'
	]).id("atlanabyss:organic_scrap")
	//深邃碎片
	const orsc = 'kubejs:organic_scrap';
	create.sequenced_assembly('kubejs:deep_scrap',
		orsc, [
		create.filling(orsc, [orsc, Fluid.of('minecraft:water', 500)])
	]).transitionalItem(orsc).loops(8).id("atlanabyss:deep_scrap")
	//质量碎片
	const desc = 'kubejs:deep_scrap';
	create.sequenced_assembly('kubejs:mass_scrap',
		desc, [
		create.deploying(desc, [desc, '#forge:cobblestone'])
	]).transitionalItem(desc).loops(20).id("atlanabyss:mass_scrap")
	//灾厄碎片
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { item: 'kubejs:mass_scrap' },
		cast_consumed: true,
		fluid: { tag: 'minecraft:lava', amount: 1000 },
		result: 'kubejs:misery_scrap',
		cooling_time: 40
	}).id("atlanabyss:misery_scrap")
	//虚空碎片
	event.shapeless('kubejs:void_scrap', [
		'kubejs:misery_scrap',
		'ae2:fluix_pearl'
	]).id("atlanabyss:void_scrap")

	//叶绿锭
	event.shaped('kubejs:abyss_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:deep_scrap'
	}).id("atlanabyss:abyss_ingot")
	//深渊锭
	event.shaped('kubejs:chlorophyll_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:organic_scrap'
	}).id("atlanabyss:chlorophyll_ingot")
	//行星锭
	event.shaped('kubejs:planetary_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:mass_scrap'
	}).id("atlanabyss:planetary_ingot")
	//灾厄锭
	event.shaped('kubejs:calamity_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:misery_scrap'
	}).id("atlanabyss:calamity_ingot")
	//终末锭
	event.shaped('kubejs:end_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:void_scrap'
	}).id("atlanabyss:end_ingot")

	//晶核
	event.shaped('kubejs:crystal_nucleus', [
		'AA',
		'AA'
	], {
		A: 'kubejs:planetary_ingot'
	}).id("atlanabyss:crystal_nucleus")

	event.shaped('minecraft:budding_amethyst', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'minecraft:amethyst_block',
		B: 'kubejs:crystal_nucleus'
	}).id("atlanabyss:budding_amethyst")

	//珊瑚块
	function coralBlock(dye) {
		event.shaped('minecraft:' + dye + '_coral_block', [
			'AB',
			'BA'
		], {
			A: 'minecraft:' + dye + '_coral_fan',
			B: 'minecraft:' + dye + '_coral'
		}).id('atlanabyss:' + dye + '_coral_block')
	}
	coralBlock('tube')
	coralBlock('brain')
	coralBlock('bubble')
	coralBlock('fire')
	coralBlock('horn')

	//唱片机
	remove('minecraft:jukebox')
	event.shaped('minecraft:jukebox', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#minecraft:planks',
		B: 'tconstruct:pattern'
	}).id('atlanabyss:jukebox')

	remove('netmusic:music_player')
	event.shaped('netmusic:music_player', [
		'ACA',
		'ABA',
		'AAA'
	], {
		A: '#minecraft:planks',
		B: 'tconstruct:pattern',
		C: 'minecraft:book'
	}).id('atlanabyss:music_player')

	//龙蛋
	event.shaped('2x minecraft:dragon_egg', [
		'ABA',
		'ACA',
		'AAA'
	], {
		A: 'minecraft:diamond',
		B: 'minecraft:dragon_egg',
		C: 'minecraft:crying_obsidian'
	}).id('atlanabyss:dragon_egg')

	create.splashing('minecraft:crying_obsidian', [
		'minecraft:obsidian'
	]).id('atlanabyss:splashing_obsidian')

	//鞘翅
	event.shaped('2x minecraft:elytra', [
		'ABA',
		'ACA',
		'A A'
	], {
		A: 'minecraft:phantom_membrane',
		B: 'minecraft:elytra',
		C: 'minecraft:popped_chorus_fruit'
	}).id('atlanabyss:elytra')

	//蜘蛛眼
	create.splashing('minecraft:spider_eye',
		'farmersdelight:rotten_tomato'
	).id("atlanabyss:spider_eye")

	//熔炉
	remove('quark:building/crafting/furnaces/cobblestone_furnace')
	event.shaped('minecraft:furnace', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'minecraft:cobblestone'
	}).id("atlanabyss:furnace_from_cobblestone")
	event.shaped('minecraft:furnace', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'minecraft:andesite'
	}).id("atlanabyss:furnace_from_andesite")
	event.shaped('minecraft:furnace', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'minecraft:diorite'
	}).id("atlanabyss:furnace_from_diorite")
	event.shaped('minecraft:furnace', [
		'AAA',
		'A A',
		'AAA'
	], {
		A: 'minecraft:granite'
	}).id("atlanabyss:furnace_from_granite")




	//修复下界合金粒
	remove('tconstruct:common/materials/netherite_nugget_from_ingot')
	remove('tconstruct:common/materials/netherite_ingot_from_nuggets')

	remove('create:crafting/tree_fertilizer')

	//精妙背包升级基板
	remove('sophisticatedbackpacks:upgrade_base')
	event.shaped('sophisticatedbackpacks:upgrade_base', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:string',
		B: 'create:andesite_alloy',
		C: 'minecraft:leather'
	}).id("atlanabyss:sophisticatedbackpacks_upgrade_base")

	//盆栽
	remove('botanypots:minecraft/crop/moss')
	event.custom({
		"type": "botanypots:crop",
		"seed": { "item": "kubejs:cottons_seed" },
		"categories": ["dirt", "farmland"],
		"growthTicks": 600,
		"display": {
			"type": "botanypots:aging",
			"block": "kubejs:cottons"
		},
		"drops": [{
			"chance": 1.00,
			"output": { "item": "kubejs:cotton" },
			"minRolls": 1,
			"maxRolls": 2
		}, {
			"chance": 0.50,
			"output": { "item": "kubejs:cotton" },
			"minRolls": 1,
			"maxRolls": 2
		}, {
			"chance": 0.05,
			"output": { "item": "kubejs:cottons_seed" },
			"minRolls": 1,
			"maxRolls": 2
		}]
	}).id("atlanabyss:crop_cottons_seed")

	//书架配方修复
	function bookshelRecipes(plank, output, id) {
		event.shaped(output, [
			'AAA',
			'BBB',
			'AAA'
		], {
			A: plank,
			B: 'minecraft:book'
		}).id("atlanabyss:" + id)
	}
	bookshelRecipes('atmospheric:rosewood_planks', 'atmospheric:rosewood_bookshelf', 'rosewood_bookshelf')
	bookshelRecipes('atmospheric:morado_planks', 'atmospheric:morado_bookshelf', 'morado_bookshelf')
	bookshelRecipes('atmospheric:yucca_planks', 'atmospheric:yucca_bookshelf', 'yucca_bookshelf')
	bookshelRecipes('atmospheric:aspen_planks', 'atmospheric:aspen_bookshelf', 'aspen_bookshelf')

	//修复了原版宝石矿能烧的BUG
	const blastingAndSmelting = (name) => {
		remove('minecraft:' + name + '_from_blasting_' + name + '_ore')
		remove('minecraft:' + name + '_from_blasting_deepslate_' + name + '_ore')
		remove('minecraft:' + name + '_from_smelting_' + name + '_ore')
		remove('minecraft:' + name + '_from_smelting_deepslate_' + name + '_ore')
	}
	blastingAndSmelting('diamond')
	blastingAndSmelting('emerald')
	blastingAndSmelting('coal')
	blastingAndSmelting('redstone')

	remove('minecraft:lapis_lazuli_from_blasting_lapis_ore')
	remove('minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore')
	remove('minecraft:lapis_lazuli_from_smelting_lapis_ore')
	remove('minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore')
	remove('minecraft:quartz_from_blasting')
	remove('minecraft:quartz')

	//面团
	remove('create:crafting/appliances/dough')
	remove('farmersdelight:wheat_dough_from_water')
	remove('farmersdelight:wheat_dough_from_eggs')

	remove('create:smelting/bread')
	remove('create:smoking/bread')
	remove('create:campfire_cooking/bread')
	remove('create:splashing/wheat_flour')

	event.campfireCooking('minecraft:bread', 'farmersdelight:wheat_dough').id("atlanabyss:campfire_cooking_bread")

	create.splashing(['farmersdelight:wheat_dough'],
		'create:wheat_flour'
	).id("atlanabyss:splashing_wheat_flour")

	remove('create:mixing/dough_by_mixing')

	//蛋糕底座
	remove('createaddition:compacting/cake_base')
	create.compacting('createaddition:cake_base', [
		'#forge:eggs',
		'2x minecraft:sugar',
		'farmersdelight:wheat_dough'
	]).id("atlanabyss:cake_base")

	//火把
	event.campfireCooking('minecraft:torch', 'minecraft:stick').cookingTime(16).id("atlanabyss:campfire_stick")
	//末影珍珠只能复制再生
	remove('minecraft:ender_eye')
	remove('tconstruct:smeltery/casting/ender/eye')
	event.shaped('2x minecraft:ender_eye', [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: 'minecraft:ender_eye',
		B: 'minecraft:ender_pearl',
		C: 'minecraft:blaze_powder'
	}).id("atlanabyss:ender_eye")

	//水晶传送门
	event.shaped('kubejs:amethyst_portal', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:gold_block',
		B: 'minecraft:amethyst_block'
	}).id("atlanabyss:amethyst_portal")
	//深层传送门
	event.shaped('kubejs:deep_portal', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:redstone_block',
		B: 'minecraft:netherite_block'
	}).id("atlanabyss:deep_portal")

	//3x3配方修复
	function crate(a, b) {
		event.shaped(a, [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: b
		}).id("atlanabyss:" + a.replace(/^\w+:/, "shaped_") + "_from" + b.replace(/^\w+:/, '_'))
		event.shapeless('9x ' + b, [
			a
		]).id("atlanabyss:" + b.replace(/^\w+:/, "shapeless_") + "_from" + a.replace(/^\w+:/, '_'))
	}
	crate('neapolitan:strawberry_basket', 'neapolitan:strawberries')
	crate('neapolitan:white_strawberry_basket', 'neapolitan:white_strawberries')
	crate('neapolitan:banana_crate', 'neapolitan:banana_bunch')
	crate('neapolitan:mint_basket', 'neapolitan:mint_leaves')
	crate('neapolitan:adzuki_crate', 'neapolitan:adzuki_beans')
	crate('neapolitan:roasted_adzuki_crate', 'neapolitan:roasted_adzuki_beans')
	crate('atmospheric:passionfruit_crate', 'atmospheric:passionfruit')
	crate('atmospheric:shimmering_passionfruit_crate', 'atmospheric:shimmering_passionfruit')
	crate('atmospheric:barrel_cactus_batch', 'atmospheric:barrel_cactus')
	crate('atmospheric:yucca_cask', 'atmospheric:yucca_fruit')
	crate('atmospheric:roasted_yucca_cask', 'atmospheric:roasted_yucca_fruit')

	event.shapeless('9x minecraft:apple', [
		'quark:apple_crate'
	]).id("atlanabyss:apple_from_quark_apple_crate")
	event.shapeless('9x minecraft:glow_berries', [
		'quark:glowberry_sack'
	]).id("atlanabyss:glow_berries_from_quark_glowberry_sack")

	//烈焰人燃烧室
	remove('create:crafting/kinetics/empty_blaze_burner')
	event.shaped('create:empty_blaze_burner', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'create:iron_sheet',
		B: '#atlanabyss:blaze_burner'
	}).id('atlanabyss:empty_blaze_burner');
	//安山合金
	remove('create:crafting/materials/andesite_alloy_from_zinc')
	remove('create:crafting/materials/andesite_alloy')
	event.shaped('create:andesite_alloy', [
		'BA',
		'AB'
	], {
		A: 'minecraft:andesite',
		B: 'minecraft:moss_block'
	}).id('atlanabyss:andesite_alloy');
	event.shaped('16x create:andesite_alloy', [
		'BA',
		'AB'
	], {
		A: 'minecraft:andesite',
		B: 'kubejs:chlorophyll_ingot'
	}).id('atlanabyss:andesite_alloy_x');

	remove('create:mixing/andesite_alloy_from_zinc')
	remove('create:mixing/andesite_alloy')
	create.mixing('create:andesite_alloy', [
		'minecraft:andesite', 'minecraft:moss_block'
	]).id('atlanabyss:mixing_andesite_alloy');
	create.mixing('16x create:andesite_alloy', [
		'minecraft:andesite', 'kubejs:chlorophyll_ingot'
	]).id('atlanabyss:mixing_andesite_alloy_x');

	remove('tconstruct:compat/create/andesite_alloy_iron');
	remove('tconstruct:compat/create/andesite_alloy_zinc');

	//钻石粉
	remove('createaddition:crushing/diamond')

	function teslaCharging(input, output, energy, id) {
		event.custom({
			type: 'createaddition:charging',
			input: { item: input, count: 1 },
			result: { item: output, count: 1 },
			energy: energy,
		}).id('atlanabyss:' + id)
	}
	//水之精华→黑曜石
	remove('ars_nouveau:water_essence_to_obsidian')
	event.blasting('minecraft:obsidian', 'ars_nouveau:water_essence').id("atlanabyss:obsidian_from_water_essence")

	//钢结构
	remove('yuushya:stone/steel_structure')
	event.stonecutting('yuushya:steel_structure', 'minecraft:iron_ingot').id('atlanabyss:steel_structure_from_ingot');

	//糖果石英
	event.shapeless('kubejs:candy_crystal', ['ars_nouveau:source_gem', '8x minecraft:sugar']).id("atlanabyss:candy_crystal")
	create.filling('kubejs:candy_crystal', [
		Fluid.of('create:honey', 250),
		'ars_nouveau:source_gem'
	]).id("atlanabyss:filling_candy_crystal")
	//打磨
	function polishing(input, output, id) {
		event.custom({
			type: 'create:sandpaper_polishing',
			ingredients: [{ item: input }],
			results: [{ item: output }]
		}).id("atlanabyss:" + id)
	}
	//polishing('kubejs:candy_crystal', 'kubejs:polished_candy_crystal', 'polishing_candy_crystal')
	polishing('kubejs:candy_crystal', 'kubejs:polished_candy_crystal', 'polishing_candy_crystal')
	polishing('ae2:charged_certus_quartz_crystal', 'kubejs:polished_charged_certus_quartz', 'polishing_certus_quartz')
	//更多电子管
	function electronTube(output, a, b, id) {
		event.shaped(output, ['A', 'B'], { A: a, B: b }).id('atlanabyss:' + id)
	}
	electronTube('kubejs:candy_electron_tube', 'kubejs:polished_candy_crystal', 'kubejs:osmium_sheet', 'candy_electron_tube')
	electronTube('kubejs:sulfur_electron_tube', 'kubejs:polished_sulfur', 'kubejs:meteosteel_sheet', 'sulfur_electron_tube')
	//电子管额外配方
	create.deploying(Item.of('create:electron_tube').withChance(0.9), [
		'create:polished_rose_quartz',
		'minecraft:iron_nugget'
	]).id('atlanabyss:deploying_electron_tube')
	create.deploying(Item.of('kubejs:candy_electron_tube').withChance(0.9), [
		'kubejs:polished_candy_crystal',
		'kubejs:osmium_nugget'
	]).id('atlanabyss:deploying_candy_electron_tube')

	//方块小镇自动化
	remove('yuushya:stone/yellow_worn_concrete')
	remove('yuushya:stone/wore_stone')
	remove('yuushya:stone/white_gray_worn_concrete')
	remove('yuushya:stone/top_reinforced_concrete')
	remove('yuushya:stone/orange_worn_concrete')
	remove('yuushya:stone/mossy_bricks')
	remove('yuushya:stone/mink_worn_concrete')
	remove('yuushya:stone/light_gray_worn_concrete')
	remove('yuushya:stone/cream_worn_concrete')

	function yuFilling(output, input) {
		create.filling('yuushya:' + output, [
			input,
			Fluid.of('minecraft:water', 25)
		]).id('atlanabyss:filling_' + output)
	}
	yuFilling('yellow_worn_concrete', 'minecraft:yellow_concrete')
	yuFilling('white_worn_concrete', 'minecraft:white_concrete')
	yuFilling('orange_worn_concrete', 'minecraft:orange_concrete')
	yuFilling('mink_worn_concrete', 'minecraft:gray_concrete')
	yuFilling('light_gray_worn_concrete', 'minecraft:light_gray_concrete')
	yuFilling('cream_worn_concrete', 'minecraft:red_concrete')
	yuFilling('mossy_bricks', 'minecraft:stone_bricks')
	yuFilling('wore_stone', 'yuushya:wore_lime_wall')
	yuFilling('top_reinforced_concrete', 'yuushya:reinforced_concrete')


	remove('supplementaries:soap/carpet')
	event.shapeless('minecraft:white_carpet', [
		'#yuushya:vanilla_wool_carpets',
		'supplementaries:soap'
	]).id("atlanabyss:soap_carpet")

	//超级火把
	remove('torchmaster:megatorch')
	event.shaped('torchmaster:megatorch', [
		'A',
		'B',
		'C'
	], {
		A: 'minecraft:glowstone_dust',
		B: 'minecraft:coal_block',
		C: '#minecraft:logs'
	}).id("atlanabyss:megatorch")
	//野火灯笼
	remove('torchmaster:feral_flare_lantern')
	event.shaped('torchmaster:feral_flare_lantern', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'tconstruct:seared_brick',
		B: 'minecraft:glowstone'
	}).id("atlanabyss:feral_flare_lantern")
	//恐惧灯
	remove('torchmaster:dreadlamp')
	event.shaped('torchmaster:dreadlamp', [
		'AAA',
		'CBC',
		'AAA'
	], {
		A: 'minecraft:obsidian',
		B: 'minecraft:blaze_powder',
		C: 'minecraft:glass_pane'
	}).id("atlanabyss:dreadlamp")
	//自然罗盘
	remove('naturescompass:natures_compass')
	event.shaped('naturescompass:naturescompass', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:moss_block',
		B: '#minecraft:logs',
		C: 'minecraft:compass'
	}).id("atlanabyss:naturescompass")

	//结构罗盘
	remove('explorerscompass:explorers_compass')
	event.shaped('explorerscompass:explorerscompass', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:string',
		B: '#forge:stone',
		C: 'minecraft:compass'
	}).id("atlanabyss:explorerscompass")

	//pipez管道
	event.shaped('4x pipez:universal_pipe', [
		'ABA'
	], {
		A: 'kubejs:aluminum_sheet',
		B: 'kubejs:aluminum_ingot'
	}).id("atlanabyss:universal_pipe")
	event.shaped('4x pipez:universal_pipe', [
		'A',
		'B',
		'A'
	], {
		A: 'kubejs:aluminum_sheet',
		B: 'kubejs:aluminum_ingot'
	}).id("atlanabyss:universal_pipe2")
	event.stonecutting('2x pipez:item_pipe', 'pipez:universal_pipe').id('atlanabyss:item_pipe');//物品管道
	event.stonecutting('2x pipez:fluid_pipe', 'pipez:universal_pipe').id('atlanabyss:fluid_pipe');//流体管道
	event.stonecutting('2x pipez:energy_pipe', 'pipez:universal_pipe').id('atlanabyss:energy_pipe');//能量管道
	event.stonecutting('2x pipez:gas_pipe', 'pipez:universal_pipe').id('atlanabyss:gas_pipe');//气体管道

	//震动部件
	const vm = ('kubejs:incomplete_vibration_mechanim')
	create.sequenced_assembly([
		Item.of('kubejs:vibration_mechanism').withChance(0.5),
		Item.of('kubejs:rose_quartz_sheet').withChance(0.2),
		Item.of('minecraft:amethyst_shard').withChance(0.1),
		Item.of('create:cogwheel').withChance(0.1),
		Item.of('minecraft:redstone').withChance(0.1)
	],
		'kubejs:rose_quartz_sheet',
		[
			create.deploying(vm, [vm, 'minecraft:amethyst_shard']),
			create.deploying(vm, [vm, 'create:cogwheel']),
			create.deploying(vm, [vm, 'minecraft:redstone'])
		]).transitionalItem(vm).loops(5).id("atlanabyss:vibration_mechanism")

	// 电力部件
	const tm = ('kubejs:incomplete_thermal_mechanism')
	create.sequenced_assembly(['kubejs:thermal_mechanism',],
		'kubejs:aluminum_sheet',
		[
			create.deploying(vm, [vm, 'createaddition:zinc_sheet']),
			create.deploying(vm, [vm, '#forge:wires']),
			create.deploying(vm, [vm, 'kubejs:sulfur_electron_tube'])
		]).transitionalItem(vm).loops(5).id("atlanabyss:thermal_mechanism")

	// 引力部件
	const gm = ('kubejs:incomplete_gravitation_mechanism')
	create.sequenced_assembly(['kubejs:gravitation_mechanism',],
		'kubejs:magbismuth_sheet',
		[
			create.deploying(vm, [vm, 'ae2:cell_component_16k']),
			create.deploying(vm, [vm, 'ae2:cell_component_16k']),
			create.deploying(vm, [vm, 'kubejs:candy_electron_tube'])
		]).transitionalItem(vm).loops(5).id("atlanabyss:gravitation_mechanism")

	//纠缠方块
	remove('entangled:block')
	event.shaped('entangled:block', [
		'PPP',
		'P P',
		'PPP'
	], {
		P: 'kubejs:gravitation_mechanism'
	}).id("atlanabyss:entangled_block")


	//传送石碑
	//传送粉
	remove('waystones:warp_dust')
	event.shapeless('2x waystones:warp_dust', [
		'minecraft:ender_pearl',
		'botania:mana_powder'
	]).id("atlanabyss:waystone_warp_dust")
	//传送石
	remove('waystones:warp_stone')
	botania.mana_infusion(
		'waystones:warp_stone',
		'waystones:warp_dust', 240
	).id("atlanabyss:waystones_warp_stone")
	//返回卷轴
	remove('waystones:return_scroll')
	event.shapeless('3x waystones:return_scroll', [
		'ars_nouveau:blank_parchment',
		'botania:mana_powder'
	]).id("atlanabyss:waystone_return_scroll")
	//绑定卷轴
	remove('waystones:bound_scroll')
	event.shapeless('3x waystones:bound_scroll', [
		'ars_nouveau:blank_parchment',
		'minecraft:ender_pearl'
	]).id("atlanabyss:waystone_bound_scroll")
	//传送卷轴
	remove('waystones:warp_scroll')
	event.shapeless('3x waystones:warp_scroll', [
		'ars_nouveau:blank_parchment',
		'waystones:warp_dust'
	]).id("atlanabyss:waystone_warp_scroll")

	//物品收集器
	//基础
	remove('itemcollectors:basic_collector')
	event.shapeless('itemcollectors:basic_collector', [
		'kubejs:vibration_mechanism',
		'create:chute'
	]).id("atlanabyss:basic_collector")
	//高级
	remove('itemcollectors:advanced_collector')
	event.shapeless('itemcollectors:advanced_collector', [
		'itemcollectors:basic_collector',
		'create:nozzle'
	]).id("atlanabyss:advanced_collector")
	//碎片翻倍
	event.stonecutting('2x minecraft:netherite_scrap', 'minecraft:ancient_debris').id('atlanabyss:cutting_ancient_debris');
	event.stonecutting('2x kubejs:osmium_scrap', 'kubejs:antiquity_debris').id('atlanabyss:cutting_antiquity_debris');
	//淵古残骸
	event.smelting('kubejs:osmium_scrap', 'kubejs:antiquity_debris').xp(5.0).id('atlanabyss:smelting_antiquity_debris')
	event.blasting('kubejs:osmium_scrap', 'kubejs:antiquity_debris').xp(5.0).id('atlanabyss:blasting_antiquity_debris')
	//灰烬
	event.smoking('supplementaries:ash', 'minecraft:gunpowder').xp(1.35).id("atlanabyss:smoking_ash")
	//箱装烤马铃薯
	event.shaped('kubejs:baked_potato_crate', [
		'PPP',
		'PPP',
		'PPP'
	], {
		P: 'minecraft:baked_potato'
	}).id("atlanabyss:baked_potato_crate")
	event.shapeless('9x minecraft:baked_potato', [
		'kubejs:baked_potato_crate',
	]).id("atlanabyss:baked_potato_from_ceate")
	//箱装鸡蛋
	event.shaped('kubejs:egg_crate', [
		'eee',
		'eee',
		'eee'
	], {
		e: 'minecraft:egg'
	}).id("atlanabyss:egg_crate")
	event.shapeless('9x minecraft:egg', [
		'kubejs:egg_crate',
	]).id("atlanabyss:egg_from_ceate")
	//棉花
	create.milling([
		'2x minecraft:string',
		Item.of('5x minecraft:string').withChance(0.5),
		Item.of('minecraft:feather').withChance(0.25),
		Item.of('kubejs:cottons_seed').withChance(0.25)
	],
		'kubejs:cotton'
	).id("atlanabyss:milling_cotton")
	event.shapeless('kubejs:cottons_seed', [
		'kubejs:cotton'
	]).id("atlanabyss:cottons_seed")
	event.shaped('2x minecraft:white_wool', [
		'AA',
		'AA'
	], {
		A: 'kubejs:cotton'
	}).id("atlanabyss:wool_from_cotton")
	event.shapeless('9x kubejs:cotton', [
		'kubejs:cotton_crate'
	]).id("atlanabyss:cottons_from_crate")
	event.shaped('kubejs:cotton_crate', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:cotton'
	}).id("atlanabyss:crate_from_cotton")

	//布丁
	event.shaped('2x kubejs:purin', [
		'AA',
		'BC'
	], {
		A: 'minecraft:sugar',
		B: 'minecraft:egg',
		C: '#forge:milk'
	}).id("atlanabyss:purin")
	event.shaped('2x kubejs:purin', [
		'AA',
		'CB'
	], {
		A: 'minecraft:sugar',
		B: 'minecraft:egg',
		C: '#forge:milk'
	}).id("atlanabyss:purin2")

	//混合药草
	// event.shapeless('kubejs:mixed_herb_gg', ['minecraft:fern', 'minecraft:fern']).id("atlanabyss:mixed_herb_gg")//绿+绿
	// event.shapeless('kubejs:mixed_herb_ggg', ['kubejs:mixed_herb_gg', 'minecraft:fern']).id("atlanabyss:mixed_herb_ggg")//绿+绿+绿
	// event.shapeless('kubejs:mixed_herb_rg', ['minecraft:fern', 'minecraft:crimson_roots']).id("atlanabyss:mixed_herb_rg")//红+绿
	// event.shapeless('kubejs:mixed_herb_bg', ['minecraft:fern', 'minecraft:blue_orchid']).id("atlanabyss:mixed_herb_bg")//蓝+绿
	// event.shapeless('kubejs:mixed_herb_yg', ['minecraft:fern', 'minecraft:horn_coral']).id("atlanabyss:mixed_herb_yg")//黄+绿
	// event.shapeless('kubejs:mixed_herb_br', ['minecraft:crimson_roots', 'minecraft:blue_orchid']).id("atlanabyss:mixed_herb_br")//蓝+红
	// event.shapeless('kubejs:mixed_herb_yr', ['minecraft:crimson_roots', 'minecraft:horn_coral']).id("atlanabyss:mixed_herb_yr")//黄+红
	// event.shapeless('kubejs:mixed_herb_bgg', ['kubejs:mixed_herb_gg', 'minecraft:blue_orchid']).id("atlanabyss:mixed_herb_bgg_from_gg")//蓝+绿+绿
	// event.shapeless('kubejs:mixed_herb_ygg', ['kubejs:mixed_herb_gg', 'minecraft:horn_coral']).id("atlanabyss:mixed_herb_ygg_from_gg")//黄+绿+绿
	// event.shapeless('kubejs:mixed_herb_bgg', ['kubejs:mixed_herb_bg', 'minecraft:fern']).id("atlanabyss:mixed_herb_bgg_from_bg")//蓝+绿+绿
	// event.shapeless('kubejs:mixed_herb_ygg', ['kubejs:mixed_herb_yg', 'minecraft:fern']).id("atlanabyss:mixed_herb_ygg_from_yg")//黄+绿+绿
	// event.shapeless('kubejs:mixed_herb_brg', ['kubejs:mixed_herb_rg', 'minecraft:blue_orchid']).id("atlanabyss:mixed_herb_brg_from_rg")//蓝+红+绿
	// event.shapeless('kubejs:mixed_herb_brg', ['kubejs:mixed_herb_bg', 'minecraft:crimson_roots']).id("atlanabyss:mixed_herb_brg_from_bg")//蓝+红+绿
	// event.shapeless('kubejs:mixed_herb_brg', ['kubejs:mixed_herb_br', 'minecraft:fern']).id("atlanabyss:mixed_herb_brg_from_br")//蓝+红+绿
	// event.shapeless('kubejs:mixed_herb_yrg', ['kubejs:mixed_herb_rg', 'minecraft:horn_coral']).id("atlanabyss:mixed_herb_yrg_from_rg")//黄+红+绿
	// event.shapeless('kubejs:mixed_herb_yrg', ['kubejs:mixed_herb_yg', 'minecraft:crimson_roots']).id("atlanabyss:mixed_herb_yrg_from_yg")//黄+红+绿
	// event.shapeless('kubejs:mixed_herb_yrg', ['kubejs:mixed_herb_yr', 'minecraft:fern']).id("atlanabyss:mixed_herb_yrg_from_yr")//黄+红+绿
	//区块载入器
	remove('createchunkloading:crafting/chunk_loader')
	event.shaped('createchunkloading:chunk_loader', [
		'eee',
		'eve',
		'eee'
	], {
		e: 'minecraft:glass',
		v: 'kubejs:vibration_mechanism'
	}).id("atlanabyss:chunk_loader")

	//造纸
	remove('quark:tweaks/crafting/utility/bent/paper')
	create.filling('2x minecraft:paper', [
		'#forge:dusts/wood',
		Fluid.of('minecraft:water', 50)
	]).id("atlanabyss:paper_by_sawdust")

	//滴水石锥
	event.shapeless('4x minecraft:pointed_dripstone', [
		'minecraft:dripstone_block'
	]).id("atlanabyss:pointed_dripstone_by_block")

	//绯红菌岩
	create.item_application('minecraft:crimson_nylium', [
		'minecraft:netherrack',
		'minecraft:crimson_fungus'
	]).id("atlanabyss:item_application_crimson_nylium")
	//诡异菌岩
	create.item_application('minecraft:warped_nylium', [
		'minecraft:netherrack',
		'minecraft:warped_fungus'
	]).id("atlanabyss:item_application_warped_nylium")


	//唱片
	remove('netmusic:music_cd')
	event.shaped('2x netmusic:music_cd', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#minecraft:coals',
		B: '#forge:dyes/pink'
	}).id("atlanabyss:music_cd")

	//胡萝卜厨房
	remove('kitchenkarrot:ice_cubes_1')
	remove('kitchenkarrot:ice_cubes_4')
	remove('kitchenkarrot:ice_cubes_8')
	remove('kitchenkarrot:acorn_from_stonecutting')
	remove('kitchenkarrot:birch_sap')
	remove('kitchenkarrot:empty_can')
	remove('kitchenkarrot:knife')
	remove('kitchenkarrot:shaker')
	//空罐头
	event.shaped('4x kitchenkarrot:empty_can', [
		'S S',
		' S '
	], {
		S: 'kubejs:aluminum_sheet'
	}).id("atlanabyss:empty_can")
	//餐刀
	event.shaped('kitchenkarrot:knife', [
		'A',
		'B'
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:iron_nugget'
	}).id("atlanabyss:kitchenkarrot_knife")
	//摇酒壶
	event.shaped('kitchenkarrot:shaker', [
		'A',
		'B'
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:bucket'
	}).id("atlanabyss:kitchenkarrot_shaker")

	create.splashing('kitchenkarrot:acorn', 'minecraft:oak_leaves').id("atlanabyss:splashing_oak_leaves")
	create.splashing('kitchenkarrot:milk', 'farmersdelight:milk_bottle').id("atlanabyss:splashing_milk_bottle")
	create.splashing('kitchenkarrot:water', Item.of('minecraft:potion', '{Potion:"minecraft:water"}')).id("atlanabyss:splashing_water_potion")
	create.milling('kitchenkarrot:birch_sap', 'minecraft:birch_sapling').id("atlanabyss:milling_birch_sapling")

	//海绵再生
	create.pressing('4x kubejs:sponge_gemmule', 'minecraft:sponge').id("atlanabyss:pressing_sponge")
	create.splashing('minecraft:wet_sponge', 'kubejs:sponge_gemmule').id("atlanabyss:splashing_sponge_gemmule")

	// //蛆和蚊子口器
	// create.splashing([
	// 	'2x alexsmobs:maggot',
	// 	Item.of('alexsmobs:maggot').withChance(.5),
	// 	Item.of('alexsmobs:mosquito_proboscis').withChance(.25),
	// 	Item.of('alexsmobs:blood_sac').withChance(.05)
	// ], 'minecraft:rotten_flesh').id("atlanabyss:splashing_rotten_flesh")


	//暮色乐事
	function fdCutting(item, tool, result, id) {
		let resultList = [];

		result.forEach(e => {
			let output = {};
			if (e[2] != undefined) {
				output = { item: e[0], count: e[1], chance: e[2] }
			} else if (e[1] >= 1) {
				output = { item: e[0], count: e[1] }
			} else {
				output = { item: e[0], chance: e[1] }
			}
			resultList.push(output)
		})

		event.custom({
			type: 'farmersdelight:cutting',
			ingredients: [{ item: item }],
			result: resultList,
			tool: { tag: tool }
		}).id('atlanabyss:farmerscutting_' + id)
	}
	// fdCutting('twilightforest:alpha_yeti_trophy', 'forge:tools/knives', [
	// 	['twilightforest:alpha_yeti_fur', 9],
	// 	['twilightforest:ice_bomb', 4, 0.5]
	// ], 'alpha_yeti_trophy')

	// fdCutting('twilightforest:lich_trophy', 'forge:tools/knives', [
	// 	['minecraft:skeleton_skull', 1],
	// 	['twilightforest:zombie_scepter', 0.2],
	// 	['twilightforest:lifedrain_scepter', 0.2],
	// 	['twilightforest:twilight_scepter', 0.2]
	// ], 'lich_trophy')

	// fdCutting('twilightforest:minoshroom_trophy', 'forge:tools/knives', [
	// 	['twilightforest:raw_meef', 9],
	// 	['minecraft:red_mushroom', 8, 0.5]
	// ], 'minoshroom_trophy')

	// fdCutting('twilightforest:snow_queen_trophy', 'forge:tools/knives', [
	// 	['twilightforest:ice_bomb', 9],
	// 	['twilightforest:ice_sword', 0.2],
	// 	['twilightforest:glass_sword', 0.1],
	// 	['twilightforest:ice_bow', 0.2]
	// ], 'snow_queen_trophy')

	// fdCutting('twilightforest:ur_ghast_trophy', 'forge:tools/knives', [
	// 	['kubejs:experiment_113', 9],
	// 	['twilightforest:experiment_115', 4],
	// 	['kubejs:experiment_110', 0.1]
	// ], 'ur_ghast_trophy')

	// fdCutting('twilightforest:phantom_chestplate', 'forge:tools/pickaxes', [
	// 	['twilightforest:armor_shard_cluster', 5]
	// ], 'phantom_chestplate')
	// fdCutting('twilightforest:phantom_helmet', 'forge:tools/pickaxes', [
	// 	['twilightforest:armor_shard_cluster', 3]
	// ], 'phantom_helmet')
	// fdCutting('twilightforest:cooked_meef', 'forge:tools/knives', [
	// 	['kubejs:cooked_meef_slice', 2]
	// ], 'cooked_meef_slice')
	// fdCutting('twilightforest:cooked_venison', 'forge:tools/knives', [
	// 	['kubejs:cooked_venison_rib', 2]
	// ], 'cooked_venison_rib')
	// fdCutting('twilightforest:hydra_chop', 'forge:tools/knives', [
	// 	['kubejs:hydra_piece', 2]
	// ], 'hydra_piece')
	// fdCutting('twilightforest:hydra_trophy', 'forge:tools/knives', [
	// 	['twilightforest:hydra_chop', 4]
	// ], 'hydra_trophy')
	// fdCutting('twilightforest:knight_phantom_trophy', 'forge:tools/knives', [
	// 	['twilightforest:phantom_helmet', 1]
	// ], 'knight_phantom_trophy')
	// fdCutting('twilightforest:naga_trophy', 'forge:tools/knives', [
	// 	['twilightforest:naga_scale', 9]
	// ], 'naga_trophy')
	// fdCutting('twilightforest:quest_ram_trophy', 'forge:tools/knives', [
	// 	['minecraft:mutton', 9]
	// ], 'quest_ram_trophy')
	// fdCutting('twilightforest:firefly', 'forge:tools/knives', [
	// 	['kubejs:raw_insect', 2]
	// ], 'raw_insect_from_firefly')
	// fdCutting('twilightforest:cicada', 'forge:tools/knives', [
	// 	['kubejs:raw_insect', 2]
	// ], 'raw_insect_from_cicada')
	// fdCutting('twilightforest:moonworm', 'forge:tools/knives', [
	// 	['kubejs:raw_insect', 2]
	// ], 'raw_insect_from_moonworm')
	// fdCutting('twilightforest:raw_meef', 'forge:tools/knives', [
	// 	['kubejs:raw_meef_slice', 2]
	// ], 'raw_meef_slice')
	// fdCutting('twilightforest:raw_venison', 'forge:tools/knives', [
	// 	['kubejs:raw_venison_rib', 2]
	// ], 'raw_venison_rib')

	function cooking(container, time, xp, item, count, result, id) {
		let ingredientsList = [];

		item.forEach(e => {
			let input = {};

			if (e[0] == '#') {
				input = { tag: e.substring(1) }
			}
			else {
				input = { item: e }
			}
			ingredientsList.push(input)
		})

		event.custom({
			type: 'farmersdelight:cooking',
			container: { item: container },
			ingredients: ingredientsList,
			result: { item: result, count: count, },
			experience: xp,
			cookingtime: time
		}).id('atlanabyss:' + id)
	}
	// cooking('minecraft:bowl', 800, 0.5, [
	// 	'#kubejs:hydra_meat',
	// 	'twilightforest:fiery_blood',
	// 	'twilightforest:naga_scale',
	// 	'farmersdelight:tomato_sauce',
	// 	'twilightforest:torchberries'
	// ], 1, 'kubejs:fiery_snakes', 'fiery_snakes')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'kubejs:raw_insect',
	// 	'farmersdelight:onion',
	// 	'minecraft:carrot'
	// ], 1, 'kubejs:fried_insect', 'fried_insect')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'kubejs:glowstew',
	// 	'#kubejs:vension_raw',
	// 	'farmersdelight:raw_pasta',
	// 	'twilightforest:liveroot',
	// 	'minecraft:beetroot'
	// ], 1, 'kubejs:glow_venison_rib_with_pasta', 'glow_venison_rib_with_pasta')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'minecraft:glowstone_dust',
	// 	'twilightforest:mushgloom',
	// 	'twilightforest:torchberries'
	// ], 1, 'kubejs:glowstew', 'glowstew')
	// cooking('minecraft:bowl', 800, 0.35, [
	// 	'farmersdelight:tomato',
	// 	'minecraft:beetroot',
	// 	'twilightforest:fiery_tears',
	// 	'twilightforest:experiment_115',
	// 	'twilightforest:experiment_115'
	// ], 1, 'kubejs:grilled_ghast', 'grilled_ghast')
	// cooking('minecraft:bowl', 400, 0.35, [
	// 	'twilightforest:huge_lily_pad',
	// 	'minecraft:chicken',
	// 	'twilightforest:huge_water_lily',
	// 	'farmersdelight:onion',
	// 	'#forge:eggs',
	// 	'minecraft:bread'
	// ], 4, 'kubejs:lily_chicken', 'lily_chicken')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'minecraft:mushroom_stew',
	// 	'kubejs:raw_meef_slice',
	// 	'twilightforest:liveroot',
	// 	'twilightforest:torchberries',
	// 	'farmersdelight:onion'
	// ], 1, 'twilightforest:meef_stroganoff', 'meef_stroganoff')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'kubejs:mushgloom_sauce',
	// 	'#kubejs:meef_raw',
	// 	'farmersdelight:raw_pasta'
	// ], 1, 'kubejs:mushgloom_meef_pasta', 'mushgloom_meef_pasta')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'minecraft:brown_mushroom',
	// 	'twilightforest:mushgloom',
	// 	'farmersdelight:onion'
	// ], 1, 'kubejs:mushgloom_sauce', 'mushgloom_sauce')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'twilightforest:liveroot',
	// 	'twilightforest:steeleaf_ingot',
	// 	'minecraft:sugar'
	// ], 1, 'kubejs:phytochemical_juice', 'phytochemical_juice')
	// cooking('minecraft:bowl', 800, 0.35, [
	// 	'twilightforest:fiery_tears',
	// 	'minecraft:ghast_tear'
	// ], 1, 'kubejs:tear_drink', 'tear_drink')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'twilightforest:thorn_rose',
	// 	'minecraft:sugar'
	// ], 1, 'kubejs:thorn_rose_tea', 'thorn_rose_tea')
	// cooking('minecraft:bowl', 400, 0.35, [
	// 	'twilightforest:root_strand',
	// 	'twilightforest:fallen_leaves',
	// 	'twilightforest:liveroot',
	// 	'twilightforest:torchberry_plant',
	// 	'minecraft:vine',
	// 	'twilightforest:fiddlehead'
	// ], 1, 'kubejs:thousand_plant_stew', 'thousand_plant_stew')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'twilightforest:torchberries',
	// 	'minecraft:sugar'
	// ], 1, 'kubejs:torchberry_juice', 'torchberry_juice')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'twilightforest:ice_bomb',
	// 	'minecraft:ice',
	// 	'twilightforest:arctic_fur',
	// 	'minecraft:sugar'
	// ], 1, 'kubejs:glacier_ice_tea', 'glacier_ice_tea')
	// cooking('minecraft:bowl', 200, 0.35, [
	// 	'minecraft:ice',
	// 	'twilightforest:raw_ironwood'
	// ], 1, 'kubejs:twilight_spring', 'twilight_spring')

	// function ccss(item, result, xp, id) {
	// 	event.campfireCooking(result, item).xp(xp).id("atlanabyss:campfire_" + id)
	// 	event.smelting(result, item).xp(xp).id("atlanabyss:smelting_" + id)
	// 	event.smoking(result, item).xp(xp).id("atlanabyss:smoking_" + id)
	// }
	// ccss('kubejs:raw_insect', 'kubejs:cooked_insect', 1, 'raw_insect')
	// ccss('kubejs:raw_meef_slice', 'kubejs:cooked_meef_slice', 1, 'raw_meef_slice')
	// ccss('kubejs:raw_venison_rib', 'kubejs:cooked_venison_rib', 1, 'raw_venison_rib')


	// //火炬浆果曲奇
	// event.shaped('8x kubejs:torchberry_cookie', [
	// 	'BAB'
	// ], {
	// 	A: 'twilightforest:torchberries',
	// 	B: 'minecraft:wheat'
	// }).id("atlanabyss:torchberry_cookie")
	// //巧克力夹心薄饼
	// event.shaped('kubejs:chocolate_wafer', [
	// 	'A',
	// 	'B',
	// 	'A'
	// ], {
	// 	A: 'twilightforest:maze_wafer',
	// 	B: 'minecraft:cocoa_beans'
	// }).id("atlanabyss:chocolate_wafer")
	// //米诺陶卷
	// event.shapeless('kubejs:meef_wrap', [
	// 	'#forge:bread', '#kubejs:meef_cooked', '#forge:salad_ingredients', '#forge:crops/onion'
	// ]).id("atlanabyss:meef_wrap")
	// //蘸荧光煲的113
	// event.shapeless('kubejs:glow_113', [
	// 	'kubejs:experiment_113', 'kubejs:glowstew'
	// ]).id("atlanabyss:glow_113")
	// //蘸蜂蜜的113
	// event.shapeless('kubejs:honey_113', [
	// 	'kubejs:experiment_113', 'minecraft:honey_bottle'
	// ]).id("atlanabyss:honey_113")
	// create.filling('kubejs:honey_113', [
	// 	'kubejs:experiment_113', Fluid.of('create:honey', 250)
	// ]).id("atlanabyss:filling_honey_113")
	// //蘸巧克力的113
	// event.shapeless('kubejs:chocolate_113', [
	// 	'kubejs:experiment_113', '#forge:milk', 'minecraft:sugar', 'minecraft:cocoa_beans'
	// ]).id("atlanabyss:chocolate_113")
	// create.filling('kubejs:chocolate_113',
	// 	['kubejs:experiment_113', Fluid.of('create:chocolate', 250)
	// 	]).id("atlanabyss:filling_chocolate_113")
	// //蘸巧克力的113
	// event.shapeless('kubejs:milky_113', [
	// 	'kubejs:experiment_113', '#forge:milk', 'minecraft:sugar'
	// ]).id("atlanabyss:milky_113")
	// create.filling('kubejs:milky_113',
	// 	['kubejs:experiment_113', Fluid.of('minecraft:milk', 250)
	// 	]).id("atlanabyss:filling_milky_113")
	// //九头蛇汉堡
	// event.shapeless('kubejs:hydra_burger', [
	// 	'#forge:bread', '#kubejs:hydra_meat', '#forge:salad_ingredients', '#forge:crops/tomato', '#forge:crops/onion'
	// ]).id("atlanabyss:hydra_burger")
	// //恶魂汉堡
	// event.shapeless('kubejs:ghast_burger', [
	// 	'#forge:bread', 'twilightforest:experiment_115', '#forge:vegetables/beetroot', '#forge:crops/tomato', '#forge:crops/onion'
	// ]).id("atlanabyss:ghast_burger")
	// //浆果串
	// event.shapeless('kubejs:berry_stick', [
	// 	'minecraft:sweet_berries', 'minecraft:glow_berries', 'twilightforest:torchberries', 'minecraft:stick'
	// ]).id("atlanabyss:berry_stick")
	// //恶魂脑沙拉
	// event.shapeless('kubejs:ghast_brain_salad', [
	// 	'minecraft:bowl', '#forge:salad_ingredients', '#forge:crops/onion', '#forge:crops/tomato', 'kubejs:experiment_110', 'twilightforest:borer_essence', 'twilightforest:transformation_powder'
	// ]).id("atlanabyss:ghast_brain_salad")
	// //蛀虫精华甜菜汤
	// event.shapeless('kubejs:borer_tear_soup', [
	// 	'minecraft:bowl', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'twilightforest:borer_essence'
	// ]).id("atlanabyss:borer_tear_soup")
	// //冰川冰淇淋
	// event.shapeless('kubejs:glacier_ice_cream', [
	// 	'minecraft:bowl', 'twilightforest:ice_bomb', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	// ]).id("atlanabyss:glacier_ice_cream")
	// //植物素冰淇淋
	// event.shapeless('kubejs:phytochemical_ice_cream', [
	// 	'minecraft:bowl', 'twilightforest:steeleaf_ingot', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	// ]).id("atlanabyss:phytochemical_ice_cream")
	// //火炬浆果冰淇淋
	// event.shapeless('kubejs:torchberry_ice_cream', [
	// 	'minecraft:bowl', 'twilightforest:torchberries', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	// ]).id("atlanabyss:torchberry_ice_cream")
	// //极光冰淇淋
	// event.shapeless('kubejs:aurora_ice_cream', [
	// 	'minecraft:bowl', 'twilightforest:aurora_block', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	// ]).id("atlanabyss:aurora_ice_cream")
	// //暮色冰淇淋
	// event.shapeless('3x kubejs:twilight_ice_cream', [
	// 	'kubejs:torchberry_ice_cream', 'neapolitan:chocolate_ice_cream', 'neapolitan:strawberry_ice_cream'
	// ]).id("atlanabyss:twilight_ice_cream")
	// //彩虹冰淇淋
	// event.shapeless('3x kubejs:rainbow_ice_cream', [
	// 	'kubejs:aurora_ice_cream', 'neapolitan:banana_ice_cream', 'neapolitan:adzuki_ice_cream'
	// ]).id("atlanabyss:rainbow_ice_cream")
	// //清爽冰淇淋
	// event.shapeless('3x kubejs:refreshing_ice_cream', [
	// 	'kubejs:glacier_ice_cream', 'neapolitan:mint_ice_cream', 'kubejs:phytochemical_ice_cream'
	// ]).id("atlanabyss:refreshing_ice_cream")

	remove('botania:elven_trade/pixie_dust')
	botania.elven_trade(['botania:pixie_dust'], 'botania:mana_powder').id("atlanabyss:elven_trade_pixie_dust")
	// botania.elven_trade(['twilightforest:ice_bomb'], 'minecraft:blue_ice').id("atlanabyss:elven_trade_ice_bomb")
	// botania.elven_trade(['twilightforest:ice_bow'], 'minecraft:bow').id("atlanabyss:elven_trade_ice_bow")
	// botania.elven_trade(['twilightforest:ice_sword'], 'minecraft:diamond_sword').id("atlanabyss:elven_trade_ice_sword")

	botania.brew('kubejs:alicepowah', [
		'minecraft:nether_wart',
		'createaddition:capacitor',
		'minecraft:sugar',
	]).id("atlanabyss:brew_alicepowah")




	//潜声传感器
	event.shaped('8x minecraft:sculk_sensor', [
		'AAA',
		'ASA',
		'AAA'
	], {
		A: 'minecraft:big_dripleaf',
		S: 'minecraft:redstone'
	}).id("atlanabyss:sculk_sensor")

	//收纳袋
	event.shaped('minecraft:bundle', [
		'A',
		'B'
	], {
		A: 'minecraft:string',
		B: 'minecraft:leather'
	}).id("atlanabyss:bundle")
	//末影袋子
	remove('enderstorage:ender_pouch')
	remove('enderstorage:recolour_ender_pouch')
	event.smithing('enderstorage:ender_pouch',
		'minecraft:bundle',
		'minecraft:ender_eye'
	).id("atlanabyss:ender_pouch")
	//青金石合成
	event.shapeless('minecraft:lapis_lazuli', [
		'minecraft:clay_ball',
		'minecraft:blue_dye'
	]).id("atlanabyss:lapis_lazuli")
	//史莱姆球合成
	event.shapeless('minecraft:slime_ball', [
		'farmersdelight:wheat_dough',
		'minecraft:lime_dye'
	]).id("atlanabyss:slime_ball")

	//闪长岩变方解石
	create.filling('minecraft:calcite', [
		'minecraft:diorite',
		Fluid.of('minecraft:water', 500)
	]).id("atlanabyss:filling_calcite")

	//粉碎绯红岩
	create.milling([
		Item.of('create:crushed_raw_iron').withChance(0.40)
	], '#create:stone_types/crimsite').id("atlanabyss:milling_crimsite")
	//粉碎皓蓝石
	create.milling([
		Item.of('create:crushed_raw_zinc').withChance(0.30)
	], '#create:stone_types/asurine').id("atlanabyss:milling_asurine")
	//粉碎辉绿岩
	create.milling([
		Item.of('create:crushed_raw_copper').withChance(0.80)
	], '#create:stone_types/veridium').id("atlanabyss:milling_veridium")
	//粉碎赭金砂
	create.milling([
		Item.of('create:crushed_raw_nickel').withChance(0.40),
		Item.of('create:crushed_raw_gold').withChance(0.20)
	], '#create:stone_types/ochrum').id("atlanabyss:milling_ochrum")
	remove('create:crushing/ochrum')
	remove('create:crushing/ochrum_recycling')
	create.crushing([
		Item.of('create:crushed_raw_nickel').withChance(0.40),
		Item.of('create:crushed_raw_gold').withChance(0.20),
		Item.of('minecraft:gold_nugget').withChance(0.20)
	], '#create:stone_types/ochrum').id("atlanabyss:crushing_ochrum")
	//粉碎石灰岩
	create.milling([
		Item.of('create:crushed_raw_tin').withChance(0.80)
	], '#create:stone_types/limestone').id("atlanabyss:milling_limestone")
	create.crushing([
		Item.of('create:crushed_raw_tin').withChance(0.80)
	], '#create:stone_types/limestone').id("atlanabyss:crushing_limestone")
	//洗涤石灰岩
	create.splashing([
		'minecraft:quartz',
		Item.of('minecraft:lapis_lazuli').withChance(0.25),
		Item.of('minecraft:emerald').withChance(0.05)
	], '#create:stone_types/limestone').id("atlanabyss:splashing_limestone")
	//粉碎玄武岩
	create.milling([
		Item.of('create:crushed_raw_aluminum').withChance(0.40)
	], 'minecraft:basalt').id("atlanabyss:milling_basalt")
	create.crushing([
		Item.of('create:crushed_raw_aluminum').withChance(0.40),
		Item.of('kubejs:aluminum_nugget').withChance(0.40)
	], 'minecraft:basalt').id("atlanabyss:crushing_basalt")
	//粉碎页岩
	create.milling([
		Item.of('create:crushed_raw_silver').withChance(0.45)
	], 'quark:shale').id("atlanabyss:milling_shale")
	create.crushing([
		Item.of('create:crushed_raw_silver').withChance(0.45),
		Item.of('kubejs:osmium_nugget').withChance(0.45)
	], 'quark:shale').id("atlanabyss:crushing_shale")
	//粉碎永冻石
	create.milling([
		'kubejs:deep_scrap'
	], 'quark:permafrost').id("atlanabyss:milling_permafrost")

	create.pressing(
		'kubejs:aluminum_sheet',
		'kubejs:aluminum_ingot'
	).id('atlanabyss:pressing_aluminum_sheet')//铝板
	create.pressing(
		'kubejs:rose_quartz_sheet',
		'create:polished_rose_quartz'
	).id('atlanabyss:pressing_rose_quartz_sheet')//玫瑰石英板
	create.pressing(
		'kubejs:charged_constantan_sheet',
		'kubejs:charged_constantan_ingot'
	).id('atlanabyss:pressing_charged_constantan_sheet')//充能康铜板
	create.pressing(
		'kubejs:meteosteel_sheet',
		'kubejs:meteosteel_ingot'
	).id('atlanabyss:pressing_meteosteel_sheet')//陨钢板
	create.pressing(
		'kubejs:bismuth_sheet',
		'kubejs:bismuth_ingot'
	).id('atlanabyss:pressing_bismuth_sheet')//铋板
	create.pressing(
		'kubejs:osmium_sheet',
		'kubejs:osmium_ingot'
	).id('atlanabyss:pressing_osmium_sheet')//锇板
	create.pressing(
		'kubejs:empty_pcb',
		'minecraft:slime_ball'
	).id('atlanabyss:pressing_empty_pcb')//空电路板

	//缠魂
	create.haunting('ars_nouveau:wilden_spike', 'minecraft:prismarine_shard').id('atlanabyss:haunting_wilden_spike');//新生魔艺掉落物
	create.haunting('ars_nouveau:wilden_horn', 'minecraft:bone').id('atlanabyss:haunting_wilden_horn')
	create.haunting('ars_nouveau:wilden_wing', 'minecraft:rotten_flesh').id('atlanabyss:haunting_wilden_wing')
	create.haunting('ars_nouveau:green_archwood_sapling', '#atlanabyss:vanilla_saplings').id('atlanabyss:haunting_green_archwood_sapling')//新生魔艺绿树
	create.haunting('create:polished_rose_quartz', 'tconstruct:rose_gold_ingot').id('atlanabyss:haunting_rose_gold_quartz')//玫瑰石英
	create.haunting('kubejs:polished_charged_certus_quartz', 'kubejs:platinum_ingot').id('atlanabyss:haunting_platinum_certus_quartz')//铂制石英
	create.haunting('botania:fertilizer', 'minecraft:bone_meal',).id('atlanabyss:haunting_fertilizer')//花肥
	create.haunting('minecraft:fire_charge', 'minecraft:blaze_powder').id('atlanabyss:haunting_fire_charge')//火焰弹
	create.haunting('minecraft:twisting_vines', 'minecraft:vine').id('atlanabyss:haunting_vine')//缠怨藤
	create.haunting('minecraft:turtle_egg', 'minecraft:egg').id('atlanabyss:haunting_egg')//海龟蛋
	create.haunting('minecraft:goat_spawn_egg', 'minecraft:sheep_spawn_egg').id('atlanabyss:haunting_sheep_spawn_egg')//山羊蛋

	event.blasting('minecraft:weeping_vines', 'minecraft:vine').id('atlanabyss:blasting_vine')//垂泪藤

	//基础管道升级
	event.shaped('pipez:basic_upgrade', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:iron_nugget',
		B: 'kubejs:empty_pcb'
	}).id('atlanabyss:deploying_basic_upgrade')
	//进阶管道升级
	event.shaped('pipez:improved_upgrade', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:iron_nugget',
		B: 'pipez:basic_upgrade',
	}).id('atlanabyss:deploying_improved_upgrade')
	//高级管道升级
	event.shaped('pipez:advanced_upgrade', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:iron_nugget',
		B: 'pipez:improved_upgrade'
	}).id('atlanabyss:deploying_advanced_upgrade')
	//终极管道升级
	event.shaped('pipez:ultimate_upgrade', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:iron_nugget',
		B: 'pipez:advanced_upgrade'
	}).id('atlanabyss:deploying_ultimate_upgrade')

	//过滤器目标工具
	event.shaped('pipez:filter_destination_tool', [
		'R',
		'S'
	], {
		R: 'minecraft:redstone_torch',
		S: 'create:sturdy_sheet'
	}).id("atlanabyss:filter_destination_tool")

	create.crushing([
		'9x minecraft:prismarine_shard'
	], 'minecraft:prismarine_bricks').id("atlanabyss:crushing_prismarine_bricks")
	create.crushing([
		'4x minecraft:prismarine_shard'
	], 'minecraft:prismarine').id("atlanabyss:crushing_prismarine")
	create.milling([
		'9x minecraft:prismarine_shard'
	], 'minecraft:prismarine_bricks').id("atlanabyss:milling_prismarine_bricks")
	create.milling([
		'4x minecraft:prismarine_shard'
	], 'minecraft:prismarine').id("atlanabyss:milling_prismarine")


	//轧制微调
	remove('createaddition:rolling/iron_ingot')
	event.custom({
		type: 'createaddition:rolling',
		input: { tag: 'forge:ingots/iron' },
		result: { item: 'createaddition:iron_rod', count: 1 }
	}).id('atlanabyss:rolling_iron_ingot')
	remove('createaddition:rolling/copper_ingot')
	event.custom({
		type: 'createaddition:rolling',
		input: { tag: 'forge:ingots/copper' },
		result: { item: 'createaddition:copper_rod', count: 1 }
	}).id('atlanabyss:rolling_copper_ingot')
	remove('createaddition:rolling/gold_ingot')
	event.custom({
		type: 'createaddition:rolling',
		input: { tag: 'forge:ingots/gold' },
		result: { item: 'createaddition:gold_rod', count: 1 }
	}).id('atlanabyss:rolling_gold_ingot')
	remove('createaddition:rolling/electrum_ingot')
	event.custom({
		type: 'createaddition:rolling',
		input: { tag: 'forge:ingots/electrum' },
		result: { item: 'createaddition:electrum_rod', count: 1 }
	}).id('atlanabyss:rolling_electrum_ingot')
	remove('createaddition:rolling/brass_ingot')
	event.custom({
		type: 'createaddition:rolling',
		input: { tag: 'forge:ingots/brass' },
		result: { item: 'createaddition:brass_rod', count: 1 }
	}).id('atlanabyss:rolling_brass_ingot')


	//幸运方块流体
	create.compacting(Fluid.of('kubejs:lucky_fluid', 10),
		'kubejs:lucky_block'
	).id("atlanabyss:basin_fermenting_lucky_block")

	//幸运物质
	create.compacting('minecraft:iron_block', [
		'minecraft:iron_ingot',
		Fluid.of('kubejs:lucky_fluid', 80)]
	).id("atlanabyss:compacting_iron_from_lucky")

	create.compacting('minecraft:copper_block', [
		'minecraft:copper_ingot',
		Fluid.of('kubejs:lucky_fluid', 50)]
	).id("atlanabyss:compacting_copper_from_lucky")

	create.compacting('minecraft:gold_block', [
		'minecraft:gold_ingot',
		Fluid.of('kubejs:lucky_fluid', 150)]
	).id("atlanabyss:compacting_gold_from_lucky")

	create.compacting('minecraft:diamond_block', [
		'minecraft:diamond',
		Fluid.of('kubejs:lucky_fluid', 420)]
	).id("atlanabyss:compacting_diamond_from_lucky")

	create.compacting('minecraft:netherite_block', [
		'minecraft:netherite_ingot',
		Fluid.of('kubejs:lucky_fluid', 1000)]
	).id("atlanabyss:compacting_netherite_from_lucky")

	create.compacting('minecraft:amethyst_block', [
		'minecraft:amethyst_shard',
		Fluid.of('kubejs:lucky_fluid', 100)]
	).id("atlanabyss:compacting_amethyst_from_lucky")

	create.compacting('create:zinc_block', [
		'create:zinc_ingot',
		Fluid.of('kubejs:lucky_fluid', 80)]
	).id("atlanabyss:compacting_zinc_from_lucky")


	create.compacting('kubejs:aluminum_block', [
		'kubejs:aluminum_ingot',
		Fluid.of('kubejs:lucky_fluid', 200)]
	).id("atlanabyss:compacting_aluminum_from_lucky")

	create.compacting('kubejs:platinum_block', [
		'kubejs:platinum_ingot',
		Fluid.of('kubejs:lucky_fluid', 300)]
	).id("atlanabyss:compacting_platinum_from_lucky")

	create.compacting('kubejs:tungsten_block', [
		'kubejs:tungsten_ingot',
		Fluid.of('kubejs:lucky_fluid', 500)]
	).id("atlanabyss:compacting_tungsten_from_lucky")

	create.compacting('kubejs:bismuth_block', [
		'kubejs:bismuth_ingot',
		Fluid.of('kubejs:lucky_fluid', 800)]
	).id("atlanabyss:compacting_bismuth_from_lucky")


	//幸运刷怪蛋
	event.shaped('minecraft:sheep_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:white_wool',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:sheep_spawn_egg')
	event.shaped('minecraft:cow_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:wheat',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:cow_spawn_egg')
	event.shaped('minecraft:chicken_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:wheat_seeds',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:chicken_spawn_egg')
	event.shaped('minecraft:pig_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:carrot',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:pig_spawn_egg')
	event.shaped('minecraft:fox_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:sweet_berries',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:fox_spawn_egg')
	event.shaped('minecraft:horse_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:golden_carrot',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:horse_spawn_egg')
	event.shaped('minecraft:llama_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:hay_block',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:llama_spawn_egg')
	event.shaped('minecraft:panda_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:bamboo',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:panda_spawn_egg')
	event.shaped('minecraft:cat_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:string',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:cat_spawn_egg')
	event.shaped('minecraft:wolf_spawn_egg', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:bone',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:wolf_spawn_egg')
	event.shaped('minecraft:slime_spawn_egg', [
		'ABA',
		'BAB',
		'ABA'
	], {
		A: 'minecraft:slime_ball',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:slime_spawn_egg')
	event.shaped('minecraft:villager_spawn_egg', [
		'ABA',
		'BAB',
		'ABA'
	], {
		A: 'minecraft:emerald',
		B: 'kubejs:lucky_block'
	}).id('atlanabyss:villager_spawn_egg')

	//陨钢粒
	event.shaped('kubejs:meteosteel_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:meteosteel_nugget'
	}).id("atlanabyss:meteosteel_ingot_from_nugget")
	event.shapeless('9x kubejs:meteosteel_nugget', [
		'kubejs:meteosteel_ingot'
	]).id("atlanabyss:meteosteel_nugget_from_ingot")

	//神铋板
	create.pressing(
		'kubejs:magbismuth_sheet',
		'kubejs:magbismuth_ingot'
	).id("atlanabyss:pressing_magbismuth_sheet")

	create.mixing(
		'kubejs:meteosteel_ingot',
		[
			'6x ae2:sky_dust',
			'minecraft:iron_ingot',
			'minecraft:coal'
		]
	).heated().id("atlanabyss:mixing_meteosteel_ingot")

	create.mixing(
		'2x kubejs:magbismuth_ingot',
		[
			'kubejs:bismuth_ingot',
			'kubejs:aluminium_alloy_ingot'
		]
	).heated().id("atlanabyss:mixing_magbismuth_ingot")



	//压缩煤块
	const o = ('minecraft:obsidian')
	create.sequenced_assembly([
		'kubejs:compressed_coal_block'
	],
		'minecraft:obsidian',
		[
			create.deploying(o, [o, 'minecraft:coal']),
			create.pressing(o, o)
		]).transitionalItem(o).loops(7).id("atlanabyss:compressed_coal_block")

	create.crushing([
		'minecraft:diamond',
		Item.of(('minecraft:diamond'), 1).withChance(.05),

	], 'kubejs:compressed_coal_block').id("atlanabyss:crushing_compressed_coal_block")

	//恩赐之石
	create.crushing([
		Item.of(('create:crushed_raw_copper'), 1).withChance(.20),
		Item.of(('create:crushed_raw_iron'), 1).withChance(.15),
		Item.of(('create:crushed_raw_zinc'), 1).withChance(.12),
		Item.of(('create:crushed_raw_gold'), 1).withChance(.09),
		Item.of(('create:crushed_raw_tin'), 1).withChance(.07),
		Item.of(('create:crushed_raw_nickel'), 1).withChance(.05),
		Item.of(('create:crushed_raw_silver'), 1).withChance(.03),
		Item.of(('minecraft:coal'), 1).withChance(.50),
		Item.of(('create:experience_nugget'), 1).withChance(.75),
	], 'kubejs:divine_ore').id("atlanabyss:divine_ore")

	//噩梦缠怨锭！
	create.mixing(
		'kubejs:eviltwisting_ingot',
		[
			'minecraft:nether_brick',
			'minecraft:twisting_vines',
			'minecraft:weeping_vines',
			Fluid.of('minecraft:lava', 500)
		]
	).heated().id("atlanabyss:eviltwisting_ingot")

	//下界合金碎片再生
	create.crushing([
		'create:cinder_flour',
		Item.of(('minecraft:netherite_scrap'), 1).withChance(.50)
	], 'kubejs:eviltwisting_ingot').id("atlanabyss:eviltwisting_crushing")

	//氧化铝溶液
	create.mixing([
		'minecraft:quartz',
		Fluid.of('kubejs:alumina_solution', 50)
	], [
		'create:crushed_raw_aluminum',
		Fluid.of('minecraft:water', 25)
	]
	).heated().id("atlanabyss:alumina_solution")

	//碎铝块
	create.mixing([
		'2x kubejs:aluminium_chip',
		Fluid.of('minecraft:water', 50)
	], [
		'minecraft:coal',
		Fluid.of('kubejs:alumina_solution', 100)
	]
	).heated().id("atlanabyss:coal_aluminium_chip")

	event.shapeless('kubejs:aluminum_compound', [
		'kubejs:aluminium_chip',
		'ae2:certus_quartz_dust'
	]).id("atlanabyss:aluminum_compound")

	//铝
	event.smelting('kubejs:aluminum_ingot', 'kubejs:aluminum_compound').xp(.8).id("atlanabyss:aluminum_ingot_from_smelting")
	event.blasting('kubejs:aluminum_ingot', 'kubejs:aluminum_compound').xp(.8).id("atlanabyss:aluminum_ingot_from_blasting")

	//粗沙
	create.emptying([
		'kubejs:rough_sand',
		Fluid.of('kubejs:fine_sand', 100)
	], 'minecraft:sand').id("atlanabyss:rough_sand")
	//沙球
	create.compacting('kubejs:sand_ball', [
		'8x kubejs:rough_sand'
	]).id("atlanabyss:sand_ball")

	//硅
	remove('ae2:smelting/silicon_from_certus_quartz_dust')
	remove('ae2:blasting/silicon_from_certus_quartz_dust')
	teslaCharging('kubejs:silicon_compound', 'ae2:silicon', 32000, 'silicon')

	//铝合金锭
	create.mixing('2x kubejs:aluminium_alloy_ingot', [
		'ae2:silicon',
		'2x kubejs:aluminum_ingot'
	]).heated().id("atlanabyss:aluminium_alloy_ingot")

	//铋锭
	create.mixing('kubejs:bismuth_ingot', [
		'kubejs:raw_bismuth',
		'minecraft:chorus_fruit',
		'create:powdered_obsidian'
	]).heated().id("atlanabyss:mixing_bismuth_ingot")

	event.shapeless('9x kubejs:bismuth_ingot', ['kubejs:bismuth_block']).id("atlanabyss:bismuth_ingot_from_block")
	//铋块
	event.shaped('kubejs:bismuth_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:bismuth_ingot'
	}).id("atlanabyss:bismuth_block")


	//炫星锭
	create.mixing('kubejs:astral_ingot', [
		'10x kubejs:star_dust',
		'kubejs:bismuth_block',
		'kubejs:tungsten_nugget'
	]).heated().id("atlanabyss:mixing_astral_ingot")
	//辉恒星合金
	create.mixing('2x kubejs:metanova_alloy', [
		'kubejs:astral_ingot',
		'create:chromatic_compound'
	]).heated().id("atlanabyss:mixing_metanova_alloy")

	//
	Ingredient.of('#forge:ingots').itemIds.forEach((ingot) => {
		create.deploying(ingot, [
			'kubejs:metanova_alloy',
			ingot
		]).keepHeldItem().id('atlanabyss:deploying_copy_' + ingot.replace(':', '_'))
	})



	//电动马达
	remove('createaddition:mechanical_crafting/electric_motor')
	create.mechanical_crafting('createaddition:electric_motor', [
		' ABA ',
		'ABCBA',
		' ADA '
	], {
		A: 'create:brass_sheet',
		B: 'createaddition:copper_spool',
		C: 'create:shaft',
		D: 'create:precision_mechanism'
	}).id("atlanabyss:electric_motor")
	//交流发电机
	remove('createaddition:mechanical_crafting/alternator')
	create.mechanical_crafting('createaddition:alternator', [
		' ABA ',
		'ABCBA',
		' ADA '
	], {
		A: 'create:iron_sheet',
		B: 'createaddition:copper_spool',
		C: 'create:shaft',
		D: 'createaddition:capacitor'
	}).id("atlanabyss:alternator")
	//创造发电机
	remove('createaddition:mechanical_crafting/alternator')
	event.shaped('createaddition:creative_energy', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'createaddition:modular_accumulator',
		B: 'createaddition:alternator',
	}).id("atlanabyss:creative_energy")
	
	//特斯拉
	remove('createaddition:mechanical_crafting/tesla_coil')
	create.mechanical_crafting('createaddition:tesla_coil', [
		'AAA',
		' B ',
		'CDC',
		'EFE'
	], {
		A: 'createaddition:copper_spool',
		B: 'create:shaft',
		C: 'createaddition:capacitor',
		D: 'create:brass_block',
		E: 'create:brass_sheet',
		F: 'kubejs:thermal_mechanism'
	}).id("atlanabyss:tesla_coil")
	//电池
	remove('createaddition:crafting/modular_accumulator_gold')
	remove('createaddition:crafting/modular_accumulator_electrum')
	remove('createaddition:crafting/accumulator_conversion')
	event.shaped('3x createaddition:modular_accumulator', [
		'A',
		'B',
		'C'
	], {
		A: 'create:copper_sheet',
		B: 'create:brass_block',
		C: 'createaddition:zinc_sheet'
	}).id("atlanabyss:modular_accumulator")

	//锌粒
	create.crushing([
		Item.of('2x create:zinc_nugget').withChance(0.4),
		Item.of('create:zinc_nugget').withChance(0.1)
	], 'minecraft:prismarine_shard').id("atlanabyss:zinc_nugget")

	//粗铋块
	event.shaped('kubejs:raw_bismuth_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:raw_bismuth'
	}).id("atlanabyss:raw_bismuth_block_from_raw")
	event.shapeless('9x kubejs:raw_bismuth', [
		'kubejs:raw_bismuth_block',
	]).id("atlanabyss:raw_bismuth_from_block")
	//粗铀块
	event.shaped('kubejs:raw_uranium_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:raw_uranium'
	}).id("atlanabyss:raw_uranium_block_from_raw")
	event.shapeless('9x kubejs:raw_uranium', [
		'kubejs:raw_uranium_block',
	]).id("atlanabyss:raw_uranium_from_block")


	//充能魂钢锭
	teslaCharging('tconstruct:soulsteel_ingot', 'kubejs:charged_soulsteel_ingot', 150000, 'charged_soulsteel_ingot')
	//充能铜锭
	teslaCharging('minecraft:copper_ingot', 'kubejs:charged_constantan_ingot', 150000, 'charged_constantan_ingot')

	//异彩化合物
	create.mixing('2x create:chromatic_compound', [
		'create:polished_rose_quartz',
		'kubejs:polished_candy_crystal',
		'kubejs:polished_sulfur',
		'kubejs:polished_charged_certus_quartz'
	]).superheated().id("atlanabyss:mixing_chromatic_compound")

	//机壳
	create.item_application('create:shadow_steel_casing', [
		'create:andesite_casing',
		'create:shadow_steel'
	]).id("atlanabyss:item_application_shadow_steel_casing")
	create.item_application('create:refined_radiance_casing', [
		'create:andesite_casing',
		'create:refined_radiance'
	]).id("atlanabyss:item_application_refined_radiance_casing")

	//原初锭
	event.custom({
		type: 'ae2:inscriber',
		mode: 'press',
		result: { item: 'kubejs:virgin_ingot' },
		ingredients: {
			top: { item: 'create:refined_radiance' },
			middle: { item: 'kubejs:charged_constantan_ingot' },
			bottom: { item: 'create:shadow_steel' }
		}
	}).id("atlanabyss:inscriber_virgin_ingot")

	//铋晶体
	remove('yuushya:bismuth_crystal')
	event.custom({
		type: 'ars_nouveau:imbuement',
		input: {
			item: 'kubejs:bismuth_ingot'
		},
		output: 'yuushya:bismuth_crystal',
		count: 32,
		source: 100,
		pedestalItems: []
	}).id("atlanabyss:string_by_leather_scrap")
	//油漆工
	remove('yuushya:pictor')
	event.shapeless('yuushya:pictor', [
		'yuushya:bismuth_crystal'
	]).id("atlanabyss:pictor_by_bismuth_crystal")
	event.shapeless('yuushya:bismuth_crystal', [
		'yuushya:pictor'
	]).id("atlanabyss:bismuth_crystal_by_pictor")

	event.shaped('minecraft:dirt', [
		'AA',
		'AA'
	], {
		A: 'kubejs:fragment_dirt'
	}).id("atlanabyss:dirt_from_fragment")
	event.shaped('minecraft:cobblestone', [
		'AA',
		'AA'
	], {
		A: 'kubejs:fragment_stone'
	}).id("atlanabyss:stone_from_fragment")
})

//堆肥桶
onEvent('recipes.compostables', event => {
	event.add('kubejs:cottons_seed', 0.3);
	event.add('kubejs:cotton', 0.65);
})