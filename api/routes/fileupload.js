const router = require('express').Router();

const File = require("../models/File");

const Crypto = require("crypto-js");

const verify = require('../verifyToken');

//Upload

router.post("/upload", verify ,async (req, res)=>{
    if(req?.user?.email){
        const hashCode = Crypto.SHA256(req.body.hashCode);
        const newFile = new File({
            hashCode: hashCode,
            ownerId:req.user.id
        });
        try {
        const savedFile = await newFile.save();

        res.status(201).json({message:"File saved successfully"})
        }
        catch (err) {
            res.status(409).json({message:`File was already uploaded by ${req.user.name}`});   
        }
    }
    else{
        res.status(401).json({message:"You need to login to upload"});
    }
})

module.exports = router;