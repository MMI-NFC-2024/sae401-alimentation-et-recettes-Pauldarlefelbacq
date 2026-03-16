/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // remove field
  collection.fields.removeById("relation32845933")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2620628538",
    "hidden": false,
    "id": "relation32845933",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "valeur_nut",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
