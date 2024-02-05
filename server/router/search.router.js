const express = require("express");
const {spot_search} = require("../controller/search");
const router = express.Router()

router.get('',async (req, res) => {
    if (!req.headers.authorization) {
        res.json({
            "message": "UNAUTHORIZED ACCESS",
            "status": 404
        })
    }

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