const cultureModel = require('../model/culture');
const Category = require('../model/category'); // Ensure you import the Category model
const { uploadImageToCloudinary } = require("../config/imageUploader");

const createCulture = async (req, res) => {
    try {
        const { title, desc, categoryId } = req.body;
        const thumbnail = req.files.image;
        const thumbnail2 = req.files.image2;

        if (!title || !desc || !thumbnail || !thumbnail2 || !categoryId) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            });
        }

        console.log(categoryId)
        // Check if category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        // Upload images to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);
        const thumbnailImage2 = await uploadImageToCloudinary(thumbnail2, process.env.FOLDER_NAME);

        // Create entry in db
        const culture = await cultureModel.create({
            title,
            image: thumbnailImage.secure_url,
            image2: thumbnailImage2.secure_url,
            desc,
            category: categoryId
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
            message: "Error in creating culture API!",
            error
        });
    }
};

const getAllCulture = async (req, res) => {
    try {
        const cultures = await cultureModel.find({}).populate('category');
        return res.status(200).json({
            success: true,
            totalCulture: cultures.length,
            cultures
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in getting all cultures API!",
            error
        });
    }
};

const getCultureByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const cultures = await cultureModel.find({ category: categoryId }).populate('category');

        if (!cultures.length) {
            return res.status(404).json({
                success: false,
                message: "No cultures found for this category"
            });
        }

        return res.status(200).json({
            success: true,
            cultures
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in fetching cultures by category",
            error
        });
    }
};

const deleteCulture = async (req, res) => {
    try {
        const { id } = req.params;
        await cultureModel.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Member deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in deleting culture API!",
            error
        });
    }
};

module.exports = { createCulture, getAllCulture, getCultureByCategory, deleteCulture };
