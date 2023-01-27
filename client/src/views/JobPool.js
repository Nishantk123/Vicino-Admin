import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import feature from "../assets/img/feature.png";
import menu from "../assets/img/menu.png";
import eye from "../assets/img/eye.svg";
import community from "../assets/img/community.png";
import location from "../assets/img/location.png";
import calender from "../assets/img/calender.png";
import icon_reports from "../assets/img/icon_reports.png";
import { useHistory } from "react-router-dom";
const JobPool = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const history = useHistory()
  const [job_list, setJobList] = useState([]);

  const getjobPool = () => {
    axios.get(process.env.REACT_APP_API+"/job/get_job").then((res) => {
      console.log(res);
      if (res.data) {
        setJobList(res.data);
      }
    });
  };
  useEffect(() => {
    getjobPool();
  }, []);

  const handleCreateJob = () =>{
    history.push("/dashboard/create-job-pool")
  }
  const handleApplyJob = (data) =>{
    console.log(data)
    history.push("/dashboard/job/"+data._id)
  }
  // let sample_size = 0;
  // let sampling_range = 0;
  // job_list.length>0&&job_list.forEach((d,n)=>{
  //   const job_sampling = d.sectioning;
  //   const sampling_keys = Object.keys(job_sampling)
  //   sampling_keys.length>0&&sampling_keys.forEach((s)=>{
  //     let price = job_sampling[s].sample_range;
  //     let job_range = job_sampling[s].sample_size;
  //     sample_size = sample_size + Number(price);
  //     sampling_range = sampling_range + Number(job_range);
  //   })

  // })
  const getSamplePrice = (data) =>{
    let sample_size = 0;
    const job_sampling = data.sectioning;
    const sampling_keys = Object.keys(job_sampling)
    sampling_keys.length>0&&sampling_keys.forEach((s)=>{
      let price = job_sampling[s].sample_range;
      let job_range = job_sampling[s].sample_size;
      sample_size = sample_size + Number(price);
      // sampling_range = sampling_range + Number(job_range);
  })
  return sample_size;
}
const getSampleSize = (data) =>{
  let sampling_range = 0;
  const job_sampling = data.sectioning;
  const sampling_keys = Object.keys(job_sampling)
  sampling_keys.length>0&&sampling_keys.forEach((s)=>{
    let price = job_sampling[s].sample_range;
    let job_range = job_sampling[s].sample_size;
    // sample_size = sample_size + Number(price);
    sampling_range = sampling_range + Number(job_range);
})
  return sampling_range;
}
  // console.log(sample_size, sampling_range)
  // const job_sampling = job_list.sectioning;
  // console.log
  // const sampling_keys = Object.keys(job_sampling)

  return (
    <div className="container">
      <div className="card filter-card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-lg-flex d-md-flex d-none ">
              <select className="form-control">
                <option>select</option>
                <option>All</option>
                <option>Standred</option>
                <option>Express</option>
              </select>
              <input className="form-control mx-3" placeholder="Search" />
            </div>
            <div className="d-lg-flex d-md-flex d-none ">
              <div className="py-2">From</div>
              <input type="date" className="form-control mx-2" />
              <div className="py-2">To</div>
              <input type="date" className="form-control mx-2" />
            </div>
            <div div className="border-left-1 ">
              <img src={feature} className="ms-3 d-none" />
              <img src={menu} className="mx-2" />
              <dib className="btn btn-primary" onClick={handleCreateJob}>+ Create Job</dib>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {job_list.length > 0 &&
          job_list.map((data, index) => {
            return (
              <div className="col-sm-4 my-3">
                <div className="card">
                  <div className="card-body py-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <small>standard</small>
                      </div>
                      <div>
                        <img src={eye} />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="py-3">
                        <img src={community} />
                      </div>
                      <div className="p-2">
                        <h6 className="text-primary">{data.project_name}</h6>
                        <small>{"Published on " +  moment(
                                data.created_at&&data.created_at
                              ).format("L")}</small>
                        <div className="d-flex my-2">
                          <img src={location} className="job-card-icon" />
                          <div className="mx-2">
                            {data.locaton &&
                              data.locaton.length > 0 &&
                              data.locaton.map((data, n) => {
                                return (
                                  <span>
                                    {data.value}{" "}
                                    {n < data.locaton && data.locaton.length - 1
                                      ? ","
                                      : ""}
                                  </span>
                                );
                              })}
                          </div>
                        </div>
                        <div className="d-flex">
                          <img src={calender} className="job-card-icon" />
                          <div className="mx-2">
                            <span>
                              {moment(
                                data.time_frame && data.time_frame.start_date
                              ).format("L")}
                            </span>
                            -
                            <span>
                              {moment(
                                data.time_frame && data.time_frame.end_date
                              ).format("L")}
                            </span>{" "}
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <img src={icon_reports} className="job-card-icon" />
                          <div className="mx-2">Random Sample</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <small>price offer for job</small>
                        <div>{"₹"+ getSamplePrice(data) + "/- + GST" }</div>
                      </div>
                      <div className="">
                        <small>sample size</small>
                        <div className="text-center">{getSampleSize(data)}</div>
                      </div>
                      <div>
                        <div className="btn btn-primary">
                          <small onClick={()=>handleApplyJob(data)}>Apply for job</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default JobPool;
