/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3011283027")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select493142296",
    "maxSelect": 1,
    "name": "unite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "g",
      "c. à soupe",
      "ml",
      "c. à café"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3011283027")

  // remove field
  collection.fields.removeById("select493142296")

  return app.save(collection)
})
