const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JOB = require("../model/job");
const router = express.Router();

router.post("/create_job", async (req, res) => {
  const {
    project_name,
    brand_name,
    locaton,
    research_type,
    study_object,
    sampling,
    demographic,
    sectioning,
    questionnair,
    time_frame,
  } = req.body;
  JOB.create({
    project_name,
    brand_name,
    locaton,
    research_type,
    study_object,
    sampling,
    demographic,
    sectioning,
    questionnair,
    time_frame,
    created_at: new Date()
  });
  res.status(201).json({ success: true });
});

router.get("/get_job", async (req, res) => {
  let query = req.query;
  let page = query.page;
  let per_page = query.per_page;
  let jobData = await JOB.find()
    .limit(Number(per_page))
    .skip(Number(per_page) * (Number(page) - 1))
    .sort("desc");
  res.status(200).json(jobData);
});

router.get("/get_job/:id", async (req, res) => {
  const job_id = req.params.id;
  let job_detail = await JOB.findOne({"id":Object(job_id)})  
  if(job_detail){
    res.status(200).json(job_detail);
  } 
  else{
    res.status(400)
  } 

})
module.exports = router;
