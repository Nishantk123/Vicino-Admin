import React from "react";

const TimeFrame = ({time_frame, setTimeFrame}) => {

  const handleTimeFrame = (e,field) =>{
    const data = {...time_frame}
    data[field] = e.target.value
    setTimeFrame(data)
  }
  return (
    <div className="container position-relative mt-3">
      <h3 className="text-gray text-center">
        Specify Your Target Start & Delivery Dates For The Study
      </h3>
      <div className="text-gray text-center">
        {" "}
        <small>Please select the time frame</small>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4 mt-3">
            <label>Choose a start date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter your project name"
            // value={project_name}
            onChange={(e) => handleTimeFrame(e,"start_date")}
          />
        </div>
        <div className="col-sm-4 mt-3">
            <div className="d-flex">
                <div className="me-3 pt-4" >TO</div>
            <div className="w-100">
            <label>Choose a completion date</label>
            <input
            type="date"
            className="form-control w-100"
            placeholder="Enter your project name"
            // value={project_name}
            onChange={(e) => handleTimeFrame(e,"end_date")}
          />

            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeFrame;
