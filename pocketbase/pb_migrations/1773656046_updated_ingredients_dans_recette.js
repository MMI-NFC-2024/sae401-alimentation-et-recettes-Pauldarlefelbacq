/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3011283027")

  // remove field
  collection.fields.removeById("relation1806661744")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3011283027")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1383128419",
    "hidden": false,
    "id": "relation1806661744",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "ingredient",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
