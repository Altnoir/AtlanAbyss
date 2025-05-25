onEvent('recipes', event => {
    let remove = (name) => { event.remove({ id: name }) }
    const { createsifter } = event.recipes;

    //筛沙砾
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.05),
        Item.of('create:copper_nugget').withChance(0.03),
        Item.of('minecraft:gunpowder').withChance(0.10)
    ], [
        'minecraft:gravel',
        'createsifter:string_mesh'
    ]).processingTime(500).id('atlanabyss:string_mesh_gravel')

    remove('createsifter:sifting/gravel_andesite_mesh')
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.10),
        Item.of('create:copper_nugget').withChance(0.08),
        Item.of('minecraft:gunpowder').withChance(0.20)
    ], [
        'minecraft:gravel',
        'createsifter:andesite_mesh'
    ]).processingTime(500).id('atlanabyss:andesite_mesh_gravel')

    remove('createsifter:sifting/gravel_zinc_mesh')
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.15),
        Item.of('create:copper_nugget').withChance(0.12),
        Item.of('create:zinc_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.30)
    ], [
        'minecraft:gravel',
        'createsifter:zinc_mesh'
    ]).processingTime(500).id('atlanabyss:zinc_mesh_gravel')

    remove('createsifter:sifting/gravel_brass_mesh')
    createsifter.sifting([
        Item.of('minecraft:iron_nugget').withChance(0.24),
        Item.of('create:copper_nugget').withChance(0.18),
        Item.of('create:zinc_nugget').withChance(0.10),
        Item.of('minecraft:gold_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.50)
    ], [
        'minecraft:gravel',
        'createsifter:brass_mesh'
    ]).processingTime(500).id('atlanabyss:brass_mesh_gravel')

    //筛灵魂沙
    createsifter.sifting([
        Item.of('minecraft:quartz').withChance(0.05)
    ], [
        'minecraft:soul_sand',
        'createsifter:string_mesh'
    ]).processingTime(500).id('atlanabyss:string_mesh_soul_sand')

    remove('createsifter:sifting/gravel_andesite_mesh')
    createsifter.sifting([
        Item.of('minecraft:quartz').withChance(0.10),
        Item.of('kubejs:aluminum_nugget').withChance(0.02),
        Item.of('create:experience_nugget').withChance(0.1)
    ], [
        'minecraft:soul_sand',
        'createsifter:andesite_mesh'
    ]).processingTime(500).id('atlanabyss:andesite_mesh_soul_sand')

    remove('createsifter:sifting/gravel_zinc_mesh')
    createsifter.sifting([
        Item.of('minecraft:quartz').withChance(0.15),
        Item.of('kubejs:aluminum_nugget').withChance(0.05),
        Item.of('minecraft:gold_nugget').withChance(0.02),
        Item.of('create:experience_nugget').withChance(0.1)
    ], [
        'minecraft:soul_sand',
        'createsifter:zinc_mesh'
    ]).processingTime(500).id('atlanabyss:zinc_mesh_soul_sand')

    remove('createsifter:sifting/gravel_brass_mesh')
    createsifter.sifting([
        Item.of('minecraft:quartz').withChance(0.25),
        Item.of('kubejs:aluminum_nugget').withChance(0.1),
        Item.of('minecraft:gold_nugget').withChance(0.05),
        Item.of('tconstruct:cobalt_nugget').withChance(0.02),
        Item.of('create:experience_nugget').withChance(0.2)
    ], [
        'minecraft:soul_sand',
        'createsifter:brass_mesh'
    ]).processingTime(500).id('atlanabyss:brass_mesh_soul_sand')

    //筛苔藓
    createsifter.sifting([
        Item.of('minecraft:wheat_seeds').withChance(0.1),
        Item.of('kubejs:cottons_seed').withChance(0.09),
        Item.of('farmersdelight:tomato_seeds').withChance(0.08),
        Item.of('farmersdelight:cabbage_seeds').withChance(0.07),
        Item.of('farmersdelight:rice').withChance(0.06),
        Item.of('farmersdelight:onion').withChance(0.05),
        Item.of('minecraft:melon_seeds').withChance(0.04),
        Item.of('minecraft:pumpkin_seeds').withChance(0.03),
        Item.of('minecraft:cocoa_beans').withChance(0.02),
        Item.of('minecraft:beetroot_seeds').withChance(0.01),
    ], [
        'minecraft:moss_block',
        'createsifter:string_mesh'
    ]).processingTime(500).id('atlanabyss:string_mesh_moss_block')

    //筛菌丝
    createsifter.sifting([
        '5x minecraft:brown_mushroom',
        '5x minecraft:red_mushroom',
        Item.of('5x minecraft:brown_mushroom').withChance(0.5),
        Item.of('5x minecraft:red_mushroom').withChance(0.5)
    ], [
        'minecraft:mycelium',
        'createsifter:string_mesh'
    ]).processingTime(500).id('atlanabyss:string_mesh_mycelium')

    //线筛网
    remove('createsifter:string_mesh')
    event.shaped('createsifter:string_mesh', [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:string'
    }).id("atlanabyss:string_mesh")
    //安山筛网
    remove('createsifter:andesite_mesh')
    event.shaped('createsifter:andesite_mesh', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:andesite_alloy',
        B: 'createsifter:string_mesh'
    }).id("atlanabyss:andesite_mesh")
    //锌筛网
    remove('createsifter:zinc_mesh')
    event.shaped('createsifter:zinc_mesh', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:zinc_ingot',
        B: 'createsifter:andesite_mesh'
    }).id("atlanabyss:zinc_mesh")
    //锌筛网
    remove('createsifter:brass_mesh')
    event.shaped('createsifter:brass_mesh', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:brass_ingot',
        B: 'createsifter:zinc_mesh'
    }).id("atlanabyss:brass_mesh")
})