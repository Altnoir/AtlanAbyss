// priority: 404
onEvent("lootjs", event => {
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
  //删
  const removeLoot = [
    'beyond_earth:steel_ingot',
    'ars_nouveau:wilden_spike',
    'ars_nouveau:wilden_wing',
    'ars_nouveau:wilden_horn',
    /ars_nouveau:.*arrow/,
    'ars_nouveau:source_gem',
    'tconstruct:ender_slime_sapling',
    'tconstruct:blood_slime_grass_seeds',
    'tconstruct:ender_slime_grass_seeds',
    'twilightforest:uncrafting_table',
    /sophisticatedbackpacks:.*_upgrade/,
    /umapyoi:*/
  ];
  removeLoot.forEach((lootID) => {
    event
      .addLootTypeModifier(LootType.CHEST)
      .removeLoot(lootID);
  });
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
  //火力之环
  event.addLootTypeModifier(LootType.ENTITY)
    .matchEquip(EquipmentSlot.HEAD, Item.of('yuushya:wriggle_nightbug', '{CustomModelData:11821909}').weakNBT())
    .removeLoot(Ingredient.getAll())
    .addWeightedLoot([
      Item.of('kubejs:pistol_ammo', 4).withChance(20),
      Item.of('kubejs:smg_ammo', 4).withChance(10),
      Item.of('kubejs:rifle_ammo', 4).withChance(5),
      Item.of('kubejs:shotgun_ammo', 2).withChance(3),
      Item.of('kubejs:sniper_ammo', 4).withChance(2),
      Item.of('kubejs:magnum_ammo').withChance(1)
    ])
  //幸运之环
  event.addLootTypeModifier(LootType.ENTITY)
    .matchEquip(EquipmentSlot.HEAD, Item.of('yuushya:wriggle_nightbug', '{CustomModelData:11821910}').weakNBT())
    .removeLoot(Ingredient.getAll())
    .addLoot('kubejs:lucky_block')
  //在暮色森林根据生物位置掉落战利品
  let entityX;
  let entityZ;
  event
    .addLootTypeModifier(LootType.ENTITY)
    .anyDimension('twilightforest:twilight_forest')
    .apply((e) => {
      entityX = e.getEntity().x;
      entityZ = e.getEntity().z;
    })
    .modifyLoot(Ingredient.getAll(), (itemStack) => {
      let distance = Math.hypot(entityX, entityZ); // 计算实体离中心的距离
      let i = Math.min(128, Math.floor(distance / 128)) + 1; // 计算战利品掉落倍率
      if (itemStack.isStackable()) {
        itemStack.count += i;
        return itemStack;
      }
      return itemStack;
    });
});



const Minecraft = java('net.minecraft.client.Minecraft');

