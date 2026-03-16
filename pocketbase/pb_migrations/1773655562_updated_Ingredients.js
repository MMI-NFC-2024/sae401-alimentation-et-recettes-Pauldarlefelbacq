/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "légume",
      "fruit",
      "féculent",
      "sucré",
      "viande",
      "laitage"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "légume",
      "fruit",
      "féculent",
      "sucré",
      "viande"
    ]
  }))

  return app.save(collection)
})
