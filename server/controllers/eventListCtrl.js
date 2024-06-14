const eventListModel = require("../model/eventList");
const ExcelJS = require('exceljs');
const moment = require('moment');


const createEventListCtrl = async (req, res) => {
    try {
        let {
            time,
            date,
            bhojan,
            phone,
            other
        } = req.body;


        // validation
        if (
            !time ||
            !date ||
            !bhojan ||
            !phone ||
            !other
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }


        const eventLists = await eventListModel.create({
            time,
            date,
            bhojan,
            phone,
            other
        });

        return res.status(201).json({
            success: true,
            message: "Event list created successfully!",
            eventLists,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating event list api",
        });
    }
};




const getEventListCtrl = async (req, res) => {
    try {
        const eventLists = await eventListModel.find({});

        return res.status(200).json({
            totalEventCoutLists: eventLists.length,
            success: true,
            eventLists,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all events list api",
        });
    }
};

const deleteEventListCtrl = async (req, res) => {
    try {
        const { id } = req.params;

        await eventListModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Event List  deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in deleting Event list api",
        });
    }
};






const exportToExcel = async (req, res) => {
    try {
        const eventLists = await eventListModel.find();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('EventList');

        worksheet.columns = [
            { header: 'Time', key: 'time', width: 20 },
            { header: 'Date', key: 'date', width: 20 },
            { header: 'Bhojan', key: 'bhojan', width: 20 },
            { header: 'Phone', key: 'phone', width: 15 },
            { header: 'Other', key: 'other', width: 10 },

        ];

        eventLists.forEach(event => {
            worksheet.addRow({
                time: event.time,
                date: event.date,
                bhojan: event.bhojan,
                phone: event.phone,
                other: event.other,

            });
        });

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="EventList.xlsx"');

        await workbook.xlsx.write(res);

        res.end();
    } catch (error) {
        console.error('Error downloading event list excel:', error);
        res.status(500).send('Error downloading event list excel');
    }
};





module.exports = { createEventListCtrl, getEventListCtrl, deleteEventListCtrl, exportToExcel };
