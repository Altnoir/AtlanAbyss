//删！
const tagsToRemove = [
	//信标激活物品移除
	['minecraft:beacon_payment_items', 'ars_nouveau:source_gem'],
	//冰块
	['forge:ice_cubes', 'kitchenkarrot:ice_cubes'],
	//饰品tag
	['artifacts:artifacts', 'artifacts:everlasting_beef'],
	['artifacts:artifacts', 'artifacts:eternal_steak'],
	//多余的巧克力棒
	['forge:bars/chocolate', 'create:bar_of_chocolate'],
	//奶桶
	['forge:bottles', '#forge:bottles/milk'],
	['forge:bottles/milk', 'neapolitan:milk_bottle'],
	//面团
	['forge:dough', 'create:dough'],
	['forge:dough/wheat', 'create:dough'],
	//下界合金粒
	['forge:nuggets/netherite', 'tconstruct:netherite_nugget'],
	//粉
	['forge:dusts/diamond', 'createaddition:diamond_grit'],
	['forge:dusts', 'createaddition:diamond_grit'],
	['forge:dusts/ender_pearl', 'ae2:ender_dust'],
	['forge:dusts', 'ae2:ender_dust'],
	//铜粒
	['forge:nuggets/copper', 'tconstruct:copper_nugget'],
	//琥珀金
	['forge:ingots', 'createaddition:electrum_ingot'],
	['forge:ingots/electrum', 'createaddition:electrum_ingot'],
	['forge:nuggets', 'createaddition:electrum_nugget'],
	['forge:nuggets/electrum', 'createaddition:electrum_nugget'],
	['forge:plates', 'createaddition:electrum_sheet'],
	['forge:plates/electrum', 'createaddition:electrum_sheet'],
	
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
];





