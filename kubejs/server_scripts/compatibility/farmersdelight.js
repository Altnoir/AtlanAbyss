onEvent('recipes', (event) => {
    // 去皮
    const logRecipes = [];

    const logs = [
        ['ars_nouveau:blue_archwood_log', 'ars_nouveau:stripped_blue_archwood_log'],
        ['ars_nouveau:blue_archwood_wood', 'ars_nouveau:stripped_blue_archwood_wood'],
        ['ars_nouveau:purple_archwood_log', 'ars_nouveau:stripped_purple_archwood_log'],
        ['ars_nouveau:purple_archwood_wood', 'ars_nouveau:stripped_purple_archwood_wood'],
        ['ars_nouveau:green_archwood_log', 'ars_nouveau:stripped_green_archwood_log'],
        ['ars_nouveau:green_archwood_wood', 'ars_nouveau:stripped_green_archwood_wood'],
        ['ars_nouveau:red_archwood_log', 'ars_nouveau:stripped_red_archwood_log'],
        ['ars_nouveau:red_archwood_wood', 'ars_nouveau:stripped_red_archwood_wood'],
        ['atmospheric:rosewood_log', 'atmospheric:stripped_rosewood_log'],
        ['atmospheric:rosewood', 'atmospheric:stripped_rosewood'],
        ['atmospheric:morado_log', 'atmospheric:stripped_morado_log'],
        ['atmospheric:morado_wood', 'atmospheric:stripped_morado_wood'],
        ['atmospheric:yucca_log', 'atmospheric:stripped_yucca_log'],
        ['atmospheric:yucca_wood', 'atmospheric:stripped_yucca_wood'],
        ['atmospheric:aspen_log', 'atmospheric:stripped_aspen_log'],
        ['atmospheric:watchful_aspen_log', 'atmospheric:stripped_aspen_log'],
        ['atmospheric:aspen_wood', 'atmospheric:stripped_aspen_wood'],
        ['atmospheric:watchful_aspen_wood', 'atmospheric:stripped_aspen_wood'],
        ['quark:blossom_log', 'quark:stripped_blossom_log'],
        ['quark:blossom_wood', 'quark:stripped_blossom_wood']
    ];

    for (const log of logs) {
        let recipe = event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                {
                    item: `${log[0]}`,
                },
            ],
            result: [
                {
                    item: `${log[1]}`,
                },
                {
                    item: 'farmersdelight:tree_bark',
                },
            ],
            sound: 'minecraft:item.axe.strip',
            tool: {
                type: 'farmersdelight:tool_action',
                action: 'axe_strip',
            },
        })
            .id(`atlanabyss:cutting${log[0].replace(/^\w+:/, '_')}`)
        logRecipes.push(recipe)
    }
})