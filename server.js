// Kyle Karaoke Song Book Angular App Node Server.

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./API/config/database');
const app = express();

// port Variables
const PORT = process.env.PORT || 8080;

// API Routes
const partyRoute = require('./API/routes/party');
const songRoute = require('./API/routes/song');
const userRoute = require('./API/routes/user');
// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err){
        console.log('DataBase Connection Error :', err);
    } else {
        console.log('Successfully Connected to Database');
    }
});
// Middleware 
app.use(cors({origin: 'http://localhost:4200'}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
// Router routes
app.use('/api/party', partyRoute);
app.use('/api/song', songRoute);
app.use('/api/user', userRoute);
// Main routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// start server
app.listen(PORT, () => {
    console.log('Server Running .... on port :'+PORT);
});