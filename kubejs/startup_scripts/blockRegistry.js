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
    event.create('dry_oil_sand', 'falling')
        .material('sand')
        .hardness(0.5)
        .tagBlock('minecraft:mineable/shovel')
        .displayName('Dry Oil Sand');
    //干涸的沥青红沙
    event.create('dry_oil_red_sand', 'falling')
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