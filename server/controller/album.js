const {get_all, get_by_id, get_tracks_by_album_id} = require("../service/album");

const get_all_albums = async () => {
    return await get_all();
}

const get_album_by_id = async (id) => {
    return await get_by_id(id);
}

const get_album_tracks = async (id) => {
    return await get_tracks_by_album_id(id);
}

module.exports = {
    get_all_albums,
    get_album_by_id,
    get_album_tracks
}