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

    let remove = (name) => {
        event.remove({ id: name })
    }

    //纠缠箱子
    remove('entangled:block')
    event.shaped('entangled:block', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:gravitation_mechanism'
    }).id("atlanabyss:entangled_block")
    //纠缠绑定器
    remove('entangled:item')
    event.shaped('entangled:item', [
        'A A',
        ' B ',
        ' B '
    ], {
        A: 'kubejs:magbismuth_sheet',
        B: 'minecraft:stick'
    }).id("atlanabyss:entangled_item")


    //nasa工作台
    remove('beyond_earth:nasa_workbench')
    mechanical_crafting('beyond_earth:nasa_workbench', [
        'ABC',
        'DDD',
        'DED',
        'DDD'
    ], {
        A: 'pneumaticcraft:assembly_drill',
        B: 'pneumaticcraft:assembly_platform',
        C: 'pneumaticcraft:assembly_laser',
        D: 'kubejs:gravitation_mechanism',
        E: 'kubejs:computation_matrix'
    }).id('atlanabyss:mechanical_crafting_nasa_workbench')
})