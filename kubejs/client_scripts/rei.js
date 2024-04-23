//priority: 0

//隐藏jei物品
onEvent('rei.hide.items', event => {
	const hideId = (name) => event.hide(name);
	const nameId = [
		//PNC
		'pneumaticcraft:wheat_flour',
		'pneumaticcraft:ethanol_bucket',
		'pneumaticcraft:oil_bucket',
		'pneumaticcraft:diesel_bucket',
		'pneumaticcraft:gasoline_bucket',
		'pneumaticcraft:biodiesel_bucket',
		'pneumaticcraft:vegetable_oil_bucket',
		//多余的
		'pneumaticcraft:pneumatic_wrench',//气动扳手
		Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'),//pnc手册
		'pneumaticcraft:ingot_iron_compressed',//压缩铁锭
		'pneumaticcraft:logistics_configurator',//物流配置器
		Item.of('pneumaticcraft:logistics_configurator', '{"pneumaticcraft:air":30000}'),//物流配置器
		'pneumaticcraft:pressure_chamber/turbine_blade',//轮机扇叶
		'pneumaticcraft:turbine_rotor',//轮机转子
		'pneumaticcraft:programming_puzzle',//编程拼图
		'pneumaticcraft:gps_tool',//定位工具
		'pneumaticcraft:gps_area_tool',//区域定位工具
		'pneumaticcraft:remote',//远程终端
		'pneumaticcraft:programmer',//编程器
		'pneumaticcraft:security_station',//安全站
		'pneumaticcraft:programmable_controller',//可编程控制器
		'pneumaticcraft:tag_workbench',//标签工作台
		'pneumaticcraft:transfer_gadget',//传输装置
		'pneumaticcraft:reinforced_chest',//强化箱子
		'pneumaticcraft:reinforced_chest_kit',//强化箱子升级
		'pneumaticcraft:smart_chest',//智能箱子
		'pneumaticcraft:smart_chest_kit',//智能箱子升级
		'pneumaticcraft:seismic_sensor',//地下石油探测器
		'pneumaticcraft:crop_support',//作物架
		'pneumaticcraft:gas_lift',//气举
		'pneumaticcraft:drill_pipe',//气举钻管
		'pneumaticcraft:universal_sensor',//万能传感器
		'pneumaticcraft:aphorism_tile',//格言瓷砖
		'pneumaticcraft:stone_base',//石质基座
		'pneumaticcraft:cannon_barrel',//炮管
		'pneumaticcraft:air_cannon',//空气炮
		'pneumaticcraft:compressed_iron_gear',//压缩铁齿轮
		'pneumaticcraft:flux_compressor',//通量压缩机
		'pneumaticcraft:pneumatic_dynamo',//气动能源炉
		'pneumaticcraft:elevator_frame',//电梯框架
		'pneumaticcraft:elevator_caller',//电梯呼叫机
		'pneumaticcraft:elevator_base',//电梯基座
		'pneumaticcraft:compressed_iron_helmet',//头盔
		'pneumaticcraft:compressed_iron_chestplate',//胸甲
		'pneumaticcraft:compressed_iron_leggings',//裤子
		'pneumaticcraft:compressed_iron_boots',//鞋子
		'pneumaticcraft:pneumatic_helmet',//气动头盔
		'pneumaticcraft:pneumatic_chestplate',//气动胸甲
		'pneumaticcraft:pneumatic_leggings',//气动裤子
		'pneumaticcraft:pneumatic_boots',//气动鞋子
		'pneumaticcraft:minigun',//机枪
		Item.of('pneumaticcraft:minigun', '{"pneumaticcraft:air":30000}'),
		'pneumaticcraft:sentry_turret',//机枪塔
		'pneumaticcraft:gun_ammo',//机枪弹药
		'pneumaticcraft:gun_ammo_incendiary',//机枪弹药/烧
		'pneumaticcraft:gun_ammo_weighted',//机枪弹药/重
		'pneumaticcraft:gun_ammo_ap',//机枪弹药/破
		'pneumaticcraft:gun_ammo_explosive',//机枪弹药/炸
		'pneumaticcraft:gun_ammo_freezing',//机枪弹药/冰
		'pneumaticcraft:transistor',//晶体管
		'pneumaticcraft:capacitor',//电容
		//升级
		'pneumaticcraft:minigun_upgrade',//机枪升级
		'pneumaticcraft:item_life_upgrade',//寿命升级
		'pneumaticcraft:armor_upgrade',//护甲升级
		'pneumaticcraft:inventory_upgrade',//物品栏升级
		'pneumaticcraft:block_tracker_upgrade',//方块追踪升级
		'pneumaticcraft:standby_upgrade',//备用升级
		'pneumaticcraft:search_upgrade',//物品搜寻升级
		'pneumaticcraft:coordinate_tracker_upgrade',//坐标追踪升级
		'pneumaticcraft:charging_upgrade',//充气升级
		'pneumaticcraft:jet_boots_upgrade_1',//喷射鞋升级1
		'pneumaticcraft:jet_boots_upgrade_2',//喷射鞋升级2
		'pneumaticcraft:jet_boots_upgrade_3',//喷射鞋升级3
		'pneumaticcraft:jet_boots_upgrade_4',//喷射鞋升级4
		'pneumaticcraft:jet_boots_upgrade_5',//喷射鞋升级5
		'pneumaticcraft:night_vision_upgrade',//夜视升级
		'pneumaticcraft:scuba_upgrade',//水肺升级
		'pneumaticcraft:creative_upgrade',//创造升级
		'pneumaticcraft:jumping_upgrade_1',//跳跃升级1
		'pneumaticcraft:jumping_upgrade_2',//跳跃升级2
		'pneumaticcraft:jumping_upgrade_3',//跳跃升级3
		'pneumaticcraft:jumping_upgrade_4',//跳跃升级4
		'pneumaticcraft:flippers_upgrade',//脚蹼升级
		'pneumaticcraft:radiation_shielding_upgrade',//辐射升级
		'pneumaticcraft:gilded_upgrade',//G升级
		'pneumaticcraft:ender_visor_upgrade',//EV升级
		'pneumaticcraft:stomp_upgrade',//S升级
		'pneumaticcraft:elytra_upgrade',//E升级
		'pneumaticcraft:thaumcraft_upgrade',//神秘时代升级
		'pneumaticcraft:air_conditioning_upgrade',//空调升级
		//物流框架
		/pneumaticcraft:logistics_frame_/,
		'pneumaticcraft:logistics_core',
		'pneumaticcraft:logistics_module',
		'pneumaticcraft:tag_filter',
		'pneumaticcraft:classify_filter',
		//无人机
		'pneumaticcraft:drone',
		Item.of('pneumaticcraft:drone', '{"pneumaticcraft:air":120000}'),
		'pneumaticcraft:logistics_drone',
		Item.of('pneumaticcraft:logistics_drone', '{"pneumaticcraft:air":120000}'),
		'pneumaticcraft:harvesting_drone',
		Item.of('pneumaticcraft:harvesting_drone', '{"pneumaticcraft:air":120000}'),
		'pneumaticcraft:guard_drone',
		Item.of('pneumaticcraft:guard_drone', '{"pneumaticcraft:air":120000}'),
		'pneumaticcraft:collector_drone',
		Item.of('pneumaticcraft:collector_drone', '{"pneumaticcraft:air":120000}'),
		//网络程序
		'pneumaticcraft:diagnostic_subroutine',
		'pneumaticcraft:network_api',
		'pneumaticcraft:network_data_storage',
		'pneumaticcraft:network_io_port',
		'pneumaticcraft:network_registry',
		'pneumaticcraft:network_node',
		//储罐
		'pneumaticcraft:small_tank',
		'pneumaticcraft:medium_tank',
		'pneumaticcraft:large_tank',
		'pneumaticcraft:huge_tank',
		//强化石
		/pneumaticcraft:reinforced_stone/,
		/pneumaticcraft:reinforced_brick/,
		//导热框架
		'pneumaticcraft:heat_frame',
		//                              分割线                              // 
		//                              分割线                              // 
		//                              分割线                              //  
		//TE
		'thermal:sap_bucket',//树汁桶
		'thermal:syrup_bucket',//糖浆桶
		'thermal:resin_bucket',//树脂桶
		'thermal:tree_oil_bucket',//树油桶
		'thermal:gunpowder_block',//火药块
		'thermal:apple_block',//箱装苹果
		'thermal:carrot_block',//箱装胡萝卜
		'thermal:potato_block',//箱装马铃薯
		'thermal:beetroot_block',//箱装甜菜根
		'thermal:machine_furnace',//熔炉
		//'thermal:machine_sawmill',//锯木机
		//'thermal:machine_press',//冲压机
		'thermal:machine_bottler',//罐装机
		'thermal:machine_brewer',//罐装机
		'thermal:machine_crucible',//熔岩炉
		'thermal:machine_chiller',//冷冻机
		'thermal:machine_refinery',//流体精炼机
		'thermal:machine_pyrolyzer',//热解机
		/^thermal:energy_cell/,//能量框架
		/^thermal:fluid_cell/,//流体框架
		'thermal:iron_plate',//铁板
		'thermal:gold_plate',//金板
		'thermal:copper_plate',//铜板
		'thermal:flux_drill',//电钻
		'thermal:flux_saw',//电锯
		'thermal:fluid_reservoir',//大桶
		'thermal:satchel',//背包
		'thermal:potion_infuser',//药水注射器
		'thermal:potion_quiver',//药水箭袋
		'thermal:press_gear_die',//齿轮冲压摸具
		'createaddition:diamond_grit',//钻石粉
		'thermal:copper_nugget',//铜粒
		//青铜
		'thermal:bronze_block',
		'thermal:bronze_ingot',
		'thermal:bronze_nugget',
		'thermal:bronze_dust',
		'thermal:bronze_plate',
		'thermal:bronze_coin',
		//发电机
		'thermal:dynamo_stirling',
		'thermal:dynamo_lapidary',
		'thermal:dynamo_gourmand',
		'thermal:dynamo_numismatic',
		'thermal:dynamo_disenchantment',
		//齿轮
		'thermal:iron_gear',
		'thermal:gold_gear',
		'thermal:copper_gear',
		'thermal:netherite_gear',
		'thermal:lapis_gear',
		'thermal:diamond_gear',
		'thermal:emerald_gear',
		'thermal:quartz_gear',
		'thermal:tin_gear',
		'thermal:lead_gear',
		'thermal:silver_gear',
		'thermal:nickel_gear',
		'thermal:bronze_gear',
		'thermal:electrum_gear',
		'thermal:invar_gear',
		'thermal:constantan_gear',
		'thermal:signalum_gear',
		'thermal:lumium_gear',
		'thermal:enderium_gear',
		'thermal:steel_gear',
		//模具
		'thermal:press_coin_die',
		'thermal:press_gear_die',
		'thermal:press_packing_2x2_die',
		'thermal:press_packing_3x3_die',
		'thermal:press_unpacking_die',
		'thermal:chiller_ball_cast',
		'thermal:chiller_ingot_cast',
		'thermal:chiller_rod_cast',
		//玫瑰金
		'thermal:rose_gold_ingot',
		'thermal:rose_gold_nugget',
		'thermal:rose_gold_plate',
		'thermal:rose_gold_dust',
		'thermal:rose_gold_gear',
		'thermal:rose_gold_coin',
		'thermal:rose_gold_block',
		//钱币
		'thermal:iron_coin',
		'thermal:netherite_coin',
		'thermal:tin_coin',
		'thermal:lead_coin',
		'thermal:nickel_coin',
		'thermal:electrum_coin',
		'thermal:invar_coin',
		'thermal:constantan_coin',
		'thermal:signalum_coin',
		'thermal:lumium_coin',
		'thermal:enderium_coin',
		'thermal:steel_coin',
		//矿
		'thermal:sulfur_ore',
		'thermal:deepslate_sulfur_ore',
		//                              分割线                              // 
		//                              分割线                              // 
		//                              分割线                              // 
		//create
		'create:dough',
		'create:bar_of_chocolate',
		//createaddition
		'createaddition:electrum_ingot',
		'createaddition:electrum_nugget',
		'createaddition:electrum_sheet',
		//createoreexcavation
		'createoreexcavation:raw_diamond',
		'createoreexcavation:raw_emerald',
		'createoreexcavation:raw_redstone',
		//phosphophyllite
		'phosphophyllite:fluid_white_hole',
		'phosphophyllite:fluid_black_hole',
		'phosphophyllite:item_white_hole',
		'phosphophyllite:item_black_hole',
		'phosphophyllite:phosphophyllite_ore',
		'phosphophyllite:power_white_hole',
		'phosphophyllite:power_black_hole',
		'phosphophyllite:debug_tool',
		//biggerreactors
		'biggerreactors:uranium_ore',
		'biggerreactors:wrench',
		'biggerreactors:ludicrite_ingot',
		'biggerreactors:ludicrite_dust',
		'biggerreactors:cyanite_dust',
		'biggerreactors:cyanite_block',
		'biggerreactors:blutonium_dust',
		'biggerreactors:blutonium_block',
		'biggerreactors:reactor_computer_port',//电脑端口
		'biggerreactors:turbine_computer_port',
		'biggerreactors:heat_exchanger_computer_port',
		//tac
		'tac:round45',
		'tac:ae50',
		'tac:win_30-30',
		'tac:bullet_308',
		'tac:nato_556_bullet',
		'tac:9mm_round',
		'tac:10_gauge_round',
		'tac:58x42',
		'tac:762x25',
		'tac:762x54',
		'tac:762x39',
		'tac:50bmg',
		'tac:lapua338',
		'tac:bullet68',
		'tac:b_magnum',
		//ae2
		'ae2:ender_dust',
		'ae2:vibration_chamber',
		'ae2:charger',
		'ae2:silicon_press',
		//pipez
		'pipez:wrench',
		//neapolitan
		'neapolitan:milk_bottle',
		//kitchenkarrot
		'kitchenkarrot:ice_cubes',
		//sophisticatedbackpacks
		'sophisticatedbackpacks:crafting_upgrade',
		//twilightforest
		'twilightforest:uncrafting_table',
		//tconstruct
		'tconstruct:netherite_nugget',//下界合金粒
		'tconstruct:copper_nugget',//铜粒
		'tconstruct:honey_bucket',
		//beyond_earth
		'beyond_earth:steel_ingot',
		//黑紫方块
		'citadel:fancy_item',
		'decorative_blocks:blockstate_copy_item',
		//ftb
		/^itemfilters:/,
		//前置
		/^titanium:/,
	];
	nameId.forEach(hideId);
});


