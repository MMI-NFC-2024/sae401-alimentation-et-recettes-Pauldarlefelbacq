/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2660456165")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.user = @request.auth.id && @request.auth.coach != true && @request.auth.id !~ @collection.Commentaires_coach.user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2660456165")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.user = @request.auth.id && @request.auth.coach != true"
  }, collection)

  return app.save(collection)
})
