const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },

    reason: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },
    refrence: {
        type: String,
    },
    name: {
        type: String,
    },
    payment: {
        type: String,
    },
    other: {
        type: String,
    },

})

module.exports = mongoose.model("Expense", expenseSchema);