onEvent('recipes', event => {
	let { create } = event.recipes;
	let remove = (name) => {
		event.remove({ id: name })
	}

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
		A: 'thermal:cured_rubber',
		B: 'create:iron_sheet',
		C: 'minecraft:iron_ingot'
	}).id('atlanabyss:uncommon_material')
	//蓝材料
	event.shaped('kubejs:rare_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'thermal:steel_plate',
		B: 'thermal:steel_ingot',
		C: 'kubejs:uncommon_material'
	}).id('atlanabyss:rare_material')
	//紫材料
	event.shaped('kubejs:epic_material', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'pneumaticcraft:plastic',
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
		A: 'thermal:signalum_block',
		B: 'kubejs:charged_soulsteel_ingot',
		C: 'kubejs:legendary_material'
	}).id('atlanabyss:ultimate_material')

	//子弹
	let pa = ('kubejs:pistol_shell')
	create.sequenced_assembly([
		'10x kubejs:pistol_ammo'
	], 'create:copper_sheet', [
		create.cutting(pa, pa),
		create.deploying(pa, [pa, 'minecraft:gunpowder']),
		create.pressing(pa, pa),
	]).transitionalItem(pa).loops(1).id('atlanabyss:pistol_ammo')//手枪子弹

	let sa = ('kubejs:shotgun_shell')
	create.sequenced_assembly([
		'2x kubejs:shotgun_ammo'
	], 'create:brass_sheet', [
		create.cutting(sa, sa),
		create.deploying(sa, [sa, 'minecraft:gunpowder']),
		create.deploying(sa, [sa, 'minecraft:gunpowder']),
		create.deploying(sa, [sa, 'thermal:steel_nugget']),
		create.pressing(sa, sa),
	]).transitionalItem(sa).loops(2).id('atlanabyss:shotgun_ammo')//霰弹枪子弹

	let ra = ('kubejs:rifle_shell')
	create.sequenced_assembly([
		'10x kubejs:rifle_ammo'
	], 'thermal:constantan_plate', [
		create.cutting(ra, ra),
		create.deploying(ra, [ra, 'minecraft:gunpowder']),
		create.pressing(ra, ra),
	]).transitionalItem(ra).loops(3).id('atlanabyss:rifle_ammo')//步枪子弹

	let smg = ('kubejs:smg_shell')
	create.sequenced_assembly([
		'10x kubejs:smg_ammo'
	], 'thermal:nickel_plate', [
		create.cutting(smg, smg,),
		create.deploying(smg, [smg, 'minecraft:gunpowder']),
		create.pressing(smg, smg),
	]).transitionalItem(smg).loops(1).id('atlanabyss:smg_ammo')//冲锋枪子弹

	let sna = ('kubejs:sniper_shell')
	create.sequenced_assembly([
		'10x kubejs:sniper_ammo'
	], 'thermal:steel_plate', [
		create.cutting(sna, sna,),
		create.deploying(sna, [sna, 'tconstruct:efln_ball']),
		create.pressing(sna, sna),
	]).transitionalItem(sna).loops(3).id('atlanabyss:sniper_ammo')//大口径步枪子弹

	let ma = ('kubejs:magnum_shell')
	create.sequenced_assembly([
		'kubejs:magnum_ammo'
	], 'kubejs:charged_constantan_sheet', [
		create.filling(ma, [ma, Fluid.of('thermal:glowstone', 1000)]),
		create.deploying(ma, [ma, 'tconstruct:efln_ball']),
		create.deploying(ma, [ma, 'biggerreactors:uranium_dust']),
		create.pressing(ma, ma),
		create.pressing(ma, ma),
	]).transitionalItem(ma).loops(5).id('atlanabyss:magnum_ammo')//马格南子弹


	//火箭弹
	remove('tac:rpg7_missile')
	event.shaped(Item.of('tacz:ammo', '{AmmoId:"tacz:rpg_rocket"}'), [
		'A',
		'B',
		'B'
	], {
		A: 'minecraft:tnt',
		B: 'createaddition:iron_rod'
	}).id('atlanabyss:rpg_rocket')

	//枪械工作台
	remove('tacz:gun_smith_table')
	event.shaped('tacz:gun_smith_table', [
		'AA',
		'BB'
	], {
		A: '#forge:stripped_logs',
		B: 'minecraft:iron_block'
	}).id('atlanabyss:gun_smith_table')

	//扭蛋
	event.shaped('kubejs:halo_gashapon', [
		' A ',
		'ACA',
		' B '
	], {
		A: 'ae2:certus_quartz_crystal',
		B: 'kubejs:ultimate_material',
		C: 'kubejs:infinity_ingot'
	}).id('atlanabyss:halo_gashapon')
})