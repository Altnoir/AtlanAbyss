onEvent('worldgen.add', event => {
  event.addOre(ore => {
    ore.id = 'kubejs:end_bismuth_ore' // (可选)自定义id
    ore.biomes = {               //指定的群系
      id: 'minecraft:the_end',
      id: 'minecraft:end_barrens',
      id: 'minecraft:small_end_islands',
      id: 'minecraft:end_midlands',
      id: 'minecraft:end_highlands'
    }
    ore.addTarget('minecraft:end_stone', 'kubejs:end_bismuth_ore') //将末地石替换为末地铋矿

    ore.count([18, 72])             // 随机生成18到54个矿脉，可以使用单个数字来生成固定数量的方块
      .squared()                      // 随机地将矿石分散在整个区块中，而不是整整齐齐一列一列的生成

    // 更多可选参数
    ore.size = 3                            // max.矿脉大小
    ore.noSurface = 1                       // 如果矿石暴露在空气中，将有概率放弃
    ore.worldgenLayer = 'underground_ores'  // 矿石应该按哪个生成步骤生成
    ore.chance = 0					                // 如果不等于0并且未设置count，则每个区块有1/n的机会生成矿石
  });

  event.addOre(ore => {
    ore.id = 'kubejs:end_quartz_ore'
    ore.biomes = {
      id: 'minecraft:the_end',
      id: 'minecraft:end_barrens',
      id: 'minecraft:small_end_islands',
      id: 'minecraft:end_midlands',
      id: 'minecraft:end_highlands'
    }
    ore.addTarget('minecraft:end_stone', 'ae2:deepslate_quartz_ore') //赛特斯石英矿

    ore.count([32, 88])
      .squared()

    ore.size = 9
    ore.noSurface = 1
    ore.worldgenLayer = 'underground_ores'
  });

  const { anchors } = event;

  event.addOre(ore => {
    ore.id = 'kubejs:moon_osmium_ore'
    ore.biomes = {
      id: 'beyond_earth:moon',
      id: 'beyond_earth:moon_desert'
    }
    ore.addTarget('beyond_earth:moon_stone', 'kubejs:moon_osmium_ore') //月球锇矿

    ore.count([16, 32])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(9),
        anchors.absolute(90)
      )

    ore.size = 9
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:mercury_silver_ore'
    ore.biomes = {
      id: 'beyond_earth:mercury'
    }
    ore.addTarget('beyond_earth:mercury_stone', 'kubejs:mercury_silver_ore') //水星银矿

    ore.count([24, 42])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(-32),
        anchors.absolute(70)
      )

    ore.size = 9
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:nether_sulfur_ore'
    ore.biomes = '^nether'

    ore.addTarget('#forge:netherrack', 'kubejs:nether_sulfur_ore')//下界硫矿

    ore.count([12, 18])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(16),
        anchors.absolute(48)
      )

    ore.size = 10
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:nether_aluminum_ore'
    ore.biomes = '^nether'

    ore.addTarget('#forge:netherrack', 'kubejs:nether_aluminum_ore')//下界铝矿

    ore.count([8, 16])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(104),
        anchors.absolute(128)
      )

    ore.size = 6
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:inversia_uranium_ore'
    ore.biomes = /^inversia:.*/

    ore.addTarget('minecraft:deepslate', 'kubejs:inversia_uranium_ore')//颠倒铀矿

    ore.count([9, 18])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(188),
        anchors.absolute(255)
      )

    ore.size = 15
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:inversia_lead_ore'
    ore.biomes = /^inversia:.*/

    ore.addTarget('minecraft:deepslate', 'thermal:deepslate_lead_ore')//颠倒铅矿

    ore.count([24, 32])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(180),
        anchors.absolute(255)
      )

    ore.size = 24
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:inversia_diamond_ore'
    ore.biomes = /^inversia:.*/

    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_diamond_ore')//颠倒钻石矿

    ore.count([8, 12])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(198),
        anchors.absolute(255)
      )

    ore.size = 11
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:inversia_lapis_ore'
    ore.biomes = /^inversia:.*/

    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_lapis_ore')//颠倒青金石矿

    ore.count([12, 24])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(198),
        anchors.absolute(255)
      )

    ore.size = 8
    ore.noSurface = 0.9
    ore.worldgenLayer = 'underground_ores'
  });

  event.addOre(ore => {
    ore.id = 'kubejs:inversia_redstone_ore'
    ore.biomes = /^inversia:.*/

    ore.addTarget('minecraft:deepslate', 'minecraft:deepslate_redstone_ore')//颠倒红石矿

    ore.count([16, 32])
      .squared()
      .triangleHeight(
        anchors.aboveBottom(168),
        anchors.absolute(255)
      )

    ore.size = 12
    ore.noSurface = 1
    ore.worldgenLayer = 'underground_ores'
  });
})