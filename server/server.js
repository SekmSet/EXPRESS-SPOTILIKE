const express = require('express')
const dotenv = require('dotenv').config()
const { db } = require('./database');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on port 💚", port)
    console.log(`➡️ http://localhost:${port}`)
})

app.use('/api/spotify', require('./router/spotify.router'))
app.use('/api/albums', require('./router/album.router'))
app.use('/api/artist', require('./router/artist.router'))
app.use('/api/user', require('./router/user.router'))
app.use('/api/search', require('./router/search.router'))
app.use('/api/genre', require('./router/genre.router'))
app.use('/api/track', require('./router/track.router'))