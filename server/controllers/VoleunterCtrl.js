const voleunterModel = require("../model/voleunter")

const createVoleunterCtrl = async (req, res) => {
    try {
        let {

            name,
            phone,
            address,
            age,
            remark,
        } = req.body;


        // validation
        if (
            !name ||
            !phone ||
            !address ||
            !age

        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields",
            });
        }


        const votunteer = await voleunterModel.create({
            name,
            phone,
            address,
            age,
            remark
        });

        return res.status(201).json({
            success: true,
            message: "Volunteer created successfully!",
            votunteer,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in send request to becoume volunteer api",
        });
    }

}


const getAllVolunterCtrl = async (req, res) => {
    try {
        const volunteers = await voleunterModel.find({})
        if (!volunteers) {
            return res.status(400).json({
                success: false,
                message: "Not such volunteer request fiend"
            })
        }
        return res.status(200).json({
            success: true,
            totalVolunteerLength: volunteers.length,
            volunteers
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all volunteers api!",
            error
        })
    }
}
module.exports = { createVoleunterCtrl, getAllVolunterCtrl }