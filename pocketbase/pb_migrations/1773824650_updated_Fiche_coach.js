/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_867445584")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2660456165",
    "hidden": false,
    "id": "relation3653157060",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "commentaires",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_867445584")

  // remove field
  collection.fields.removeById("relation3653157060")

  return app.save(collection)
})
