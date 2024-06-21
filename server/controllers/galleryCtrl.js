const { uploadImageToCloudinary } = require("../config/imageUploader");
const galleryModel = require("../model/gallery")


const creaateGallery = async (req, res) => {
    try {

        const thumbnail = req.files.image;

        if (!thumbnail) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }





        // upload img to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create entry in db 
        const gallery = await galleryModel.create({
            image: thumbnailImage.secure_url,
        });

        return res.status(201).json({
            success: true,
            message: "gallery created successfully!",
            gallery
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating gallery api!",
            error
        });
    }
}


const getAllGallery = async (req, res) => {
    try {
        const gallerys = await galleryModel.find({})
        if (!gallerys) {
            return res.status(400).json({
                success: false,
                message: "Not such gallery finds"
            })
        }
        return res.status(200).json({
            success: true,
            totalGaller: gallerys.length,
            gallerys
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all gallery api!",
            error
        })
    }
}


const deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
        await galleryModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "gallery deleted successfully!"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting gallery api!",
            error
        })
    }
}


module.exports = { creaateGallery, getAllGallery, deleteGallery }