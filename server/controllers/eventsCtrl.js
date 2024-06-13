const eventModel = require('../model/events')
const { uploadImageToCloudinary } = require("../config/imageUploader")


const createEvents = async (req, res) => {
    try {
        const { title, time, location, desc } = req.body;
        // geting img
        const thumbnail = req.files.image;

        if (!title || !time || !location || !desc || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }

        // Validate and convert time to the desired format
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/; // Regex to match HH:MM format
        if (!timeRegex.test(time)) {
            return res.status(400).json({
                success: false,
                message: "Invalid time format. Use HH:MM format."
            });
        }

        let [hours, minutes] = time.split(':');
        hours = parseInt(hours, 10);
        let period = 'AM';

        if (hours >= 12) {
            period = 'PM';
            if (hours > 12) {
                hours -= 12;
            }
        } else if (hours === 0) {
            hours = 12;
        }

        const formattedTime = `${hours}:${minutes} ${period}`;

        // upload img to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create entry in db 
        const event = await eventModel.create({
            title,
            image: thumbnailImage.secure_url,
            time: formattedTime,
            location,
            desc
        });

        return res.status(201).json({
            success: true,
            message: "Event created successfully!",
            event
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating event api!",
            error
        });
    }
};

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