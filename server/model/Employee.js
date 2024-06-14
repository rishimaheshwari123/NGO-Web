const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },

    phone1: {
        type: String,
        required: true
    },
    phone2: {
        type: String,
    },
    blood: {
        type: String,
    },
    sex: {
        type: String,
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    joinDate: {
        type: String,
        required: true
    },
    monthDateAndAmount: {
        type: String,
        required: true
    },
    sevaAshram: {
        type: String,
        required: true
    },
    help: {
        type: String,
        required: true
    },
    active: {
        type: String,
        required: true
    },
    refrenceName: {
        type: String,
    },
    refrencePhone: {
        type: String,
    },
    work: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Employee", employeeSchema);

