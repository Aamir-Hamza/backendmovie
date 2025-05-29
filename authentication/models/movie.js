const { default: mongoose } = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },

    genre: { type: String,  required: true, lowercase: true },

    rating: { type: String, required: true },

    releaseYear: {
        type: Number,
        required: true,

    },
    language: { type: String },

    duration: {
        type: String
    },

    director: {
        type: String
    }
});

module.exports = mongoose.model("moviess", movieSchema);