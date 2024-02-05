const axios = require('axios');
const {SPOTIFY_URL_TRACK} = require("./config.url");
const {generate_token} = require("./spotify");

const get_by_id = async (id) => {
    const token = await generate_token();

    try {
        const response = await axios.get(`${SPOTIFY_URL_TRACK}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des artists', error);
    }
}



module.exports = {
    get_by_id,
}