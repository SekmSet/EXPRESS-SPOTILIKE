const axios = require('axios');
const {SPOTIFY_URL_ARTIST} = require("./config.url");
const {generate_token} = require("./spotify");

const get_all = async (req, res) => {

}

const get_by_id = async (id) => {
    const token = await generate_token();

    try{
        const response = await axios.get(`${SPOTIFY_URL_ARTIST}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des artists', error);
    }
}


const get_album_by_artist_id = async (id) => {
    const token = await generate_token();

    try{
        const response = await axios.get(`${SPOTIFY_URL_ARTIST}/${id}/albums`, {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des albums de l'artiste - ", error);
    }
}

module.exports = {
    get_all,
    get_by_id,
    get_album_by_artist_id,
}