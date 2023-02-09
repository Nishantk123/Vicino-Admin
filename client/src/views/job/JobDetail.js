import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useHistory, useParams } from "react-router-dom";
import community from "../../assets/img/community.png";
import location from "../../assets/img/location.png";
const Jobdetail = () => {
  const [job_detail, setJobDetail] = useState({});
  const [selected_tab, setSelectedTab] = useState("job_pool_detail");
  const params = useParams();
  const history= useHistory();
  console.log(params);
  const user_detail = JSON.parse(window.sessionStorage.getItem("user_data"));
  const user_email = user_detail && user_detail.email;
  const getJobDetail = () => {
    console.log(params.id)
    axios.get(process.env.REACT_APP_API+"/job/get_job/" + params.id).then((res) => {
      if (res.data) {
        console.log(res.data)
        setJobDetail(res.data);
      }
    });
  };
  useEffect(() => {
    getJobDetail();
  }, []);

  const handleTab = (name) => {
    setSelectedTab(name);
  };
  console.log(job_detail);
  let sample_size = 0;
  let sampling_range = 0;
  const job_sampling = job_detail && job_detail.sectioning;
  const sampling_keys = job_sampling && Object.keys(job_sampling);
  sampling_keys &&
    sampling_keys.length > 0 &&
    sampling_keys.forEach((s) => {
      let price = job_sampling[s].sample_range;
      let job_range = job_sampling[s].sample_size;
      sample_size = sample_size + Number(price);
      sampling_range = sampling_range + Number(job_range);
    });

    const handleTakeSurvey = () =>{
        console.log(job_detail)
        history.push("/dashboard/job/"+job_detail&&job_detail._id+"/survey")
      }
    const handleApplySurvey = () =>{
      const data = {
        type: "apply",
        user_email: user_email,
        job_id: job_detail&& job_detail._id,
        status: "",
      };
      axios({
        method: "POST",
        url: process.env.REACT_APP_API + "/job/update_job",
        data: data,
      }).then((res) => {
        getJobDetail();
      });
    }
  const jobDetailUI = () => {
    return (
      <div>
        <label className="detail-label">Industry</label>
        <div className="detail-value"></div>
        <label className="detail-label">Research Type</label>
        <div className="detail-value">
          {job_detail &&
            job_detail.research_type &&
            job_detail.research_type.type}
        </div>
        <label className="detail-label">Study Objective</label>
        <div className="detail-value">
          {job_detail &&
            job_detail.study_object &&
            job_detail.study_object.type}
        </div>
        <label className="detail-label">Study Timelines</label>
        <div className="detail-value">
          {moment(
            job_detail &&
              job_detail.time_frame &&
              job_detail.time_frame.start_date
          ).format("L") +
            " - " +
            moment(
              job_detail &&
                job_detail.time_frame &&
                job_detail.time_frame.end_date
            ).format("L")}
        </div>
        <label className="detail-label">Sample Size</label>
        <div className="detail-value">{sample_size}</div>
        <label className="detail-label">Method of Sampling</label>
        <div className="detail-value">
          {job_detail && job_detail.sampling && job_detail.sampling.type}
        </div>
        <label className="detail-label">BRANDS</label>
        <div className="detail-value">
          {job_detail && job_detail.brand_name}
        </div>
        <label className="detail-label">DEMOGRAPHIC</label>
        <div className="detail-value">
          {"Age " + job_detail &&
            job_detail.demographic &&
            job_detail.demographic.personal_details &&
            job_detail.demographic.personal_details.age}
        </div>
      </div>
    );
  };
  const sampleCoverageArea = () => {
    const apply_list = job_detail&& job_detail.apply;
    const approved_list = job_detail && job_detail.approved;
    const reject_list = job_detail && job_detail.reject;
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="">{"Sample Allotted : " + 1}</div>
          <div className="">{"Total Survey : " + 1}</div>
        </div>
        <div className="d-flex justify-content-center my-3">
          {apply_list&&apply_list.includes(user_email) &&<button className="btn btn-warning mx-1">Pending for approval</button>}
          {approved_list&&approved_list.includes(user_email) &&<button className="btn btn-success mx-1">Accepted Survey</button>}
          {reject_list&&reject_list.includes(user_email) &&<button className="btn btn-danger mx-1">Rejected for approval</button>}
        </div>

        <div className="d-flex my-3">
          <img src={location} className="me-3" />
          <div>
            {job_detail &&
              job_detail.locaton &&
              job_detail.locaton.length > 0 &&
              job_detail.locaton.map((data, index) => {
                return <span className="mx-1">{data.label}</span>;
              })}
          </div>
        </div>
        <div className="my-3">
          {
           approved_list.includes(user_email) ?<button className="btn btn-primary w-100" onClick={handleTakeSurvey}>Take Survey</button>:
           <button className="btn btn-primary w-100" onClick={handleApplySurvey}>Apply</button>
          }
          
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="d-flex">
        <div className="jd-pic-container">
          <img src={community} className="" />
        </div>
        <h1>{job_detail && job_detail.project_name}</h1>
      </div>
      <div className="d-flex my-3">
        <button
          className={
            selected_tab === "job_pool_detail"
              ? "btn btn-primary w-50"
              : "btn btn-outline-primary w-50"
          }
          onClick={() => handleTab("job_pool_detail")}
        >
          JOB POOL DETAILS
        </button>
        <button
          className={
            selected_tab === "sample_coverage_area"
              ? "btn btn-primary w-50"
              : "btn btn-outline-primary w-50"
          }
          onClick={() => handleTab("sample_coverage_area")}
        >
          SAMPLE COVERAGE AREA
        </button>
      </div>
      {selected_tab === "job_pool_detail" && jobDetailUI()}
      {selected_tab === "sample_coverage_area" && sampleCoverageArea()}
    </div>
  );
};

export default Jobdetail;
