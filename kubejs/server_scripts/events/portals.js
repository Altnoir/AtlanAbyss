const portalBlock = ['kubejs:amethyst_portal', 'kubejs:abyss_portal', 'kubejs:deep_portal']; // 传送门方块
const frame = 'minecraft:obsidian'; // 传送门框架

const one = 'minecraft:overworld'; // 维度
const two = 'atlanabyss:under_forest';
const thr = 'atlanabyss:major_fault';
const fou = 'atlanabyss:secret_garden';
const fiv = 'atlanabyss:sinking_sea';
const six = 'atlanabyss:paradise';
const sev = 'inversia:inversiadim';
const eig = 'minecraft:the_nether';

onEvent('block.right_click', (e) => {
    const { block, player, server } = e;

    if (e.hand != 'main_hand' || player.mainHandItem != null) return;

    let abyssPortal = block.north == frame && block.south == frame && block.west == frame && block.east == frame;
    let per = player.persistentData;
    let dim = player.level.dimension;
    let PlayerId = player.getName().getString();

    function goAbyss(dimGo, h, n) {
        let xgo = Math.round(block.x / 2);
        let ygo = h - block.y;
        let zgo = Math.round(block.z / 2);

        player.playSound('minecraft:block.portal.trigger');
        server.runCommandSilent(`execute in ${dimGo} as ${PlayerId} run tp ${xgo} ${ygo - 2} ${zgo}`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo - 1} ${zgo} ${xgo} ${ygo - 2} ${zgo} air`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo + 1} ${ygo} ${zgo} ${xgo - 1} ${ygo} ${zgo} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo} ${zgo + 1} ${xgo} ${ygo} ${zgo - 1} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo} ${zgo} ${xgo} ${ygo} ${zgo} ${portalBlock[n]}`);
        player.potionEffects.add('minecraft:slow_falling', 200);
        server.scheduleInTicks(1, () => {
            player.playSound('minecraft:block.portal.travel');
            //server.tell(`${xgo},${ygo},${zgo}`)
        });
    }
    function backAbyss(dimback, h, n) {
        let xback = Math.round(block.x * 2);
        let yback = h - block.y;
        let zback = Math.round(block.z * 2);

        player.playSound('minecraft:block.portal.trigger');
        server.runCommandSilent(`execute in ${dimback} as ${PlayerId} run tp ${xback} ${yback + 1} ${zback}`)
        server.runCommandSilent(`execute in ${dimback} run fill ${xback} ${yback + 1} ${zback} ${xback} ${yback + 2} ${zback} air`);
        server.runCommandSilent(`execute in ${dimback} run fill ${xback + 1} ${yback} ${zback} ${xback - 1} ${yback} ${zback} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimback} run fill ${xback} ${yback} ${zback + 1} ${xback} ${yback} ${zback - 1} minecraft:obsidian`);
        server.runCommandSilent(`execute in ${dimback} run fill ${xback} ${yback} ${zback} ${xback} ${yback} ${zback} ${portalBlock[n]}`);
        server.scheduleInTicks(1, () => {
            player.playSound('minecraft:block.portal.travel');
            //server.tell(`${xback},${yback},${zback}`)
        });
    }

    function goAbyss2(dimGo, h) {
        let xgo = Math.round(block.x / 2);
        let ygo = h + block.y;
        let zgo = Math.round(block.z / 2);

        // per.putDouble("pos_x", block.x)
        // per.putDouble("pos_y", block.y - 5)
        // per.putDouble("pos_z", block.z)
        player.playSound('minecraft:block.portal.trigger');
        server.runCommandSilent(`execute in ${dimGo} as ${PlayerId} run tp ${xgo} ${ygo} ${zgo}`);
        player.potionEffects.add('minecraft:slow_falling', 1000);
        player.playSound('minecraft:block.portal.travel');
    }

    function goAbyss3(dimGo, h) {
        let xgo = Math.round(block.x / 2);
        let ygo = h - block.y;
        let zgo = Math.round(block.z / 2);

        player.playSound('minecraft:block.portal.trigger');
        server.runCommandSilent(`execute in ${dimGo} as ${PlayerId} run tp ${xgo} ${ygo - 2} ${zgo}`);
        server.runCommandSilent(`execute in ${dimGo} run fill ${xgo} ${ygo - 1} ${zgo} ${xgo} ${ygo - 2} ${zgo} air`);
        player.potionEffects.add('minecraft:slow_falling', 200);
        server.scheduleInTicks(1, () => {
            player.playSound('minecraft:block.portal.travel');
            //server.tell(`${xgo},${ygo},${zgo}`)
        });
    }



    if (block.id == portalBlock[0]) {
        if (dim == fiv) {
            if (abyssPortal) {
                if (block.y >= 250) {
                    backAbyss(fou, 255, 0);
                } else {
                    player.setStatusMessage('§c传送门过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == fou) {
            if (abyssPortal) {
                if (block.y <= 5) {
                    goAbyss(fiv, 255, 0);
                } else {
                    player.setStatusMessage('§c传送门过高');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == thr) {
            if (abyssPortal) {
                if (block.y >= -6) {
                    backAbyss(two, -1, 0);
                } else {
                    player.setStatusMessage('§c传送门过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == two) {
            if (abyssPortal) {
                if (block.y >= 250) {
                    backAbyss(one, 191, 0);
                } else if (block.y <= 5) {
                    goAbyss(thr, -1, 0);
                } else {
                    player.setStatusMessage('§c传送门过高或过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == one) {
            if (abyssPortal) {
                if (block.y <= -58) {
                    goAbyss(two, 191, 0);
                } else {
                    player.setStatusMessage('§c传送门过高');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        }
    } else if (block.id == portalBlock[1]) {
        if (dim == fiv) {
            goAbyss2(six, 512);
        }
    } else if (block.id == portalBlock[2]) {
        if (dim == sev) {
            player.setStatusMessage('§c无法使用！');
        } else if (dim == six) {
            if (abyssPortal) {
                if (block.y <= 5) {
                    goAbyss3(sev, 255);
                } else {
                    player.setStatusMessage('§c传送门过高');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        }
    }
})



onEvent('entity.hurt', (e) => {
    const { level, server, entity, source } = e;
    // 跌落传送
    if (source.type == 'outOfWorld' && level.dimension == thr) {
        let xgo = Math.round(entity.x / 2);
        let zgo = Math.round(entity.z / 2);

        server.runCommandSilent(`execute in ${fou} as ${entity} run tp ${xgo} 256 ${zgo}`)
        e.cancel();
        entity.potionEffects.add('minecraft:slow_falling', 200);
    }
})



onEvent('item.food_eaten', (e) => {
    const { item, player, server } = e;

    let per = player.persistentData;
    let dim = player.level.dimension;
    let xback = Math.round(player.x * 2);
    let zback = Math.round(player.z * 2);
    let playerEffect = player.potionEffects;
    let PlayerId = player.getName().getString();
    let levitation = playerEffect.getActive('minecraft:levitation');

    // function backAbyss2(dimback) {
    //     let xback = per.getDouble(`pos_x`);
    //     let yback = per.getDouble(`pos_y`);
    //     let zback = per.getDouble(`pos_z`);

    //     player.playSound('minecraft:block.portal.trigger');
    //     server.runCommandSilent(`execute in ${dimback} as ${PlayerId} run tp ${xback} ${yback + 6} ${zback}`)
    //     server.scheduleInTicks(20, () => {
    //         player.playSound('minecraft:block.portal.travel');
    //         //server.tell(`${xgo},${ygo},${zgo}`)
    //     });
    // }


    // 恰薄荷糖飞天
    if (dim == fou && item.id == 'neapolitan:mint_candies') {
        if (player.y >= 255) {
            server.runCommandSilent(`execute in ${thr} as ${player} run tp ${xback} -514 ${zback}`)
            player.potionEffects.add('minecraft:levitation', 600, 4);
        } else if (levitation == null) {
            playerEffect.add('minecraft:levitation', 40);
        } else {
            let lea = levitation.amplifier + 1;
            let led = levitation.duration;
            let leTime = Math.round(led + 60);
            let leLevel = Math.min(lea, 4);
            playerEffect.add('minecraft:levitation', leTime, leLevel);
        }
    }
    // 恰芦荟果冻片飞天
    // if (dim == six && item.id == 'peculiars:aloe_jelly_slice') {
    //     if (player.y >= 512) {
    //         backAbyss2(fiv);
    //     } else if (levitation == null) {
    //         playerEffect.add('minecraft:levitation', 60);
    //     } else {
    //         let lea = levitation.amplifier + 1;
    //         let led = levitation.duration;
    //         let leTime = Math.round(led + 60);
    //         let leLevel = Math.min(lea, 9);
    //         playerEffect.add('minecraft:levitation', leTime, leLevel);
    //     }
    // }
})