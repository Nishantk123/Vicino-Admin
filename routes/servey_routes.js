const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Servey = require("../model/servey");
const fast2sms = require("fast-two-sms");
const router = express.Router();

router.post("/servey", async (req, res) => {
    const { name, email, gender,dob,user_id,job_id, question } = req.body
    Servey.create({
        name,
        email,
        gender,
        dob,
        user_id,
        job_id,
        question
    })
    res.status(201).json({ success: true });
    
})

router.get("/questionnair", async(req,res)=>{
    let query = req.query;
    let page = query.page;
    let per_page = query.per_page;
    let serveyData = await Servey.find()
    .limit(Number(per_page))
    .skip(Number(per_page) * (Number(page) - 1))
    .sort("desc");
  res.status(200).json(serveyData);
})

module.exports = router;