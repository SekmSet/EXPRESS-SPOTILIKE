const {get_by_id} = require("../service/track");

const get_track_by_id = async (id) => {
    return await get_by_id(id);
}

module.exports = {
    get_track_by_id
}