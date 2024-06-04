function alchemyRecipes(event) {
	let alchemy_mix = (output, catalyst, r1, r2, amount) => {
		event.recipes.create.mixing([
			Item.of("kubejs:substrate_" + output, amount ? amount : 1),
			"kubejs:substrate_" + catalyst
		], [
			"kubejs:substrate_" + catalyst,
			"2x kubejs:substrate_" + r1,
			"kubejs:substrate_" + r2
		]).heated().id('atlanabyss:mixing_substrate_' + output + '_by_' + r1 + '_' + r2)
	}
	let alchemy_smelt = (output, catalyst, r1, r2, amount) => {
		event.recipes.thermal.smelter([
			Item.of("kubejs:substrate_" + output, amount ? amount : 1),
		], [
			"2x kubejs:substrate_" + r1,
			"kubejs:substrate_" + catalyst,
			"kubejs:substrate_" + r2
		]).energy(4000).id('atlanabyss:smelter_substrate_' + output + '_by_' + r1 + '_' + r2)
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

	alchemy_mix("amethyst", "crystal", "nether", "magenta")
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

	alchemy_smelt("silver", "metal", "tin", "certus")
	alchemy_smelt("lead", "metal", "obsidian", "prismarine")
	alchemy_smelt("aluminum", "metal", "silver", "quartz")
	alchemy_smelt("osmium", "metal", "aluminum", "prismarine")
	alchemy_smelt("bismuth", "metal", "lead", "amethyst")
	alchemy_smelt("silicon", "metal", "osmium", "bismuth")

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

	function catalyst2(output, input, id) {
		event.custom({
			type: 'createaddition:charging',
			input: { tag: input, count: 1 },
			result: { item: output, count: 1 },
			energy: 42000,
		}).id('atlanabyss:charging_' + id)
	}
	catalyst2('kubejs:substrate_igneous', 'atlanabyss:substrate_igneous', 'igneous');
	catalyst2('kubejs:substrate_volatile', 'atlanabyss:substrate_volatile', 'volatile');
	catalyst2('kubejs:substrate_metal', 'atlanabyss:substrate_metal', 'metal');

	function catalyst(out, in1, id) {
		let s = ('kubejs:catalyst_incomplete')
		event.recipes.create.sequenced_assembly([
			Item.of(out).withChance(0.01),
			Item.of('kubejs:alchemy_0').withChance(0.99)
		], 'kubejs:catalyst_empty', [
			event.recipes.createDeploying(s, [s, in1])
		]).transitionalItem(s).loops(1).id(`atlanabyss:sequenced_assembly_alchemy_${id}`)
	}
	catalyst('kubejs:substrate_herbal', '#atlanabyss:substrate_herbal', 'herbal');
	catalyst('kubejs:substrate_crystal', '#atlanabyss:substrate_crystal', 'crystal');
	catalyst('kubejs:substrate_gem', '#atlanabyss:substrate_gem', 'gem');
};
