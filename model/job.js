const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    project_name: {type:"string", default: null},
    company_name: {type:"string", default: null},
    brand_name: {type:"string", default: null},
    locaton: { type: Array, default: [] },
    apply: { type: Array, default: [] },
    approved: { type: Array, default: [] },
    reject: { type: Array, default: [] },
    research_type: {
        type:{type:"string", default: null},
        description:{type:"string", default: null}
    },
    study_object:{
        type:{type:"string", default: null},
        description:{type:"string", default: null}
    },
    sampling:{
        type:{type:"string", default: null},
        description:{type:"string", default: null}
    },
    demographic:{
        personal_details:{
            age:{type:"string", default: null},
            mhi:{type:"string", default: null},
            nccs:{type:"string", default: null},
            marital_status:{type:"string", default: null},
            occupation: {type:"string", default: null},
            education: {type:"string", default: null},
        },
        family_information:{
            family_unit: {type:"string", default: null},
            child_count: {type:"string", default: null},
            child_age: {type:"string", default: null},
        },
        special_instruction:{
            behaviour: {type:"string", default: null},
            life_style: {type:"string", default: null},
            other_instructions: {type:"string", default: null},
        }
    },
    sectioning:{type:"Object", default: {}},
    questionnair:[{
        question: {type:"string", default: null},
        type: {type:"string", default: null},
        answer:  {type:Boolean, default: false},
        option: [],
        
    }
    ],
    time_frame:{
        start_date:{type:"date", default:Date.now},
        end_date:{type:"date", default:Date.now}
    },
    created_at: {type:"date", default:Date.now}
})

module.exports = mongoose.model("job",jobSchema)