//加！
const tagToAdd = [
	//光环
	['atlanabyss:halos', 'yuushya:wriggle_nightbug'],
	//tac专属tag
	['atlanabyss:flint', 'minecraft:flint'],
	['atlanabyss:item_vault', 'create:item_vault'],
	['atlanabyss:ingots/andesite_alloy', 'create:andesite_alloy'],
	//信标激活物品添加
	['minecraft:beacon_payment_items', 'kubejs:aluminium_alloy_ingot'],
	//替身是个好东西之生物质
	['forge:fuels', 'createaddition:biomass'],
	['forge:fuels/bio', 'createaddition:biomass'],
	//替身是个好东西之电路板
	['forge:circuits/basic', 'kubejs:integrated_circuit'],
	//锭tag
	['forge:ingots', 'kubejs:aluminium_alloy_ingot'],//铝合金锭
	['forge:ingots', 'kubejs:meteosteel_ingot'],//陨钢锭
	['forge:ingots','kubejs:magbismuth_ingot'],//神铋锭
	['forge:ingots','kubejs:plutonium_ingot'],//钚锭
	['forge:ingots','kubejs:zirconium_alloy_ingot'],//锆合金锭
	['forge:ingots','kubejs:lutetium_ingot'],//镥锭
	['forge:ingots','kubejs:eviltwisting_ingot'],//恶魔缠怨锭
	['forge:ingots','kubejs:chlorophyll_ingot'],//叶绿锭
	['forge:ingots','kubejs:abyss_ingot'],//深渊锭
	['forge:ingots','kubejs:planetary_ingot'],//行星锭
	['forge:ingots','kubejs:calamity_ingot'],//灾厄锭
	['forge:ingots','kubejs:end_ingot'],//终末锭
	// //九头蛇肉
	// ['kubejs:hydra_meat', 'kubejs:hydra_piece'],
	// ['kubejs:hydra_meat', 'twilightforest:hydra_chop'],
	// //鹿肉
	// ['kubejs:vension_raw', 'twilightforest:raw_venison'],
	// ['kubejs:vension_raw', 'kubejs:raw_venison_rib'],
	// //牛头人肉
	// ['kubejs:meef_raw', 'twilightforest:raw_meef'],
	// ['kubejs:meef_raw', 'kubejs:raw_meef_slice'],
	// //熟牛头人肉
	// ['kubejs:meef_cooked', 'twilightforest:cooked_meef'],
	// ['kubejs:meef_cooked', 'kubejs:cooked_meef_slice'],
	//铝
	['forge:ores', 'kubejs:nether_aluminum_ore'],//矿石
	['forge:ores/aluminum', 'kubejs:nether_aluminum_ore'],
	['forge:raw_materials/aluminum', 'kubejs:raw_aluminum'],//粗矿
	['forge:storage_blocks/raw_aluminum', 'kubejs:raw_aluminum_block'],//粗矿块
	['forge:ingots', 'kubejs:aluminum_ingot'],//锭
	['forge:ingots/aluminum', 'kubejs:aluminum_ingot'],//锭
	['forge:nuggets/aluminum', 'kubejs:aluminum_nugget'],//粒
	['forge:plates/aluminum', 'kubejs:aluminum_sheet'],//板
	['forge:plates', 'kubejs:aluminum_sheet'],//板
	['forge:storage_blocks/aluminum', 'kubejs:aluminum_block'],//块
	['forge:dusts/aluminum', 'kubejs:aluminum_dust'],//粉
	//铋
	['forge:ores', 'kubejs:end_bismuth_ore'],//矿石
	['forge:ores/bismuth', 'kubejs:end_bismuth_ore'],
	['forge:raw_materials/bismuth', 'kubejs:raw_bismuth'],//粗矿
	['forge:storage_blocks/raw_bismuth', 'kubejs:raw_bismuth_block'],//粗矿块
	['forge:ingots','kubejs:bismuth_ingot'],//锭
	['forge:ingots/bismuth', 'kubejs:bismuth_ingot'],//锭
	//铀
	['forge:ores', 'kubejs:vortex_uranium_ore'],//矿石
	['forge:ores/uranium', 'kubejs:vortex_uranium_ore'],
	['forge:raw_materials/uranium', 'kubejs:raw_uranium'],//粗矿
	['forge:storage_blocks/raw_uranium', 'kubejs:raw_uranium_block'],//粗矿块
	['forge:nuggets/uranium', 'kubejs:uranium_nugget'],//粒
	['forge:ingots', 'kubejs:uranium_ingot'],//锭
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
	['forge:ingots', 'kubejs:osmium_ingot'],//锭
	['forge:plates/osmium', 'kubejs:osmium_sheet'],//板
	['forge:ores', 'kubejs:vortex_osmium_ore'],//矿石
	['forge:ores/osmium', 'kubejs:vortex_osmium_ore'],
	['forge:raw_materials/osmium', 'kubejs:raw_osmium'],//粗
	['forge:storage_blocks/raw_osmium', 'kubejs:raw_osmium_block'],
	['forge:dusts/osmium', 'kubejs:osmium_dust'],//粉
	//银
	['forge:ores/silver', 'kubejs:diorite_silver_ore'],//矿石
	//氟
	['forge:ores/fluorite', 'kubejs:permafrost_fluorite_ore'],
	//镍
	['forge:ores/nickel', 'kubejs:diorite_nickel_ore'],
	//锡
	['forge:ores/tin', 'kubejs:diorite_tin_ore'],
	//朱砂
	['forge:ores/cinnabar', 'kubejs:diorite_cinnabar_ore'],
	//枪械材料
	['atlanabyss:materials/uncommon', 'kubejs:uncommon_material'],
	['atlanabyss:materials/rare', 'kubejs:rare_material'],
	['atlanabyss:materials/epic', 'kubejs:epic_material'],
	['atlanabyss:materials/legendary', 'kubejs:legendary_material'],
	['atlanabyss:materials/ultimate', 'kubejs:ultimate_material'],
	//唱片
	['minecraft:music_discs', 'integrated_stronghold:music_disc_forlorn'],
	['minecraft:music_discs', 'integrated_stronghold:music_disc_sight'],
	//烈焰粉
	['forge:dusts/blaze', 'minecraft:blaze_powder']
];












