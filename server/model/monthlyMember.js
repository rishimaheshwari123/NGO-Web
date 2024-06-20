const mongoose = require("mongoose");

const monthlyMemberSchema = new mongoose.Schema({
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
    amount: {
        type: String,
        required: true

    },
    jan: {
        type: String,
        required: true

    },
    feb: {
        type: String,
        required: true

    },
    march: {
        type: String,
        required: true

    },
    april: {
        type: String,
        required: true

    },
    may: {
        type: String,
        required: true

    },
    june: {
        type: String,
        required: true

    },
    july: {
        type: String,
        required: true

    },
    aug: {
        type: String,
        required: true

    },
    sep: {
        type: String,
        required: true

    },
    oct: {
        type: String,
        required: true

    },
    nov: {
        type: String,
        required: true

    },
    dec: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model("MonthlyMember", monthlyMemberSchema);