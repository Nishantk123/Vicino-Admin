import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import FirstView from "./FirstView";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const Register = () => {
  const [step, setStep] = useState(0);
  const [user_role, setUserRole] = useState("");
  let [register_data, setRegisterData] = useState({
    is_register: false,
    user_role: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "",
    verify_password:"",
    mobile: "",
    company_name: "",
    cin: "",
    msme: "",
    pan: "",
    gst: "",
    company_category: "",
    website: "",
    instagram: "",
    company_description: "",
    c_address1:"",
    c_address2:"",
    c_landmark:"",
    c_city:"",
    c_state:"",
    b_address1:"",
    b_address2:"",
    b_landmark:"",
    b_city:"",
    b_state:"",
    name:"",
    family_name:"",

  });
  const [is_register, setIsRegister] = useState(false);

  const handleSelect = (role) => {
    setIsRegister(true);
    setUserRole(role);
    setStep(1);
  };
  const handleStep = (number) => {
    setStep(number);
  };
  const handleDataChange = (e, name) => {
    console.log("dghd", name)
    let final_data = {...register_data};

    if(name =="same_address"){
      final_data["b_address1"]= register_data.c_address1;
      final_data["b_address2"]= register_data.c_address2;
      final_data["b_landmark"]= register_data.c_landmark;
      final_data["b_city"]= register_data.c_city;
      final_data["b_state"]= register_data.c_state;
    }else{
      final_data[name] = e.target.value
    }

    setRegisterData(final_data)
  };
  console.log(register_data);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-3 bg-dark left-side login_left_side">
            {/* <img className="register-logo" src={logo} /> */}
            <div className="register-step-container">
            {<div className={step >= 1 ?"register-step-active":"register-step"}>1</div>}
            {<div className={step >= 2 ?"register-step-active":"register-step"}>2</div>}
            {<div className={step >= 3 ?"register-step-active":"register-step"}>3</div>}
            </div>

          </div>
          <div className="col-sm-8 col-md-8 col-lg-9">
            {!is_register && (
              <FirstView
                handleSelect={handleSelect}
                handleDataChange={handleDataChange}
                register_data={register_data}
              />
            )}
            {step === 1 && (
              <Step1
                handleStep={handleStep}
                handleDataChange={handleDataChange}
                register_data={register_data}
              />
            )}
            {step === 2 && (
              <Step2
                handleStep={handleStep}
                handleDataChange={handleDataChange}
                register_data={register_data}
              />
            )}
            {step === 3 && (
              <Step3
                handleStep={handleStep}
                handleDataChange={handleDataChange}
                register_data={register_data}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
