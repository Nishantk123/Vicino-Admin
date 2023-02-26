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
    comapny_name,
    apply,
    approve,
    reject,
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
    comapny_name,
    created_at: new Date(),
    apply,
    approve,
    reject,
  });
  res.status(201).json({ success: true });
});

router.get("/get_job", async (req, res) => {
  let query = req.query;
  let page = query.page;
  let per_page = query.per_page;
  let role = query.role;
  let company_name = query.company_name;
  console.log("req", req.query);
  const queryObj = {};
  if (role === "super_admin" || role === "freelancer") {
    console.log("all jobs");
  } else {
    queryObj["company_name"] = company_name;
  }
  console.log(queryObj);
  let jobData = await JOB.find()
    .limit(Number(per_page))
    .skip(Number(per_page) * (Number(page) - 1))
    .sort("desc");

  res.status(200).json(jobData);
});

router.get("/get_job/:id", async (req, res) => {
  const job_id = req.params.id;
  let job_detail = await JOB.findOne({ _id: Object(job_id) });
  if (job_detail) {
    res.status(200).json(job_detail);
  } else {
    res.status(400);
  }
});

router.post("/update_job", async (req, res) => {
  const { user_email, job_id, status, type } = req.body;
  let job_detail = await JOB.findOne({ id: Object(job_id) });
  if (job_detail) {
    if (type === "apply") {
      let apply_list = [...job_detail.apply];
      apply_list.push(user_email);
      await JOB.updateOne({ _id: Object(job_id) }, { apply: apply_list });
    }
    if (type === "approved") {
      if (status === "approved") {
        let approved_list = [...job_detail.approved];
        approved_list.push(user_email);
        apply_list =
          job_detail.apply && job_detail.apply.filter((d) => d !== user_email);
        await JOB.updateOne(
          { _id: Object(job_id) },
          { approved: approved_list, apply: apply_list }
        );
      } else {
        let reject_list = [...job_detail.reject];
        reject_list.push(user_email);
        apply_list =
          job_detail.apply && job_detail.apply.filter((d) => d !== user_email);
        await JOB.updateOne(
          { _id: Object(job_id) },
          { reject: reject_list, apply: apply_list }
        );
      }
    }
    res.status(201).json({ success: true });
  } else {
    res.status(400);
  }
});
module.exports = router;
