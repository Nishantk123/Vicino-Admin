import React, { useState } from "react";

const Demographic = ({demographic,setDemographic}) => {
  const [active_tag, setActiveTag] = useState("personal_details");
  
  const handleTag = (name) => {
    setActiveTag(name);
  };

  const handleDemographic = (e, field) =>{
    let final_data = {...demographic}
    // final_data ={
    //   personal_details:{},
    //   family_information:{},
    //   special_instruction:{}
    // }
    final_data[active_tag][field] = e.target.value;


    setDemographic(final_data)

  }
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
                  active_tag === "personal_details"
                    ? "btn btn-primary active"
                    : "btn btn-outline-primary"
                }
                onClick={() => handleTag("personal_details")}
              >
                <div>PERSONAL DETAILS</div>
              </label>
              <label
                class={
                    active_tag === "family_information"
                      ? "btn btn-primary active"
                      : "btn btn-outline-primary"
                  }
                onClick={() => handleTag("family_information")}
              >
                <div>FAMILY INFORMATION</div>
              </label>
              <label
                class={
                    active_tag === "special_instruction"
                      ? "btn btn-primary active"
                      : "btn btn-outline-primary"
                  }
                onClick={() => handleTag("special_instruction")}
              >
                <div>SPECIAL INSTRUCTION</div>
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-10">
          {active_tag === "personal_details" && (
            <div className="row mt-3">
              <div className="col-sm-4 my-2">
                <label>Age</label>
                <input
                  className="form-control mt-2"
                  placeholder="Please Enter Age"
                  onChange={(e)=> handleDemographic(e,'age')}
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>MHI</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select MHI</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter MHI"
                  onChange={(e)=> handleDemographic(e,'mhi')}

                />
              </div>
              <div className="col-sm-4 my-2">
                <label>NCCS</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select NCCS</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter NCCS"
                  onChange={(e)=> handleDemographic(e,'nccs')}

                />
              </div>
              <div className="col-sm-4 my-2">
                <label>Marital Status</label>
                <select className="form-control mt-2" onChange={(e)=> handleDemographic(e,'marital_status')}>
                  <option>Please Select Marital Status</option>
                  <option value="married">Married</option>
                  <option value="unmarried">UnMarried</option>

                </select>
              </div>
              <div className="col-sm-4 my-2">
                <label>Occupation</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select Occupation ...</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter Occupation"
                  onChange={(e)=> handleDemographic(e,'occupation')}
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>Education</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select Education ...</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter Education"
                  onChange={(e)=> handleDemographic(e,'education')}
                />
              </div>
            </div>
          )}
          {active_tag === "family_information" && (
            <div className="row mt-3">
              <div className="col-sm-4 my-2">
                <label>Type of Family Unit</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select Type of Family Unit</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter Family Unit"
                  onChange={(e)=> handleDemographic(e,'family_unit')}
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>Number of child</label>
                {/* <select className="form-control mt-2">
                  <option>Enter Number of Children</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter Number of child"
                  onChange={(e)=> handleDemographic(e,'child_count')}
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>Age of child</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter Age of child"
                  onChange={(e)=> handleDemographic(e,'child_age')}
                />
              </div>
            </div>
          )}
          {active_tag === "special_instruction" && (
            <div className="row mt-3">
              <div className="col-sm-4 my-2">
                <label>Behaviour</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select Behaviour</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter Behaviour"
                  onChange={(e)=> handleDemographic(e,'behaviour')}
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>Life style</label>
                {/* <select className="form-control mt-2">
                  <option>Please Select Life style...</option>
                </select> */}
                 <input
                  className="form-control mt-2"
                  placeholder="Please Enter Life style"
                  onChange={(e)=> handleDemographic(e,'life_style')}
                />
              </div>
              <div className="col-sm-4 my-2">
                <label>Other Instructions</label>
                <input
                  className="form-control mt-2"
                  placeholder="Enter Instruction"
                  onChange={(e)=> handleDemographic(e,'other_instructions')}
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
