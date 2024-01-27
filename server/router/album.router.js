const express = require("express");
const router = express.Router()
const {get_all_albums, get_album_by_id, get_album_tracks} = require("../controller/album");

router.get('',async (req, res) => {
    // const response = await get_all_albums();

    res.json({
        "message": "ALL ALBUM : 💚",
        "status": 200
    })
})


router.get('/:id',async (req, res) => {
    const id = req.params.id
    const response = await get_album_by_id(id);
    console.log(response)

    res.json({
        "message": "Success getting ALBUM with ID 💚",
        "result": response,
        "status": 200
    })
})

router.get('/:id/tracks',async (req, res) => {
    const id = req.params.id
    const response = await get_album_tracks(id);
    res.json({
        "message": "Success getting tracks of an ALBUM 💚",
        "result": response,
        "status": 200
    })
})

module.exports = router