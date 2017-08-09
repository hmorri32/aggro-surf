const express       = require("express");
const router        = express.Router();
const environment   = process.env.NODE_ENV || "development";
const configuration = require("../knexfile.js")[environment];
const database      = require("knex")(configuration);
const path          = require("path");

// router.get('/', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/build'));
// });

router.get('/api/v1/forecast', (request,response) => {
  response.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }])
})

router.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

module.exports = router;
