// onEvent('recipes', event => {
//     let remove = (name) => {
//         event.remove({ id: name })
//     }
//     //存储驱动器
//     remove('toms_storage:inventory_connector')
//     event.shapeless('toms_storage:ts.inventory_connector', [
//         'create:brass_casing',
//         'create:chute'
//     ]).id("atlanabyss:ts.inventory_connector")
//     //存储终端
//     remove('toms_storage:storage_terminal')
//     event.shaped('toms_storage:ts.storage_terminal', [
//         ' A ',
//         'BCD',
//         'EEE'
//     ], {
//         A: 'create:precision_mechanism',
//         B: 'create:content_observer',
//         C: 'create:display_link',
//         D: 'create:display_board',
//         E: '#minecraft:wooden_buttons'
//     }).id("atlanabyss:ts.storage_terminal")
//     //开放式存储接口
//     remove('toms_storage:open_crate')
//     event.shaped('toms_storage:ts.open_crate', [
//         'ABA',
//         'A A',
//         'ACA'
//     ], {
//         A: '#minecraft:planks',
//         B: '#minecraft:wooden_trapdoors',
//         C: '#minecraft:wooden_slabs'
//     }).id("atlanabyss:ts.open_crate")
//     //存储桥连方块
//     remove('toms_storage:trim')
//     event.shaped('2x toms_storage:ts.trim', [
//         'AAA',
//         'ABA',
//         'AAA'
//     ], {
//         A: '#forge:rods/wooden',
//         B: 'create:brass_tunnel'
//     }).id("atlanabyss:ts.trim")
//     remove('toms_storage:trim_clean')
//     event.recipes.createSplashing(['toms_storage:ts.trim'],
//         'toms_storage:ts.painted_trim'
//     ).id("atlanabyss:splashing_trim").processingTime(600)
//     //存储线缆
//     remove('toms_storage:inventory_cable')
//     event.shapeless('8x toms_storage:ts.inventory_cable', [
//         'create:brass_sheet',
//         'thermal:cured_rubber'
//     ]).id("atlanabyss:ts.inventory_cable")
//     //框架存储线缆
//     remove('toms_storage:inventory_cable_framed')
//     event.shaped('toms_storage:ts.inventory_cable_framed', [
//         'AAA',
//         'ABA',
//         'AAA'
//     ], {
//         A: '#forge:rods/wooden',
//         B: 'toms_storage:ts.inventory_cable'
//     }).id("atlanabyss:ts.inventory_cable_framed")
//     //存储线缆连接器
//     remove('toms_storage:inventory_cable_connector')
//     event.shapeless('toms_storage:ts.inventory_cable_connector', [
//         'toms_storage:ts.inventory_cable',
//         'create:chute'
//     ]).id("atlanabyss:ts.inventory_cable_connector")
//     //存储线缆连接器(filtered)
//     remove('toms_storage:inventory_cable_connector_filtered')
//     event.shaped('toms_storage:ts.inventory_cable_connector_filtered', [
//         'A',
//         'B',
//         'C'
//     ], {
//         A: 'create:brass_sheet',
//         B: 'toms_storage:ts.inventory_cable_connector',
//         C: 'create:electron_tube'
//     }).id("atlanabyss:ts.inventory_cable_connector_filtered")
//     //存储代理器
//     remove('toms_storage:inventory_proxy')
//     event.shapeless('toms_storage:ts.inventory_proxy', [
//         'toms_storage:ts.inventory_connector',
//         'create:smart_chute'
//     ]).id("atlanabyss:ts.inventory_proxy")
//     //合成终端
//     remove('toms_storage:crafting_terminal')
//     event.shaped('toms_storage:ts.crafting_terminal', [
//         'AB',
//         'CD'
//     ], {
//         A: 'minecraft:crafting_table',
//         B: 'create:sturdy_sheet',
//         C: 'create:linked_controller',
//         D: 'toms_storage:ts.storage_terminal'
//     }).id("atlanabyss:ts.crafting_terminal")
//     //基础存储漏斗
//     remove('toms_storage:inventory_hopper_basic')
//     event.shaped('toms_storage:ts.inventory_hopper_basic', [
//         'ABA',
//         ' C '
//     ], {
//         A: 'create:brass_sheet',
//         B: 'toms_storage:ts.inventory_cable',
//         C: 'minecraft:hopper'
//     }).id("atlanabyss:ts.inventory_hopper_basic")
//     //？
//     remove('toms_storage:level_emitter')
//     event.shapeless('toms_storage:ts.level_emitter', [
//         'create:content_observer',
//         'toms_storage:ts.inventory_cable'
//     ]).id("atlanabyss:ts.level_emitter")
//     //存储线缆连接器(framed)
//     remove('toms_storage:inventory_cable_connector_framed')
//     event.shaped('toms_storage:ts.inventory_cable_connector_framed', [
//         'AAA',
//         'ABA',
//         'AAA'
//     ], {
//         A: '#forge:rods/wooden',
//         B: 'toms_storage:ts.inventory_cable_connector'
//     }).id("atlanabyss:ts.inventory_cable_connector_framed")
//     //喷漆套件
//     remove('toms_storage:paint_kit')
//     event.shaped('toms_storage:ts.paint_kit', [
//         'AB',
//         'CA'
//     ], {
//         A: '#forge:dyes',
//         B: 'create:iron_sheet',
//         C: 'minecraft:iron_nugget'
//     }).id("atlanabyss:ts.paint_kit")
//     //无限终端
//     remove('toms_storage:wireless_terminal')
//     event.shapeless('toms_storage:ts.wireless_terminal', [
//         'toms_storage:ts.inventory_connector',
//         'create:linked_controller'
//     ]).id("atlanabyss:ts.wireless_terminal")
// })