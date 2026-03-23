/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && @request.body.user.id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && @request.body.user.id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && @request.body.user = @request.auth.id",
    "updateRule": null
  }, collection)

  return app.save(collection)
})
