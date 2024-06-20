const mongoose = require("mongoose");

const cultureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }


})

module.exports = mongoose.model("Cluture", cultureSchema);