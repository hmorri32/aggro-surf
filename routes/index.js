const express       = require("express");
const router        = express.Router();
const environment   = process.env.NODE_ENV || "development";
const configuration = require("../knexfile.js")[environment];
const database      = require("knex")(configuration);
const path          = require("path");

// router.get('/', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/build'));
// });

router.get()

router.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = router;
