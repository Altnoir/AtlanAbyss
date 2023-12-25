//priority: 200

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
	event.create('osmium_nugget').displayName('Osmium Nugget');
	event.create('plutonium_nugget').displayName('Plutonium Nugget');
	event.create('platinum_nugget').displayName('Platinum Nugget');
	event.create('tungsten_nugget').displayName('tungsten Nugget');
  
	event.create('aluminum_dust').displayName('Aluminum Dust');
  
	event.create('rose_quartz_sheet').displayName('Rose Quartz Sheet');
	event.create('aluminum_sheet').displayName('Aluminum Sheet');
	event.create('osmium_sheet').displayName('Osmium Sheet');
	event.create('charged_constantan_sheet').displayName('Charged Constantan Sheet').rarity(RARITY_RARE);
	event.create('bismuth_sheet').displayName('Bismuth Sheet');
  
	event.create('aluminium_chip').displayName('Aluminium Chip');
	event.create('aluminum_compound').displayName('Aluminum Compound');
	event.create('acid').displayName('Acid');
	event.create('rough_sand').displayName('Rough Sand');
	event.create('sand_ball').displayName('Sand Ball');
	event.create('silicon_compound').displayName('Silicon Compound');
	event.create('incomplete_bismuth_circuit','create:sequenced_assembly').displayName('Incomplete Bismuth Circuit');
	event.create('bismuth_circuit').displayName('Bismuth Circuit');
	event.create('osmium_scrap').displayName('Osmium Scrap');
	event.create('osmium_compound','create:sequenced_assembly').displayName('Osmium Compound');
	event.create('organic_scrap').displayName('Organic Scrap');
	event.create('deep_scrap').displayName('Deep Scrap');
	event.create('mass_scrap').displayName('Mass Scrap');
	event.create('misery_scrap').displayName('Misery Scrap');
	event.create('void_scrap').displayName('Void Scrap');
  
	event.create('incomplete_core_container','create:sequenced_assembly').displayName('Incomplete Core Container');
	event.create('uranium_core').displayName('Uranium Core');
	event.create('plutonium_core').displayName('Plutonium Core');
	event.create('graphite_rod').displayName('Graphite Rod');
	event.create('depleted_uranium').displayName('Depleted Uranium');
	event.create('circuit_scrap').displayName('Circuit Scrap');
	event.create('candy_electron_tube').displayName('Candy Electron Tube');
	event.create('sulfur_electron_tube').displayName('Sulfur Electron Tube');
	event.create('charged_electron_tube').displayName('Charged Electron Tube');
  
	event.create('incomplete_vibration_mechanim','create:sequenced_assembly').displayName('Incomplete Vibration Mechanim');
	event.create('vibration_mechanism').displayName('Vibration Mechanism').rarity(RARITY_RARE);
	event.create('incomplete_pressure_mechanism','create:sequenced_assembly').displayName('Incomplete Pressure Mechanism');
	event.create('pressure_mechanism').displayName('Pressure Mechanism').rarity(RARITY_RARE);
	event.create('incomplete_thermal_mechanism','create:sequenced_assembly').displayName('Incomplete Thermal Mechanism');
	event.create('thermal_mechanism').displayName('Thermal Mechanism').rarity(RARITY_RARE);
  
	event.create('album_transpain').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_indigrotto').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_blurred_mind').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_michelia').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_redraw').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_nacollection4').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('album_unity_band').displayName('Album').rarity(RARITY_RARE).unstackable();
	event.create('treasure_box').displayName('Treasure Box').glow(true).rarity(RARITY_EPIC).unstackable();
  
	event.create('divine_ore').displayName('Divine Ore').rarity(RARITY_RARE);
	
	event.create('catalyst_incomplete','create:sequenced_assembly').color(0, 0x1E2533).color(1, 0x353E50).displayName('Incomplete Catalyst');
	event.create('chaos_incomplete','create:sequenced_assembly').color(0, 0x1E2533).color(1, 0x353E50).displayName('Incomplete Chemical Agent');
  
	event.create('pistol_ammo').maxStackSize(60).displayName('Pistol Ammo');
	event.create('shotgun_ammo').maxStackSize(30).displayName('Shotgun Ammo');
	event.create('rifle_ammo').maxStackSize(60).displayName('Rifle Ammo');
	event.create('smg_ammo').maxStackSize(60).displayName('SMG Ammo');
	event.create('magnum_ammo').maxStackSize(10).displayName('Magnum Ammo');
  
	event.create('pistol_shell','create:sequenced_assembly').displayName('Pistol Shell');
	event.create('shotgun_shell','create:sequenced_assembly').displayName('Shotgun Shell');
	event.create('rifle_shell','create:sequenced_assembly').displayName('Rifle Shell');
	event.create('smg_shell','create:sequenced_assembly').displayName('SMG Shell');
	event.create('magnum_shell','create:sequenced_assembly').displayName('Magnum Shell');
  
	//混合药草
	event.create('mixed_herb_gg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .effect('minecraft:instant_health', 20, 1, 1)//二级瞬间治疗
	}).displayName('Mixed Herb (G+G)');//绿+绿
  
	event.create('mixed_herb_ggg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	}).displayName('Mixed Herb (G+G+G)');//绿+绿+绿
  
	event.create('mixed_herb_rg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	}).displayName('Mixed Herb (R+G)');//红+绿
  
	event.create('mixed_herb_bg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .removeEffect('minecraft:poison')//移除中毒
	  .removeEffect('minecraft:wither')//移除凋零
	  .removeEffect('minecraft:nausea')//移除反胃
	  .removeEffect('minecraft:levitationa')//移除漂浮
	  .removeEffect('minecraft:blindness')//移除失明
	  .removeEffect('minecraft:mining_fatigue')//移除挖掘疲劳
	  .removeEffect('minecraft:weakness')//移除虚弱
	  .effect('minecraft:instant_health', 20, 0, 1)//一级瞬间治疗
	}).displayName('Mixed Herb (B+G)');//蓝+绿
  
	event.create('mixed_herb_yg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .effect('minecraft:health_boost', 4800, 1, 1)//二级生命提升
	  .effect('minecraft:instant_health', 20, 0, 1)//一级瞬间治疗
	}).displayName('Mixed Herb (Y+G)');//黄+绿
  
	event.create('mixed_herb_br').displayName('Mixed Herb (B+R)');//蓝+红
	event.create('mixed_herb_yr').displayName('Mixed Herb (Y+R)');//黄+红
  
	event.create('mixed_herb_bgg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .removeEffect('minecraft:poison')//移除中毒
	  .removeEffect('minecraft:wither')//移除凋零
	  .removeEffect('minecraft:nausea')//移除反胃
	  .removeEffect('minecraft:levitationa')//移除漂浮
	  .removeEffect('minecraft:blindness')//移除失明
	  .removeEffect('minecraft:mining_fatigue')//移除挖掘疲劳
	  .removeEffect('minecraft:weakness')//移除虚弱
	  .effect('minecraft:instant_health', 20, 1, 1)//二级瞬间治疗
	}).displayName('Mixed Herb (B+G+G)');//蓝+绿+绿
  
	event.create('mixed_herb_ygg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .effect('minecraft:health_boost', 9600, 2, 1)//三级生命提升
	  .effect('minecraft:instant_health', 20, 1, 1)//二级瞬间治疗
	}).displayName('Mixed Herb (Y+G+G)');//黄+绿+绿
  
	event.create('mixed_herb_brg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .removeEffect('minecraft:poison')//移除中毒
	  .removeEffect('minecraft:wither')//移除凋零
	  .removeEffect('minecraft:nausea')//移除反胃
	  .removeEffect('minecraft:levitationa')//移除漂浮
	  .removeEffect('minecraft:blindness')//移除失明
	  .removeEffect('minecraft:mining_fatigue')//移除挖掘疲劳
	  .removeEffect('minecraft:weakness')//移除虚弱
	  .effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	}).displayName('Mixed Herb (B+R+G)');//蓝+红+绿
  
	event.create('mixed_herb_yrg').unstackable().food((food) => {
	  food.hunger(0)
	  .fastToEat(true)
	  .alwaysEdible(true)
	  .effect('minecraft:health_boost', 9600, 2, 1)//三级生命提升
	  .effect('minecraft:instant_health', 20, 4, 1)//五级瞬间治疗
	}).displayName('Mixed Herb (Y+R+G)');//黄+红+绿
  
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
  onEvent('block.registry', event => {
  //棉花
  event.create("cottons", "crop")
	  //作物生长阶段和碰撞箱
	  .age(3, builder => {
		  builder
			  .shape(0, 2, 0, 2, 14, 2, 14)
			  .shape(1, 2, 0, 2, 14, 13, 14)
			  .shape(2, 2, 0, 2, 14, 13, 14)
			  .shape(3, 2, 0, 2, 14, 15, 14)
	  })
	  //当一个随机刻选中作物，作物生长时触发
	  //返回值为作物生长几率，几率=f/(25+f), 当f>25时，几率=1
	  .growTick((tickevent) => 25)
	  //用类似骨粉这样的物品催熟作物时触发
	  //返回值为催熟多少生长阶段
	  .bonemeal(info => 1)
	  //收获时是否掉落种子
	  //设置该项会禁用战利品表的种子掉落，并使种子变为空气 (不会影响种子物品)
	  //装了抬头显示类模组情况下,禁用掉落种子则会不显示种子，但是自动收割类的不受影响
	  .dropSeed(true)
	  //作物产物，可以设置多个，但每个物品的掉率会下降
	  //不能使用 ItemStack 实例, 因为物品还没注册，只能用字符串
	  .crop("kubejs:cotton", 1)
	  //给不同阶段作物指定材质文件
	  .texture(0, "kubejs:block/cotton_stage0")
	  .texture(1, "kubejs:block/cotton_stage1")
	  .texture(2, "kubejs:block/cotton_stage1")
	  .texture(3, "kubejs:block/cotton_stage2")
	  .item((seedItem) => {
		  seedItem.texture("kubejs:item/cottons_seed")
	  })
  //下界铝矿
  event.create('nether_aluminum_ore')
	  .material('nether_ore')
	  .hardness(3.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_iron_tool')
	  .tagBlock('forge:ores')
	  .tagBlock('forge:ores/aluminum')
	  .tagBlock('forge:ores_in_ground/netherrack')
	  .requiresTool(true)
	  .displayName('Nether Aluminum Pre');
  //末地铋矿
  event.create('end_bismuth_ore')
	  .material('deepslate')
	  .hardness(6.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_diamond_tool')
	  .tagBlock('forge:ores')
	  .tagBlock('forge:ores/bismuth')
	  .tagBlock('forge:ores_in_ground/end')
	  .requiresTool(true)
	  .displayName('End Bismuth Pre');
  //颠倒铀矿
  event.create('inversia_uranium_ore')
	  .material('deepslate')
	  .hardness(6.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_diamond_tool')
	  .tagBlock('forge:ores')
	  .tagBlock('forge:ores/uranium')
	  .tagBlock('forge:ores_in_ground/deepslate')
	  .requiresTool(true)
	  .displayName('Inversia Uranium Pre');
  //粗铝块
  event.create('raw_aluminum_block')
	  .material('stone')
	  .hardness(3.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_iron_tool')
	  .requiresTool(true)
	  .displayName('Raw Aluminum Block');
  //粗铋块
  event.create('raw_bismuth_block')
	  .material('copper')
	  .hardness(6.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_diamond_tool')
	  .requiresTool(true)
	  .displayName('Raw Bismuth Block');
  //粗铀块
  event.create('raw_uranium_block')
	  .material('stone')
	  .hardness(6.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_diamond_tool')
	  .requiresTool(true)
	  .displayName('Raw Uranium Block');
  //干涸的沥青沙
  event.create('dry_oil_sand','falling')
	  .material('sand')
	  .hardness(0.5)
	  .tagBlock('minecraft:mineable/shovel')
	  .displayName('Dry Oil Sand');
  //干涸的沥青红沙
  event.create('dry_oil_red_sand','falling')
	  .material('sand')
	  .hardness(0.5)
	  .tagBlock('minecraft:mineable/shovel')
	  .displayName('Dry Oil Red Sand');
  //箱装烤马铃薯
  event.create('baked_potato_crate')
	  .material('wood')
	  .hardness(2.0)
	  .model('kubejs:block/baked_potato_crate')
	  .tagBlock('minecraft:mineable/axe')
	  .displayName('Baked Potato Crate');
  //箱装鸡蛋
  event.create('egg_crate')
	  .material('wood')
	  .hardness(2.0)
	  .model('kubejs:block/egg_crate')
	  .tagBlock('minecraft:mineable/axe')
	  .displayName('Egg Crate');
  //箱装棉花
  event.create('cotton_crate')
	  .material('wood')
	  .hardness(2.0)
	  .model('kubejs:block/cotton_crate')
	  .tagBlock('minecraft:mineable/axe')
	  .displayName('Cotton Crate');
  //铝块
  event.create('aluminum_block')
	  .material('copper')
	  .hardness(4.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .requiresTool(true)
	  .displayName('Aluminum Block');
  //铂块
  event.create('platinum_block')
	  .material('netherite')
	  .hardness(6.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .requiresTool(true)
	  .displayName('Platinum Block');
  //钨块
  event.create('tungsten_block')
	  .material('netherite')
	  .hardness(6.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .requiresTool(true)
	  .displayName('Tungsten Block');
  //铋块
  event.create('bismuth_block')
	  .material('netherite')
	  .hardness(8.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_diamond_tool')
	  .requiresTool(true)
	  .displayName('Bismuth Block');
  //镀锇机壳
  event.create('osmium_casing')
	  .material('anvil')
	  .hardness(8.0)
	  .tagBlock('create:wrench_pickup')
	  .tagBlock('minecraft:mineable/pickaxe')
	  .requiresTool(true)
	  .displayName('Osmium Casing');
  //钚块
  event.create('plutonium_block')
	  .material('lantern')
	  .hardness(8.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .requiresTool(true)
	  .displayName('Plutonium Block');
  //压缩煤块
  event.create('compressed_coal_block')
	  .material('stone')
	  .hardness(16.0)
	  .tagBlock('minecraft:mineable/pickaxe')
	  .tagBlock('minecraft:needs_diamond_tool')
	  .requiresTool(true)
	  .displayName('Compressed Coal Block');
  //幸运方块
  event.create('lucky_block')
	  .material('lantern')
	  .hardness(0.2)
	  .tagBlock('create:wrench_pickup')
	  .tagBlock('minecraft:mineable/pickaxe')
	  .item(e => e.rarity(RARITY_RARE))
	  .displayName('Lucky Block');
  //钢制机械框架
  event.create('steel_machine')
	  .material('lantern')
	  .hardness(3.0)
	  .box(0, 0, 0, .25, 1, 1, false)
	  .box(.75, 0, 0, 1, 1, 1, false)
	  .box(.25, 0, 0, .75, 1, .25, false)
	  .box(.25, 0, .75, .75, 1, 1, false)
	  .tagBlock('create:wrench_pickup')
	  .tagBlock('minecraft:mineable/pickaxe')
	  .displayName('Steel Machine Frame')
	  .item(e => e.rarity(RARITY_RARE))
	  .notSolid()
	  .renderType('cutout');
  
  //炼金
  for (let i = 0; i < 12; i++)
  event.create(`alchemy_${i + 1}`)
	  .material("glass")
	  .color(0, 0x394867)
	  .color(1, 0x072348)
	  .hardness(0.1)
	  .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
	  .model("kubejs:block/mundane_substrate")
	  .displayName(`§b炼金混合物 §6阶段:${i + 1}/12`)
	  .renderType("cutout")
	  .item(e => e.color(0, 0x394867).color(1, 0x072348))
	  .tagBlock("minecraft:mineable/pickaxe")
	  .tagItem("llmion:alchemy_substrate")
  
  event.create(`alchemy_0`)
	  .material("glass")
	  .color(0, 0x394867)
	  .color(1, 0x072348)
	  .hardness(0.1)
	  .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
	  .model("kubejs:block/mundane_substrate")
	  .displayName("Alchemy Mixture")
	  .renderType("cutout")
	  .item(e => e.color(0, 0x394867).color(1, 0x072348))
	  .tagBlock("minecraft:mineable/pickaxe")
	  .tagItem("llmion:alchemy_substrate")
  
	  global.substrates = []
	  global.substrate_mapping = {}
	  var current_category = []
	  var category_index = 0
	  var substrate_index = 0
	
	  let category = () => {
		global.substrates.push(current_category)
		current_category = []
		category_index++
		substrate_index = 0
	  }
	
	  let substrate_base = (c1, c2, id, name, localName, model, ingredient, outputItem) => {
		global.substrate_mapping[id] = {
		  category: category_index,
		  index: substrate_index,
		  name: name
		}
		current_category.push({
		  id: "kubejs" + `:substrate_${id}`,
		  ingredient: ingredient,
		  outputItem: outputItem
		})
		event.create(`substrate_${id}`)
		  .material("glass")
		  .color(0, c1)
		  .color(1, c2)
		  .hardness(0.1)
		  .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		  .model("kubejs:block/" + model)
		  .displayName(localName)
		  .renderType("cutout")
		  .item(e => e.rarity(model == "catalyst" ? RARITY_UNCOMMON : RARITY_COMMON).color(0, c1).color(1, c2))
		  .tagBoth("kubejs:substrates")
		  .tagBlock("minecraft:mineable/pickaxe")
		substrate_index++
	  }
  
	  let reagent = (c1, c2, id, name, localName, ingredient, outputItem) => substrate_base(c1, c2, id, name, `${localName}反应物`, "substrate", ingredient, outputItem)
	  let catalyst = (c1, c2, id, name, localName, ingredient) => substrate_base(c1, c2, id, name, `${localName}催化剂`, "catalyst", ingredient)
  
	  reagent(0x5F5F5F, 0x8E8E8E, "andesite", "Andesite", "§7安山岩§r", "minecraft:andesite")
	  reagent(0x7F7F7F, 0xD4D4D4, "diorite", "Diorite", "§7闪长岩§r", "minecraft:diorite")
	  reagent(0x563A2F, 0x9A6C5B, "granite", "Granite", "§7花岗岩§r", "minecraft:granite")
	  reagent(0x585858, 0x646363, "cobblestone", "Stone", "§7岩石§r", "minecraft:cobblestone")
	  reagent(0x32333D, 0x5C5C5C, "basalt", "Basalt", "§7玄武岩§r", "minecraft:basalt")
	  reagent(0x6B5D4F, 0x7D6B5A, "limestone", "Limestone", "§7石灰岩§r", "create:limestone")
	  category()
	  reagent(0xD30000, 0xB80F0A, "red", "Crimson", "§4烟栗§r", ["minecraft:rose_bush", "minecraft:poppy", "minecraft:red_tulip"], "minecraft:red_dye")
	  reagent(0xFC6600, 0xb1560f, "orange", "Orange", "§6赭石§r", ["minecraft:orange_tulip", "biomesoplenty:burning_blossom", "minecraft:pumpkin"], "minecraft:orange_dye")
	  reagent(0xFFF200, 0xdba520, "yellow", "Goldenrod", "§e藤黄§r", ["biomesoplenty:goldenrod", "minecraft:sunflower", "minecraft:dandelion"], "minecraft:yellow_dye")
	  reagent(0x9dc183, 0x708238, "green", "Olive", "§2粗孔雀绿§r", ["minecraft:fern", "minecraft:cactus", "biomesoplenty:watergrass"], "minecraft:green_dye")
	  reagent(0x57a0d2, 0x0080fe, "blue", "Azure", "§3品绿§r", ["biomesoplenty:blue_hydrangea", "minecraft:cornflower", "minecraft:blue_orchid"], "minecraft:light_blue_dye")
	  reagent(0xb200ed, 0xff66cc, "magenta", "Fuchsia", "§d苋菜红§r", ["minecraft:lilac", "minecraft:allium", "minecraft:pink_tulip"], "minecraft:magenta_dye")
	  category()
	  reagent(0xAC3B00, 0xD5AC26, "blaze", "Blazing", "§6烈焰§r", "minecraft:blaze_powder")
	  reagent(0x4F7E48, 0x8AD480, "slime", "Slime", "§a莱姆§r", "minecraft:slime_ball")
	  reagent(0x5B151A, 0xBC3E49, "nether", "Nether", "§4下界§r", "minecraft:nether_wart")
	  reagent(0x05030A, 0x36234C, "obsidian", "Obsidian", "§8曜黑§r", "create:powdered_obsidian")
	  reagent(0x535353, 0x717171, "gunpowder", "Gunpowder", "§8易爆§r", "minecraft:gunpowder")
	  reagent(0x529680, 0xA2CFC0, "prismarine", "Aquatic", "§3亲水§r", "minecraft:prismarine_shard")
	  category()
	  reagent(0x9E72BE, 0xB7C9D1, "arcane", "Arcane", "§7神秘§r", "ars_nouveau:source_gem")
	  reagent(0x27A9BB, 0x2CC7C9, "apatite", "Apatite", "§3磷灰石§r", "thermal:apatite_dust")
	  reagent(0x735A65, 0xB8AFAF, "niter", "Niter", "§6硝石§r", "thermal:niter_dust")
	  reagent(0xB19E8F, 0xE7E2DB, "quartz", "Quartz", "§f下界石英§r", "thermal:quartz_dust")
	  reagent(0xC7A94A, 0xEEF071, "sulfur", "Sulfuric", "§6硫磺§r", "thermal:sulfur")
	  reagent(0x91C5FC, 0xA7CBCF, "certus", "Certus Quartz", "§b赛特斯石英§r", "ae2:certus_quartz_dust")
	  category()
	  reagent(0x616A60, 0xD0D2C5, "zinc", "Zinc", "§3锌元素§r", "create:zinc_ingot")
	  reagent(0xDD7E5D, 0xFCEFBA, "copper", "Copper", "§6铜元素§r", "thermal:copper_dust")
	  reagent(0xA6A6A6, 0xD5D5D5, "iron", "Iron", "§7铁元素§r", "thermal:iron_dust")
	  reagent(0x314F6F, 0x6C8998, "tin", "Tin", "§3锡元素§r", "thermal:tin_dust")
	  reagent(0xD99413, 0xFAF25E, "gold", "Gold", "§e金元素§r", "thermal:gold_dust")
	  reagent(0x734C3B, 0xA28960, "nickel", "Nickel", "§6镍元素§r", "thermal:nickel_dust")
	  category()
	  reagent(0xFC7781, 0xFCCED0, "cinnabar", "Cinnabar", "§c朱砂§r", "thermal:cinnabar")
	  reagent(0x335DC1, 0x7395E7, "lapis", "Lapis Lazuli", "§1青金石§r", "minecraft:lapis_lazuli")
	  reagent(0x00A82B, 0xADFACB, "emerald", "Emerald", "§2绿宝石§r", "thermal:emerald_dust")
	  reagent(0x20C3B3, 0xD2FCF3, "diamond", "Diamond", "§b钻石§r", "thermal:diamond_dust")
	  reagent(0x9D0A33, 0xFB7B71, "ruby", "Ruby", "§c红宝石§r", "thermal:ruby_dust")
	  reagent(0x246BE9, 0x76C6FC, "sapphire", "Sapphire", "§9蓝宝石§r", "thermal:sapphire")
	  category()
	  catalyst(0x506D84, 0x889EAF, "igneous", "Igneous", "§d火成")
	  catalyst(0xB5CDA3, 0xC9E4C5, "herbal", "Herbal", "§d草药")
	  catalyst(0x9F5F80, 0xFF8474, "volatile", "Volatile", "§d不稳定")
	  catalyst(0xFFB037, 0xFFE268, "crystal", "Crystalline", "§d晶化")
	  catalyst(0x232457, 0x7D97A6, "metal", "Metallurgic", "§d箔层")
	  catalyst(0x3EDBF0, 0xC0FEFC, "gem", "Gemstone", "§d辉光")
	  category()
  
	  event.create("catalyst_empty")
		.material("glass")
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/empty_catalyst")
		.displayName("Empty Catalyst")
		.renderType("cutout")
		.tagBlock("minecraft:mineable/pickaxe")
	
	  event.create("substrate_chaos")
		.material("glass")
		.color(0, 0xb200ed)
		.color(1, 0xff66cc)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/chaos_catalyst")
		.displayName("Chaos Chemistry")
		.renderType("cutout")
		.item(e => e.rarity(RARITY_RARE).color(0, 0xb200ed).color(1, 0xff66cc))
		.tagBoth("kubejs:substrates")
		.tagBlock("minecraft:mineable/pickaxe")
  
	  event.create("chaos_empty")
		.material("glass")
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/empty_chaos")
		.displayName("Empty Chaos")
		.renderType("cutout")
		.tagBlock("minecraft:mineable/pickaxe")
  })
  
  onEvent('fluid.registry', event => {
  //氧化铝溶液
  event.create('alumina_solution')
	  .thinTexture(0xFEDEC8)
	  .bucketColor(0xFEDEC8)
	  .displayName('Alumina Solution')
	  .noBlock()
  //细沙
  event.create('fine_sand')
	  .displayName('Fine Sand')
	  .stillTexture('kubejs:block/fine_sand')
	  .flowingTexture('kubejs:block/fine_sand')
	  .bucketColor(0xE3DBB0)
	  .noBlock()
  //熔融钚
  event.create('molten_plutonium')
	  .displayName('Molten Plutonium')
	  .stillTexture('kubejs:block/molten_plutonium_still')
	  .flowingTexture('kubejs:block/molten_plutonium_flowing')
	  .bucketColor(0x253F51)
	  .noBlock()
  //液态逻辑
  let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
  event.create('raw_logic')
  .displayName(`Liquified Logic (Unprocessed)`)
  .thinTexture(0xE7FFCB)
  .bucketColor(0xE7FFCB)
  .stillTexture('kubejs:block/number_still')
  .flowingTexture('kubejs:block/number_flow')
  .color(0xE7FFCB)
  .noBlock()
  
  for (let i = 0; i < colors.length; i++)
	  event.create('number_' + i)
	  .displayName(`Liquified Logic (${i})`)
	  .thinTexture(colors[i])
	  .bucketColor(colors[i])
	  .stillTexture('kubejs:block/number_still')
	  .flowingTexture('kubejs:block/number_flow')
	  .color(colors[i])
	  .noBlock()
  
	  event.create('matrix')
	  .displayName(`Liquified Computation Matrix`)
	  .thinTexture(colors[0])
	  .bucketColor(colors[0])
	  .stillTexture('kubejs:block/matrix_still')
	  .flowingTexture('kubejs:block/matrix_flow')
	  .noBlock()
	  
  })
  
  // onEvent('item.registry.armor_tiers', event => {
  // 	event.add('halo', tier => {
  // 		tier.durabilityMultiplier = 40 //耐久倍率,基础值为靴子13, 护腿15, 胸甲16, 头盔11
  // 		tier.slotProtections = [3, 6, 8, 3] //槽位分别对应的是靴子, 护腿, 胸甲, 头盔
  // 		tier.toughness = 3.0 //盔甲韧性, 钻石为2.0, 下界合金为3.0
  // 		tier.knockbackResistance = 0.1 //击退抗性， 下界合金为0.1
  // 		tier.enchantmentValue = 25 //附魔能力
  // 		tier.repairIngredient = '#forge:ingots/iron' //修复材料
  // 		tier.equipSound = 'minecraft:item.armor.equip_netherite' //声音
  // 	})
  // })
  
  onEvent('mob_effect.registry', event => {
	  event.create('alice_powah', 'basic')
  })
  
  onEvent('item.modification', event => {
	  event.modify('kubejs:infinity_ingot', item => {
		item.fireResistant = true
	  })
	  event.modify('botania:glass_pickaxe', item => {
		  item.digSpeed = 60
		  item.tier = tier => {
			  tier.level = 3
		  }
	  })
	  //可食用核废料
	  event.modify('biggerreactors:cyanite_ingot', item => {
		  item.foodProperties = food => {
			  food.hunger(1)//1点饱食度
			  food.alwaysEdible(true)//不饿的时候也可以吃
			  food.effect('minecraft:glowing', 24000, 0, 1)//发光(20=1s)
			  food.effect('minecraft:saturation', 40, 0, 0.25)//25%饱和
			  food.effect('minecraft:luck', 600, 0, 0.5)//50%幸运
			  food.effect('minecraft:dolphins_grace', 60, 0, 0.5)//50%海豚的恩惠
			  food.effect('minecraft:conduit_power', 60, 0, 0.75)//75%潮涌能量
			  food.effect('minecraft:fire_resistance', 2400, 0, 1)//防火
			  food.effect('minecraft:slow_falling', 200, 0, 1)//缓降
			  food.effect('minecraft:haste', 100, 0, 1)//急迫
			  food.effect('minecraft:resistance', 2400, 2, 1)//抗性提升3
			  food.effect('minecraft:strength', 60, 0, 1)//力量
			  food.effect('minecraft:absorption', 20, 0, 1)//伤害吸收
			  food.effect('minecraft:regeneration', 200, 1, 1)//生命恢复2
			  food.effect('minecraft:health_boost', 600, 4, 1)//生命提升5
			  food.effect('minecraft:water_breathing', 3600, 0, 1)//水下呼吸
			  food.effect('minecraft:speed', 600, 2, 1)//速度3
			  food.effect('minecraft:jump_boost', 100, 2, 1)//跳跃提升3
			  food.effect('minecraft:night_vision', 100, 0, 1)//夜视
			  food.effect('minecraft:invisibility', 60, 0, 1)//隐身
			  food.effect('minecraft:wither', 1200, 3, 1)//凋零4
			  food.effect('minecraft:nausea', 300, 0, 1)//反胃
			  food.effect('minecraft:slowness', 600, 4, 1)//缓慢5
			  food.effect('minecraft:hunger', 300, 9, 1)//饥饿10
			  food.effect('minecraft:levitation', 40, 0, 1)//漂浮
			  food.effect('minecraft:blindness', 80, 0, 1)//失明
			  food.effect('minecraft:mining_fatigue', 1200, 2, 1)//挖掘疲劳3
			  food.effect('minecraft:weakness', 600, 1, 1)//虚弱2
			  food.effect('minecraft:poison', 200, 0, 1)//中毒
		  }
	  })
  })