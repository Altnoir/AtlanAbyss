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