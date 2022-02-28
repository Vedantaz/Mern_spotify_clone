
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello  world from the server!');
})

app.listen(5000, () => {
    console.log(`Server running at port : 5000`);
})



// require('dotenv').config();
// const mongoose = require('mongoose');
// const connectToMongo = require('./db');
// connectToMongo();
// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening the port ${port}`));
