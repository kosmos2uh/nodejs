const mongoose = require('mongoose');
const config = require('../config');

// using promises
mongoose.Promise = global.Promise;

mongoose.connect(
  config.db.uri, config.db.options)
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('connection succesful');
    // require('../middleware/authorization').init();
    })
  .catch((err) => {
    /** handle initial connection error */
    console.error(err);
    process.exit(1);
    });

module.exports = mongoose;
