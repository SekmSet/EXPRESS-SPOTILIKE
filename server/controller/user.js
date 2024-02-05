
// s'inscrire
const {create_user, user_login, user_delete, user_update, get_info} = require("../service/user");
const sign_up = async ({username, password, email}) => {
    return await create_user({username, password, email});
}

const sign_in = async ({username, password}) => {
    return await user_login({username, password});
}

const delete_account = async (id) => {
    return await user_delete(id)
}

const update_account = async ({id, username, password, email}) => {
    return await user_update( {id, username, password, email})
}

const get_user_info = async () => {
    const id = 2;

    return await get_info(id)
}

module.exports = {
    sign_up,
    sign_in,
    delete_account,
    update_account,
    get_user_info
}