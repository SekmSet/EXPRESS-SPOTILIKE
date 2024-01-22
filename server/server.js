const express = require('express')
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on port 💚", port)
    console.log(`➡️ http://localhost:${port}`)
})

app.use('/api/spotify', require('./router/spotify.router'))

