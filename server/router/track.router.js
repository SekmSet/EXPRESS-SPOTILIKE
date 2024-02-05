const express = require("express");
const {get_track_by_id} = require("../controller/track");
const router = express.Router()


router.get('/:id',async (req, res) => {
    if (!req.headers.authorization) {
        res.json({
            "message": "UNAUTHORIZED ACCESS",
            "status": 404
        })
    }

    const id = req.params.id
    const response = await get_track_by_id(id);

    res.json({
        "message": "Success getting TRACKS with ID 💚",
        "result": response,
        "status": 200
    })
})

module.exports = router