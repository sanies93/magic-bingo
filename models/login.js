var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Create a new object
var LoginSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    body: String
});
var Reading = mongoose.model('lg', LoginSchema);

// Export the model
module.exports = Reading;