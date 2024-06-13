const eventModel = require('../model/events')
const { uploadImageToCloudinary } = require("../config/imageUploader")


const createEvents = async (req, res) => {
    try {
        const { title, time, location, desc } = req.body;
        // geting img
        const thumbnail = req.files.image;

        if (!title || !time || !location || !desc) {
            return res.status(400).json({
                success: false,
                message: "Plase provide all fields"
            })
        }

        // upload img to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);


        // create entry in db 

        const event = await eventModel.create({
            title,
            image: thumbnailImage.secure_url,
            time,
            location,
            desc
        })

        return res.status(201).json({
            success: true,
            message: "Event created successfully!",
            event
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in creating event api!",
            error
        })
    }
}
const getAllEvents = async (req, res) => {
    try {
        const events = await eventModel.find({})
        if (!events) {
            return res.status(400).json({
                success: false,
                message: "Not such event fiends"
            })
        }
        return res.status(200).json({
            success: true,
            totalEvent: events.length,
            events
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all events api!",
            error
        })
    }
}

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await eventModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Event deleted successfully!"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting all  api!",
            error
        })
    }
}

module.exports = { createEvents, getAllEvents, deleteEvent }