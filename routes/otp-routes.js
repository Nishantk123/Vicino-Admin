const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const OTP = require("../model/otp");
const fast2sms = require("fast-two-sms");
const router = express.Router();

async function smsSend(options) {
  const response = await fast2sms.sendMessage(options);
  console.log(response);
  return response;
}
router.post("/get_otp", async (req, res) => {
  const { number } = req.body;
  let otp = Math.floor(100000 + Math.random() * 900000);
  console.log(otp);
  var options = {
    authorization:
      "aoGSO3KhF4B7nsn8irCrJY17Qi90obkihbh0pXp3KGR4bjrp4amh2Lp47xNE",
    message: otp,
    numbers: [number],
  };
  const data = await OTP.remove({})
  const otpData = await OTP.create({ otp: otp });
  const fast2sms = await smsSend(options);
  res.status(200).json(fast2sms);
});

router.post("/submit_otp", async (req, res) => {
    const { otp } = req.body
    const otpData = await OTP.findOne({ otp });
    console.log("otpData",otpData)
    if(otpData){
        return res.status(200).send({"message":"OTP validated successfully"})
    }else{
        return res.status(404).send({"message":"Wrong OTP"});
    }
})

module.exports = router;
