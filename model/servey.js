const mongoose = require("mongoose");

const ServeySchema = new mongoose.Schema({
    name: {type:"string", default: null},
    email: {type:"string", default: null},
    gender: {type:"string", default: null},
    dob: {type:"date", default:Date.now},
    user_id: {type:"string", default: null},
    job_id: {type:"string", default: null},
    question:[]
})

module.exports = mongoose.model("Servey",ServeySchema)