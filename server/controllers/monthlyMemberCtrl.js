const monthlyMemberModel = require("../model/monthlyMember");
const ExcelJS = require("exceljs");

const createMontlyMemberCtrl = async (req, res) => {
    try {
        let {
            name,
            phone,
            address,
            amount,
            jan,
            feb,
            march,
            april,
            may,
            june,
            july,
            aug,
            sep,
            oct,
            nov,
            dec,
        } = req.body;

        // validation
        if (
            !name ||
            !phone ||
            !address ||
            !amount
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }

        const mothlyMember = await monthlyMemberModel.create({
            name,
            phone,
            address,
            amount,
            jan,
            feb,
            march,
            april,
            may,
            june,
            july,
            aug,
            sep,
            oct,
            nov,
            dec,
        });

        return res.status(201).json({
            success: true,
            message: "Monthly Member  created successfully!",
            mothlyMember,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating monthly member api",
        });
    }
};

const getMonthlyMemberCtlr = async (req, res) => {
    try {
        const monthlyMembers = await monthlyMemberModel.find({});
        if (!monthlyMembers) {
            return res.status(400).json({
                success: false,
                message: "Not such member feinds",
            });
        }
        return res.status(200).json({
            success: true,
            totalMonthlyMember: monthlyMembers.length,
            monthlyMembers,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in getting all monthly memeber api!",
            error,
        });
    }
};

const deleteMonthlyMemberCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await monthlyMemberModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "monthly memeber deleted successfully!",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in deleting monthly memeber api!",
            error,
        });
    }
};

const exportToExcel = async (req, res) => {
    try {
        const monthlyMember = await monthlyMemberModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("MonthlyMember");

        worksheet.columns = [
            { header: "Name", key: "name", width: 30 },
            { header: "Phone", key: "phone", width: 30 },
            { header: "Address", key: "address", width: 30 },
            { header: "Amount", key: "amount", width: 30 },
            { header: "January", key: "jan", width: 30 },
            { header: "February", key: "feb", width: 30 },
            { header: "March", key: "march", width: 30 },
            { header: "April", key: "april", width: 30 },
            { header: "May", key: "may", width: 30 },
            { header: "June", key: "june", width: 30 },
            { header: "July", key: "july", width: 30 },
            { header: "August", key: "aug", width: 30 },
            { header: "September", key: "sep", width: 30 },
            { header: "October", key: "oct", width: 30 },
            { header: "November", key: "nov", width: 30 },
            { header: "December", key: "dec", width: 30 },
        ];

        monthlyMember.forEach((event) => {
            worksheet.addRow({
                name: event.name,
                phone: event.phone,
                address: event.address,
                amount: event.amount,
                jan: event.jan,
                feb: event.feb,
                march: event.march,
                april: event.april,
                may: event.may,
                june: event.june,
                july: event.july,
                aug: event.aug,
                sep: event.sep,
                oct: event.oct,
                nov: event.nov,
                dec: event.dec,
            });
        });

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        res.setHeader("Content-Disposition", 'attachment; filename="MonthlyMember.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error("Error downloading monthly member excel:", error);
        res.status(500).send("Error downloading monthly member excel");
    }
};

module.exports = { createMontlyMemberCtrl, getMonthlyMemberCtlr, deleteMonthlyMemberCtrl, exportToExcel };
