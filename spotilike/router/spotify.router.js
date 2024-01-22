const express = require("express");
const router = express.Router()
const {get_token, get_refresh_token} = require("../controller/spotify");

router.get('/token/generate',async (req, res) => {
    const response = await get_token();

    res.json({
        "message": "SPOTIFY API : Token successfully generated 💚",
        "access_token": response.access_token,
        "token_type": response.token_type,
        "expires_in": response.expires_in,
        "status": 200
    })
})


router.get('/token/refresh',async (req, res) => {
    const response = await get_refresh_token();

    res.json({
        "message": "SPOTIFY API : FONCTIONNALITEE A FAIRE ",
        // "message": "SPOTIFY API : Token successfully refreshed 💚",
        "access_token": "",
        "token_type": "",
        "expires_in": "",
        "status": 200
    })
})

module.exports = router