const casePaymentModel = require("../model/casePayment");
const ExcelJS = require('exceljs');

const createCasePaymentCtrl = async (req, res) => {
    try {
        const {
            reciptNumber,
            date,
            name,
            amount,
            reason
        } = req.body;

        // validation
        if (
            !reciptNumber ||
            !date ||
            !name ||
            !amount

        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }

        const payment = await casePaymentModel.create({
            reciptNumber,
            date,
            name,
            amount,
            reason
        });

        return res.status(201).json({
            success: true,
            message: "Member created successfully!",
            payment,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in creating online payment api",
        });
    }
};

const getCasePaymentCtrl = async (req, res) => {
    try {
        const payments = await casePaymentModel.find({});

        return res.status(200).json({
            totalPaymentCount: payments.length,
            success: true,
            payments,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all online payment api",
        });
    }
};

const deleteCasePaymentCtrl = async (req, res) => {
    try {
        const { id } = req.params;

        await casePaymentModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Online Payment deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting online payment api",
        });
    }
};






const exportToExcel = async (req, res) => {
    try {
        const payments = await casePaymentModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('CasePayments');

        worksheet.columns = [
            { header: 'Receipt Number', key: 'reciptNumber', width: 20 },
            { header: 'Date', key: 'date', width: 20 },
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Amount', key: 'amount', width: 15 },
            { header: 'Reason', key: 'reason', width: 10 },

        ];

        payments.forEach(payment => {
            worksheet.addRow({
                reciptNumber: payment.reciptNumber,
                date: payment.date,
                name: payment.name,
                amount: payment.amount,
                reason: payment.reason || ''
            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="casepayment.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error('Error downloading case payment excel:', error);
        res.status(500).send('Error downloading case payment excel');
    }
};





module.exports = { createCasePaymentCtrl, getCasePaymentCtrl, deleteCasePaymentCtrl, exportToExcel };
