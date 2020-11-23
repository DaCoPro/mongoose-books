const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ({
    title: {
        type: String,
    },
    year: {
        type: Number,
    },
    month: {
        type: Number,
    },
    genre: {
        type: String,
    },
    format: {
        type: String,
    },
    author: {
        type: String,
    },
    rating: {
        type: Number,
    }
});

module.exports = mongoose.model('Book', bookSchema);