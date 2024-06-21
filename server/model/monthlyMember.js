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

    },
    feb: {
        type: String,

    },
    march: {
        type: String,

    },
    april: {
        type: String,

    },
    may: {
        type: String,

    },
    june: {
        type: String,

    },
    july: {
        type: String,

    },
    aug: {
        type: String,

    },
    sep: {
        type: String,

    },
    oct: {
        type: String,

    },
    nov: {
        type: String,

    },
    dec: {
        type: String,

    },

})

module.exports = mongoose.model("MonthlyMember", monthlyMemberSchema);