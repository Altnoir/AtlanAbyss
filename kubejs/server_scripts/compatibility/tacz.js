onEvent('recipes', (event) => {
	let remove = (name) => {
		event.remove({ id: name })
	}

	const { create } = event.recipes;

	// let tacRecipes = (item, input) => {
	// 	let inputList = []
	// 	remove(item)

	// 	input.forEach(list => {
	// 		let material = { item: { tag: list[0].substring(1) }, count: list[1] }
	// 		inputList.push(material)
	// 	})
	// 	event.custom({
	// 		type: 'tac:workbench',
	// 		materials: inputList,
	// 		result: { item: item }
	// 	}).id('atlanabyss:tac_workbench_' + item.replace(':', '_'))
	// }

	// //普通级
	// //手枪
	// tacRecipes('tac:m1911', [
	// 	['#forge:materials/uncommon', 1]
	// ]);
	// //冲锋枪
	// tacRecipes('tac:m1a1_smg', [
	// 	['#forge:materials/uncommon', 2]
	// ]);
	// //步枪
	// tacRecipes('tac:type81_x', [
	// 	['#forge:materials/uncommon', 3]
	// ]);
	// //霰弹枪
	// tacRecipes('tac:db_short', [
	// 	['#forge:materials/uncommon', 2]
	// ]);
	// //重型武器
	// tacRecipes('tac:dp28', [
	// 	['#forge:materials/uncommon', 4]
	// ]);

	// //稀有级
	// //手枪
	// tacRecipes('tac:glock_17', [
	// 	['#forge:materials/rare', 1],
	// ]);
	// tacRecipes('tac:cz75', [
	// 	['#forge:materials/rare', 1],
	// 	['#forge:dyes/white', 1]
	// ]);
	// tacRecipes('tac:m92fs', [
	// 	['#forge:materials/rare', 1],
	// 	['#forge:nuggets/gold', 3],
	// ]);
	// tacRecipes('tac:mk23', [
	// 	['#forge:materials/rare', 1],
	// 	['#forge:gems/amethyst', 1],
	// ]);
	// //冲锋枪
	// tacRecipes('tac:micro_uzi', [
	// 	['#forge:materials/rare', 2]
	// ]);
	// tacRecipes('tac:uzi', [
	// 	['#forge:materials/rare', 2],
	// 	['#forge:rods/iron', 1]
	// ]);
	// tacRecipes('tac:hk_mp5a5', [
	// 	['#forge:materials/rare', 2],
	// 	['#forge:plates/tin', 1]
	// ]);
	// //步枪
	// tacRecipes('tac:ak47', [
	// 	['#forge:materials/rare', 3]
	// ]);
	// tacRecipes('tac:fn_fal', [
	// 	['#forge:materials/rare', 3],
	// 	['#atlanabyss:flint', 2]
	// ]);
	// tacRecipes('tac:m16a4', [
	// 	['#forge:materials/rare', 3]
	// ]);
	// tacRecipes('tac:sks_tactical', [
	// 	['#forge:materials/rare', 3],
	// 	['#forge:gems/sulfur', 1]
	// ]);
	// //霰弹枪
	// tacRecipes('tac:m870_classic', [
	// 	['#forge:materials/rare', 3]
	// ]);
	// //狙击枪
	// tacRecipes('tac:m24', [
	// 	['#forge:materials/rare', 2],
	// 	['#forge:nuggets/zinc', 5]
	// ]);
	// //重型武器
	// tacRecipes('tac:rpk', [
	// 	['#forge:materials/rare', 4],
	// 	['#forge:rods/iron', 2]
	// ]);
	// tacRecipes('tac:rpg7', [
	// 	['#forge:materials/rare', 5]
	// ]);

	// //史诗级
	// //手枪
	// tacRecipes('tac:sti2011', [
	// 	['#forge:materials/epic', 1]
	// ]);
	// tacRecipes('tac:tti_g34', [
	// 	['#forge:materials/epic', 1],
	// 	['#forge:nuggets/brass', 4]
	// ]);
	// tacRecipes('tac:cz75_auto', [
	// 	['#forge:materials/epic', 1],
	// 	['#forge:dyes/white', 1]
	// ]);
	// tacRecipes('tac:glock_18', [
	// 	['#forge:materials/epic', 1],
	// 	['#forge:dyes/yellow', 1]
	// ]);
	// tacRecipes('tac:tec_9', [
	// 	['#forge:materials/epic', 1],
	// 	['#forge:gems/quartz', 1]
	// ]);
	// //冲锋枪
	// tacRecipes('tac:mp9', [
	// 	['#forge:materials/epic', 2],
	// ]);
	// tacRecipes('tac:p90', [
	// 	['#forge:materials/epic', 2],
	// 	['#atlanabyss:item_vault', 1]
	// ]);
	// //步枪
	// tacRecipes('tac:m4', [
	// 	['#forge:materials/epic', 3]
	// ]);
	// tacRecipes('tac:qbz_95', [
	// 	['#forge:materials/epic', 3],
	// 	['#atlanabyss:ingots/andesite_alloy', 1]
	// ]);
	// tacRecipes('tac:qbz_191', [
	// 	['#forge:materials/epic', 3],
	// 	['#minecraft:coals', 1]
	// ]);
	// tacRecipes('tac:mk47', [
	// 	['#forge:materials/epic', 3],
	// 	['#forge:ingots/zinc', 1]
	// ]);
	// tacRecipes('tac:scar_l', [
	// 	['#forge:materials/epic', 3],
	// 	['#forge:ingots/brass', 1]
	// ]);
	// tacRecipes('tac:mk14', [
	// 	['#forge:materials/rare', 3],
	// 	['#forge:dyes/white', 2]
	// ]);
	// tacRecipes('tac:spr15', [
	// 	['#forge:materials/rare', 4],
	// 	['#forge:dyes/yellow', 1]
	// ]);
	// //霰弹枪
	// tacRecipes('tac:m1014', [
	// 	['#forge:materials/epic', 4]
	// ]);
	// //狙击枪
	// tacRecipes('tac:ai_awp', [
	// 	['#forge:materials/epic', 5],
	// 	['#forge:dyes/green', 1]
	// ]);

	// //传说级
	// //手枪
	// tacRecipes('tac:timeless_50', [
	// 	['#forge:materials/legendary', 2],
	// 	['#forge:nuggets/silver', 7]
	// ]);
	// tacRecipes('tac:colt_python', [
	// 	['#forge:materials/legendary', 2]
	// ]);
	// //冲锋枪
	// tacRecipes('tac:vector45', [
	// 	['#forge:materials/legendary', 3]
	// ]);
	// tacRecipes('tac:udp_9', [
	// 	['#forge:materials/legendary', 3],
	// 	['#forge:dyes/yellow', 2]
	// ]);
	// tacRecipes('tac:mp7', [
	// 	['#forge:materials/legendary', 3],
	// 	['#forge:ingots/amethyst_bronze', 1]
	// ]);
	// //步枪
	// tacRecipes('tac:hk416_a5', [
	// 	['#forge:materials/legendary', 4]
	// ]);
	// tacRecipes('tac:mk18_mod1', [
	// 	['#forge:materials/legendary', 4],
	// 	['#forge:gems/sulfur', 2]
	// ]);
	// tacRecipes('tac:sig_mcx_spear', [
	// 	['#forge:materials/legendary', 4],
	// 	['#forge:dyes/yellow', 3]
	// ]);
	// tacRecipes('tac:hk_g3', [
	// 	['#forge:materials/legendary', 4],
	// 	['#forge:gems/niter', 3]
	// ]);
	// //狙击枪
	// tacRecipes('tac:mrad', [
	// 	['#forge:materials/legendary', 5],
	// 	['#forge:ingots/silver', 3]
	// ]);
	// tacRecipes('tac:scar_mk20', [
	// 	['#forge:materials/legendary', 5],
	// 	['#forge:ingots/lead', 2]
	// ]);
	// //重型武器
	// tacRecipes('tac:m249', [
	// 	['#forge:materials/legendary', 5],
	// 	['#atlanabyss:item_vault', 2]
	// ]);

	// //专家级
	// //手枪
	// tacRecipes('tac:deagle_357', [
	// 	['#forge:materials/ultimate', 3]
	// ]);
	// //步枪
	// tacRecipes('tac:scar_h', [
	// 	['#forge:materials/ultimate', 4]
	// ]);
	// //霰弹枪
	// tacRecipes('tac:aa_12', [
	// 	['#forge:materials/ultimate', 5]
	// ]);
	// //狙击枪
	// tacRecipes('tac:m82a2', [
	// 	['#forge:materials/ultimate', 6]
	// ]);
	// //重型武器
	// tacRecipes('tac:m60', [
	// 	['#forge:materials/ultimate', 5],
	// 	['#atlanabyss:item_vault', 3]
	// ]);

	//绿材料
	event.shaped('kubejs:uncommon_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:stripped_logs',
		B: 'create:iron_sheet',
		C: 'minecraft:iron_ingot'
	}).id('atlanabyss:uncommon_material')
	//蓝材料
	event.shaped('kubejs:rare_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:lapis_lazuli',
		B: '#forge:plates/iron',
		C: 'kubejs:uncommon_material'
	}).id('atlanabyss:rare_material')
	//紫材料
	event.shaped('kubejs:epic_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:amethyst_shard',
		B: 'create:sturdy_sheet',
		C: 'kubejs:rare_material'
	}).id('atlanabyss:epic_material')
	//黄材料
	event.shaped('kubejs:legendary_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'kubejs:aluminum_sheet',
		B: 'kubejs:osmium_sheet',
		C: 'kubejs:epic_material'
	}).id('atlanabyss:legendary_material')
	//红材料
	event.shaped('kubejs:ultimate_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'kubejs:lutetium_ingot',
		B: 'kubejs:charged_soulsteel_ingot',
		C: 'kubejs:legendary_material'
	}).id('atlanabyss:ultimate_material')

	//空弹壳
	event.stonecutting('kubejs:shell_pistol', 'create:copper_sheet').id('atlanabyss:cutting_shell_pistol');
	event.stonecutting('kubejs:shell_shotgun', 'create:copper_sheet').id('atlanabyss:cutting_shell_shotgun');
	event.stonecutting('kubejs:shell_rifle', 'create:iron_sheet').id('atlanabyss:cutting_shell_rifle');
	event.stonecutting('kubejs:shell_sniper', 'create:brass_sheet').id('atlanabyss:cutting_shell_sniper');
	event.stonecutting('kubejs:shell_magnum', 'kubejs:charged_constantan_sheet').id('atlanabyss:cutting_shell_magnum');

	// //子弹
	function ammo(shell, sheet, ammo, count, d1, d2, loop) {
		create.sequenced_assembly(Item.of('tacz:ammo', count, `{AmmoId:"${ammo}"}`), sheet, [
			create.deploying(shell, [shell, Item.of('tacz:ammo', `{AmmoId:"${ammo}"}`)]).keepHeldItem(true),
			create.deploying(shell, [shell, d1]),
			create.deploying(shell, [shell, d2]),
			create.pressing(shell, shell),
		]).transitionalItem(shell).loops(1).id('atlanabyss:sequenced_assembly_' + ammo.replace(':', '_'))
	}
	//手枪弹
	ammo('kubejs:shell_pistol', 'create:copper_sheet',
		'tacz:9mm', 30,
		'minecraft:gunpowder', 'create:copper_nugget'
	)
	ammo('kubejs:shell_pistol', 'create:copper_sheet',
		'tacz:45acp', 30,
		'minecraft:gunpowder', 'create:copper_nugget'
	)
	//步枪弹
	ammo('kubejs:shell_sniper', 'create:brass_sheet',
		'tacz:308', 10,
		'minecraft:gunpowder', 'create:brass_nugget'
	)
	ammo('kubejs:shell_rifle', 'create:iron_sheet',
		'tacz:762x39', 10,
		'minecraft:gunpowder', 'create:brass_nugget'
	)
	ammo('kubejs:shell_sniper', 'create:brass_sheet',
		'tacz:556x45', 10,
		'minecraft:gunpowder', 'create:brass_nugget'
	)
	ammo('kubejs:shell_sniper', 'create:brass_sheet',
		'bf1:792x57', 50,
		'minecraft:gunpowder', 'create:brass_nugget'
	)
	ammo('kubejs:shell_rifle', 'create:iron_sheet',
		'emxarms:339x57x', 10,
		'minecraft:gunpowder', 'ae2:tiny_tnt'
	)
	//狙击步枪弹
	ammo('kubejs:shell_rifle', 'create:iron_sheet',
		'tacz:50bmg', 5,
		'tconstruct:efln_ball', 'create:brass_nugget'
	)
	ammo('kubejs:shell_sniper', 'create:brass_sheet',
		'tacz:338', 5,
		'tconstruct:efln_ball', 'create:copper_nugget'
	)
	ammo('kubejs:shell_sniper', 'create:brass_sheet',
		'bf1:132x92', 5,
		'tconstruct:efln_ball', 'create:brass_nugget'
	)
	ammo('kubejs:shell_rifle', 'create:iron_sheet',
		'emxarms:1045x103ice', 5,
		'tconstruct:efln_ball', 'minecraft:gunpowder'
	)
	//霰弹
	ammo('kubejs:shell_shotgun', 'create:brass_sheet',
		'tacz:12g', 5,
		'minecraft:gunpowder', 'minecraft:iron_nugget'
	)
	ammo('kubejs:shell_shotgun', 'create:iron_sheet',
		'emxarms:12slug', 5,
		'minecraft:gunpowder', 'ae2:matter_ball'
	)
	//马格南
	ammo('kubejs:shell_magnum', 'kubejs:charged_constantan_sheet',
		'tacz:357mag', 10,
		'minecraft:gunpowder', 'create:iron_sheet'
	)
	ammo('kubejs:shell_magnum', 'kubejs:charged_constantan_sheet',
		'tacz:50ae', 10,
		'minecraft:gunpowder', 'create:iron_sheet'
	)

	//AE子弹
	ammo('kubejs:shell_pistol', 'create:copper_sheet',
		'applied_armorer:etched_quartz_bullet', 30,
		'minecraft:gunpowder', '#forge:gems/certus_quartz'
	)
	ammo('kubejs:shell_sniper', 'create:brass_sheet',
		'applied_armorer:hard_core_quartz_bullet', 10,
		'minecraft:gunpowder', '#forge:gems/certus_quartz'
	)
	ammo('kubejs:shell_shotgun', 'create:brass_sheet',
		'applied_armorer:cluster_quartz_bullet', 5,
		'minecraft:gunpowder', '#forge:gems/certus_quartz'
	)
	ammo('kubejs:meteosteel_sheet', 'kubejs:meteosteel_sheet',
		'applied_armorer:fluix_battery', 5,
		'#forge:dusts/redstone', '#forge:dusts/fluix'
	)
	//AE榴弹
	event.shaped(Item.of('tacz:ammo', 6, '{AmmoId:"applied_armorer:fluix_infused_grenade"}'), [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'ae2:tiny_tnt',
		B: 'kubejs:meteosteel_sheet'
	}).id('atlanabyss:applied_armorer_fluix_infused_grenade')





	//火箭弹
	event.shaped(Item.of('tacz:ammo', 2, '{AmmoId:"tacz:rpg_rocket"}'), [
		'A',
		'B',
		'B'
	], {
		A: 'minecraft:tnt',
		B: 'createaddition:iron_rod'
	}).id('atlanabyss:tacz_4rpg_rocket_2')
	event.shaped(Item.of('tacz:ammo', '{AmmoId:"tacz:rpg_rocket"}'), [
		'A',
		'B',
		'B'
	], {
		A: 'ae2:tiny_tnt',
		B: 'createaddition:iron_rod'
	}).id('atlanabyss:tacz_4rpg_rocket')

	//汽油
	create.filling(Item.of('tacz:ammo', 10, '{AmmoId:"bf1:fuel"}'), [
		'#minecraft:coals',
		Fluid.of('createaddition:seed_oil', 500)
	]).id('atlanabyss:filling_fuel')

	//榴弹
	event.shaped(Item.of('tacz:ammo', 6, '{AmmoId:"tacz:40mm"}'), [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'ae2:tiny_tnt',
		B: 'kubejs:aluminum_sheet'
	}).id('atlanabyss:tacz_40mm')

	//纸壳弹
	event.shapeless(Item.of('tacz:ammo', 8, '{AmmoId:"qkl:16mm"}'), [
		'#forge:cobblestone',
		'minecraft:paper',
		'minecraft:gunpowder'
	]).id('atlanabyss:tacz_16mm')

	//枪械工作台
	remove('tacz:gun_smith_table')
	event.shaped('tacz:gun_smith_table', [
		'AA',
		'BB'
	], {
		A: '#forge:stripped_logs',
		B: 'minecraft:iron_block'
	}).id('atlanabyss:gun_smith_table')

	//创造弹药
	event.shaped(Item.of('tacz:ammo_box', '{AllTypeCreative:1b}'), [
		'AAA',
		'A A',
		'AAA',
	], {
		A: 'kubejs:infinity_ingot'
	}).id('atlanabyss:creative_ammo_box')
})