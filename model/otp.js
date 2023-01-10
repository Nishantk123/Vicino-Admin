const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    otp: {type:"string", default: null},
    created_at: {type:"date", default:Date.now},
    updated_at: {type:"date", default:Date.now}
})

module.exports = mongoose.model("otp",otpSchema)