onEvent('recipes', event => {
  let remove = (name) => {
    event.remove({ id: name })
  }
  //粉碎石英矿
  remove('create:compat/ae2/crushing/deepslate_quartz_ore')
  remove('create:compat/ae2/crushing/quartz_ore')
  //末影粉
  remove('create:compat/ae2/milling/ender_pearl')
  remove('ae2:inscriber/ender_dust')
  event.recipes.create.milling(['thermal:ender_pearl_dust'], 'minecraft:ender_pearl').id("llmion:milling_ender_pearl")

  event.recipes.createCrushing([
    'ae2:certus_quartz_crystal',
    '4x ae2:certus_quartz_dust',
    Item.of('ae2:certus_quartz_dust').withChance(0.5),
    Item.of('ae2:sky_dust').withChance(0.05),
    Item.of('minecraft:end_stone').withChance(0.12)
  ], 'ae2:deepslate_quartz_ore').id("llmion:crushing_certus_quartz_ore")
  //陨石粉
  remove('create:compat/ae2/milling/sky_stone_block')
  event.recipes.createCrushing([
    'ae2:sky_dust',
    Item.of('ae2:sky_stone_block').withChance(0.5)
  ], 'ae2:sky_stone_block').id("llmion:crushing_sky_stone_block")
  //陨石
  remove('ae2:blasting/sky_stone_block')
  event.recipes.createFilling(
    'ae2:sky_stone_block',
    [
      'ae2:sky_dust',
      Fluid.of('minecraft:lava', 500)
    ]).id("llmion:sky_stone_block")
  //压印模板
  event.stonecutting('ae2:calculation_processor_press', 'kubejs:circuit_scrap').id('llmion:calculation_processor_press');
  event.stonecutting('ae2:engineering_processor_press', 'kubejs:circuit_scrap').id('llmion:engineering_processor_press');
  event.stonecutting('ae2:logic_processor_press', 'kubejs:circuit_scrap').id('llmion:logic_processor_press');
  event.stonecutting('ae2:silicon_press', 'kubejs:circuit_scrap').id('llmion:silicon_press');
  //种子生长
  let grow = (to, from, via, id) => {
    event.recipes.createSequencedAssembly([to], from, [
      event.recipes.createFilling(via, [via, Fluid.of("minecraft:water", 500)]),
    ]).transitionalItem(via)
      .loops(4)
      .id('llmion:' + id)
  }
  grow('ae2:certus_quartz_crystal', 'ae2:certus_crystal_seed', Item.of('ae2:certus_crystal_seed', '{p:12000}'), 'certus_quartz_crystal')
  grow('ae2:fluix_crystal', 'ae2:fluix_crystal_seed', Item.of('ae2:fluix_crystal_seed', '{p:12000}'), 'fluix_crystal')

  //线缆
  remove('ae2:network/cables/smart_fluix_clean')
  remove('ae2:network/cables/glass_fluix_clean')
  remove('ae2:network/cables/dense_smart_fluix_clean')
  remove('ae2:network/cables/dense_covered_fluix_clean')
  remove('ae2:network/cables/covered_fluix_clean')

  let cableType = (cable) => {
    let input = '#ae2:' + cable;
    let output = Item.of('ae2:fluix_' + cable).weakNBT();
    event.custom({
      type: 'create:splashing',
      ingredients: [input],
      results: [output]
    }).id('llmion:splash_' + cable)
  }
  cableType('covered_cable')
  cableType('covered_dense_cable')
  cableType('glass_cable')
  cableType('smart_cable')
  cableType('smart_dense_cable')

  //内存卡
  event.shapeless('ae2:memory_card', [
    '#ae2:memory_cards', 'supplementaries:soap'
  ]).id('llmion:splash_memory_card')


  //石英纤维
  remove('ae2:network/parts/quartz_fiber_part')
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          Ingredient.of('tconstruct:clear_glass').toJson()
        ],
        count: 1
      },
      {
        value: [
          Ingredient.of('thermal:quartz_dust').toJson()
        ],
        count: 1
      }
    ],
    result: [
      Item.of('ae2:quartz_fiber').toResultJson()
    ],
    energy: 1200
  }).id("llmion:smelter_quartz_fiber")
  //石英玻璃
  remove('ae2:decorative/quartz_glass')
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          Ingredient.of('minecraft:sand').toJson()
        ],
        count: 1
      },
      {
        value: [
          Ingredient.of('thermal:quartz_dust').toJson()
        ],
        count: 1
      },
      {
        value: [
          Ingredient.of('thermal:quartz_dust').toJson()
        ],
        count: 1
      }
    ],
    result: [
      Item.of('ae2:quartz_glass', 2).toResultJson()
    ],
    energy: 3600
  }).id("llmion:smelter_quartz_glass")
  //电路废料额外
  event.recipes.create.milling([
    Item.of('kubejs:circuit_scrap').withChance(6 / 9),
    Item.of('pneumaticcraft:failed_pcb').withChance(3 / 9),
  ],
    'pneumaticcraft:printed_circuit_board'
  ).id("llmion:circuit_scrap")
})