/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu7ef71jj5fjlj4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjhnlhdh",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mu7ef71jj5fjlj4")

  // remove
  collection.schema.removeField("vjhnlhdh")

  return dao.saveCollection(collection)
})
