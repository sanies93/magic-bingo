var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new object 
var ReadingSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    body: String
});
// Create model from the schema using mongoose's model method
var Reading = mongoose.model('Reading', ReadingSchema);

// Export the model
module.exports = Reading;

