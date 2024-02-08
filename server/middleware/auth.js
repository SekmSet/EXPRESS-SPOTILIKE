const is_auth  = (req, res, next) => {
    if (req.headers.authorization) {
        next()
    } else {
        res.json({
            "message": "UNAUTHORIZED ACCESS",
            "status": 404
        })
    }
}

module.exports = {
    is_auth
}