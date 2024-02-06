const {get_token} = require("./spotify");
const axios = require("axios");
const {SPOTIFY_URL_SEARCH} = require("./config.url");

const searching = async (querry, type) => {
    try {
        const token = get_token();

        querry = querry.replaceAll('=', ':');
        let encoded = encodeURI(`${querry}&type=${type}`);
        encoded = encoded.replaceAll(',', '%2C');

        const response = await axios.get(`${SPOTIFY_URL_SEARCH}${encoded}`, {
            headers: {
                'Authorization': token
            }
        });

        return response.data;
    } catch (error) {
        return {
            message: "Erreur pendant la recherche",
            error,
            success: false
        }
    }
}

module.exports = {
    searching
}