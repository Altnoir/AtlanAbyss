const portalBlock = ['kubejs:amethyst_portal', 'kubejs:abyss_portal', 'kubejs:deep_portal']; // 传送门方块
const frame = 'minecraft:obsidian'; // 传送门框架

const dim1 = 'minecraft:overworld'; // 维度
const dim2 = 'atlanabyss:tempt_forest';
const dim3 = 'atlanabyss:major_fault';
const dim4 = 'atlanabyss:secret_garden';
const dim5 = 'atlanabyss:sinking_sea';
const dim6 = 'atlanabyss:paradise';
const dim7 = 'inversia:inversiadim';
const dim8 = 'minecraft:the_nether';
const dim9 = 'minecraft:the_end';
const dim10 = 'atlanabyss:final_vortex';

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
        if (dim == dim5) {
            if (abyssPortal) {
                if (block.y >= 250) {
                    backAbyss(dim4, 255, 0);
                } else {
                    player.setStatusMessage('§c传送门过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == dim4) {
            if (abyssPortal) {
                if (block.y <= 5) {
                    goAbyss(dim5, 255, 0);
                } else {
                    player.setStatusMessage('§c传送门过高');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == dim3) {
            if (abyssPortal) {
                if (block.y >= -6) {
                    backAbyss(dim2, -1, 0);
                } else {
                    player.setStatusMessage('§c传送门过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == dim2) {
            if (abyssPortal) {
                if (block.y >= 250) {
                    backAbyss(dim1, 191, 0);
                } else if (block.y <= 5) {
                    goAbyss(dim3, -1, 0);
                } else {
                    player.setStatusMessage('§c传送门过高或过矮');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        } else if (dim == dim1) {
            if (abyssPortal) {
                if (block.y <= -59) {
                    goAbyss(dim2, 191, 0);
                } else {
                    player.setStatusMessage('§c传送门过高');
                }
            } else {
                player.setStatusMessage('§c结构错误');
            }
        }
    } else if (block.id == portalBlock[1]) {
        if (dim == dim5) {
            goAbyss2(dim6, 512);
        }
    } else if (block.id == portalBlock[2]) {
        if (dim == dim7) {
            player.setStatusMessage('§c无法使用！');
        } else if (dim == dim6) {
            if (abyssPortal) {
                if (block.y <= 5) {
                    goAbyss3(dim7, 255);
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
    if (source.type == 'outOfWorld') {
        let xgo = Math.round(entity.x / 2);
        let zgo = Math.round(entity.z / 2);
        let xback = Math.round(entity.x * 256);
        let zback = Math.round(entity.z * 256);
        if (level.dimension == dim3) {
            e.cancel();
            server.runCommandSilent(`execute in ${dim4} as ${entity} run tp ${xgo} 256 ${zgo}`)
            entity.potionEffects.add('minecraft:slow_falling', 200);
        } else if (level.dimension == dim9) {
            e.cancel();
            server.runCommandSilent(`execute in ${dim10} as ${entity} run tp ${xgo} 256 ${zgo}`)
        } else if (level.dimension == dim10) {
            e.cancel();
            server.runCommandSilent(`execute in ${dim1} as ${entity} run tp ${xback} 512 ${zback}`)
        }
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
    if (dim == dim4 && item.id == 'neapolitan:mint_candies') {
        if (player.y >= 155) {
            server.runCommandSilent(`execute in ${dim3} as ${player} run tp ${xback} -514 ${zback}`)
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
    // if (dim == dim6 && item.id == 'peculiars:aloe_jelly_slice') {
    //     if (player.y >= 512) {
    //         backAbyss2(dim5);
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