/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number627390209",
    "max": null,
    "min": null,
    "name": "calories",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number3183054957",
    "max": null,
    "min": null,
    "name": "mat_grasses",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number2443258807",
    "max": null,
    "min": null,
    "name": "proteines",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number2920392100",
    "max": null,
    "min": null,
    "name": "glucides",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1024310764")

  // remove field
  collection.fields.removeById("number627390209")

  // remove field
  collection.fields.removeById("number3183054957")

  // remove field
  collection.fields.removeById("number2443258807")

  // remove field
  collection.fields.removeById("number2920392100")

  return app.save(collection)
})