//隐藏rei类别
onEvent('rei.remove.categories', event => {
	[
		'thermal:furnace', //热力熔炉
		//'thermal:sawmill', //热力锯木机
		//'thermal:press',//冲压机
		'thermal:brewer',//罐装机
		'thermal:crucible',//熔岩炉
		'thermal:chiller',//冷冻机
		'thermal:refinery',//流体精炼机
		'thermal:pyrolyzer',//热解机
		'thermal:bottler',//流体罐装机
		//能源炉
		'thermal:stirling_fuel',//斯特林能源炉
		'thermal:numismatic_fuel',//通货能源炉
		'thermal:lapidary_fuel',//珠宝能源炉
		'thermal:disenchantment_fuel',//祛魔能源炉
		'thermal:gourmand_fuel',//饕餮能源炉
		//导热框架
		'pneumaticcraft:heat_frame_cooling',
		//拆解台
		'twilightforest:uncrafting',
		'twilightforest:uncrafting_table',
	].forEach(cat => {
		event.remove(cat)
	})
})

//rei分类
onEvent('rei.group', (event) => {
	const useNbt = [
		'potion',
		'enchanted_book',
		'splash_potion',
		'tipped_arrow',
		'lingering_potion',
		'supplementaries:bamboo_spikes_tipped',
		'netmusic:music_cd',
		'sophisticatedbackpacks:backpack',
		'sophisticatedstorage:barrel',
		'sophisticatedstorage:chest',
		'sophisticatedstorage:shulker_box',
		'touhou_little_maid:chair',
		'touhou_little_maid:garage_kit',
		'botania:twig_wand',
		'botania:dreamwood_wand',
		'botania:terra_pick',
		'botania:flight_tiara',
		'botania:brew_vial',
		'botania:brew_flask',
		'botania:blood_pendant',
		'botania:incense_stick',
		'patchouli:guide_book',
		'umapyoi:uma_soul',
		'umapyoi:uma_factor_item',
		'umapyoi:skill_book',
		'umapyoi:support_card',
		'gateways:gate_pearl',
		'apotheosis:potion_charm',
	];

	useNbt.forEach((id) => {
		const item = Item.of(id);
		const { namespace, path } = Utils.id(item.id);
		event.groupSameItem(
			`atlanabyss:rei_groups/${namespace}/${path}`,
			item.getName(),
			item
		);
	});
	//刷怪蛋
	event.groupItems(`atlanabyss:rei_groups/spawn_eggs`, `刷怪蛋`,
		/.*spawn_egg/
	);
	//桶
	event.groupItems('atlanabyss:rei_groups/buckets', "各种桶",
		/.*_bucket/
	);
	//粗矿
	event.groupItems('atlanabyss:rei_groups/raw_materials', "粗矿",
		'#forge:raw_materials'
	);
	//羊毛
	event.groupItems('atlanabyss:rei_groups/wool', "羊毛",
		'#minecraft:wool'
	);
	//石棉
	event.groupItems('atlanabyss:rei_groups/rockwool', "石棉",
		'#thermal:rockwool'
	);
	//地毯
	event.groupItems('atlanabyss:rei_groups/carpets', "地毯",
		'#minecraft:carpets'
	);
	//染色玻璃
	event.groupItems('atlanabyss:rei_groups/stained_glass', "染色玻璃",
		'#forge:stained_glass'
	);
	//染色玻璃板
	event.groupItems('atlanabyss:rei_groups/stained_glass_panes', "染色玻璃板",
		'#forge:stained_glass_panes'
	);
	//陶瓦
	event.groupItems('atlanabyss:rei_groups/terracotta', "陶瓦",
		'#minecraft:terracotta'
	);
	//带釉陶瓦
	event.groupItems('atlanabyss:rei_groups/glazed_terracotta', "带釉陶瓦",
		/.*_glazed_terracotta$/
	);
	//混凝土
	event.groupItems('atlanabyss:rei_groups/concrete', "混凝土",
		'#forge:concrete'
	);
	//混凝土粉末
	event.groupItems('atlanabyss:rei_groups/concrete_powders', "混凝土粉末",
		'#forge:concrete_powders'
	);
	//潜影盒
	event.groupItems('atlanabyss:rei_groups/shulker_boxes', "潜影盒",
		'#forge:shulker_boxes'
	);
	//木按钮
	event.groupItems('atlanabyss:rei_groups/wooden_buttons', "木按钮",
		'#minecraft:wooden_buttons'
	);
	//木压力板
	event.groupItems('atlanabyss:rei_groups/wooden_pressure_plates', "木压力板",
		['#minecraft:wooden_pressure_plates']
	);
	//木门
	event.groupItems('atlanabyss:rei_groups/wooden_doors', "木门",
		'#minecraft:wooden_doors'
	);
	//木活板门
	event.groupItems('atlanabyss:rei_groups/wooden_trapdoors', "木活板门",
		'#minecraft:wooden_trapdoors'
	);
	//木栅栏门
	event.groupItems('atlanabyss:rei_groups/wooden_fence_gates', "木栅栏门",
		'#forge:fence_gates/wooden'
	);
	//木栅栏
	event.groupItems('atlanabyss:rei_groups/wooden_fence', "木栅栏",
		'#forge:fences/wooden'
	);
	//船
	event.groupItems('atlanabyss:rei_groups/boats', "船",
		['#minecraft:boats']
	);
	//床
	event.groupItems('atlanabyss:rei_groups/beds', "床",
		'#minecraft:beds'
	);
	//旗帜
	event.groupItems('atlanabyss:rei_groups/banners', "旗帜",
		'#minecraft:banners'
	);
	//蜡烛
	event.groupItems('atlanabyss:rei_groups/candles', "蜡烛",
		'#minecraft:candles'
	);
	//唱片
	event.groupItems('atlanabyss:rei_groups/music_discs', "唱片",
		'#minecraft:music_discs'
	);
	//墙
	event.groupItems('atlanabyss:rei_groups/wall', "墙",
		/.*_wall$/
	);
	//工具箱
	event.groupItems('atlanabyss:rei_groups/toolboxes', "工具箱",
		'#create:toolboxes'
	);
	//阀门
	event.groupItems('atlanabyss:rei_groups/valve_handles', "阀门",
		'#create:valve_handles'
	);
	//坐垫
	event.groupItems('atlanabyss:rei_groups/seats', "坐垫",
		'#create:seats'
	);
	//书架
	event.groupItems('atlanabyss:rei_groups/bookshelves', "书架",
		'#forge:bookshelves'
	);
	//剑
	event.groupItems('atlanabyss:rei_groups/sword', "剑",
		[/.*_sword$/]
	);
	//锹
	event.groupItems('atlanabyss:rei_groups/shovel', "锹",
		/.*_shovel$/
	);
	//镐
	event.groupItems('atlanabyss:rei_groups/pickaxe', "锹",
		[/.*_pickaxe$/]
	);
	//斧
	event.groupItems('atlanabyss:rei_groups/axe', "斧",
		/.*_axe$/
	);
	//锄
	event.groupItems('atlanabyss:rei_groups/hoe', "锄",
		/.*_hoe$/
	);
	//头盔
	event.groupItems('atlanabyss:rei_groups/helmet', "头盔",
		[/.*_helmet$/]
	);
	//胸甲
	event.groupItems('atlanabyss:rei_groups/chestplate', "胸甲",
		[/.*_chestplate$/]
	);
	//护腿
	event.groupItems('atlanabyss:rei_groups/leggings', "护腿",
		[/.*_leggings$/]
	);
	//鞋子
	event.groupItems('atlanabyss:rei_groups/boots', "鞋子",
		/.*_boots$/
	);
	//告示牌
	event.groupItems('atlanabyss:rei_groups/signs', "告示牌",
		['#minecraft:signs']
	);
	//粗布告示牌
	event.groupItems('atlanabyss:rei_groups/canvas_signs', "粗布告示牌",
		'#farmersdelight:canvas_signs'
	);
	//挂牌
	event.groupItems('atlanabyss:rei_groups/hanging_signs', "挂牌",
		'#supplementaries:hanging_signs'
	);
	//路标
	event.groupItems('atlanabyss:rei_groups/sign_posts', "路标",
		'#supplementaries:sign_posts'
	);
	//橱柜
	event.groupItems('atlanabyss:rei_groups/cabinets', "橱柜",
		'#farmersdelight:cabinets/wooden'
	);
	//横旗
	event.groupItems('atlanabyss:rei_groups/flags', "横旗",
		'#supplementaries:flags'
	);
	//蜡烛烛台
	event.groupItems('atlanabyss:rei_groups/candle_holders', "蜡烛烛台",
		'#supplementaries:candle_holders'
	);
	//礼物盒
	event.groupItems('atlanabyss:rei_groups/presents', "礼物盒",
		'#supplementaries:presents'
	);
	//陷阱礼物盒
	event.groupItems('atlanabyss:rei_groups/trapped_presents', "陷阱礼物盒",
		/^supplementaries:trapped_present.*/
	);
	//抽屉
	event.groupItems('atlanabyss:rei_groups/drawers', "抽屉",
		'#functionalstorage:drawer'
	);
	//塑料砖块
	event.groupItems('atlanabyss:rei_groups/plastic_bricks', "塑料砖块",
		'#pneumaticcraft:plastic_bricks'
	);
	//平滑塑料砖块
	event.groupItems('atlanabyss:rei_groups/smooth_plastic_bricks', "平滑塑料砖块",
		'#pneumaticcraft:smooth_plastic_bricks'
	);
	//壁灯
	event.groupItems('atlanabyss:rei_groups/wall_lamps', "壁灯",
		'#pneumaticcraft:wall_lamps'
	);
	//壁灯（信号反转）
	event.groupItems('atlanabyss:rei_groups/wall_lamps_inverted', "壁灯（信号反转）",
		'#pneumaticcraft:wall_lamps_inverted'
	);
	event.groupItems('atlanabyss:rei_groups/knives', "刀",
		'#forge:tools/knives'
	);
	//魔符
	event.groupItems('atlanabyss:rei_groups/glyph', "魔符",
		/ars_nouveau:glyph_/
	);
	//锭
	event.groupItems('atlanabyss:rei_groups/ingots', "锭",
		[/^thermal:.*_ingot$/]
	);
	//粒
	event.groupItems('atlanabyss:rei_groups/nuggets', "粒",
		[/^thermal:.*_nugget$/]
	);
	//粉
	event.groupItems('atlanabyss:rei_groups/dusts', "粉",
		[/^thermal:.*_dust$/]
	);
	//板
	event.groupItems('atlanabyss:rei_groups/plates', "板",
		'#forge:plates'
	);
	//背包升级
	event.groupItems('atlanabyss:rei_groups/back_upgrade', "背包升级",
		[/^sophisticatedbackpacks:.*_upgrade/, 'sophisticatedbackpacks:upgrade_base']
	);
	//存储升级
	event.groupItems('atlanabyss:rei_groups/storage_upgrade', "存储升级",
		[/^sophisticatedstorage:.*_upgrade/, 'sophisticatedstorage:upgrade_base']
	);
	//精妙桶
	event.groupItems('atlanabyss:rei_groups/storage_barrel', "升级桶",
		[/^sophisticatedstorage:.*_barrel/]
	);
	//精妙箱
	event.groupItems('atlanabyss:rei_groups/storage_chest', "升级箱",
		[/^sophisticatedstorage:.*_chest/]
	);
	//精妙盒
	event.groupItems('atlanabyss:rei_groups/storage_shulker_box', "升级盒",
		[/^sophisticatedstorage:.*_shulker_box/]
	);
	//铸模
	event.groupItems('atlanabyss:rei_groups/casts', "铸模",
		['#tconstruct:casts/single_use', '#tconstruct:casts/multi_use']
	);
	//浮空花
	event.groupItems('atlanabyss:rei_groups/floating_flowers', "浮空花",
		'#botania:floating_flowers'
	);
	//花药台
	event.groupItems('atlanabyss:rei_groups/apothecary', "花药台",
		/^botania:apothecary/
	);
	//神秘花
	event.groupItems('atlanabyss:rei_groups/mystical_flowers', "神秘花",
		'#botania:mystical_flowers'
	);
	//荧光花
	event.groupItems('atlanabyss:rei_groups/shiny_flower', "荧光花",
		/^botania:.*shiny_flower$/
	);
	//染色球
	event.groupItems('atlanabyss:rei_groups/paint_ball', "染色球",
		/^ae2:.*paint_ball$/
	);
	//手册
	event.groupItems('atlanabyss:rei_groups/guide', "手册",
		'#forge:books/guide'
	);
	//tac皮肤
	event.groupItems('atlanabyss:rei_groups/tac_skin', "枪械皮肤",
		/^tac:skin_?./
	);
	//粉笔
	event.groupItems('atlanabyss:rei_groups/chalk', "粉笔",
		'#chalk:chalk'
	);
	//宠物床
	event.groupItems('atlanabyss:rei_groups/pet_beds', "宠物床",
		'#domesticationinnovation:pet_beds'
	);
	//交易卡
	event.groupItems('atlanabyss:rei_groups/trade_card', "交易卡",
		/^kubejs:trade_card_?./
	);
	//炼金混合物"
	event.groupItems('atlanabyss:rei_groups/alchemy_substrate', "炼金混合物",
		'#atlanabyss:alchemy_substrate'
	);
	//反应物
	event.groupItems('atlanabyss:rei_groups/substrates', "反应物",
		'#kubejs:substrates'
	);
	//流体
	const Fluid = [
		'minecraft:water',
		'minecraft:lava',
		'minecraft:milk',
		'pneumaticcraft:etching_acid',
		'pneumaticcraft:plastic',
		'pneumaticcraft:kerosene',
		'pneumaticcraft:lpg',
		'pneumaticcraft:lubricant',
		'pneumaticcraft:memory_essence',
		'pneumaticcraft:yeast_culture',
		'cofh_core:experience',
		'cofh_core:potion',
		'thermal:redstone',
		'thermal:glowstone',
		'thermal:ender',
		'thermal:sap',
		'thermal:syrup',
		'thermal:resin',
		'thermal:tree_oil',
		'thermal:latex',
		'thermal:creosote',
		'thermal:crude_oil',
		'thermal:heavy_oil',
		'thermal:light_oil',
		'thermal:refined_fuel',
		'create:honey',
		'create:chocolate',
		'create_enchantment_industry:ink',
		'biggerreactors:liquid_uranium',
		'biggerreactors:steam',
		'decorative_blocks:thatch',
		'tconstruct:blood',
		'tconstruct:venom',
		'tconstruct:earth_slime',
		'tconstruct:sky_slime',
		'tconstruct:ender_slime',
		'tconstruct:magma',
		'tconstruct:honey',
		'tconstruct:beetroot_soup',
		'tconstruct:mushroom_stew',
		'tconstruct:rabbit_stew',
		'tconstruct:potion',
		'tconstruct:seared_stone',
		'tconstruct:scorched_stone',
		'tconstruct:molten_clay',
		'tconstruct:molten_glass',
		'tconstruct:liquid_soul',
		'tconstruct:molten_obsidian',
		'tconstruct:molten_ender',
		'tconstruct:blazing_blood',
		'tconstruct:molten_emerald',
		'tconstruct:molten_quartz',
		'tconstruct:molten_amethyst',
		'tconstruct:molten_diamond',
		'tconstruct:molten_debris',
		'tconstruct:molten_iron',
		'tconstruct:molten_gold',
		'tconstruct:molten_copper',
		'tconstruct:molten_cobalt',
		'tconstruct:molten_slimesteel',
		'tconstruct:molten_amethyst_bronze',
		'tconstruct:molten_rose_gold',
		'tconstruct:molten_pig_iron',
		'tconstruct:molten_manyullyn',
		'tconstruct:molten_hepatizon',
		'tconstruct:molten_queens_slime',
		'tconstruct:molten_netherite',
		'tconstruct:molten_tin',
		'tconstruct:molten_aluminum',
		'tconstruct:molten_lead',
		'tconstruct:molten_silver',
		'tconstruct:molten_nickel',
		'tconstruct:molten_zinc',
		'tconstruct:molten_platinum',
		'tconstruct:molten_tungsten',
		'tconstruct:molten_osmium',
		'tconstruct:molten_uranium',
		'tconstruct:molten_brass',
		'tconstruct:molten_electrum',
		'tconstruct:molten_invar',
		'tconstruct:molten_constantan',
		'tconstruct:molten_steel',
		'tconstruct:molten_enderium',
		'tconstruct:molten_lumium',
		'tconstruct:molten_signalum',
		'create_central_kitchen:tomato_sauce',
		'create_enchantment_industry:experience',
		'create_enchantment_industry:hyper_experience',
		'createaddition:seed_oil',
		'createaddition:bioethanol',
		'twilightforest:molten_knightmetal',
		'twilightforest:molten_fiery',
		'twilightforest:fiery_essence',
		'beyond_earth:fuel',
		'beyond_earth:molten_desh',
		'beyond_earth:molten_ostrum',
		'beyond_earth:molten_calorite',
		'kubejs:alumina_solution',
		'kubejs:fine_sand',
		'kubejs:molten_plutonium',
		'kubejs:raw_logic',
		'kubejs:number_0',
		'kubejs:number_1',
		'kubejs:number_2',
		'kubejs:number_3',
		'kubejs:number_4',
		'kubejs:number_5',
		'kubejs:number_6',
		'kubejs:number_7',
		'kubejs:number_8',
		'kubejs:number_9',
		'kubejs:matrix',
	];
	event.groupFluids(
		`atlanabyss:rei_groups/fluid`,
		"流体",
		Fluid
	);
})
//隐藏rei流体
onEvent('rei.hide.fluids', event => {
	[
		'pneumaticcraft:oil',
		'pneumaticcraft:ethanol',
		'pneumaticcraft:biodiesel',
		'pneumaticcraft:diesel',
		'pneumaticcraft:gasoline',
		'pneumaticcraft:vegetable_oil',
		'thermal:sap',
		'thermal:syrup',
		'thermal:resin',
		'thermal:tree_oil',
		'cofh_core:honey',
		'cofh_core:potion',
		'sophisticatedcore:xp_still',
		'biggerreactors:liquid_obsidian',
		'beyond_earth:oil',
		'tconstruct:honey',
	].forEach(fluid => {
		event.hide(fluid);
	});
});

onEvent('rei.information', event => {
	event.addItem('biggerreactors:cyanite_ingot', 'Waste', ['可通过裂变反应堆的产出获得。']);
	event.addItem('kubejs:osmium_scrap', 'Osmium Scrap', ['守卫者死亡时概率掉落。', '（也许你需要设计建造一个守卫者农场）'])
})
