// priority: 0

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let BO = (id, x) => MOD("botania", id, x)
let AP = (id, x) => MOD("apotheosis", id, x)
//


onEvent('item.registry', event => {

	global.trades = []
	global.professions = []
	global.transactions = []

	let profession = (zhname, name, c1, c2, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
		event.create(`profession_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/profession_card")
			.texture("kubejs:item/profession_card_0")
			.displayName(`§7职业铭牌：§f${zhname}`)
			.unstackable()
	}

	let trade = (zhname, name, c1, c2, transactions, custom) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.trades.push(id)
		global.transactions[id] = transactions
		event.create(`trade_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/trade_card")
			.texture("kubejs:item/trade_card_0")
			.displayName((custom ? "" : "§6购买铭牌：§f") + zhname)
			.unstackable()
	}

	let S = (x) => TE('silver_coin', x)
	let G = (x) => TE('gold_coin', x)

	profession("农民", "Farming", 0xFFCC29, 0x81B214, [
		{ in: KJ('baked_potato_crate'), out: S(2) },
		{ in: KJ('egg_crate'), out: S(1) },
		{ in: KJ('cotton_crate'), out: S(1) },
		{ in: TE('sugar_cane_block'), out: S(1) },
		{ in: TE('bamboo_block'), out: S(1) },
		{ in: FD('carrot_crate'), out: S(1) },
		{ in: FD('potato_crate'), out: S(1) },
		{ in: FD('beetroot_crate'), out: S(1) },
		{ in: FD('cabbage_crate'), out: S(1) },
		{ in: FD('tomato_crate'), out: S(1) },
		{ in: FD('onion_crate'), out: S(1) },
		{ in: FD('rice_bag'), out: S(1) },
		{ in: FD('canvas', 32), out: S(1) },
		{ in: MC('sweet_berries', 8), out: S(1) },
		{ in: MC('cocoa_beans', 16), out: S(1) },
		{ in: MC('honey_bottle', 8), out: S(1) },
		{ in: MC('honeycomb', 4), out: S(1) },
		{ in: MC('dandelion', 16), out: S(1) },
		{ in: MC('poppy', 16), out: S(1) },
		{ in: MC('oxeye_daisy', 16), out: S(1) },
		{ in: MC('bread', 8), out: S(1) },
		{ in: MC('brown_mushroom', 8), out: S(1) },
		{ in: MC('red_mushroom', 8), out: S(1) },
		{ in: MC('kelp', 64), out: S(1) },
		{ in: MC('pumpkin', 9), out: S(1) },
		{ in: MC('#wool', 16), out: S(1) },
		{ in: MC('melon', 3), out: S(1) }
	])

	profession("木匠", "Carpentry", 0xD0AF84, 0x966C3B, [
		{ in: MC('oak_log', 64), out: S(1) },
		{ in: MC('spruce_log', 64), out: S(1) },
		{ in: MC('jungle_log', 64), out: S(1) },
		{ in: MC('dark_oak_log', 64), out: S(1) },
		{ in: MC('acacia_log', 64), out: S(2) },
		{ in: MC('birch_log', 64), out: S(2) },
		{ in: MC('crimson_stem', 64), out: S(4) },
		{ in: MC('warped_stem', 64), out: S(4) }
	])

	profession("矿工", "Mining", 0x1C1124, 0x88FFF7, [
		{ in: CR('crushed_raw_iron', 16), out: S(8) },
		{ in: CR('crushed_raw_copper', 16), out: S(8) },
		{ in: CR('crushed_raw_zinc', 16), out: S(8) },
		{ in: CR('crushed_raw_gold', 16), out: S(10) },
		{ in: CR('crushed_raw_nickel', 16), out: S(12) },
		{ in: CR('crushed_raw_lead', 16), out: S(12) },
		{ in: MC('andesite', 64), out: S(1) },
		{ in: MC('granite', 64), out: S(1) },
		{ in: MC('diorite', 64), out: S(1) },
		{ in: MC('sandstone', 64), out: S(1) },
		{ in: CR('limestone', 64), out: S(1) },
		{ in: TE('cinnabar', 8), out: S(6) },
		{ in: TE('sulfur', 16), out: S(6) },
		{ in: TE('niter', 16), out: S(6) },
		{ in: MC('lapis_lazuli', 16), out: S(6) },
		{ in: TE('apatite', 16), out: S(4) },
		{ in: TE('sapphire', 1), out: S(10) },
		{ in: TE('ruby', 1), out: S(10) },
		{ in: MC('diamond', 1), out: S(14) },
		{ in: MC('coal', 16), out: S(2) }
	])

	profession("石匠", "Masonry", 0x5E6F64, 0xBA7967, [
		{ in: SP('checker_block', 64), out: S(4) },
		{ in: TC('seared_bricks', 64), out: S(10) },
		{ in: MC('bricks', 64), out: S(6) },
		{ in: TC('mud_bricks', 64), out: S(6) },
		{ in: MC('quartz_bricks', 64), out: S(18) },
		{ in: TC('lavawood', 64), out: S(6) },
		{ in: CR('ornate_iron_window', 64), out: S(10) },
		{ in: MC('mossy_cobblestone', 64), out: S(6) },
		{ in: SP('daub_brace', 64), out: S(8) }
	])

	profession("猎人", "Hunting", 0x393E46, 0xCF0000, [
		{ in: MC('phantom_membrane'), out: S(8) },
		{ in: MC('rabbit_foot'), out: S(8) },
		{ in: MC('nether_star'), out: G(1) },
		{ in: MC('dragon_breath'), out: S(1) },
		{ in: MC('ghast_tear'), out: S(10) },
		{ in: MC('dragon_egg'), out: G(2) },
	])

	profession("厨师", "Cooking", 0xD8B384, 0xF7DAD9, [
		{ in: CR('bar_of_chocolate', 16), out: S(4) },
		{ in: CR('honeyed_apple', 16), out: S(4) },
		{ in: CR('builders_tea', 16), out: S(4) },
		{ in: FD('hot_cocoa', 16), out: S(5) },
		{ in: FD('tomato_sauce', 8), out: S(3) },
		{ in: FD('apple_pie_slice', 16), out: S(3) },
		{ in: FD('chocolate_pie_slice', 16), out: S(4) },
		{ in: FD('sweet_berry_cheesecake_slice', 17), out: S(3) },
		{ in: FD('cake_slice', 14), out: S(3) },
		{ in: FD('sweet_berry_cookie', 64), out: S(2) },
		{ in: FD('honey_cookie', 64), out: S(2) },
		{ in: MC('cookie', 64), out: S(2) },
		{ in: MC('cake', 1), out: S(4) },
		{ in: FD('melon_popsicle', 16), out: S(7) },
		{ in: FD('fruit_salad', 16), out: S(7) },
		{ in: FD('mixed_salad', 16), out: S(9) },
		{ in: FD('nether_salad', 16), out: S(5) },
		{ in: FD('barbecue_stick', 16), out: S(6) },
		{ in: FD('egg_sandwich', 16), out: S(5) },
		{ in: FD('chicken_sandwich', 16), out: S(9) },
		{ in: FD('bacon_sandwich', 16), out: S(9) },
		{ in: FD('hamburger', 16), out: S(11) },
		{ in: FD('mutton_wrap', 16), out: S(10) },
		{ in: FD('dumplings', 16), out: S(7) },
		{ in: FD('stuffed_potato', 16), out: S(6) },
		{ in: FD('cabbage_rolls', 16), out: S(5) },
		{ in: FD('beef_stew', 16), out: S(8) },
		{ in: FD('chicken_soup', 16), out: S(9) },
		{ in: MC('rabbit_stew', 16), out: S(10) },
		{ in: MC('beetroot_soup', 16), out: S(7) },
		{ in: MC('pumpkin_pie', 16), out: S(6) },
		{ in: FD('vegetable_soup', 16), out: S(9) },
		{ in: SP('pancake', 32), out: S(4) },
		{ in: FD('fish_stew', 16), out: S(9) },
		{ in: FD('fried_rice', 16), out: S(8) },
		{ in: FD('pumpkin_soup', 16), out: S(12) },
		{ in: FD('baked_cod_stew', 16), out: S(9) },
		{ in: FD('noodle_soup', 16), out: S(9) },
		{ in: FD('pasta_with_meatballs', 16), out: S(10) },
		{ in: FD('pasta_with_mutton_chop', 16), out: S(10) },
		{ in: FD('roasted_mutton_chops', 16), out: S(9) },
		{ in: FD('vegetable_noodles', 16), out: S(10) },
		{ in: FD('steak_and_potatoes', 16), out: S(9) },
		{ in: FD('ratatouille', 16), out: S(9) },
		{ in: FD('squid_ink_pasta', 16), out: S(11) },
		{ in: FD('roast_chicken', 16), out: S(7) },
		{ in: FD('stuffed_pumpkin', 16), out: S(9) },
		{ in: FD('honey_glazed_ham', 16), out: S(7) },
		{ in: FD('shepherds_pie', 16), out: S(7) },
		{ in: CR('sweet_roll', 16), out: S(4) }
	])

	let quota = 8
	profession("渔夫", "Fishing", 0x9DDFD3, 0xDBF6E9, [
		{ in: MC('cod', quota), out: S(1) },
		{ in: MC('salmon', quota), out: S(1) },
		{ in: MC('pufferfish', quota), out: S(1) },
		{ in: MC('tropical_fish', quota), out: S(1) }
	])

	profession("铁匠", "Smithing", 0xFFC93C, 0xFF7A00, [
		{ in: MC('iron_boots'), out: S(2) },
		{ in: MC('iron_leggings'), out: S(4) },
		{ in: MC('iron_chestplate'), out: S(4) },
		{ in: TC('ingot_cast'), out: S(2) },
		{ in: TC('gem_cast'), out: S(4) },
		{ in: MC('iron_helmet'), out: S(3) },
		{ in: MC('golden_boots'), out: S(4) },
		{ in: MC('golden_leggings'), out: S(7) },
		{ in: MC('golden_chestplate'), out: S(8) },
		{ in: MC('golden_helmet'), out: S(5) },
		{ in: MC('golden_apple'), out: S(10) },
		{ in: MC('arrow', 32), out: S(3) },
		{ in: MC('iron_sword'), out: S(1) },
		{ in: MC('golden_sword'), out: S(2) }
	])

	profession("魔法师", "Mage", 0xD15FEE, 0xCDB5CD, [
		{ in: BO('blaze_block'), out: S(5) },
		{ in: BO('mana_bottle'), out: S(3) },
		{ in: BO('mana_cookie'), out: S(10) },
		{ in: BO('tiny_potato'), out: S(1) },
		{ in: BO('dice'), out: G(32) },
		{ in: AP('common_material'), out: S(1) },
		{ in: AP('uncommon_material'), out: S(8) },
		{ in: AP('rare_material'), out: S(32) },
		{ in: AP('epic_material'), out: G(1) },
		{ in: AP('mythic_material'), out: G(4) },
	])

	trade("货币兑换卡", "Exchange Currencies", 0xEBA83A, 0xF4F4F4, [
		{ in: G(1), out: S(64) },
		{ in: S(64), out: G(1) }
	], true)

	let DATAGEN_QUESTS = false

	let data = []
	let group_max_width = []
	let current_group_max_width = 0
	let simulate = DATAGEN_QUESTS
	let entry_cost = 10

	let row = 0
	let col = 0
	let group = 0

	let next_group = () => {
		group++
		if (simulate)
			group_max_width.push(current_group_max_width)
		current_group_max_width = 0
		col = 0
		row++
	}

	let simple = (zhname, name, item, coin, unit, c1, c2) => {
		if (!simulate)
			trade(zhname, name, c1, c2, [{ in: unit(coin), out: item }])
		if (!DATAGEN_QUESTS)
			return

		current_group_max_width = Math.min(8, current_group_max_width + 1)
		if (simulate)
			return

		let silver = unit == S
		let split = item.split('x')
		let amount = split[0]
		let id = split.splice(1).join('x').replace(' ', '')
		let card_id = KJ("trade_card_" + name.toLowerCase().replace("'", "").split(' ').join('_'))

		if (col > 7) {
			col = 0
			row++
		}

		let x = col - (group_max_width[group] - 1) / 2
		let y = row + group / 2
		col++

		let template = `
		{
			title: "${amount}x ${zhname}"
			icon: "${id}"
			disable_toast: true
			x: ${x}d
			y: ${y}d
			shape: "hexagon"
			subtitle: "${coin} ${silver ? "银币" : "金币"}"
			tasks: [{
				type: "item"
				item: "thermal:silver_coin"
				icon: { id: "thermal:silver_coin", Count: ${entry_cost}b }
				count: ${entry_cost}L
			}]
			rewards: [
				{
					type: "item"
					auto: "enabled"
					item: "${card_id}"
				}
				{
					type: "custom"
					title: "可重复"
					icon: "thermal:machine_cycle_augment"
					tags: ["reset"]
					auto: "no_toast"
				}
			]
		}`
		data.push(template)
	}

	while (true) {
		group = 0
		row = 0

		entry_cost = 10
		simple("泥土", "Dirt", MC('dirt', 16), 2, S, 0x513825, 0xA87954)
		simple("沙子", "Sand", MC('sand', 16), 4, S, 0xC2B289, 0xD8D6B9)
		simple("沙砾", "Gravel", MC('gravel', 16), 2, S, 0x686160, 0xA19393)
		simple("黏土", "Clay", MC('clay', 16), 6, S, 0x878B95, 0x8E939D)
		simple("冰", "Ice", MC('ice', 16), 16, S, 0x7E99CF, 0xABB8D0)
		simple("黑石", "Blackstone", MC('blackstone', 16), 12, S, 0x140E0F, 0x2D2831)
		simple("砖泥", "Grout", TC('grout', 16), 12, S, 0x70737F, 0xAEB0B5)
		simple("圆石", "Cobblestone", MC('cobblestone', 16), 1, S, 0x585858, 0x646363)
		simple("花岗岩", "Granite", MC('granite', 16), 3, S, 0x563A2F, 0x9A6C5B)
		simple("闪长岩", "Diorite", MC('diorite', 16), 3, S, 0x7F7F7F, 0xD4D4D4)
		simple("安山岩", "Andesite", MC('andesite', 16), 3, S, 0x5F5F5F, 0x8E8E8E)
		simple("石灰岩", "Limestone", CR('limestone', 16), 3, S, 0xA7A89E, 0xC0C2BA)
		simple("熔渣", "Scoria", CR('scoria', 16), 3, S, 0x2A130C, 0x553427)
		simple("黑曜石", "Obsidian", MC('obsidian', 1), 8, S, 0x05030A, 0x36234C)

		next_group()
		entry_cost = 10
		simple("橡木", "Oak Log", MC('oak_log', 16), 4, S, 0x735932, 0xA88756)
		simple("白桦木", "Birch Log", MC('birch_log', 16), 4, S, 0xD6D6D2, 0xC4B079)
		simple("云杉木", "Spruce Log", MC('spruce_log', 16), 4, S, 0x523E21, 0x6F522F)
		simple("从林木", "Jungle Log", MC('jungle_log', 16), 4, S, 0x5A501D, 0x9B6E4C)
		simple("金合欢木", "Acacia Log", MC('acacia_log', 16), 4, S, 0x4F4B42, 0x9E552E)
		simple("深色橡木", "Dark Oak Log", MC('dark_oak_log', 16), 4, S, 0x2C1B0D, 0x422B15)
		simple("绯红菌柄", "Crimson Stem", MC('crimson_stem', 16), 8, S, 0x442332, 0x7A3852)
		simple("诡异菌柄", "Warped Stem", MC('warped_stem', 16), 8, S, 0x3E1E2D, 0x347776)

		next_group()
		entry_cost = 10
		simple("铁锭", "Iron Ingot", MC('iron_ingot', 8), 16, S, 0xA6A6A6, 0xD5D5D5)
		simple("锌锭", "Zinc Ingot", CR('zinc_ingot', 8), 16, S, 0x616A60, 0xD0D2C5)
		simple("铜锭", "Copper Ingot", MC('copper_ingot', 8), 16, S, 0xDD7E5D, 0xFCEFBA)
		simple("镍锭", "Nickel Ingot", TE('nickel_ingot', 8), 32, S, 0x977756, 0xE4D196)
		simple("锡锭", "Tin Ingot", TE('tin_ingot', 8), 32, S, 0x314F6F, 0x6C8998)
		simple("金锭", "Gold Ingot", MC('gold_ingot', 8), 48, S, 0xD99413, 0xFAF25E)

		simple("安山合金", "Andesite Alloy", CR('andesite_alloy', 16), 8, S, 0x505050, 0x878787)
		simple("黄铜锭", "Brass Ingot", CR('brass_ingot', 8), 48, S, 0x6F3C2D, 0xFCF085)
		simple("殷钢锭", "Invar Ingot", TE('invar_ingot', 4), 64, S, 0x406D6C, 0xC3CAC1)

		entry_cost = 10
		simple("煤炭", "Coal", MC('coal', 16), 4, S, 0x1C1C1E, 0x383D45)
		simple("燧石", "Flint", MC('flint', 16), 4, S, 0x3C3B3B, 0xA6A6A6)
		simple("朱砂", "Cinnabar", TE('cinnabar', 4), 16, S, 0xFC7781, 0xFCCED0)
		simple("红石粉", "Redstone Dust", MC('redstone', 16), 8, S, 0xA80F01, 0xFC7781)
		simple("青金石", "Lapis Lazuli", MC('lapis_lazuli', 8), 32, S, 0x335DC1, 0x7395E7)
		simple("硫磺", "Sulfur", TE('sulfur', 4), 8, S, 0xC7A94A, 0xEEF071)
		simple("磷灰石", "Apatite", TE('apatite', 4), 8, S, 0x27A9BB, 0x2CC7C9)
		simple("硝石", "Niter", TE('niter', 4), 8, S, 0x735A65, 0xB8AFAF)
		simple("下界石英", "Nether Quartz", MC('quartz', 8), 24, S, 0xB19E8F, 0xE7E2DB)
		simple("赛特斯石英", "Certus Quartz", AE2('certus_quartz_crystal', 8), 24, S, 0x91C5FC, 0xA7CBCF)
		simple("福鲁伊克斯石英", "Fluix Quartz", AE2('fluix_crystal', 8), 32, S, 0x8F5CCB, 0xFC7ED4)
		simple("硫化橡胶", "Cured Rubber", TE('cured_rubber', 6), 16, S, 0x3D363C, 0x594F55)

		next_group()
		entry_cost = 10
		simple("脚手架", "Scaffolding", MC('scaffolding', 16), 2, S, 0x7F5F41, 0xDDC683)
		simple("羊毛", "Wool", MC('white_wool', 1), 8, S, 0xBEC4C5, 0xE4E4E4)
		simple("海绵", "Sponge", MC('sponge', 1), 16, S, 0x8F8234, 0xCDCF4A)
		simple("蜘蛛网", "Cobweb", MC('cobweb', 1), 16, S, 0xC2CCCF, 0xFCFCFC)

		row += 4

		next_group()
		entry_cost = 10
		simple("稻米", "Rice", FD('rice_bag', 1), 4, S, 0x9F7653, 0xCEC6BC)
		simple("秸秆", "Straw", FD('straw', 32), 8, S, 0x623A17, 0x966537)
		simple("竹子", "Bamboo", MC('bamboo', 8), 5, S, 0x4F7416, 0x88AC5F)
		simple("苹果", "Apple", MC('apple', 8), 12, S, 0x9C1017, 0xFF1C2B)
		simple("藤蔓", "Vines", MC('vine', 4), 7, S, 0x317B10, 0x183D08)
		simple("树木肥料", "Tree Fertilizer", CR('tree_fertilizer', 1), 8, S, 0xCF8469, 0x71933A)

		next_group()
		entry_cost = 10
		simple("抹灰", "Daub", SP('daub', 16), 5, S, 0xBFBAAA, 0xCBC8B6)
		simple("通透玻璃", "Clear Glass", TC('clear_glass', 16), 4, S, 0xA9C3CF, 0xE8E8E8)
		simple("铜砖块", "Copper Shingles", CR('copper_shingles', 16), 3, S, 0xB5654B, 0xE4BB79)
		simple("焦黑石头", "Seared Stone", TC('seared_stone', 16), 32, S, 0x393734, 0x59534F)
		simple("焦灼石", "Scorched Stone", TC('scorched_stone', 16), 32, S, 0x382C25, 0x4C3F37)

		simple("灯笼", "Lantern", MC('lantern', 1), 1, S, 0x484F64, 0xF6C765)
		simple("铜灯笼", "Copper Lantern", SP('copper_lantern', 1), 1, S, 0xB36535, 0xF3B154)
		simple("黄铜灯笼", "Brass Lantern", SP('brass_lantern', 1), 1, S, 0xA47C37, 0xFAEACF)
		simple("绯红灯笼", "Crimson Lantern", SP('crimson_lantern', 1), 1, S, 0x9C0E2C, 0xE7EB56)

		next_group()
		entry_cost = 10
		simple("黏液球", "Slime Ball", MC('slime_ball', 4), 24, S, 0x4F7E48, 0x8AD480)
		simple("线", "String", MC('string', 4), 5, S, 0x2E4446, 0xD8D8D8)
		simple("羽毛", "Feather", MC('feather', 4), 6, S, 0xD0D0D0, 0xFCFCFC)
		simple("火药", "Gunpowder", MC('gunpowder', 4), 7, S, 0x535353, 0x717171)
		simple("皮革", "Leather", MC('leather', 4), 8, S, 0x873A25, 0xC45B34)
		simple("墨囊", "Ink Sac", MC('ink_sac', 4), 8, S, 0x493F49, 0x786470)
		simple("附魔之瓶", "Experience", MC('experience_bottle', 1), 8, S, 0x689AC7, 0xFFF2FF)
		simple("潜影壳", "Shulker Shell", MC('shulker_shell', 1), 2, G, 0x6B476A, 0x956895)
		simple("蜘蛛眼", "Spider Eye", MC('spider_eye', 4), 10, S, 0x64062A, 0xC25E6A)
		simple("末影珍珠", "Ender Pearl", MC('ender_pearl', 1), 48, S, 0x0B4C41, 0x2BCBAF)
		simple("腐肉", "Rotten Flesh", MC('rotten_flesh', 4), 3, S, 0xB24320, 0x695C18)
		simple("烈焰棒", "Blaze Rod", MC('blaze_rod', 1), 20, S, 0xAC3B00, 0xD5AC26)
		simple("骨头", "Bone", MC('bone', 4), 8, S, 0xC9C4A3, 0xC9C4A3)
		simple("海晶碎片", "Prismarine Shard", MC('prismarine_shard', 4), 16, S, 0x2F6355, 0x8FC0AA)
		simple("海晶砂粒", "Prismarine Crystals", MC('prismarine_crystals', 4), 24, S, 0x71A296, 0xDCE6D9)

		entry_cost = 10
		simple("幻翼膜", "Phantom Membrane", MC('phantom_membrane', 1), 48, S, 0x6E506B, 0xC1B79F)
		simple("烈焰蛋糕", "Blaze Cake", CR('blaze_cake', 1), 16, S, 0x834141, 0xFCE083)
		simple("宝石粉", "Gem Dust", AP('gem_dust', 1), 20, S, 0x262680, 0xDEC5E7)
		next_group()

		if (!DATAGEN_QUESTS)
			break
		if (!simulate)
			break
		simulate = false
	}


	if (DATAGEN_QUESTS) {
		console.log("QUEST PASTER:")
		console.log(data.join(""))
		console.log(":QUEST PASTER END")
	}

})
