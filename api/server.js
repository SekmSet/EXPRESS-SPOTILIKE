const express = require('express')
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000
console.log(port)

app.listen(port, () => {
    console.log("Server is running on port 💚", port)
    console.log(`➡️ http://localhost:${port}`)
})
