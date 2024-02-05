const {generate_token} = require("./spotify");
const axios = require("axios");
const {SPOTIFY_URL_SEARCH} = require("./config.url");
const searching = async (querry, type) => {
    try {
        const token = await generate_token();

        let end_url = `${querry}&${type}`
        end_url = end_url.replaceAll(' ', '+');
        end_url = end_url.replaceAll(',', '%2C');

        const response = await axios.get(`${SPOTIFY_URL_SEARCH}${end_url}`, {
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
    searching
}