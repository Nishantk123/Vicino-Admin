import React, { useState } from "react";

const Demographic = () => {
  const [active_tag, setActiveTag] = useState("PERSONAL DETAILS");
  const handleTag = (name) => {
    setActiveTag(name);
  };
  return (
    <div className="container position-relative mt-3">
      <h3 className="text-gray text-center">
        Demographic Profile of Respondents to be studied
      </h3>
      <div className="text-gray text-center">
        {" "}
        <small>Please enter the details</small>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 mt-3">
          <div>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label
                class={
                  active_tag === "PERSONAL DETAILS"
                    ? "btn btn-primary active"
                    : "btn btn-outline-primary"
                }
                onClick={() => handleTag("PERSONAL DETAILS")}
              >
                <div>PERSONAL DETAILS</div>
              </label>
              <label
                class={
                    active_tag === "FAMILY INFORMATION"
                      ? "btn btn-primary active"
                      : "btn btn-outline-primary"
                  }
                onClick={() => handleTag("FAMILY INFORMATION")}
              >
                <div>FAMILY INFORMATION</div>
              </label>
              <label
                class={
                    active_tag === "SPECIAL INSTRUCTION"
                      ? "btn btn-primary active"
                      : "btn btn-outline-primary"
                  }
                onClick={() => handleTag("SPECIAL INSTRUCTION")}
              >
                <div>SPECIAL INSTRUCTION</div>
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-10">
          {active_tag === "PERSONAL DETAILS" && (
            <div className="row mt-3">
              <div className="col-sm-4 my-2">
                <label>Age</label>
                <input
                  className="form-control mt-2"
                  placeholder="Please Enter Age"
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>MHI</label>
                <select className="form-control mt-2">
                  <option>Please Select MHI</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>NCCS</label>
                <select className="form-control mt-2">
                  <option>Please Select NCCS</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Marital Status</label>
                <select className="form-control mt-2">
                  <option>Please Select Marital Status</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Occupation</label>
                <select className="form-control mt-2">
                  <option>Please Select Occupation ...</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Education</label>
                <select className="form-control mt-2">
                  <option>Please Select Education ...</option>
                </select>
              </div>
            </div>
          )}
          {active_tag === "FAMILY INFORMATION" && (
            <div className="row mt-3">
              <div className="col-sm-4 my-2">
                <label>Type of Family Unit</label>
                <select className="form-control mt-2">
                  <option>Please Select Type of Family Unit</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Number of child</label>
                <select className="form-control mt-2">
                  <option>Enter Number of Children</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Age of child</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter Age of child"
                />
              </div>
            </div>
          )}
          {active_tag === "SPECIAL INSTRUCTION" && (
            <div className="row mt-3">
              <div className="col-sm-4 my-2">
                <label>Behaviour</label>
                <select className="form-control mt-2">
                  <option>Please Select Behaviour</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Life style</label>
                <select className="form-control mt-2">
                  <option>Please Select Life style...</option>
                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Other Instructions</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter Instruction"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demographic;
