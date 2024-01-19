onEvent('item.tooltip', tooltip => {
    tooltip.addAdvanced('kubejs:nether_aluminum_ore', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.aluminum_y'));
        text.add(2, Text.translate('tooltip.kubejs.the_nether'));
    });
    tooltip.addAdvanced('thermal:deepslate_lead_ore', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.lead_y'));
        text.add(2, Text.translate('tooltip.kubejs.inversiadim'));
    });
    tooltip.addAdvanced('kubejs:inversia_uranium_ore', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.uranium_y'));
        text.add(2, Text.translate('tooltip.kubejs.inversiadim'));
    });
    tooltip.addAdvanced('kubejs:end_bismuth_ore', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.bismuth_y'));
        text.add(2, Text.translate('tooltip.kubejs.the_end'));
    });
    tooltip.addAdvanced('ae2:deepslate_quartz_ore', (item, advanced, text) => {
        text.add(1, Text.translate('tooltip.kubejs.quartz_y'));
        text.add(2, Text.translate('tooltip.kubejs.the_end'));
    });

    // ore('minecraft:coal_ore', 'tooltip.kubejs.coal_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:iron_ore', 'tooltip.kubejs.iron_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:lapis_ore', 'tooltip.kubejs.lapis_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:gold_ore', 'tooltip.kubejs.gold_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:diamond_ore', 'tooltip.kubejs.diamond_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:redstone_ore', 'tooltip.kubejs.redstone_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:copper_ore', 'tooltip.kubejs.copper_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:emerald_ore', 'tooltip.kubejs.emerald_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_coal_ore', 'tooltip.kubejs.coal_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_iron_ore', 'tooltip.kubejs.iron_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_lapis_ore', 'tooltip.kubejs.lapis_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_gold_ore', 'tooltip.kubejs.gold_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_diamond_ore', 'tooltip.kubejs.diamond_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_redstone_ore', 'tooltip.kubejs.redstone_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_copper_ore', 'tooltip.kubejs.copper_y', 'tooltip.kubejs.overworld')
    // ore('minecraft:deepslate_emerald_ore', 'tooltip.kubejs.emerald_y', 'tooltip.kubejs.overworld')

    // ore('thermal:cinnabar_ore', 'tooltip.kubejs.cinnabar_y', 'tooltip.kubejs.overworld')
    // ore('thermal:niter_ore', 'tooltip.kubejs.niter_y', 'tooltip.kubejs.overworld')
    // ore('thermal:nickel_ore', 'tooltip.kubejs.nickel_y', 'tooltip.kubejs.overworld')
    // ore('thermal:ruby_ore', 'tooltip.kubejs.ruby_y', 'tooltip.kubejs.overworld')
    // ore('thermal:sapphire_ore', 'tooltip.kubejs.sapphire_y', 'tooltip.kubejs.overworld')
    // ore('thermal:silver_ore', 'tooltip.kubejs.silver_y', 'tooltip.kubejs.overworld')
    // ore('thermal:apatite_ore', 'tooltip.kubejs.apatite_y', 'tooltip.kubejs.overworld')
    // ore('thermal:sulfur_ore', 'tooltip.kubejs.sulfur_y', 'tooltip.kubejs.overworld')
    // ore('thermal:tin_ore', 'tooltip.kubejs.tin_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_cinnabar_ore', 'tooltip.kubejs.cinnabar_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_niter_ore', 'tooltip.kubejs.niter_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_nickel_ore', 'tooltip.kubejs.nickel_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_ruby_ore', 'tooltip.kubejs.ruby_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_sapphire_ore', 'tooltip.kubejs.sapphire_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_silver_ore', 'tooltip.kubejs.silver_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_apatite_ore', 'tooltip.kubejs.apatite_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_sulfur_ore', 'tooltip.kubejs.sulfur_y', 'tooltip.kubejs.overworld')
    // ore('thermal:deepslate_tin_ore', 'tooltip.kubejs.tin_y', 'tooltip.kubejs.overworld')
    // ore('create:zinc_ore', 'tooltip.kubejs.zinc_y', 'tooltip.kubejs.overworld')
    // ore('create:deepslate_zinc_ore', 'tooltip.kubejs.zinc_y', 'tooltip.kubejs.overworld')



    // tooltip.addAdvanced('kubejs:mixed_herb_gg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_gg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_ggg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_ggg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_rg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_rg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_bg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_bg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_yg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_yg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_br', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_br'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_yr', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_yr'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_bgg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_bgg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_ygg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_ygg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_brg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_brg'));
    //     }
    // })
    // tooltip.addAdvanced('kubejs:mixed_herb_yrg', (item, advanced, text) => {
    //     if (!tooltip.shift) {
    //         text.add(1, Text.translate('tooltip.kubejs.shift'));
    //     } else {
    //         text.add(1, Text.translate('tooltip.kubejs.shifton'));
    //         text.add(2, Text.translate('tooltip.kubejs.mixed_herb_yrg'));
    //     }
    // })

    //NBT工具
    // tooltip.addAdvanced(Ingredient.all, (item, advanced, text) => {
    //     if (tooltip.ctrl && item.nbt) {
    //         text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
    //     }
    // })



    //光环物品描述
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
                text.add(8, Text.translate('tooltip.kubejs.mari2'));
                text.add(9, Text.of(' '));
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
                text.add(9, Text.translate('tooltip.kubejs.purana3'));
                text.add(10, Text.of(' '));
            }
        }
    })
})
