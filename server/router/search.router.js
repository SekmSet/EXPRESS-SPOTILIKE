const express = require("express");
const {spot_search} = require("../controller/search");
const {is_auth} = require("../middleware/auth");
const router = express.Router()

router.get('', is_auth, async (req, res) => {
    const querry = req.query.q;
    const type = req.query.type;

    const response = await spot_search(querry, type);

    res.json({
        "message": "",
        "result": response,
        "status": 200
    })
})


module.exports = router