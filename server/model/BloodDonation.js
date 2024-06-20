const mongoose = require("mongoose");

const bloodDonationSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    fatherName: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    vanue: {
        type: String,
        required: true
    },


})

module.exports = mongoose.model("BloodDonation", bloodDonationSchema);