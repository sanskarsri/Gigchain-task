const router = require("express").Router();

// model
const GRAPH__MODEL = require("../../models/Graph");

router.post("/add",async (req,res)=>{
    try {
        const {
            date,
            experts,
            fullfillment
        }=req.body;

        const newentry = new GRAPH__MODEL({
            date,
            experts,
            fullfillment
        });
        await newentry.save();

        return res.status(200).json({
            success: true
          });
    } catch (err) {
        console.log(err);
    }
})

router.get("/details",async (req,res)=>{
    try {
        const data = await GRAPH__MODEL.aggregate([
            { "$project": {
                "_id": 0,
                "date": 1,
                "createdAt": 1,
                "expertservices": "$experts",
                "workfullfillment": "$fullfillment"
            }},
            { $sort : { createdAt : -1 } },
            { $limit: 7 }
        ])

        return res.status(201).json(data);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;