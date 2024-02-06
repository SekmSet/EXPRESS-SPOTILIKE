const express = require("express");
const {get_artist_by_id, get_artist_tracks} = require("../controller/artist");
const router = express.Router()

router.get('/:id',async (req, res) => {
    if (!req.headers.authorization) {
        res.json({
            "message": "UNAUTHORIZED ACCESS",
            "status": 404
        })
    }

    const id = req.params.id
    const response = await get_artist_by_id(id);

    res.json({
        "message": "Success getting ARTIST with ID 💚",
        "result": response,
        "status": 200
    })
})

router.get('/:id/albums',async (req, res) => {
    if (!req.headers.authorization) {
        res.json({
            "message": "UNAUTHORIZED ACCESS",
            "status": 404
        })
    }

    const id = req.params.id
    const response = await get_artist_tracks(id);

    res.json({
        "message": "Success getting albums of an ARTIST 💚",
        "result": response,
        "status": 200
    })
})

module.exports = router