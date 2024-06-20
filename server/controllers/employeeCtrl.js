const employeeModel = require("../model/Employee");
const ExcelJS = require('exceljs');

const createEmployee = async (req, res) => {
    try {
        const {
            name,
            fatherName,
            phone1,
            phone2,
            blood,
            sex,
            dob,
            address,
            joinDate,
            month,
            amount,
            sevaAshram,
            help,
            active,
            refrenceName,
            refrencePhone,
            work,
        } = req.body;

        // validation
        if (
            !name ||
            !fatherName ||
            !phone1 ||
            !sex ||
            !dob ||
            !address ||
            !joinDate ||
            !sevaAshram ||
            !help ||
            !active ||
            !work

        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }

        const employee = await employeeModel.create({
            name,
            fatherName,
            phone1,
            phone2,
            blood,
            sex,
            dob,
            address,
            joinDate,
            month,
            amount,
            sevaAshram,
            help,
            active,
            refrenceName,
            refrencePhone,
            work
        });


        return res.status(201).json({
            success: true,
            message: "Member created successfully!",
            employee,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in creating member api",
        });
    }
};

const getEmployee = async (req, res) => {
    try {
        const employees = await employeeModel.find({});
        // console.log(employees)
        return res.status(200).json({
            totalEmployee: employees.length,
            success: true,
            employees,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all member api",
        });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        await employeeModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Member deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in member  Employee api",
        });
    }
};






const exportToExcel = async (req, res) => {
    try {
        const employees = await employeeModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Employees');

        worksheet.columns = [
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Father Name', key: 'fatherName', width: 20 },
            { header: 'Phone 1', key: 'phone1', width: 15 },
            { header: 'Phone 2', key: 'phone2', width: 15 }, // optional
            { header: 'Blood Group', key: 'blood', width: 20 }, // optional
            { header: 'Sex', key: 'sex', width: 10 },
            { header: 'Date of Birth', key: 'dob', width: 15 },
            { header: 'Address', key: 'address', width: 25 },
            { header: 'Join Date', key: 'joinDate', width: 15 },
            { header: 'Month Date', key: 'month', width: 30 },
            { header: 'Amount', key: 'amount', width: 20 },
            { header: 'Seva Ashram', key: 'sevaAshram', width: 20 },
            { header: 'Help', key: 'help', width: 15 },
            { header: 'Active', key: 'active', width: 10 },
            { header: 'Reference Name', key: 'refrenceName', width: 20 }, // optional
            { header: 'Reference Phone', key: 'refrencePhone', width: 15 }, // optional
            { header: 'Work', key: 'work', width: 20 }
        ];

        employees.forEach(employee => {
            worksheet.addRow({
                name: employee.name,
                fatherName: employee.fatherName,
                phone1: employee.phone1,
                phone2: employee.phone2 || '', // optional
                blood: employee.blood || '', // optional
                sex: employee.sex,
                dob: employee.dob,
                address: employee.address,
                joinDate: employee.joinDate,
                month: JSON.stringify(employee.month), // Assuming this is an object that needs to be stringified
                amount: JSON.stringify(employee.amount), // Assuming this is an object that needs to be stringified
                sevaAshram: employee.sevaAshram,
                help: employee.help,
                active: employee.active,
                refrenceName: employee.refrenceName || '', // optional
                refrencePhone: employee.refrencePhone || '', // optional
                work: employee.work
            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="employees.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error('Error downloading members excel:', error);
        res.status(500).send('Error downloading members excel');
    }
};





module.exports = { createEmployee, getEmployee, deleteEmployee, exportToExcel };
