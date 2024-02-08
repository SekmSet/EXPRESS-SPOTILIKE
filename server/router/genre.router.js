const express = require("express");
const {get_all_genre} = require("../controller/genre");
const {is_auth} = require("../middleware/auth");
const router = express.Router();

router.get("", is_auth, async (req, res) => {
  const response = await get_all_genre();

  res.json({
    "message": "Success getting genre 💚",
    "result": response,
    "status": 200
  })

});

module.exports = router;
