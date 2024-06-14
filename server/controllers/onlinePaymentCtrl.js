const onlinePaymentModel = require("../model/OnlinePayment");
const ExcelJS = require('exceljs');

const createOnlinePaymentCtrl = async (req, res) => {
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

        const payment = await onlinePaymentModel.create({
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

const getOnlinePaymentCtrl = async (req, res) => {
    try {
        const payments = await onlinePaymentModel.find({});

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

const deleteOnlinePaymentCtrl = async (req, res) => {
    try {
        const { id } = req.params;

        await onlinePaymentModel.findByIdAndDelete(id);

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
        const payments = await onlinePaymentModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('OnlinePayments');

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
        res.setHeader('Content-Disposition', 'attachment; filename="onlinepayment.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error('Error downloading online payment excel:', error);
        res.status(500).send('Error downloading online payment excel');
    }
};





module.exports = { createOnlinePaymentCtrl, getOnlinePaymentCtrl, deleteOnlinePaymentCtrl, exportToExcel };
