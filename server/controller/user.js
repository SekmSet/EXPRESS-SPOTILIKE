
// s'inscrire
const {create_user, user_login} = require("../service/user");
const sign_up = async ({username, password, email}) => {
    return await create_user({username, password, email});
}

const sign_in = async ({username, password}) => {
    return await user_login({username, password});
}

const delete_account = async (id) => {
    // return await get_album_by_artist_id(id);
}

module.exports = {
    sign_up,
    sign_in,
    delete_account
}