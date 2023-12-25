onEvent("lootjs", (event) => {
  //溺尸击杀苦力怕掉落神秘唱片(改成数据包了)
  //溺尸击杀铁傀儡掉落鹦鹉螺壳(改成数据包了)
  //溺尸击杀鸡掉落海洋之心，概率为25%(改成数据包了)
  //玩家击杀苦力怕，骷髅，僵尸，尸壳掉落幸运方块(改成数据包了)
  //替换箱子战利品
  event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot('create:dough', 'farmersdelight:wheat_dough');
  event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot('twilightforest:red_thread', 'botania:red_string');
  //锄头打树叶概率掉线
  event
    .addBlockLootModifier('#minecraft:leaves')
    .matchMainHand('#forge:tools/hoes')
    .randomChance(0.75)
    .addLoot('minecraft:string');
  //打草有概率掉棉花种子
  event
    .addBlockLootModifier('minecraft:grass')
    .randomChance(0.03)
    .addLoot('kubejs:cottons_seed');
});

const Minecraft = java('net.minecraft.client.Minecraft');

onEvent('item.right_click', event => {
let {player, server, level, item} = event;
function lootbag(lootbag,lootable){
    if(item === lootbag){
        event.cancel();
        player.swingArm(event.hand);
        server.runCommandSilent(`execute in ${level.dimension} run loot spawn ${player.x} ${player.y} ${player.z} loot ${lootable}`);
        player.playSound('minecraft:block.enchantment_table.use');
        player.playSound('minecraft:entity.player.levelup');
        Minecraft.getInstance().gameRenderer.displayItemActivation(lootbag);
        player.addItemCooldown(lootbag, 20);
        item.count--;
    }
}
lootbag('minecraft:diamond','kubejs:halo')//光环
lootbag('kubejs:treasure_box','kubejs:treasure_box')//宝藏袋
lootbag('kubejs:album_transpain','kubejs:album/transpain')//专辑
lootbag('kubejs:album_indigrotto','kubejs:album/indigrotto')//专辑
lootbag('kubejs:album_blurred_mind','kubejs:album/blurred_mind')//专辑
lootbag('kubejs:album_michelia','kubejs:album/michelia')//专辑
lootbag('kubejs:album_redraw','kubejs:album/redraw')//专辑
lootbag('kubejs:album_nacollection4','kubejs:album/nacollection4')//专辑
lootbag('kubejs:album_unity_band','kubejs:album/unity_band')//专辑

let artifact = 'minecraft:iron_ingot';
if(item === artifact){
  let size = level.worldBorder.getSize();
  let add = (x) => {
    level.worldBorder.setSize(size + x);
    server.tell(`§b地图边界扩大，当前尺寸为：§7${size + x}`);
    player.playSound('minecraft:block.enchantment_table.use');
  }
  if(size <= 59999800){
    if(player.crouching){
      let count = item.count;
      add(count * 2);
      player.mainHandItem.count-=count;
      player.addItemCooldown(artifact, 10);
    }else{
      add(2);
      player.mainHandItem.count-=1;
      player.addItemCooldown(artifact, 10);
    }
  }else{
    server.tell('§b地图已经扩到最大了');
  }
}
})

onEvent("server.load", event => {
  let worldBorder = event.server.getLevel('overworld').worldBorder;
  let size = worldBorder.getSize();

  if (size >= 59999860) {
    worldBorder.setSize(96);
  }
})

onEvent('block.break', event => {
let {player, server, level, block} = event;
function luckSummon(randomSummon) {
  server.runCommandSilent(`execute in ${level.dimension} run summon ${randomSummon} ${block.x} ${block.y} ${block.z}`);
  player.playSound('minecraft:entity.chicken.egg');
  server.runCommandSilent(`execute in ${level.dimension} run particle minecraft:firework ${block.x} ${block.y + 0.5} ${block.z} .1 0 .1 .07 20`);
}
function badSummon() {
  server.runCommandSilent(`execute in ${level.dimension} run summon thermal:nuke_tnt ${block.x} ${block.y} ${block.z}`);
}
if (block == 'kubejs:lucky_block') {
  let random = () => Utils.random.nextInt(summon.length);
  let randomIndex = [random(), random()];
  let randomSummon = summon[randomIndex[0]];
  if (level.dimension != 'twilightforest:twilight_forest' && randomIndex[1] <= summon.length / 6) {
    luckSummon(randomSummon);
  } else if (randomIndex[1] >= summon.length * 5 / 6) {
    badSummon();
  } else {
    luckSummon(randomSummon);
  }
}
})