onEvent('item.right_click', event => {
  let { player, server, level, item } = event;

  lootbag('kubejs:halo_gashapon', 'kubejs:halo', true)//光环
  lootbag('kubejs:treasure_box', 'kubejs:treasure_box', false)//宝藏袋
  lootbag('kubejs:album_transpain', 'kubejs:album/transpain', true)//专辑
  lootbag('kubejs:album_indigrotto', 'kubejs:album/indigrotto', true)//专辑
  lootbag('kubejs:album_growing', 'kubejs:album/growing', true)//专辑
  lootbag('kubejs:album_blurred_mind', 'kubejs:album/blurred_mind', true)//专辑
  lootbag('kubejs:album_redraw', 'kubejs:album/redraw', true)//专辑
  lootbag('kubejs:album_yelling', 'kubejs:album/yelling', true)//专辑
  lootbag('kubejs:album_michelia', 'kubejs:album/michelia', true)//专辑
  lootbag('kubejs:album_nacollection4', 'kubejs:album/nacollection4', true)//专辑
  lootbag('kubejs:album_kessoku_band', 'kubejs:album/kessoku_band', true)//专辑
  lootbag('kubejs:album_mameyudoufu', 'kubejs:album/mameyudoufu', true)//专辑
  lootbag('kubejs:album_adventure', 'kubejs:album/adventure', true)//专辑

  hoshino('minecraft:clock');// 时钟
  hoshino('tiab:time_in_a_bottle');// 时间之瓶

  function lootbag(lootbag, lootable, activation) {
    if (item !== lootbag) {
      return;
    } else {
      player.swingArm(event.hand);
      server.runCommandSilent(`execute in ${level.dimension} run loot spawn ${player.x} ${player.y} ${player.z} loot ${lootable}`);
      player.playSound('minecraft:block.enchantment_table.use');
      if (activation) {
        if (lootbag === 'kubejs:halo_gashapon') {
          server.runCommandSilent(`playsound kubejs:ciallo voice @a ${player.x} ${player.y} ${player.z} 1 1`)
        } else {
          player.playSound('minecraft:entity.player.levelup');
        }
        Minecraft.getInstance().gameRenderer.displayItemActivation(lootbag);
      }
      player.addItemCooldown(lootbag, 10);
      item.count--;
    }
  }
  // 时缓
  function hoshino(id) {
    if (item !== id) return;
    if (player && player.headArmorItem === 'yuushya:wriggle_nightbug' && player.headArmorItem.getNbt() && player.headArmorItem.getNbt().CustomModelData === 11821911) {
      let tick;
      let pitch;
      tick = 19;
      pitch = 0.95;
      let timeSlowing = player.potionEffects.getActive('kubejs:time_slowing');

      if (!player.isCrouching()) {
        player.potionEffects.clear();
        server.runCommandSilent(`tickrate change 20`)
        server.runCommandSilent(`execute in ${level.dimension} run playsound minecraft:entity.ender_dragon.shoot player @a ${player.x} ${player.y} ${player.z} 1 1`)
      } else {
        if (timeSlowing != null) {
          let tia = timeSlowing.amplifier + 1;
          let tid = timeSlowing.duration;
          let tiTime = Math.round(tid + 20);
          let tiLevel = Math.min(tia, 18);

          tick = 19 - tiLevel;
          pitch = tick / 20;

          player.potionEffects.add('kubejs:time_slowing', tiTime, tiLevel);
        } else {
          player.potionEffects.add('kubejs:time_slowing', 40);
        }
        server.runCommandSilent(`tickrate change ${tick}`)
        server.runCommandSilent(`execute in ${level.dimension} run playsound minecraft:entity.ender_dragon.shoot player @a ${player.x} ${player.y} ${player.z} 1 ${pitch}`)
      }

      player.addItemCooldown(id, 1);
    }
  }


  // let artifact = 'kubejs:crystal_nucleus';

  // if (item === artifact) {
  //   let worldBorder = event.getLevel().worldBorder;
  //   let size = worldBorder.getSize();

  //   let add = (x) => {
  //     server.runCommandSilent(`worldborder add ${x} 5`)
  //     server.tell(`§b地图边界扩大，当前尺寸为：§7${size + x}`);
  //     player.playSound('minecraft:block.enchantment_table.use');
  //   }
  //   if (size <= 59999800) {
  //     if (player.crouching) {
  //       let count = item.count;
  //       add(count * 2);
  //       player.mainHandItem.count -= count;
  //       player.addItemCooldown(artifact, 80);
  //     } else {
  //       add(2);
  //       player.mainHandItem.count -= 1;
  //       player.addItemCooldown(artifact, 80);
  //     }
  //   } else {
  //     server.tell('§b地图已经扩到最大了');
  //   }
  // }
})

//苔藓块合成
// onEvent('block.right_click', event => {
//   let { player, block } = event;

//   if (block.up != 'minecraft:water') return;
//   if (block.id != 'minecraft:grass_block') {
//     return;
//   } else if (player.mainHandItem == 'minecraft:bone_meal' || player.offHandItem == 'minecraft:bone_meal') {
//     block.set('minecraft:moss_block');
//   }
// })

//初始限制世界大小
// onEvent("server.load", event => {
//   let { server } = event;

//   let worldBorder = server.getLevel('overworld').worldBorder;
//   let size = worldBorder.getSize();

//   if (size >= 59999860) {
//     worldBorder.setSize(96);
//   }
// })

// function worldBorderSet(event) {
//   let { player, level } = event;
//   let worldBorder = level.worldBorder;

//   let x = Math.floor(player.x / 16) * 16 + 8;
//   let z = Math.floor(player.z / 16) * 16 + 8;

//   worldBorder.setSize(16);
//   worldBorder.setCenter(x, z);
// }

