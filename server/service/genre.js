const {generate_token} = require("./spotify");
const axios = require("axios");
const {SPOTIFY_URL_GENRE} = require("./config.url");
const get_genre = async () => {
  const token = await generate_token();

  try{
    const response = await axios.get(`${SPOTIFY_URL_GENRE}`, {
      headers: {
        'Authorization': `Bearer ${token.access_token}`
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
