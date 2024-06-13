const employeeModel = require("../model/Employee")

const createEmployee = async (req, res) => {
    try {
        const { name, phone, role } = req.body;

        // validation 
        if (!name || !phone || !role) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        const employee = await employeeModel.create({ name, phone, role })

        return res.status(201).json({
            success: true,
            message: "Employee created successfully!",
            employee
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in creating Employee api"
        })
    }
}


const getEmployee = async (req, res) => {
    try {


        const employees = await employeeModel.find({})

        return res.status(200).json({
            totalEmployee: employees.length,
            success: true,
            employees,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all Employee api"
        })
    }
}


const deleteEmployee = async (req, res) => {
    try {

        const { id } = req.params;

        await employeeModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Employee deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting  Employee api"
        })
    }
}


module.exports = { createEmployee, getEmployee, deleteEmployee }