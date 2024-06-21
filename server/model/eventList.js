const mongoose = require("mongoose");

const eventListSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bhojan: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    other: {
        type: String,
    },

})

module.exports = mongoose.model("EventList", eventListSchema);