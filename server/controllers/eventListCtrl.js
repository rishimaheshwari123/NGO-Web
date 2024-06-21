const eventListModel = require("../model/eventList");
const ExcelJS = require('exceljs');



const createEventListCtrl = async (req, res) => {
    try {
        let {

            date,
            year,
            name,
            bhojan,
            phone,
            other
        } = req.body;


        // validation
        if (
            !date ||
            !year ||
            !name ||
            !bhojan ||
            !phone
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }


        const eventLists = await eventListModel.create({
            date,
            year,
            name,
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
            { header: 'Date', key: 'date', width: 20 },
            { header: 'Year', key: 'year', width: 20 },
            { header: 'Name', key: 'name', width: 30 },
            { header: 'Bhojan', key: 'bhojan', width: 20 },
            { header: 'Phone', key: 'phone', width: 15 },
            { header: 'Other', key: 'other', width: 10 },

        ];

        eventLists.forEach(event => {
            worksheet.addRow({
                date: event.date,
                year: event.year,
                name: event.name,
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
