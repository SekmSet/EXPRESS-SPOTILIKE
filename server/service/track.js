const axios = require('axios');
const {SPOTIFY_URL_TRACK} = require("./config.url");
const {get_token} = require("./spotify");

const get_by_id = async (id) => {
    try {
        const token = get_token();

        if (token == null) {
            return {
                message: "Spotify token is null 💔",
                success: false
            }
        }

        const response = await axios.get(`${SPOTIFY_URL_TRACK}/${id}`, {
            headers: {
                'Authorization': token
            }
        });

        return response.data;
    } catch (error) {
        return {
            message: "Erreur lors de la récupération des tracks",
            error,
            success: false
        }
    }
}

module.exports = {
    get_by_id,
}