onEvent('entity.spawned', event => {
  let { entity, level, server } = event;
  let { x, z } = entity;

  //oldMonsterSpawn(生命值, 倍率, 初始半径, 每隔多少半径强化一次，false为方形半径true为圆形半径);
  // function oldMonsterSpawn(health, multiple, radius, length, circle) {

  //   let r0 = radius - length;

  //     for (let i = 1; i <= 320; i++) {
  //       let r1 = r0 + length * i;
  //       let r2 = r1 + length;

  //       let newHealth = Math.floor(health + (health * multiple * i)); // 血量计算公式

  //       let distance = Math.hypot(x, z); // 半径
  //       let innerRing = circle ? (distance >= r1) : (x >= r1 || x <= -r1 || z >= r1 || z <= -r1);
  //       let outerRing = circle ? (distance <= r2) : (x < r2 || x > -r2 || z < r2 || z > -r2);

  //       if (innerRing && outerRing) {
  //         entity.mergeFullNBT(`{Attributes:[{Name:"generic.max_health",Base:${newHealth}}]}`);
  //         entity.heal(newHealth);
  //       }
  //     }
  // }

  //monsterSpawn(生命值, 倍率, 每隔多少距离强化一次);
  function monsterSpawn(health, multiple, length) {
    let distance = Math.hypot(x, z); // 计算怪物离中心的距离
    let coefficient = Math.min(1999, Math.floor(distance / length)); // 计算离中心有多少个距离
    let newHealth = Math.floor(health + (health * multiple * coefficient)); // 根据系数计算生命值

    entity.mergeFullNBT(`{KubeJSPersistentData:{id:7210},Attributes:[{Name:"generic.max_health",Base:${newHealth}}]}`);
    entity.heal(newHealth);
    event.cancel();
  }
  if (!entity.monster) return;
  if (entity.isLiving() && entity.getFullNBT().KubeJSPersistentData.id != 7210) {
    server.scheduleInTicks(1, () => {
      let health = entity.getMaxHealth();

      // if (level.dimension === 'minecraft:the_nether') {
      //   monsterSpawn(health, 0.05, 16);
      // }
      if (level.dimension === 'twilightforest:twilight_forest') {
        monsterSpawn(health, 0.1, 64);
      }
    });
  }

})

onEvent('entity.check_spawn', event => {
  let { entity } = event;
  //给了ban了
  if (entity.type === 'touhou_little_maid:fairy') {
    event.cancel();
  }
  if (entity.type === 'alexsmobs:fly') {
    event.cancel();
  }
  if (entity.type === 'alexsmobs:crimson_mosquito') {
    event.cancel();
  }
  if (entity.type === 'alexsmobs:cosmic_cod') {
    event.cancel();
  }
})



