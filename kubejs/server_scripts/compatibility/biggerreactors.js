onEvent('recipes', (event) => {
    let remove = (name) => {
        event.remove({ id: name })
    }
    let { create, thermal } = event.recipes;

    //蓝晶
    remove('biggerreactors:crafting/uranium_to_cyanite')
    remove('thermal:machine/biggerreactors/pulverizer_mod_cyanite_ingot')
    remove('biggerreactors:crafting/cyanite_block')
    remove('biggerreactors:smelting/cyanite_ingot')
    remove('biggerreactors:crafting/cyanite_ingot')
    //钚
    remove('thermal:machine/biggerreactors/pulverizer_mod_blutonium_ingot')
    remove('biggerreactors:crafting/blutonium_block')
    remove('biggerreactors:smelting/blutonium_ingot')
    remove('biggerreactors:crafting/blutonium_ingot')
    //铀
    remove('biggerreactors:smelting/uranium_ore')
    remove('thermal:machine/biggerreactors/pulverizer_mod_uranium_ore')
    //铀粉
    remove('thermal:machine/biggerreactors/pulverizer_mod_uranium_ingot')
    remove('biggerreactors:smelting/uranium_ingot')



    thermal.pulverizer([
        'biggerreactors:uranium_dust',
    ], 'kubejs:uranium_ingot'
    ).experience(0.5).id('atlanabyss:pulverizer_uranium_dust');

    //铀块
    remove('biggerreactors:crafting/uranium_block')
    remove('biggerreactors:crafting/uranium_ingot')
    event.shaped('biggerreactors:uranium_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:uranium_ingot'
    }).id('atlanabyss:uranium_block_from_ingot')
    event.shapeless('9x kubejs:uranium_ingot', [
        'biggerreactors:uranium_block'
    ]).id('atlanabyss:uranium_ingot_from_block')
    //熔融铀
    create.mixing(Fluid.of('tconstruct:molten_uranium', 125), [
        'create:crushed_raw_uranium',
        'thermal:sulfur_dust'
    ]).superheated().id('atlanabyss:molten_uranium')
    thermal.smelter('kubejs:uranium_ingot', [
        'create:crushed_raw_uranium',
        'thermal:sulfur_dust'
    ]).energy(20000).id('atlanabyss:smelter_crushed_raw_uranium')
    //铀核心
    let uc = ('kubejs:incomplete_core_container')
    create.sequenced_assembly(['kubejs:uranium_core'
    ], 'thermal:lead_plate', [
        create.filling(uc, [uc, Fluid.of('tconstruct:molten_uranium', 125)]),
        create.deploying(uc, [uc, 'kubejs:tungsten_ingot']),
        create.deploying(uc, [uc, 'thermal:cured_rubber']),
    ]).transitionalItem(uc).loops(1).id('atlanabyss:uranium_core')
    //铀燃料棒
    create.mechanical_crafting('biggerreactors:uranium_ingot', [
        'AA',
        'AA',
        'AA',
        'AA'
    ], {
        A: 'kubejs:uranium_core'
    }).id('atlanabyss:uranium_fuel_rod')
    //贫铀
    create.mixing('4x kubejs:depleted_uranium', [
        'biggerreactors:cyanite_ingot',
        'thermal:sulfur_dust',
        'thermal:niter_dust',
        'create:crushed_raw_uranium'
    ]).id('atlanabyss:depleted_uranium')
    //熔融钚
    create.mixing(Fluid.of('kubejs:molten_plutonium', 10), [
        'biggerreactors:cyanite_ingot',
        '4x kubejs:depleted_uranium'
    ]).superheated().id('atlanabyss:molten_plutonium')
    //钚核心
    let pc = ('kubejs:incomplete_core_container')
    create.sequenced_assembly([
        'kubejs:plutonium_core'
    ], 'thermal:lead_plate', [
        create.filling(pc, [pc, Fluid.of('kubejs:molten_plutonium', 80)]),
        create.deploying(pc, [pc, 'kubejs:tungsten_ingot']),
        create.deploying(pc, [pc, 'thermal:cured_rubber'])
    ]).transitionalItem(pc).loops(1).id('atlanabyss:plutonium_core')
    //钚燃料棒
    create.mechanical_crafting('biggerreactors:blutonium_ingot', [
        'AA',
        'AA',
        'AA',
        'AA'
    ], {
        A: 'kubejs:plutonium_core'
    }).id('atlanabyss:plutonium_fuel_rod')
    //钚粒
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/multi_use/nugget' },
        fluid: { tag: 'forge:molten_plutonium', amount: 10 },
        result: { item: 'kubejs:plutonium_nugget' },
        cooling_time: 60
    }).id('atlanabyss:plutonium_nugget_gold_cast')
    event.custom({
        type: 'tconstruct:casting_table',
        cast: { tag: 'tconstruct:casts/single_use/nugget' },
        cast_consumed: true,
        fluid: { tag: 'forge:molten_plutonium', amount: 10 },
        result: { item: 'kubejs:plutonium_nugget' },
        cooling_time: 60
    }).id('atlanabyss:plutonium_nugget_sand_cast')
    //钚锭
    create.mechanical_crafting('kubejs:plutonium_ingot', [
        'AAAAA',
        'AABAA',
    ], {
        A: 'kubejs:plutonium_nugget',
        B: 'botania:terrasteel_nugget'
    }).id('atlanabyss:plutonium_ingot')
    //钚块
    event.shaped('kubejs:plutonium_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'kubejs:plutonium_ingot'
    }).id('atlanabyss:plutonium_block_from_ingot')
    event.shapeless('9x kubejs:plutonium_ingot', [
        'kubejs:plutonium_block'
    ]).id('atlanabyss:plutonium_ingot_from_block')

    //镥锭
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' },
            { item: 'biggerreactors:cyanite_ingot' }
        ],
        inputFluid: '{FluidName:\"kubejs:molten_plutonium\",Amount:90}',
        output: {
            item: 'kubejs:lutetium_ingot',
            count: 1
        },
        processingTime: 400
    }).id('atlanabyss:dissolution_chamber_lutetium_ingot')
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { item: 'minecraft:netherite_scrap' },
            { item: 'minecraft:netherite_scrap' },
            { item: 'minecraft:netherite_scrap' },
            { item: 'biggerreactors:cyanite_ingot' }
        ],
        inputFluid: '{FluidName:\"industrialforegoing:ether_gas\",Amount:10}',
        output: {
            item: 'kubejs:lutetium_ingot',
            count: 1
        },
        processingTime: 400
    }).id('atlanabyss:dissolution_chamber_lutetium_ingot2')

    //石墨棒
    event.custom({
        type: 'createaddition:rolling',
        input: { item: 'biggerreactors:graphite_ingot' },
        result: { item: 'kubejs:graphite_rod', count: 1 }
    }).id('atlanabyss:graphite_rod')

    //反应堆外壳
    remove('biggerreactors:crafting/reactor/reactor_casing')
    create.item_application('biggerreactors:reactor_casing', [
        'kubejs:osmium_casing',
        'kubejs:zirconium_alloy_ingot'
    ]).id('atlanabyss:item_application_reactor_casing')

    //反应堆玻璃
    remove('biggerreactors:crafting/reactor/reactor_glass')
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: {
            item: 'biggerreactors:reactor_casing'
        },
        cast_consumed: true,
        fluid: {
            tag: 'tconstruct:molten_glass',
            amount: 1000
        },
        result: 'biggerreactors:reactor_glass',
        cooling_time: 100
    }).id('atlanabyss:reactor_glass')
    //反应堆燃料棒
    remove('biggerreactors:crafting/reactor/reactor_fuel_rod')
    event.shaped('4x biggerreactors:reactor_fuel_rod', [
        'ABA',
        'A A',
        'A A'
    ], {
        A: 'kubejs:graphite_rod',
        B: 'thermal:lead_plate'
    }).id('atlanabyss:reactor_fuel_rod')
    //反应堆控制棒
    remove('biggerreactors:crafting/reactor/reactor_control_rod')
    event.shaped('biggerreactors:reactor_control_rod', [
        'A',
        'B',
        'C',
    ], {
        A: 'biggerreactors:reactor_fuel_rod',
        B: 'biggerreactors:reactor_casing',
        C: 'kubejs:integrated_circuit'
    }).id('atlanabyss:reactor_control_rod')
    //反应堆终端
    remove('biggerreactors:crafting/reactor/reactor_terminal')
    event.shaped('biggerreactors:reactor_terminal', [
        ' C ',
        'BAB'
    ], {
        A: 'biggerreactors:reactor_casing',
        B: 'kubejs:integrated_circuit',
        C: 'minecraft:black_stained_glass_pane'
    }).id('atlanabyss:reactor_terminal')
    //反应堆红石接口
    remove('biggerreactors:crafting/reactor/reactor_redstone_port')
    event.shaped('biggerreactors:reactor_redstone_port', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'biggerreactors:reactor_casing',
        B: 'minecraft:redstone'
    }).id('atlanabyss:reactor_redstone_port')
    //反应堆电脑接口
    remove('biggerreactors:crafting/reactor/reactor_computer_port')
    //反应堆能量接口
    remove('biggerreactors:crafting/reactor/reactor_power_tap')
    event.shaped('biggerreactors:reactor_power_tap', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'biggerreactors:reactor_casing',
        B: '#forge:wires'
    }).id('atlanabyss:reactor_power_tap')
    //反应堆访问接口
    remove('biggerreactors:crafting/reactor/reactor_access_port')
    event.shapeless('biggerreactors:reactor_access_port', [
        'biggerreactors:reactor_casing',
        'create:chute'
    ]).id('atlanabyss:reactor_access_port')
    //反应堆冷却接口
    remove('biggerreactors:crafting/reactor/reactor_coolant_port')
    event.shapeless('biggerreactors:reactor_coolant_port', [
        'biggerreactors:reactor_casing',
        'create:fluid_pipe'
    ]).id('atlanabyss:reactor_coolant_port')
    //反应堆冷却液棒
    remove('biggerreactors:crafting/reactor/reactor_manifold')
    event.shaped('4x biggerreactors:reactor_manifold', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'createaddition:iron_rod',
        B: 'kubejs:aluminum_sheet'
    }).id('atlanabyss:reactor_manifold')

    //涡轮机外壳
    remove('biggerreactors:crafting/turbine/turbine_casing')
    create.item_application('biggerreactors:turbine_casing', [
        'kubejs:osmium_casing',
        'kubejs:aluminium_alloy_ingot'
    ]).id('atlanabyss:item_application_turbine_casing')

    //涡轮机玻璃
    remove('biggerreactors:crafting/turbine/turbine_glass')
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: {
            item: 'biggerreactors:turbine_casing'
        },
        cast_consumed: true,
        fluid: {
            tag: 'tconstruct:molten_glass',
            amount: 1000
        },
        result: 'biggerreactors:turbine_glass',
        cooling_time: 100
    }).id('atlanabyss:turbine_glass')
    //涡轮机终端
    remove('biggerreactors:crafting/turbine/turbine_terminal')
    event.shaped('biggerreactors:turbine_terminal', [
        ' C ',
        'BAB'
    ], {
        A: 'biggerreactors:turbine_casing',
        B: 'kubejs:integrated_circuit',
        C: 'minecraft:black_stained_glass_pane'
    }).id('atlanabyss:turbine_terminal')
    //涡轮机电脑接口
    remove('biggerreactors:crafting/turbine/turbine_computer_port')
    //涡轮机能量接口
    remove('biggerreactors:crafting/turbine/turbine_power_tap')
    event.shaped('biggerreactors:turbine_power_tap', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'biggerreactors:turbine_casing',
        B: '#forge:wires'
    }).id('atlanabyss:turbine_power_tap')
    //反应堆冷却接口
    remove('biggerreactors:crafting/turbine/turbine_fluid_port')
    event.shapeless('biggerreactors:turbine_fluid_port', [
        'biggerreactors:turbine_casing',
        'create:fluid_pipe'
    ]).id('atlanabyss:turbine_fluid_port')
    //涡轮机叶片
    remove('biggerreactors:crafting/turbine/turbine_rotor_blade')
    event.shaped('4x biggerreactors:turbine_rotor_blade', [
        'A',
        'A',
        'A'
    ], {
        A: 'thermal:steel_plate'
    }).id('atlanabyss:turbine_rotor_blade')
    //涡轮机转轴
    remove('biggerreactors:crafting/turbine/turbine_rotor_shaft')
    event.shaped('biggerreactors:turbine_rotor_shaft', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'thermal:steel_plate',
        B: 'thermal:steel_ingot'
    }).id('atlanabyss:turbine_rotor_shaft')
    //涡轮转子轴承
    remove('biggerreactors:crafting/turbine/turbine_rotor_bearing')
    event.shapeless('biggerreactors:turbine_rotor_bearing', [
        'biggerreactors:turbine_casing',
        'biggerreactors:turbine_rotor_shaft'
    ]).id('atlanabyss:turbine_rotor_bearing')
    //涡轮机发电模块(镥块)
    remove('thermal:machine/biggerreactors/pulverizer_mod_luducrute_ingot')

    remove('biggerreactors:crafting/ludicrite_ingot')
    remove('biggerreactors:smelting/ludicrite_ingot')

    remove('biggerreactors:crafting/ludicrite_block')
    remove('biggerreactors:crafting/ludicrite_block_nether_star')
    remove('biggerreactors:crafting/ludicrite_block_enderium')
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: {
            item: 'biggerreactors:turbine_casing'
        },
        cast_consumed: true,
        fluid: {
            tag: 'tconstruct:molten_copper',
            amount: 810
        },
        result: 'biggerreactors:ludicrite_block',
        cooling_time: 200
    }).id('atlanabyss:turbine_power')

    //热交换器外壳
    remove('biggerreactors:crafting/heat_exchanger/casing')
    create.item_application('biggerreactors:heat_exchanger_casing', [
        'kubejs:osmium_casing',
        'kubejs:lutetium_ingot'
    ]).id('atlanabyss:item_application_heat_exchanger_casing')

    //热交换器玻璃
    remove('biggerreactors:crafting/heat_exchanger/glass')
    event.custom({
        type: 'tconstruct:casting_basin',
        cast: {
            item: 'biggerreactors:heat_exchanger_casing'
        },
        cast_consumed: true,
        fluid: {
            tag: 'tconstruct:molten_glass',
            amount: 1000
        },
        result: 'biggerreactors:heat_exchanger_glass',
        cooling_time: 100
    }).id('atlanabyss:heat_exchanger_glass')
    //热交换器终端
    remove('biggerreactors:crafting/heat_exchanger/terminal')
    event.shaped('biggerreactors:heat_exchanger_terminal', [
        ' C ',
        'BAB'
    ], {
        A: 'biggerreactors:heat_exchanger_casing',
        B: 'kubejs:integrated_circuit',
        C: 'minecraft:black_stained_glass_pane'
    }).id('atlanabyss:heat_exchanger_terminal')
    //热交换器电脑接口
    remove('biggerreactors:crafting/heat_exchanger/computer_port')
    //热交换器冷却接口
    remove('biggerreactors:crafting/heat_exchanger/fluid_port')
    event.shapeless('biggerreactors:heat_exchanger_fluid_port', [
        'biggerreactors:heat_exchanger_casing',
        'create:fluid_pipe'
    ]).id('atlanabyss:heat_exchanger_fluid_port')
    //热交换器气化通道
    remove('biggerreactors:crafting/heat_exchanger/evaporator_channel')
    event.shaped('biggerreactors:heat_exchanger_evaporator_channel', [
        'A A',
        'A A',
        'A A'
    ], {
        A: 'createaddition:copper_rod'
    }).id('atlanabyss:heat_exchanger_evaporator_channel')
    //热交换器冷凝通道
    remove('biggerreactors:crafting/heat_exchanger/condenser_channel_alt')
    event.shapeless('biggerreactors:heat_exchanger_condenser_channel', [
        'biggerreactors:heat_exchanger_evaporator_channel',
    ]).id('atlanabyss:heat_exchanger_condenser_from_evaporator')
    remove('biggerreactors:crafting/heat_exchanger/evaporator_channel_alt')
    event.shapeless('biggerreactors:heat_exchanger_evaporator_channel', [
        'biggerreactors:heat_exchanger_condenser_channel',
    ]).id('atlanabyss:heat_exchanger_evaporator_from_condenser')
})