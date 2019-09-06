var express = require('express');
var mongoose = require('mongoose');

var PORT = 3000;

// Initialize Express
var app = express();

// Parse request body as JSON and make public a static folder
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
// require('./routes/')(app);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoMagicBingo';
mongoose.connect(MONGODB_URI);

// Start server
app.listen(PORT, function() {
    console.log('App running on port ' + PORT);
});
