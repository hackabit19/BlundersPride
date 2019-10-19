const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MissingPersonSchema = new Schema({
    imageName: {
        type: String,
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});
