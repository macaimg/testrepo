const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('connected to DB ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database Error ' + err);
});

const app = express();

const users = require('./routes/users');


const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+ port);
})