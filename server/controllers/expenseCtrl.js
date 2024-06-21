const expenseModel = require('../model/expense')
const ExcelJS = require('exceljs');


const createExpense = async (req, res) => {
    try {
        let {

            date,
            reason,
            amount,
            refrence,
            name,
            payment,
            other
        } = req.body;


        // validation
        if (
            !date ||
            !reason ||
            !amount ||
            !refrence ||
            !payment
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }


        const expense = await expenseModel.create({
            date,
            reason,
            amount,
            refrence,
            name,
            payment,
            other
        });

        return res.status(201).json({
            success: true,
            message: "Expence created successfully!",
            expense,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating event list api",
        });
    }
};

const getExpense = async (req, res) => {
    try {
        const expense = await expenseModel.find({})
        if (!expense) {
            return res.status(400).json({
                success: false,
                message: "Not such event fiends"
            })
        }
        return res.status(200).json({
            success: true,
            totalExpense: expense.length,
            expense
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all expense api!",
            error
        })
    }
}

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await expenseModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Expense deleted successfully!"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting expense api!",
            error
        })
    }
}


const exportToExcel = async (req, res) => {
    try {
        const expense = await expenseModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Expense');

        worksheet.columns = [
            { header: 'Date', key: 'date', width: 20 },
            { header: 'Reason', key: 'reason', width: 20 },
            { header: 'Amount', key: 'amount', width: 30 },
            { header: 'Reference', key: 'refrence', width: 20 },
            { header: 'Name', key: 'name', width: 15 },
            { header: 'Payment', key: 'payment', width: 15 },
            { header: 'Other', key: 'other', width: 10 },
        ];

        expense.forEach(event => {
            worksheet.addRow({
                date: event.date,
                reason: event.reason,
                amount: event.amount,
                refrence: event.refrence,
                name: event.name,
                payment: event.payment,
                other: event.other,
            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="Expense.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error('Error downloading expense list excel:', error);
        res.status(500).send('Error downloading expense list excel');
    }
};


module.exports = { createExpense, getExpense, deleteExpense, exportToExcel }