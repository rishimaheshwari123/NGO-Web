const cultureModel = require('../model/culture')
const { uploadImageToCloudinary } = require("../config/imageUploader")


const createCulture = async (req, res) => {
    try {
        const { title, desc } = req.body;
        // geting img
        const thumbnail = req.files.image;
        const thumbnail2 = req.files.image2;

        if (!title || !desc || !thumbnail || !thumbnail2) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }




        // upload img to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);
        const thumbnailImage2 = await uploadImageToCloudinary(thumbnail2, process.env.FOLDER_NAME);

        // create entry in db 
        const culture = await cultureModel.create({
            title,
            image: thumbnailImage.secure_url,
            image2: thumbnailImage2.secure_url,
            desc
        });

        return res.status(201).json({
            success: true,
            message: "Culture created successfully!",
            culture
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating culture api!",
            error
        });
    }
};

const getAllCulture = async (req, res) => {
    try {
        const cultures = await cultureModel.find({})
        if (!cultures) {
            return res.status(400).json({
                success: false,
                message: "Not such event fiends"
            })
        }
        return res.status(200).json({
            success: true,
            totalCulture: cultures.length,
            cultures
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

const getCulute = async (req, res) => {
    try {
        const { id } = req.params;
        const culture = await cultureModel.findById(id)
        return res.status(200).json({
            success: true,
            culture,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deting culture  api!",
            error
        })
    }
}


const deleteCulture = async (req, res) => {
    try {
        const { id } = req.params;
        await cultureModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "culture deleted successfully!"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting culture api!",
            error
        })
    }
}
module.exports = { createCulture, getAllCulture, getCulute, deleteCulture }