onEvent('entity.hurt', event => {
  let { level, server, entity, source, damage } = event;
  let allHealth = Math.floor(entity.getHealth());

  //if (!entity.isLiving()) return;

  //落地水
  function fallWater() {
    Minecraft.getInstance().gameRenderer.displayItemActivation('minecraft:water_bucket');
    entity.giveInHand('minecraft:bucket');
    entity.playSound('minecraft:item.totem.use');
    event.cancel();
  }
  if (source.type == 'fall' && damage >= allHealth * 3 / 4) {
    if (entity.mainHandItem === 'minecraft:water_bucket') {
      entity.mainHandItem.count--;
      fallWater();
    } else if (entity.offHandItem === 'minecraft:water_bucket') {
      entity.offHandItem.count--;
      fallWater();
    }
  }

  if (!source.actual) return;
  let actual = source.actual;

  //暮色怪物增强
  //&& source.type != 'fall' && source.type != 'magic' && source.type != 'generic' && source.type != 'inFire' && source.type != 'drown' && source.type != 'outOfWorld'
  if (entity.type == 'minecraft:player' && source.type != 'player') {
    if (level.dimension == 'twilightforest:twilight_forest' && !entity.creativeMode) {
      //玩家在暮色会受到额外伤害
      let damage = event.damage * 1.5; // 倍率
      server.scheduleInTicks(1, () => {
        entity.attack(source, damage);
      });
      //获取当前玩家生命值
      let playerHealth = Math.round(entity.getHealth());
      let time = Math.round(playerHealth / 4);
      if (actual.type == 'minecraft:skeleton') {//骷髅额外造成凋零伤害，根据玩家当前血量计算时间和等级
        let witherLevel = Math.round(playerHealth / 10);
        server.scheduleInTicks(1, () => {
          server.runCommandSilent(`effect give ${entity} minecraft:wither ${time} ${witherLevel}`);
        });
      }
      if (actual.type == 'twilightforest:skeleton_druid') {//骷髅德鲁伊额外造成中毒伤害，根据玩家当前血量计算时间和等级
        let poisonLevel = Math.round(playerHealth / 5);
        server.scheduleInTicks(1, () => {
          server.runCommandSilent(`effect give ${entity} minecraft:poison ${time} ${poisonLevel}`);
        });
      }
      // if (actual.type == 'minecraft:creeper') {//苦力怕炸到玩家后会生成圆形TNT阵列，也是根据玩家当前血量计算圆的大小和TNT数量
      //   let length = Math.round(100 / playerHealth);
      //   let radius = Math.round(playerHealth / 40);
      //   let max = Math.min((playerHealth / 2), 90);
      //   let step = Math.max(length, 1);

      //   for (let i = 0; i < max; i += step) {
      //     let x = actual.x + radius * Math.cos(i);
      //     let z = actual.z + radius * Math.sin(i);
      //     let y = actual.y;
      //     server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:tnt ${x} ${y} ${z} {Fuse:` + i + `}`);
      //   }
      // }
    }
    if (entity.headArmorItem === 'yuushya:wriggle_nightbug' && entity.headArmorItem.getNbt()) {
      if (entity.headArmorItem.getNbt().CustomModelData === 11821905) { // 看看是谁在打我
        let actualEffects = actual.potionEffects;
        let glowing = actualEffects.getActive('minecraft:glowing');
        if (glowing == null) {
          actualEffects.add('minecraft:glowing', 60);
        } else {
          let gld = glowing.duration + 20;
          let glTime = Math.min(gld, 1200);
          actualEffects.add('minecraft:glowing', glTime);
        }
      }
    }
  }
  if (actual.isPlayer()) {
    //打一下就红温的苦力怕
    if (level.dimension == 'twilightforest:twilight_forest' && entity.type == 'minecraft:creeper') {
      let creeperEffect = entity.potionEffects;
      creeperEffect.add('minecraft:speed', 200, 4);
      creeperEffect.add('minecraft:regeneration', 200, 1);
      creeperEffect.add('minecraft:resistance', 200, 1);
    }
    //时间之瓶偷寿命
    if (actual.mainHandItem === 'tiab:time_in_a_bottle' && entity.type !== 'dummmmmmy:target_dummy') {
      let entityEffect = entity.potionEffects;
      let tiab = actual.mainHandItem.nbt?.storedTime;
      let weakness = entityEffect.getActive('minecraft:weakness');

      if (weakness == null) {
        entityEffect.add('minecraft:weakness', 100);
        actual.mainHandItem.nbt.merge({ storedTime: tiab + 20 });
        actual.tell(`${actual} +1s`)
      } else {
        let wea = weakness.amplifier + 1;
        let wed = weakness.duration;
        let weTime = Math.round(wed + 20);
        let weLevel = Math.min(wea, 8);
        entityEffect.add('minecraft:weakness', weTime, weLevel);

        let timeLevel = Math.pow(2, weLevel);
        entity.attack(source, timeLevel);
        actual.mainHandItem.nbt.merge({ storedTime: tiab + (timeLevel * 20) });
        actual.tell(`${actual} +${timeLevel}s`);
      }
    }
    //光环
    if (actual.headArmorItem === 'yuushya:wriggle_nightbug' && actual.headArmorItem.getNbt()) {
      let entityEffect = entity.potionEffects;
      let actualEffect = actual.potionEffects;
      let health = Math.floor(entity.getHealth());
      let maxHealth = Math.floor(entity.getMaxHealth());
      let cmData = actual.headArmorItem.getNbt().CustomModelData;

      if (cmData === 11821903) { // 重锤
        if (!actual.onGround) {
          let fall = actual.fallDistance.toFixed(1);

          entity.attack(source, damage + damage / 2 * fall);
          actual.potionEffects.add('minecraft:levitation', 2, 4);
        }
      }

      if (source.type !== 'bullet') return;
      if (cmData === 11821901) { // 破甲
        let sundering = entityEffect.getActive('kubejs:sundering');
        let alice = actualEffect.getActive('kubejs:alice_powah');

        let mag;
        if (alice != null) {
          mag = 1;
        } else {
          mag = 0.2;
        }

        if (sundering != null) {
          let sua = sundering.amplifier + 1;
          let sud = sundering.duration;
          let suTime = Math.round(sud + 20);
          let suLevel = Math.min(sua, 250);
          let newDamage = damage * mag * suLevel;

          entityEffect.add('kubejs:sundering', suTime, suLevel);
          entity.attack(source, newDamage);
        } else {
          entityEffect.add('kubejs:sundering', 300);
        }

        // 强 锁 挂
        // let dx = entity.x - actual.x;
        // let dy = (entity.y + entity.eyeHeight) - (actual.y + actual.eyeHeight);
        // let dz = entity.z - actual.z;

        // 计算yaw值
        // let yaw = Math.atan2(dx, dz);
        // let yawDegrees = -(yaw * (180 / 3.14159)).toFixed(2);

        // 计算pitch值
        // let distance = Math.sqrt(dx * dx + dz * dz);
        // let pitch = Math.atan2(dy, distance);
        // let pitchDegrees = -(pitch * (180 / 3.14159)).toFixed(2);

        // actual.setRotation(yawDegrees, pitchDegrees);

      }
      if (cmData === 11821902) { // 闪电
        if (health % 5 === 0 || health % 7 === 0) {
          //server.tell(`${level.getSeed()}`)
          server.scheduleInTicks(1, () => {
            server.runCommandSilent(`execute in ${level.dimension} run summon minecraft:lightning_bolt ${entity.x} ${entity.y} ${entity.z}`);
            entity.attack(source, damage * 2.5);
          })
        }
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
          actual.heal(damage / 2);
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
          entity.setPositionAndRotation(x1, y1, z1, yaw1, pitch1);
        });
        server.scheduleInTicks(2, () => {
          actual.playSound('minecraft:entity.enderman.teleport');
          actual.setPositionAndRotation(x2, y2, z2, yaw2, pitch2);
        });
      }
      if (cmData === 11821908) { // 破伤
        if (health >= maxHealth * 0.9) {
          entity.attack(source, damage * 20);
          //event.cancel();
        }
      }
      // if (cmData === 11821910) { // 范围
      //   let entityList = level.getEntitiesWithin(AABB.of(
      //     entity.x - 3,
      //     entity.y - 1,
      //     entity.z - 3,
      //     entity.x + 3,
      //     entity.y + 3,
      //     entity.z + 3
      //   ))
      //   for (let entities of entityList) {
      //     entities.attack(source, damage);
      //   }
      //   event.cancel();
      // }
      if (cmData === 11821912) { // 赌徒
        let random = () => Utils.random.nextInt(6); // 0-5
        let randomList = [random(), random()]

        if (randomList[0] === 0) {
          if (randomList[1] === 0 || randomList[1] === 2 || randomList[1] === 4) {
            entity.attack(source, damage * 88);
          } else {
            actual.attack(source, damage * 88);
          }
        }
        event.cancel();

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
      if (cmData === 11821916) { // 诸神
        entity.attack(source, Math.max(1, damage * (health / 500)));
        //event.cancel();
      }
    }
  }

})

