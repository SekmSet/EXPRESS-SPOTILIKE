const {get_all, get_by_id, get_album_by_artist_id} = require("../service/artist");

const get_all_artist = async () => {
    return await get_all();
}

const get_artist_by_id = async (id) => {
    return await get_by_id(id);
}

const get_artist_tracks = async (id) => {
    return await get_album_by_artist_id(id);
}

module.exports = {
    get_all_artist,
    get_artist_by_id,
    get_artist_tracks
}