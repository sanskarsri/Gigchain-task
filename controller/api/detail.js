const router = require("express").Router();

// model
const DETAIL__MODEL = require("../../models/Detail");

router.get("/",async (req,res)=>{
    try {
        const data = await DETAIL__MODEL.aggregate([
            { "$project": {
                "_id": 1,
                "gigtype": 1,
                "gignumber": 1,
                "amount": 1,
                "start": 1,
                "end": 1,
                "status": 1,
                "createdAt": 1,
                "contactcsm": 1,
                "proof": 1,
                "percentage": 1
            }},
            { $sort : { createdAt : -1 } }
        ])

        return res.status(201).json(data);
    } catch (error) {
        console.log(error);
    }
})

router.post("/add",async (req,res)=>{
    try {
        const {
            gigtype,
            gignumber,
            amount,
            start,
            end,
            status,
            contactcsm,
            proof,
            percentage
        }=req.body;

        const newentry = new DETAIL__MODEL({
            gigtype,
            gignumber,
            amount,
            start,
            end,
            status,
            contactcsm,
            proof,
            percentage
        });
        await newentry.save();

        return res.status(200).json({
            success: true
          });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;