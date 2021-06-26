const express = require("express");
const router = express.Router();

router.get('/helloMehemt',(req,res)=>{
    res.json({msg: "mehmet"});
    console.log("yay");
});

module.exports = router;