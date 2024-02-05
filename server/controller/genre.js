const {get_genre} = require("../service/genre");
const get_all_genre = async () => {
    return await get_genre()
}

module.exports = {
    get_all_genre
}