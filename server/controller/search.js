const {searching} = require("../service/search");
const spot_search = async (querry, type) => {
    return await searching(querry, type)
}

module.exports = {
    spot_search
}