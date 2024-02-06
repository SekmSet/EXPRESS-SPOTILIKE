const axios = require('axios');
const qs = require('qs');
const {SPOTIFY_URL} = require("./config.url");

let TOKEN = ""

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
        set_token(response.data)
        return response.data;
    } catch (error) {
        return {
            message: "Erreur lors de la récupération du token Spotify",
            error,
            success: false
        }
    }
}

const refresh_token = async () => {
    console.log("TO DO REFRESH TOKEN")
}

const set_token = (token) => {
    TOKEN = `${token.token_type} ${token.access_token}`;
}

const get_token = () => {
    return TOKEN;
}

module.exports = {
    generate_token,
    refresh_token,
    set_token,
    get_token
}