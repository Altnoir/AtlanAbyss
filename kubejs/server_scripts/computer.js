onEvent('recipes', event => {
  let { create } = event.recipes;

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
  create.milling(['thermal:ender_pearl_dust'], 'minecraft:ender_pearl').id("atlanabyss:milling_ender_pearl")

  create.crushing([
    'ae2:certus_quartz_crystal',
    '4x ae2:certus_quartz_dust',
    Item.of('ae2:certus_quartz_dust').withChance(0.5),
    Item.of('ae2:sky_dust').withChance(0.25),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('minecraft:end_stone').withChance(0.12)
  ], 'ae2:deepslate_quartz_ore').id("atlanabyss:crushing_certus_quartz_ore")

  create.crushing([
    Item.of('tconstruct:ender_slime_crystal').withChance(0.50),
    Item.of('ae2:sky_dust').withChance(0.10)
  ], '#forge:end_stones').id("atlanabyss:crushing_end_stones")

  create.crushing([
    '6x kubejs:raw_bismuth',
    Item.of('6x kubejs:raw_bismuth').withChance(0.5),
    Item.of('ae2:sky_dust').withChance(0.25),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('minecraft:end_stone').withChance(0.12)
  ], 'kubejs:end_bismuth_ore').id("atlanabyss:crushing_bismuth_ore")
  //陨石粉
  remove('ae2:inscriber/sky_stone_dust')
  create.crushing([
    'ae2:sky_dust',
    Item.of('ae2:sky_stone_block').withChance(0.5)
  ], 'ae2:sky_stone_block').id("atlanabyss:crushing_sky_stone_block")
  //陨石
  remove('ae2:blasting/sky_stone_block')
  create.filling(
    'ae2:sky_stone_block',
    [
      'ae2:sky_dust',
      Fluid.of('minecraft:lava', 100)
    ]).id("atlanabyss:sky_stone_block")
  //压印模板
  event.stonecutting('ae2:calculation_processor_press', 'kubejs:circuit_scrap').id('atlanabyss:calculation_processor_press');
  event.stonecutting('ae2:engineering_processor_press', 'kubejs:circuit_scrap').id('atlanabyss:engineering_processor_press');
  event.stonecutting('ae2:logic_processor_press', 'kubejs:circuit_scrap').id('atlanabyss:logic_processor_press');
  //种子生长
  let grow = (to, from, via, id) => {
    create.sequenced_assembly([to], from, [
      create.filling(via, [via, Fluid.of("minecraft:water", 500)]),
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
  create.milling([
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
  event.shaped('16x ae2:controller', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'kubejs:computer_mechanism',
    B: 'kubejs:end_ingot'
  }).id('atlanabyss:ae_controller_16');

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
    '6x ae2:semi_dark_monitor',
    'ae2:controller').id('atlanabyss:semi_dark_monitor');//照明面板
  event.stonecutting(
    'ae2:crafting_unit',
    'ae2:controller').id('atlanabyss:ae_crafting_unit');//合成单元
  event.stonecutting(
    'ae2:energy_cell',
    'ae2:controller').id('atlanabyss:ae_energy_cell');//能源元件
  //ME接口
  remove('ae2:network/blocks/interfaces_interface')
  event.shaped('ae2:interface', [
    'ABC'
  ], {
    A: 'ae2:annihilation_core',
    B: 'ae2:controller',
    C: 'ae2:formation_core'
  }).id("atlanabyss:ae_interface")
  //ME样本接口
  remove('ae2:network/blocks/pattern_providers_interface')
  event.shaped('ae2:pattern_provider', [
    ' D ',
    'ABC',
    ' D '
  ], {
    A: 'ae2:annihilation_core',
    B: 'ae2:controller',
    C: 'ae2:formation_core',
    D: 'minecraft:crafting_table'
  }).id("atlanabyss:ae_pattern_provider")
  //分子装配室
  remove('ae2:network/crafting/molecular_assembler')
  event.shaped('ae2:molecular_assembler', [
    'BEB',
    'ADC',
    'BEB'
  ], {
    A: 'ae2:annihilation_core',
    B: 'kubejs:meteosteel_ingot',
    C: 'ae2:formation_core',
    D: 'minecraft:crafting_table',
    E: 'ae2:quartz_glass'
  }).id("atlanabyss:ae_molecular_assembler")
  //ME箱子
  remove('ae2:network/blocks/storage_chest')
  event.shaped('ae2:chest', [
    'ABA',
    'C C',
    'DDD'
  ], {
    A: 'ae2:quartz_glass',
    B: 'ae2:terminal',
    C: 'ae2:fluix_glass_cable',
    D: 'kubejs:meteosteel_ingot'
  }).id("atlanabyss:ae_chest")
  //ME安全终端
  remove('ae2:network/blocks/security_station')
  event.shaped('ae2:security_station', [
    'ABA',
    'CEC',
    'ADA'
  ], {
    A: 'kubejs:meteosteel_ingot',
    B: 'ae2:chest',
    C: 'ae2:fluix_glass_cable',
    D: 'ae2:engineering_processor',
    E: 'ae2:cell_component_16k'
  }).id("atlanabyss:ae_security_station")
  //ME IO
  remove('ae2:network/blocks/io_port')
  event.shaped('ae2:io_port', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'ae2:quartz_glass',
    B: 'ae2:drive',
    C: 'ae2:controller',
    D: 'kubejs:meteosteel_ingot',
    E: 'ae2:logic_processor'
  }).id("atlanabyss:ae_io_port")
  //空间IO
  remove('ae2:network/blocks/spatial_io_port')
  event.shapeless('ae2:spatial_io_port', [
    'ae2:io_port',
    'ae2:engineering_processor'
  ]).id("atlanabyss:ae_spatial_io_port")
  //晶体催生器
  remove('ae2:network/blocks/crystal_processing_quartz_growth_accelerator')
  event.shaped('ae2:quartz_growth_accelerator', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'kubejs:meteosteel_ingot',
    B: 'ae2:fluix_glass_cable',
    C: 'ae2:quartz_glass',
    D: 'ae2:fluix_block'
  }).id("atlanabyss:ae_quartz_growth_accelerator")
  //空间塔
  remove('ae2:network/blocks/spatial_io_pylon')
  event.shaped('ae2:spatial_pylon', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'ae2:quartz_glass',
    B: 'ae2:fluix_glass_cable',
    C: 'ae2:fluix_dust',
    D: 'ae2:controller'
  }).id("atlanabyss:ae_spatial_pylon")
  //空间锚
  remove('ae2:network/blocks/spatial_anchor')
  event.shaped('ae2:spatial_anchor', [
    'AAA',
    'BCB',
    'DED'
  ], {
    A: 'ae2:spatial_pylon',
    B: 'ae2:fluix_glass_cable',
    C: 'ae2:spatial_cell_component_128',
    D: 'kubejs:meteosteel_ingot',
    E: 'ae2:engineering_processor'
  }).id("atlanabyss:ae_spatial_anchor")
  //量子环
  remove('ae2:network/blocks/quantum_ring')
  event.shaped('ae2:quantum_ring', [
    'ABA',
    'CDE',
    'ABA'
  ], {
    A: 'kubejs:meteosteel_ingot',
    B: 'ae2:logic_processor',
    C: 'ae2:engineering_processor',
    D: 'ae2:energy_cell',
    E: '#ae2:smart_dense_cable'
  }).id("atlanabyss:ae_quantum_ring")
  //物质聚合
  remove('ae2:network/blocks/io_condenser')
  event.shaped('ae2:condenser', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'kubejs:meteosteel_ingot',
    B: 'ae2:quartz_glass',
    C: 'ae2:controller'
  }).id("atlanabyss:ae_condenser")
  //能源接收
  remove('ae2:network/blocks/energy_energy_acceptor')
  event.shaped('ae2:energy_acceptor', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'kubejs:meteosteel_ingot',
    B: 'ae2:quartz_glass',
    C: 'createaddition:modular_accumulator'
  }).id("atlanabyss:ae_energy_acceptor")

  //硅板
  remove('ae2:inscriber/silicon_print')
  remove('ae2:inscriber/silicon_press')
  create.pressing('ae2:printed_silicon', 'ae2:silicon').id('atlanabyss:pressing_printed_silicon')
  //运算电路板
  create.deploying('ae2:printed_calculation_processor', [
    'ae2:certus_quartz_crystal',
    'ae2:calculation_processor_press'
  ]).keepHeldItem(true).id('atlanabyss:deploying_printed_calculation_processor')
  //工程电路板
  create.deploying('ae2:printed_engineering_processor', [
    'minecraft:diamond',
    'ae2:engineering_processor_press'
  ]).keepHeldItem(true).id('atlanabyss:deploying_printed_engineering_processor')
  //逻辑电路板
  create.deploying('ae2:printed_logic_processor', [
    'tconstruct:rose_gold_ingot',
    'ae2:logic_processor_press'
  ]).keepHeldItem(true).id('atlanabyss:deploying_printed_logic_processor')

  //运算处理器
  remove('ae2:inscriber/calculation_processor')
  processor('ae2:printed_calculation_processor', 'ae2:calculation_processor', 'calculation_processor')
  //工程处理器
  remove('ae2:inscriber/engineering_processor')
  processor('ae2:printed_engineering_processor', 'ae2:engineering_processor', 'engineering_processor')
  //逻辑处理器
  remove('ae2:inscriber/logic_processor')
  processor('ae2:printed_logic_processor', 'ae2:logic_processor', 'logic_processor')

  function processor(inp, out, id) {
    create.sequenced_assembly(out, inp, [
      create.filling(inp, [inp, Fluid.of('thermal:ender', 500)]),
      create.filling(inp, [inp, Fluid.of('thermal:redstone', 200)]),
      create.deploying(inp, [inp, 'ae2:printed_silicon'])
    ]).transitionalItem(inp).loops(1).id('atlanabyss:sequenced_assembly_' + id)
  }

  //福鲁伊克斯珍珠
  remove('ae2:misc/fluixpearl')
  event.shaped('ae2:fluix_pearl', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'ae2:fluix_dust',
    B: 'ae2:fluix_crystal',
    C: 'waystones:warp_stone'
  }).id('atlanabyss:ae_fluix_pearl');
})