//幸运方块数组
const summon = [
'minecraft:villager',//从0开始算
'minecraft:bee',
'minecraft:cat',
'minecraft:cow',
'minecraft:pig',
'minecraft:fox',
'minecraft:wolf',
'minecraft:goat',
'minecraft:llama',
'minecraft:panda',
'minecraft:parrot',
'minecraft:rabbit',
'minecraft:sheep',
'minecraft:chicken',
'minecraft:turtle',
'minecraft:mooshroom',
'minecraft:creeper',
'minecraft:zombie',
'minecraft:zombie_villager',
'minecraft:skeleton',
'minecraft:wither_skeleton',
'minecraft:piglin',
'minecraft:pillager',
'minecraft:vindicator',
'minecraft:shulker',
'minecraft:slime',
'minecraft:witch',
'minecraft:spider',
'minecraft:strider',
'twilightforest:kobold'
]

onEvent('item.food_eaten', event => {
let {item, player, server} = event;
if (item.id == 'kubejs:thorn_rose_tea' && !player.creativeMode) {
    //当玩家生命值低于4，那他吃下大概率就死了
    if (player.getHealth() <= 4){
        server.tell(player + '承认了每朵玫瑰都有刺')
    }
    //施加4点伤害
    player.attack(4)
}
if (item.id == 'biggerreactors:cyanite_ingot') {
  player.tell('§a咕嘟~咕咚~')
  player.playSound('minecraft:entity.player.hurt_drown')
  player.attack(12)
}
function bowl(food,container){
  if (item.id == food && !player.creativeMode) {
    player.giveInHand(container)
  }
}
bowl('kubejs:glowstew','minecraft:bowl')
bowl('kubejs:mushgloom_sauce','minecraft:bowl')
bowl('kubejs:glow_venison_rib_with_pasta','minecraft:bowl')
bowl('kubejs:mushgloom_meef_pasta','minecraft:bowl')
bowl('kubejs:fried_insect','minecraft:bowl')
bowl('kubejs:ghast_brain_salad','minecraft:bowl')
bowl('kubejs:borer_tear_soup','minecraft:bowl')
bowl('kubejs:thousand_plant_stew','minecraft:bowl')
bowl('kubejs:grilled_ghast','minecraft:bowl')
bowl('kubejs:lily_chicken','minecraft:bowl')
bowl('kubejs:fiery_snakes','minecraft:bowl')
bowl('kubejs:glacier_ice_cream','minecraft:bowl')
bowl('kubejs:phytochemical_ice_cream','minecraft:bowl')
bowl('kubejs:torchberry_ice_cream','minecraft:bowl')
bowl('kubejs:aurora_ice_cream','minecraft:bowl')
bowl('kubejs:twilight_ice_cream','minecraft:bowl')
bowl('kubejs:rainbow_ice_cream','minecraft:bowl')
bowl('kubejs:refreshing_ice_cream','minecraft:bowl')
bowl('kubejs:thorn_rose_tea','minecraft:glass_bottle')
bowl('kubejs:torchberry_juice','minecraft:glass_bottle')
bowl('kubejs:phytochemical_juice','minecraft:glass_bottle')
bowl('kubejs:glacier_ice_tea','minecraft:glass_bottle')
bowl('kubejs:twilight_spring','minecraft:glass_bottle')
bowl('kubejs:tear_drink','minecraft:glass_bottle')
})

