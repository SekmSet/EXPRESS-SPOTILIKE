const express = require('express')
const dotenv = require('dotenv').config()
const { db } = require('./database');
const cors = require('cors');

const app = express();
app.use(cors());
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
app.use('/api/search', require('./router/search.router'))
app.use('/api/genre', require('./router/genre.router'))