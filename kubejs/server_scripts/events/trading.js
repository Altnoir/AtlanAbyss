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

    global.trades.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:trade_card_' + element, transaction.in, transaction.out)
            })
    });

    global.professions.forEach(element => {
        if (global.transactions[element])
            global.transactions[element].forEach(transaction => {
                trade('kubejs:profession_card_' + element, transaction.in, transaction.out)
            })
    });
}