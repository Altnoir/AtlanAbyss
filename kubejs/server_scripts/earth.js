onEvent('recipes', event => {
    let remove = (name) => {
        event.remove({ id: name })
    }
    remove('beyond_earth:steel_ingot_from_nugget')
    remove('beyond_earth:steel_ingot')
    remove('beyond_earth:steel_nugget_from_ingot')
    remove('beyond_earth:steel_block')
    remove('beyond_earth:steel_ingot_blasting')
    remove('beyond_earth:iron_plate')
    remove('beyond_earth:iron_stick')
})