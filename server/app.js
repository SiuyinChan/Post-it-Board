const mongoose = require('mongoose');

const bodyParser = require('body-parser')

const express = require('express');

const cors = require('cors')

const app = express();

const noteRoutes = require('./routes/note');

require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.wo1riqs.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/notes', noteRoutes);

module.exports = app;
