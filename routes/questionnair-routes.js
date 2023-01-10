const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Questionnair = require("../model/Questionnair");
const fast2sms = require("fast-two-sms");
const router = express.Router();

router.post("/questionnair", async (req, res) => {
    const { question, type, option1,option2,option3,option4 } = req.body
    Questionnair.create({
        question,
        type,
        option1,
        option2,
        option3,
        option4
    })
    res.status(201).json({ success: true });
    
})

router.get("/questionnair", async(req,res)=>{
    let query = req.query;
    let page = query.page;
    let per_page = query.per_page;
    let questionnairData = await Questionnair.find()
    .limit(Number(per_page))
    .skip(Number(per_page) * (Number(page) - 1))
    .sort("desc");
  res.status(200).json(questionnairData);
})

module.exports = router;