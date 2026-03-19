/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2660456165")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.user = @request.auth.id",
    "indexes": [
      "CREATE INDEX `idx_dfxjxJev4B` ON `Commentaires_coach` (\n  `user`,\n  `coach`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2660456165")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id && @request.auth.id !~ user.id",
    "indexes": []
  }, collection)

  return app.save(collection)
})
