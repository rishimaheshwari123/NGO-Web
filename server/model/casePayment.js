const mongoose = require("mongoose");

const casePaymentSchema = new mongoose.Schema({
    reciptNumber: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    reason: {
        type: String,
    },

})

module.exports = mongoose.model("casePayment", casePaymentSchema);