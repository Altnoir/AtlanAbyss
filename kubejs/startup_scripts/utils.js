//本来是打算整个自定义盔甲做光环头盔的，但该死的Kubejs没办法自定义盔甲模型，已经废弃了（光环换成了其他头戴物品改模）
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

//本来是给自定义传送门写的，但效果实在是不太理想，已经废弃了（启用需要前置customportalapi）
// const CustomPortalBuilder = java('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')

// onEvent('postinit', () => {
// 	CustomPortalBuilder.beginPortal()
// 	['frameBlock(net.minecraft.resources.ResourceLocation)'](new ResourceLocation('kubejs', 'bismuth_block'))
// 		.destDimID(new ResourceLocation('inversia', 'inversiadim'))
// 		.tintColor(60, 120, 240)
// 		.lightWithWater()
// 		.flatPortal()
// 		.onlyLightInOverworld()
// 		.registerPortal();
// });

//Platform.getInfo("kubejs").name = 'AtlanAbyss';

onEvent('botania.brews.registry', event => {
	event.create('alicepowah')
		.cost(5000)
		.effect('kubejs:alice_powah', 480 * 20, 0, false, false)
		.noIncense();
})

onEvent('mob_effect.registry', event => {
	event.create('alice_powah')
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