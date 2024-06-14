const bloodDonationModel = require("../model/BloodDonation")
const ExcelJS = require('exceljs');

const createBloodDonationCtrl = async (req, res) => {
    try {
        const { name, fatherName, bloodgroup, phone, age, address, dateOfVanue } =
            req.body;

        if (
            !name ||
            !fatherName ||
            !bloodgroup ||
            !phone ||
            !age ||
            !address ||
            !dateOfVanue
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }

        const blood = await bloodDonationModel.create({ name, fatherName, bloodgroup, phone, age, address, dateOfVanue })

        return res.status(201).json({
            success: true,
            message: "Blood Donation created successfully!",
            blood,
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating  donation blood api",
        });
    }
};



const getBloodDonationCtrl = async (req, res) => {
    try {
        const bloods = await bloodDonationModel.find({})
        return res.status(200).json({
            totalBloodDonated: bloods.length,
            success: true,
            bloods,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all doneted bload api",
        });
    }
}


const deleteBloodDonetedCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await bloodDonationModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Doneted blood deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting doneted blood api",
        });
    }
}



const exportToExcel = async (req, res) => {
    try {
        const bloods = await bloodDonationModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Bloods');

        worksheet.columns = [
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Father Name', key: 'fatherName', width: 20 },
            { header: 'Blood Group', key: 'bloodgroup', width: 15 },
            { header: 'Phone', key: 'phone', width: 20 },
            { header: 'Age', key: 'age', width: 10 },
            { header: 'Address', key: 'address', width: 25 },
            { header: 'Date of Vanue', key: 'dateOfVanue', width: 25 },

        ];

        bloods.forEach(blood => {
            worksheet.addRow({
                name: blood.name,
                fatherName: blood.fatherName,
                bloodgroup: blood.bloodgroup,
                phone: blood.phone,
                age: blood.age,
                address: blood.address,
                dateOfVanue: blood.dateOfVanue,

            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="bloodDonation.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error('Error in downloading doneted blood excel:', error);
        res.status(500).send('Error in downloading doneted blood excel');
    }
};
module.exports = { createBloodDonationCtrl, getBloodDonationCtrl, deleteBloodDonetedCtrl, exportToExcel };
