const mongoose = require("mongoose");

const gallerysSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Gallerys", gallerysSchema);