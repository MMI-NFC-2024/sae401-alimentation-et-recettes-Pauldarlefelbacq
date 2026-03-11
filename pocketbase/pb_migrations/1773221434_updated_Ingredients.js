/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // remove field
  collection.fields.removeById("number3543043597")

  // remove field
  collection.fields.removeById("number266967117")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3543043597",
    "max": null,
    "min": null,
    "name": "poids",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number266967117",
    "max": null,
    "min": null,
    "name": "poids_unitaire",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
