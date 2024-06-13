const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Event", eventsSchema);