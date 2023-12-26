onEvent('recipes', event => {
  let remove = (name) => {
    event.remove({ id: name })
  }
  //铜 
  remove('tconstruct:common/materials/copper_ingot_from_nuggets')
  remove('tconstruct:common/materials/copper_nugget_from_ingot')
  //金齿轮
  remove('tconstruct:smeltery/casts/gold_casts/gears')
  remove('tconstruct:smeltery/casts/red_sand_casts/gears')
  remove('tconstruct:smeltery/casts/sand_casts/gears')
  //浇筑合成板
  remove(/^tconstruct:smeltery.*plate_gold_cast$/)
  remove(/^tconstruct:smeltery.*plate_sand_cast$/)
  //浇筑钱币板
  remove(/^tconstruct:smeltery.*coin_gold_cast$/)
  remove(/^tconstruct:smeltery.*coin_sand_cast$/)
  //铝
  remove('tconstruct:smeltery/melting/metal/aluminum/ore_singular')
  remove('tconstruct:smeltery/melting/metal/aluminum/raw_block')
  remove('tconstruct:smeltery/melting/metal/aluminum/raw')
  //铀
  remove('tconstruct:smeltery/melting/metal/uranium/ore_singular')
  remove('tconstruct:smeltery/melting/metal/uranium/raw_block')
  remove('tconstruct:smeltery/melting/metal/uranium/raw')
  remove('tconstruct:smeltery/melting/metal/uranium/ingot')
  //炽铁
  remove('twilightforest:smeltery/melting/metal/fiery/nugget')
  //骑士金属
  remove('twilightforest:smeltery/melting/metal/knightmetal/nugget')
  event.custom({
    type: 'tconstruct:melting',
    ingredient: {
      item: 'kubejs:uranium_ingot'
    },
    result: {
      fluid: 'tconstruct:molten_uranium',
      amount: 90
    },
    temperature: 830,
    time: 61
  }).id("llmion:tc_melting_uranium_ingot");

  remove('tconstruct:tools/modifiers/slotless/embellishment_uranium')
  event.custom({
    type: 'tconstruct:swappable_modifier',
    inputs: [
      {
        item: 'kubejs:uranium_ingot'
      },
      {
        item: 'kubejs:uranium_ingot'
      },
      {
        item: 'kubejs:uranium_ingot'
      }
    ],
    tools: {
      tag: 'tconstruct:modifiable/embellishment/metal'
    },
    allow_crystal: false,
    result: {
      name: 'tconstruct:embellishment',
      value: 'tconstruct:uranium'
    }
  }).id("llmion:tc_embellishment_uranium");

  remove('tconstruct:smeltery/casting/metal/uranium/ingot_gold_cast')
  remove('tconstruct:smeltery/casting/metal/uranium/ingot_sand_cast')
  event.custom({
    type: 'tconstruct:casting_table',
    cast: {
      tag: 'tconstruct:casts/multi_use/ingot'
    },
    fluid: {
      tag: 'forge:molten_uranium',
      amount: 90
    },
    result: {
      item: 'kubejs:uranium_ingot'
    },
    cooling_time: 61
  }).id("llmion:tc_casting_uranium_ingot_gold_cast");
  event.custom({
    type: 'tconstruct:casting_table',
    cast: {
      tag: 'tconstruct:casts/single_use/ingot'
    },
    cast_consumed: true,
    fluid: {
      tag: 'forge:molten_uranium',
      amount: 90
    },
    result: {
      item: 'kubejs:uranium_ingot'
    },
    cooling_time: 61
  }).id("llmion:tc_casting_uranium_ingot_sand_cast");

  //魂钢
  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      {
        tag: 'forge:molten_iron',
        amount: 180
      },
      {
        tag: 'tconstruct:liquid_soul',
        amount: 250
      }
    ],
    result: {
      fluid: 'tconstruct:molten_soulsteel',
      amount: 270
    },
    temperature: 1200
  }).id("llmion:ore_molten_steelsoul");

  //熔融末影→谐振末影
  event.recipes.createMixing(Fluid.of('thermal:ender', 250),
    Fluid.of('tconstruct:molten_ender', 250)
  ).superheated().id('llmion:superheated_tc_molten_ender')

  //粉碎矿熔炼
  function oreMelting(ingredient, result, ra, dt, t, byproducts, ba, id) {
    event.custom({
      type: 'tconstruct:ore_melting',
      rate: 'metal',
      ingredient: {
        item: ingredient
      },
      result: {
        fluid: result,
        amount: ra
      },
      temperature: dt,
      time: t,
      byproducts: [
        {
          fluid: byproducts,
          amount: ba
        }
      ]
    }).id("llmion:ore_melting_" + id);
  }

  oreMelting('create:crushed_raw_iron', 'tconstruct:molten_iron', 90, 800, 90, 'tconstruct:molten_nickel', 90, 'crushed_iron')
  oreMelting('create:crushed_raw_gold', 'tconstruct:molten_gold', 90, 700, 85, 'tconstruct:molten_copper', 90, 'crushed_gold')
  oreMelting('create:crushed_raw_copper', 'tconstruct:molten_copper', 90, 500, 75, 'tconstruct:molten_gold', 90, 'crushed_copper')
  oreMelting('create:crushed_raw_zinc', 'tconstruct:molten_zinc', 90, 420, 70, 'tconstruct:molten_tin', 90, 'crushed_zinc')
  oreMelting('create:crushed_raw_silver', 'tconstruct:molten_silver', 90, 790, 90, 'tconstruct:molten_platinum', 90, 'crushed_silver')
  oreMelting('create:crushed_raw_tin', 'tconstruct:molten_tin', 90, 225, 59, 'tconstruct:molten_silver', 90, 'crushed_tin')
  oreMelting('create:crushed_raw_lead', 'tconstruct:molten_lead', 90, 330, 65, 'tconstruct:molten_tungsten', 90, 'crushed_lead')
  oreMelting('create:crushed_raw_nickel', 'tconstruct:molten_nickel', 90, 950, 97, 'tconstruct:molten_iron', 90, 'crushed_nickel')

  //粘液种子
  event.shapeless('tconstruct:earth_slime_grass_seeds', ['botania:grass_seeds', 'minecraft:slime_ball']).id("llmion:earth_slime_grass_seeds")//绿种子
  event.shapeless('tconstruct:sky_slime_grass_seeds', ['botania:grass_seeds', 'tconstruct:sky_slime_ball']).id("llmion:sky_slime_grass_seeds")//蓝种子
  event.shapeless('tconstruct:blood_slime_grass_seeds', ['botania:grass_seeds', 'tconstruct:blood_slime_ball']).id("llmion:blood_slime_grass_seeds")//红种子
  event.shapeless('tconstruct:ender_slime_grass_seeds', ['botania:grass_seeds', 'tconstruct:ender_slime_ball']).id("llmion:ender_slime_grass_seeds")//紫种子
  //树苗
  event.recipes.botania.mana_infusion('tconstruct:earth_slime_sapling', 'ars_nouveau:green_archwood_sapling',
    120, 'minecraft:amethyst_block').id("llmion:earth_slime_sapling")
  event.recipes.botania.mana_infusion('tconstruct:sky_slime_sapling', 'ars_nouveau:blue_archwood_sapling',
    120, 'minecraft:amethyst_block').id("llmion:sky_slime_sapling")
  event.recipes.botania.mana_infusion('tconstruct:ender_slime_sapling', 'ars_nouveau:purple_archwood_sapling',
    120, 'minecraft:amethyst_block').id("llmion:ender_slime_sapling")
  event.recipes.botania.mana_infusion('tconstruct:blood_slime_sapling', 'ars_nouveau:red_archwood_sapling',
    120, 'minecraft:amethyst_block').id("llmion:blood_slime_sapling")
})