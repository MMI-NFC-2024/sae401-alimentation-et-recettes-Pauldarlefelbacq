/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select3117851554",
    "maxSelect": 1,
    "name": "specialisation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "nutritioniste",
      "diététicien",
      "mental",
      "motivation"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select3117851554",
    "maxSelect": 1,
    "name": "specialisation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "nutritioniste",
      "diététicien",
      "mental"
    ]
  }))

  return app.save(collection)
})
