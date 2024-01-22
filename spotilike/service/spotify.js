const axios = require('axios');
const qs = require('qs');
const {SPOTIFY_URL} = require("./config.url");

const generate_token = async () => {
    const url = SPOTIFY_URL;
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_SECRET_KEY;

    const headers = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: client_id,
            password: client_secret,
        },
    };

    const data = {
        grant_type: 'client_credentials',
    };

    try {
        const response = await axios.post(url, qs.stringify(data), headers);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du token Spotify:', error);
        return null;
    }
}

const refresh_token = async () => {
    console.log("TO DO REFRESH TOKEN")
}

module.exports = {
    generate_token,
    refresh_token
}