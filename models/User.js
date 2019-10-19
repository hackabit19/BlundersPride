// Imports
const mongoose = require("mongoose");

// Initialise Schema
const Schema = mongoose.Schema;

// Define User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // 4 Types - admin , common, hospital, police
    userType: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },

    bloodGroup: {
        type: String
    },
    emergencyContacts: [
        {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    ]
});

module.exports = User = mongoose.model("users", UserSchema);
