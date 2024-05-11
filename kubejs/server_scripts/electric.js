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

  let {
    pulverizer,
    smelter
  } = event.recipes.thermal;

  let remove = (name) => {
    event.remove({ id: name })
  }
  event.remove({ type: 'thermal:sawmill' })
  event.remove({ type: 'thermal:press' })
  //多余的
  remove('thermal:gunpowder_block')//火药块
  remove('thermal:apple_block')//箱装苹果
  remove('thermal:carrot_block')//箱装胡萝卜
  remove('thermal:potato_block')//箱装马铃薯
  remove('thermal:beetroot_block')//箱装甜菜根
  remove('thermal:fluid_reservoir')//大桶
  remove('thermal:tools/satchel')//背包
  remove('thermal:potion_infuser')//药水注射器
  remove('thermal:potion_quiver')//药水箭袋
  remove('thermal:storage/copper_ingot_from_nuggets')//铜锭
  remove('thermal:machines/centrifuge/centrifuge_honey_bottle')
  remove('thermal:machines/centrifuge/centrifuge_honeycomb')
  remove('thermal:machines/centrifuge/centrifuge_bronze_dust')//青铜粉
  //属性弹
  remove('thermal:earth_charge_3')
  remove('thermal:ice_charge_3')
  remove('thermal:lightning_charge_3')
  //机器
  remove(/^thermal:machine_/)
  remove(/^thermal:device_/)
  remove('thermal:charge_bench')
  remove('thermal:tinker_bench')
  //青铜
  remove('thermal:storage/bronze_block')
  remove('thermal:storage/bronze_ingot_from_nuggets')
  remove('thermal:storage/bronze_ingot_from_block')
  remove('thermal:smelting/bronze_ingot_from_dust_smelting')
  remove('thermal:smelting/bronze_ingot_from_dust_blasting')
  remove('thermal:machines/smelter/smelter_bronze_plate_to_ingot')
  remove('thermal:machines/smelter/smelter_bronze_dust')
  remove('thermal:machines/smelter/smelter_alloy_bronze')
  remove('thermal:storage/bronze_nugget_from_ingot')
  remove('thermal:bronze_dust_4')
  remove('thermal:machines/pulverizer/pulverizer_bronze_plate_to_dust')
  remove('thermal:machines/pulverizer/pulverizer_bronze_ingot_to_dust')
  //康铜
  remove('createaddition:crafting/electrum_ingot')
  remove('createaddition:crafting/electrum_nugget')
  remove('createaddition:pressing/electrum_ingot')
  remove('createaddition:mixing/electrum')
  //模具
  remove('thermal:press_coin_die')
  remove('thermal:press_packing_2x2_die')
  remove('thermal:press_packing_3x3_die')
  remove('thermal:press_unpacking_die')
  remove('thermal:chiller_ball_cast')
  remove('thermal:chiller_ingot_cast')
  remove('thermal:chiller_rod_cast')
  //齿轮
  let gear = (name) => {
    event.remove({ id: 'thermal:parts/' + name + '_gear' });
    event.remove({ id: 'tconstruct:smeltery/casting/metal/' + name + '/gear_gold_cast' });
    event.remove({ id: 'tconstruct:smeltery/casting/metal/' + name + '/gear_sand_cast' });
  }
  gear('iron');
  gear('gold');
  gear('copper');
  gear('netherite');
  gear('lapis');
  gear('diamond');
  gear('emerald');
  gear('quartz');
  gear('tin');
  gear('lead');
  gear('silver');
  gear('nickel');
  gear('bronze');
  gear('electrum');
  gear('invar');
  gear('constantan');
  gear('signalum');
  gear('lumium');
  gear('enderium');
  gear('steel');
  //蜂蜜
  remove('thermal:machines/centrifuge/centrifuge_syrup_bottle')
  //齿轮冲压摸具
  remove('thermal:press_gear_die')
  //手搓合金&强化玻璃
  remove(/^thermal:fire_charge/)
  //其他框架
  remove(/^thermal:energy_cell/)
  remove(/^thermal:fluid_cell/)
  //罐装机
  remove(/^thermal:bottler_potion/)
  //离心机
  remove('thermal:compat/create/centrifuge_create_crushed_iron_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_gold_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_copper_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_zinc_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_tin_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_lead_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_nickel_ore')
  remove('thermal:compat/create/centrifuge_create_crushed_silver_ore')
  //感应炉
  remove('thermal:compat/create/smelter_create_crushed_iron_ore')
  remove('thermal:compat/create/smelter_create_crushed_gold_ore')
  remove('thermal:compat/create/smelter_create_crushed_copper_ore')
  remove('thermal:compat/create/smelter_create_crushed_zinc_ore')
  remove('thermal:compat/create/smelter_create_crushed_tin_ore')
  remove('thermal:compat/create/smelter_create_crushed_lead_ore')
  remove('thermal:compat/create/smelter_create_crushed_nickel_ore')
  remove('thermal:compat/create/smelter_create_crushed_silver_ore')
  //橡胶
  remove('thermal:rubber_3')
  remove('thermal:rubber_from_vine')
  remove('thermal:rubber_from_dandelion')
  //黑石
  remove('thermal:devices/rock_gen/rock_gen_blackstone')
  //发电机
  remove('thermal:dynamo_stirling')
  remove('thermal:dynamo_lapidary')
  remove('thermal:dynamo_gourmand')
  remove('thermal:dynamo_numismatic')
  remove('thermal:dynamo_disenchantment')
  remove('thermal:dynamo_compression')
  remove('thermal:dynamo_magmatic')

  //压缩能源炉
  event.shaped('thermal:dynamo_compression', [
    ' A ',
    'BCB',
    'BDB'
  ], {
    A: 'thermal:rf_coil',
    B: 'create:brass_sheet',
    C: 'createaddition:capacitor',
    D: 'kubejs:thermal_mechanism'
  }).id("atlanabyss:dynamo_compression")
  //热力能源炉
  event.shaped('thermal:dynamo_magmatic', [
    ' A ',
    'BCB',
    'BDB'
  ], {
    A: 'thermal:rf_coil',
    B: 'thermal:invar_plate',
    C: 'createaddition:capacitor',
    D: 'kubejs:thermal_mechanism'
  }).id("atlanabyss:dynamo_magmatic")

  //扳手
  remove('thermal:tools/wrench')
  event.shaped('thermal:wrench', [
    'A A',
    ' B ',
    ' B '
  ], {
    A: 'create:iron_sheet',
    B: 'minecraft:lapis_lazuli'
  }).id("atlanabyss:thermal_wrench")
  //扩展通量线圈
  remove('thermal:augments/rf_coil_augment')
  event.shaped('thermal:rf_coil_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:silver_plate',
    B: 'thermal:rf_coil',
    C: 'create:golden_sheet'
  }).id("atlanabyss:rf_coil_augment")
  //稳态通量线圈
  remove('thermal:augments/rf_coil_storage_augment')
  event.shaped('thermal:rf_coil_storage_augment', [
    ' A ',
    'CBC',
    ' C '
  ], {
    A: 'thermal:silver_plate',
    B: 'thermal:rf_coil',
    C: 'create:golden_sheet'
  }).id("atlanabyss:rf_coil_storage_augment")
  //强导通量线圈
  remove('thermal:augments/rf_coil_xfer_augment')
  event.shaped('thermal:rf_coil_xfer_augment', [
    ' A ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:silver_plate',
    B: 'thermal:rf_coil',
    C: 'create:golden_sheet'
  }).id("atlanabyss:rf_coil_xfer_augment")
  //液槽扩容升级
  remove('thermal:augments/fluid_tank_augment')
  event.shaped('thermal:fluid_tank_augment', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:iron_sheet',
    B: '#thermal:glass/hardened'
  }).id("atlanabyss:fluid_tank_augment")
  //流体过滤规则
  remove('thermal:augments/fluid_filter_augment')
  event.shaped('thermal:fluid_filter_augment', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:copper_nugget',
    B: 'thermal:signalum_ingot'
  }).id("atlanabyss:fluid_filter_augment")
  //径向范围扩展
  remove('thermal:augments/area_radius_augment')
  event.shaped('thermal:area_radius_augment', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'thermal:tin_plate',
    B: 'thermal:redstone_servo'
  }).id("atlanabyss:area_radius_augment")
  //通量链接升级
  remove('thermal:augments/machine_speed_augment')
  event.shaped('thermal:machine_speed_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:electrum_plate',
    B: 'thermal:rf_coil',
    C: 'thermal:lead_plate'
  }).id("atlanabyss:machine_speed_augment")
  //多环泵注升级
  remove('thermal:augments/dynamo_fuel_augment')
  event.shaped('thermal:dynamo_fuel_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:lumium_plate',
    B: '#thermal:glass/hardened',
    C: 'thermal:lead_plate'
  }).id("atlanabyss:dynamo_fuel_augment")
  //辅助反应升级
  remove('thermal:augments/dynamo_output_augment')
  event.shaped('thermal:dynamo_output_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:signalum_plate',
    B: '#thermal:glass/hardened',
    C: 'thermal:silver_plate'
  }).id("atlanabyss:dynamo_output_augment")
  //通量效率升级
  remove('thermal:augments/machine_efficiency_augment')
  event.shaped('thermal:machine_efficiency_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:lumium_plate',
    B: 'thermal:rf_coil',
    C: 'thermal:nickel_plate'
  }).id("atlanabyss:machine_efficiency_augment")
  //辅助筛取升级
  remove('thermal:augments/machine_output_augment')
  event.shaped('thermal:machine_output_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: '#forge:plates/brass',
    B: 'thermal:redstone_servo',
    C: 'thermal:invar_plate'
  }).id("atlanabyss:machine_output_augment")
  //媒触回收升级
  remove('thermal:augments/machine_catalyst_augment')
  event.shaped('thermal:machine_catalyst_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:lead_plate',
    B: 'thermal:redstone_servo',
    C: 'thermal:constantan_plate'
  }).id("atlanabyss:machine_catalyst_augment")
  //强效炼药升级
  remove('thermal:augments/potion_amplifier_augment')
  event.shaped('thermal:potion_amplifier_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'create:brass_sheet',
    B: '#thermal:glass/hardened',
    C: 'thermal:signalum_plate'
  }).id("atlanabyss:potion_amplifier_augment")
  //长效炼药升级
  remove('thermal:augments/potion_duration_augment')
  event.shaped('thermal:potion_duration_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'create:brass_sheet',
    B: '#thermal:glass/hardened',
    C: 'thermal:lumium_plate'
  }).id("atlanabyss:potion_duration_augment")
  //循环处理升级
  remove('thermal:augments/machine_cycle_augment')
  event.shaped('thermal:machine_cycle_augment', [
    ' C ',
    'ABA',
    ' C '
  ], {
    A: 'thermal:constantan_plate',
    B: 'thermal:redstone_servo',
    C: 'thermal:silver_plate'
  }).id("atlanabyss:machine_cycle_augment")

  //硬化整合组件
  remove('thermal:augments/upgrade_augment_1')
  event.shaped('thermal:upgrade_augment_1', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'create:copper_sheet',
    B: 'minecraft:glass',
    C: 'minecraft:redstone',
    D: 'kubejs:aluminum_nugget'
  }).id("atlanabyss:upgrade_augment_1")
  //强化整合组件
  remove('thermal:augments/upgrade_augment_2')
  event.shaped('thermal:upgrade_augment_2', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'thermal:invar_plate',
    B: 'minecraft:quartz',
    C: 'thermal:electrum_nugget',
    D: 'thermal:upgrade_augment_1'
  }).id("atlanabyss:upgrade_augment_2")
  //谐振整合组件
  remove('thermal:augments/upgrade_augment_3')
  event.shaped('thermal:upgrade_augment_3', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'thermal:enderium_plate',
    B: '#thermal:glass/hardened',
    C: 'thermal:lumium_nugget',
    D: 'thermal:upgrade_augment_2'
  }).id("atlanabyss:upgrade_augment_3")

  //遥控起爆器
  remove('thermal:tools/detonator')
  event.shaped('thermal:detonator', [
    'B',
    'A'
  ], {
    A: 'thermal:silver_plate',
    B: 'minecraft:redstone_torch'
  }).id("atlanabyss:thermal_detonator")

  //磁铁
  remove('thermal:flux_magnet')
  event.shaped('thermal:flux_magnet', [
    'A A',
    'B B',
    'BBB'
  ], {
    A: 'minecraft:redstone',
    B: 'thermal:steel_ingot'
  }).id("atlanabyss:flux_magnet")

  //瀑冰弹→冰
  remove('thermal:ice_charge/ice_from_water_bucket')
  splashing(['minecraft:ice'],
    'thermal:ice_charge'
  ).id("atlanabyss:splashing_ice_charge")
  //瀑冰弹→黑曜石
  remove('thermal:ice_charge/obsidian_from_lava_bucket')
  event.blasting('minecraft:obsidian', 'thermal:ice_charge').id("atlanabyss:obsidian_from_ice_charge")

  //铝
  event.shaped('kubejs:aluminum_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'kubejs:aluminum_ingot'
  }).id("atlanabyss:aluminum_block_from_ingot")
  event.shapeless('9x kubejs:aluminum_ingot', [
    'kubejs:aluminum_block',
  ]).id("atlanabyss:aluminum_ingot_from_block")
  event.shaped('kubejs:aluminum_ingot', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'kubejs:aluminum_nugget'
  }).id("atlanabyss:aluminum_ingot_from_nugget")
  event.shapeless('9x kubejs:aluminum_nugget', [
    'kubejs:aluminum_ingot',
  ]).id("atlanabyss:aluminum_nugget_from_ingot")
  event.shaped('kubejs:raw_aluminum_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'kubejs:raw_aluminum'
  }).id("atlanabyss:raw_aluminum_block_from_raw")
  event.shapeless('9x kubejs:raw_aluminum', [
    'kubejs:raw_aluminum_block',
  ]).id("atlanabyss:raw_aluminum_from_block")

  //琥珀金
  mixing('2x thermal:electrum_ingot', [
    'minecraft:gold_ingot',
    'thermal:silver_ingot'
  ]).heated().id('atlanabyss:mixing_electrum_ingot');
  //镍钢锭
  mixing('2x thermal:invar_ingot', [
    'minecraft:iron_ingot',
    'thermal:nickel_ingot'
  ]).heated().id('atlanabyss:mixing_invar_ingot');
  //康铜锭
  mixing('2x thermal:constantan_ingot', [
    'minecraft:copper_ingot',
    'thermal:nickel_ingot'
  ]).heated().id('atlanabyss:mixing_constantan_ingot');

  //玫瑰金锭
  remove('thermal:machines/smelter/smelter_alloy_rose_gold')
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      {
        value: [
          Ingredient.of('create:polished_rose_quartz').toJson()
        ],
        count: 1
      },
      {
        value: [
          Ingredient.of('#forge:ingots/gold').toJson(),
          Ingredient.of('#forge:dusts/gold').toJson()
        ],
        count: 3
      }
    ],
    result: [
      Item.of('tconstruct:rose_gold_ingot', 4).toResultJson()
    ],
    energy: 3200
  }).id("atlanabyss:rose_gold_ingot")
  //下界合金！
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      Item.of('kubejs:eviltwisting_ingot', 2).toResultJson(),
      Ingredient.of('thermal:basalz_rod').toJson()
    ],
    result: [
      Item.of('minecraft:netherite_ingot').toResultJson()
    ],
    energy: 12000
  }).id("atlanabyss:smelter_netherite_ingot")
  //木炭杂酚油
  compacting([
    'minecraft:charcoal',
    Fluid.of('thermal:creosote', 125)
  ],
    '#minecraft:logs'
  ).heated().id("atlanabyss:pyrolyzer_logs")
  //焦炭杂酚油
  compacting([
    'thermal:coal_coke',
    Fluid.of('thermal:creosote', 250)
  ],
    'minecraft:coal'
  ).heated().id("atlanabyss:pyrolyzer_coal")
  //沥青重油
  compacting([
    '2x thermal:coal_coke',
    'thermal:tar',
    Fluid.of('thermal:light_oil', 50)
  ],
    'thermal:bitumen'
  ).heated().id("atlanabyss:pyrolyzer_bitumen")

  //人工石油
  mixing(Fluid.of('thermal:crude_oil', 100), [
    '#create_enchantment_industry:ink_ingredient',
    Fluid.of('tconstruct:blood', 100)
  ]).superheated().id("atlanabyss:oil_from_black_dye")
  mixing(Fluid.of('thermal:crude_oil', 500), [
    'thermal:bitumen',
    Fluid.of('tconstruct:blood', 100)
  ]).superheated().id("atlanabyss:oil_from_bitumen")
  //精炼油
  mixing(Fluid.of('thermal:refined_fuel', 100), [
    Fluid.of('thermal:light_oil', 50),
    Fluid.of('tconstruct:blazing_blood', 50)
  ]).heated().id("atlanabyss:refined_fuel")
  remove('createaddition:liquid_burning/compat/thermal/refined_fuel')
  event.custom({
    type: 'createaddition:liquid_burning',
    input: {
      fluid: 'thermal:refined_fuel',
      amount: 1000
    },
    burnTime: 72000,
    superheated: true,
  }).id("atlanabyss:liquid_burning_refined_fuel")

  //烈焰人煤油
  event.custom({
    type: 'createaddition:liquid_burning',
    input: {
      fluid: 'pneumaticcraft:kerosene',
      amount: 1000
    },
    burnTime: 12000,
  }).id("atlanabyss:liquid_burning_kerosene")


  //机械熔岩炉
  const superheated = [
    { input: 'netherrack', output: 'minecraft:lava', count: 125 },
    { input: 'magma_block', output: 'minecraft:lava', count: 500 }
  ];
  for (const sh of superheated) {
    mixing(Fluid.of(`${sh.output}`, sh.count),
      `minecraft:${sh.input}`
    ).superheated().id(`atlanabyss:superheated_${sh.input}`)
  }
  const heated = [
    { input: 'glowstone_dust', output: 'thermal:glowstone', count: 250 },
    { input: 'glowstone', output: 'thermal:glowstone', count: 1000 },
    { input: 'redstone', output: 'thermal:redstone', count: 100 },
    { input: 'redstone_block', output: 'thermal:redstone', count: 900 },
    { input: 'ender_pearl', output: 'thermal:ender', count: 250 }
  ];
  for (const h of heated) {
    mixing(Fluid.of(`${h.output}`, h.count),
      `minecraft:${h.input}`
    ).heated().id(`atlanabyss:heated_${h.input}`)
  }
  //机动冷冻
  remove('thermal:earth_charge/sulfur_dust_from_sulfur')
  const chiller = [
    { output: 'minecraft:ender_pearl', input: 'thermal:ender', count: 50, id: 'ender_pearl' },
    { output: 'minecraft:glowstone_dust', input: 'thermal:glowstone', count: 250, id: 'glowstone_dust' },
    { output: 'minecraft:glowstone', input: 'thermal:glowstone', count: 1000, id: 'glowstone' },
    { output: 'minecraft:redstone', input: 'thermal:redstone', count: 100, id: 'redstone' },
    { output: 'minecraft:redstone_block', input: 'thermal:redstone', count: 900, id: 'redstone_block' },
    { output: 'thermal:rubber', input: 'thermal:latex', count: 25, id: 'rubber' },//橡胶
    { output: 'thermal:sulfur_dust', input: 'thermal:refined_fuel', count: 50, id: 'sulfur' },//硫粉
    { output: 'thermal:blitz_rod', input: 'kubejs:fine_sand', count: 50, id: 'blitz_rod' },//狂风沙尘
  ];
  for (const c of chiller) {
    compacting(`${c.output}`, [
      Fluid.of(`${c.input}`, c.count)
    ]).id(`atlanabyss:compacting_${c.id}`)
  }

  //魔力灌注
  event.custom({
    type: 'ars_nouveau:imbuement',
    input: {
      item: 'minecraft:snowball'
    },
    output: 'thermal:blizz_rod',
    count: 1,
    source: 500,
    pedestalItems: []
  }).id("atlanabyss:blizz_rod")

  //钢锭
  mixing('thermal:steel_ingot', [
    'minecraft:iron_ingot',
    'thermal:coal_coke'
  ]).heated().id("atlanabyss:steel_ingot")

  //机器框架
  remove('thermal:machine_frame')
  event.shaped('thermal:machine_frame', [
    'ACA',
    'CBC',
    'ACA'
  ], {
    A: 'thermal:invar_plate',
    B: 'kubejs:thermal_mechanism',
    C: 'minecraft:glass'
  }).id("atlanabyss:machine_frame")

  //机器
  const machines = [
    { input: 'create:millstone', output: 'machine_pulverizer' },//磨粉机
    { input: 'minecraft:blast_furnace', output: 'machine_smelter' },//感应炉
    { input: 'farmersdelight:rich_soil', output: 'machine_insolator' },//有机灌注器
    { input: 'create:cogwheel', output: 'machine_centrifuge' },//离心机
    { input: 'minecraft:bucket', output: 'device_water_gen' },//蓄水器
    { input: 'create:basin', output: 'device_rock_gen' },//造石机
    { input: 'minecraft:barrel', output: 'device_collector' },//真空箱子
    { input: 'minecraft:cactus', output: 'device_nullifier' },//销毁器
    { input: 'minecraft:dragon_breath', output: 'device_potion_diffuser' },//药水雾化
    { input: 'minecraft:crafting_table', output: 'machine_crafter' },//序列装配台
    { input: 'minecraft:amethyst_block', output: 'machine_crystallizer' },//结晶器
    { input: 'create:blaze_burner', output: 'machine_crucible' },//熔岩炉
    { input: 'thermal:electrum_block', output: 'charge_bench' },//能量灌注机
    { input: 'minecraft:emerald', output: 'machine_press' },//贸易站
  ];
  for (const machine of machines) {
    event.smithing(`thermal:${machine.output}`,
      'thermal:machine_frame',
      `${machine.input}`
    ).id(`atlanabyss:smithing_${machine.output}`)
  }
  //树汁提取
  event.shaped('thermal:device_tree_extractor', [
    'A',
    'B',
    'C'
  ], {
    A: 'supplementaries:faucet',
    B: 'create:andesite_casing',
    C: 'minecraft:bucket'
  }).id("atlanabyss:device_tree_extractor")
  //水产捕捞
  event.shaped('thermal:device_fisher', [
    'A',
    'B',
    'C',
  ], {
    A: 'minecraft:bucket',
    B: 'create:andesite_casing',
    C: 'minecraft:barrel'
  }).id("atlanabyss:device_fisher")
  //批量堆肥
  event.shaped('thermal:device_composter', [
    'A',
    'B',
    'C',
  ], {
    A: 'create:electron_tube',
    B: 'create:andesite_casing',
    C: 'minecraft:composter'
  }).id("atlanabyss:device_composter")
  //工匠工作台
  event.shaped('thermal:tinker_bench', [
    'AB',
    'CC',
    'CC'
  ], {
    A: '#forge:wires',
    B: 'minecraft:glass_bottle',
    C: 'create:andesite_casing'
  }).id("atlanabyss:tinker_bench")

  //造石机
  function rockGen(adjacent, output, id) {
    event.custom({
      type: 'thermal:rock_gen',
      adjacent: adjacent,
      result: {
        item: output
      }
    }).id('atlanabyss:rock_gen_' + id)
  }
  rockGen('create:honey', 'create:limestone', 'limestone')
  rockGen('create_enchantment_industry:ink', 'minecraft:blackstone', 'blackstone')
  rockGen('create:chocolate', 'create:scoria', 'scoria')

  function rockGen2(adjacent, below, output, id) {
    event.custom({
      type: 'thermal:rock_gen',
      adjacent: adjacent,
      below: below,
      result: {
        item: output
      }
    }).id('atlanabyss:rock_gen_' + id)
  }
  rockGen2('minecraft:water', 'minecraft:calcite', 'minecraft:diorite', 'diorite')
  rockGen2('minecraft:water', 'minecraft:tuff', 'minecraft:andesite', 'andesite')
  rockGen2('minecraft:water', 'minecraft:dripstone_block', 'minecraft:granite', 'granite')

  //倒出石油
  remove('thermal:machines/centrifuge/centrifuge_oil_sand')
  remove('thermal:machines/centrifuge/centrifuge_oil_red_sand')
  emptying([
    'kubejs:dry_oil_sand',
    Fluid.of('thermal:crude_oil', 1000)
  ], 'thermal:oil_sand').id("atlanabyss:oil_sand")
  emptying([
    'kubejs:dry_oil_red_sand',
    Fluid.of('thermal:crude_oil', 1000)
  ], 'thermal:oil_red_sand').id("atlanabyss:oill_red_sand")
  //粉碎干沥青沙
  const CrushingOilSand = [
    { input: 'dry_oil_sand', output: 'sand' },//沙
    { input: 'dry_oil_red_sand', output: 'red_sand' },//红沙
  ];
  for (const cos of CrushingOilSand) {
    crushing([
      `minecraft:${cos.output}`,
      'thermal:bitumen',
      Item.of(('thermal:niter'), 3).withChance(.50),
    ], `kubejs:${cos.input}`).id(`atlanabyss:crushing_${cos.input}`)
  }

  //树汁提取
  remove('thermal:devices/tree_extractor/tree_extractor_oak')
  remove('thermal:devices/tree_extractor/tree_extractor_birch')
  remove('thermal:devices/tree_extractor/tree_extractor_acacia')
  remove('thermal:devices/tree_extractor/tree_extractor_spruce')
  remove('thermal:devices/tree_extractor/tree_extractor_dark_oak')
  const treeExtractor = [
    { log: 'minecraft:oak_log', leaves: 'minecraft:oak_leaves', fluid: 'thermal:latex', amo: 25, id: 'oak' },//橡木
    { log: 'minecraft:birch_log', leaves: 'minecraft:birch_leaves', fluid: 'thermal:latex', amo: 25, id: 'birch' },//白桦木
    { log: 'minecraft:acacia_log', leaves: 'minecraft:acacia_leaves', fluid: 'thermal:latex', amo: 25, id: 'acacia' },//金合欢
    { log: 'minecraft:spruce_log', leaves: 'minecraft:spruce_leaves', fluid: 'thermal:latex', amo: 25, id: 'spruce' },//云杉木
    { log: 'minecraft:dark_oak_log', leaves: 'minecraft:dark_oak_leaves', fluid: 'thermal:latex', amo: 50, id: 'dark_oak' },//深色橡木
  ];
  for (const te of treeExtractor) {
    event.custom({
      type: 'thermal:tree_extractor',
      trunk: `${te.log}`,
      leaves: `${te.leaves}`,
      result: {
        fluid: `${te.fluid}`,
        amount: te.amo
      }
    }).id(`atlanabyss:tree_extractor_${te.id}`)
  }

  //兼容
  remove('thermal:compat/create/pulverizer_create_tuff_recycle')
  remove('thermal:compat/create/pulverizer_create_tuff')
  event.custom({
    type: 'thermal:pulverizer_recycle',
    ingredient: {
      tag: 'create:stone_types/tuff'
    },
    result: [
      {
        item: 'create:copper_nugget',
        chance: 0.2
      },
      {
        item: 'minecraft:gold_nugget',
        chance: 0.2
      },
      {
        item: 'minecraft:iron_nugget',
        chance: 0.2
      },
      {
        item: 'create:zinc_nugget',
        chance: 0.2
      }
    ],
  }).id("atlanabyss:pulverizer_tuff_recycle")
  event.custom({
    type: 'thermal:pulverizer_recycle',
    ingredient: {
      item: 'minecraft:tuff'
    },
    result: [
      {
        item: 'create:copper_nugget',
        chance: 0.2
      },
      {
        item: 'minecraft:gold_nugget',
        chance: 0.2
      },
      {
        item: 'minecraft:iron_nugget',
        chance: 0.2
      },
      {
        item: 'create:zinc_nugget',
        chance: 0.2
      }
    ],
  }).id("atlanabyss:pulverizer_tuff")

  remove('thermal:machines/smelter/smelter_raw_gold')
  event.custom({
    type: 'thermal:smelter',
    ingredient: {
      tag: 'forge:raw_materials/gold'
    },
    result: [
      {
        item: 'minecraft:gold_ingot',
        chance: 1.5,
        locked: true
      },
      {
        item: 'create:copper_nugget',
        chance: 1.0
      }
    ],
    experience: 0.1
  }).id("atlanabyss:smelter_raw_gold")
  remove('thermal:machines/smelter/smelter_raw_nickel')
  event.custom({
    type: 'thermal:smelter',
    ingredient: {
      tag: 'forge:raw_materials/nickel'
    },
    result: [
      {
        item: 'thermal:nickel_ingot',
        chance: 1.5,
        locked: true
      },
      {
        item: 'create:copper_nugget',
        chance: 1.0
      }
    ],
    experience: 0.1
  }).id("atlanabyss:smelter_raw_nickel")

  //铝
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      tag: 'forge:ores/aluminum'
    },
    result: [
      {
        item: 'create:crushed_raw_aluminum',
        chance: 3.0
      },
      {
        item: 'minecraft:netherrack',
        chance: 0.2
      }
    ],
    experience: 0.5
  }).id("atlanabyss:pulverizer_aluminum_ore")
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      tag: 'forge:raw_materials/aluminum'
    },
    result: [
      {
        item: 'create:crushed_raw_aluminum',
        chance: 1.25
      },
      {
        item: 'thermal:netherite_dust',
        chance: 0.02
      }
    ],
    experience: 0.1
  }).id("atlanabyss:pulverizer_raw_aluminum")
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      tag: 'forge:ingots/aluminum'
    },
    result: [
      {
        item: 'kubejs:aluminum_dust',
        count: 1
      }
    ],
    energy_mod: 0.5
  }).id("atlanabyss:pulverizer_aluminum_ingot_to_dust")
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      tag: 'forge:plates/aluminum'
    },
    result: [
      {
        item: 'kubejs:aluminum_dust',
        count: 1
      }
    ],
    energy_mod: 0.5
  }).id("atlanabyss:pulverizer_aluminum_plate_to_dust")

  //有机灌注器
  function insolatorRecipe(ingredient, result, energy, water, id) {
    event.custom({
      type: 'thermal:insolator',
      ingredient: { item: ingredient },
      result: result,
      energy_mod: energy,
      water_mod: water
    }).id("atlanabyss:insolator_" + id)
  }
  insolatorRecipe('minecraft:tube_coral_block', [
    { item: 'minecraft:tube_coral_block', chance: 1.5 },
    { item: 'minecraft:tube_coral_fan', chance: 0.25 },
    { item: 'minecraft:tube_coral', chance: 0.02 }
  ], 2, 2, 'tube_coral_block');//蓝珊瑚
  insolatorRecipe('minecraft:brain_coral_block', [
    { item: 'minecraft:brain_coral_block', chance: 1.5 },
    { item: 'minecraft:brain_coral_fan', chance: 0.25 },
    { item: 'minecraft:brain_coral', chance: 0.02 }
  ], 2, 2, 'brain_coral_block');//粉珊瑚
  insolatorRecipe('minecraft:bubble_coral_block', [
    { item: 'minecraft:bubble_coral_block', chance: 1.5 },
    { item: 'minecraft:bubble_coral_fan', chance: 0.25 },
    { item: 'minecraft:bubble_coral', chance: 0.02 }
  ], 2, 2, 'bubble_coral_block');//紫珊瑚
  insolatorRecipe('minecraft:fire_coral_block', [
    { item: 'minecraft:fire_coral_block', chance: 1.5 },
    { item: 'minecraft:fire_coral_fan', chance: 0.25 },
    { item: 'minecraft:fire_coral', chance: 0.02 }
  ], 2, 2, 'fire_coral_block');//红珊瑚
  insolatorRecipe('minecraft:horn_coral_block', [
    { item: 'minecraft:horn_coral_block', chance: 1.5 },
    { item: 'minecraft:horn_coral_fan', chance: 0.25 },
    { item: 'minecraft:horn_coral', chance: 0.02 }
  ], 2, 2, 'horn_coral_block');//黄珊瑚
  insolatorRecipe('ars_nouveau:green_archwood_sapling', [
    { item: 'ars_nouveau:green_archwood_log', chance: 6.0 },
    { item: 'ars_nouveau:green_archwood_sapling', chance: 1.1 }
  ], 4, 3, 'green_archwood_sapling');//绿魔艺树
  insolatorRecipe('ars_nouveau:blue_archwood_sapling', [
    { item: 'ars_nouveau:blue_archwood_log', chance: 6.0 },
    { item: 'ars_nouveau:blue_archwood_sapling', chance: 1.1 }
  ], 4, 3, 'blue_archwood_sapling');//蓝魔艺树
  insolatorRecipe('ars_nouveau:purple_archwood_sapling', [
    { item: 'ars_nouveau:purple_archwood_log', chance: 6.0 },
    { item: 'ars_nouveau:purple_archwood_sapling', chance: 1.1 }
  ], 4, 3, 'purple_archwood_sapling');//紫魔艺树
  insolatorRecipe('ars_nouveau:red_archwood_sapling', [
    { item: 'ars_nouveau:red_archwood_log', chance: 6.0 },
    { item: 'ars_nouveau:red_archwood_sapling', chance: 1.1 }
  ], 4, 3, 'red_archwood_sapling');//红魔艺树
  insolatorRecipe('kubejs:cottons_seed', [
    { item: 'kubejs:cotton', chance: 3.5 },
    { item: 'kubejs:cottons_seed', chance: 0.1 }
  ], 1, 1, 'cotton');//棉花

  //催化剂
  remove('thermal:machines/smelter/smelter_catalyst_calcite')
  remove('thermal:machines/smelter/smelter_catalyst_blaze_powder')
  event.custom({
    type: 'thermal:insolator_catalyst',
    ingredient: {
      item: 'kubejs:substrate_herbal'
    },
    primary_mod: 12.0,
    secondary_mod: 6.0,
    energy_mod: 2.0,
    min_chance: 0.02,
    use_chance: 0.02
  }).id("atlanabyss:insolator_catalyst_herbal")//灌注器
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: {
      item: 'kubejs:substrate_igneous'
    },
    primary_mod: 6.0,
    secondary_mod: 12.0,
    energy_mod: 2.0,
    min_chance: 0.02,
    use_chance: 0.02
  }).id("atlanabyss:pulverizer_catalyst_igneous")//粉碎机
  event.custom({
    type: 'thermal:smelter_catalyst',
    ingredient: {
      item: 'kubejs:substrate_gem'
    },
    primary_mod: 12.0,
    secondary_mod: 12.0,
    energy_mod: 4.0,
    min_chance: 0.02,
    use_chance: 0.02
  }).id("atlanabyss:smelter_catalyst_gem")//感应炉

  //修复
  remove('thermal:compat/create/pulverizer_create_zinc_ore')

  pulverizer([
    Item.of('create:crushed_raw_zinc').withChance(2.25),
    Item.of('minecraft:gravel').withChance(.2)
  ], 'create:zinc_ore'
  ).experience(0.2).id("atlanabyss:pulverizer_create_zinc_ore")

  pulverizer([
    Item.of('create:crushed_raw_zinc').withChance(2.25),
    Item.of('minecraft:gravel').withChance(.2)
  ], 'create:deepslate_zinc_ore'
  ).experience(0.2).id("atlanabyss:pulverizer_deepslate_create_zinc_ore")

  //下界硫矿
  remove('thermal:smelting/sulfur_from_smelting')
  remove('thermal:smelting/sulfur_from_blasting')
  remove('thermal:machines/pulverizer/pulverizer_sulfur_ore')
  remove('create:compat/thermal/crushing/sulfur_ore')
  remove('thermal:machines/smelter/smelter_sulfur_ore')

  crushing([
    '3x thermal:sulfur',
    Item.of('2x thermal:sulfur').withChance(0.5),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('minecraft:netherrack').withChance(0.12)
  ], 'kubejs:nether_sulfur_ore').id("atlanabyss:crushing_nether_sulfur_ore")

  pulverizer([
    Item.of('thermal:sulfur').withChance(6.5)
  ], 'kubejs:nether_sulfur_ore'
  ).experience(0.2).id("atlanabyss:pulverizer_nether_sulfur_ore")

  smelter([
    Item.of('thermal:sulfur').withChance(3.5),
    Item.of('thermal:rich_slag').withChance(.15)
  ], 'kubejs:nether_sulfur_ore'
  ).experience(0.5).energy(3200).id("atlanabyss:smelter_nether_sulfur_ore")

  remove('createaddition:liquid_burning/ethanol')
  //能源炉燃料
  compressionFuel('createaddition:seed_oil', 80000);
  compressionFuel('createaddition:bioethanol', 500000);
  compressionFuel('thermal:heavy_oil', 40000);
  compressionFuel('pneumaticcraft:kerosene', 60000);
  compressionFuel('thermal:light_oil', 80000);
  compressionFuel('pneumaticcraft:lpg', 100000);

  function compressionFuel(fluid, energy) {
    event.custom({
      type: 'thermal:compression_fuel',
      ingredient: {
        fluid: fluid,
        amount: 1000
      },
      energy: energy
    })
  }

  //电钻
  remove('thermal:flux_drill')
  event.shaped('thermal:flux_drill', [
    'AB ',
    'BCB',
    ' D ',
  ], {
    A: 'thermal:drill_head',
    B: 'thermal:cured_rubber',
    C: 'kubejs:thermal_mechanism',
    D: 'thermal:rf_coil'
  }).id("atlanabyss:flux_drill")
  //电锯
  remove('thermal:flux_saw')
  event.shaped('thermal:flux_saw', [
    'AB ',
    'BCB',
    ' D ',
  ], {
    A: 'thermal:saw_blade',
    B: 'thermal:cured_rubber',
    C: 'kubejs:thermal_mechanism',
    D: 'thermal:rf_coil'
  }).id("atlanabyss:flux_saw")

  // {
  //   "type": "thermal:flag",
  //   "flag": "mod_create"
  // }

  //核弹	
  event.shaped('thermal:nuke_tnt', [
    'ABA',
    'BAB',
    'ABA'
  ], {
    A: 'minecraft:gunpowder',
    B: 'biggerreactors:uranium_dust'
  }).id("atlanabyss:nuke_tnt")

  event.shaped('4x thermal:nuke_grenade', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:gunpowder',
    B: 'biggerreactors:uranium_dust',
    C: 'thermal:lead_ingot'
  }).id("atlanabyss:nuke_grenade")
  //PNT
  event.shaped('thermal:phyto_tnt', [
    'ABA',
    'BAB',
    'ABA'
  ], {
    A: 'minecraft:gunpowder',
    B: 'thermal:phytogro'
  }).id("atlanabyss:phyto_tnt")

  event.shaped('4x thermal:phyto_grenade', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:gunpowder',
    B: 'thermal:phytogro',
    C: 'minecraft:iron_ingot'
  }).id("atlanabyss:phyto_grenade")
})