onEvent('entity.death', event => {
  let { source, entity, server, level } = event;

  // if (entity.isMonster() && source.actual && source.actual.headArmorItem === 'yuushya:wriggle_nightbug' && source.actual.headArmorItem.getNbt()) {
  //   let acmData = source.actual.headArmorItem.getNbt().CustomModelData;
  //   if (cmData === 11821910) { // 幸运方块！爆！
  //     if (Utils.random.nextInt(2) > 1) return;
  //     server.runCommandSilent(`execute in ${level.dimension} run summon item ${entity.x} ${entity.y} ${entity.z} {Item:{id:'kubejs:lucky_block',Count:1b}}`);
  //   }
  //   if (acmData !== 11821909) return; // 枪械子弹！爆！
  //   if (entity.getMaxHealth() > 100) {
  //     server.runCommandSilent(`execute in ${level.dimension} run loot spawn ${entity.x} ${entity.y} ${entity.z} loot kubejs:ammo3`);
  //   } else if (entity.getMaxHealth() > 50) {
  //     server.runCommandSilent(`execute in ${level.dimension} run loot spawn ${entity.x} ${entity.y} ${entity.z} loot kubejs:ammo2`);
  //   } else {
  //     server.runCommandSilent(`execute in ${level.dimension} run loot spawn ${entity.x} ${entity.y} ${entity.z} loot kubejs:ammo1`);
  //   }
  // }
  if (entity.isPlayer() && entity.headArmorItem === 'yuushya:wriggle_nightbug' && entity.headArmorItem.getNbt()) {
    let ecmData = entity.headArmorItem.getNbt().CustomModelData;
    if (ecmData !== 11821915) return;// 跟你爆了
    entity.headArmorItem.count -= 1;
    server.runCommandSilent(`execute at ${entity} run kill @e[type=!item,distance=..18]`);
    server.scheduleInTicks(1, () => {
      server.runCommandSilent(`execute in ${level.dimension} run summon thermal:nuke_tnt ${entity.x} ${entity.y} ${entity.z}`);
    })

  }
})
onEvent('item.food_eaten', event => {
  let { item, player, server } = event;

  // 吐你一脸
  if (player && player.headArmorItem === 'yuushya:wriggle_nightbug' && player.headArmorItem.getNbt()) {
    if (player.headArmorItem.getNbt().CustomModelData !== 11821914) return;

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



  if (item.id == 'kubejs:thorn_rose_tea' && !player.creativeMode) {
    //当玩家生命值低于4，那他吃下大概率就死了
    if (player.getHealth() <= 4) {
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

  function bowl(food, container) {
    if (item.id !== food) return;
    if (!player.creativeMode) {
      player.giveInHand(container)
    }
  }

  bowl('kubejs:glowstew', 'minecraft:bowl')
  bowl('kubejs:mushgloom_sauce', 'minecraft:bowl')
  bowl('kubejs:glow_venison_rib_with_pasta', 'minecraft:bowl')
  bowl('kubejs:mushgloom_meef_pasta', 'minecraft:bowl')
  bowl('kubejs:fried_insect', 'minecraft:bowl')
  bowl('kubejs:ghast_brain_salad', 'minecraft:bowl')
  bowl('kubejs:borer_tear_soup', 'minecraft:bowl')
  bowl('kubejs:thousand_plant_stew', 'minecraft:bowl')
  bowl('kubejs:grilled_ghast', 'minecraft:bowl')
  bowl('kubejs:lily_chicken', 'minecraft:bowl')
  bowl('kubejs:fiery_snakes', 'minecraft:bowl')
  bowl('kubejs:glacier_ice_cream', 'minecraft:bowl')
  bowl('kubejs:phytochemical_ice_cream', 'minecraft:bowl')
  bowl('kubejs:torchberry_ice_cream', 'minecraft:bowl')
  bowl('kubejs:aurora_ice_cream', 'minecraft:bowl')
  bowl('kubejs:twilight_ice_cream', 'minecraft:bowl')
  bowl('kubejs:rainbow_ice_cream', 'minecraft:bowl')
  bowl('kubejs:refreshing_ice_cream', 'minecraft:bowl')
  bowl('kubejs:thorn_rose_tea', 'minecraft:glass_bottle')
  bowl('kubejs:torchberry_juice', 'minecraft:glass_bottle')
  bowl('kubejs:phytochemical_juice', 'minecraft:glass_bottle')
  bowl('kubejs:glacier_ice_tea', 'minecraft:glass_bottle')
  bowl('kubejs:twilight_spring', 'minecraft:glass_bottle')
  bowl('kubejs:tear_drink', 'minecraft:glass_bottle')
})



onEvent('recipes', event => {
  musicRecipes(event)
  alchemyRecipes(event)
  trading(event)
})
onEvent('player.logged_in', event => {
  event.server.scheduleInTicks(40, () => {
    event.player.runCommandSilent('kubejs reload client_scripts');
  })
})



onEvent('block.break', event => {
  let { server, level, block } = event;

  if (block !== 'kubejs:lucky_block') return;

  let random = () => Utils.random.nextInt(summon.length);
  let randomIndex = [random(), random()];
  let randomSummon = summon[randomIndex[0]];

  if (level.dimension != 'twilightforest:twilight_forest') {
    if (randomIndex[1] <= summon.length / 6) {
      luckSummon(randomSummon);
    }
  } else if (randomIndex[1] >= summon.length * 9 / 10) {
    badSummon();
  } else {
    luckSummon('artifacts:mimic');
  }

  function luckSummon(randomSummon) {
    server.runCommandSilent(`execute in ${level.dimension} run summon ${randomSummon} ${block.x} ${block.y} ${block.z}`);
    server.runCommandSilent(`execute in ${level.dimension} run playsound minecraft:entity.turtle.lay_egg block @a ${block.x} ${block.y} ${block.z}`)
    server.runCommandSilent(`execute in ${level.dimension} run particle minecraft:firework ${block.x} ${block.y + 0.5} ${block.z} .1 0 .1 .07 20`);
  }
  function badSummon() {
    server.runCommandSilent(`execute in ${level.dimension} run summon thermal:nuke_tnt ${block.x} ${block.y} ${block.z}`);
  }


  // if (level.worldBorder.getSize() >= 59999860) {
  //   worldBorderSet(event)
  // }
})
//幸运方块数组
const summon = [
  'minecraft:villager',//从0开始算
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
  'twilightforest:kobold',
  'artifacts:mimic'
];