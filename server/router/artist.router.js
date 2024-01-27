const express = require("express");
const {get_artist_by_id, get_artist_tracks} = require("../controller/artist");
const router = express.Router()

router.get('',async (req, res) => {
    // const response = await get_all_albums();

    res.json({
        "message": "ALL ALBUM : 💚",
        "status": 200
    })
})


router.get('/:id',async (req, res) => {
    const id = req.params.id
    const response = await get_artist_by_id(id);

    res.json({
        "message": "Success getting ARTIST with ID 💚",
        "result": response,
        "status": 200
    })
})

router.get('/:id/tracks',async (req, res) => {
    const id = req.params.id
    const response = await get_artist_tracks(id);

    res.json({
        "message": "Success getting albums of an ARTIST 💚",
        "result": response,
        "status": 200
    })
})

module.exports = router