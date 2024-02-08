const {get_token} = require("./spotify");
const axios = require("axios");
const {SPOTIFY_URL_GENRE} = require("./config.url");

const get_genre = async () => {
  try {
    const token = get_token();

    if (token == null) {
      return {
        message: "Spotify token is null 💔",
        success: false
      }
    }

    const response = await axios.get(`${SPOTIFY_URL_GENRE}`, {
      headers: {
        'Authorization': token
      }
    });

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des genre', error);
  }
}

module.exports = {
  get_genre
};
