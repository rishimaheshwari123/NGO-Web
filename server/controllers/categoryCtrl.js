const categoryModel = require("../model/category")
const { uploadImageToCloudinary } = require("../config/imageUploader")


const createCategoryCtrl = async (req, res) => {
    try {
        const { title } = req.body;
        // geting img
        const thumbnail = req.files.image;

        if (!title || !thumbnail) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }

        // upload img to cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        // create entry in db 
        const category = await categoryModel.create({
            title,
            image: thumbnailImage.secure_url,

        });

        return res.status(201).json({
            success: true,
            message: "Category created successfully!",
            category
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



const getAllCategory = async (req, res) => {
    try {
        const categorys = await categoryModel.find({});

        return res.status(200).json({
            totalCategory: categorys.length,
            success: true,
            categorys,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all category list api",
        });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const categorys = await categoryModel.findByIdAndUpdate(id, { title }, { new: true });

        return res.status(200).json({
            success: true,
            categorys,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in getting all category list api",
        });
    }
};

module.exports = { createCategoryCtrl, getAllCategory, update }