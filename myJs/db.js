var databaseURI = "localhost:27017/test";
var collections = ["cars"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;