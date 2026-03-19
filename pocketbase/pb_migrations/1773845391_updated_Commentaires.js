/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // update collection data
  unmarshal({
    "createRule": "id = @request.auth.id && @collection.Commentaires.user ?= @request.auth.id && @collection.Commentaires.recette ?!= @request.body.recette"
  }, collection)

  return app.save(collection)
})
