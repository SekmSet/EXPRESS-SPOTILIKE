const express = require("express");
const {get_track_by_id} = require("../controller/track");
const {is_auth} = require("../middleware/auth");
const router = express.Router()


router.get('/:id', is_auth, async (req, res) => {
    const id = req.params.id
    const response = await get_track_by_id(id);

    res.json({
        "message": "Success getting TRACKS with ID 💚",
        "result": response,
        "status": 200
    })
})

module.exports = router