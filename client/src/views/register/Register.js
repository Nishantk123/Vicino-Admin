import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import { useHistory } from "react-router-dom";
import FirstView from "./FirstView";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
const Register = () => {
  const [step, setStep] = useState(0);
  const [user_role, setUserRole] = useState("");
  let [register_data, setRegisterData] = useState({
    is_register: false,
    plan: "",
    user_role: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "",
    verify_password: "",
    mobile: "",
    company_name: "",
    cin: "",
    msme: false,
    pan: "",
    gst: "",
    company_category: "",
    website: "",
    instagram: "",
    facebook: "",
    company_description: "",
    company_across_india: false,
    c_address1: "",
    c_address2: "",
    c_landmark: "",
    c_city: "",
    c_state: "",
    b_address1: "",
    b_address2: "",
    b_landmark: "",
    b_city: "",
    b_state: "",
    name: "",
    family_name: "",
    employee_no: "",
    annual_sales: "",
    logo: "",
  });
  const [is_register, setIsRegister] = useState(false);
  const history = useHistory();

  const handleSelect = (role) => {
    if(role ==="freelance"){
      history.push("/login")
    }
    setIsRegister(true);
    setUserRole(role);
    setStep(1);
  };
  const handleStep = (number) => {
    setStep(number);
  };
  const handleDataChange = (e, name) => {
    let final_data = { ...register_data };
    if (name === "plan") {
      final_data["plan"] = e;
    } else if (name === "company_category") {
      console.log(e);
      final_data[name] = e.value;
    } else if (name === "company_across_india") {
      if (e == "Yes") {
        final_data[name] = true;
      } else {
        final_data[name] = false;
      }
    } else if (name === "company_logo") {
      console.log(e.target.files);
      final_data["logo"] = e.target.files[0];
    } else if (name == "same_address") {
      final_data["b_address1"] = register_data.c_address1;
      final_data["b_address2"] = register_data.c_address2;
      final_data["b_landmark"] = register_data.c_landmark;
      final_data["b_city"] = register_data.c_city;
      final_data["b_state"] = register_data.c_state;
    } else {
      final_data[name] = e.target.value;
    }

    setRegisterData(final_data);
  };
  const handleSubmit = () => {
    const data = {
      name: register_data.name,
      email: register_data.email,
      password: register_data.password,
      user_role: user_role,
      plan: register_data.plan,
      first_name: register_data.first_name,
      middle_name: register_data.middle_name,
      last_name: register_data.last_name,
      mobile: register_data.mobile,
      comapany_name: register_data.comapany_name,
      company_type: register_data.company_type,
      cin: register_data.cin,
      msme: register_data.msme,
      pan: register_data.pan,
      gst: register_data.gst,
      c_address1: register_data.c_address1,
      c_address2: register_data.c_address2,
      c_landmark: register_data.c_landmark,
      c_city: register_data.c_city,
      c_state: register_data.c_state,
      b_address1: register_data.b_address1,
      b_address2: register_data.b_address2,
      b_landmark: register_data.b_landmark,
      b_city: register_data.b_city,
      b_state: register_data.b_state,
      company_category: register_data.company_category,
      annual_sales: register_data.annual_sales,
      website: register_data.website,
      instagram: register_data.instagram,
      facebook: register_data.facebook,
      employee_no: register_data.employee_no,
      company_across_india: register_data.company_across_india,
      family_name: register_data.family_name,
    };
    const formData = new FormData();
    formData.append("name", register_data.name);
    formData.append("email", register_data.email);
    formData.append("password", register_data.password);
    formData.append("user_role", user_role);
    formData.append("first_name", register_data.first_name);
    formData.append("middle_name", register_data.middle_name);
    formData.append("last_name", register_data.last_name);
    formData.append("mobile", register_data.mobile);
    formData.append("company_name", register_data.company_name);
    formData.append("company_type", register_data.company_type);
    formData.append("cin", register_data.cin);
    formData.append("msme", register_data.msme);
    formData.append("pan", register_data.pan);
    formData.append("gst", register_data.gst);
    formData.append("c_address1", register_data.c_address1);
    formData.append("c_address2", register_data.c_address2);
    formData.append("b_landmark", register_data.b_landmark);
    formData.append("c_city", register_data.c_city);
    formData.append("c_state", register_data.c_state);
    formData.append("b_address1", register_data.b_address1);
    formData.append("b_address2", register_data.b_address2);
    formData.append("b_landmark", register_data.b_landmark);
    formData.append("b_city", register_data.b_city);
    formData.append("b_state", register_data.b_state);
    formData.append("company_category", register_data.company_category);
    formData.append("annual_sales", register_data.annual_sales);
    formData.append("website", register_data.website);
    formData.append("instagram", register_data.instagram);
    formData.append("facebook", register_data.facebook);
    formData.append("employee_no", register_data.employee_no);
    formData.append("company_across_india", register_data.company_across_india);
    formData.append("family_name", register_data.family_name);
    formData.append("logo", register_data.logo);
    axios({
      method: "POST",
      url: process.env.REACT_APP_API+"/user/register",
      data: formData,
    }).then((res) => {
      console.log("test");
      history.push("/login");
    });
  };
  console.log(register_data);
  console.log(step);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-3 bg-dark left-side login_left_side d-md-block d-lg-block d-none">
            {/* <img className="register-logo" src={logo} /> */}
            <div className="register-step-container d-md-block d-lg-block d-none">
              {
                <div
                  className={
                    step >= 1 ? "register-step-active" : "register-step"
                  }
                >
                  1
                </div>
              }
              {
                <div
                  className={
                    step >= 2 ? "register-step-active" : "register-step"
                  }
                >
                  2
                </div>
              }
              {
                <div
                  className={
                    step >= 3 ? "register-step-active" : "register-step"
                  }
                >
                  3
                </div>
              }
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
                setIsRegister={setIsRegister}
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
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
