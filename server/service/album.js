const axios = require('axios');
const {SPOTIFY_URL_ALBUM} = require("./config.url");
const {generate_token} = require("./spotify");

const get_all = async (req, res) => {

}

const get_by_id = async (id) => {
    const token = await generate_token();

    try{
        const response = await axios.get(`${SPOTIFY_URL_ALBUM}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        });
        const {album_type, artists, genres, href, label, name, release_date, total_tracks, type, tracks, copyrights, images} = response.data
        return {
            album_type, artists, genres, href, label, name, release_date, total_tracks, type, tracks, copyrights, images
        };
    } catch (error) {
        console.error('Erreur lors de la récupération des albums', error);
    }
}


const get_tracks_by_album_id = async (id) => {
    const token = await generate_token();

    try{
        const response = await axios.get(`${SPOTIFY_URL_ALBUM}/${id}/tracks`, {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des albums', error);
    }
}

module.exports = {
    get_all,
    get_by_id,
    get_tracks_by_album_id,
}