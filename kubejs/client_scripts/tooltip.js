onEvent('item.tooltip', tooltip => {
    let ore = (id, y1, y2, dim) => tooltip.add(id, [`§o§7生成高度：Y= §6${y1} §7至 §6${y2}`, `§7生成维度：§6${dim}`])
    ore(['thermal:cinnabar_ore', 'thermal:deepslate_cinnabar_ore'], -16, 48, "主世界")
    ore(['thermal:niter_ore', 'thermal:deepslate_niter_ore'], -16, 64, "主世界")
    ore(['thermal:nickel_ore', 'thermal:deepslate_nickel_ore'], -40, 120, "主世界")
    ore(['thermal:ruby_ore', 'thermal:deepslate_ruby_ore'], -144, 16, "主世界")
    ore(['thermal:sapphire_ore', 'thermal:deepslate_sapphire_ore'], -144, 16, "主世界")
    ore(['thermal:silver_ore', 'thermal:deepslate_silver_ore'], -60, 40, "主世界")
    ore(['thermal:apatite_ore', 'thermal:deepslate_apatite_ore'], -16, 96, "主世界")
    ore(['thermal:sulfur_ore', 'thermal:deepslate_sulfur_ore'], -16, 32, "主世界")
    ore(['thermal:tin_ore', 'thermal:deepslate_tin_ore'], -20, 60, "主世界")
    ore('kubejs:nether_aluminum_ore', 104, 128, "下界")
    ore('thermal:deepslate_lead_ore', 180, 255, "颠倒之域")
    ore('kubejs:inversia_uranium_ore', 188, 255, "颠倒之域")
    ore('kubejs:end_bismuth_ore', 0, 255, "末地")
    ore('ae2:deepslate_quartz_ore', 0, 255, "末地")

    ore(['create:zinc_ore', 'create:deepslate_zinc_ore'], -63, 70, "主世界")

    ore(['minecraft:coal_ore', 'minecraft:deepslate_coal_ore'], 136, 256, "主世界")
    ore(['minecraft:iron_ore', 'minecraft:deepslate_iron_ore'], 1, 64, "主世界")
    ore(['minecraft:lapis_ore', 'minecraft:deepslate_lapis_ore'], -32, 32, "主世界")
    ore(['minecraft:gold_ore', 'minecraft:deepslate_gold_ore'], 80, 384, "主世界")
    ore(['minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore'], -144, 16, "主世界")
    ore(['minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore'], -64, 15, "主世界")
    ore(['minecraft:copper_ore', 'minecraft:deepslate_copper_ore'], -16, 112, "主世界")
    ore(['minecraft:emerald_ore', 'minecraft:deepslate_emerald_ore'], -16, 480, "主世界")

    tooltip.add('nethersdelight:propelplant_cane', '§6使用小刀破坏枪药草茎获得');

    tooltip.add('kubejs:mixed_herb_gg', '§6可恢复适量生命值');
    tooltip.add('kubejs:mixed_herb_ggg', '§6可恢复大量生命值');
    tooltip.add('kubejs:mixed_herb_rg', '§6可恢复大量生命值');
    tooltip.add('kubejs:mixed_herb_bg', '§6可清除体内所有毒素，恢复少量生命值');
    tooltip.add('kubejs:mixed_herb_yg', '§6可暂时提升生命上限，恢复少量生命值');
    tooltip.add('kubejs:mixed_herb_br', '§6不可单独食用');
    tooltip.add('kubejs:mixed_herb_yr', '§6不可单独食用');
    tooltip.add('kubejs:mixed_herb_bgg', '§6可清除体内所有毒素，恢复适量生命值');
    tooltip.add('kubejs:mixed_herb_ygg', '§6可暂时提升生命上限，恢复适量生命值');
    tooltip.add('kubejs:mixed_herb_brg', '§6可清除体内所有毒素，恢复大量生命值');
    tooltip.add('kubejs:mixed_herb_yrg', '§6可暂时提升生命上限，恢复大量生命值');

    global.substrates[0].forEach(e => tooltip.add(e.id, [`§8类型： §7火成`]));
    global.substrates[1].forEach(e => tooltip.add(e.id, [`§8类型： §7草本`]));
    global.substrates[2].forEach(e => tooltip.add(e.id, [`§8类型： §7不稳定`]));
    global.substrates[3].forEach(e => tooltip.add(e.id, [`§8类型： §7晶化`]));
    global.substrates[4].forEach(e => tooltip.add(e.id, [`§8类型： §7金属`]));
    global.substrates[5].forEach(e => tooltip.add(e.id, [`§8类型： §7宝石`]));
    global.substrates[6].forEach(e => tooltip.add(e.id, [`§8类型： §7催化剂`]));

    // NBT查看工具
    // tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
    //     if (tooltip.shift && item.nbt) {
    //         text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)));
    //     }
    // })

    tooltip.addAdvanced('yuushya:wriggle_nightbug', (item, advanced, text) => {
        let cmData = item.nbt?.CustomModelData;
        if (cmData === 11821901) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.alice'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.alice1'));
                text.add(8, Text.translate('tooltip.kubejs.alice2'));
                text.add(9, Text.translate('tooltip.kubejs.alice3'));
                text.add(10, Text.of(' '));
            }
        }
        if (cmData === 11821902) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.azusa'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.azusa1'));
                text.add(8, Text.translate('tooltip.kubejs.azusa2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821903) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.shiroko'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.shiroko1'));
                text.add(8, Text.of(' '));
            }
        }
        if (cmData === 11821904) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.mika'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.mika1'));
                text.add(8, Text.of(' '));
            }
        }
        if (cmData === 11821905) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.yuuka'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.yuuka1'));
                text.add(8, Text.of(' '));
            }
        }
        if (cmData === 11821906) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.koharu'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.koharu1'));
                text.add(8, Text.translate('tooltip.kubejs.koharu2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821907) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.noa'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.noa1'));
                text.add(8, Text.of(' '));
            }
        }
        if (cmData === 11821908) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.midori'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.midori1'));
                text.add(8, Text.translate('tooltip.kubejs.midori2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821909) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.momoi'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.momoi1'));
                text.add(8, Text.translate('tooltip.kubejs.momoi2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821910) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.mari'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.mari1'));
                text.add(8, Text.of(' '));
            }
        }
        if (cmData === 11821911) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.hoshino'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.hoshino1'));
                text.add(8, Text.translate('tooltip.kubejs.hoshino2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821912) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.iroha'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.iroha1'));
                text.add(8, Text.translate('tooltip.kubejs.iroha2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821913) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.izuna'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.izuna1'));
                text.add(8, Text.of(' '));
            }
        }
        if (cmData === 11821914) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.hanako'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.hanako1'));
                text.add(8, Text.translate('tooltip.kubejs.hanako2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821915) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.hasumi'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.hasumi1'));
                text.add(8, Text.translate('tooltip.kubejs.hasumi2'));
                text.add(9, Text.of(' '));
            }
        }
        if (cmData === 11821916) {
            if (!tooltip.shift) {
                text.add(2, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(2, Text.translate('tooltip.kubejs.shifton'));
                text.add(3, Text.of(' '));
                text.add(4, Text.translate('tooltip.kubejs.purana'));
                text.add(5, Text.of(' '));
                text.add(6, Text.translate('tooltip.kubejs.head'));
                text.add(7, Text.translate('tooltip.kubejs.purana1'));
                text.add(8, Text.translate('tooltip.kubejs.purana2'));
                text.add(9, Text.of(' '));
            }
        }
    })

    tooltip.addAdvanced('minecraft:turtle_helmet', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, Text.translate('tooltip.kubejs.shift'));
        } else {
            text.add(1, Text.translate('tooltip.kubejs.shifton'));
            text.add(2, Text.of(' '));
            text.add(3, Text.translate('tooltip.kubejs.head'));
            text.add(4, Text.translate('tooltip.kubejs.turtle_helmet1'));
            text.add(5, Text.translate('tooltip.kubejs.turtle_helmet2'));
            text.add(6, Text.translate('tooltip.kubejs.turtle_helmet3'));
            text.add(7, Text.of(' '));
        }
    })
})
