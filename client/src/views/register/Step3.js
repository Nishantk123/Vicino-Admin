import React from "react";
import { useHistory } from "react-router-dom";
const Step3 = ({handleStep, handleDataChange, register_data, handleSubmit }) => {
    const history = useHistory()
    // const handleSubmit = ()=>{
    //     history.push("/login")
    // }   
  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-outline-primary" onClick={()=>handleStep(2)}>back</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-10">
          <div>
            {/* <small className="text-primary">STEP 3 OF 3</small> */}
          </div>
          <div className="my-3">
            <h4 className="text-primary">Contact Person</h4>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div class="mb-3">
                <label for="floatingInput">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  value={register_data.name}
                  onChange={(e)=> handleDataChange(e, "name")}
                />
              </div>
              <div class=" mb-3">
                <label for="floatingInput">Family Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  value={register_data.family_name}
                  onChange={(e)=> handleDataChange(e, "family_name")}
                />
              </div>
              <div class="mb-3">
                <label for="floatingInput">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  value={register_data.email}
                  onChange={(e)=> handleDataChange(e, "email")}

                />
              </div>
              <div class=" mb-3">
                <label for="floatingInput">Mobile Number</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  value={register_data.mobile}
                />
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleSubmit}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Step3;