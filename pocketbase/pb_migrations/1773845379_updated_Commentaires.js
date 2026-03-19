/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_u3aFoZjzqd` ON `Commentaires` (\n  `user`,\n  `recette`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
