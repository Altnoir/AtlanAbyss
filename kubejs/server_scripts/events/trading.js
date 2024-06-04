function trading(event) {
    let trade = (card_id, ingredient, output) => {
        // event.custom({
        //     type: 'thermal:press',
        //     ingredients: [
        //         Item.of(ingredient).toResultJson(),
        //         Ingredient.of(card_id).toJson(),
        //     ],
        //     result: [
        //         Item.of(output).toResultJson(),
        //     ],
        //     energy: 1000
        // })
        event.recipes.thermal.press(output, [
            ingredient,
            card_id,
        ]).energy(1000)
    }

    let amadron = (input, inAmount, output, level, maxStock, id) => {
        event.custom({
            type: 'pneumaticcraft:amadron',
            static: false,
            input: {
                type: 'ITEM',
                id: input,
                amount: inAmount
            },
            output: {
                type: 'ITEM',
                id: output,
                amount: 1
            },
            level: level,
            maxStock: maxStock
        }).id('atlanabyss:amadron_' + id);
    }

    let next = () => Utils.random.nextInt(38);

    global.trades.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:trade_card_' + element, transaction.in, transaction.out)
                amadron('thermal:silver_coin', next() + 10, 'kubejs:trade_card_' + element, 3, 1, 'trade_card_' + element)
            })
    });

    global.professions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:profession_card_' + element, transaction.in, transaction.out)
                amadron('minecraft:emerald', next() + 5, 'kubejs:profession_card_' + element, 1, 1, 'profession_card_' + element)
            })
    });

    amadron('thermal:gold_coin', 64, 'kubejs:halo_gashapon', 2, 1, 'halo_gashapon');
    amadron('thermal:gold_coin', 8, 'minecraft:spawner', 2, 1, 'spawner');
}