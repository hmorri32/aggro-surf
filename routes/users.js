var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json([
    {
      id: 1,
      username: "coolguy"
    },
    {
      id: 2,
      username: "whatever"
    }
  ]);
});

module.exports = router;
