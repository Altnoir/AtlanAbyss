onEvent('item.registry', event => {
	//物品
	event.create('candy_quartz').displayName('Candy Quartz');
	event.create('polished_candy_quartz').displayName('Polished Candy Quartz');
	event.create('polished_sulfur').displayName('Polished Sulfur');
	event.create('polished_charged_certus_quartz').displayName('Polished Certus Quartz');
	event.create('raw_aluminum').displayName('Raw Aluminum');
	event.create('raw_uranium').displayName('Raw Uranium');
	event.create('raw_bismuth').displayName('Raw Bismuth');

	event.create('aluminum_ingot').displayName('Aluminum Ingot');
	event.create('aluminium_alloy_ingot').displayName('Aluminium Alloy Ingot');
	event.create('meteosteel_ingot').displayName('Meteosteel Ingot');
	event.create('magbismuth_ingot').displayName('Magbismuth Ingot');
	event.create('osmium_ingot').displayName('Osmium Ingot');
	event.create('uranium_ingot').displayName('Uranium Ingot');
	event.create('plutonium_ingot').displayName('Plutonium Ingot');
	event.create('zirconium_alloy_ingot').displayName('Zirconium Alloy Ingot').rarity(RARITY_RARE);
	event.create('lutetium_ingot').displayName('Lutetium Ingot').rarity(RARITY_RARE);
	event.create('charged_soulsteel_ingot').displayName('Charged Soulsteel Ingot').rarity(RARITY_RARE);
	event.create('charged_constantan_ingot').displayName('Charged Constantan Ingot').rarity(RARITY_RARE);
	event.create('crystal_matrix_ingot').displayName('Crystal Matrix Ingot').rarity(RARITY_RARE);
	event.create('infinity_ingot').displayName('Infinity Ingot').rarity(RARITY_EPIC);
	event.create('eviltwisting_ingot').displayName('Eviltwisting Ingot').rarity(RARITY_RARE);
	event.create('bismuth_ingot').displayName('Bismuth Ingot');
	event.create('platinum_ingot').displayName('Platinum Ingot');
	event.create('tungsten_ingot').displayName('tungsten Ingot');
	event.create('chlorophyll_ingot').displayName('Chlorophyll Ingot');
	event.create('abyss_ingot').displayName('Abyss Ingot');
	event.create('planetary_ingot').displayName('Planetary Ingot');
	event.create('calamity_ingot').displayName('Calamity Ingot');
	event.create('end_ingot').displayName('End Ingot');
	event.create('elemental_ingot').displayName('Elemental Ingot');
	event.create('virgin_ingot').displayName('Virgin Ingot');

	event.create('aluminum_nugget').displayName('Aluminum Nugget');
	event.create('meteosteel_nugget').displayName('Meteosteel Nugget');
	event.create('osmium_nugget').displayName('Osmium Nugget');
	event.create('plutonium_nugget').displayName('Plutonium Nugget');
	event.create('platinum_nugget').displayName('Platinum Nugget');
	event.create('tungsten_nugget').displayName('tungsten Nugget');

	event.create('aluminum_dust').displayName('Aluminum Dust');

	event.create('rose_quartz_sheet').displayName('Rose Quartz Sheet');
	event.create('aluminum_sheet').displayName('Aluminum Sheet');
	event.create('meteosteel_sheet').displayName('Meteosteel Sheet');
	event.create('magbismuth_sheet').displayName('Magbismuth Sheet');
	event.create('osmium_sheet').displayName('Osmium Sheet');
	event.create('charged_constantan_sheet').displayName('Charged Constantan Sheet').rarity(RARITY_RARE);
	event.create('bismuth_sheet').displayName('Bismuth Sheet');

	event.create('aluminium_chip').displayName('Aluminium Chip');
	event.create('aluminum_compound').displayName('Aluminum Compound');
	event.create('acid').displayName('Acid');
	event.create('rough_sand').displayName('Rough Sand');
	event.create('sand_ball').displayName('Sand Ball');
	event.create('silicon_compound').displayName('Silicon Compound');
	event.create('osmium_scrap').displayName('Osmium Scrap');
	event.create('osmium_compound', 'create:sequenced_assembly').displayName('Osmium Compound');
	event.create('organic_scrap').displayName('Organic Scrap');
	event.create('deep_scrap').displayName('Deep Scrap');
	event.create('mass_scrap').displayName('Mass Scrap');
	event.create('misery_scrap').displayName('Misery Scrap');
	event.create('void_scrap').displayName('Void Scrap');
	//光环扭蛋
	event.create('halo_gashapon').displayName('Halo Gashapon');
	//世界神符
	event.create('world_rune').displayName('World Rune');

	event.create('incomplete_core_container', 'create:sequenced_assembly').displayName('Incomplete Core Container');
	event.create('uranium_core').displayName('Uranium Core');
	event.create('plutonium_core').displayName('Plutonium Core');
	event.create('graphite_rod').displayName('Graphite Rod');
	event.create('depleted_uranium').displayName('Depleted Uranium');
	event.create('circuit_scrap').displayName('Circuit Scrap');
	event.create('candy_electron_tube').displayName('Candy Electron Tube');
	event.create('sulfur_electron_tube').displayName('Sulfur Electron Tube');
	event.create('charged_electron_tube').displayName('Charged Electron Tube');

	event.create('incomplete_vibration_mechanim', 'create:sequenced_assembly').displayName('Incomplete Vibration Mechanim');
	event.create('vibration_mechanism').displayName('Vibration Mechanism');
	event.create('incomplete_pressure_mechanism', 'create:sequenced_assembly').displayName('Incomplete Pressure Mechanism');
	event.create('pressure_mechanism').displayName('Pressure Mechanism').rarity(RARITY_COMMON);
	event.create('incomplete_thermal_mechanism', 'create:sequenced_assembly').displayName('Incomplete Thermal Mechanism');
	event.create('thermal_mechanism').displayName('Thermal Mechanism').rarity(RARITY_RARE);
	event.create('incomplete_computer_mechanism', 'create:sequenced_assembly').displayName('Incomplete Computer Mechanism');
	event.create('computer_mechanism').displayName('Computer Mechanism').rarity(RARITY_EPIC);
	event.create('incomplete_gravitation_mechanism', 'create:sequenced_assembly').displayName('Incomplete Gravitation Mechanism');
	event.create('gravitation_mechanism').displayName('Gravitation Mechanism').rarity(RARITY_EPIC);

	event.create('album_transpain').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_indigrotto').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_blurred_mind').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_michelia').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_redraw').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_nacollection4').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_unity_band').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('treasure_box').displayName('Treasure Box').glow(true).rarity(RARITY_EPIC).unstackable();

	event.create('divine_ore').displayName('Divine Ore').rarity(RARITY_RARE);

	event.create('catalyst_incomplete', 'create:sequenced_assembly').color(0, 0x1E2533).color(1, 0x353E50).displayName('Incomplete Catalyst');
	event.create('chaos_incomplete', 'create:sequenced_assembly').color(0, 0x1E2533).color(1, 0x353E50).displayName('Incomplete Chemical Agent');

	event.create('pistol_ammo').maxStackSize(60).displayName('Pistol Ammo');
	event.create('shotgun_ammo').maxStackSize(30).displayName('Shotgun Ammo');
	event.create('rifle_ammo').maxStackSize(60).displayName('Rifle Ammo');
	event.create('smg_ammo').maxStackSize(60).displayName('SMG Ammo');
	event.create('sniper_ammo').maxStackSize(30).displayName('Sniper Ammo');
	event.create('magnum_ammo').maxStackSize(10).displayName('Magnum Ammo');

	event.create('pistol_shell', 'create:sequenced_assembly').displayName('Pistol Shell');
	event.create('shotgun_shell', 'create:sequenced_assembly').displayName('Shotgun Shell');
	event.create('rifle_shell', 'create:sequenced_assembly').displayName('Rifle Shell');
	event.create('smg_shell', 'create:sequenced_assembly').displayName('SMG Shell');
	event.create('sniper_shell', 'create:sequenced_assembly').displayName('Sniper Shell');
	event.create('magnum_shell', 'create:sequenced_assembly').displayName('Magnum Shell');

	//混合药草
	// event.create('mixed_herb_gg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.effect('minecraft:instant_health', 20, 1, 1)//二级瞬间治疗
	// }).displayName('Mixed Herb (G+G)');//绿+绿

	// event.create('mixed_herb_ggg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	// }).displayName('Mixed Herb (G+G+G)');//绿+绿+绿

	// event.create('mixed_herb_rg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	// }).displayName('Mixed Herb (R+G)');//红+绿

	// event.create('mixed_herb_bg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.removeEffect('minecraft:poison')//移除中毒
	// 		.removeEffect('minecraft:wither')//移除凋零
	// 		.removeEffect('minecraft:nausea')//移除反胃
	// 		.removeEffect('minecraft:levitationa')//移除漂浮
	// 		.removeEffect('minecraft:blindness')//移除失明
	// 		.removeEffect('minecraft:mining_fatigue')//移除挖掘疲劳
	// 		.removeEffect('minecraft:weakness')//移除虚弱
	// 		.effect('minecraft:instant_health', 20, 0, 1)//一级瞬间治疗
	// }).displayName('Mixed Herb (B+G)');//蓝+绿

	// event.create('mixed_herb_yg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.effect('minecraft:health_boost', 4800, 1, 1)//二级生命提升
	// 		.effect('minecraft:instant_health', 20, 0, 1)//一级瞬间治疗
	// }).displayName('Mixed Herb (Y+G)');//黄+绿

	// event.create('mixed_herb_br').displayName('Mixed Herb (B+R)');//蓝+红
	// event.create('mixed_herb_yr').displayName('Mixed Herb (Y+R)');//黄+红

	// event.create('mixed_herb_bgg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.removeEffect('minecraft:poison')//移除中毒
	// 		.removeEffect('minecraft:wither')//移除凋零
	// 		.removeEffect('minecraft:nausea')//移除反胃
	// 		.removeEffect('minecraft:levitationa')//移除漂浮
	// 		.removeEffect('minecraft:blindness')//移除失明
	// 		.removeEffect('minecraft:mining_fatigue')//移除挖掘疲劳
	// 		.removeEffect('minecraft:weakness')//移除虚弱
	// 		.effect('minecraft:instant_health', 20, 1, 1)//二级瞬间治疗
	// }).displayName('Mixed Herb (B+G+G)');//蓝+绿+绿

	// event.create('mixed_herb_ygg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.effect('minecraft:health_boost', 9600, 2, 1)//三级生命提升
	// 		.effect('minecraft:instant_health', 20, 1, 1)//二级瞬间治疗
	// }).displayName('Mixed Herb (Y+G+G)');//黄+绿+绿

	// event.create('mixed_herb_brg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.removeEffect('minecraft:poison')//移除中毒
	// 		.removeEffect('minecraft:wither')//移除凋零
	// 		.removeEffect('minecraft:nausea')//移除反胃
	// 		.removeEffect('minecraft:levitationa')//移除漂浮
	// 		.removeEffect('minecraft:blindness')//移除失明
	// 		.removeEffect('minecraft:mining_fatigue')//移除挖掘疲劳
	// 		.removeEffect('minecraft:weakness')//移除虚弱
	// 		.effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	// }).displayName('Mixed Herb (B+R+G)');//蓝+红+绿

	// event.create('mixed_herb_yrg').unstackable().food((food) => {
	// 	food.hunger(0)
	// 		.fastToEat(true)
	// 		.alwaysEdible(true)
	// 		.effect('minecraft:health_boost', 9600, 2, 1)//三级生命提升
	// 		.effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	// }).displayName('Mixed Herb (Y+R+G)');//黄+红+绿

	//   event.create('canfood_empty').displayName('Empty canfood');
	//   //罐头
	//   event.create('canfood').unstackable()
	//   .food((food) => {
	// 	food.hunger(10)//10点饱食度
	// 	.meat(true)//狗也能吃
	// 	.effect('minecraft:saturation', 40, 0, 1)//100%饱和
	// 	.effect('minecraft:haste', 3600, 2, 0.75)//75%急迫3
	// 	.effect('minecraft:resistance', 3600, 2, 0.1)//10%抗性提升3
	// 	.effect('minecraft:strength', 3600, 2, 0.5)//50%力量3
	// 	.effect('minecraft:regeneration', 3600, 1, 0.5)//50%生命恢复2
	// }).displayName('Canfood');
	//   event.create('canfood_sealed').displayName('sealed canfood');

	event.create('hydra_piece').food((food) => {
		food.hunger(9)
			.saturation(2.0)
			.effect('minecraft:regeneration', 20, 0, 1)//生命恢复1
			.meat()
	}).rarity(RARITY_UNCOMMON).displayName('Hydra Piece');//九头蛇肉块

	event.create('raw_venison_rib').food((food) => {
		food.hunger(2)
			.saturation(0.25)
			.meat()
	}).displayName('Raw Venison Rib');//生鹿肉肋条

	event.create('cooked_venison_rib').food((food) => {
		food.hunger(4)
			.saturation(0.875)
			.meat()
	}).displayName('Cooked Venison Rib');//鹿肉肋排

	event.create('raw_meef_slice').food((food) => {
		food.hunger(1)
			.saturation(0.7)
			.meat()
	}).displayName('Raw Meef Slice');//生牛头人肉片

	event.create('cooked_meef_slice').food((food) => {
		food.hunger(3)
			.saturation(0.6)
			.meat()
	}).displayName('Cooked Meef Slice');//熟牛头人肉片

	event.create('raw_insect').food((food) => {
		food.hunger(2)
			.saturation(0.2)
			.meat()
	}).displayName('Raw Insect');//生虫肉

	event.create('cooked_insect').food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.meat()
	}).displayName('Cooked Insect');//熟虫肉

	event.create('torchberry_cookie').food((food) => {
		food.hunger(2)
			.saturation(0.2)
			.meat()
	}).displayName('Torchberry Cookie');//火炬浆果曲奇

	event.create('chocolate_wafer').food((food) => {
		food.hunger(8)
			.saturation(0.6)
			.meat()
	}).displayName('Chocolate Wafer');//巧克力夹心薄饼

	event.create('meef_wrap').food((food) => {
		food.hunger(10)
			.saturation(0.8)
			.effect('minecraft:strength', 1200, 0, 1)//力量
			.effect('minecraft:regeneration', 1200, 0, 1)//生命恢复
			.meat()
	}).displayName('Meef Wrap');//米诺陶卷

	event.create('experiment_113').food((food) => {
		food.hunger(6)
			.saturation(0.2)
			.fastToEat(true)
			.effect('minecraft:weakness', 100, 0, 0.33)//33%虚弱
			.meat()
	}).displayName('Experiment 113');//试验物品 113

	event.create('glow_113').food((food) => {
		food.hunger(6)
			.saturation(1.2)
			.fastToEat(true)
			.effect('minecraft:night_vision', 6000, 0, 1)//夜视
			.effect('minecraft:glowing', 6000, 0, 1)//发光
			.effect('minecraft:weakness', 100, 0, 0.33)//33%虚弱
			.meat()
	}).displayName('Glow 113');//蘸荧光煲的113

	event.create('honey_113').food((food) => {
		food.hunger(6)
			.saturation(1.2)
			.fastToEat(true)
			.effect('minecraft:speed', 3600, 2, 1)//速度3
			.effect('minecraft:weakness', 100, 0, 0.33)//33%虚弱
			.meat()
	}).displayName('Honey 113');//蘸蜂蜜的113

	event.create('chocolate_113').food((food) => {
		food.hunger(6)
			.saturation(1.2)
			.fastToEat(true)
			.effect('minecraft:strength', 600, 4, 1)//力量5
			.effect('minecraft:weakness', 100, 0, 0.33)//33%虚弱
			.meat()
	}).displayName('Chocolate 113');//蘸巧克力的113

	event.create('milky_113').food((food) => {
		food.hunger(6)
			.saturation(1.2)
			.fastToEat(true)
			.effect('minecraft:instant_health', 1, 0, 1)//瞬间治疗
			.meat()
	}).displayName('Milky 113');//蘸炼乳的113

	event.create('experiment_110').food((food) => {
		food.hunger(12)
			.saturation(0.3)
			.effect('minecraft:nausea', 1200, 0, 1)//反胃
			.effect('minecraft:health_boost', 2400, 4, 1)//生命提升5
			.effect('minecraft:night_vision', 2400, 0, 1)//夜视
			.meat()
	}).displayName('Experiment 110');//试验物品 110

	event.create('hydra_burger').food((food) => {
		food.hunger(18)
			.saturation(0.8)
			.effect('minecraft:fire_resistance', 6000, 0, 1)//防火
			.effect('minecraft:regeneration', 1200, 1, 1)//生命恢复2
			.meat()
	}).displayName('Hydra Burger');//九头蛇汉堡

	event.create('ghast_burger').food((food) => {
		food.hunger(11)
			.saturation(0.8)
			.effect('minecraft:regeneration', 1200, 1, 1)//生命恢复2
			.meat()
	}).displayName('Ghast Burger');//恶魂汉堡

	event.create('berry_stick').food((food) => {
		food.hunger(4)
			.saturation(0.2)
			.meat()
	}).displayName('Berry Stick');//浆果串

	//碗装食物
	event.create('glowstew').maxStackSize(16).food((food) => {
		food.hunger(7)
			.saturation(0.675)
			.effect('minecraft:glowing', 3600, 0, 1)//发光
			.effect('minecraft:night_vision', 3600, 0, 1)//夜视
			.effect('farmersdelight:comfort', 1200, 0, 1)//舒坦
			.meat()
	}).displayName('Glowstew');//荧光煲

	event.create('mushgloom_sauce').maxStackSize(16).food((food) => {
		food.hunger(5)
			.saturation(0.4)
			.effect('minecraft:glowing', 200, 0, 1)//发光
			.meat()
	}).displayName('Mushgloom Sauce');//荧光蘑菇酱

	event.create('glow_venison_rib_with_pasta').maxStackSize(16).food((food) => {
		food.hunger(12)
			.saturation(0.7)
			.effect('minecraft:glowing', 200, 0, 1)//发光
			.effect('farmersdelight:nourishment', 6000, 0, 1)//滋养
			.meat()
	}).displayName('Glow Venison Rib with Pasta');//荧光浇汁鹿排配意面

	event.create('mushgloom_meef_pasta').maxStackSize(16).food((food) => {
		food.hunger(12)
			.saturation(0.8)
			.effect('minecraft:glowing', 100, 0, 1)//发光
			.effect('minecraft:strength', 1200, 1, 1)//力量2
			.effect('minecraft:regeneration', 1200, 1, 1)//生命恢复2
			.effect('farmersdelight:nourishment', 3600, 0, 1)//滋养
			.meat()
	}).displayName('Mushgloom Meef Pasta');//荧光米诺陶意面

	event.create('fried_insect').maxStackSize(16).food((food) => {
		food.hunger(10)
			.saturation(0.61)
			.effect('farmersdelight:nourishment', 6000, 0, 1)//滋养
			.meat()
	}).displayName('Fried Insect');//小炒肥虫

	event.create('ghast_brain_salad').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:health_boost', 2400, 4, 1)//生命提升4
			.effect('minecraft:night_vision', 2400, 0, 1)//夜视
			.effect('minecraft:strength', 2400, 4, 1)//力量5
			.effect('minecraft:resistance', 2400, 2, 1)//抗性提升3
			.effect('minecraft:nausea', 2400, 0, 1)//反胃
			.effect('minecraft:poison', 2400, 0, 1)//中毒
			.effect('minecraft:blindness', 2400, 0, 0.5)//50%失明
			.effect('minecraft:weakness', 200, 0, 0.5)//50%虚弱
			.meat()
	}).displayName('Ghast Brain Salad');//恶魂脑沙拉

	event.create('borer_tear_soup').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:saturation', 10, 0, 1)//饱和
			.meat()
	}).displayName('Borer Tear Soup');//蛀虫精华甜菜汤

	event.create('thousand_plant_stew').maxStackSize(16).food((food) => {
		food.hunger(10)
			.saturation(0.61)
			.effect('minecraft:health_boost', 600, 1, 1)//生命提升2
			.effect('minecraft:nausea', 300, 0, 0.1)//反胃
			.meat()
	}).displayName('Thousand Plant Stew');//万草煲

	event.create('grilled_ghast').maxStackSize(16).food((food) => {
		food.hunger(10)
			.saturation(0.72)
			.effect('farmersdelight:nourishment', 6000, 0, 1)//滋养
			.meat()
	}).displayName('Grilled Ghast');//炽烤恶魂肉

	event.create('lily_chicken').maxStackSize(16).food((food) => {
		food.hunger(16)
			.saturation(0.875)
			.effect('farmersdelight:nourishment', 6000, 0, 1)//滋养
			.meat()
	}).displayName('Plate of Lily Chicken');//荷花鸡

	event.create('fiery_snakes').maxStackSize(16).food((food) => {
		food.hunger(20)
			.saturation(1.9)
			.effect('farmersdelight:nourishment', 12000, 0, 1)//滋养
			.effect('farmersdelight:comfort', 6000, 0, 1)//舒坦
			.effect('minecraft:strength', 6000, 1, 1)//力量2
			.effect('minecraft:regeneration', 400, 1, 1)//生命恢复2
			.meat()
	}).displayName('Plate of Fiery Snakes');//炽汁蛇宴

	event.create('glacier_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:fire_resistance', 7200, 0, 1)//防火
			.effect('minecraft:slowness', 60, 2, 1)//缓慢3
			.meat()
	}).displayName('Glacier Ice Cream');//冰川冰淇淋

	event.create('phytochemical_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:health_boost', 1800, 1, 1)//生命提升2
			.effect('minecraft:slowness', 60, 2, 1)//缓慢3
			.meat()
	}).displayName('Phytochemical Ice Cream');//植物素冰淇淋

	event.create('torchberry_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:glowing', 1800, 0, 1)//发光
			.effect('minecraft:slowness', 60, 2, 1)//缓慢3
			.meat()
	}).displayName('Torchberry Ice Cream');//火炬浆果冰淇淋

	event.create('aurora_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:speed', 1800, 2, 1)//速度3
			.effect('minecraft:jump_boost', 1800, 1, 1)//跳跃提升2
			.effect('minecraft:slowness', 60, 2, 1)//缓慢3
			.meat()
	}).displayName('Aurora Ice Cream');//极光冰淇淋

	event.create('twilight_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:glowing', 600, 0, 1)//发光
			.effect('neapolitan:sugar_rush', 900, 0, 1)//能量冲击
			.effect('minecraft:instant_health', 1, 0, 1)//瞬间治疗
			.effect('minecraft:slowness', 60, 2, 1)//缓慢3
			.meat()
	}).displayName('Twilight Ice Cream');//暮色冰淇淋

	event.create('rainbow_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:speed', 600, 2, 1)//速度3
			.effect('minecraft:jump_boost', 600, 1, 1)//跳跃提升2
			.effect('neapolitan:harmony', 600, 0, 1)//和谐
			.effect('neapolitan:agility', 600, 0, 1)//灵活
			.meat()
	}).displayName('Rainbow Ice Cream');//彩虹冰淇淋

	event.create('refreshing_ice_cream').maxStackSize(16).food((food) => {
		food.hunger(6)
			.saturation(0.5)
			.effect('minecraft:fire_resistance', 1800, 0, 1)//防火
			.effect('minecraft:health_boost', 600, 1, 1)//生命提升2
			.effect('neapolitan:berserking', 600, 0, 1)//狂暴
			.effect('minecraft:slowness', 60, 2, 1)//缓慢3
			.meat()
	}).displayName('Refreshing Ice Cream');//清爽冰淇淋

	//饮料
	event.create('thorn_rose_tea').maxStackSize(16).food((food) => {
		food.hunger(4)
			.saturation(0.25)
			.alwaysEdible(true)
			.effect('minecraft:regeneration', 100, 1, 1)//生命恢复2
			.meat()
	}).displayName('Thorn Rose Tea');//荆棘玫瑰茶

	event.create('torchberry_juice').maxStackSize(16).food((food) => {
		food.hunger(4)
			.saturation(0.25)
			.alwaysEdible(true)
			.effect('minecraft:glowing', 200, 0, 1)//发光
			.effect('minecraft:regeneration', 100, 1, 1)//生命恢复2
			.meat()
	}).displayName('Torchberry Juice');//火炬浆果汁

	event.create('phytochemical_juice').maxStackSize(16).food((food) => {
		food.hunger(4)
			.saturation(0.25)
			.alwaysEdible(true)
			.effect('minecraft:health_boost', 600, 1, 1)//生命提升2
			.effect('minecraft:regeneration', 100, 1, 1)//生命恢复2
			.meat()
	}).displayName('Phytochemical Juice');//植物素汁

	event.create('glacier_ice_tea').maxStackSize(16).food((food) => {
		food.hunger(4)
			.saturation(0.25)
			.alwaysEdible(true)
			.effect('minecraft:fire_resistance', 7200, 0, 1)//防火
			.effect('minecraft:regeneration', 100, 1, 1)//生命恢复2
			.meat()
	}).displayName('Glacier Ice Tea');//冰川冰茶

	event.create('twilight_spring').maxStackSize(16).food((food) => {
		food.hunger(0)
			.saturation(0)
			.alwaysEdible(true)
			.effect('minecraft:resistance', 1200, 1, 1)//抗性提升2
			.meat()
	}).displayName('Twilight Spring™');//暮色山泉™

	event.create('tear_drink').maxStackSize(16).food((food) => {
		food.hunger(1)
			.saturation(0)
			.alwaysEdible(true)
			.effect('minecraft:fire_resistance', 24000, 0, 1)//防火
			.effect('minecraft:weakness', 1200, 0, 1)//虚弱
			.meat()
	}).displayName('Tear Drink');//盈泪之饮


	let number = (name) => {
		let id = name.toLowerCase()
		event.create(id).glow(true).displayName(name)
	}
	number('Zero')
	number('One')
	number('Two')
	number('Three')
	number('Four')
	number('Five')
	number('Six')
	number('Seven')
	number('Eight')
	number('Nine')
	number('Plus')
	number('Minus')
	number('Multiply')
	number('Divide')

	event.create('three_cast').displayName('Integer Cast (3)').unstackable()
	event.create('eight_cast').displayName('Integer Cast (8)').unstackable()
	event.create('plus_cast').displayName('Operator Cast (+)').unstackable()
	event.create('minus_cast').displayName('Operator Cast (-)').unstackable()
	event.create('multiply_cast').displayName('Operator Cast (x)').unstackable()
	event.create('divide_cast').displayName('Operator Cast (/)').unstackable()
	event.create('missingno').displayName('error')
	event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").displayName('Computation Matrix').rarity(RARITY_UNCOMMON).unstackable()

	event.create('cotton').displayName('Cotton')
})