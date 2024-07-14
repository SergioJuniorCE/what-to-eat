/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mu7ef71jj5fjlj4",
    "created": "2024-07-06 23:56:47.629Z",
    "updated": "2024-07-06 23:56:47.629Z",
    "name": "recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eukm2zda",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bpjeolqu",
        "name": "rating",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mu7ef71jj5fjlj4");

  return dao.deleteCollection(collection);
})
