const mongoose = require("mongoose");

const QuestionnairSchema = new mongoose.Schema({
    question: {type:"string", default: null},
    type: {type:"string", default: null},
    option1: {type:"date", default:Date.now},
    option2: {type:"date", default:Date.now},
    option3: {type:"date", default:Date.now},
    option4: {type:"date", default:Date.now},
})

module.exports = mongoose.model("Questionnair",QuestionnairSchema)