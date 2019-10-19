const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MissingPersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imageName: {
        type: String,
        required: true
    },
    imageData: {
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
    details: {
        type: String,
        required: true
    },
    found: {
        type: Boolean,
        default: false
    }
});

module.exports = MissingPerson = mongoose.model(
    "missingPersons",
    MissingPersonSchema
);
