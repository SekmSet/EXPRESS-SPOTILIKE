const {generate_token, refresh_token} = require("../service/spotify");

const get_token = async () => {
    return await generate_token();
}

const get_refresh_token = async () => {
    return await refresh_token();
}

module.exports = {
    get_token,
    get_refresh_token
}