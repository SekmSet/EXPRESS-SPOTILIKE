const express = require('express')
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.listen(port, () => {
    console.log("Server is running on port 💚", port)
    console.log(`➡️ http://localhost:${port}`)
})

app.use('/api/spotify', require('./router/spotify.router'))
app.use('/api/album', require('./router/album.router'))
app.use('/api/artist', require('./router/artist.router'))
app.use('/api/user', require('./router/user.router'))