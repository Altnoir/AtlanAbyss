function alchemyRecipes(event) {
	let alchemy_mix = (output, catalyst, r1, r2, amount) => {
		event.recipes.createMixing([
			Item.of("kubejs:substrate_" + output, amount ? amount : 1),
			"kubejs:substrate_" + catalyst
		], [
			"kubejs:substrate_" + catalyst,
			"2x kubejs:substrate_" + r1,
			"kubejs:substrate_" + r2]).heated()
	}
	let alchemy_smelt = (output, catalyst, r1, r2, amount) => {
		event.custom({
			type: 'thermal:smelter',
			ingredients: [
				{ value: [Ingredient.of("kubejs:substrate_" + r1).toJson()], count: 2 },
				{ value: [Ingredient.of("kubejs:substrate_" + catalyst).toJson()], count: 1 },
				{ value: [Ingredient.of("kubejs:substrate_" + r2).toJson()], count: 1 }
			],
			result: [
				Item.of("kubejs:substrate_" + output, amount ? amount : 1),
				Item.of("kubejs:substrate_" + catalyst)
			],
			energy: 4000
		})
	}

	alchemy_mix("red", "herbal", "diorite", "andesite")
	alchemy_mix("orange", "herbal", "granite", "diorite")
	alchemy_mix("yellow", "herbal", "cobblestone", "granite")
	alchemy_mix("green", "herbal", "basalt", "cobblestone")
	alchemy_mix("blue", "herbal", "limestone", "basalt")
	alchemy_mix("magenta", "herbal", "andesite", "limestone")

	alchemy_smelt("blaze", "volatile", "orange", "andesite")
	alchemy_smelt("slime", "volatile", "green", "limestone")
	alchemy_smelt("nether", "volatile", "magenta", "granite")
	alchemy_smelt("obsidian", "volatile", "magenta", "basalt")
	alchemy_smelt("gunpowder", "volatile", "yellow", "diorite")
	alchemy_smelt("prismarine", "volatile", "blue", "cobblestone")

	alchemy_mix("arcane", "crystal", "nether", "magenta")
	alchemy_mix("apatite", "crystal", "gunpowder", "orange")
	alchemy_mix("niter", "crystal", "blaze", "red")
	alchemy_mix("quartz", "crystal", "gunpowder", "orange")
	alchemy_mix("sulfur", "crystal", "slime", "yellow")
	alchemy_mix("certus", "crystal", "obsidian", "blue")

	alchemy_smelt("tin", "metal", "blaze", "prismarine")
	alchemy_smelt("copper", "metal", "nether", "certus")
	alchemy_smelt("gold", "metal", "tin", "blaze")
	alchemy_smelt("zinc", "metal", "emerald", "slime")
	alchemy_smelt("iron", "metal", "nether", "prismarine")
	alchemy_smelt("nickel", "metal", "apatite", "orange")

	alchemy_mix("cinnabar", "gem", "nickel", "certus")
	alchemy_mix("emerald", "gem", "tin", "certus")
	alchemy_mix("diamond", "gem", "gold", "sulfur")
	alchemy_mix("lapis", "gem", "copper", "nether")
	alchemy_mix("ruby", "gem", "copper", "sulfur")
	alchemy_mix("sapphire", "gem", "zinc", "gunpowder")

	alchemy_smelt("andesite", "igneous", "sapphire", "iron", 20)
	alchemy_smelt("diorite", "igneous", "lapis", "tin", 20)
	alchemy_smelt("granite", "igneous", "diamond", "copper", 20)
	alchemy_smelt("cobblestone", "igneous", "ruby", "gold", 20)
	alchemy_smelt("basalt", "igneous", "emerald", "gold", 20)
	alchemy_smelt("limestone", "igneous", "lapis", "zinc", 20)

	function alchemy(item) {
		onEvent('block.right_click', event => {
			if (event.block == 'kubejs:steel_machine' && event.block.up.id == 'kubejs:substrate_chaos' && event.player.getHeldItem(event.hand) == item) {
				if (!event.player.creativeMode) {
					event.player.mainHandItem.count -= 1
				}
				event.player.playSound('minecraft:entity.firework_rocket.blast')
				event.server.runCommandSilent(`execute in ${event.level.dimension} run particle ae2:matter_cannon_fx ${event.block.x} ${event.block.y + 0.5} ${event.block.z}`)
				event.server.runCommandSilent(`execute in ${event.level.dimension} run particle dust 255 255 255 1 ${event.block.x} ${event.block.y + 0.5} ${event.block.z} .18 .18 .18 .1 128`)
				event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:firework ${event.block.x} ${event.block.y + 0.5} ${event.block.z} .1 0 .1 .05 3`)
				event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:end_rod ${event.block.x} ${event.block.y + 0.5} ${event.block.z} .1 0 .1 .05 3`)
				event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:item ${event.block.x} ${event.block.y + 0.4} ${event.block.z} {Item:{id:"${item}",Count:2}}`)
				//event.server.runCommandSilent(`execute if data block ${event.block.down.x} ${event.block.down.y} ${event.block.down.z} Items[{Slot:0b,id:"${e.id}"}] run data modify block ${event.block.down.x} ${event.block.down.y} ${event.block.down.z} Items[0].Count set value 2`)
			}
		})
	}

	global.substrates.forEach(a => {
		a.forEach(e => {
			if (!e.ingredient)
				return
			event.custom({
				"type": "thermal:crystallizer",
				"ingredients": [Ingredient.of(e.ingredient).toJson(), { "fluid": "tconstruct:molten_glass", "amount": 500 }],
				"result": [{ "item": e.id }]
			})
			event.custom({
				"type": "thermal:sawmill",
				"ingredient": { "item": e.id },
				"result": [{ "item": e.outputItem ? e.outputItem : typeof e.ingredient == "string" ? e.ingredient : e.ingredient[0], "chance": 0.75 }],
				"energy": 2000
			})
			alchemy(e.id)
		})
	})

	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [
			{ item: 'minecraft:sand' },
			{ fluid: 'tconstruct:molten_lumium', amount: 100 }
		],
		result: [{ item: 'kubejs:catalyst_empty' }]
	})

	event.custom({
		type: 'thermal:crystallizer',
		ingredients: [
			{ item: 'minecraft:sand' },
			{ fluid: 'tconstruct:molten_obsidian', amount: 100 }
		],
		result: [{ item: 'kubejs:chaos_empty' }]
	})

	function catalyst(out, in1, in2, in3, in4, in5, in6, id) {
		let s = ('kubejs:catalyst_incomplete')
		event.recipes.createSequencedAssembly([
			Item.of(out).withChance(0.01),
			Item.of('kubejs:alchemy_0').withChance(0.03),
			Item.of(in1).withChance(0.16),
			Item.of(in2).withChance(0.16),
			Item.of(in3).withChance(0.16),
			Item.of(in4).withChance(0.16),
			Item.of(in5).withChance(0.16),
			Item.of(in6).withChance(0.16)
		],
			'kubejs:catalyst_empty',
			[
				event.recipes.createDeploying(s, [s, in1]),
				event.recipes.createDeploying(s, [s, in2]),
				event.recipes.createDeploying(s, [s, in3]),
				event.recipes.createDeploying(s, [s, in4]),
				event.recipes.createDeploying(s, [s, in5]),
				event.recipes.createDeploying(s, [s, in6])
			]).transitionalItem(s).loops(1).id(`llmion:alchemy_${id}`)
	}
	catalyst('kubejs:substrate_igneous', 'kubejs:substrate_andesite', 'kubejs:substrate_diorite', 'kubejs:substrate_granite', 'kubejs:substrate_cobblestone', 'kubejs:substrate_basalt', 'kubejs:substrate_limestone', 'igneous');
	catalyst('kubejs:substrate_herbal', 'kubejs:substrate_red', 'kubejs:substrate_orange', 'kubejs:substrate_yellow', 'kubejs:substrate_green', 'kubejs:substrate_blue', 'kubejs:substrate_magenta', 'herbal');
	catalyst('kubejs:substrate_volatile', 'kubejs:substrate_blaze', 'kubejs:substrate_slime', 'kubejs:substrate_nether', 'kubejs:substrate_obsidian', 'kubejs:substrate_gunpowder', 'kubejs:substrate_prismarine', 'volatile');
	catalyst('kubejs:substrate_crystal', 'kubejs:substrate_arcane', 'kubejs:substrate_apatite', 'kubejs:substrate_niter', 'kubejs:substrate_quartz', 'kubejs:substrate_sulfur', 'kubejs:substrate_certus', 'crystal');
	catalyst('kubejs:substrate_metal', 'kubejs:substrate_zinc', 'kubejs:substrate_copper', 'kubejs:substrate_iron', 'kubejs:substrate_tin', 'kubejs:substrate_gold', 'kubejs:substrate_nickel', 'metal');
	catalyst('kubejs:substrate_gem', 'kubejs:substrate_cinnabar', 'kubejs:substrate_lapis', 'kubejs:substrate_emerald', 'kubejs:substrate_diamond', 'kubejs:substrate_ruby', 'kubejs:substrate_sapphire', 'gem');

	let b = ('kubejs:chaos_incomplete')
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:substrate_chaos').withChance(0.01),
		Item.of('kubejs:alchemy_0').withChance(0.03),
		Item.of('kubejs:substrate_igneous').withChance(0.16),
		Item.of('kubejs:substrate_herbal').withChance(0.16),
		Item.of('kubejs:substrate_volatile').withChance(0.16),
		Item.of('kubejs:substrate_crystal').withChance(0.16),
		Item.of('kubejs:substrate_metal').withChance(0.16),
		Item.of('kubejs:substrate_gem').withChance(0.16)
	],
		'kubejs:chaos_empty',
		[
			event.recipes.createDeploying(b, [b, 'kubejs:substrate_igneous']),
			event.recipes.createDeploying(b, [b, 'kubejs:substrate_herbal']),
			event.recipes.createDeploying(b, [b, 'kubejs:substrate_volatile']),
			event.recipes.createDeploying(b, [b, 'kubejs:substrate_crystal']),
			event.recipes.createDeploying(b, [b, 'kubejs:substrate_metal']),
			event.recipes.createDeploying(b, [b, 'kubejs:substrate_gem'])
		]).transitionalItem(b).loops(1).id("llmion:alchemy_chaos")
};
