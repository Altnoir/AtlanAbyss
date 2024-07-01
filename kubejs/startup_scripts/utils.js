const { $RecipeSchema } = require("packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema")

StartupEvents.recipeSchemaRegistry(e => {
    const { components } = e;

    e.register('createaddition:charging',
        new $RecipeSchema(
            components.get('outputItem')().key('result'),
            components.get('inputItem')().key('input'),
            components.get('intNumber')().key('energy'),
            components.get('intNumber')().key('maxChargeRate'),
        )
    )
})
