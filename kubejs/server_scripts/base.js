// priority: 100

onEvent('recipes', event => {
	let {
		mixing,
		cutting,
		filling,
		emptying,
		splashing,
		compacting,
		deploying,
		milling,
		crushing,
		pressing,
		item_application,
		sequenced_assembly,
		mechanical_crafting
	} = event.recipes.create;
	let {
		brew,
		pure_daisy,
		elven_trade,
		mana_infusion
	} = event.recipes.botania;
	//扬了一些默认配方
	let remove = (name) => {
		event.remove({ id: name })
	}
	//管道
	remove('pipez:universal_pipe')
	remove('pipez:item_pipe')
	remove('pipez:fluid_pipe')
	remove('pipez:energy_pipe')
	remove('pipez:basic_upgrade')
	remove('pipez:improved_upgrade')
	remove('pipez:advanced_upgrade')
	remove('pipez:ultimate_upgrade')
	remove('pipez:wrench')
	remove('pipez:filter_destination_tool')
	//beyond_earth
	remove('beyond_earth:steel_ingot_from_nugget')
	remove('beyond_earth:steel_ingot')
	remove('beyond_earth:steel_nugget_from_ingot')
	remove('beyond_earth:steel_block')
	remove('beyond_earth:steel_ingot_blasting')
	remove('beyond_earth:iron_plate')
	remove('beyond_earth:iron_stick')
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
	//扬了拆解台
	remove('twilightforest:uncrafting_table')
	//矿石开凿
	remove('createoreexcavation:cutting/diamond_cutting')
	remove('createoreexcavation:cutting/emerald_cutting')
	remove('createoreexcavation:milling/redstone_milling')
	remove('createoreexcavation:crushing/redstone_crushing')
	remove('createoreexcavation:extractor/water')
	remove('createoreexcavation:drilling/hardened_diamond')
	remove('createoreexcavation:vein_finder')

	//探矿杖
	event.shaped('createoreexcavation:vein_finder', [
		' AB',
		' DC',
		'D  '
	], {
		A: 'minecraft:amethyst_shard',
		B: 'minecraft:ender_eye',
		C: 'thermal:flux_magnet',
		D: 'minecraft:stick'
	}).id("atlanabyss:vein_finder")

	let ipi = 'minecraft:iron_nugget';
	sequenced_assembly('kubejs:mass_scrap',
		'#forge:nuggets/iron', [
		deploying(ipi, [ipi, '#forge:cobblestone'])
	]).transitionalItem(ipi).loops(16).id("atlanabyss:mass_scrap")

	event.shaped('kubejs:planetary_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:mass_scrap'
	}).id("atlanabyss:planetary_ingot")

	event.shaped('kubejs:world_rune', [
		'AA',
		'AA'
	], {
		A: 'kubejs:planetary_ingot'
	}).id("atlanabyss:world_rune")


	//修复了原版宝石矿能烧的BUG
	let blastingAndSmelting = (name) => {
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

	remove('thermal:storage/copper_nugget_from_ingot')

	//面团
	remove('create:crafting/appliances/dough')
	remove('farmersdelight:wheat_dough_from_water')
	remove('farmersdelight:wheat_dough_from_eggs')

	remove('create:smelting/bread')
	remove('create:smoking/bread')
	remove('create:campfire_cooking/bread')
	remove('create:splashing/wheat_flour')

	event.campfireCooking('minecraft:bread', 'farmersdelight:wheat_dough').id("atlanabyss:campfire_cooking_bread")

	splashing(['farmersdelight:wheat_dough'],
		'create:wheat_flour'
	).id("atlanabyss:splashing_wheat_flour").processingTime(600)

	remove('create:mixing/dough_by_mixing')

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
	teslaCharging('minecraft:basalt', 'thermal:basalz_rod', 10000, 'basalz_rod')

	//水之精华→黑曜石
	remove('ars_nouveau:water_essence_to_obsidian')
	event.blasting('minecraft:obsidian', 'ars_nouveau:water_essence').id("atlanabyss:obsidian_from_water_essence")

	//钢结构
	remove('yuushya:stone/steel_structure')
	event.stonecutting('yuushya:steel_structure', 'minecraft:iron_ingot').id('atlanabyss:steel_structure_from_ingot');

	//魔女扫帚
	remove('majobroom:majo_broom')
	remove('majobroom:majo_hat')
	remove('majobroom:majo_cloth')
	event.custom({
		"type": "ars_nouveau:enchanting_apparatus",
		"reagent": [
			{ "item": "minecraft:stick" }
		],
		"pedestalItems": [
			{ "item": { "item": "farmersdelight:straw_bale" } },
			{ "item": { "tag": "forge:gems/source" } },
		],
		"output": {
			"item": "majobroom:broom_item"
		},
		"sourceCost": 0,
		"keepNbtOfReagent": false
	}).id('atlanabyss:broom_item');

	event.shaped('majobroom:majo_hat', [
		' AB',
		'AAA'
	], {
		A: 'ars_nouveau:magebloom_fiber',
		B: 'botania:mana_pearl'

	}).id('atlanabyss:majo_hat');

	event.shaped('majobroom:majo_cloth', [
		'A A',
		'ABA',
		'AAA'
	], {
		A: 'ars_nouveau:magebloom_fiber',
		B: 'botania:mana_pearl'
	}).id('atlanabyss:majo_cloth');

	//墓园
	remove('graveyard:ossuary')
	remove('graveyard:dark_iron_ingot')
	item_application(
		'graveyard:dark_iron_block', [
		'minecraft:iron_block',
		'graveyard:corruption'
	]).id('atlanabyss:item_application_dark_iron_block')

	//飞艇
	remove('immersive_aircraft:airship')
	mechanical_crafting('immersive_aircraft:airship', [
		'SSSSS',
		' A A ',
		' HBEP',
		' HHH '
	], {
		H: 'immersive_aircraft:hull',
		E: 'immersive_aircraft:engine',
		P: 'create:propeller',
		S: 'immersive_aircraft:sail',
		A: 'minecraft:string',
		B: '#create:seats'
	}).id('atlanabyss:mechanical_crafting_airship')
	//双翼机
	remove('immersive_aircraft:biplane')
	mechanical_crafting('immersive_aircraft:biplane', [
		'   S ',
		'S  S ',
		'HHBEP',
		'S  S ',
		'   S '
	], {
		H: 'immersive_aircraft:hull',
		E: 'immersive_aircraft:engine',
		P: 'immersive_aircraft:propeller',
		S: 'immersive_aircraft:sail',
		B: '#create:seats'
	}).id('atlanabyss:mechanical_crafting_biplane')
	//机身
	remove('immersive_aircraft:hull')
	event.shaped('immersive_aircraft:hull', [
		'LIL',
		'LIL'
	], {
		L: 'create:andesite_casing',
		I: 'minecraft:iron_ingot'
	}).id("atlanabyss:aircraft_hull")
	//高级引擎
	remove('immersive_aircraft:engine')
	event.shaped('immersive_aircraft:engine', [
		'BPB',
		'SES'
	], {
		P: 'create:precision_mechanism',
		E: 'immersive_aircraft:boiler',
		B: 'create:brass_sheet',
		S: 'create:sturdy_sheet'
	}).id("atlanabyss:aircraft_engine")
	//大矾
	remove('immersive_aircraft:sail')
	event.shaped('immersive_aircraft:sail', [
		'SSS',
		'SSS'
	], {
		S: 'create:white_sail'
	}).id("atlanabyss:aircraft_sail")
	//大螺旋桨
	remove('immersive_aircraft:propeller')
	event.shaped('immersive_aircraft:propeller', [
		' I ',
		'IPI',
		' I '
	], {
		I: 'create:iron_sheet',
		P: 'create:propeller'
	}).id("atlanabyss:aircraft_propeller")
	//基础引擎
	remove('immersive_aircraft:boiler')
	event.shaped('immersive_aircraft:boiler', [
		'S',
		'N',
		'I'
	], {
		I: 'create:blaze_burner',
		S: 'create:steam_engine',
		N: 'create:fluid_tank'
	}).id("atlanabyss:aircraft_boiler")
	//固定翼旋翼机
	remove('immersive_aircraft:gyrodyne')
	event.shaped('immersive_aircraft:gyrodyne', [
		' P ',
		'SES',
		'HBH'
	], {
		S: 'immersive_aircraft:sail',
		H: 'immersive_aircraft:hull',
		P: 'immersive_aircraft:propeller',
		E: 'create:precision_mechanism',
		B: '#create:seats'
	}).id("atlanabyss:aircraft_gyrodyne")
	//四轴飞行器
	remove('immersive_aircraft:quadrocopter')
	event.shaped('immersive_aircraft:quadrocopter', [
		'PAP',
		' S ',
		'PEP'
	], {
		E: 'immersive_aircraft:boiler',
		A: 'create:andesite_casing',
		S: 'minecraft:string',
		P: 'create:propeller'
	}).id("atlanabyss:aircraft_quadrocopter")
	//黄铜螺旋桨
	remove('immersive_aircraft:enhanced_propeller')
	event.shaped('immersive_aircraft:enhanced_propeller', [
		' B ',
		'BPB',
		' B '
	], {
		B: 'create:brass_sheet',
		P: 'create:propeller'
	}).id("atlanabyss:aircraft_enhanced_propeller")
	//液压引擎
	remove('immersive_aircraft:eco_engine')
	event.shaped('immersive_aircraft:eco_engine', [
		'IWI',
		'CEC'
	], {
		C: 'create:copper_sheet',
		W: 'minecraft:water_bucket',
		I: 'create:iron_sheet',
		E: 'immersive_aircraft:boiler'
	}).id("atlanabyss:aircraft_eco_engine")
	//燃烧引擎
	remove('immersive_aircraft:nether_engine')
	event.shaped('immersive_aircraft:nether_engine', [
		'ILI',
		'SES'
	], {
		S: 'create:sturdy_sheet',
		L: 'minecraft:lava_bucket',
		I: 'create:iron_sheet',
		E: 'immersive_aircraft:boiler'
	}).id("atlanabyss:aircraft_nether_engine")
	//铁制锅炉
	remove('immersive_aircraft:steel_boiler')
	event.shaped('immersive_aircraft:steel_boiler', [
		'IFI'
	], {
		I: 'create:iron_sheet',
		F: 'create:fluid_tank'
	}).id("atlanabyss:aircraft_steel_boiler")
	//工业齿轮
	remove('immersive_aircraft:industrial_gears')
	event.shaped('immersive_aircraft:industrial_gears', [
		'ICI'
	], {
		C: 'create:cogwheel',
		I: 'create:iron_sheet'
	}).id("atlanabyss:aircraft_industrial_gears")
	//加固管道
	remove('immersive_aircraft:sturdy_pipes')
	event.shaped('immersive_aircraft:sturdy_pipes', [
		'IPI'
	], {
		I: 'create:iron_sheet',
		P: 'create:fluid_pipe'
	}).id("atlanabyss:aircraft_sturdy_pipes")
	//陀螺仪
	remove('immersive_aircraft:gyroscope')
	event.shaped('immersive_aircraft:gyroscope', [
		'E',
		'C'
	], {
		E: 'create:electron_tube',
		C: 'minecraft:compass'
	}).id("atlanabyss:aircraft_gyroscope")
	//加固船体
	remove('immersive_aircraft:hull_reinforcement')
	event.shaped('immersive_aircraft:hull_reinforcement', [
		'IHI'
	], {
		H: 'immersive_aircraft:hull',
		I: 'create:iron_sheet'
	}).id("atlanabyss:aircraft_hull_reinforcement")
	//改良型起落架
	remove('immersive_aircraft:improved_landing_gear')
	event.shaped('immersive_aircraft:improved_landing_gear', [
		'SI',
		'B '
	], {
		B: 'create:belt_connector',
		I: 'minecraft:iron_ingot',
		S: 'create:iron_sheet'
	}).id("atlanabyss:aircraft_improved_landing_gear")

	//传送门珍珠
	function gateRecipe(a, b, id) {
		event.custom({
			type: 'gateways:gate_recipe',
			group: 'gateways',
			pattern: ['BBB', 'BAB', 'BBB'],
			key: { A: { item: a }, B: { item: b } },
			result: { item: 'gateways:gate_pearl' },
			gateway: 'gateways:' + id
		}).id("atlanabyss:" + id)
	}
	function gateRecipeSmall(a, b, id) {
		event.custom({
			type: 'gateways:gate_recipe',
			group: 'gateways',
			pattern: [' B ', 'BAB', ' B '],
			key: { A: { item: a }, B: { item: b } },
			result: { item: 'gateways:gate_pearl' },
			gateway: 'gateways:' + id
		}).id("atlanabyss:" + id)
	}
	gateRecipe('twilightforest:naga_scale', 'minecraft:rotten_flesh', 'zombie_gate_ultra')
	gateRecipe('minecraft:ender_eye', 'tconstruct:necrotic_bone', 'wither_skeleton_gate')
	gateRecipe('minecraft:nether_star', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_large')
	gateRecipeSmall('minecraft:ender_pearl', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_small')
	//糖果石英
	event.shapeless('kubejs:candy_quartz', ['ars_nouveau:source_gem', '8x minecraft:sugar']).id("atlanabyss:candy_quartz")
	//打磨
	function polishing(input, output, id) {
		event.custom({
			type: 'create:sandpaper_polishing',
			ingredients: [{ item: input }],
			results: [{ item: output }]
		}).id("atlanabyss:" + id)
	}
	polishing('kubejs:candy_quartz', 'kubejs:polished_candy_quartz', 'polishing_candy_quartz')
	polishing('thermal:sulfur', 'kubejs:polished_sulfur', 'polishing_sulfur')
	polishing('ae2:charged_certus_quartz_crystal', 'kubejs:polished_charged_certus_quartz', 'polishing_certus_quartz')
	//更多电子管
	function electronTube(output, a, b, id) {
		event.shaped(output, ['A', 'B'], { A: a, B: b }).id('atlanabyss:' + id)
	}
	electronTube('kubejs:candy_electron_tube', 'kubejs:polished_candy_quartz', 'kubejs:osmium_sheet', 'candy_electron_tube')
	electronTube('kubejs:sulfur_electron_tube', 'kubejs:polished_sulfur', 'thermal:steel_plate', 'sulfur_electron_tube')
	electronTube('kubejs:charged_electron_tube', 'kubejs:polished_charged_certus_quartz', 'thermal:silver_plate', 'charged_certus_electron_tube')
	//电子管额外配方
	deploying(Item.of('create:electron_tube').withChance(0.9), [
		'create:polished_rose_quartz',
		'minecraft:iron_nugget'
	]).id('atlanabyss:deploying_electron_tube')
	deploying(Item.of('kubejs:candy_electron_tube').withChance(0.9), [
		'kubejs:polished_candy_quartz',
		'kubejs:osmium_nugget'
	]).id('atlanabyss:deploying_candy_electron_tube')
	deploying(Item.of('kubejs:sulfur_electron_tube').withChance(0.9), [
		'kubejs:polished_sulfur',
		'thermal:steel_nugget'
	]).id('atlanabyss:deploying_sulfur_electron_tube')
	deploying(Item.of('kubejs:charged_electron_tube').withChance(0.9), [
		'kubejs:polished_charged_certus_quartz',
		'thermal:silver_nugget'
	]).id('atlanabyss:deploying_charged_certus_electron_tube')

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
		filling('yuushya:' + output, [
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

	//肥皂
	remove('supplementaries:soap')
	compacting(
		'2x supplementaries:soap',
		[
			'minecraft:porkchop',
			'4x supplementaries:ash',
			Fluid.of('thermal:creosote', 250)
		]).id("atlanabyss:pyrolyzer_soap")

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
		A: 'thermal:sulfur_dust',
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

	//pipez管道
	event.shaped('4x pipez:universal_pipe', [
		'A',
		'B',
		'A'
	], {
		A: 'kubejs:osmium_sheet',
		B: 'kubejs:osmium_ingot'
	}).id("atlanabyss:universal_pipe")
	event.stonecutting('pipez:item_pipe', 'pipez:universal_pipe').id('atlanabyss:item_pipe');//物品管道
	event.stonecutting('pipez:fluid_pipe', 'pipez:universal_pipe').id('atlanabyss:fluid_pipe');//流体管道
	event.stonecutting('pipez:energy_pipe', 'pipez:universal_pipe').id('atlanabyss:energy_pipe');//能量管道

	//震动部件
	let vm = ('kubejs:incomplete_vibration_mechanim')
	sequenced_assembly([
		Item.of('kubejs:vibration_mechanism').withChance(0.5),
		Item.of('kubejs:rose_quartz_sheet').withChance(0.2),
		Item.of('minecraft:amethyst_shard').withChance(0.1),
		Item.of('create:cogwheel').withChance(0.1),
		Item.of('minecraft:redstone').withChance(0.1)
	],
		'kubejs:rose_quartz_sheet',
		[
			deploying(vm, [vm, 'minecraft:amethyst_shard']),
			deploying(vm, [vm, 'create:cogwheel']),
			deploying(vm, [vm, 'minecraft:redstone'])
		]).transitionalItem(vm).loops(5).id("atlanabyss:vibration_mechanism")

	//区块加载器
	//3x3
	remove('chunkloaders:basic_chunk_loader')
	event.shaped('chunkloaders:basic_chunk_loader', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'pneumaticcraft:compressed_iron_block',
		B: 'kubejs:vibration_mechanism'
	}).id("atlanabyss:basic_chunk_loader")
	//5x5
	remove('chunkloaders:advanced_chunk_loader')
	event.shaped('chunkloaders:advanced_chunk_loader', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'chunkloaders:basic_chunk_loader',
		B: 'thermal:electrum_block'
	}).id("atlanabyss:advanced_chunk_loader")
	//7x7
	remove('chunkloaders:ultimate_chunk_loader')
	event.shaped('chunkloaders:ultimate_chunk_loader', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'chunkloaders:advanced_chunk_loader',
		B: 'thermal:enderium_block'
	}).id("atlanabyss:ultimate_chunk_loader")

	//传送石碑
	//传送粉
	remove('waystones:warp_dust')
	event.shapeless('2x waystones:warp_dust', [
		'thermal:ender_pearl_dust',
		'botania:mana_powder'
	]).id("atlanabyss:waystone_warp_dust")
	//传送石
	remove('waystones:warp_stone')
	mana_infusion(
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
		'thermal:ender_pearl_dust'
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
		'kubejs:pressure_mechanism',
		'create:chute'
	]).id("atlanabyss:basic_collector")
	//高级
	remove('itemcollectors:advanced_collector')
	event.shapeless('itemcollectors:advanced_collector', [
		'itemcollectors:basic_collector',
		'create:nozzle'
	]).id("atlanabyss:advanced_collector")
	//下界碎片翻倍
	event.stonecutting('2x minecraft:netherite_scrap', 'minecraft:ancient_debris').id('atlanabyss:cutting_ancient_debris');
	//灰烬
	event.smoking('supplementaries:ash', 'thermal:sawdust').xp(1.35).id("atlanabyss:smoking_ash")
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
	milling([
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
	//钻石粉
	crushing(['thermal:diamond_dust'], 'minecraft:diamond').id("atlanabyss:crushing_diamond")
	//锯末
	milling([
		'farmersdelight:tree_bark',
		'16x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.25)
	], '#atlanabyss:unstripped_wood').id("atlanabyss:milling_wood")
	milling([
		'16x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.25)
	], '#forge:stripped_logs').id("atlanabyss:milling_stripped_wood")
	milling([
		'4x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.25)
	], '#minecraft:planks').id("atlanabyss:milling_planks")
	milling([
		'6x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.38)
	], '#minecraft:wooden_stairs').id("atlanabyss:milling_wooden_stairs")
	milling([
		'2x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.13)
	], '#minecraft:wooden_slabs').id("atlanabyss:milling_wooden_slabs")
	//竹子锯末
	milling([
		'minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.5)
	], 'minecraft:bamboo').id("atlanabyss:milling_bamboo")

	//粉末
	milling('thermal:apatite_dust', 'thermal:apatite').id("atlanabyss:milling_apatite")
	milling('thermal:cinnabar_dust', 'thermal:cinnabar').id("atlanabyss:milling_cinnabar")
	milling('thermal:niter_dust', 'thermal:niter').id("atlanabyss:milling_niter")
	milling('thermal:sulfur_dust', 'thermal:sulfur').id("atlanabyss:milling_sulfur")

	//唱片
	remove('netmusic:music_cd')
	event.shaped('2x netmusic:music_cd', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'thermal:cured_rubber',
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

	splashing('kitchenkarrot:acorn', 'minecraft:oak_leaves').id("atlanabyss:splashing_oak_leaves")
	splashing('kitchenkarrot:milk', 'farmersdelight:milk_bottle').id("atlanabyss:splashing_milk_bottle")
	splashing('kitchenkarrot:water', Item.of('minecraft:potion', '{Potion:"minecraft:water"}')).id("atlanabyss:splashing_water_potion")
	milling('kitchenkarrot:birch_sap', 'minecraft:birch_sapling').id("atlanabyss:milling_birch_sapling")

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
	fdCutting('twilightforest:alpha_yeti_trophy', 'forge:tools/knives', [
		['twilightforest:alpha_yeti_fur', 9],
		['twilightforest:ice_bomb', 4, 0.5]
	], 'alpha_yeti_trophy')

	fdCutting('twilightforest:lich_trophy', 'forge:tools/knives', [
		['minecraft:skeleton_skull', 1],
		['twilightforest:zombie_scepter', 0.2],
		['twilightforest:lifedrain_scepter', 0.2],
		['twilightforest:twilight_scepter', 0.2]
	], 'lich_trophy')

	fdCutting('twilightforest:minoshroom_trophy', 'forge:tools/knives', [
		['twilightforest:raw_meef', 9],
		['minecraft:red_mushroom', 8, 0.5]
	], 'minoshroom_trophy')

	fdCutting('twilightforest:snow_queen_trophy', 'forge:tools/knives', [
		['twilightforest:ice_bomb', 9],
		['twilightforest:ice_sword', 0.2],
		['twilightforest:glass_sword', 0.1],
		['twilightforest:ice_bow', 0.2]
	], 'snow_queen_trophy')

	fdCutting('twilightforest:ur_ghast_trophy', 'forge:tools/knives', [
		['kubejs:experiment_113', 9],
		['twilightforest:experiment_115', 4],
		['kubejs:experiment_110', 0.1]
	], 'ur_ghast_trophy')

	fdCutting('twilightforest:phantom_chestplate', 'forge:tools/pickaxes', [
		['twilightforest:armor_shard_cluster', 5]
	], 'phantom_chestplate')
	fdCutting('twilightforest:phantom_helmet', 'forge:tools/pickaxes', [
		['twilightforest:armor_shard_cluster', 3]
	], 'phantom_helmet')
	fdCutting('twilightforest:cooked_meef', 'forge:tools/knives', [
		['kubejs:cooked_meef_slice', 2]
	], 'cooked_meef_slice')
	fdCutting('twilightforest:cooked_venison', 'forge:tools/knives', [
		['kubejs:cooked_venison_rib', 2]
	], 'cooked_venison_rib')
	fdCutting('twilightforest:hydra_chop', 'forge:tools/knives', [
		['kubejs:hydra_piece', 2]
	], 'hydra_piece')
	fdCutting('twilightforest:hydra_trophy', 'forge:tools/knives', [
		['twilightforest:hydra_chop', 4]
	], 'hydra_trophy')
	fdCutting('twilightforest:knight_phantom_trophy', 'forge:tools/knives', [
		['twilightforest:phantom_helmet', 1]
	], 'knight_phantom_trophy')
	fdCutting('twilightforest:naga_trophy', 'forge:tools/knives', [
		['twilightforest:naga_scale', 9]
	], 'naga_trophy')
	fdCutting('twilightforest:quest_ram_trophy', 'forge:tools/knives', [
		['minecraft:mutton', 9]
	], 'quest_ram_trophy')
	fdCutting('twilightforest:firefly', 'forge:tools/knives', [
		['kubejs:raw_insect', 2]
	], 'raw_insect_from_firefly')
	fdCutting('twilightforest:cicada', 'forge:tools/knives', [
		['kubejs:raw_insect', 2]
	], 'raw_insect_from_cicada')
	fdCutting('twilightforest:moonworm', 'forge:tools/knives', [
		['kubejs:raw_insect', 2]
	], 'raw_insect_from_moonworm')
	fdCutting('twilightforest:raw_meef', 'forge:tools/knives', [
		['kubejs:raw_meef_slice', 2]
	], 'raw_meef_slice')
	fdCutting('twilightforest:raw_venison', 'forge:tools/knives', [
		['kubejs:raw_venison_rib', 2]
	], 'raw_venison_rib')

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
	cooking('minecraft:bowl', 800, 0.5, [
		'#kubejs:hydra_meat',
		'twilightforest:fiery_blood',
		'twilightforest:naga_scale',
		'farmersdelight:tomato_sauce',
		'twilightforest:torchberries'
	], 1, 'kubejs:fiery_snakes', 'fiery_snakes')
	cooking('minecraft:bowl', 200, 0.35, [
		'kubejs:raw_insect',
		'farmersdelight:onion',
		'minecraft:carrot'
	], 1, 'kubejs:fried_insect', 'fried_insect')
	cooking('minecraft:bowl', 200, 0.35, [
		'kubejs:glowstew',
		'#kubejs:vension_raw',
		'farmersdelight:raw_pasta',
		'twilightforest:liveroot',
		'minecraft:beetroot'
	], 1, 'kubejs:glow_venison_rib_with_pasta', 'glow_venison_rib_with_pasta')
	cooking('minecraft:bowl', 200, 0.35, [
		'minecraft:glowstone_dust',
		'twilightforest:mushgloom',
		'twilightforest:torchberries'
	], 1, 'kubejs:glowstew', 'glowstew')
	cooking('minecraft:bowl', 800, 0.35, [
		'farmersdelight:tomato',
		'minecraft:beetroot',
		'twilightforest:fiery_tears',
		'twilightforest:experiment_115',
		'twilightforest:experiment_115'
	], 1, 'kubejs:grilled_ghast', 'grilled_ghast')
	cooking('minecraft:bowl', 400, 0.35, [
		'twilightforest:huge_lily_pad',
		'minecraft:chicken',
		'twilightforest:huge_water_lily',
		'farmersdelight:onion',
		'#forge:eggs',
		'minecraft:bread'
	], 4, 'kubejs:lily_chicken', 'lily_chicken')
	cooking('minecraft:bowl', 200, 0.35, [
		'minecraft:mushroom_stew',
		'kubejs:raw_meef_slice',
		'twilightforest:liveroot',
		'twilightforest:torchberries',
		'farmersdelight:onion'
	], 1, 'twilightforest:meef_stroganoff', 'meef_stroganoff')
	cooking('minecraft:bowl', 200, 0.35, [
		'kubejs:mushgloom_sauce',
		'#kubejs:meef_raw',
		'farmersdelight:raw_pasta'
	], 1, 'kubejs:mushgloom_meef_pasta', 'mushgloom_meef_pasta')
	cooking('minecraft:bowl', 200, 0.35, [
		'minecraft:brown_mushroom',
		'twilightforest:mushgloom',
		'farmersdelight:onion'
	], 1, 'kubejs:mushgloom_sauce', 'mushgloom_sauce')
	cooking('minecraft:bowl', 200, 0.35, [
		'twilightforest:liveroot',
		'twilightforest:steeleaf_ingot',
		'minecraft:sugar'
	], 1, 'kubejs:phytochemical_juice', 'phytochemical_juice')
	cooking('minecraft:bowl', 800, 0.35, [
		'twilightforest:fiery_tears',
		'minecraft:ghast_tear'
	], 1, 'kubejs:tear_drink', 'tear_drink')
	cooking('minecraft:bowl', 200, 0.35, [
		'twilightforest:thorn_rose',
		'minecraft:sugar'
	], 1, 'kubejs:thorn_rose_tea', 'thorn_rose_tea')
	cooking('minecraft:bowl', 400, 0.35, [
		'twilightforest:root_strand',
		'twilightforest:fallen_leaves',
		'twilightforest:liveroot',
		'twilightforest:torchberry_plant',
		'minecraft:vine',
		'twilightforest:fiddlehead'
	], 1, 'kubejs:thousand_plant_stew', 'thousand_plant_stew')
	cooking('minecraft:bowl', 200, 0.35, [
		'twilightforest:torchberries',
		'minecraft:sugar'
	], 1, 'kubejs:torchberry_juice', 'torchberry_juice')
	cooking('minecraft:bowl', 200, 0.35, [
		'twilightforest:ice_bomb',
		'minecraft:ice',
		'twilightforest:arctic_fur',
		'minecraft:sugar'
	], 1, 'kubejs:glacier_ice_tea', 'glacier_ice_tea')
	cooking('minecraft:bowl', 200, 0.35, [
		'minecraft:ice',
		'twilightforest:raw_ironwood'
	], 1, 'kubejs:twilight_spring', 'twilight_spring')

	function ccss(item, result, xp, id) {
		event.campfireCooking(result, item).xp(xp).id("atlanabyss:campfire_" + id)
		event.smelting(result, item).xp(xp).id("atlanabyss:smelting_" + id)
		event.smoking(result, item).xp(xp).id("atlanabyss:smoking_" + id)
	}
	ccss('kubejs:raw_insect', 'kubejs:cooked_insect', 1, 'raw_insect')
	ccss('kubejs:raw_meef_slice', 'kubejs:cooked_meef_slice', 1, 'raw_meef_slice')
	ccss('kubejs:raw_venison_rib', 'kubejs:cooked_venison_rib', 1, 'raw_venison_rib')
	//火炬浆果曲奇
	event.shaped('8x kubejs:torchberry_cookie', [
		'BAB'
	], {
		A: 'twilightforest:torchberries',
		B: 'minecraft:wheat'
	}).id("atlanabyss:torchberry_cookie")
	//巧克力夹心薄饼
	event.shaped('kubejs:chocolate_wafer', [
		'A',
		'B',
		'A'
	], {
		A: 'twilightforest:maze_wafer',
		B: 'minecraft:cocoa_beans'
	}).id("atlanabyss:chocolate_wafer")
	//米诺陶卷
	event.shapeless('kubejs:meef_wrap', [
		'#forge:bread', '#kubejs:meef_cooked', '#forge:salad_ingredients', '#forge:crops/onion'
	]).id("atlanabyss:meef_wrap")
	//蘸荧光煲的113
	event.shapeless('kubejs:glow_113', [
		'kubejs:experiment_113', 'kubejs:glowstew'
	]).id("atlanabyss:glow_113")
	//蘸蜂蜜的113
	event.shapeless('kubejs:honey_113', [
		'kubejs:experiment_113', 'minecraft:honey_bottle'
	]).id("atlanabyss:honey_113")
	filling('kubejs:honey_113', [
		'kubejs:experiment_113', Fluid.of('create:honey', 250)
	]).id("atlanabyss:filling_honey_113")
	//蘸巧克力的113
	event.shapeless('kubejs:chocolate_113', [
		'kubejs:experiment_113', '#forge:milk', 'minecraft:sugar', 'minecraft:cocoa_beans'
	]).id("atlanabyss:chocolate_113")
	filling('kubejs:chocolate_113',
		['kubejs:experiment_113', Fluid.of('create:chocolate', 250)
		]).id("atlanabyss:filling_chocolate_113")
	//蘸巧克力的113
	event.shapeless('kubejs:milky_113', [
		'kubejs:experiment_113', '#forge:milk', 'minecraft:sugar'
	]).id("atlanabyss:milky_113")
	filling('kubejs:milky_113',
		['kubejs:experiment_113', Fluid.of('minecraft:milk', 250)
		]).id("atlanabyss:filling_milky_113")
	//九头蛇汉堡
	event.shapeless('kubejs:hydra_burger', [
		'#forge:bread', '#kubejs:hydra_meat', '#forge:salad_ingredients', '#forge:crops/tomato', '#forge:crops/onion'
	]).id("atlanabyss:hydra_burger")
	//恶魂汉堡
	event.shapeless('kubejs:ghast_burger', [
		'#forge:bread', 'twilightforest:experiment_115', '#forge:vegetables/beetroot', '#forge:crops/tomato', '#forge:crops/onion'
	]).id("atlanabyss:ghast_burger")
	//浆果串
	event.shapeless('kubejs:berry_stick', [
		'minecraft:sweet_berries', 'minecraft:glow_berries', 'twilightforest:torchberries', 'minecraft:stick'
	]).id("atlanabyss:berry_stick")
	//恶魂脑沙拉
	event.shapeless('kubejs:ghast_brain_salad', [
		'minecraft:bowl', '#forge:salad_ingredients', '#forge:crops/onion', '#forge:crops/tomato', 'kubejs:experiment_110', 'twilightforest:borer_essence', 'twilightforest:transformation_powder'
	]).id("atlanabyss:ghast_brain_salad")
	//蛀虫精华甜菜汤
	event.shapeless('kubejs:borer_tear_soup', [
		'minecraft:bowl', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'twilightforest:borer_essence'
	]).id("atlanabyss:borer_tear_soup")
	//冰川冰淇淋
	event.shapeless('kubejs:glacier_ice_cream', [
		'minecraft:bowl', 'twilightforest:ice_bomb', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("atlanabyss:glacier_ice_cream")
	//植物素冰淇淋
	event.shapeless('kubejs:phytochemical_ice_cream', [
		'minecraft:bowl', 'twilightforest:steeleaf_ingot', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("atlanabyss:phytochemical_ice_cream")
	//火炬浆果冰淇淋
	event.shapeless('kubejs:torchberry_ice_cream', [
		'minecraft:bowl', 'twilightforest:torchberries', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("atlanabyss:torchberry_ice_cream")
	//极光冰淇淋
	event.shapeless('kubejs:aurora_ice_cream', [
		'minecraft:bowl', 'twilightforest:aurora_block', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("atlanabyss:aurora_ice_cream")
	//暮色冰淇淋
	event.shapeless('3x kubejs:twilight_ice_cream', [
		'kubejs:torchberry_ice_cream', 'neapolitan:chocolate_ice_cream', 'neapolitan:strawberry_ice_cream'
	]).id("atlanabyss:twilight_ice_cream")
	//彩虹冰淇淋
	event.shapeless('3x kubejs:rainbow_ice_cream', [
		'kubejs:aurora_ice_cream', 'neapolitan:banana_ice_cream', 'neapolitan:adzuki_ice_cream'
	]).id("atlanabyss:rainbow_ice_cream")
	//清爽冰淇淋
	event.shapeless('3x kubejs:refreshing_ice_cream', [
		'kubejs:glacier_ice_cream', 'neapolitan:mint_ice_cream', 'kubejs:phytochemical_ice_cream'
	]).id("atlanabyss:refreshing_ice_cream")

	remove('botania:elven_trade/pixie_dust')
	elven_trade(['botania:pixie_dust'], 'botania:mana_powder').id("atlanabyss:elven_trade_pixie_dust")
	elven_trade(['twilightforest:ice_bomb'], 'minecraft:blue_ice').id("atlanabyss:elven_trade_ice_bomb")
	elven_trade(['twilightforest:ice_bow'], 'minecraft:bow').id("atlanabyss:elven_trade_ice_bow")
	elven_trade(['twilightforest:ice_sword'], 'minecraft:diamond_sword').id("atlanabyss:elven_trade_ice_sword")

	mana_infusion(
		'2x touhou_little_maid:power_point',
		'minecraft:experience_bottle', 240,
		'botania:alchemy_catalyst'
	).id("atlanabyss:touhou_power_point")

	brew('kubejs:alicepowah', [
		'minecraft:nether_wart',
		'createaddition:capacitor',
		'umapyoi:hachimi_mid'
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
	//末影箱子
	remove('enderstorage:ender_chest')
	remove('enderstorage:recolour_ender_chest')
	event.stonecutting('2x enderstorage:ender_chest',
		'thermal:enderium_block'
	).id('atlanabyss:stonecutting_ender_chest');
	//末影蓄水箱
	remove('enderstorage:ender_tank')
	remove('enderstorage:recolour_ender_tank')
	event.stonecutting('2x enderstorage:ender_tank',
		'thermal:enderium_block'
	).id('atlanabyss:ender_tank');
	//收纳袋
	event.shaped('minecraft:bundle', [
		'ABA',
		'B B',
		'BBB'
	], {
		A: 'minecraft:string',
		B: 'minecraft:rabbit_hide'
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

	//粉碎绯红岩
	milling([
		Item.of('create:crushed_raw_iron').withChance(0.40)
	], '#create:stone_types/crimsite').id("atlanabyss:milling_crimsite")
	//粉碎皓蓝石
	milling([
		Item.of('create:crushed_raw_zinc').withChance(0.30)
	], '#create:stone_types/asurine').id("atlanabyss:milling_asurine")
	//粉碎辉绿岩
	milling([
		Item.of('create:crushed_raw_copper').withChance(0.80)
	], '#create:stone_types/veridium').id("atlanabyss:milling_veridium")
	//粉碎赭金砂
	milling([
		Item.of('create:crushed_raw_gold').withChance(0.20)
	], '#create:stone_types/ochrum').id("atlanabyss:milling_ochrum")

	//压板
	pressing(
		'thermal:steel_plate',
		'thermal:steel_ingot'
	).id('atlanabyss:pressing_steel_sheet')//钢板
	pressing(
		'kubejs:meteosteel_sheet',
		'kubejs:meteosteel_ingot'
	).id('atlanabyss:pressing_meteosteel_sheet')//陨钢板
	pressing(
		'thermal:tin_plate',
		'thermal:tin_ingot'
	).id('atlanabyss:pressing_tin_sheet')//锡板
	pressing(
		'thermal:lead_plate',
		'thermal:lead_ingot'
	).id('atlanabyss:pressing_lead_sheet')//铅板
	pressing(
		'thermal:silver_plate',
		'thermal:silver_ingot'
	).id('atlanabyss:pressing_silver_sheet')//银板
	pressing(
		'thermal:nickel_plate',
		'thermal:nickel_ingot'
	).id('atlanabyss:pressing_nickel_sheet')//镍板
	pressing(
		'thermal:electrum_plate',
		'thermal:electrum_ingot'
	).id('atlanabyss:pressing_electrum_sheet')//琥珀金板
	pressing(
		'thermal:invar_plate',
		'thermal:invar_ingot'
	).id('atlanabyss:pressing_invar_sheet')//殷钢板
	pressing(
		'thermal:constantan_plate',
		'thermal:constantan_ingot'
	).id('atlanabyss:pressing_constantan_sheet')//康铜板
	pressing(
		'thermal:signalum_plate',
		'thermal:signalum_ingot'
	).id('atlanabyss:pressing_signalum_shee')//信素板
	pressing(
		'thermal:lumium_plate',
		'thermal:lumium_ingot'
	).id('atlanabyss:pressing_lumium_sheet')//流明板
	pressing(
		'thermal:enderium_plate',
		'thermal:enderium_ingot'
	).id('atlanabyss:pressing_enderium_sheet')//末影板
	pressing(
		'kubejs:aluminum_sheet',
		'kubejs:aluminum_ingot'
	).id('atlanabyss:pressing_aluminum_sheet')//铝板
	pressing(
		'kubejs:rose_quartz_sheet',
		'create:polished_rose_quartz'
	).id('atlanabyss:pressing_rose_quartz_sheet')//玫瑰石英板
	pressing(
		'kubejs:charged_constantan_sheet',
		'kubejs:charged_constantan_ingot'
	).id('atlanabyss:pressing_charged_constantan_sheet')//充能康铜板
	pressing(
		'kubejs:bismuth_sheet',
		'kubejs:bismuth_ingot'
	).id('atlanabyss:pressing_bismuth_sheet')//铋板
	pressing(
		'kubejs:osmium_sheet',
		'kubejs:osmium_ingot'
	).id('atlanabyss:pressing_osmium_sheet')//锇板
	pressing(
		'beyond_earth:desh_plate',
		'beyond_earth:desh_ingot'
	).id('atlanabyss:pressing_desh_sheet')//戴斯板

	//缠魂
	function createHaunting(input, output, id) {
		event.custom({
			type: 'create:haunting',
			ingredients: [Ingredient.of(input).toJson()],
			results: [Item.of(output).toResultJson()]
		}).id('atlanabyss:' + id);
	}
	createHaunting('minecraft:prismarine_shard', 'ars_nouveau:wilden_spike', 'wilden_spike')//新生魔艺掉落物
	createHaunting('minecraft:bone', 'ars_nouveau:wilden_horn', 'wilden_horn')
	createHaunting('minecraft:rotten_flesh', 'ars_nouveau:wilden_wing', 'wilden_wing')
	createHaunting('#atlanabyss:vanilla_saplings', 'ars_nouveau:green_archwood_sapling', 'green_archwood_sapling')//新生魔艺绿树
	createHaunting('tconstruct:rose_gold_ingot', 'create:polished_rose_quartz', 'rose_gold_quartz')//玫瑰石英
	createHaunting('minecraft:bone_meal', 'botania:fertilizer', 'fertilizer')//花肥
	createHaunting('thermal:blitz_powder', 'thermal:lightning_charge', 'lightning_charge')//鸣雷弹
	createHaunting('thermal:blizz_powder', 'thermal:ice_charge', 'ice_charge')//瀑冰弹
	createHaunting('thermal:basalz_powder', 'thermal:earth_charge', 'earth_charge')//裂岩弹
	createHaunting('minecraft:blaze_powder', 'minecraft:fire_charge', 'fire_charge')//火焰弹

	//管道升级
	deploying('pipez:basic_upgrade', [
		'pneumaticcraft:printed_circuit_board',
		'thermal:nickel_nugget'
	]).id('atlanabyss:deploying_basic_upgrade')//基础管道升级
	deploying('pipez:improved_upgrade', [
		'pipez:basic_upgrade',
		'thermal:steel_nugget'
	]).id('atlanabyss:deploying_improved_upgrade')//进阶管道升级
	deploying('pipez:advanced_upgrade', [
		'pipez:improved_upgrade',
		'thermal:electrum_nugget'
	]).id('atlanabyss:deploying_advanced_upgrade')//高级管道升级
	deploying('pipez:ultimate_upgrade', [
		'pipez:advanced_upgrade',
		'thermal:signalum_nugget'
	]).id('atlanabyss:deploying_ultimate_upgrade')//终极管道升级

	//过滤器目标工具
	event.shaped('pipez:filter_destination_tool', [
		'R',
		'S'
	], {
		R: 'minecraft:redstone_torch',
		S: 'create:sturdy_sheet'
	}).id("atlanabyss:filter_destination_tool")
	//额外海晶碎片配方
	remove('thermal:earth_charge/prismarine_shard_from_prismarine_bricks')
	remove('thermal:earth_charge/prismarine_shard_from_prismarine')
	crushing([
		'9x minecraft:prismarine_shard'
	], 'minecraft:prismarine_bricks').id("atlanabyss:crushing_prismarine_bricks")
	crushing([
		'4x minecraft:prismarine_shard'
	], 'minecraft:prismarine').id("atlanabyss:crushing_prismarine")
	milling([
		'9x minecraft:prismarine_shard'
	], 'minecraft:prismarine_bricks').id("atlanabyss:milling_prismarine_bricks")
	milling([
		'4x minecraft:prismarine_shard'
	], 'minecraft:prismarine').id("atlanabyss:milling_prismarine")

	//压力部件
	let pm = ('kubejs:incomplete_pressure_mechanism')
	sequenced_assembly([
		Item.of('kubejs:pressure_mechanism').withChance(0.9),
		Item.of('create:powdered_obsidian').withChance(0.07),
		Item.of('create:shaft').withChance(0.03)
	],
		'thermal:steel_plate', [
		deploying(pm, [pm, 'pneumaticcraft:compressed_stone']),
		deploying(pm, [pm, 'create:shaft']),
		deploying(pm, [pm, 'create:powdered_obsidian'])
	]).transitionalItem(pm).loops(5).id("atlanabyss:pressure_mechanism")
	//电力部件
	let tm = ('kubejs:incomplete_thermal_mechanism')
	sequenced_assembly([
		'kubejs:thermal_mechanism'
	],
		'kubejs:aluminum_sheet', [
		deploying(tm, [tm, 'pneumaticcraft:plastic']),
		deploying(tm, [tm, 'kubejs:sulfur_electron_tube']),
		filling(tm, [tm, Fluid.of('minecraft:water', 500)])
	]).transitionalItem(tm).loops(5).id("atlanabyss:thermal_mechanism")
	//算力构件
	let cm = ('kubejs:incomplete_computer_mechanism')
	sequenced_assembly([
		'kubejs:computer_mechanism'
	],
		'kubejs:meteosteel_sheet', [
		deploying(cm, [cm, 'pneumaticcraft:printed_circuit_board']),
		deploying(cm, [cm, 'kubejs:charged_electron_tube']),
		filling(tm, [tm, Fluid.of('pneumaticcraft:lubricant', 100)])
	]).transitionalItem(cm).loops(5).id("atlanabyss:computer_mechanism")
	//引力构件
	let gm = ('kubejs:incomplete_gravitation_mechanism')
	sequenced_assembly([
		'kubejs:gravitation_mechanism'
	],
		'kubejs:magbismuth_sheet', [
		deploying(gm, [gm, 'ae2:cell_component_4k']),
		deploying(gm, [gm, 'kubejs:candy_electron_tube']),
		filling(gm, [gm, Fluid.of('tconstruct:ender_slime', 50)]),
		deploying(gm, [gm, 'minecraft:honeycomb_block']).keepHeldItem(true)
	]).transitionalItem(gm).loops(5).id("atlanabyss:gravitation_mechanism")

	//陨钢锭
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			Item.of('minecraft:iron_ingot', 3).toResultJson(),
			Item.of('thermal:coal_coke', 2).toResultJson(),
			Item.of('ae2:sky_dust', 5).toResultJson()
		],
		result: [
			Item.of('kubejs:meteosteel_ingot', 2).toResultJson()
		],
		energy: 20000
	}).id("atlanabyss:smelter_meteosteel_ingot")
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			Item.of('thermal:steel_ingot', 3).toResultJson(),
			Item.of('ae2:sky_dust', 5).toResultJson()
		],
		result: [
			Item.of('kubejs:meteosteel_ingot', 2).toResultJson()
		],
		energy: 20000
	}).id("atlanabyss:smelter_meteosteel_ingot_by_steel")
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

	//神铋锭
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{
				value: [
					{ item: 'kubejs:bismuth_ingot' }
				],
				count: 3
			},
			{
				value: [
					{ item: 'kubejs:aluminum_ingot' },
					{ item: 'kubejs:aluminum_dust' }
				],
				count: 1
			},
			{
				value: [
					{ item: 'botania:pixie_dust' }
				],
				count: 5
			}
		],
		result: [
			Item.of('kubejs:magbismuth_ingot', 1).toResultJson()
		],
		energy: 24000
	}).id("atlanabyss:smelter_magbismuth_ingot")
	//神铋板
	pressing(
		'kubejs:magbismuth_sheet',
		'kubejs:magbismuth_ingot'
	).id("atlanabyss:pressing_magbismuth_sheet")



	//压缩煤块
	let o = ('minecraft:obsidian')
	sequenced_assembly([
		'kubejs:compressed_coal_block'
	],
		'minecraft:obsidian',
		[
			deploying(o, [o, 'minecraft:coal']),
			pressing(o, o).processingTime(100)
		]).transitionalItem(o).loops(80).id("atlanabyss:compressed_coal_block")

	//恩赐之石
	crushing([
		Item.of(('create:crushed_raw_copper'), 1).withChance(.20),
		Item.of(('create:crushed_raw_iron'), 1).withChance(.15),
		Item.of(('create:crushed_raw_zinc'), 1).withChance(.12),
		Item.of(('create:crushed_raw_gold'), 1).withChance(.09),
		Item.of(('create:crushed_raw_tin'), 1).withChance(.07),
		Item.of(('create:crushed_raw_nickel'), 1).withChance(.05),
		Item.of(('create:crushed_raw_silver'), 1).withChance(.03),
		Item.of(('minecraft:coal'), 1).withChance(.50),
		Item.of(('create:experience_nugget'), 1).withChance(.75),
	], 'kubejs:divine_ore').processingTime(50).id("atlanabyss:divine_ore")

	//噩梦缠怨锭！
	mixing(
		'kubejs:eviltwisting_ingot',
		[
			'minecraft:nether_brick',
			'minecraft:twisting_vines',
			'minecraft:weeping_vines',
			Fluid.of('minecraft:lava', 500)
		]
	).heated().id("atlanabyss:eviltwisting_ingot")

	//下界合金碎片再生
	crushing([
		'create:cinder_flour',
		Item.of(('minecraft:netherite_scrap'), 1).withChance(.50)
	], 'kubejs:eviltwisting_ingot').processingTime(50).id("atlanabyss:eviltwisting_crushing")

	//氧化铝溶液
	mixing([
		'minecraft:quartz',
		Fluid.of('kubejs:alumina_solution', 50)
	], [
		'create:crushed_raw_aluminum',
		Fluid.of('minecraft:water', 25)
	]
	).heated().id("atlanabyss:alumina_solution")

	//碎铝块
	mixing([
		'2x kubejs:aluminium_chip',
		Fluid.of('minecraft:water', 25)
	], [
		'minecraft:coal',
		Fluid.of('kubejs:alumina_solution', 50)
	]
	).heated().id("atlanabyss:coal_aluminium_chip")

	mixing(
		'8x kubejs:aluminium_chip',
		[
			'thermal:tar',
			Fluid.of('kubejs:alumina_solution', 100)
		]
	).heated().id("atlanabyss:tar_coal_aluminium_chip")

	//铝化合物
	event.shapeless('kubejs:aluminum_compound', [
		'kubejs:aluminium_chip',
		'thermal:quartz_dust'
	]).id("atlanabyss:aluminium_compound")

	//铝
	event.smelting('kubejs:aluminum_ingot', 'kubejs:aluminum_compound').id("atlanabyss:aluminum_ingot_from_smelting")
	event.blasting('kubejs:aluminum_ingot', 'kubejs:aluminum_compound').id("atlanabyss:aluminum_ingot_from_blasting")

	//粗沙
	emptying([
		'kubejs:rough_sand',
		Fluid.of('kubejs:fine_sand', 100)
	], 'minecraft:sand').id("atlanabyss:rough_sand")
	//沙球
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [
			{
				type: 'pneumaticcraft:stacked_item',
				item: 'kubejs:rough_sand',
				count: 8
			}
		],
		results: [Item.of('kubejs:sand_ball')],
		pressure: 2.0
	}).id("atlanabyss:sand_ball");
	//含硅化合物
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{
				value: [
					Ingredient.of('kubejs:sand_ball').toJson()
				],
				count: 1
			},
			{
				value: [
					Ingredient.of('thermal:ice_charge').toJson()
				],
				count: 1
			}
		],
		result: [
			Item.of('kubejs:silicon_compound').toResultJson()
		],
		energy: 4800
	}).id("atlanabyss:silicon_compound")
	//硅
	remove('ae2:smelting/silicon_from_certus_quartz_dust')
	remove('ae2:blasting/silicon_from_certus_quartz_dust')
	teslaCharging('kubejs:silicon_compound', 'ae2:silicon', 32000, 'silicon')

	//铝合金锭
	mixing('3x kubejs:aluminium_alloy_ingot', [
		'ae2:silicon',
		'2x kubejs:aluminum_ingot'
	]).superheated().id("atlanabyss:aluminium_alloy_ingot")

	//铋锭
	mixing('kubejs:bismuth_ingot', [
		'kubejs:raw_bismuth',
		'minecraft:chorus_fruit'
	]).heated().id("atlanabyss:mixing_bismuth_ingot")
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			Ingredient.of('kubejs:raw_bismuth').toJson(),
			Ingredient.of('minecraft:chorus_fruit').toJson()
		],
		result: [
			Item.of('kubejs:bismuth_ingot', 1).toResultJson()
		],
		energy: 4800
	}).id("atlanabyss:smelter_bismuth_ingot")
	event.shapeless('9x kubejs:bismuth_ingot', ['kubejs:bismuth_block']).id("atlanabyss:bismuth_ingot_from_block")
	//铋块
	event.shaped('kubejs:bismuth_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:bismuth_ingot'
	}).id("atlanabyss:bismuth_block")

	//水晶矩阵锭
	mixing(
		'kubejs:crystal_matrix_ingot',
		[
			'minecraft:nether_star',
			Fluid.of('thermal:ender', 500)
		]
	).id("atlanabyss:crystal_matrix_ingot")
	//无尽之锭
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [
			{
				type: 'pneumaticcraft:stacked_item',
				item: 'kubejs:aluminium_alloy_ingot',
				count: 2
			},
			{
				type: 'pneumaticcraft:stacked_item',
				item: 'kubejs:crystal_matrix_ingot',
				count: 3
			}
		],
		results: [Item.of('kubejs:infinity_ingot')],
		pressure: 5.0
	}).id("atlanabyss:infinity_ingot");

	//铂锭
	event.shaped('kubejs:platinum_ingot', [
		'BA',
		'AB'
	], {
		A: 'minecraft:calcite',
		B: 'thermal:silver_nugget'
	}).id("atlanabyss:platinum_ingot")
	mixing('kubejs:platinum_ingot', [
		'minecraft:calcite',
		'thermal:silver_nugget'
	]).id("atlanabyss:mixing_platinum_ingot")
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{ value: [Ingredient.of('thermal:silver_nugget').toJson()], count: 1 },
			{ value: [Ingredient.of('minecraft:calcite').toJson()], count: 1 }
		],
		result: [Item.of('kubejs:platinum_ingot').toResultJson()],
		energy: 6400
	}).id("atlanabyss:smelter_platinum_ingot")
	//铂粒
	event.shaped('kubejs:platinum_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:platinum_nugget'
	}).id("atlanabyss:platinum_ingot_from_nugget")
	event.shapeless('9x kubejs:platinum_nugget', [
		'kubejs:platinum_ingot'
	]).id("atlanabyss:platinum_nugget_from_ingot")
	//铂块
	event.shaped('kubejs:platinum_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:platinum_ingot'
	}).id("atlanabyss:platinum_block_from_ingot")
	event.shapeless('9x kubejs:platinum_ingot', [
		'kubejs:platinum_block'
	]).id("atlanabyss:platinum_ingot_from_block")
	//钨锭
	event.shaped('kubejs:tungsten_ingot', [
		'BA',
		'AB'
	], {
		A: 'minecraft:blackstone',
		B: 'thermal:netherite_nugget'
	}).id("atlanabyss:tungsten_ingot")
	mixing('kubejs:tungsten_ingot', [
		'minecraft:blackstone',
		'thermal:netherite_nugget'
	]).id("atlanabyss:mixing_tungsten_ingot")
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{ value: [Ingredient.of('thermal:netherite_nugget').toJson()], count: 1 },
			{ value: [Ingredient.of('minecraft:blackstone').toJson()], count: 1 }
		],
		result: [Item.of('kubejs:tungsten_ingot').toResultJson()],
		energy: 6400
	}).id("atlanabyss:smelter_tungsten_ingot")
	//钨粒
	event.shaped('kubejs:tungsten_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tungsten_nugget'
	}).id("atlanabyss:tungsten_ingot_from_nugget")
	event.shapeless('9x kubejs:tungsten_nugget', [
		'kubejs:tungsten_ingot'
	]).id("atlanabyss:tungsten_nugget_from_ingot")
	//钨块
	event.shaped('kubejs:tungsten_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tungsten_ingot'
	}).id("atlanabyss:tungsten_block_from_ingot")
	event.shapeless('9x kubejs:tungsten_ingot', [
		'kubejs:tungsten_block'
	]).id("atlanabyss:tungsten_ingot_from_block")

	//锇锭！
	let oc = ('kubejs:osmium_compound')
	sequenced_assembly([
		'4x kubejs:osmium_ingot'
	],
		'kubejs:osmium_scrap',
		[
			filling(oc, [oc, Fluid.of('tconstruct:molten_platinum', 125)]),
			pressing(oc, oc).processingTime(100),
			pressing(oc, oc).processingTime(100),
			pressing(oc, oc).processingTime(100),
			filling(oc, [oc, Fluid.of('minecraft:water', 250)]),
			cutting(oc, oc).processingTime(100)
		]).transitionalItem(oc).loops(8).id("atlanabyss:osmium_ingot")

	//蓝晶
	remove('biggerreactors:crafting/uranium_to_cyanite')
	remove('thermal:machine/biggerreactors/pulverizer_mod_cyanite_ingot')
	remove('biggerreactors:crafting/cyanite_block')
	remove('biggerreactors:smelting/cyanite_ingot')
	remove('biggerreactors:crafting/cyanite_ingot')
	//钚
	remove('thermal:machine/biggerreactors/pulverizer_mod_blutonium_ingot')
	remove('biggerreactors:crafting/blutonium_block')
	remove('biggerreactors:smelting/blutonium_ingot')
	remove('biggerreactors:crafting/blutonium_ingot')
	//铀
	remove('biggerreactors:smelting/uranium_ore')
	remove('thermal:machine/biggerreactors/pulverizer_mod_uranium_ore')
	//铀粉
	remove('thermal:machine/biggerreactors/pulverizer_mod_uranium_ingot')
	remove('biggerreactors:smelting/uranium_ingot')
	event.custom({
		type: 'thermal:pulverizer',
		ingredient: {
			item: 'kubejs:uranium_ingot'
		},
		result: [
			{
				item: 'biggerreactors:uranium_dust',
				count: 1
			}
		],
		energy_mod: 0.5
	}).id("atlanabyss:pulverizer_uranium_dust");
	event.custom({
		type: 'thermal:pulverizer',
		ingredient: {
			tag: 'forge:raw_materials/uranium'
		},
		result: [
			{
				item: 'biggerreactors:uranium_dust',
				chance: 1.5
			}
		],
		experience: 0.1
	}).id("atlanabyss:pulverizer_raw_uranium")
	event.custom({
		type: 'thermal:pulverizer',
		ingredient: {
			tag: 'forge:ores/uranium'
		},
		result: [
			{
				item: 'biggerreactors:uranium_dust',
				chance: 3.5
			},
			{
				item: 'minecraft:gravel',
				chance: 0.2
			}
		],
		experience: 0.5
	}).id("atlanabyss:pulverizer_uranium_ore")
	//铀块
	remove('biggerreactors:crafting/uranium_block')
	remove('biggerreactors:crafting/uranium_ingot')
	event.shaped('biggerreactors:uranium_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:uranium_ingot'
	}).id("atlanabyss:uranium_block_from_ingot")
	event.shapeless('9x kubejs:uranium_ingot', [
		'biggerreactors:uranium_block'
	]).id("atlanabyss:uranium_ingot_from_block")
	//熔融铀
	mixing(Fluid.of('tconstruct:molten_uranium', 125), [
		'create:crushed_raw_uranium',
		'thermal:sulfur_dust'
	]).superheated().id("atlanabyss:molten_uranium")
	//铀核心
	let uc = ('kubejs:incomplete_core_container')
	sequenced_assembly([
		'kubejs:uranium_core'
	],
		'thermal:lead_plate',
		[
			deploying(uc, [uc, 'thermal:cured_rubber']),
			deploying(uc, [uc, 'kubejs:tungsten_ingot']),
			filling(uc, [uc, Fluid.of('tconstruct:molten_uranium', 125)])
		]).transitionalItem(uc).loops(1).id("atlanabyss:uranium_core")
	//铀燃料棒
	mechanical_crafting('biggerreactors:uranium_ingot', [
		'AA',
		'AA',
		'AA',
		'AA'
	], {
		A: 'kubejs:uranium_core'
	}).id("atlanabyss:uranium_fuel_rod")
	//贫铀
	mixing('4x kubejs:depleted_uranium', [
		'biggerreactors:cyanite_ingot',
		'thermal:sulfur_dust',
		'thermal:niter_dust',
		'create:crushed_raw_uranium'
	]).id("atlanabyss:depleted_uranium")
	//熔融钚
	mixing(Fluid.of('kubejs:molten_plutonium', 5), [
		'biggerreactors:cyanite_ingot',
		'4x kubejs:depleted_uranium'
	]).superheated().id("atlanabyss:molten_plutonium")
	//钚核心
	let pc = ('kubejs:incomplete_core_container')
	sequenced_assembly([
		'kubejs:plutonium_core'
	],
		'thermal:lead_plate',
		[
			deploying(pc, [pc, 'pneumaticcraft:heat_sink']),
			deploying(pc, [pc, 'kubejs:tungsten_ingot']),
			filling(pc, [pc, Fluid.of('kubejs:molten_plutonium', 80)])
		]).transitionalItem(pc).loops(1).id("atlanabyss:plutonium_core")
	//钚燃料棒
	mechanical_crafting('biggerreactors:blutonium_ingot', [
		'AA',
		'AA',
		'AA',
		'AA'
	], {
		A: 'kubejs:plutonium_core'
	}).id("atlanabyss:plutonium_fuel_rod")
	//钚粒
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { tag: 'tconstruct:casts/multi_use/nugget' },
		fluid: { tag: 'forge:molten_plutonium', amount: 10 },
		result: { item: 'kubejs:plutonium_nugget' },
		cooling_time: 60
	}).id("atlanabyss:plutonium_nugget_gold_cast")
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { tag: 'tconstruct:casts/single_use/nugget' },
		cast_consumed: true,
		fluid: { tag: 'forge:molten_plutonium', amount: 10 },
		result: { item: 'kubejs:plutonium_nugget' },
		cooling_time: 60
	}).id("atlanabyss:plutonium_nugget_sand_cast")
	//钚锭
	mechanical_crafting('kubejs:plutonium_ingot', [
		'AAAAA',
		'AABAA',
	], {
		A: 'kubejs:plutonium_nugget',
		B: 'botania:terrasteel_nugget'
	}).id("atlanabyss:plutonium_ingot")
	//钚块
	event.shaped('kubejs:plutonium_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:plutonium_ingot'
	}).id("atlanabyss:plutonium_block_from_ingot")
	event.shapeless('9x kubejs:plutonium_ingot', [
		'kubejs:plutonium_block'
	]).id("atlanabyss:plutonium_ingot_from_block")

	//镥锭
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [
			{
				type: 'pneumaticcraft:stacked_item',
				item: 'biggerreactors:cyanite_ingot',
				count: 16
			},
			{
				type: 'pneumaticcraft:stacked_item',
				item: 'kubejs:bismuth_ingot',
				count: 8
			},
			{
				type: 'pneumaticcraft:stacked_item',
				item: 'kubejs:plutonium_ingot',
				count: 1
			}
		],
		results: [Item.of('kubejs:lutetium_ingot')],
		pressure: 2.33
	}).id("atlanabyss:lutetium_ingot");

	//石墨棒
	event.custom({
		type: 'createaddition:rolling',
		input: {
			item: 'biggerreactors:graphite_ingot'
		},
		result: {
			item: 'kubejs:graphite_rod',
			count: 2
		}
	}).id("atlanabyss:graphite_rod")

	//电动马达
	remove('createaddition:mechanical_crafting/electric_motor')
	mechanical_crafting('createaddition:electric_motor', [
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
	mechanical_crafting('createaddition:alternator', [
		' ABA ',
		'ABCBA',
		' ADA '
	], {
		A: 'thermal:steel_plate',
		B: 'createaddition:copper_spool',
		C: 'create:shaft',
		D: 'createaddition:capacitor'
	}).id("atlanabyss:alternator")
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


	//镀锇机壳
	filling('kubejs:osmium_casing', [
		'pneumaticcraft:compressed_stone',
		Fluid.of('tconstruct:molten_osmium', 360)
	]).id("atlanabyss:osmium_casing")

	//反应堆外壳
	remove('biggerreactors:crafting/reactor/reactor_casing')
	item_application('biggerreactors:reactor_casing', [
		'kubejs:osmium_casing',
		'kubejs:zirconium_alloy_ingot'
	]).id("atlanabyss:item_application_reactor_casing")

	//反应堆玻璃
	remove('biggerreactors:crafting/reactor/reactor_glass')
	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'biggerreactors:reactor_casing'
		},
		cast_consumed: true,
		fluid: {
			tag: "tconstruct:molten_glass",
			amount: 1000
		},
		result: 'biggerreactors:reactor_glass',
		cooling_time: 100
	}).id("atlanabyss:reactor_glass")
	//反应堆燃料棒
	remove('biggerreactors:crafting/reactor/reactor_fuel_rod')
	event.shaped('4x biggerreactors:reactor_fuel_rod', [
		'ABA',
		'A A',
		'A A'
	], {
		A: 'kubejs:graphite_rod',
		B: 'thermal:lead_plate'
	}).id("atlanabyss:reactor_fuel_rod")
	//反应堆控制棒
	remove('biggerreactors:crafting/reactor/reactor_control_rod')
	event.shapeless('biggerreactors:reactor_control_rod', [
		'biggerreactors:reactor_casing',
		'biggerreactors:reactor_fuel_rod',
		'pneumaticcraft:printed_circuit_board'
	]).id("atlanabyss:reactor_control_rod")
	//反应堆终端
	remove('biggerreactors:crafting/reactor/reactor_terminal')
	event.shaped('biggerreactors:reactor_terminal', [
		' C ',
		'BAB'
	], {
		A: 'biggerreactors:reactor_casing',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:black_stained_glass_pane'
	}).id("atlanabyss:reactor_terminal")
	//反应堆红石接口
	remove('biggerreactors:crafting/reactor/reactor_redstone_port')
	event.shaped('biggerreactors:reactor_redstone_port', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'biggerreactors:reactor_casing',
		B: 'minecraft:redstone'
	}).id("atlanabyss:reactor_redstone_port")
	//反应堆电脑接口
	remove('biggerreactors:crafting/reactor/reactor_computer_port')
	//反应堆能量接口
	remove('biggerreactors:crafting/reactor/reactor_power_tap')
	event.shaped('biggerreactors:reactor_power_tap', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'biggerreactors:reactor_casing',
		B: '#forge:wires'
	}).id("atlanabyss:reactor_power_tap")
	//反应堆访问接口
	remove('biggerreactors:crafting/reactor/reactor_access_port')
	event.shapeless('biggerreactors:reactor_access_port', [
		'biggerreactors:reactor_casing',
		'create:chute'
	]).id("atlanabyss:reactor_access_port")
	//反应堆冷却接口
	remove('biggerreactors:crafting/reactor/reactor_coolant_port')
	event.shapeless('biggerreactors:reactor_coolant_port', [
		'biggerreactors:reactor_casing',
		'create:fluid_pipe'
	]).id("atlanabyss:reactor_coolant_port")
	//反应堆冷却液棒
	remove('biggerreactors:crafting/reactor/reactor_manifold')
	event.shaped('4x biggerreactors:reactor_manifold', [
		'ABA',
		'B B',
		'ABA'
	], {
		A: 'createaddition:iron_rod',
		B: 'kubejs:aluminum_sheet'
	}).id("atlanabyss:reactor_manifold")

	//涡轮机外壳
	remove('biggerreactors:crafting/turbine/turbine_casing')
	item_application('biggerreactors:turbine_casing', [
		'kubejs:osmium_casing',
		'kubejs:aluminium_alloy_ingot'
	]).id("atlanabyss:item_application_turbine_casing")

	//涡轮机玻璃
	remove('biggerreactors:crafting/turbine/turbine_glass')
	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'biggerreactors:turbine_casing'
		},
		cast_consumed: true,
		fluid: {
			tag: "tconstruct:molten_glass",
			amount: 1000
		},
		result: 'biggerreactors:turbine_glass',
		cooling_time: 100
	}).id("atlanabyss:turbine_glass")
	//涡轮机终端
	remove('biggerreactors:crafting/turbine/turbine_terminal')
	event.shaped('biggerreactors:turbine_terminal', [
		' C ',
		'BAB'
	], {
		A: 'biggerreactors:turbine_casing',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:black_stained_glass_pane'
	}).id("atlanabyss:turbine_terminal")
	//涡轮机电脑接口
	remove('biggerreactors:crafting/turbine/turbine_computer_port')
	//涡轮机能量接口
	remove('biggerreactors:crafting/turbine/turbine_power_tap')
	event.shaped('biggerreactors:turbine_power_tap', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'biggerreactors:turbine_casing',
		B: '#forge:wires'
	}).id("atlanabyss:turbine_power_tap")
	//反应堆冷却接口
	remove('biggerreactors:crafting/turbine/turbine_fluid_port')
	event.shapeless('biggerreactors:turbine_fluid_port', [
		'biggerreactors:turbine_casing',
		'create:fluid_pipe'
	]).id("atlanabyss:turbine_fluid_port")
	//涡轮机叶片
	remove('biggerreactors:crafting/turbine/turbine_rotor_blade')
	event.shaped('4x biggerreactors:turbine_rotor_blade', [
		'A',
		'A',
		'A'
	], {
		A: 'thermal:steel_plate'
	}).id("atlanabyss:turbine_rotor_blade")
	//涡轮机转轴
	remove('biggerreactors:crafting/turbine/turbine_rotor_shaft')
	event.shaped('biggerreactors:turbine_rotor_shaft', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'thermal:steel_plate',
		B: 'thermal:steel_ingot'
	}).id("atlanabyss:turbine_rotor_shaft")
	//涡轮转子轴承
	remove('biggerreactors:crafting/turbine/turbine_rotor_bearing')
	event.shapeless('biggerreactors:turbine_rotor_bearing', [
		'biggerreactors:turbine_casing',
		'biggerreactors:turbine_rotor_shaft'
	]).id("atlanabyss:turbine_rotor_bearing")
	//涡轮机发电模块(镥块)
	remove('thermal:machine/biggerreactors/pulverizer_mod_luducrute_ingot')

	remove('biggerreactors:crafting/ludicrite_ingot')
	remove('biggerreactors:smelting/ludicrite_ingot')

	remove('biggerreactors:crafting/ludicrite_block')
	remove('biggerreactors:crafting/ludicrite_block_nether_star')
	remove('biggerreactors:crafting/ludicrite_block_enderium')
	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'biggerreactors:turbine_casing'
		},
		cast_consumed: true,
		fluid: {
			tag: "tconstruct:molten_copper",
			amount: 810
		},
		result: 'biggerreactors:ludicrite_block',
		cooling_time: 200
	}).id("atlanabyss:turbine_power")

	//热交换器外壳
	remove('biggerreactors:crafting/heat_exchanger/casing')
	item_application('biggerreactors:heat_exchanger_casing', [
		'kubejs:osmium_casing',
		'kubejs:lutetium_ingot'
	]).id("atlanabyss:item_application_heat_exchanger_casing")

	//热交换器玻璃
	remove('biggerreactors:crafting/heat_exchanger/glass')
	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'biggerreactors:heat_exchanger_casing'
		},
		cast_consumed: true,
		fluid: {
			tag: "tconstruct:molten_glass",
			amount: 1000
		},
		result: 'biggerreactors:heat_exchanger_glass',
		cooling_time: 100
	}).id("atlanabyss:heat_exchanger_glass")
	//热交换器终端
	remove('biggerreactors:crafting/heat_exchanger/terminal')
	event.shaped('biggerreactors:heat_exchanger_terminal', [
		' C ',
		'BAB'
	], {
		A: 'biggerreactors:heat_exchanger_casing',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:black_stained_glass_pane'
	}).id("atlanabyss:heat_exchanger_terminal")
	//热交换器电脑接口
	remove('biggerreactors:crafting/heat_exchanger/computer_port')
	//热交换器冷却接口
	remove('biggerreactors:crafting/heat_exchanger/fluid_port')
	event.shapeless('biggerreactors:heat_exchanger_fluid_port', [
		'biggerreactors:heat_exchanger_casing',
		'create:fluid_pipe'
	]).id("atlanabyss:heat_exchanger_fluid_port")
	//热交换器气化通道
	remove('biggerreactors:crafting/heat_exchanger/evaporator_channel')
	event.shaped('biggerreactors:heat_exchanger_evaporator_channel', [
		'A A',
		'A A',
		'A A'
	], {
		A: 'createaddition:copper_rod'
	}).id("atlanabyss:heat_exchanger_evaporator_channel")
	//热交换器冷凝通道
	remove('biggerreactors:crafting/heat_exchanger/condenser_channel_alt')
	event.shapeless('biggerreactors:heat_exchanger_condenser_channel', [
		'biggerreactors:heat_exchanger_evaporator_channel',
	]).id("atlanabyss:heat_exchanger_condenser_from_evaporator")
	remove('biggerreactors:crafting/heat_exchanger/evaporator_channel_alt')
	event.shapeless('biggerreactors:heat_exchanger_evaporator_channel', [
		'biggerreactors:heat_exchanger_condenser_channel',
	]).id("atlanabyss:heat_exchanger_evaporator_from_condenser")

	//锌粒
	crushing([
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

	//锆合金
	mixing('5x kubejs:zirconium_alloy_ingot', [
		'ae2:silicon',
		'botania:terrasteel_ingot',
		'3x thermal:lead_ingot'
	]).superheated().id("atlanabyss:zirconium_alloy_ingot")

	//充能魂钢锭
	teslaCharging('tconstruct:soulsteel_ingot', 'kubejs:charged_soulsteel_ingot', 1600, 'charged_soulsteel_ingot')
	//充能康铜锭
	teslaCharging('thermal:constantan_ingot', 'kubejs:charged_constantan_ingot', 64000, 'charged_constantan_ingot')

	//其他魔艺树
	remove('ars_nouveau:manipulation_essence_to_flourishing_sapling')
	remove('ars_nouveau:manipulation_essence_to_cascading_sapling')
	remove('ars_nouveau:manipulation_essence_to_blazin_sapling')
	remove('ars_nouveau:manipulation_essence_to_vexing_sapling')
	mana_infusion('ars_nouveau:blue_archwood_sapling', 'ars_nouveau:green_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:blue_archwood_sapling")
	mana_infusion('ars_nouveau:purple_archwood_sapling', 'ars_nouveau:blue_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:purple_archwood_sapling")
	mana_infusion('ars_nouveau:red_archwood_sapling', 'ars_nouveau:purple_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:red_archwood_sapling")
	mana_infusion('ars_nouveau:green_archwood_sapling', 'ars_nouveau:red_archwood_sapling', 240, 'botania:alchemy_catalyst').id("atlanabyss:mana_infusion_green_archwood_sapling")
	//活石
	remove('botania:pure_daisy/livingrock')
	pure_daisy('botania:livingrock', 'minecraft:calcite', 30).id("atlanabyss:livingrock")
	//活木
	remove('botania:pure_daisy/livingwood')
	pure_daisy('botania:livingwood_log', 'ars_nouveau:green_archwood_log', 30).id("atlanabyss:livingwood_by_green")
	pure_daisy('botania:livingwood_log', 'ars_nouveau:blue_archwood_log', 30).id("atlanabyss:livingwood_by_blue")
	pure_daisy('botania:livingwood_log', 'ars_nouveau:purple_archwood_log', 30).id("atlanabyss:livingwood_by_purple")
	pure_daisy('botania:livingwood_log', 'ars_nouveau:red_archwood_log', 30).id("atlanabyss:livingwood_by_red")


	let types = ["three", "eight", "plus", "minus", "multiply", "divide"]
	types.forEach(e => {
		event.stonecutting('kubejs:' + e + '_cast', 'thermal:nickel_plate').id('atlanabyss:' + e + '_cast')
		event.custom({
			"type": "tconstruct:casting_table",
			"cast": {
				"item": 'kubejs:' + e + '_cast'
			},
			"fluid": {
				"name": "kubejs:raw_logic",
				"amount": 1
			},
			"result": Item.of('kubejs:' + e).toResultJson(),
			"cooling_time": 10
		}).id('atlanabyss:' + e)
	})

	let meltOrCrucible = (ingredient, out, outAmount, id) => {
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": { "item": ingredient },
			"result": {
				"fluid": out,
				"amount": outAmount
			},
			"temperature": 200,
			"time": 20
		}).id('atlanabyss:' + id)
	}

	let alloyAmount = 10
	let outAmount = 50
	event.custom({
		type: 'tconstruct:alloy',
		inputs: [
			{ name: 'kubejs:number_0', amount: alloyAmount },
			{ name: 'kubejs:number_1', amount: alloyAmount },
			{ name: 'kubejs:number_2', amount: alloyAmount },
			{ name: 'kubejs:number_3', amount: alloyAmount },
			{ name: 'kubejs:number_4', amount: alloyAmount },
			{ name: 'kubejs:number_5', amount: alloyAmount },
			{ name: 'kubejs:number_6', amount: alloyAmount },
			{ name: 'kubejs:number_7', amount: alloyAmount },
			{ name: 'kubejs:number_8', amount: alloyAmount },
			{ name: 'kubejs:number_9', amount: alloyAmount }
		],
		result: {
			fluid: 'kubejs:matrix',
			amount: outAmount
		},
		"temperature": 200
	}).id("atlanabyss:matrix")

	meltOrCrucible('kubejs:circuit_scrap', 'kubejs:raw_logic', 30, 'raw_logic')
	meltOrCrucible('kubejs:zero', 'kubejs:number_0', 1, 'number_0')
	meltOrCrucible('kubejs:one', 'kubejs:number_1', 1, 'number_1')
	meltOrCrucible('kubejs:two', 'kubejs:number_2', 1, 'number_2')
	meltOrCrucible('kubejs:three', 'kubejs:number_3', 1, 'number_3')
	meltOrCrucible('kubejs:four', 'kubejs:number_4', 1, 'number_4')
	meltOrCrucible('kubejs:five', 'kubejs:number_5', 1, 'number_5')
	meltOrCrucible('kubejs:six', 'kubejs:number_6', 1, 'number_6')
	meltOrCrucible('kubejs:seven', 'kubejs:number_7', 1, 'number_7')
	meltOrCrucible('kubejs:eight', 'kubejs:number_8', 1, 'number_8')
	meltOrCrucible('kubejs:nine', 'kubejs:number_9', 1, 'number_9')

	event.custom({
		type: 'tconstruct:casting_basin',
		fluid: {
			name: 'kubejs:matrix',
			amount: 1000
		},
		result: Item.of('kubejs:computation_matrix').toResultJson(),
		cooling_time: 20
	}).id("atlanabyss:computation_matrix")

	let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	let ops = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => b == 0 ? 'error' : a / b]
	let opNames = ['plus', 'minus', 'multiply', 'divide']

	for (var a = 0; a < 10; a++) {
		for (var b = 0; b < 10; b++) {
			for (var op = 0; op < ops.length; op++) {

				let result = ops[op](a, b)
				var output;

				if (result == 'error')
					output = 'kubejs:missingno'
				else if (result < 0)
					continue
				else if (result > 9)
					continue
				else if (result % 1 != 0)
					continue
				else
					output = 'kubejs:' + nums[result]

				mechanical_crafting(output, [
					'AOB',
				], {
					A: 'kubejs:' + nums[a],
					O: 'kubejs:' + opNames[op],
					B: 'kubejs:' + nums[b]
				}).id('atlanabyss:' + nums[a] + '_' + opNames[op] + '_' + nums[b])
			}
		}
	}

	//机壳
	item_application('create:shadow_steel_casing', [
		'create:andesite_casing',
		'create:shadow_steel'
	]).id("atlanabyss:item_application_shadow_steel_casing")
	item_application('create:refined_radiance_casing', [
		'create:andesite_casing',
		'create:refined_radiance'
	]).id("atlanabyss:item_application_refined_radiance_casing")


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
	//炼
	//金
	//混
	//合
	//物
	splashing('kubejs:alchemy_1',
		'#atlanabyss:alchemy_substrate'
	).id("atlanabyss:alchemy_1")
	teslaCharging('kubejs:alchemy_1',
		'kubejs:alchemy_2',
		5000,
		'alchemy_2')
	cutting('kubejs:alchemy_3',
		'kubejs:alchemy_2'
	).id("atlanabyss:alchemy_3")
	event.custom({
		type: 'create:haunting',
		ingredients: [Ingredient.of('kubejs:alchemy_3').toJson()],
		results: [Item.of('kubejs:alchemy_4').toResultJson()]
	}).id("atlanabyss:alchemy_4");
	event.custom({
		type: 'botania:pure_daisy',
		input: {
			type: 'block',
			block: 'kubejs:alchemy_4'
		},
		output: { name: 'kubejs:alchemy_5' }
	}).id("atlanabyss:alchemy_5")
	event.custom({
		type: 'botania:mana_infusion',
		input: {
			item: 'kubejs:alchemy_5'
		},
		output: { item: 'kubejs:alchemy_6' },
		mana: 25000
	}).id("atlanabyss:alchemy_6")
	event.custom({
		type: 'botania:elven_trade',
		ingredients: [{ item: 'kubejs:alchemy_6' }],
		output: [{ item: 'kubejs:alchemy_7' }]
	}).id("atlanabyss:alchemy_7")
	event.custom({
		type: 'ars_nouveau:imbuement',
		input: { item: 'kubejs:alchemy_7' },
		output: 'kubejs:alchemy_8',
		count: 1,
		source: 1000,
		pedestalItems: []
	}).id("atlanabyss:alchemy_8")
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [Ingredient.of('kubejs:alchemy_8')],
		results: [Item.of('kubejs:alchemy_9')],
		pressure: 2.5
	}).id("atlanabyss:alchemy_9")
	event.custom({
		type: 'pneumaticcraft:assembly_drill',
		input: { item: 'kubejs:alchemy_9', },
		result: { item: 'kubejs:alchemy_10', },
		program: 'drill'
	}).id("atlanabyss:alchemy_10")
	event.custom({
		type: 'pneumaticcraft:assembly_laser',
		input: { item: 'kubejs:alchemy_10', },
		result: { item: 'kubejs:alchemy_11', },
		program: 'laser'
	}).id("atlanabyss:alchemy_11")
	event.custom({
		type: 'ae2:inscriber',
		mode: 'inscribe',
		result: { item: 'kubejs:alchemy_12' },
		ingredients: { middle: { item: 'kubejs:alchemy_11' } }
	}).id("atlanabyss:alchemy_12")
	deploying([
		Item.of('kubejs:treasure_box').withChance(1 / 1000),
		Item.of('kubejs:alchemy_0').withChance(3 / 4),
		Item.of('farmersdelight:roast_chicken_block', 1).withChance(1 / 16),
		Item.of('minecraft:barrel', "{RepairCost:0,display:{Name:'{\"text\":\"耐心之桶\"}'}}").enchant('minecraft:looting', 2).withChance(1 / 2)
	], [
		'kubejs:alchemy_12',
		'kubejs:tungsten_nugget'
	]).id("atlanabyss:treasure_box")
})