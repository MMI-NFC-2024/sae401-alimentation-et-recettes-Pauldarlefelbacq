/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2660456165")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_1ufLyIapyJ` ON `Commentaires_coach` (\n  `user`,\n  `coach`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2660456165")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_1ufLyIapyJ` ON `Commentaires_coach` (\n  `user`,\n  `coach`\n)"
    ]
  }, collection)

  return app.save(collection)
})
