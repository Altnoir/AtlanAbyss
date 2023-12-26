//priority: 100

onEvent('recipes', event => {
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
	//花肥
	remove('botania:fertilizer_dye')
	//多余的牛奶瓶
	remove('neapolitan:milk/milk_bucket_from_bottles')
	remove('neapolitan:milk/milk_bottles_from_bucket')
	remove('create:compat/neapolitan/filling/milk_bottle')
	remove('create:compat/neapolitan/emptying/milk_bottle')
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
	event.shaped('createoreexcavation:vein_finder', [
		' AB',
		' DC',
		'D  '
	], {
		A: 'minecraft:amethyst_shard',
		B: 'minecraft:ender_eye',
		C: 'thermal:flux_magnet',
		D: 'minecraft:stick'
	}).id("llmion:vein_finder")


	//修复了原版宝石矿能烧的BUG
	let blastingAndSmelting = (name) => {
		event.remove({ id: 'minecraft:' + name + '_from_blasting_' + name + '_ore' })
		event.remove({ id: 'minecraft:' + name + '_from_blasting_deepslate_' + name + '_ore' })
		event.remove({ id: 'minecraft:' + name + '_from_smelting_' + name + '_ore' })
		event.remove({ id: 'minecraft:' + name + '_from_smelting_deepslate_' + name + '_ore' })
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

	event.campfireCooking('minecraft:bread', 'farmersdelight:wheat_dough').id("llmion:campfire_cooking_bread")

	event.recipes.createSplashing(['farmersdelight:wheat_dough'],
		'create:wheat_flour'
	).id("llmion:splashing_wheat_flour").processingTime(600)

	remove('create:mixing/dough_by_mixing')

	//钻石粉
	remove('createaddition:crushing/diamond')

	function teslaCharging(input, output, energy, id) {
		event.custom({
			type: 'createaddition:charging',
			input: { item: input, count: 1 },
			result: { item: output, count: 1 },
			energy: energy,
		}).id('llmion:' + id)
	}
	teslaCharging('minecraft:basalt', 'thermal:basalz_rod', 10000, 'basalz_rod')

	//水之精华→黑曜石
	remove('ars_nouveau:water_essence_to_obsidian')
	event.blasting('minecraft:obsidian', 'ars_nouveau:water_essence').id("llmion:obsidian_from_water_essence")

	//钢结构
	remove('yuushya:stone/steel_structure')
	event.stonecutting('yuushya:steel_structure', 'minecraft:iron_ingot').id('llmion:steel_structure_from_ingot');

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
	}).id('llmion:broom_item');

	event.shaped('majobroom:majo_hat', [
		' AB',
		'AAA'
	], {
		A: 'ars_nouveau:magebloom_fiber',
		B: 'botania:mana_pearl'

	}).id('llmion:majo_hat');

	event.shaped('majobroom:majo_cloth', [
		'A A',
		'ABA',
		'AAA'
	], {
		A: 'ars_nouveau:magebloom_fiber',
		B: 'botania:mana_pearl'
	}).id('llmion:majo_cloth');


	//传送门珍珠
	function gateRecipe(a, b, id) {
		event.custom({
			type: 'gateways:gate_recipe',
			group: 'gateways',
			pattern: ['BBB', 'BAB', 'BBB'],
			key: { A: { item: a }, B: { item: b } },
			result: { item: 'gateways:gate_pearl' },
			gateway: 'gateways:' + id
		}).id("llmion:" + id)
	}
	function gateRecipeSmall(a, b, id) {
		event.custom({
			type: 'gateways:gate_recipe',
			group: 'gateways',
			pattern: [' B ', 'BAB', ' B '],
			key: { A: { item: a }, B: { item: b } },
			result: { item: 'gateways:gate_pearl' },
			gateway: 'gateways:' + id
		}).id("llmion:" + id)
	}
	gateRecipe('twilightforest:naga_scale', 'minecraft:rotten_flesh', 'zombie_gate_ultra')
	gateRecipe('minecraft:ender_eye', 'tconstruct:necrotic_bone', 'wither_skeleton_gate')
	gateRecipe('minecraft:nether_star', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_large')
	gateRecipeSmall('minecraft:ender_pearl', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_small')
	//糖果石英
	event.shapeless('kubejs:candy_quartz', ['ars_nouveau:source_gem', '8x minecraft:sugar']).id("llmion:candy_quartz")
	//打磨
	function polishing(input, output, id) {
		event.custom({
			type: 'create:sandpaper_polishing',
			ingredients: [{ item: input }],
			results: [{ item: output }]
		}).id("llmion:" + id)
	}
	polishing('kubejs:candy_quartz', 'kubejs:polished_candy_quartz', 'polishing_candy_quartz')
	polishing('thermal:sulfur', 'kubejs:polished_sulfur', 'polishing_sulfur')
	polishing('ae2:charged_certus_quartz_crystal', 'kubejs:polished_charged_certus_quartz', 'polishing_certus_quartz')
	//更多电子管
	function electronTube(output, a, b, id) {
		event.shaped(output, ['A', 'B'], { A: a, B: b }).id('llmion:' + id)
	}
	electronTube('kubejs:candy_electron_tube', 'kubejs:polished_candy_quartz', 'kubejs:osmium_sheet', 'candy_electron_tube')
	electronTube('kubejs:sulfur_electron_tube', 'kubejs:polished_sulfur', 'thermal:lead_plate', 'sulfur_electron_tube')
	electronTube('kubejs:charged_electron_tube', 'kubejs:polished_charged_certus_quartz', 'thermal:silver_plate', 'charged_certus_electron_tube')
	//电子管额外配方
	createDeploying('create:polished_rose_quartz', Item.of('create:electron_tube').withChance(0.9), 'minecraft:iron_nugget', 'electron_tube')
	createDeploying('kubejs:polished_candy_quartz', Item.of('kubejs:candy_electron_tube').withChance(0.9), 'kubejs:osmium_nugget', 'candy_electron_tube')
	createDeploying('kubejs:polished_sulfur', Item.of('kubejs:sulfur_electron_tube').withChance(0.9), 'thermal:lead_nugget', 'sulfur_electron_tube')
	createDeploying('kubejs:polished_charged_certus_quartz', Item.of('kubejs:charged_electron_tube').withChance(0.9), 'thermal:silver_nugget', 'charged_certus_electron_tube')

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
		event.recipes.create.filling('yuushya:' + output, [
			input,
			Fluid.of('minecraft:water', 25)
		]).id('llmion:filling_' + output)
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
	event.recipes.createCompacting(
		'2x supplementaries:soap',
		[
			'minecraft:porkchop',
			'4x supplementaries:ash',
			Fluid.of('thermal:creosote', 250)
		]).id("llmion:pyrolyzer_soap")

	remove('supplementaries:soap/carpet')
	event.shapeless('minecraft:white_carpet', [
		'#yuushya:vanilla_wool_carpets',
		'supplementaries:soap'
	]).id("llmion:soap_carpet")

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
	}).id("llmion:megatorch")
	//野火灯笼
	remove('torchmaster:feral_flare_lantern')
	event.shaped('torchmaster:feral_flare_lantern', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'tconstruct:seared_brick',
		B: 'minecraft:glowstone'
	}).id("llmion:feral_flare_lantern")
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
	}).id("llmion:dreadlamp")

	//pipez管道
	event.shaped('4x pipez:universal_pipe', [
		'A',
		'B',
		'A'
	], {
		A: 'kubejs:osmium_sheet',
		B: 'kubejs:osmium_ingot'
	}).id("llmion:universal_pipe")
	event.stonecutting('pipez:item_pipe', 'pipez:universal_pipe').id('llmion:item_pipe');//物品管道
	event.stonecutting('pipez:fluid_pipe', 'pipez:universal_pipe').id('llmion:fluid_pipe');//流体管道
	event.stonecutting('pipez:energy_pipe', 'pipez:universal_pipe').id('llmion:energy_pipe');//能量管道

	//震动部件
	let vm = ('kubejs:incomplete_vibration_mechanim')
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:vibration_mechanism').withChance(0.5),
		Item.of('kubejs:rose_quartz_sheet').withChance(0.2),
		Item.of('minecraft:amethyst_shard').withChance(0.1),
		Item.of('create:cogwheel').withChance(0.1),
		Item.of('minecraft:redstone').withChance(0.1)
	],
		'kubejs:rose_quartz_sheet',
		[
			event.recipes.createDeploying(vm, [vm, 'minecraft:amethyst_shard']),
			event.recipes.createDeploying(vm, [vm, 'create:cogwheel']),
			event.recipes.createDeploying(vm, [vm, 'minecraft:redstone'])
		]).transitionalItem(vm).loops(5).id("llmion:vibration_mechanism")

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
	}).id("llmion:basic_chunk_loader")
	//5x5
	remove('chunkloaders:advanced_chunk_loader')
	event.shaped('chunkloaders:advanced_chunk_loader', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'chunkloaders:basic_chunk_loader',
		B: 'thermal:electrum_block'
	}).id("llmion:advanced_chunk_loader")
	//7x7
	remove('chunkloaders:ultimate_chunk_loader')
	event.shaped('chunkloaders:ultimate_chunk_loader', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'chunkloaders:advanced_chunk_loader',
		B: 'thermal:enderium_block'
	}).id("llmion:ultimate_chunk_loader")

	//物品收集器
	//基础
	remove('itemcollectors:basic_collector')
	event.shapeless('itemcollectors:basic_collector', [
		'kubejs:pressure_mechanism',
		'create:chute'
	]).id("llmion:basic_collector")
	//高级
	remove('itemcollectors:advanced_collector')
	event.shapeless('itemcollectors:advanced_collector', [
		'itemcollectors:basic_collector',
		'create:nozzle'
	]).id("llmion:advanced_collector")
	//下界碎片翻倍
	event.stonecutting('2x minecraft:netherite_scrap', 'minecraft:ancient_debris').id('llmion:cutting_ancient_debris');
	//灰烬
	event.smoking('supplementaries:ash', 'thermal:sawdust').xp(1.35).id("llmion:smoking_ash")
	//箱装烤马铃薯
	event.shaped('kubejs:baked_potato_crate', [
		'PPP',
		'PPP',
		'PPP'
	], {
		P: 'minecraft:baked_potato'
	}).id("llmion:baked_potato_crate")
	event.shapeless('9x minecraft:baked_potato', [
		'kubejs:baked_potato_crate',
	]).id("llmion:baked_potato_from_ceate")
	//箱装鸡蛋
	event.shaped('kubejs:egg_crate', [
		'eee',
		'eee',
		'eee'
	], {
		e: 'minecraft:egg'
	}).id("llmion:egg_crate")
	event.shapeless('9x minecraft:egg', [
		'kubejs:egg_crate',
	]).id("llmion:egg_from_ceate")
	//棉花
	event.recipes.create.milling([
		'2x minecraft:string',
		Item.of('3x minecraft:string').withChance(0.5),
		Item.of('minecraft:feather').withChance(0.25),
		Item.of('kubejs:cottons_seed').withChance(0.25)
	],
		'kubejs:cotton'
	).id("llmion:milling_cotton")
	event.shapeless('kubejs:cottons_seed', [
		'kubejs:cotton'
	]).id("llmion:cottons_seed")
	event.shaped('2x minecraft:white_wool', [
		'AA',
		'AA'
	], {
		A: 'kubejs:cotton'
	}).id("llmion:wool_from_cotton")
	event.shapeless('9x kubejs:cotton', [
		'kubejs:cotton_crate'
	]).id("llmion:cottons_from_crate")
	event.shaped('kubejs:cotton_crate', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:cotton'
	}).id("llmion:crate_from_cotton")

	//混合药草
	event.shapeless('kubejs:mixed_herb_gg', ['minecraft:fern', 'minecraft:fern']).id("llmion:mixed_herb_gg")//绿+绿
	event.shapeless('kubejs:mixed_herb_ggg', ['kubejs:mixed_herb_gg', 'minecraft:fern']).id("llmion:mixed_herb_ggg")//绿+绿+绿
	event.shapeless('kubejs:mixed_herb_rg', ['minecraft:fern', 'minecraft:crimson_roots']).id("llmion:mixed_herb_rg")//红+绿
	event.shapeless('kubejs:mixed_herb_bg', ['minecraft:fern', 'minecraft:blue_orchid']).id("llmion:mixed_herb_bg")//蓝+绿
	event.shapeless('kubejs:mixed_herb_yg', ['minecraft:fern', 'minecraft:horn_coral']).id("llmion:mixed_herb_yg")//黄+绿
	event.shapeless('kubejs:mixed_herb_br', ['minecraft:crimson_roots', 'minecraft:blue_orchid']).id("llmion:mixed_herb_br")//蓝+红
	event.shapeless('kubejs:mixed_herb_yr', ['minecraft:crimson_roots', 'minecraft:horn_coral']).id("llmion:mixed_herb_yr")//黄+红
	event.shapeless('kubejs:mixed_herb_bgg', ['kubejs:mixed_herb_gg', 'minecraft:blue_orchid']).id("llmion:mixed_herb_bgg_from_gg")//蓝+绿+绿
	event.shapeless('kubejs:mixed_herb_ygg', ['kubejs:mixed_herb_gg', 'minecraft:horn_coral']).id("llmion:mixed_herb_ygg_from_gg")//黄+绿+绿
	event.shapeless('kubejs:mixed_herb_bgg', ['kubejs:mixed_herb_bg', 'minecraft:fern']).id("llmion:mixed_herb_bgg_from_bg")//蓝+绿+绿
	event.shapeless('kubejs:mixed_herb_ygg', ['kubejs:mixed_herb_yg', 'minecraft:fern']).id("llmion:mixed_herb_ygg_from_yg")//黄+绿+绿
	event.shapeless('kubejs:mixed_herb_brg', ['kubejs:mixed_herb_rg', 'minecraft:blue_orchid']).id("llmion:mixed_herb_brg_from_rg")//蓝+红+绿
	event.shapeless('kubejs:mixed_herb_brg', ['kubejs:mixed_herb_bg', 'minecraft:crimson_roots']).id("llmion:mixed_herb_brg_from_bg")//蓝+红+绿
	event.shapeless('kubejs:mixed_herb_brg', ['kubejs:mixed_herb_br', 'minecraft:fern']).id("llmion:mixed_herb_brg_from_br")//蓝+红+绿
	event.shapeless('kubejs:mixed_herb_yrg', ['kubejs:mixed_herb_rg', 'minecraft:horn_coral']).id("llmion:mixed_herb_yrg_from_rg")//黄+红+绿
	event.shapeless('kubejs:mixed_herb_yrg', ['kubejs:mixed_herb_yg', 'minecraft:crimson_roots']).id("llmion:mixed_herb_yrg_from_yg")//黄+红+绿
	event.shapeless('kubejs:mixed_herb_yrg', ['kubejs:mixed_herb_yr', 'minecraft:fern']).id("llmion:mixed_herb_yrg_from_yr")//黄+红+绿
	//钻石粉
	event.recipes.createCrushing(['thermal:diamond_dust'], 'minecraft:diamond').id("llmion:crushing_diamond")
	//锯末
	event.recipes.create.milling([
		'farmersdelight:tree_bark',
		'16x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.25)
	], '#llmion:unstripped_wood').id("llmion:milling_wood")

	event.recipes.create.milling([
		'16x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.25)
	], '#forge:stripped_logs').id("llmion:milling_stripped_wood")

	event.recipes.create.milling([
		'4x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.25)
	], '#minecraft:planks').id("llmion:milling_planks")

	event.recipes.create.milling([
		'6x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.38)
	], '#minecraft:wooden_stairs').id("llmion:milling_wooden_stairs")

	event.recipes.create.milling([
		'2x minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.13)
	], '#minecraft:wooden_slabs').id("llmion:milling_wooden_slabs")

	//竹子锯末
	event.recipes.create.milling([
		'minecraft:stick',
		Item.of('thermal:sawdust').withChance(0.5)
	], 'minecraft:bamboo').id("llmion:milling_bamboo")

	//粉末
	event.recipes.create.milling('thermal:apatite_dust', 'thermal:apatite').id("llmion:milling_apatite")
	event.recipes.create.milling('thermal:cinnabar_dust', 'thermal:cinnabar').id("llmion:milling_cinnabar")
	event.recipes.create.milling('thermal:niter_dust', 'thermal:niter').id("llmion:milling_niter")
	event.recipes.create.milling('thermal:sulfur_dust', 'thermal:sulfur').id("llmion:milling_sulfur")

	//暮色乐事
	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{ item: 'twilightforest:alpha_yeti_trophy' }],
		result: [
			{ count: 9, item: 'twilightforest:alpha_yeti_fur' },
			{ chance: 0.5, count: 4, item: 'twilightforest:ice_bomb' }
		],
		tool: { tag: 'forge:tools/knives' }
	}).id("llmion:alpha_yeti_trophy")

	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{ item: 'twilightforest:lich_trophy' }],
		result: [
			{ item: 'minecraft:skeleton_skull' },
			{ chance: 0.2, item: 'twilightforest:zombie_scepter' },
			{ chance: 0.2, item: 'twilightforest:lifedrain_scepter' },
			{ chance: 0.2, item: 'twilightforest:twilight_scepter' }
		],
		tool: { tag: 'forge:tools/knives' }
	}).id("llmion:lich_trophy")

	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{ item: 'twilightforest:minoshroom_trophy' }],
		result: [
			{ count: 9, item: 'twilightforest:raw_meef' },
			{ chance: 0.5, count: 8, item: 'minecraft:red_mushroom' }
		],
		tool: { tag: 'forge:tools/knives' }
	}).id("llmion:minoshroom_trophy")

	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{ item: 'twilightforest:snow_queen_trophy' }],
		result: [
			{ count: 9, item: 'twilightforest:ice_bomb' },
			{ chance: 0.2, item: 'twilightforest:ice_sword' },
			{ chance: 0.1, item: 'twilightforest:glass_sword' },
			{ chance: 0.2, item: 'twilightforest:ice_bow' }
		],
		tool: { tag: 'forge:tools/knives' }
	}).id("llmion:snow_queen_trophy")

	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [{ item: 'twilightforest:ur_ghast_trophy' }],
		result: [
			{ count: 9, item: 'kubejs:experiment_113' },
			{ count: 4, item: 'twilightforest:experiment_115' },
			{ chance: 0.1, item: 'kubejs:experiment_110' }
		],
		tool: { tag: 'forge:tools/knives' }
	}).id("llmion:ur_ghast_trophy")


	function pickaxeCutting(item, result, count, id) {
		event.custom({
			type: 'farmersdelight:cutting',
			ingredients: [{ item: item }],
			result: [{ count: count, item: result }],
			tool: { tag: 'forge:tools/pickaxes' }
		}).id('llmion:' + id)
	}
	pickaxeCutting('twilightforest:phantom_chestplate', 'twilightforest:armor_shard_cluster', 5, 'phantom_chestplate')
	pickaxeCutting('twilightforest:phantom_helmet', 'twilightforest:armor_shard_cluster', 3, 'phantom_helmet')

	function cutting(item, result, count, id) {
		event.custom({
			type: 'farmersdelight:cutting',
			ingredients: [{ item: item }],
			result: [{ count: count, item: result }],
			tool: { tag: 'forge:tools/knives' }
		}).id('llmion:' + id)
	}
	cutting('twilightforest:cooked_meef', 'kubejs:cooked_meef_slice', 2, 'cooked_meef_slice')
	cutting('twilightforest:cooked_meef', 'kubejs:cooked_meef_slice', 2, 'cooked_meef_slice')
	cutting('twilightforest:cooked_venison', 'kubejs:cooked_venison_rib', 2, 'cooked_venison_rib')
	cutting('twilightforest:hydra_chop', 'kubejs:hydra_piece', 2, 'hydra_piece')
	cutting('twilightforest:hydra_trophy', 'twilightforest:hydra_chop', 4, 'hydra_trophy')
	cutting('twilightforest:knight_phantom_trophy', 'twilightforest:phantom_helmet', 1, 'knight_phantom_trophy')
	cutting('twilightforest:naga_trophy', 'twilightforest:naga_scale', 9, 'naga_trophy')
	cutting('twilightforest:quest_ram_trophy', 'minecraft:mutton', 9, 'quest_ram_trophy')
	cutting('twilightforest:firefly', 'kubejs:raw_insect', 2, 'raw_insect_from_firefly')
	cutting('twilightforest:cicada', 'kubejs:raw_insect', 2, 'raw_insect_from_cicada')
	cutting('twilightforest:moonworm', 'kubejs:raw_insect', 2, 'raw_insect_from_moonworm')
	cutting('twilightforest:raw_meef', 'kubejs:raw_meef_slice', 2, 'raw_meef_slice')
	cutting('twilightforest:raw_venison', 'kubejs:raw_venison_rib', 2, 'raw_venison_rib')

	function cooking(container, time, xp, item, count, result, id) {
		event.custom({
			type: 'farmersdelight:cooking',
			container: { item: container },
			cookingtime: time,
			experience: xp,
			ingredients: item,
			result: { count: count, item: result }
		}).id('llmion:' + id)
	}
	cooking('minecraft:bowl', 800, 0.5, [
		{ tag: 'kubejs:hydra_meat' },
		{ item: 'twilightforest:fiery_blood' },
		{ item: 'twilightforest:naga_scale' },
		{ item: 'farmersdelight:tomato_sauce' },
		{ item: 'twilightforest:torchberries' }
	], 1, 'kubejs:fiery_snakes', 'fiery_snakes')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'kubejs:raw_insect' },
		{ item: 'farmersdelight:onion' },
		{ item: 'minecraft:carrot' }
	], 1, 'kubejs:fried_insect', 'fried_insect')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'kubejs:glowstew' },
		{ tag: 'kubejs:vension_raw' },
		{ item: 'farmersdelight:raw_pasta' },
		{ item: 'twilightforest:liveroot' },
		{ item: 'minecraft:beetroot' }
	], 1, 'kubejs:glow_venison_rib_with_pasta', 'glow_venison_rib_with_pasta')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'minecraft:glowstone_dust' },
		{ item: 'twilightforest:mushgloom' },
		{ item: 'twilightforest:torchberries' }
	], 1, 'kubejs:glowstew', 'glowstew')
	cooking('minecraft:bowl', 800, 0.35, [
		{ item: 'farmersdelight:tomato' },
		{ item: 'minecraft:beetroot' },
		{ item: 'twilightforest:fiery_tears' },
		{ item: 'twilightforest:experiment_115' },
		{ item: 'twilightforest:experiment_115' }
	], 1, 'kubejs:grilled_ghast', 'grilled_ghast')
	cooking('minecraft:bowl', 400, 0.35, [
		{ item: 'twilightforest:huge_lily_pad' },
		{ item: 'minecraft:chicken' },
		{ item: 'twilightforest:huge_water_lily' },
		{ item: 'farmersdelight:onion' },
		{ tag: 'forge:eggs' },
		{ item: 'minecraft:bread' }
	], 4, 'kubejs:lily_chicken', 'lily_chicken')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'minecraft:mushroom_stew' },
		{ item: 'kubejs:raw_meef_slice' },
		{ item: 'twilightforest:liveroot' },
		{ item: 'twilightforest:torchberries' },
		{ item: 'farmersdelight:onion' }
	], 1, 'twilightforest:meef_stroganoff', 'meef_stroganoff')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'kubejs:mushgloom_sauce' },
		{ tag: 'kubejs:meef_raw' },
		{ item: 'farmersdelight:raw_pasta' }
	], 1, 'kubejs:mushgloom_meef_pasta', 'mushgloom_meef_pasta')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'minecraft:brown_mushroom' },
		{ item: 'twilightforest:mushgloom' },
		{ item: 'farmersdelight:onion' }
	], 1, 'kubejs:mushgloom_sauce', 'mushgloom_sauce')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'twilightforest:liveroot' },
		{ item: 'twilightforest:steeleaf_ingot' },
		{ item: 'minecraft:sugar' }
	], 1, 'kubejs:phytochemical_juice', 'phytochemical_juice')
	cooking('minecraft:bowl', 800, 0.35, [
		{ item: 'twilightforest:fiery_tears' },
		{ item: 'minecraft:ghast_tear' }
	], 1, 'kubejs:tear_drink', 'tear_drink')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'twilightforest:thorn_rose' },
		{ item: 'minecraft:sugar' }
	], 1, 'kubejs:thorn_rose_tea', 'thorn_rose_tea')
	cooking('minecraft:bowl', 400, 0.35, [
		{ item: 'twilightforest:root_strand' },
		{ item: 'twilightforest:fallen_leaves' },
		{ item: 'twilightforest:liveroot' },
		{ item: 'twilightforest:torchberry_plant' },
		{ item: 'minecraft:vine' },
		{ item: 'twilightforest:fiddlehead' }
	], 1, 'kubejs:thousand_plant_stew', 'thousand_plant_stew')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'twilightforest:torchberries' },
		{ item: 'minecraft:sugar' }
	], 1, 'kubejs:torchberry_juice', 'torchberry_juice')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'twilightforest:ice_bomb' },
		{ item: 'minecraft:ice' },
		{ item: 'twilightforest:arctic_fur' },
		{ item: 'minecraft:sugar' }
	], 1, 'kubejs:glacier_ice_tea', 'glacier_ice_tea')
	cooking('minecraft:bowl', 200, 0.35, [
		{ item: 'minecraft:ice' },
		{ item: 'twilightforest:raw_ironwood' }
	], 1, 'kubejs:twilight_spring', 'twilight_spring')

	function ccss(item, result, xp, id) {
		event.campfireCooking(result, item).xp(xp).id("llmion:campfire_" + id)
		event.smelting(result, item).xp(xp).id("llmion:smelting_" + id)
		event.smoking(result, item).xp(xp).id("llmion:smoking_" + id)
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
	}).id("llmion:torchberry_cookie")
	//巧克力夹心薄饼
	event.shaped('kubejs:chocolate_wafer', [
		'A',
		'B',
		'A'
	], {
		A: 'twilightforest:maze_wafer',
		B: 'minecraft:cocoa_beans'
	}).id("llmion:chocolate_wafer")
	//米诺陶卷
	event.shapeless('kubejs:meef_wrap', [
		'#forge:bread', '#kubejs:meef_cooked', '#forge:salad_ingredients', '#forge:crops/onion'
	]).id("llmion:meef_wrap")
	//蘸荧光煲的113
	event.shapeless('kubejs:glow_113', [
		'kubejs:experiment_113', 'kubejs:glowstew'
	]).id("llmion:glow_113")
	//蘸蜂蜜的113
	event.shapeless('kubejs:honey_113', [
		'kubejs:experiment_113', 'minecraft:honey_bottle'
	]).id("llmion:honey_113")
	event.recipes.createFilling('kubejs:honey_113', [
		'kubejs:experiment_113', Fluid.of('create:honey', 250)
	]).id("llmion:filling_honey_113")
	//蘸巧克力的113
	event.shapeless('kubejs:chocolate_113', [
		'kubejs:experiment_113', '#forge:milk', 'minecraft:sugar', 'minecraft:cocoa_beans'
	]).id("llmion:chocolate_113")
	event.recipes.createFilling('kubejs:chocolate_113',
		['kubejs:experiment_113', Fluid.of('create:chocolate', 250)
		]).id("llmion:filling_chocolate_113")
	//蘸巧克力的113
	event.shapeless('kubejs:milky_113', [
		'kubejs:experiment_113', '#forge:milk', 'minecraft:sugar'
	]).id("llmion:milky_113")
	event.recipes.createFilling('kubejs:milky_113',
		['kubejs:experiment_113', Fluid.of('minecraft:milk', 250)
		]).id("llmion:filling_milky_113")
	//九头蛇汉堡
	event.shapeless('kubejs:hydra_burger', [
		'#forge:bread', '#kubejs:hydra_meat', '#forge:salad_ingredients', '#forge:crops/tomato', '#forge:crops/onion'
	]).id("llmion:hydra_burger")
	//恶魂汉堡
	event.shapeless('kubejs:ghast_burger', [
		'#forge:bread', 'twilightforest:experiment_115', '#forge:vegetables/beetroot', '#forge:crops/tomato', '#forge:crops/onion'
	]).id("llmion:ghast_burger")
	//浆果串
	event.shapeless('kubejs:berry_stick', [
		'minecraft:sweet_berries', 'minecraft:glow_berries', 'twilightforest:torchberries', 'minecraft:stick'
	]).id("llmion:berry_stick")
	//恶魂脑沙拉
	event.shapeless('kubejs:ghast_brain_salad', [
		'minecraft:bowl', '#forge:salad_ingredients', '#forge:crops/onion', '#forge:crops/tomato', 'kubejs:experiment_110', 'twilightforest:borer_essence', 'twilightforest:transformation_powder'
	]).id("llmion:ghast_brain_salad")
	//蛀虫精华甜菜汤
	event.shapeless('kubejs:borer_tear_soup', [
		'minecraft:bowl', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'minecraft:beetroot', 'twilightforest:borer_essence'
	]).id("llmion:borer_tear_soup")
	//冰川冰淇淋
	event.shapeless('kubejs:glacier_ice_cream', [
		'minecraft:bowl', 'twilightforest:ice_bomb', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("llmion:glacier_ice_cream")
	//植物素冰淇淋
	event.shapeless('kubejs:phytochemical_ice_cream', [
		'minecraft:bowl', 'twilightforest:steeleaf_ingot', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("llmion:phytochemical_ice_cream")
	//火炬浆果冰淇淋
	event.shapeless('kubejs:torchberry_ice_cream', [
		'minecraft:bowl', 'twilightforest:torchberries', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("llmion:torchberry_ice_cream")
	//极光冰淇淋
	event.shapeless('kubejs:aurora_ice_cream', [
		'minecraft:bowl', 'twilightforest:aurora_block', '#forge:milk', 'neapolitan:ice_cubes', 'minecraft:sugar'
	]).id("llmion:aurora_ice_cream")
	//暮色冰淇淋
	event.shapeless('3x kubejs:twilight_ice_cream', [
		'kubejs:torchberry_ice_cream', 'neapolitan:chocolate_ice_cream', 'neapolitan:strawberry_ice_cream'
	]).id("llmion:twilight_ice_cream")
	//彩虹冰淇淋
	event.shapeless('3x kubejs:rainbow_ice_cream', [
		'kubejs:aurora_ice_cream', 'neapolitan:banana_ice_cream', 'neapolitan:adzuki_ice_cream'
	]).id("llmion:rainbow_ice_cream")
	//清爽冰淇淋
	event.shapeless('3x kubejs:refreshing_ice_cream', [
		'kubejs:glacier_ice_cream', 'neapolitan:mint_ice_cream', 'kubejs:phytochemical_ice_cream'
	]).id("llmion:refreshing_ice_cream")

	event.recipes.botania.elven_trade(['twilightforest:ice_bomb'], 'minecraft:blue_ice').id("llmion:ice_bomb")
	event.recipes.botania.elven_trade(['twilightforest:ice_bow'], 'minecraft:bow').id("llmion:ice_bow")
	event.recipes.botania.elven_trade(['twilightforest:ice_sword'], 'minecraft:diamond_sword').id("llmion:ice_sword")

	event.recipes.botania.mana_infusion(
		'2x touhou_little_maid:power_point',
		'minecraft:experience_bottle', 240,
		'botania:alchemy_catalyst'
	).id("llmion:touhou_power_point")




	//潜声传感器
	event.shaped('8x minecraft:sculk_sensor', [
		'AAA',
		'ASA',
		'AAA'
	], {
		A: 'minecraft:big_dripleaf',
		S: 'minecraft:redstone'
	}).id("llmion:sculk_sensor")
	//末影箱子
	remove('enderstorage:ender_chest')
	remove('enderstorage:recolour_ender_chest')
	event.stonecutting('2x enderstorage:ender_chest',
		'thermal:enderium_block'
	).id('llmion:stonecutting_ender_chest');
	//末影蓄水箱
	remove('enderstorage:ender_tank')
	remove('enderstorage:recolour_ender_tank')
	event.stonecutting('2x enderstorage:ender_tank',
		'thermal:enderium_block'
	).id('llmion:ender_tank');
	//收纳袋
	event.shaped('minecraft:bundle', [
		'ABA',
		'B B',
		'BBB'
	], {
		A: 'minecraft:string',
		B: 'minecraft:rabbit_hide'
	}).id("llmion:bundle")
	//末影袋子
	remove('enderstorage:ender_pouch')
	remove('enderstorage:recolour_ender_pouch')
	event.smithing('enderstorage:ender_pouch',
		'minecraft:bundle',
		'minecraft:ender_eye'
	).id("llmion:ender_pouch")
	//青金石合成
	event.shapeless('minecraft:lapis_lazuli', [
		'minecraft:clay_ball',
		'minecraft:blue_dye'
	]).id("llmion:lapis_lazuli")
	//史莱姆球合成
	event.shapeless('minecraft:slime_ball', [
		'farmersdelight:wheat_dough',
		'minecraft:lime_dye'
	]).id("llmion:slime_ball")

	//粉碎绯红岩
	event.recipes.createMilling([
		Item.of('create:crushed_raw_iron').withChance(0.40)
	], '#create:stone_types/crimsite').id("llmion:milling_crimsite")
	//粉碎皓蓝石
	event.recipes.createMilling([
		Item.of('create:crushed_raw_zinc').withChance(0.30)
	], '#create:stone_types/asurine').id("llmion:milling_asurine")
	//粉碎辉绿岩
	event.recipes.createMilling([
		Item.of('create:crushed_raw_copper').withChance(0.80)
	], '#create:stone_types/veridium').id("llmion:milling_veridium")
	//粉碎赭金砂
	event.recipes.createMilling([
		Item.of('create:crushed_raw_gold').withChance(0.20)
	], '#create:stone_types/ochrum').id("llmion:milling_ochrum")

	//压板
	function createPressing(input, output, id) {
		event.recipes.create.pressing(output, input).id('llmion:pressing_' + id)
	}
	createPressing('thermal:steel_ingot', 'thermal:steel_plate', 'steel_sheet')//钢板
	createPressing('thermal:tin_ingot', 'thermal:tin_plate', 'tin_sheet')//锡板
	createPressing('thermal:lead_ingot', 'thermal:lead_plate', 'lead_sheet')//铅板
	createPressing('thermal:silver_ingot', 'thermal:silver_plate', 'silver_sheet')//银板
	createPressing('thermal:nickel_ingot', 'thermal:nickel_plate', 'nickel_sheet')//镍板
	createPressing('thermal:electrum_ingot', 'thermal:electrum_plate', 'electrum_sheet')//琥珀金板
	createPressing('thermal:invar_ingot', 'thermal:invar_plate', 'invar_sheet')//殷钢板
	createPressing('thermal:constantan_ingot', 'thermal:constantan_plate', 'constantan_sheet')//康铜板
	createPressing('thermal:signalum_ingot', 'thermal:signalum_plate', 'signalum_sheet')//信素板
	createPressing('thermal:lumium_ingot', 'thermal:lumium_plate', 'lumium_sheet')//流明板
	createPressing('thermal:enderium_ingot', 'thermal:enderium_plate', 'enderium_sheet')//末影板
	createPressing('kubejs:aluminum_ingot', 'kubejs:aluminum_sheet', 'aluminum_sheet')//铝板
	createPressing('create:polished_rose_quartz', 'kubejs:rose_quartz_sheet', 'rose_quartz_sheet')//玫瑰石英板
	createPressing('kubejs:charged_constantan_ingot', 'kubejs:charged_constantan_sheet', 'charged_constantan_sheet')//充能康铜板
	createPressing('kubejs:bismuth_ingot', 'kubejs:bismuth_sheet', 'bismuth_sheet')//铋板
	createPressing('kubejs:osmium_ingot', 'kubejs:osmium_sheet', 'osmium_sheet')//锇板
	createPressing('beyond_earth:desh_ingot', 'beyond_earth:desh_plate', 'desh_plate')//戴斯板

	//缠魂
	function createHaunting(input, output, id) {
		event.custom({
			type: 'create:haunting',
			ingredients: [Ingredient.of(input).toJson()],
			results: [Item.of(output).toResultJson()]
		}).id('llmion:' + id);
	}
	createHaunting('minecraft:prismarine_shard', 'ars_nouveau:wilden_spike', 'wilden_spike')//新生魔艺掉落物
	createHaunting('minecraft:bone', 'ars_nouveau:wilden_horn', 'wilden_horn')
	createHaunting('minecraft:rotten_flesh', 'ars_nouveau:wilden_wing', 'wilden_wing')
	createHaunting('#llmion:vanilla_saplings', 'ars_nouveau:green_archwood_sapling', 'green_archwood_sapling')//新生魔艺绿树
	createHaunting('tconstruct:rose_gold_ingot', 'create:polished_rose_quartz', 'rose_gold_quartz')//玫瑰石英
	createHaunting('minecraft:bone_meal', 'botania:fertilizer', 'fertilizer')//花肥
	createHaunting('thermal:blitz_powder', 'thermal:lightning_charge', 'lightning_charge')//鸣雷弹
	createHaunting('thermal:blizz_powder', 'thermal:ice_charge', 'ice_charge')//瀑冰弹
	createHaunting('thermal:basalz_powder', 'thermal:earth_charge', 'earth_charge')//裂岩弹
	createHaunting('minecraft:blaze_powder', 'minecraft:fire_charge', 'fire_charge')//火焰弹

	function createDeploying(input, output, deploy, id) {
		event.recipes.createDeploying(output, [input, deploy]).id('llmion:deploying_' + id)
	}
	//管道升级
	createDeploying('pneumaticcraft:printed_circuit_board', 'pipez:basic_upgrade', 'thermal:nickel_nugget', 'basic_upgrade')//基础管道升级
	createDeploying('pipez:basic_upgrade', 'pipez:improved_upgrade', 'thermal:steel_nugget', 'improved_upgrade')//进阶管道升级
	createDeploying('pipez:improved_upgrade', 'pipez:advanced_upgrade', 'thermal:electrum_nugget', 'advanced_upgrade')//高级管道升级
	createDeploying('pipez:advanced_upgrade', 'pipez:ultimate_upgrade', 'thermal:signalum_nugget', 'ultimate_upgrade')//终极管道升级

	//过滤器目标工具
	event.shaped('pipez:filter_destination_tool', [
		'R',
		'S'
	], {
		R: 'minecraft:redstone_torch',
		S: 'create:sturdy_sheet'
	}).id("llmion:filter_destination_tool")
	//额外海晶碎片配方
	remove('thermal:earth_charge/prismarine_shard_from_prismarine_bricks')
	remove('thermal:earth_charge/prismarine_shard_from_prismarine')
	event.recipes.createCrushing([
		'9x minecraft:prismarine_shard'
	], 'minecraft:prismarine_bricks').id("llmion:crushing_prismarine_bricks")
	event.recipes.createCrushing([
		'4x minecraft:prismarine_shard'
	], 'minecraft:prismarine').id("llmion:crushing_prismarine")
	event.recipes.createMilling([
		'9x minecraft:prismarine_shard'
	], 'minecraft:prismarine_bricks').id("llmion:milling_prismarine_bricks")
	event.recipes.createMilling([
		'4x minecraft:prismarine_shard'
	], 'minecraft:prismarine').id("llmion:milling_prismarine")

	//压力部件
	let pm = ('kubejs:incomplete_pressure_mechanism')
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:pressure_mechanism').withChance(0.9),
		Item.of('create:powdered_obsidian').withChance(0.07),
		Item.of('create:shaft').withChance(0.03)
	],
		'thermal:steel_plate',
		[
			event.recipes.createDeploying(pm, [pm, 'pneumaticcraft:compressed_stone']),
			event.recipes.createDeploying(pm, [pm, 'create:shaft']),
			event.recipes.createDeploying(pm, [pm, 'create:powdered_obsidian'])
		]).transitionalItem(pm).loops(5).id("llmion:pressure_mechanism")
	//热力部件
	let tm = ('kubejs:incomplete_thermal_mechanism')
	event.recipes.createSequencedAssembly([
		'kubejs:thermal_mechanism'
	],
		'kubejs:aluminum_sheet',
		[
			event.recipes.createDeploying(tm, [tm, 'thermal:rf_coil']),
			event.recipes.createDeploying(tm, [tm, 'thermal:redstone_servo']),
			event.recipes.createDeploying(tm, [tm, 'pneumaticcraft:plastic']),
			event.recipes.createFilling(tm, [tm, Fluid.of('pneumaticcraft:lubricant', 125)])
		]).transitionalItem(tm).loops(5).id("llmion:thermal_mechanism")
	//压缩煤块
	let o = ('minecraft:obsidian')
	event.recipes.createSequencedAssembly([
		'kubejs:compressed_coal_block'
	],
		'minecraft:obsidian',
		[
			event.recipes.createDeploying(o, [o, 'minecraft:coal']),
			event.recipes.createPressing(o, o).processingTime(100)
		]).transitionalItem(o).loops(80).id("llmion:compressed_coal_block")

	//恩赐之石
	event.recipes.createCrushing([
		Item.of(('create:crushed_raw_copper'), 1).withChance(.20),
		Item.of(('create:crushed_raw_iron'), 1).withChance(.15),
		Item.of(('create:crushed_raw_zinc'), 1).withChance(.12),
		Item.of(('create:crushed_raw_gold'), 1).withChance(.09),
		Item.of(('create:crushed_raw_tin'), 1).withChance(.07),
		Item.of(('create:crushed_raw_nickel'), 1).withChance(.05),
		Item.of(('create:crushed_raw_silver'), 1).withChance(.03),
		Item.of(('minecraft:coal'), 1).withChance(.50),
		Item.of(('create:experience_nugget'), 1).withChance(.75),
	], 'kubejs:divine_ore').processingTime(50).id("llmion:divine_ore")

	//噩梦缠怨锭！
	event.recipes.createMixing(
		'kubejs:eviltwisting_ingot',
		[
			'minecraft:nether_brick',
			'minecraft:twisting_vines',
			'minecraft:weeping_vines',
			Fluid.of('minecraft:lava', 500)
		]
	).heated().id("llmion:eviltwisting_ingot")

	//下界合金碎片再生
	event.recipes.createCrushing([
		'create:cinder_flour',
		Item.of(('minecraft:netherite_scrap'), 1).withChance(.50)
	], 'kubejs:eviltwisting_ingot').processingTime(50).id("llmion:eviltwisting_crushing")

	//氧化铝溶液
	event.recipes.createMixing([
		'minecraft:quartz',
		Fluid.of('kubejs:alumina_solution', 50)
	], [
		'create:crushed_raw_aluminum',
		Fluid.of('minecraft:water', 25)
	]
	).heated().id("llmion:alumina_solution")

	//碎铝块
	event.recipes.createMixing([
		'2x kubejs:aluminium_chip',
		Fluid.of('minecraft:water', 25)
	], [
		'minecraft:coal',
		Fluid.of('kubejs:alumina_solution', 50)
	]
	).heated().id("llmion:coal_aluminium_chip")

	event.recipes.createMixing(
		'8x kubejs:aluminium_chip',
		[
			'thermal:tar',
			Fluid.of('kubejs:alumina_solution', 100)
		]
	).heated().id("llmion:tar_coal_aluminium_chip")

	//铝化合物
	event.shapeless('kubejs:aluminum_compound', [
		'kubejs:aluminium_chip',
		'thermal:quartz_dust'
	]).id("llmion:aluminium_compound")

	//铝
	event.smelting('kubejs:aluminum_ingot', 'kubejs:aluminum_compound').id("llmion:aluminum_ingot_from_smelting")
	event.blasting('kubejs:aluminum_ingot', 'kubejs:aluminum_compound').id("llmion:aluminum_ingot_from_blasting")

	//粗沙
	event.recipes.createEmptying([
		'kubejs:rough_sand',
		Fluid.of('kubejs:fine_sand', 100)
	], 'minecraft:sand').id("llmion:rough_sand")
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
	}).id("llmion:sand_ball");
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
	}).id("llmion:silicon_compound")
	//硅
	remove('ae2:smelting/silicon_from_certus_quartz_dust')
	remove('ae2:blasting/silicon_from_certus_quartz_dust')
	teslaCharging('kubejs:silicon_compound', 'ae2:silicon', 32000, 'silicon')

	//铝合金锭
	event.recipes.createMixing('3x kubejs:aluminium_alloy_ingot', [
		'ae2:silicon',
		'2x kubejs:aluminum_ingot'
	]).superheated().id("llmion:aluminium_alloy_ingot")

	//铋锭
	event.recipes.createMixing('kubejs:bismuth_ingot', [
		'kubejs:raw_bismuth',
		'minecraft:chorus_fruit'
	]).heated().id("llmion:bismuth_ingot")
	event.shapeless('9x kubejs:bismuth_ingot', ['kubejs:bismuth_block']).id("llmion:bismuth_ingot_from_block")
	//铋块
	event.shaped('kubejs:bismuth_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:bismuth_ingot'
	}).id("llmion:bismuth_block")
	//铋处理器
	let bc = ('kubejs:incomplete_bismuth_circuit')
	event.recipes.createSequencedAssembly([
		'kubejs:bismuth_circuit'
	],
		'kubejs:bismuth_sheet',
		[
			event.recipes.createCutting(bc, bc).processingTime(100),
			event.recipes.createDeploying(bc, [bc, 'thermal:signalum_nugget']),
			event.recipes.createPressing(bc, bc).processingTime(100)
		]).transitionalItem(bc).loops(8).id("llmion:bismuth_circuit")

	//水晶矩阵锭
	event.recipes.createMixing(
		'kubejs:crystal_matrix_ingot',
		[
			'minecraft:nether_star',
			Fluid.of('thermal:ender', 500)
		]
	).id("llmion:crystal_matrix_ingot")
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
	}).id("llmion:infinity_ingot");

	//铂锭
	event.shaped('kubejs:platinum_ingot', [
		'BA',
		'AB'
	], {
		A: 'minecraft:calcite',
		B: 'thermal:silver_nugget'
	}).id("llmion:platinum_ingot")
	event.recipes.createMixing('kubejs:platinum_ingot', [
		'minecraft:calcite',
		'thermal:silver_nugget'
	]).id("llmion:mixing_platinum_ingot")
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{ value: [Ingredient.of('thermal:silver_nugget').toJson()], count: 1 },
			{ value: [Ingredient.of('minecraft:calcite').toJson()], count: 1 }
		],
		result: [Item.of('kubejs:platinum_ingot').toResultJson()],
		energy: 6400
	}).id("llmion:smelter_platinum_ingot")
	//铂粒
	event.shaped('kubejs:platinum_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:platinum_nugget'
	}).id("llmion:platinum_ingot_from_nugget")
	event.shapeless('9x kubejs:platinum_nugget', [
		'kubejs:platinum_ingot'
	]).id("llmion:platinum_nugget_from_ingot")
	//铂块
	event.shaped('kubejs:platinum_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:platinum_ingot'
	}).id("llmion:platinum_block_from_ingot")
	event.shapeless('9x kubejs:platinum_ingot', [
		'kubejs:platinum_block'
	]).id("llmion:platinum_ingot_from_block")
	//钨锭
	event.shaped('kubejs:tungsten_ingot', [
		'BA',
		'AB'
	], {
		A: 'minecraft:blackstone',
		B: 'thermal:netherite_nugget'
	}).id("llmion:tungsten_ingot")
	event.recipes.createMixing('kubejs:tungsten_ingot', [
		'minecraft:blackstone',
		'thermal:netherite_nugget'
	]).id("llmion:mixing_tungsten_ingot")
	event.custom({
		type: 'thermal:smelter',
		ingredients: [
			{ value: [Ingredient.of('thermal:netherite_nugget').toJson()], count: 1 },
			{ value: [Ingredient.of('minecraft:blackstone').toJson()], count: 1 }
		],
		result: [Item.of('kubejs:tungsten_ingot').toResultJson()],
		energy: 6400
	}).id("llmion:smelter_tungsten_ingot")
	//钨粒
	event.shaped('kubejs:tungsten_ingot', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tungsten_nugget'
	}).id("llmion:tungsten_ingot_from_nugget")
	event.shapeless('9x kubejs:tungsten_nugget', [
		'kubejs:tungsten_ingot'
	]).id("llmion:tungsten_nugget_from_ingot")
	//钨块
	event.shaped('kubejs:tungsten_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:tungsten_ingot'
	}).id("llmion:tungsten_block_from_ingot")
	event.shapeless('9x kubejs:tungsten_ingot', [
		'kubejs:tungsten_block'
	]).id("llmion:tungsten_ingot_from_block")

	//锇锭！
	let oc = ('kubejs:osmium_compound')
	event.recipes.createSequencedAssembly([
		'4x kubejs:osmium_ingot'
	],
		'kubejs:osmium_scrap',
		[
			event.recipes.createFilling(oc, [oc, Fluid.of('tconstruct:molten_platinum', 125)]),
			event.recipes.createFilling(oc, [oc, Fluid.of('tconstruct:molten_tungsten', 25)]),
			event.recipes.createPressing(oc, oc).processingTime(100),
			event.recipes.createPressing(oc, oc).processingTime(100),
			event.recipes.createFilling(oc, [oc, Fluid.of('minecraft:water', 250)]),
			event.recipes.createCutting(oc, oc).processingTime(100)
		]).transitionalItem(oc).loops(8).id("llmion:osmium_ingot")

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
	}).id("llmion:pulverizer_uranium_dust");
	//铀块
	remove('biggerreactors:crafting/uranium_block')
	remove('biggerreactors:crafting/uranium_ingot')
	event.shaped('biggerreactors:uranium_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:uranium_ingot'
	}).id("llmion:uranium_block_from_ingot")
	event.shapeless('9x kubejs:uranium_ingot', [
		'biggerreactors:uranium_block'
	]).id("llmion:uranium_ingot_from_block")
	//熔融铀
	event.recipes.createMixing(Fluid.of('tconstruct:molten_uranium', 125), [
		'create:crushed_raw_uranium',
		'thermal:sulfur_dust'
	]).superheated().id("llmion:molten_uranium")
	//铀核心
	let uc = ('kubejs:incomplete_core_container')
	event.recipes.createSequencedAssembly([
		'kubejs:uranium_core'
	],
		'thermal:lead_plate',
		[
			event.recipes.createDeploying(uc, [uc, 'thermal:cured_rubber']),
			event.recipes.createDeploying(uc, [uc, 'pneumaticcraft:printed_circuit_board']),
			event.recipes.createFilling(uc, [uc, Fluid.of('tconstruct:molten_uranium', 125)])
		]).transitionalItem(uc).loops(1).id("llmion:uranium_core")
	//铀燃料棒
	event.recipes.createMechanicalCrafting('biggerreactors:uranium_ingot', [
		'AA',
		'AA',
		'AA',
		'AA'
	], {
		A: 'kubejs:uranium_core'
	}).id("llmion:uranium_fuel_rod")
	//贫铀
	event.recipes.createMixing('4x kubejs:depleted_uranium', [
		'biggerreactors:cyanite_ingot',
		'thermal:sulfur_dust',
		'thermal:niter_dust',
		'create:crushed_raw_uranium'
	]).id("llmion:depleted_uranium")
	//熔融钚
	event.recipes.createMixing(Fluid.of('kubejs:molten_plutonium', 5), [
		'biggerreactors:cyanite_ingot',
		'4x kubejs:depleted_uranium'
	]).superheated().id("llmion:molten_plutonium")
	//钚核心
	let pc = ('kubejs:incomplete_core_container')
	event.recipes.createSequencedAssembly([
		'kubejs:plutonium_core'
	],
		'thermal:lead_plate',
		[
			event.recipes.createDeploying(pc, [pc, 'pneumaticcraft:heat_sink']),
			event.recipes.createDeploying(pc, [pc, 'pneumaticcraft:printed_circuit_board']),
			event.recipes.createFilling(pc, [pc, Fluid.of('kubejs:molten_plutonium', 80)])
		]).transitionalItem(pc).loops(1).id("llmion:plutonium_core")
	//钚燃料棒
	event.recipes.createMechanicalCrafting('biggerreactors:blutonium_ingot', [
		'AA',
		'AA',
		'AA',
		'AA'
	], {
		A: 'kubejs:plutonium_core'
	}).id("llmion:plutonium_fuel_rod")
	//钚粒
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { tag: 'tconstruct:casts/multi_use/nugget' },
		fluid: { tag: 'forge:molten_plutonium', amount: 10 },
		result: { item: 'kubejs:plutonium_nugget' },
		cooling_time: 60
	}).id("llmion:plutonium_nugget_gold_cast")
	event.custom({
		type: 'tconstruct:casting_table',
		cast: { tag: 'tconstruct:casts/single_use/nugget' },
		cast_consumed: true,
		fluid: { tag: 'forge:molten_plutonium', amount: 10 },
		result: { item: 'kubejs:plutonium_nugget' },
		cooling_time: 60
	}).id("llmion:plutonium_nugget_sand_cast")
	//钚锭
	event.recipes.createMechanicalCrafting('kubejs:plutonium_ingot', [
		'AAAAA',
		'AABAA',
	], {
		A: 'kubejs:plutonium_nugget',
		B: 'botania:terrasteel_nugget'
	}).id("llmion:plutonium_ingot")
	//钚块
	event.shaped('kubejs:plutonium_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:plutonium_ingot'
	}).id("llmion:plutonium_block_from_ingot")
	event.shapeless('9x kubejs:plutonium_ingot', [
		'kubejs:plutonium_block'
	]).id("llmion:plutonium_ingot_from_block")

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
	}).id("llmion:lutetium_ingot");

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
	}).id("llmion:graphite_rod")


	//镀锇机壳
	event.recipes.createFilling(
		'kubejs:osmium_casing',
		[
			'pneumaticcraft:compressed_stone',
			Fluid.of('tconstruct:molten_osmium', 360)
		]).id("llmion:osmium_casing")

	//反应堆外壳
	remove('biggerreactors:crafting/reactor/reactor_casing')
	event.custom({
		type: 'create:item_application',
		ingredients: [
			Ingredient.of('kubejs:osmium_casing').toJson(),
			Ingredient.of('kubejs:zirconium_alloy_ingot').toJson()
		],
		results: [
			Item.of('biggerreactors:reactor_casing').toResultJson()
		]
	}).id("llmion:reactor_casing")
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
	}).id("llmion:reactor_glass")
	//反应堆燃料棒
	remove('biggerreactors:crafting/reactor/reactor_fuel_rod')
	event.shaped('4x biggerreactors:reactor_fuel_rod', [
		'ABA',
		'A A',
		'A A'
	], {
		A: 'kubejs:graphite_rod',
		B: 'thermal:lead_plate'
	}).id("llmion:reactor_fuel_rod")
	//反应堆控制棒
	remove('biggerreactors:crafting/reactor/reactor_control_rod')
	event.shapeless('biggerreactors:reactor_control_rod', [
		'biggerreactors:reactor_casing',
		'biggerreactors:reactor_fuel_rod',
		'pneumaticcraft:printed_circuit_board'
	]).id("llmion:reactor_control_rod")
	//反应堆终端
	remove('biggerreactors:crafting/reactor/reactor_terminal')
	event.shaped('biggerreactors:reactor_terminal', [
		' C ',
		'BAB'
	], {
		A: 'biggerreactors:reactor_casing',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:black_stained_glass_pane'
	}).id("llmion:reactor_terminal")
	//反应堆红石接口
	remove('biggerreactors:crafting/reactor/reactor_redstone_port')
	event.shaped('biggerreactors:reactor_redstone_port', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'biggerreactors:reactor_casing',
		B: 'minecraft:redstone'
	}).id("llmion:reactor_redstone_port")
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
	}).id("llmion:reactor_power_tap")
	//反应堆访问接口
	remove('biggerreactors:crafting/reactor/reactor_access_port')
	event.shapeless('biggerreactors:reactor_access_port', [
		'biggerreactors:reactor_casing',
		'create:chute'
	]).id("llmion:reactor_access_port")
	//反应堆冷却接口
	remove('biggerreactors:crafting/reactor/reactor_coolant_port')
	event.shapeless('biggerreactors:reactor_coolant_port', [
		'biggerreactors:reactor_casing',
		'create:fluid_pipe'
	]).id("llmion:reactor_coolant_port")
	//反应堆冷却液棒
	remove('biggerreactors:crafting/reactor/reactor_manifold')
	event.shaped('4x biggerreactors:reactor_manifold', [
		'ABA',
		'B B',
		'ABA'
	], {
		A: 'createaddition:iron_rod',
		B: 'kubejs:aluminum_sheet'
	}).id("llmion:reactor_manifold")

	//涡轮机外壳
	remove('biggerreactors:crafting/turbine/turbine_casing')
	event.custom({
		type: 'create:item_application',
		ingredients: [
			Ingredient.of('kubejs:osmium_casing').toJson(),
			Ingredient.of('kubejs:aluminium_alloy_ingot').toJson()
		],
		results: [
			Item.of('biggerreactors:turbine_casing').toResultJson()
		]
	}).id("llmion:turbine_casing")
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
	}).id("llmion:turbine_glass")
	//涡轮机终端
	remove('biggerreactors:crafting/turbine/turbine_terminal')
	event.shaped('biggerreactors:turbine_terminal', [
		' C ',
		'BAB'
	], {
		A: 'biggerreactors:turbine_casing',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:black_stained_glass_pane'
	}).id("llmion:turbine_terminal")
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
	}).id("llmion:turbine_power_tap")
	//反应堆冷却接口
	remove('biggerreactors:crafting/turbine/turbine_fluid_port')
	event.shapeless('biggerreactors:turbine_fluid_port', [
		'biggerreactors:turbine_casing',
		'create:fluid_pipe'
	]).id("llmion:turbine_fluid_port")
	//涡轮机叶片
	remove('biggerreactors:crafting/turbine/turbine_rotor_blade')
	event.shaped('4x biggerreactors:turbine_rotor_blade', [
		'A',
		'A',
		'A'
	], {
		A: 'thermal:steel_plate'
	}).id("llmion:turbine_rotor_blade")
	//涡轮机转轴
	remove('biggerreactors:crafting/turbine/turbine_rotor_shaft')
	event.shaped('biggerreactors:turbine_rotor_shaft', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'thermal:steel_plate',
		B: 'thermal:steel_ingot'
	}).id("llmion:turbine_rotor_shaft")
	//涡轮转子轴承
	remove('biggerreactors:crafting/turbine/turbine_rotor_bearing')
	event.shapeless('biggerreactors:turbine_rotor_bearing', [
		'biggerreactors:turbine_casing',
		'biggerreactors:turbine_rotor_shaft'
	]).id("llmion:turbine_rotor_bearing")
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
	}).id("llmion:turbine_power")

	//热交换器外壳
	remove('biggerreactors:crafting/heat_exchanger/casing')
	event.custom({
		type: 'create:item_application',
		ingredients: [
			Ingredient.of('kubejs:osmium_casing').toJson(),
			Ingredient.of('kubejs:lutetium_ingot').toJson()
		],
		results: [
			Item.of('biggerreactors:heat_exchanger_casing').toResultJson()
		]
	}).id("llmion:heat_exchanger_casing")
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
	}).id("llmion:heat_exchanger_glass")
	//热交换器终端
	remove('biggerreactors:crafting/heat_exchanger/terminal')
	event.shaped('biggerreactors:heat_exchanger_terminal', [
		' C ',
		'BAB'
	], {
		A: 'biggerreactors:heat_exchanger_casing',
		B: 'pneumaticcraft:printed_circuit_board',
		C: 'minecraft:black_stained_glass_pane'
	}).id("llmion:heat_exchanger_terminal")
	//热交换器电脑接口
	remove('biggerreactors:crafting/heat_exchanger/computer_port')
	//热交换器冷却接口
	remove('biggerreactors:crafting/heat_exchanger/fluid_port')
	event.shapeless('biggerreactors:heat_exchanger_fluid_port', [
		'biggerreactors:heat_exchanger_casing',
		'create:fluid_pipe'
	]).id("llmion:heat_exchanger_fluid_port")
	//热交换器气化通道
	remove('biggerreactors:crafting/heat_exchanger/evaporator_channel')
	event.shaped('biggerreactors:heat_exchanger_evaporator_channel', [
		'A A',
		'A A',
		'A A'
	], {
		A: 'createaddition:copper_rod'
	}).id("llmion:heat_exchanger_evaporator_channel")
	//热交换器冷凝通道
	remove('biggerreactors:crafting/heat_exchanger/condenser_channel_alt')
	event.shapeless('biggerreactors:heat_exchanger_condenser_channel', [
		'biggerreactors:heat_exchanger_evaporator_channel',
	]).id("llmion:heat_exchanger_condenser_from_evaporator")
	remove('biggerreactors:crafting/heat_exchanger/evaporator_channel_alt')
	event.shapeless('biggerreactors:heat_exchanger_evaporator_channel', [
		'biggerreactors:heat_exchanger_condenser_channel',
	]).id("llmion:heat_exchanger_evaporator_from_condenser")

	//锌粒
	event.recipes.createCrushing([
		Item.of('2x create:zinc_nugget').withChance(0.4),
		Item.of('create:zinc_nugget').withChance(0.1)
	], 'minecraft:prismarine_shard').id("llmion:zinc_nugget")

	//粗铋块
	event.shaped('kubejs:raw_bismuth_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:raw_bismuth'
	}).id("llmion:raw_bismuth_block_from_raw")
	event.shapeless('9x kubejs:raw_bismuth', [
		'kubejs:raw_bismuth_block',
	]).id("llmion:raw_bismuth_from_block")
	//粗铀块
	event.shaped('kubejs:raw_uranium_block', [
		'AAA',
		'AAA',
		'AAA'
	], {
		A: 'kubejs:raw_uranium'
	}).id("llmion:raw_uranium_block_from_raw")
	event.shapeless('9x kubejs:raw_uranium', [
		'kubejs:raw_uranium_block',
	]).id("llmion:raw_uranium_from_block")

	//锆合金
	event.recipes.createMixing('5x kubejs:zirconium_alloy_ingot', [
		'ae2:silicon',
		'botania:terrasteel_ingot',
		'3x thermal:lead_ingot'
	]).superheated().id("llmion:zirconium_alloy_ingot")

	//充能魂钢锭
	teslaCharging('tconstruct:soulsteel_ingot', 'kubejs:charged_soulsteel_ingot', 1600, 'charged_soulsteel_ingot')
	//充能康铜锭
	teslaCharging('thermal:constantan_ingot', 'kubejs:charged_constantan_ingot', 64000, 'charged_constantan_ingot')

	//其他魔艺树
	remove('ars_nouveau:manipulation_essence_to_flourishing_sapling')
	remove('ars_nouveau:manipulation_essence_to_cascading_sapling')
	remove('ars_nouveau:manipulation_essence_to_blazin_sapling')
	remove('ars_nouveau:manipulation_essence_to_vexing_sapling')
	event.recipes.botania.mana_infusion('ars_nouveau:blue_archwood_sapling', 'ars_nouveau:green_archwood_sapling', 240, 'botania:alchemy_catalyst').id("llmion:blue_archwood_sapling")
	event.recipes.botania.mana_infusion('ars_nouveau:purple_archwood_sapling', 'ars_nouveau:blue_archwood_sapling', 240, 'botania:alchemy_catalyst').id("llmion:purple_archwood_sapling")
	event.recipes.botania.mana_infusion('ars_nouveau:red_archwood_sapling', 'ars_nouveau:purple_archwood_sapling', 240, 'botania:alchemy_catalyst').id("llmion:red_archwood_sapling")
	event.recipes.botania.mana_infusion('ars_nouveau:green_archwood_sapling', 'ars_nouveau:red_archwood_sapling', 240, 'botania:alchemy_catalyst').id("llmion:mana_infusion_green_archwood_sapling")
	//活石
	remove('botania:pure_daisy/livingrock')
	event.recipes.botania.pure_daisy('botania:livingrock', 'minecraft:calcite', 30).id("llmion:livingrock")
	//活木
	remove('botania:pure_daisy/livingwood')
	event.recipes.botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:green_archwood_log', 30).id("llmion:livingwood_by_green")
	event.recipes.botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:blue_archwood_log', 30).id("llmion:livingwood_by_blue")
	event.recipes.botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:purple_archwood_log', 30).id("llmion:livingwood_by_purple")
	event.recipes.botania.pure_daisy('botania:livingwood_log', 'ars_nouveau:red_archwood_log', 30).id("llmion:livingwood_by_red")


	let types = ["three", "eight", "plus", "minus", "multiply", "divide"]
	types.forEach(e => {
		event.stonecutting('kubejs:' + e + '_cast', 'thermal:nickel_plate').id('llmion:' + e + '_cast')
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
		}).id('llmion:' + e)
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
		}).id('llmion:' + id)
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
	}).id("llmion:matrix")

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
	}).id("llmion:computation_matrix")

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

				event.recipes.createMechanicalCrafting(output, [
					'AOB',
				], {
					A: 'kubejs:' + nums[a],
					O: 'kubejs:' + opNames[op],
					B: 'kubejs:' + nums[b]
				}).id('llmion:' + nums[a] + '_' + opNames[op] + '_' + nums[b])
			}
		}
	}

	//机壳
	event.custom({
		type: 'create:item_application',
		ingredients: [
			Ingredient.of('create:andesite_casing').toJson(),
			Ingredient.of('create:shadow_steel').toJson()
		],
		results: [
			Item.of('create:shadow_steel_casing').toResultJson()
		]
	}).id("llmion:shadow_steel_casing")
	event.custom({
		type: 'create:item_application',
		ingredients: [
			Ingredient.of('create:andesite_casing').toJson(),
			Ingredient.of('create:refined_radiance').toJson()
		],
		results: [
			Item.of('create:refined_radiance_casing').toResultJson()
		]
	}).id("llmion:refined_radiance_casing")
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
	}).id("llmion:string_by_leather_scrap")
	//油漆工
	remove('yuushya:pictor')
	event.shapeless('yuushya:pictor', [
		'yuushya:bismuth_crystal'
	]).id("llmion:pictor_by_bismuth_crystal")
	event.shapeless('yuushya:bismuth_crystal', [
		'yuushya:pictor'
	]).id("llmion:bismuth_crystal_by_pictor")
	//炼
	//金
	//混
	//合
	//物
	event.recipes.create.splashing('kubejs:alchemy_1',
		'#llmion:alchemy_substrate'
	).id("llmion:alchemy_1")
	teslaCharging('kubejs:alchemy_1', 'kubejs:alchemy_2', 5000, 'alchemy_2')
	event.recipes.create.cutting('kubejs:alchemy_3',
		'kubejs:alchemy_2'
	).id("llmion:alchemy_3")
	event.custom({
		type: 'create:haunting',
		ingredients: [Ingredient.of('kubejs:alchemy_3').toJson()],
		results: [Item.of('kubejs:alchemy_4').toResultJson()]
	}).id("llmion:alchemy_4");
	event.custom({
		type: 'botania:pure_daisy',
		input: {
			type: 'block',
			block: 'kubejs:alchemy_4'
		},
		output: { name: 'kubejs:alchemy_5' }
	}).id("llmion:alchemy_5")
	event.custom({
		type: 'botania:mana_infusion',
		input: {
			item: 'kubejs:alchemy_5'
		},
		output: { item: 'kubejs:alchemy_6' },
		mana: 25000
	}).id("llmion:alchemy_6")
	event.custom({
		type: 'botania:elven_trade',
		ingredients: [{ item: 'kubejs:alchemy_6' }],
		output: [{ item: 'kubejs:alchemy_7' }]
	}).id("llmion:alchemy_7")
	event.custom({
		type: 'ars_nouveau:imbuement',
		input: { item: 'kubejs:alchemy_7' },
		output: 'kubejs:alchemy_8',
		count: 1,
		source: 1000,
		pedestalItems: []
	}).id("llmion:alchemy_8")
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [Ingredient.of('kubejs:alchemy_8')],
		results: [Item.of('kubejs:alchemy_9')],
		pressure: 2.5
	}).id("llmion:alchemy_9")
	event.custom({
		type: 'pneumaticcraft:assembly_drill',
		input: { item: 'kubejs:alchemy_9', },
		result: { item: 'kubejs:alchemy_10', },
		program: 'drill'
	}).id("llmion:alchemy_10")
	event.custom({
		type: 'pneumaticcraft:assembly_laser',
		input: { item: 'kubejs:alchemy_10', },
		result: { item: 'kubejs:alchemy_11', },
		program: 'laser'
	}).id("llmion:alchemy_11")
	event.custom({
		type: 'ae2:inscriber',
		mode: 'inscribe',
		result: { item: 'kubejs:alchemy_12' },
		ingredients: { middle: { item: 'kubejs:alchemy_11' } }
	}).id("llmion:alchemy_12")
	event.recipes.create.deploying([
		Item.of('kubejs:treasure_box').withChance(1 / 1000),
		Item.of('kubejs:alchemy_0').withChance(3 / 4),
		Item.of('farmersdelight:roast_chicken_block', 1).withChance(1 / 16),
		Item.of('minecraft:barrel', "{RepairCost:0,display:{Name:'{\"text\":\"耐心之桶\"}'}}").enchant('minecraft:looting', 2).withChance(1 / 2)
	],
		[
			'kubejs:alchemy_12',
			'kubejs:tungsten_nugget'
		]).id("llmion:treasure_box")
})