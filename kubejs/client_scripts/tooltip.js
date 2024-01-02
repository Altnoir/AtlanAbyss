onEvent('item.tooltip', tooltip => {
    let ore = (id, y, dim) => tooltip.addAdvanced(
        id, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(1, Text.translate('tooltip.kubejs.shifton'));
                text.add(2, Text.translate('tooltip.kubejs.' + y));
                text.add(3, Text.translate('tooltip.kubejs.' + dim));
            }
        })
    ore('thermal:cinnabar_ore', 'cinnabar_y', 'overworld')
    ore('thermal:niter_ore', 'niter_y', 'overworld')
    ore('thermal:nickel_ore', 'nickel_y', 'overworld')
    ore('thermal:ruby_ore', 'ruby_y', 'overworld')
    ore('thermal:sapphire_ore', 'sapphire_y', 'overworld')
    ore('thermal:silver_ore', 'silver_y', 'overworld')
    ore('thermal:apatite_ore', 'apatite_y', 'overworld')
    ore('thermal:sulfur_ore', 'sulfur_y', 'overworld')
    ore('thermal:tin_ore', 'tin_y', 'overworld')
    ore('thermal:deepslate_cinnabar_ore', 'cinnabar_y', 'overworld')
    ore('thermal:deepslate_niter_ore', 'niter_y', 'overworld')
    ore('thermal:deepslate_nickel_ore', 'nickel_y', 'overworld')
    ore('thermal:deepslate_ruby_ore', 'ruby_y', 'overworld')
    ore('thermal:deepslate_sapphire_ore', 'sapphire_y', 'overworld')
    ore('thermal:deepslate_silver_ore', 'silver_y', 'overworld')
    ore('thermal:deepslate_apatite_ore', 'apatite_y', 'overworld')
    ore('thermal:deepslate_sulfur_ore', 'sulfur_y', 'overworld')
    ore('thermal:deepslate_tin_ore', 'tin_y', 'overworld')
    ore('kubejs:nether_aluminum_ore', 'aluminum_y', 'the_nether')
    ore('thermal:deepslate_lead_ore', 'lead_y', 'inversiadim')
    ore('kubejs:inversia_uranium_ore', 'uranium_y', 'inversiadim')
    ore('kubejs:end_bismuth_ore', 'bismuth_y', 'the_end')
    ore('ae2:deepslate_quartz_ore', 'quartz_y', 'the_end')
    ore('create:zinc_ore', 'zinc_y', 'overworld')
    ore('create:deepslate_zinc_ore', 'zinc_y', 'overworld')

    ore('minecraft:coal_ore', 'coal_y', 'overworld')
    ore('minecraft:iron_ore', 'iron_y', 'overworld')
    ore('minecraft:lapis_ore', 'lapis_y', 'overworld')
    ore('minecraft:gold_ore', 'gold_y', 'overworld')
    ore('minecraft:diamond_ore', 'diamond_y', 'overworld')
    ore('minecraft:redstone_ore', 'redstone_y', 'overworld')
    ore('minecraft:copper_ore', 'copper_y', 'overworld')
    ore('minecraft:emerald_ore', 'emerald_y', 'overworld')
    ore('minecraft:deepslate_coal_ore', 'coal_y', 'overworld')
    ore('minecraft:deepslate_iron_ore', 'iron_y', 'overworld')
    ore('minecraft:deepslate_lapis_ore', 'lapis_y', 'overworld')
    ore('minecraft:deepslate_gold_ore', 'gold_y', 'overworld')
    ore('minecraft:deepslate_diamond_ore', 'diamond_y', 'overworld')
    ore('minecraft:deepslate_redstone_ore', 'redstone_y', 'overworld')
    ore('minecraft:deepslate_copper_ore', 'copper_y', 'overworld')
    ore('minecraft:deepslate_emerald_ore', 'emerald_y', 'overworld')

    const mixedHerb = ['gg', 'ggg', 'rg', 'bg', 'yg', 'br', 'yr', 'bgg', 'ygg', 'brg', 'yrg'];

    mixedHerb.forEach(color => {
        tooltip.addAdvanced('kubejs:mixed_herb_' + color, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, Text.translate('tooltip.kubejs.shift'));
            } else {
                text.add(1, Text.translate('tooltip.kubejs.shifton'));
                text.add(2, Text.translate('tooltip.kubejs.mixed_herb_' + color));
            }
        })
    })

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
})
