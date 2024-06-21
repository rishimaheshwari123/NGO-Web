const mongoose = require("mongoose");

const voleunterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    remark: {
        type: String,

    },

})

module.exports = mongoose.model("Volienter", voleunterSchema);