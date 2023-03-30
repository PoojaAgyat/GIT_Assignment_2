const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pasward: {
        type: String,
        required: true,
    },
});

module.exports = new mongoose.model("user", postSchema);