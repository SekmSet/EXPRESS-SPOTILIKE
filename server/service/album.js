const axios = require('axios');
const {SPOTIFY_URL_ALBUM} = require("./config.url");
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

        const response = await axios.get(`${SPOTIFY_URL_ALBUM}/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        const {album_type, artists, genres, href, label, name, release_date, total_tracks, type, tracks, copyrights, images} = response.data
        return response.data;
    } catch (error) {
        return {
            message: "Erreur lors de la récupération des information de l'album",
            error,
            success: false
        }
    }
}

const get_tracks_by_album_id = async (id) => {
    try {
        const token = get_token();

        if (token == null) {
            return {
                message: "Spotify token is null 💔",
                success: false
            }
        }

        const response = await axios.get(`${SPOTIFY_URL_ALBUM}/${id}/tracks`, {
            headers: {
                'Authorization': token
            }
        });

        return response.data;
    } catch (error) {
        return {
            message: "Erreur lors de la récupération des tracks de l'album",
            error,
            success: false
        }
    }
}

module.exports = {
    get_by_id,
    get_tracks_by_album_id,
}