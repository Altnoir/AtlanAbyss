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
  //谐振仓
  remove('ae2:network/blocks/energy_vibration_chamber')
  //充能器
  remove('ae2:network/blocks/crystal_processing_charger')
  //粉碎石英矿
  remove('create:compat/ae2/crushing/deepslate_quartz_ore')
  remove('create:compat/ae2/crushing/quartz_ore')
  //赛特斯石英粉
  remove('ae2:inscriber/certus_quartz_dust')
  remove('ae2:inscriber/fluix_dust')
  //末影粉
  remove('create:compat/ae2/milling/ender_pearl')
  remove('ae2:inscriber/ender_dust')
  milling(['thermal:ender_pearl_dust'], 'minecraft:ender_pearl').id("atlanabyss:milling_ender_pearl")

  crushing([
    'ae2:certus_quartz_crystal',
    '4x ae2:certus_quartz_dust',
    Item.of('ae2:certus_quartz_dust').withChance(0.5),
    Item.of('ae2:sky_dust').withChance(0.05),
    Item.of('minecraft:end_stone').withChance(0.12)
  ], 'ae2:deepslate_quartz_ore').id("atlanabyss:crushing_certus_quartz_ore")
  //陨石粉
  remove('ae2:inscriber/sky_stone_dust')
  crushing([
    'ae2:sky_dust',
    Item.of('ae2:sky_stone_block').withChance(0.5)
  ], 'ae2:sky_stone_block').id("atlanabyss:crushing_sky_stone_block")
  //陨石
  remove('ae2:blasting/sky_stone_block')
  filling(
    'ae2:sky_stone_block',
    [
      'ae2:sky_dust',
      Fluid.of('minecraft:lava', 500)
    ]).id("atlanabyss:sky_stone_block")
  //压印模板
  event.stonecutting('ae2:calculation_processor_press', 'kubejs:circuit_scrap').id('atlanabyss:calculation_processor_press');
  event.stonecutting('ae2:engineering_processor_press', 'kubejs:circuit_scrap').id('atlanabyss:engineering_processor_press');
  event.stonecutting('ae2:logic_processor_press', 'kubejs:circuit_scrap').id('atlanabyss:logic_processor_press');
  //种子生长
  let grow = (to, from, via, id) => {
    sequenced_assembly([to], from, [
      filling(via, [via, Fluid.of("minecraft:water", 500)]),
    ]).transitionalItem(via)
      .loops(4)
      .id('atlanabyss:' + id)
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
    }).id('atlanabyss:splash_' + cable)
  }
  cableType('covered_cable')
  cableType('covered_dense_cable')
  cableType('glass_cable')
  cableType('smart_cable')
  cableType('smart_dense_cable')

  //内存卡
  event.shapeless('ae2:memory_card', [
    '#ae2:memory_cards', 'supplementaries:soap'
  ]).id('atlanabyss:splash_memory_card')


  //石英纤维
  remove('ae2:network/parts/quartz_fiber_part')
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [Ingredient.of('tconstruct:clear_glass').toJson()],
        count: 1
      },
      {
        value: [Ingredient.of('thermal:quartz_dust').toJson()],
        count: 1
      }
    ],
    result: [
      Item.of('ae2:quartz_fiber').toResultJson()
    ],
    energy: 1200
  }).id("atlanabyss:smelter_quartz_fiber")
  //石英玻璃
  remove('ae2:decorative/quartz_glass')
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [Ingredient.of('minecraft:sand').toJson()],
        count: 1
      },
      {
        value: [Ingredient.of('thermal:quartz_dust').toJson()],
        count: 2
      }
    ],
    result: [
      Item.of('ae2:quartz_glass', 2).toResultJson()
    ],
    energy: 3600
  }).id("atlanabyss:smelter_quartz_glass")
  //电路废料额外
  milling([
    Item.of('kubejs:circuit_scrap').withChance(6 / 9),
    Item.of('pneumaticcraft:failed_pcb').withChance(3 / 9),
  ],
    'pneumaticcraft:printed_circuit_board'
  ).id("atlanabyss:circuit_scrap")
  //逻辑电路板
  remove('ae2:inscriber/logic_processor_print')
  event.custom({
    type: 'ae2:inscriber',
    mode: 'inscribe',
    result: { item: 'ae2:printed_logic_processor' },
    ingredients: {
      middle: { item: 'tconstruct:rose_gold_ingot' },
      top: { item: 'ae2:logic_processor_press' }
    }
  }).id("atlanabyss:inscriber_logic_processor_print")

  //ME控制器
  remove('ae2:network/blocks/controller')
  event.shaped('ae2:controller', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'kubejs:computer_mechanism',
    B: 'ae2:fluix_block'
  }).id('atlanabyss:ae_controller');

  remove('ae2:network/blocks/inscribers')
  remove('ae2:network/blocks/storage_drive')
  remove('ae2:network/parts/panels_semi_dark_monitor')
  remove('ae2:network/crafting/cpu_crafting_unit')
  remove('ae2:network/blocks/energy_energy_cell')
  event.stonecutting(
    'ae2:inscriber',
    'ae2:controller').id('atlanabyss:ae_inscriber');//压印器
  event.stonecutting(
    'ae2:drive',
    'ae2:controller').id('atlanabyss:ae_drive');//驱动器
  event.stonecutting(
    '8x ae2:semi_dark_monitor',
    'ae2:controller').id('atlanabyss:semi_dark_monitor');//照明面板
  event.stonecutting(
    'ae2:crafting_unit',
    'ae2:controller').id('atlanabyss:ae_crafting_unit');//合成单元
  event.stonecutting(
    'ae2:energy_cell',
    'ae2:controller').id('atlanabyss:ae_energy_cell');//能源元件

  //硅板
  remove('ae2:inscriber/silicon_print')
  remove('ae2:inscriber/silicon_press')
  pressing('ae2:printed_silicon', 'ae2:silicon').id('atlanabyss:pressing_printed_silicon')
  //运算电路板
  deploying('ae2:printed_calculation_processor', [
    'ae2:certus_quartz_crystal',
    'ae2:calculation_processor_press'
  ]).keepHeldItem(true).id('atlanabyss:deploying_printed_calculation_processor')
  //工程电路板
  deploying('ae2:printed_engineering_processor', [
    'minecraft:diamond',
    'ae2:engineering_processor_press'
  ]).keepHeldItem(true).id('atlanabyss:deploying_printed_engineering_processor')
  //逻辑电路板
  deploying('ae2:printed_logic_processor', [
    'tconstruct:rose_gold_ingot',
    'ae2:logic_processor_press'
  ]).keepHeldItem(true).id('atlanabyss:deploying_printed_logic_processor')

  //运算处理器
  remove('ae2:inscriber/calculation_processor')
  let pcp = 'ae2:printed_calculation_processor';
  sequenced_assembly(
    'ae2:calculation_processor',
    pcp, [
    filling(pcp, [pcp, Fluid.of('thermal:ender', 250)]),
    filling(pcp, [pcp, Fluid.of('thermal:redstone', 100)]),
    deploying(pcp, [pcp, 'ae2:printed_silicon'])
  ]).transitionalItem(pcp).loops(1).id('atlanabyss:calculation_processor')
  //工程处理器
  remove('ae2:inscriber/engineering_processor')
  let pep = 'ae2:printed_engineering_processor';
  sequenced_assembly(
    'ae2:engineering_processor',
    pep, [
    filling(pep, [pep, Fluid.of('thermal:ender', 250)]),
    filling(pep, [pep, Fluid.of('thermal:redstone', 100)]),
    deploying(pep, [pep, 'ae2:printed_silicon'])
  ]).transitionalItem(pep).loops(1).id('atlanabyss:engineering_processor')
  //逻辑处理器
  remove('ae2:inscriber/logic_processor')
  let plp = 'ae2:printed_logic_processor';
  sequenced_assembly(
    'ae2:logic_processor',
    plp, [
    filling(plp, [plp, Fluid.of('thermal:ender', 250)]),
    filling(plp, [plp, Fluid.of('thermal:redstone', 100)]),
    deploying(plp, [plp, 'ae2:printed_silicon'])
  ]).transitionalItem(plp).loops(1).id('atlanabyss:logic_processor')
})