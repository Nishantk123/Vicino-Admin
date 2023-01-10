import React, { useState } from "react";
import OTPModal from "./OTPModal";
import axios from "axios";

const Step1 = ({ handleStep, handleDataChange, register_data,setIsRegister }) => {
  const [open, setOpen] = useState(false);
  const [price_select, setPriceSelect] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [is_valid_email, setValidEmail] = useState(false);
  const [is_valid_mobile, setValidMobile] = useState(false);
  const [is_password_matching, setPasswordMaching] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const handlePlan = (e,name)=>{
    handleDataChange(e,name)
    setPriceSelect(name)
  }
  const getOTP = () => {
    axios({
      url: "http://localhost:5000/otp/get_otp",
      method: "POST",
      data: { number: register_data.mobile },
    }).then((res) => {
      console.log(res);
    });
  };
  const handleSendVerification = () => {
    getOTP();
    setOpen(true);
  };
  const handleVerified = () => {
    setIsVerified(true);
  };
  const handleSubmit = () => {
    handleStep(2);
    setOpen(false);
  };
  const getPlanUI = () => {
    return (
      <div className="">
        <div className="my-3">
          <h4 className="text-primary">Create Account</h4>
        </div>
        <div className="text-primary my-3">
          Please Choose your plan in order to Proceed
        </div>
        <div className="card my-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h4>
                  <strong>Standard Plan</strong>
                </h4>
                <h1>
                  <strong>₹80</strong>
                </h1>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3 pt-3 text-center">
                <button
                  className="btn btn-primary "
                  onClick={() =>  handlePlan("standard","plan")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h4>
                  <strong>Express Plan</strong>
                </h4>
                <h1>
                  <strong>₹130</strong>
                </h1>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="">
                  <small>
                    <strong>Lorem deterruisset</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Hinc lorem</strong>
                  </small>
                </div>
                <div className="">
                  <small>
                    <strong>Autem molestiae</strong>
                  </small>
                </div>
              </div>
              <div className="col-sm-3 pt-3 text-center">
                <button
                  className="btn btn-primary "
                  onClick={() => handlePlan("express","plan")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const hanldeEmailValidation = (e) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.value.match(mailformat)) {
      setValidEmail(true);
      handleDataChange(e, "email");
    } else {
      console.log("false");
      setValidEmail(false);
    }
  };

  const handleMobileValidation = (e) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    handleDataChange(e, "mobile");
    if (re.test(e.target.value)) {
      setValidMobile(true);
    } else {
      setValidMobile(false);
    }
  };
  const handlepasswordMatch = (e) => {
    handleDataChange(e, "verify_password");
    if (e.target.value === register_data.password) {
      setPasswordMaching(true);
      console.log("true");
    } else {
      setPasswordMaching(false);
      console.log("false");
    }
  };
  console.log(is_password_matching, is_valid_email, is_valid_mobile)
  return (
    <div className="container px-3 my-3">
      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-outline-primary" onClick={()=>setIsRegister(false)}>back</button>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-10">
          {price_select === "" && getPlanUI()}
          {/* <div>
            <small className="text-primary">STEP 1 OF 3</small>
          </div> */}
          {price_select !== "" && (
            <div>
              <div className="my-2">
                <h4 className="text-primary">Create Account</h4>
              </div>
              <div className="w-75">
                <div class=" mb-2">
                  <label for="floatingInput ">First Name</label>
                  <input
                    type="email"
                    placeholder="Please Enter First Name"
                    class="form-control my-2"
                    id="floatingInput"
                    value={register_data.first_name}
                    onChange={(e) => handleDataChange(e, "first_name")}
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput ">Middle Name</label>
                  <input
                    type="email"
                    class="form-control my-2 "
                    placeholder="Please Enter Middle Name"
                    id="floatingInput"
                    onChange={(e) => handleDataChange(e, "middle_name")}
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput ">Last Name</label>
                  <input
                    type="email"
                    class="form-control my-2 "
                    placeholder="Please Enter last Name"
                    id="floatingInput"
                    onChange={(e) => handleDataChange(e, "last_name")}
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput">Email</label>
                  <input
                    type="email"
                    class="form-control "
                    placeholder="Please Enter Email"
                    id="floatingInput"
                    onChange={(e) => hanldeEmailValidation(e, "email")}
                  />
                </div>
                {!is_valid_email && register_data.email !==""&& (
                  <div className="text-danger">Please enter valid email</div>
                )}
                <div class="mb-2">
                  <label for="floatingInput">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Please Enter Password"
                    id="floatingInput"
                    // value={register_data.password}
                    onChange={(e) => handleDataChange(e, "password")}
                  />
                </div>
                <div class=" mb-2">
                  <label for="floatingInput"> Verify Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Please Enter verify Password"
                    id="floatingInput"
                    // value={register_data.password}
                    onChange={(e) => handlepasswordMatch(e)}
                  />
                  {register_data.password !== "" && register_data.verify_password&& (
                    <div>
                      {" "}
                      {is_password_matching  ? (
                        <div className="text-primary">password matching</div>
                      ) : (
                        <div className="text-danger">
                          Password is not matching{" "}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div class="mb-3">
                  <label for="floatingInput">Mobile Number</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Please Enter Mobile Number"
                    id="floatingInput"
                    onChange={(e) => handleMobileValidation(e)}
                  />
                  {!is_valid_mobile && register_data.mobile && (
                    <div className="text-danger">
                      Please enter valid mobile number
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="btn btn-primary px-5 rounded-pill"
                    onClick={handleSendVerification}
                    disabled={!is_password_matching || !is_valid_email || !is_valid_mobile}
                  >
                    SEND VERIFICATION CODE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <OTPModal
        open={open}
        closeModal={closeModal}
        isVerified={isVerified}
        handleSubmit={handleSubmit}
        handleVerified={handleVerified}
        register_data={register_data}
      />
    </div>
  );
};

export default Step1;
