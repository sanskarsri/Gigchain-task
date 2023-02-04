const router = require("express").Router();

// model
const DEMO__MODEL = require("../../models/Demo");

router.get("/",(req,res)=>{
    try {
        res.send("Demo working");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;