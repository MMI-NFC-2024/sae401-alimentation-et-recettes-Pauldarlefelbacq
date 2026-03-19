/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id && @request.auth.id ~ user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id && @request.auth.id ?!~ user.id"
  }, collection)

  return app.save(collection)
})