onEvent('tags.items', event => {
	for (const [tag, item] of tagsToRemove) { event.remove(tag, item) }
	for (const [tag, item] of tagToAdd) { event.add(tag, item) }

	//无尽锭
	event.add('forge:ingots/infinity', 'kubejs:infinity_ingot')
	//圣遗物
	event.add('atlanabyss:reliquary', [
		'reliquary:mercy_cross', 'reliquary:angelheart_vial',
		'reliquary:angelic_feather', 'reliquary:emperor_chalice',
		'reliquary:ender_staff', 'reliquary:fortune_coin',
		'reliquary:hero_medallion', 'reliquary:glowing_water',
		'reliquary:magicbane', 'reliquary:harvest_rod',
		'reliquary:sojourner_staff', 'reliquary:rending_gale',
		'reliquary:ice_magus_rod', 'reliquary:pyromancer_staff',
		'reliquary:serpent_staff', 'reliquary:void_tear',
		'reliquary:rod_of_lyssa', 'reliquary:interdiction_torch',
		'reliquary:lantern_of_paranoia', 'reliquary:alkahestry_altar',
		'reliquary:wraith_node', 'reliquary:infernal_claws',
		'reliquary:kraken_shell', 'reliquary:shears_of_winter',
		'reliquary:fertile_lily_pad', 'reliquary:witherless_rose',
		'reliquary:salamander_eye', 'reliquary:twilight_cloak',
		'reliquary:infernal_tear', 'reliquary:destruction_catalyst'
	]);

	//唱片
	event.add('minecraft:creeper_drop_music_discs', [
		'botania:record_gaia_1', 'botania:record_gaia_2',
		'quark:music_disc_endermosh', 'neapolitan:music_disc_hullabaloo',
		'minecraft:music_disc_otherside', 'minecraft:music_disc_pigstep',
		'integrated_stronghold:music_disc_forlorn', 'integrated_stronghold:disc_fragment_sight'
	]);
	//专辑
	event.add('atlanabyss:albums', [
		'kubejs:album_transpain', 'kubejs:album_indigrotto',
		'kubejs:album_michelia', 'kubejs:album_growing',
		'kubejs:album_blurred_mind', 'kubejs:album_redraw',
		'kubejs:album_yelling', 'kubejs:album_nacollection4',
		'kubejs:album_kessoku_band', 'kubejs:album_adventure',
		'kubejs:album_worlds', 'kubejs:album_made_in_abyss',
		'kubejs:album_adp', 'kubejs:album_adp2',
		'kubejs:album_adp3', 'kubejs:album_adp4',
		'kubejs:album_adp5', 'kubejs:album_adp6',
		'kubejs:album_adp7', 'kubejs:album_adp8',
		'kubejs:album_adp9', 'kubejs:album_mameyudoufu',
	]);

	//烈焰人燃烧室材料标签
	event.add('atlanabyss:blaze_burner', [
		'botania:scorched_grass', 'minecraft:red_wool',
		'botania:livingwood_log', 'botania:stripped_livingwood_log',
		'botania:livingwood', 'botania:stripped_livingwood'
	])
	//石头标签
	event.add('quark:stone_tool_materials', [
		'botania:metamorphic_fungal_cobblestone'
	])
	//原木标签
	event.add('atlanabyss:unstripped_wood', [
		'minecraft:oak_log', 'minecraft:oak_wood',
		'minecraft:spruce_log', 'minecraft:spruce_wood',
		'minecraft:birch_log', 'minecraft:birch_wood',
		'minecraft:jungle_log', 'minecraft:jungle_wood',
		'minecraft:acacia_log', 'minecraft:acacia_wood',
		'minecraft:dark_oak_log', 'minecraft:dark_oak_wood',
		'minecraft:crimson_stem', 'minecraft:crimson_hyphae',
		'minecraft:warped_stem', 'minecraft:warped_hyphae',
		'ars_nouveau:blue_archwood_log', 'ars_nouveau:purple_archwood_log',
		'ars_nouveau:green_archwood_log', 'ars_nouveau:red_archwood_log',
		'atmospheric:rosewood_log', 'atmospheric:morado_log',
		'atmospheric:yucca_log', 'atmospheric:aspen_log',
		'quark:blossom_log'
	]);
	event.add('atlanabyss:vanilla_saplings', [
		'minecraft:oak_sapling', 'minecraft:spruce_sapling',
		'minecraft:birch_sapling', 'minecraft:jungle_sapling',
		'minecraft:acacia_sapling', 'minecraft:dark_oak_sapling',
		'atmospheric:rosewood_sapling', 'atmospheric:morado_sapling',
		'atmospheric:yucca_sapling', 'atmospheric:aspen_sapling'
	]);

	//刷怪蛋
	event.add('atlanabyss:spawn_eggs', [
		/.*spawn_egg$/
	])
})





onEvent('tags.blocks', event => {

	//泥土
	event.add('minecraft:dirt', [
		'botania:enchanted_soil',
		'atmospheric:crustose',
		'tconstruct:blood_ichor_slime_grass'
	])
	//石头
	event.add('forge:stone', [
		'kubejs:vortex_stone'
	])
	//树叶
	event.add('minecraft:leaves', [
		'tconstruct:blood_slime_leaves'
	])

	//机械动力扳手标签
	event.add('create:wrench_pickup', [
		/^functionalstorage:/,
		/^lightmanscurrency:/,
		'minecraft:bone_block'
	])
})

onEvent('tags.fluids', event => {
	event.remove('tconstruct:honey', 'tconstruct:honey')//蜂蜜
	event.remove('tconstruct:honey', 'tconstruct:flowing_honey')//蜂蜜
	event.add('forge:ethanol', 'createaddition:bioethanol')//乙醇
	event.add('forge:molten_plutonium', 'kubejs:molten_plutonium')//钚
	event.add('forge:lucky_fluid', 'kubejs:lucky_fluid')//幸运流体
})