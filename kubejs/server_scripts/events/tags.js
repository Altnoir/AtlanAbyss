//删！
const tagsToRemove = [
	//信标激活物品移除
	['minecraft:beacon_payment_items', 'ars_nouveau:source_gem'],
	//冰块
	['forge:ice_cubes', 'kitchenkarrot:ice_cubes'],
	//火药块
	['forge:storage_blocks/gunpowder', 'thermal:gunpowder_block'],
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
	//背包
	['curios:back', 'thermal:satchel'],
	['curios:back', 'thermal:potion_quiver'],
	//下界合金粒
	['forge:nuggets/netherite', 'tconstruct:netherite_nugget'],
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
	['forge:dusts/ludicrite', 'biggerreactors:ludicrite_dust'],
	//MEK
	['forge:dusts/wood', 'mekanism:sawdust'],//锯末
	['forge:ingots/osmium', 'mekanism:ingot_osmium'],//锭
	['forge:ingots/tin', 'mekanism:ingot_tin'],
	['forge:ingots/lead', 'mekanism:ingot_lead'],
	['forge:ingots/uranium', 'mekanism:ingot_uranium'],
	['forge:ingots/steel', 'mekanism:ingot_steel'],
	['forge:nuggets/osmium', 'mekanism:nugget_osmium'],//粒
	['forge:nuggets/tin', 'mekanism:nugget_tin'],
	['forge:nuggets/lead', 'mekanism:nugget_lead'],
	['forge:nuggets/uranium', 'mekanism:nugget_uranium'],
	['forge:nuggets/steel', 'mekanism:nugget_steel'],
	['forge:raw_materials/osmium', 'mekanism:raw_osmium'],//粗
	['forge:raw_materials/tin', 'mekanism:raw_tin'],
	['forge:raw_materials/lead', 'mekanism:raw_lead'],
	['forge:raw_materials/uranium', 'mekanism:raw_uranium'],
	['forge:storage_blocks/raw_osmium', 'mekanism:block_raw_osmium'],//粗块
	['forge:storage_blocks/raw_tin', 'mekanism:block_raw_tin'],
	['forge:storage_blocks/raw_lead', 'mekanism:block_raw_lead'],
	['forge:storage_blocks/raw_uranium', 'mekanism:block_raw_uranium'],
	['forge:storage_blocks/tin', 'mekanism:block_tin'],//块
	['forge:storage_blocks/lead', 'mekanism:block_lead'],
	['forge:storage_blocks/uranium', 'mekanism:block_uranium'],
	['forge:storage_blocks/steel', 'mekanism:block_steel'],
	['forge:storage_blocks/charcoal', 'mekanism:block_charcoal'],
	['forge:ores/osmium', 'mekanism:osmium_ore'],//矿
	['forge:ores/osmium', 'mekanism:deepslate_osmium_ore'],
	['forge:ores/tin', 'mekanism:tin_ore'],
	['forge:ores/tin', 'mekanism:deepslate_tin_ore'],
	['forge:ores/lead', 'mekanism:lead_ore'],
	['forge:ores/lead', 'mekanism:deepslate_lead_ore'],
	['forge:ores/uranium', 'mekanism:uranium_ore'],
	['forge:ores/uranium', 'mekanism:deepslate_uranium_ore'],
	['forge:dusts/iron', 'mekanism:dust_iron'],//粉
	['forge:dusts/gold', 'mekanism:dust_gold'],
	['forge:dusts/copper', 'mekanism:dust_copper'],
	['forge:dusts/tin', 'mekanism:dust_tin'],
	['forge:dusts/lead', 'mekanism:dust_lead'],
	['forge:dusts/uranium', 'mekanism:dust_uranium'],
	['forge:dusts/steel', 'mekanism:dust_steel'],
	['forge:dusts/osmium', 'mekanism:dust_osmium'],
	['forge:dusts/sulfur', 'mekanism:dust_sulfur'],
	['forge:dyes/yellow', 'mekanism:dust_sulfur'],
	['forge:dusts/obsidian', 'mekanism:dust_obsidian'],
	['forge:dusts/quartz', 'mekanism:dust_quartz'],
	['forge:dusts/emerald', 'mekanism:dust_emerald'],
	['forge:dusts/diamond', 'mekanism:dust_diamond'],
	['forge:dusts/netherite', 'mekanism:dust_netherite'],
	['forge:circuits/basic', 'mekanism:basic_control_circuit'],//电路
	['forge:circuits/advanced', 'mekanism:advanced_control_circuit'],
	['forge:circuits/elite', 'mekanism:elite_control_circuit'],
	['forge:circuits/ultimate', 'mekanism:ultimate_control_circuit'],
	//框架tag
	['industrialforegoing:machine_frame/pity', 'industrialforegoing:machine_frame_pity'],
	['industrialforegoing:machine_frame/simple', 'industrialforegoing:machine_frame_simple'],
	['industrialforegoing:machine_frame/advanced', 'industrialforegoing:machine_frame_advanced'],
	['industrialforegoing:machine_frame/supreme', 'industrialforegoing:machine_frame_supreme']
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
	['forge:circuits/advanced', 'kubejs:integrated_circuit_advanced'],
	['forge:circuits/elite', 'kubejs:integrated_circuit_elite'],
	['forge:circuits/ultimate', 'kubejs:integrated_circuit_ultimate'],
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
	//框架tag
	['industrialforegoing:machine_frame/pity', 'kubejs:steel_machine_frame'],
	['industrialforegoing:machine_frame/simple', 'kubejs:desh_machine_frame'],
	['industrialforegoing:machine_frame/advanced', 'kubejs:ostrum_machine_frame'],
	['industrialforegoing:machine_frame/supreme', 'kubejs:calorite_machine_frame'],
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
	//火成
	event.add('atlanabyss:substrate_igneous', [
		'kubejs:substrate_andesite', 'kubejs:substrate_diorite',
		'kubejs:substrate_granite', 'kubejs:substrate_cobblestone',
		'kubejs:substrate_basalt', 'kubejs:substrate_limestone'
	]);
	//不稳定
	event.add('atlanabyss:substrate_volatile', [
		'kubejs:substrate_blaze', 'kubejs:substrate_slime',
		'kubejs:substrate_nether', 'kubejs:substrate_obsidian',
		'kubejs:substrate_gunpowder', 'kubejs:substrate_prismarine'
	]);
	//金属
	event.add('atlanabyss:substrate_metal', [
		'kubejs:substrate_zinc', 'kubejs:substrate_copper',
		'kubejs:substrate_iron', 'kubejs:substrate_tin',
		'kubejs:substrate_gold', 'kubejs:substrate_nickel'
	]);
	//草药
	event.add('atlanabyss:substrate_herbal', [
		'kubejs:substrate_red', 'kubejs:substrate_orange',
		'kubejs:substrate_yellow', 'kubejs:substrate_green',
		'kubejs:substrate_blue', 'kubejs:substrate_magenta'
	]);
	//晶化
	event.add('atlanabyss:substrate_crystal', [
		'kubejs:substrate_amethyst', 'kubejs:substrate_apatite',
		'kubejs:substrate_niter', 'kubejs:substrate_quartz',
		'kubejs:substrate_sulfur', 'kubejs:substrate_certus'
	]);
	//辉光
	event.add('atlanabyss:substrate_gem', [
		'kubejs:substrate_cinnabar', 'kubejs:substrate_lapis',
		'kubejs:substrate_emerald', 'kubejs:substrate_diamond',
		'kubejs:substrate_ruby', 'kubejs:substrate_sapphire'
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

	//喝！
	// const drinkable = (name) => {
	// 	event.add('drinkit:drinkable', name)
	// }
	const thick = (name) => {
		event.add('drinkit:drinkable', name)
		event.add('drinkit:thick', name)
	}
	// drinkable('kubejs:thorn_rose_tea')
	// drinkable('kubejs:torchberry_juice')
	// drinkable('kubejs:phytochemical_juice')
	// drinkable('kubejs:glacier_ice_tea')
	// drinkable('kubejs:twilight_spring')
	// drinkable('kubejs:tear_drink')
	thick('biggerreactors:cyanite_ingot')
	// thick('kubejs:glowstew')
	// thick('kubejs:mushgloom_sauce')
	// thick('kubejs:borer_tear_soup')
	// thick('kubejs:thousand_plant_stew')

	// //交易卡tag（必须）
	// global.trades.forEach(element => {
	// 	event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
	// });

	// global.professions.forEach(element => {
	// 	event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
	// });

	// event.get('thermal:crafting/dies').add('#forge:trade_cards')
	// event.get('thermal:crafting/dies').add('#forge:profession_cards')
})





onEvent('tags.blocks', event => {
	//信标激活方块移除
	const removeBeaconBase = (name) => {
		event.remove('minecraft:beacon_base_blocks', name)
	}
	removeBeaconBase('thermal:rose_gold_block')

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
		/^thermal:machine_/,
		/^thermal:device_/,
		/^thermal:energy_cell/,
		/^thermal:fluid_cell/,
		'thermal:charge_bench',
		'thermal:tinker_bench',
		/^functionalstorage:/,
		/^lightmanscurrency:/,
		/^kubejs:alchemy_/,
		'#kubejs:substrates',
		'minecraft:bone_block'
	])
})

onEvent('tags.fluids', event => {
	//event.remove('forge:experience', 'industrialforegoing:essence')//精华液
	event.remove('forge:ender', 'thermal:ender')//谐振末影
	event.remove('forge:honey', 'cofh_core:honey')//蜂蜜
	event.remove('tconstruct:honey', 'tconstruct:honey')//蜂蜜
	event.remove('tconstruct:honey', 'tconstruct:flowing_honey')//蜂蜜
	event.remove('forge:potion', 'cofh_core:potion')//药水
	event.add('forge:ethanol', 'createaddition:bioethanol')//乙醇
	event.add('forge:molten_plutonium', 'kubejs:molten_plutonium')//钚
	event.add('forge:lucky_fluid', 'kubejs:lucky_fluid')//幸运流体
})