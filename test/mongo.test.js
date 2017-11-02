const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
let url = 'mongodb://localhost:27017/coolsite';

// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

