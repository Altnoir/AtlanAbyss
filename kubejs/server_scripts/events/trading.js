function trading(event) {
    let trade = (card_id, ingredient, output) => {
        event.custom({
            type: 'thermal:press',
            ingredients: [
                Item.of(ingredient).toResultJson(),
                Ingredient.of(card_id).toJson(),
            ],
            result: [
                Item.of(output).toResultJson(),

            ],
            energy: 1000
        })
    }

    let amadron = (input, inAmount, output, level, id) => {
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
            maxStock: 1
        }).id('llmion:amadron_' + id);
    }

    global.trades.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:trade_card_' + element, transaction.in, transaction.out)
                amadron('thermal:silver_coin', 20, 'kubejs:trade_card_' + element, 3, 'trade_card_' + element)
            })
    });

    global.professions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:profession_card_' + element, transaction.in, transaction.out)
                amadron('minecraft:emerald', 12, 'kubejs:profession_card_' + element, 1, 'profession_card_' + element)
            })
    });
}