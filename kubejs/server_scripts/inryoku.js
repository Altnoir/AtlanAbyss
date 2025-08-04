onEvent('recipes', event => {
    const { create, botania } = event.recipes;
    let remove = (name) => {
        event.remove({ id: name })
    }
 
    //淵骸
    botania.pure_daisy('minecraft:ancient_debris',
        'kubejs:antiquity_debris',
        100).id('atlanabyss:pure_daisy_antiquity_debris')
    //铋铝
    botania.pure_daisy('kubejs:aluminum_block',
        'kubejs:bismuth_block',
        100).id('atlanabyss:pure_daisy_bismuth_block')
    //漩涡幸运方块
    botania.pure_daisy('kubejs:lucky_block',
        'kubejs:vortex_stone',
        100).id('atlanabyss:pure_daisy_vortex_stone')
})