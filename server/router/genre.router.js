const express = require("express");
const {get_all_genre} = require("../controller/genre");
const router = express.Router();


router.get("", async (req, res) => {
  if (!req.headers.authorization) {
    res.json({
      "message": "UNAUTHORIZED ACCESS",
      "status": 404
    })
  }

  const response = await get_all_genre();

  res.json({
    "message": "Success getting genre 💚",
    "result": response,
    "status": 200
  })

});

module.exports = router;
