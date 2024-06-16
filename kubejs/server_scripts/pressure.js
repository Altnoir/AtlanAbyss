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
	//多余的
	const removeOutput = (name) => event.remove({ output: name });
	const nameOutput = [
		'pneumaticcraft:pneumatic_wrench',//气动扳手
		Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'),//pnc手册
		'pneumaticcraft:ingot_iron_compressed',//压缩铁锭
		'pneumaticcraft:logistics_configurator',//物流配置器
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
		'pneumaticcraft:sentry_turret',//机枪塔
		'pneumaticcraft:gun_ammo',//机枪弹药
		'pneumaticcraft:gun_ammo_incendiary',//机枪弹药/烧
		'pneumaticcraft:gun_ammo_weighted',//机枪弹药/重
		'pneumaticcraft:gun_ammo_ap',//机枪弹药/破
		'pneumaticcraft:gun_ammo_explosive',//机枪弹药/炸
		'pneumaticcraft:gun_ammo_freezing',//机枪弹药/冰
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
		//物流框架
		/pneumaticcraft:logistics_frame_/,
		'pneumaticcraft:logistics_core',
		'pneumaticcraft:logistics_module',
		'pneumaticcraft:tag_filter',
		'pneumaticcraft:classify_filter',
		//无人机
		'pneumaticcraft:drone',
		'pneumaticcraft:logistics_drone',
		'pneumaticcraft:harvesting_drone',
		'pneumaticcraft:guard_drone',
		'pneumaticcraft:collector_drone',
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
		/pneumaticcraft:reinforced_/,
	];
	nameOutput.forEach(removeOutput);

	const removeId = (name) => event.remove({ id: name });
	const nameId = [
		//爆炸合成
		'pneumaticcraft:explosion_crafting/wheat_flour',
		'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
		'pneumaticcraft:explosion_crafting/compressed_iron_block',
		'pneumaticcraft:pressure_chamber/capacitor',//电容
		'pneumaticcraft:pressure_chamber/transistor',//晶体管
		//气动工艺的小麦粉
		'pneumaticcraft:pressure_chamber/wheat_flour',
		//瓷砖告示牌
		'pneumaticcraft:aphorism_tile_reset',
		'pneumaticcraft:assembly/aphorism_tile',
		//红石染料
		'pneumaticcraft:assembly/red_dye',
		//压缩铁锭
		'pneumaticcraft:pressure_chamber/compressed_iron_ingot',
		//轮机扇叶
		'pneumaticcraft:pressure_chamber/turbine_blade',
		//亚马龙交易
		'pneumaticcraft:amadron/emerald_to_oil',
		'pneumaticcraft:amadron/oil_to_emerald',
		'pneumaticcraft:amadron/diesel_to_emerald',
		'pneumaticcraft:amadron/gasoline_to_emerald'
	];
	nameId.forEach(removeId);
	//扬了气动工艺的乙醇和植物油
	let pncoil = (name) => {
		event.remove({ id: 'pneumaticcraft:thermo_plant/' + name })
	}
	pncoil('ethanol_from_apple')
	pncoil('ethanol_from_melon')
	pncoil('ethanol_from_poisonous_potato')
	pncoil('ethanol_from_potato')
	pncoil('ethanol_from_sugar')
	pncoil('ethanol_from_sweet_berries')
	pncoil('vegetable_oil_from_crops')
	pncoil('vegetable_oil_from_seeds')

	//扬了pnc壁灯
	let colours = (name) => {
		event.remove({ id: 'pneumaticcraft:wall_lamp_' + name })
		event.remove({ id: 'pneumaticcraft:wall_lamp_inverted_' + name })
		//添加pnc壁灯
		event.shaped('pneumaticcraft:wall_lamp_' + name, [
			' C ',
			'ABA'
		], {
			A: 'thermal:steel_plate',
			B: 'minecraft:sea_lantern',
			C: 'minecraft:' + name + '_dye'
		}).id("atlanabyss:wall_lamp_" + name)
		event.shapeless('pneumaticcraft:wall_lamp_inverted_' + name, [
			'pneumaticcraft:wall_lamp_' + name
		]).id("atlanabyss:wall_lamp_inverted_" + name)
	}
	colours('white')
	colours('orange')
	colours('magenta')
	colours('light_blue')
	colours('yellow')
	colours('lime')
	colours('pink')
	colours('cyan')
	colours('purple')
	colours('light_gray')
	colours('gray')
	colours('blue')
	colours('brown')
	colours('green')
	colours('red')
	colours('black')

	//通用配方移除
	let remove = (name) => {
		event.remove({ id: name })
	}
	//酸面团
	remove('pneumaticcraft:sourdough')
	event.shapeless('pneumaticcraft:sourdough', [
		'create:wheat_flour',
		'pneumaticcraft:yeast_culture_bucket'
	]).id("atlanabyss:sourdough")
	filling('pneumaticcraft:sourdough', [
		'create:wheat_flour',
		Fluid.of('pneumaticcraft:yeast_culture', 100)
	]).id("atlanabyss:filling_sourdough")

	remove('pneumaticcraft:heat_pipe');
	event.stonecutting('4x pneumaticcraft:heat_pipe', 'pneumaticcraft:compressed_iron_block').id('atlanabyss:heat_pipe');//热管
	remove('pneumaticcraft:kerosene_lamp');
	event.stonecutting('2x pneumaticcraft:kerosene_lamp', 'pneumaticcraft:compressed_iron_block').id('atlanabyss:kerosene_lamp');//煤油灯
	const cibCutting = [
		{ itemId: 'pneumaticcraft:display_table', id: 'atlanabyss:display_table' },//展示桌
		{ itemId: 'pneumaticcraft:spawner_agitator', id: 'atlanabyss:spawner_agitator' },//刷怪笼激活器
	];
	for (const item of cibCutting) {
		event.remove({ id: item.itemId });
		event.stonecutting(`${item.itemId}`, 'pneumaticcraft:compressed_iron_block').id(item.id);
	}
	//升级
	remove('pneumaticcraft:speed_upgrade_from_glycerol');
	const upCutting = [
		{ itemId: 'pneumaticcraft:volume_upgrade', id: 'atlanabyss:volume_upgrade' },//容积升级
		{ itemId: 'pneumaticcraft:dispenser_upgrade', id: 'atlanabyss:dispenser_upgrade' },//发射升级
		{ itemId: 'pneumaticcraft:entity_tracker_upgrade', id: 'atlanabyss:entity_tracker_upgrade' },//实体追踪升级
		{ itemId: 'pneumaticcraft:speed_upgrade', id: 'atlanabyss:speed_upgrade' },//速度升级
		{ itemId: 'pneumaticcraft:range_upgrade', id: 'atlanabyss:range_upgrade' },//范围升级
		{ itemId: 'pneumaticcraft:security_upgrade', id: 'atlanabyss:security_upgrade' },//安全升级
		{ itemId: 'pneumaticcraft:magnet_upgrade', id: 'atlanabyss:magnet_upgrade' },//磁铁升级
	];
	for (const item of upCutting) {
		event.remove({ id: item.itemId });
		event.stonecutting(`${item.itemId}`, 'pneumaticcraft:upgrade_matrix').id(item.id);
	}
	//伪装涂覆器
	remove('pneumaticcraft:camo_applicator')
	event.shaped('pneumaticcraft:camo_applicator', [
		'ABC',
		'CC '
	], {
		A: 'pneumaticcraft:air_canister',
		B: 'kubejs:pressure_mechanism',
		C: 'thermal:steel_plate'
	}).id("atlanabyss:camo_applicator")
	//压力表	
	event.shaped('pneumaticcraft:amadron_tablet', [
		'A A',
		'ABA',
		'A A'
	], {
		A: 'pneumaticcraft:plastic',
		B: 'create:redstone_link'
	}).id("atlanabyss:amadron_tablet")
	//压力表	
	remove('pneumaticcraft:pressure_gauge')
	event.shaped('pneumaticcraft:pressure_gauge', [
		'A',
		'B'
	], {
		A: 'minecraft:clock',
		B: 'thermal:steel_ingot'
	}).id("atlanabyss:pressure_gauge")
	//充气站	
	remove('pneumaticcraft:charging_station')
	event.shaped('pneumaticcraft:charging_station', [
		'A',
		'B',
		'C'
	], {
		A: 'pneumaticcraft:pressure_tube',
		B: 'minecraft:copper_ingot',
		C: '#pneumaticcraft:slabs'
	}).id("atlanabyss:charging_station")
	//压力管道
	remove('pneumaticcraft:pressure_tube')
	event.shaped('4x pneumaticcraft:pressure_tube', [
		'A',
		'B',
		'A'
	], {
		A: 'thermal:steel_plate',
		B: 'thermal:steel_ingot'
	}).id("atlanabyss:pressure_tube")
	//散热片
	remove('pneumaticcraft:heat_sink')
	event.shaped('pneumaticcraft:heat_sink', [
		'AAA'
	], {
		A: 'create:copper_sheet'
	}).id("atlanabyss:heat_sink")
	//空气罐
	remove('pneumaticcraft:air_canister')
	event.shaped('pneumaticcraft:air_canister', [
		'A',
		'B'
	], {
		A: 'minecraft:redstone',
		B: 'pneumaticcraft:pressure_tube'
	}).id("atlanabyss:air_canister")
	//强化空气罐
	remove('pneumaticcraft:reinforced_air_canister')
	event.shaped('pneumaticcraft:reinforced_air_canister', [
		'A',
		'B'
	], {
		A: 'pneumaticcraft:advanced_pressure_tube',
		B: 'pneumaticcraft:air_canister'
	}).id("atlanabyss:reinforced_air_canister")
	//涡轮炮
	remove('pneumaticcraft:vortex_cannon')
	mechanical_crafting('pneumaticcraft:vortex_cannon', [
		'ABCC',
		'DDEE'
	], {
		A: 'pneumaticcraft:air_canister',
		B: 'kubejs:pressure_mechanism',
		C: 'thermal:steel_ingot',
		D: 'pneumaticcraft:plastic',
		E: 'thermal:steel_plate'
	}).id("atlanabyss:vortex_cannon")
	//气动锤
	remove('pneumaticcraft:jackhammer')
	mechanical_crafting('pneumaticcraft:jackhammer', [
		' A ',
		'ABA',
		' C ',
		' D ',
		' E '
	], {
		A: 'pneumaticcraft:plastic',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'kubejs:pressure_mechanism',
		D: 'thermal:steel_ingot',
		E: 'pneumaticcraft:pneumatic_cylinder'
	}).id("atlanabyss:jackhammer")
	//压力室墙壁
	remove('pneumaticcraft:pressure_chamber_wall')
	event.shaped('8x pneumaticcraft:pressure_chamber_wall', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'pneumaticcraft:compressed_stone',
		B: 'pneumaticcraft:compressed_iron_block'
	}).id("atlanabyss:pressure_chamber_wall")
	//压力室气阀
	remove('pneumaticcraft:pressure_chamber_valve')
	remove('pneumaticcraft:pressure_chamber_valve_x1')
	remove('pneumaticcraft:pressure_chamber_valve_x4')
	event.shapeless('pneumaticcraft:pressure_chamber_valve', [
		'pneumaticcraft:pressure_chamber_wall',
		'pneumaticcraft:pressure_tube'
	]).id("atlanabyss:pressure_chamber_valve")
	//压力室接口
	remove('pneumaticcraft:pressure_chamber_interface')
	event.shapeless('pneumaticcraft:pressure_chamber_interface', [
		'pneumaticcraft:pressure_chamber_wall',
		'minecraft:barrel'
	]).id("atlanabyss:pressure_chamber_interface")
	//压力室玻璃
	remove('pneumaticcraft:pressure_chamber_glass')
	remove('pneumaticcraft:pressure_chamber_glass_x1')
	remove('pneumaticcraft:pressure_chamber_glass_x4')
	event.shaped('8x pneumaticcraft:pressure_chamber_glass', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'pneumaticcraft:pressure_chamber_wall',
		B: '#forge:glass'
	}).id("atlanabyss:pressure_chamber_glass")
	//钢机壳
	remove('pneumaticcraft:compressed_iron_block_from_ingot')//删除钢块默认配方
	remove('pneumaticcraft:pressure_chamber/compressed_iron_block')
	event.custom({
		type: 'create:item_application',
		ingredients: [
			Ingredient.of('pneumaticcraft:compressed_stone').toJson(),
			Ingredient.of('thermal:steel_ingot').toJson()
		],
		results: [
			Item.of('pneumaticcraft:compressed_iron_block').toResultJson()
		]
	}).id("atlanabyss:compressed_iron_block")
	//万向漏斗
	remove('pneumaticcraft:omnidirectional_hopper')
	event.shaped('pneumaticcraft:omnidirectional_hopper', [
		'A A',
		'ABA',
		' A '
	], {
		A: 'thermal:steel_ingot',
		B: '#forge:chests/wooden'
	}).id("atlanabyss:omnidirectional_hopper")
	//液体漏斗
	remove('pneumaticcraft:liquid_hopper')
	event.shaped('pneumaticcraft:liquid_hopper', [
		'A A',
		'ABA',
		' A '
	], {
		A: 'thermal:steel_ingot',
		B: 'create:fluid_tank'
	}).id("atlanabyss:liquid_hopper")
	//空气压缩机
	remove('pneumaticcraft:air_compressor')
	event.shaped('pneumaticcraft:air_compressor', [
		'A',
		'B',
		'C'
	], {
		A: 'minecraft:copper_ingot',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'kubejs:pressure_mechanism'
	}).id("atlanabyss:air_compressor")
	//热力压缩机
	remove('pneumaticcraft:thermal_compressor')
	event.shaped('pneumaticcraft:thermal_compressor', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'create:copper_sheet',
		B: 'pneumaticcraft:air_compressor'
	}).id("atlanabyss:thermal_compressor")
	//高级空气压缩机
	remove('pneumaticcraft:advanced_air_compressor')
	event.shaped('pneumaticcraft:advanced_air_compressor', [
		'A',
		'B'
	], {
		A: 'pneumaticcraft:advanced_pressure_tube',
		B: 'pneumaticcraft:air_compressor'
	}).id("atlanabyss:advanced_air_compressor")
	//静电压缩机
	remove('pneumaticcraft:electrostatic_compressor')
	event.shaped('pneumaticcraft:electrostatic_compressor', [
		'A',
		'B'
	], {
		A: 'minecraft:copper_ingot',
		B: 'pneumaticcraft:advanced_air_compressor'
	}).id("atlanabyss:electrostatic_compressor")
	//液体压缩机
	remove('pneumaticcraft:liquid_compressor')
	event.shaped('pneumaticcraft:liquid_compressor', [
		'A',
		'B',
		'C'
	], {
		A: 'create:fluid_tank',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'kubejs:pressure_mechanism'
	}).id("atlanabyss:liquid_compressor")
	//高级液体压缩机
	remove('pneumaticcraft:advanced_liquid_compressor')
	event.shaped('pneumaticcraft:advanced_liquid_compressor', [
		'A',
		'B'
	], {
		A: 'pneumaticcraft:advanced_pressure_tube',
		B: 'pneumaticcraft:liquid_compressor'
	}).id("atlanabyss:advanced_liquid_compressor")
	//压力缸
	remove('pneumaticcraft:pneumatic_cylinder')
	event.shaped('pneumaticcraft:pneumatic_cylinder', [
		'A',
		'B',
		'C'
	], {
		A: 'create:shaft',
		B: 'thermal:steel_plate',
		C: 'pneumaticcraft:plastic'
	}).id("atlanabyss:pneumatic_cylinder")
	//紫外线灯箱
	remove('pneumaticcraft:uv_light_box')
	event.shaped('pneumaticcraft:uv_light_box', [
		'A',
		'B',
		'C'
	], {
		A: 'create:rose_quartz_lamp',
		B: 'pneumaticcraft:pcb_blueprint',
		C: 'pneumaticcraft:compressed_iron_block'
	}).id("atlanabyss:uv_light_box")
	//玩家接口
	remove('pneumaticcraft:aerial_interface')
	event.shaped('pneumaticcraft:aerial_interface', [
		'ABA',
		'EDE',
		'ACA'
	], {
		A: 'pneumaticcraft:compressed_iron_block',
		B: 'pneumaticcraft:omnidirectional_hopper',
		C: 'create:electron_tube',
		D: 'kubejs:pressure_mechanism',
		E: 'pneumaticcraft:advanced_pressure_tube'
	}).id("atlanabyss:aerial_interface")
	//涡轮管
	remove('pneumaticcraft:vortex_tube')
	event.shaped('pneumaticcraft:vortex_tube', [
		'A A',
		'BCB',
		'A A'
	], {
		A: 'thermal:steel_ingot',
		B: 'minecraft:gold_ingot',
		C: 'pneumaticcraft:pressure_tube'
	}).id("atlanabyss:vortex_tube")
	//精炼控制器
	remove('pneumaticcraft:refinery')
	event.shaped('pneumaticcraft:refinery', [
		'A',
		'B',
		'C'
	], {
		A: 'minecraft:redstone',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'kubejs:pressure_mechanism'
	}).id("atlanabyss:refinery")
	//精炼输出端
	remove('pneumaticcraft:refinery_output')
	event.shaped('pneumaticcraft:refinery_output', [
		'A',
		'B'
	], {
		A: 'thermal:steel_ingot',
		B: 'pneumaticcraft:compressed_iron_block'
	}).id("atlanabyss:refinery_output")
	//热气动加工机
	remove('pneumaticcraft:thermopneumatic_processing_plant')
	event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [
		'A',
		'B',
		'C'
	], {
		A: 'pneumaticcraft:pressure_tube',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'kubejs:pressure_mechanism'
	}).id("atlanabyss:thermopneumatic_processing_plant")
	//热气动加工机
	remove('pneumaticcraft:fluid_mixer')
	event.shaped('pneumaticcraft:fluid_mixer', [
		'A',
		'B',
		'C'
	], {
		A: 'kubejs:pressure_mechanism',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'create:whisk'
	}).id("atlanabyss:fluid_mixer")
	//蚀刻器
	remove('pneumaticcraft:etching_tank')
	event.shaped('pneumaticcraft:etching_tank', [
		'A',
		'B',
		'C'
	], {
		A: 'minecraft:barrel',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'kubejs:pressure_mechanism'
	}).id("atlanabyss:etching_tank")
	//真空泵
	remove('pneumaticcraft:vacuum_pump')
	event.shaped('pneumaticcraft:vacuum_pump', [
		'ABC',
	], {
		A: 'create:propeller',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'pneumaticcraft:pressure_tube'
	}).id("atlanabyss:vacuum_pump")
	//真空陷阱
	remove('pneumaticcraft:vacuum_trap')
	event.shaped('pneumaticcraft:vacuum_trap', [
		'A',
		'B'
	], {
		A: 'minecraft:ender_eye',
		B: 'pneumaticcraft:vacuum_pump'
	}).id("atlanabyss:vacuum_trap")
	//刷怪笼核心外壳
	remove('pneumaticcraft:spawner_core_shell')
	event.shaped('pneumaticcraft:spawner_core_shell', [
		' A ',
		'A A',
		' A '
	], {
		A: 'pneumaticcraft:pressure_chamber_glass'
	}).id("atlanabyss:spawner_core_shell")
	//刷怪笼抽取器
	remove('pneumaticcraft:spawner_extractor')
	event.shaped('pneumaticcraft:spawner_extractor', [
		'A',
		'B',
		'C'
	], {
		A: 'pneumaticcraft:pressure_tube',
		B: 'pneumaticcraft:compressed_iron_block',
		C: 'pneumaticcraft:spawner_agitator'
	}).id("atlanabyss:spawner_extractor")
	//气动刷怪笼
	remove('pneumaticcraft:pressurized_spawner')
	event.shaped('pneumaticcraft:pressurized_spawner', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'pneumaticcraft:advanced_pressure_tube',
		B: 'pneumaticcraft:empty_spawner'
	}).id("atlanabyss:pressurized_spawner")
	//管道跨接点
	remove('pneumaticcraft:tube_junction')
	event.shaped('pneumaticcraft:tube_junction', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'pneumaticcraft:pressure_tube',
		B: 'pneumaticcraft:compressed_iron_block'
	}).id("atlanabyss:tube_junction")
	//安全管道模块
	remove('pneumaticcraft:safety_tube_module')
	event.shapeless('4x pneumaticcraft:safety_tube_module', [
		'thermal:steel_plate',
		'minecraft:lever'
	]).id("atlanabyss:afety_tube_module")
	//压力表管道模块
	remove('pneumaticcraft:pressure_gauge_module')
	event.shapeless('pneumaticcraft:pressure_gauge_module', [
		'thermal:steel_plate',
		'pneumaticcraft:pressure_gauge'
	]).id("atlanabyss:pressure_gauge_module")
	//流量检测管道模块
	remove('pneumaticcraft:flow_detector_module')
	event.shapeless('pneumaticcraft:flow_detector_module', [
		'thermal:steel_plate',
		'minecraft:redstone'
	]).id("atlanabyss:flow_detector_module")
	//空气栅管道模块
	remove('pneumaticcraft:air_grate_module')
	event.shapeless('pneumaticcraft:air_grate_module', [
		'thermal:steel_plate',
		'minecraft:iron_bars'
	]).id("atlanabyss:air_grate_module")
	//充气模块
	remove('pneumaticcraft:charging_module')
	event.shapeless('pneumaticcraft:charging_module', [
		'pneumaticcraft:pressure_tube',
		'pneumaticcraft:charging_station'
	]).id("atlanabyss:charging_module")
	//红石模块
	remove('pneumaticcraft:redstone_module')
	event.shapeless('pneumaticcraft:redstone_module', [
		'pneumaticcraft:pressure_tube',
		'minecraft:redstone'
	]).id("atlanabyss:redstone_module")
	//气动门
	remove('pneumaticcraft:pneumatic_door')
	event.shaped('2x pneumaticcraft:pneumatic_door', [
		'AA',
		'AA',
		'AA'
	], {
		A: 'thermal:steel_ingot'
	}).id("atlanabyss:pneumatic_door")
	//气动门基座
	remove('pneumaticcraft:pneumatic_door_base')
	event.shaped('pneumaticcraft:pneumatic_door_base', [
		'A',
		'B'
	], {
		A: 'pneumaticcraft:pneumatic_cylinder',
		B: 'pneumaticcraft:compressed_iron_block'
	}).id("atlanabyss:pneumatic_door_base")
	//塑料
	compacting('10x pneumaticcraft:plastic', [
		Fluid.of('pneumaticcraft:plastic', 1000)
	]).id("atlanabyss:plastic")

	//人工钻石	
	remove('pneumaticcraft:pressure_chamber/coal_to_diamond');
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [Ingredient.of('kubejs:compressed_coal_block')],
		results: [Item.of('minecraft:diamond')],
		pressure: 2.9
	}).id("atlanabyss:artificial_diamond");

	//人工酸	
	event.custom({
		type: 'pneumaticcraft:pressure_chamber',
		inputs: [
			Ingredient.of('pneumaticcraft:sourdough'),
			Ingredient.of('create:cinder_flour')
		],
		results: [Item.of('kubejs:acid', 2)],
		pressure: 2.0
	}).id("atlanabyss:acid");

	//蚀刻酸
	remove('pneumaticcraft:pressure_chamber/etching_acid')
	mixing(Fluid.of('pneumaticcraft:etching_acid', 500), [
		Fluid.of('pneumaticcraft:plastic', 250),
		'kubejs:acid'
	]).heated().id("atlanabyss:etching_acid")
	//压缩石
	let stone = 'minecraft:stone';
	sequenced_assembly([
		Item.of('pneumaticcraft:compressed_stone').withChance(0.7),
		Item.of('minecraft:gravel').withChance(0.3)
	],
		stone,
		[
			pressing(stone, stone)
		]).transitionalItem(stone).loops(2).id("atlanabyss:compressed_stone")

	//空PCB
	let epcb = 'pneumaticcraft:plastic';
	remove('pneumaticcraft:pressure_chamber/empty_pcb')
	sequenced_assembly([
		'3x pneumaticcraft:empty_pcb'
	], epcb, [
		filling(epcb, [epcb, Fluid.of('tconstruct:molten_gold', 500)]),
		filling(epcb, [epcb, Fluid.of('tconstruct:molten_copper', 500)]),
		cutting(epcb, epcb)
	]).transitionalItem(epcb).loops(1).id("atlanabyss:empty_pcb_3")
	//空PCB2
	sequenced_assembly([
		'9x pneumaticcraft:empty_pcb'
	], epcb, [
		filling(epcb, [epcb, Fluid.of('tconstruct:molten_silver', 500)]),
		filling(epcb, [epcb, Fluid.of('tconstruct:molten_copper', 500)]),
		cutting(epcb, epcb)
	]).transitionalItem(epcb).loops(1).id("atlanabyss:empty_pcb_9")
	//PCB
	let pcb = 'pneumaticcraft:unassembled_pcb';
	remove('pneumaticcraft:printed_circuit_board')
	sequenced_assembly([
		'pneumaticcraft:printed_circuit_board',
	], pcb, [
		deploying(pcb, [pcb, 'createaddition:capacitor']),
		deploying(pcb, [pcb, 'createaddition:capacitor']),
		deploying(pcb, [pcb, 'createaddition:gold_rod'])
	]).transitionalItem(pcb).loops(10).id("atlanabyss:printed_circuit_board")
	//PCB2
	sequenced_assembly([
		'pneumaticcraft:printed_circuit_board',
	], pcb, [
		deploying(pcb, [pcb, 'botania:terrasteel_nugget']),
		deploying(pcb, [pcb, 'createaddition:capacitor']),
		deploying(pcb, [pcb, 'createaddition:electrum_rod'])
	]).transitionalItem(pcb).loops(3).id("atlanabyss:printed_circuit_board_3")
	//装配平台
	remove('pneumaticcraft:assembly_platform')
	event.shaped('pneumaticcraft:assembly_platform', [
		'ABA',
		'CDC'
	], {
		A: 'pneumaticcraft:pneumatic_cylinder',
		B: 'pneumaticcraft:plastic',
		C: 'thermal:steel_plate',
		D: 'pneumaticcraft:printed_circuit_board'
	}).id("atlanabyss:assembly_platform")
	//装配导入
	remove('pneumaticcraft:assembly_io_unit_import')
	event.shaped('pneumaticcraft:assembly_io_unit_import', [
		' AA',
		' B ',
		'CDC'
	], {
		A: 'pneumaticcraft:pneumatic_cylinder',
		B: 'create:mechanical_arm',
		C: 'thermal:steel_plate',
		D: 'pneumaticcraft:printed_circuit_board'
	}).id("atlanabyss:assembly_io_unit_import")
	//装配导出
	remove('pneumaticcraft:assembly_io_unit_export')
	event.shaped('pneumaticcraft:assembly_io_unit_export', [
		'AA ',
		' B ',
		'CDC'
	], {
		A: 'pneumaticcraft:pneumatic_cylinder',
		B: 'create:mechanical_arm',
		C: 'thermal:steel_plate',
		D: 'pneumaticcraft:printed_circuit_board'
	}).id("atlanabyss:assembly_io_unit_export")
	//装配钻头
	remove('pneumaticcraft:assembly_drill')
	event.shaped('pneumaticcraft:assembly_drill', [
		'EAA',
		' B ',
		'CDC'
	], {
		A: 'pneumaticcraft:pneumatic_cylinder',
		B: 'create:mechanical_arm',
		C: 'thermal:steel_plate',
		D: 'pneumaticcraft:printed_circuit_board',
		E: 'pneumaticcraft:drill_bit_diamond'
	}).id("atlanabyss:assembly_drill")
	//装配激光
	remove('pneumaticcraft:assembly_laser')
	event.shaped('pneumaticcraft:assembly_laser', [
		'EAA',
		' B ',
		'CDC'
	], {
		A: 'pneumaticcraft:pneumatic_cylinder',
		B: 'create:mechanical_arm',
		C: 'thermal:steel_plate',
		D: 'pneumaticcraft:printed_circuit_board',
		E: 'create:electron_tube'
	}).id("atlanabyss:assembly_laser")
	//装配控制台
	remove('pneumaticcraft:assembly_controller')
	event.shaped('pneumaticcraft:assembly_controller', [
		' A ',
		' B ',
		'CDC'
	], {
		A: 'pneumaticcraft:printed_circuit_board',
		B: 'pneumaticcraft:reinforced_pressure_tube',
		C: 'thermal:steel_plate',
		D: 'kubejs:pressure_mechanism'
	}).id("atlanabyss:assembly_controller")

	//发热方块
	event.custom({
		"type": 'pneumaticcraft:heat_properties',
		"block": 'kubejs:plutonium_block',
		"temperature": 2273,
		"thermalResistance": 10
	}).id("atlanabyss:heat_properties_plutonium_block")

	//石油不能直接当燃料了
	remove('createaddition:liquid_burning/crude_oil')
	//石油处理
	for (let i = 2; i < 5; i++) {
		event.remove({ id: 'pneumaticcraft:refinery/oil_' + i })
	}
	function refineryRecipe(output1, amount1, output2, amount2, output3, amount3, output4, amount4, input, iamount, mintemp, id) {
		const refinery = [];

		if (output1 && amount1) {
			refinery.push(Fluid.of(output1, amount1).toJson());
		}
		if (output2 && amount2) {
			refinery.push(Fluid.of(output2, amount2).toJson());
		}
		if (output3 && amount3) {
			refinery.push(Fluid.of(output3, amount3).toJson());
		}
		if (output4 && amount4) {
			refinery.push(Fluid.of(output4, amount4).toJson());
		}

		event.custom({
			type: 'pneumaticcraft:refinery',
			input: {
				type: 'pneumaticcraft:fluid',
				fluid: input,
				amount: iamount
			},
			temperature: {
				min_temp: mintemp
			},
			results: refinery
		}).id('atlanabyss:refinery_' + id);
	}
	refineryRecipe('thermal:heavy_oil', 4, 'pneumaticcraft:kerosene', 3, 'thermal:light_oil', 2, 'pneumaticcraft:lpg', 1, 'thermal:crude_oil', 10, 373, 'oil_4');
	refineryRecipe('thermal:heavy_oil', 4, 'pneumaticcraft:kerosene', 4, 'pneumaticcraft:lpg', 1, null, null, 'thermal:crude_oil', 10, 373, 'oil_3');
	refineryRecipe('thermal:heavy_oil', 6, 'pneumaticcraft:lpg', 2, null, null, null, null, 'thermal:crude_oil', 10, 373, 'oil_2');

	//热气动加工
	['kerosene', 'lubricant_from_diesel', 'gasoline', 'lpg', 'plastic_from_lpg', 'salmon_tempura', 'chips', 'yeast_culture'].forEach((id) => {
		event.remove({ id: `pneumaticcraft:thermo_plant/${id}` });
	});

	function thermoplantRecipe(input, amount1, output, amount2, mintemp, pressure, id) {
		event.custom({
			type: 'pneumaticcraft:thermo_plant',
			fluid_input: {
				type: 'pneumaticcraft:fluid',
				fluid: input,
				amount: amount1
			},
			fluid_output: {
				fluid: output,
				amount: amount2
			},
			temperature: {
				min_temp: mintemp
			},
			pressure: pressure,
			exothermic: false
		}).id('atlanabyss:thermo_plant_' + id);
	}
	thermoplantRecipe('thermal:heavy_oil', 100, 'pneumaticcraft:kerosene', 80, 573, 2.0, 'kerosene');
	thermoplantRecipe('pneumaticcraft:kerosene', 100, 'thermal:light_oil', 80, 573, 2.0, 'light_oil');
	thermoplantRecipe('thermal:light_oil', 100, 'pneumaticcraft:lpg', 80, 573, 2.0, 'lpg');

	function createMixingRecipe(output, input, fluid, amount, id) {
		mixing(output,
			[input, Fluid.of(fluid, amount)
			]).heated().id('atlanabyss:' + id);
	}
	createMixingRecipe(['thermal:bitumen', Fluid.of('pneumaticcraft:lubricant', 250)], Fluid.of('thermal:redstone', 180), 'thermal:heavy_oil', 250, 'mixing_lubricant');
	createMixingRecipe(Fluid.of('pneumaticcraft:yeast_culture', 250), '#forge:mushrooms', 'minecraft:water', 1000, 'yeast_culture');
	createMixingRecipe(Fluid.of('pneumaticcraft:plastic', 500), 'thermal:lightning_charge', 'pneumaticcraft:lpg', 50, 'lpg');
	createMixingRecipe('pneumaticcraft:salmon_tempura', 'pneumaticcraft:raw_salmon_tempura', 'createaddition:seed_oil', 50, 'salmon_tempura');
	//薯条
	compacting(
		'4x pneumaticcraft:chips', [
		'minecraft:potato',
		Fluid.of('createaddition:seed_oil', 50)
	]).heated().id("atlanabyss:chips")
	//钢钻头
	remove('pneumaticcraft:thermo_plant/compressed_iron_drill_bit')
	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		item_input: { tag: 'forge:ingots/steel' },
		fluid_input: {
			type: 'pneumaticcraft:fluid',
			tag: 'forge:lubricant',
			amount: 4000
		},
		item_output: { item: 'pneumaticcraft:drill_bit_compressed_iron' },
		temperature: { min_temp: 573 },
		pressure: 4.0,
		speed: 0.25,
		air_use_multiplier: 5.0,
		exothermic: false
	}).id("atlanabyss:drill_bit_compressed_iron")
	//熔岩再生
	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		item_input: { tag: 'forge:cobblestone' },
		fluid_output: { fluid: 'minecraft:lava', amount: 250 },
		temperature: { min_temp: 1273 },
		pressure: 4.5,
		exothermic: false
	}).id("atlanabyss:thermo_plant_cobblestone")

	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		item_input: { tag: 'forge:netherrack' },
		fluid_output: { fluid: 'minecraft:lava', amount: 500 },
		temperature: { min_temp: 1273 },
		pressure: 4.5,
		exothermic: false
	}).id("atlanabyss:thermo_plant_netherrack")

	event.custom({
		type: 'pneumaticcraft:thermo_plant',
		item_input: { item: 'minecraft:magma_block' },
		fluid_output: { fluid: 'minecraft:lava', amount: 1000 },
		temperature: { min_temp: 1273 },
		pressure: 4.5,
		exothermic: false
	}).id("atlanabyss:thermo_plant_magma_block")
})