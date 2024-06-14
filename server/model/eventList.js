const mongoose = require("mongoose");

const eventListSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },

    date: {
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
        required: true
    },

})

module.exports = mongoose.model("EventList", eventListSchema);