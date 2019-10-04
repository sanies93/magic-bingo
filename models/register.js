
const {isEmail } = require('validator');

var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Create a new object
var RegisterSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        validate: [isEmail, 'Invalid Email']
    }, 
    password: {
        type: String,
        required: true
    },
    reading: {
        type: Schema.Types.ObjectId,
        ref: 'Reading'
    }
});

// Create model from the schema using mongoose's model method
var Register = mongoose.model('Register', RegisterSchema);

// Export the model
module.exports = Register;