onEvent('entity.hurt', event => {
let {level, server, entity, source, damage} = event;
let health = Math.floor(entity.getHealth());
//暮色怪物增强
if(source.actual && entity.isLiving() && source.type != 'fall' && source.type != 'magic' && source.type != 'generic' && source.type != 'inFire' && source.type != 'drown' && source.type != 'outOfWorld') {
  if(entity.type == 'minecraft:player' && source.type != 'player' && level.dimension == 'twilightforest:twilight_forest' && !entity.creativeMode) {
    //玩家在暮色会受到额外伤害
    let damage = event.damage * 1.5; // 倍率
    server.scheduleInTicks(1, () => {
      entity.attack(source, damage);
    });
    //获取当前玩家生命值
    let playerHealth = Math.round(entity.getHealth());
    let time = Math.round(playerHealth/4);
    if(source.actual.type == 'minecraft:skeleton'){//骷髅额外造成凋零伤害，根据玩家当前血量计算时间和等级
      let witherLevel = Math.round(playerHealth/10);
      server.scheduleInTicks(1, () => {
        server.runCommandSilent(`effect give ${entity} minecraft:wither ${time} ${witherLevel}`);
      });
    }
    if(source.actual.type == 'twilightforest:skeleton_druid'){//骷髅德鲁伊额外造成中毒伤害，根据玩家当前血量计算时间和等级
      let poisonLevel = Math.round(playerHealth/5);
      server.scheduleInTicks(1, () => {
        server.runCommandSilent(`effect give ${entity} minecraft:poison ${time} ${poisonLevel}`);
      });
    }
    if(source.actual.type == 'minecraft:creeper'){//苦力怕炸到玩家后会生成圆形TNT阵列，也是根据玩家当前血量计算圆的大小和TNT数量
      let length = Math.round(100/playerHealth);
      let radius = Math.round(playerHealth/40);
      let max = Math.min((playerHealth/2), 90);
      let step = Math.max(length, 1);
      for (let i = 0; i < max; i += step){
        let x = source.actual.x + radius * Math.cos(i);
        let z = source.actual.z + radius * Math.sin(i);
        let y = source.actual.y;
        server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:tnt ${x} ${y} ${z} {Fuse:`+i+`}`);
      }
    }
  }
}

//落地水
function fallWater() {
  Minecraft.getInstance().gameRenderer.displayItemActivation('minecraft:water_bucket');
  entity.giveInHand('minecraft:bucket');
  entity.playSound('minecraft:item.totem.use');
  event.cancel();
}

if (entity.isLiving() && source.type == 'fall' && entity.headArmorItem === 'minecraft:turtle_helmet' && damage >= health * 3 / 4) {
  if (entity.mainHandItem === 'minecraft:water_bucket') {
    entity.mainHandItem.count--;
    fallWater();
  } else if (entity.offHandItem === 'minecraft:water_bucket') {
    entity.offHandItem.count--;
    fallWater();
  }
}


//光环
if (source.actual && entity.isLiving() && source.actual.isPlayer() && source.type === 'bullet' && source.actual.headArmorItem === 'yuushya:wriggle_nightbug' && source.actual.headArmorItem.getNbt()) {
  let actual = source.actual;
  let entityEffect = entity.potionEffects;
  let actualEffect = actual.potionEffects;
  let health = Math.floor(entity.getHealth());
  let maxHealth = Math.floor(entity.getMaxHealth());
  let cmData = actual.headArmorItem.getNbt().CustomModelData;
  
  if (cmData === 11821901) { // 破甲
    let sundering = entityEffect.getActive('apotheosis:sundering');
    if (sundering == null) {
      entityEffect.add('apotheosis:sundering', 300);
    } else {
        let sua = sundering.amplifier + 1;
        let sud = sundering.duration;
        let suTime = Math.round(sud + 20);
        let suLevel = Math.min(sua, 250);
        entityEffect.add('apotheosis:sundering', suTime, suLevel);
    }
    let alice = actualEffect.getActive('kubejs:alice_powah');
    if (alice != null) {
      // 强 锁 挂
      let dx = entity.x - actual.x;
      let dy = (entity.y+entity.eyeHeight) - (actual.y+actual.eyeHeight);
      let dz = entity.z - actual.z;

      // 计算yaw值
      let yaw = Math.atan2(dx, dz);
      let yawDegrees = -(yaw * (180 / 3.14159)).toFixed(2);

      // 计算pitch值
      let distance = Math.sqrt(dx * dx + dz * dz);
      let pitch = Math.atan2(dy, distance);
      let pitchDegrees = -(pitch * (180 / 3.14159)).toFixed(2);

      actual.setRotation(yawDegrees,pitchDegrees);
    }
  }
  if (cmData === 11821902) { // 闪电
    if (health % 5 === 0 || health % 7 === 0){
      //server.tell(`${level.getSeed()}`)
      server.scheduleInTicks(1, () => {
        server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:lightning_bolt ${entity.x} ${entity.y} ${entity.z}`);
        entity.attack(source, damage*1.5);
      })
    }
  }
  if (cmData === 11821903) { // 爆炸
    server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:tnt ${entity.x} ${entity.y+1} ${entity.z}`);
  }
  if (cmData === 11821904) { // 起飞
    entityEffect.add('minecraft:levitation', 40, 2);
    server.scheduleInTicks(40, () => {
      entityEffect.add('minecraft:levitation', 4, 250);
    })
  }
  if (cmData === 11821905) { // 护盾
    let absorption = actualEffect.getActive('minecraft:absorption');
    if (absorption == null) {
      actualEffect.add('minecraft:absorption', 100);
      actualEffect.add('minecraft:resistance', 100);
    } else {
      let aba = absorption.amplifier + 1;
      let abd = absorption.duration + 40;
      let abTime = Math.min(abd, 1200);
      let abLevel = Math.min(aba, 4);
      actualEffect.add('minecraft:absorption', abTime, abLevel);
      actualEffect.add('minecraft:resistance', abTime, 1);
    }
  }
  if (cmData === 11821906) { // 治疗
    if (actual.crouching) {
      server.runCommandSilent(`execute at ${actual} run effect give @e[type=!item,distance=..5] minecraft:instant_health`);
      server.scheduleInTicks(1, () => {
        for (let i = 0; i < 180; i++) {
          let x = actual.x + 5 * Math.cos(i);
          let z = actual.z + 5 * Math.sin(i);
          let y = actual.y;
          server.runCommandSilent(`execute in ${level.dimension} run particle dust 0 255 0 1 ${x} ${y + 0.1} ${z} 0 0 0 0.01 1`);
        }
      })
    } else {
      actual.heal(damage/2);
    }
  }
  if (cmData === 11821907) { // 互换
    let x1 = actual.x;
    let y1 = actual.y;
    let z1 = actual.z;
    let yaw1 = actual.getYaw();
    let pitch1 = actual.getPitch();
    let x2 = entity.x;
    let y2 = entity.y;
    let z2 = entity.z;
    let yaw2 = entity.getYaw();
    let pitch2 = entity.getPitch();
    actualEffect.add('minecraft:resistance', 10, 4);
    entityEffect.add('minecraft:resistance', 10, 4);
    server.scheduleInTicks(1, () => {
      entity.playSound('minecraft:entity.enderman.teleport');
      entity.setPositionAndRotation(x1,y1,z1,yaw1,pitch1);
    });
    server.scheduleInTicks(2, () => {
      actual.playSound('minecraft:entity.enderman.teleport');
      actual.setPositionAndRotation(x2,y2,z2,yaw2,pitch2);
    });
  }
  if (cmData === 11821908) { // 破伤
    let minDamage = Math.min(damage * 5, health - damage - 1);
    if (health >= maxHealth * 0.9) {
      server.scheduleInTicks(1, () => {
        entity.attack(source, minDamage);
      }) 
    }
  }
  if (cmData === 11821909) { // 斩杀
    if (health <= maxHealth / 3) {
      server.scheduleInTicks(1, () => {
        entity.kill();
      }) 
    }
  }
  if (cmData === 11821910) { // 范围
    let entityList = level.getEntitiesWithin(AABB.of(
      entity.x-3,
      entity.y-1,
      entity.z-3,
      entity.x+3,
      entity.y+3,
      entity.z+3
    ))
    for (let entities of entityList) {
      entities.attack(source, damage/2);
    }
  }
  if (cmData === 11821911) { // 流血
    let bleeding = entityEffect.getActive('apotheosis:bleeding');
    if (bleeding == null) {
      entityEffect.add('apotheosis:bleeding', 300, 0);
    } else {
        let bla = bleeding.amplifier + 1;
        let bld = bleeding.duration;
        let blTime = Math.round(bld + 20);
        let blLevel = Math.min(bla, 250);
        entityEffect.add('apotheosis:bleeding', blTime, blLevel);
    }
  }
  if (cmData === 11821912) { // 赌徒
    let random = () => Utils.random.nextInt(6); // 0-5
    let randomList = [random(), random()]
    server.scheduleInTicks(1, () => {
      if (randomList[0] === 0) {
        if (randomList[1] === 0 || randomList[1] === 2 || randomList[1] === 4) {
          entity.attack(source, damage*19);
        } else {
          actual.attack(source, damage*19);
        }
      }
    })
  }
  if (cmData === 11821913) { // 虚弱
    let weakness = entityEffect.getActive('minecraft:weakness');
    if (weakness == null) {
      entityEffect.add('minecraft:weakness', 300)
    } else {
        let wea = weakness.amplifier + 1;
        let wed = weakness.duration;
        let weTime = Math.round(wed + 100);
        let weLevel = Math.min(wea, 4);
        entityEffect.add('minecraft:weakness', weTime, weLevel);
    }
  }
}
})

onEvent('item.food_eaten', event => { // 吐你一脸
let {player} = event;
if (player && player.headArmorItem === 'yuushya:wriggle_nightbug' && player.headArmorItem.getNbt() && player.headArmorItem.getNbt().CustomModelData === 11821914) {
  let playerEffect = player.potionEffects;
  let spitting = playerEffect.getActive('atmospheric:spitting');
  if (spitting == null) {
    playerEffect.add('atmospheric:spitting', 100);
  } else {
      let spa = spitting.amplifier + 1;
      let spd = spitting.duration;
      let spTime = Math.round(spd + 40);
      let spLevel = Math.min(spa, 250);
      playerEffect.add('atmospheric:spitting', spTime, spLevel);
  }
}
})

onEvent('entity.death', event => { // 跟你爆了
let {entity, server, level} = event;
if (entity.isPlayer() && entity.headArmorItem === 'yuushya:wriggle_nightbug' && entity.headArmorItem.getNbt() && entity.headArmorItem.getNbt().CustomModelData === 11821915) {
  entity.headArmorItem.count-=1;
  server.runCommandSilent(`execute at ${entity} run kill @e[type=!item,distance=..18]`);
  server.scheduleInTicks(1, () => {
    server.runCommandSilent(`execute in ${level.dimension} run summon thermal:nuke_tnt ${entity.x} ${entity.y} ${entity.z}`);
  })
}
})