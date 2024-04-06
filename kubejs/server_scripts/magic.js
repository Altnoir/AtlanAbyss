onEvent('recipes', event => {

    let remove = (name) => {
        event.remove({ id: name })
    }

    //萝卜水晶
    remove('umapyoi:jewel')
    event.custom({
        type: 'ars_nouveau:imbuement',
        input: {
            item: 'minecraft:carrot'
        },
        output: 'umapyoi:jewel',
        count: 1,
        source: 500,
        pedestalItems: []
    }).id("atlanabyss:uma_jewel")



    //传送门珍珠
    function gateRecipe(a, b, id) {
        remove('gateways:' + id)
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: { A: { item: a }, B: { item: b } },
            result: { item: 'gateways:gate_pearl' },
            gateway: 'gateways:' + id
        }).id("atlanabyss:" + id)
    }
    function newGate(a, b, id) {
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: ['BBB', 'BAB', 'BBB'],
            key: { A: { item: a }, B: { item: b } },
            result: { item: 'gateways:gate_pearl' },
            gateway: 'gateways:' + id
        }).id("atlanabyss:" + id)
    }

    //烈焰人
    gateRecipe('botania:mana_pearl', 'minecraft:blaze_rod', 'blaze_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:blaze_rod', 'blaze_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:blaze_rod', 'blaze_gate_large')
    //苦力怕
    gateRecipe('botania:mana_pearl', 'minecraft:gunpowder', 'creeper_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:gunpowder', 'creeper_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:gunpowder', 'creeper_gate_large')
    //末影人
    gateRecipe('botania:mana_pearl', 'minecraft:ender_pearl', 'enderman_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:ender_pearl', 'enderman_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:ender_pearl', 'enderman_gate_large')
    //恶魂
    gateRecipe('botania:mana_pearl', 'minecraft:ghast_tear', 'ghast_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:ghast_tear', 'ghast_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:ghast_tear', 'ghast_gate_large')
    //岩浆怪
    gateRecipe('botania:mana_pearl', 'minecraft:magma_cream', 'magma_cube_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:magma_cream', 'magma_cube_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:magma_cream', 'magma_cube_gate_large')
    //潜影壳
    gateRecipe('botania:mana_pearl', 'minecraft:shulker_shell', 'shulker_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:shulker_shell', 'shulker_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:shulker_shell', 'shulker_gate_large')
    //骷髅
    gateRecipe('botania:mana_pearl', 'minecraft:bone', 'skeleton_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:bone', 'skeleton_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:bone', 'skeleton_gate_large')
    //史莱姆
    gateRecipe('botania:mana_pearl', 'minecraft:slime_ball', 'slime_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:slime_ball', 'slime_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:slime_ball', 'slime_gate_large')
    //蜘蛛
    gateRecipe('botania:mana_pearl', 'minecraft:spider_eye', 'spider_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:spider_eye', 'spider_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:spider_eye', 'spider_gate_large')
    //僵尸
    gateRecipe('botania:mana_pearl', 'minecraft:rotten_flesh', 'zombie_gate_small')
    gateRecipe('waystones:warp_stone', 'minecraft:rotten_flesh', 'zombie_gate')
    gateRecipe('ae2:fluix_pearl', 'minecraft:rotten_flesh', 'zombie_gate_large')
    newGate('botania:life_essence', 'minecraft:rotten_flesh', 'zombie_gate_ultra')
    //凋零骷髅
    newGate('botania:mana_pearl', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_small')
    newGate('waystones:warp_stone', 'tconstruct:necrotic_bone', 'wither_skeleton_gate')
    newGate('ae2:fluix_pearl', 'tconstruct:necrotic_bone', 'wither_skeleton_gate_large')

    //女巫
    function gateWitch(item, id) {
        remove('gateways:' + id)
        event.custom({
            type: 'gateways:gate_recipe',
            group: 'gateways',
            pattern: ['ABA', 'BCB', 'DDD'],
            key: {
                A: { item: 'minecraft:glowstone_dust' },
                B: { item: 'minecraft:redstone' },
                C: { item: item },
                D: { item: 'minecraft:gunpowder' }
            },
            result: { item: 'gateways:gate_pearl' },
            gateway: 'gateways:' + id
        }).id("atlanabyss:" + id)
    }
    gateWitch('botania:mana_pearl', 'witch_gate_small')
    gateWitch('waystones:warp_stone', 'witch_gate')
    gateWitch('ae2:fluix_pearl', 'witch_gate_large')
})