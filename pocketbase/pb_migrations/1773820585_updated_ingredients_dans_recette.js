/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3011283027")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = recette.user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3011283027")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = recette.user.id && @request.body.recette.user.id = @request.auth.id "
  }, collection)

  return app.save(collection)
})
