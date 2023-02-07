import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Survey = () => {
  const params = useParams();
  const [job_detail, setJobDetail] = useState({});
  const [step, setStep] = useState("declare");
  const [q_step, setQuestionStep] = useState(0);
  const [submit, setSubmit] = useState(false)
  const [servey_detail, setServeyDetail] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    question: [],
  });

  const user_data = sessionStorage.getItem("user_data")&& JSON.parse(sessionStorage.getItem("user_data"))

  const getUserDeail = () => {
    let serData = { ...servey_detail };
    axios.get(process.env.REACT_APP_API+"/job/get_job/" + params.id).then((res) => {
      if (res.data) {
        console.log(res.data);
        setJobDetail(res.data);
        if (res.data.questionnair) {
          serData["question"] = res.data.questionnair;
          serData["job_id"] = res.data._id;
          setServeyDetail(serData);
        }
      }
    });
  };
  useEffect(() => {
    getUserDeail();
  }, []);
  const handleDeclareStep = () => {
    if (true) {
      setStep("user-form");
    }
  };
  const handleChange = (e, name="", question="",page=0) => {
    let serData = { ...servey_detail };

    if (question !=="") {
      let ser_q = serData.question;
      let q_obj = {
        "question":question,
        "answer": []
      }
      if(name ==="radio"){
        console.log("")
        let radio_answer =q_obj.answer;
        radio_answer.push(e);
        q_obj["answer"] = radio_answer;
      }
      else if(name==="check"){
        let check_answer =q_obj.answer;
        check_answer.push(e);
        q_obj["answer"] = check_answer;
      }
      else{
        let text_answer =q_obj.answer;
        text_answer.push(e.target.value);
        q_obj["answer"] = text_answer;
      }
      // ser_q.push(q_obj)
      ser_q[page]["servey_detail"] = q_obj
      serData["question"] = ser_q;

    } else {
      serData[name] = e.target.value;
    }

    setServeyDetail(serData);
  };

  const handleUichange = () => {
    setStep("question");
  };
  const getUserFormUI = () => {
    return (
      <div className="container">
        <label className="mt-3 mb-2">Name</label>
        <input
          className="form-control"
          onChange={(e) => handleChange(e, "name")}
        />
        <label className="mt-3 mb-2">Email</label>
        <input
          className="form-control"
          onChange={(e) => handleChange(e, "email")}
        />
        <label className="mt-3 mb-2">Gender</label>
        <select
          className="form-control"
          onChange={(e) => handleChange(e, "gender")}
        >
          <option>select</option>
          <option value="male">MALE</option>
          <option value="female">FEMALE</option>
          <option value="other">OTHER</option>
        </select>
        <label className="mt-3 mb-2">Date Of Birth</label>
        <input
          className="form-control"
          type="date"
          onChange={(e) => handleChange(e, "dob")}
        />
        <div className="">
          <button className="btn btn-primary" onClick={handleUichange}>
            Next
          </button>
        </div>
      </div>
    );
  };
  const getQuestionairUI = (q_data, page = 0) => {
    let all_op = q_data&&q_data.option;
    if (q_data.answer) {
      return (
        <div>
          <h3>
            Q{page}. {q_data.question}
          </h3>
          <textarea className="form-control" onChange={(e)=>handleChange(e,"text",q_data.question,page)}></textarea>
        </div>
      );
    }
    if (q_data.multi_choice && !q_data.answer) {
      return (
        <div>
          <h3>
            Q{page}. {q_data.question}
          </h3>
          {all_op.map((data, index) => {
            return (
              <div className="px-3">
                <input type="checkbox" className="my-2 me-2" onChange={(e)=>handleChange(e,"check",q_data.question,page)}/>
                {data}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            {" "}
            Q{page}. {q_data.question}
          </h3>
          {all_op.map((data, index) => {
            return (
              <div className="px-3">
                <input type="radio" name="option" className=" my-2 me-2" onChange={(e)=>handleChange(data,"radio",q_data.question,page)} />
                {data}
              </div>
            );
          })}
        </div>
      );
    }
  };

  const handleQuestionSubmit = () => {
    let serData = { ...servey_detail };
    let question_list = serData.question;
    if (q_step < (question_list && question_list.length - 1)) {
      setQuestionStep(q_step + 1);
    } else {
      console.log("submit");
      let data = {
        name: serData.name,
        email:serData.email,
        gender:serData.gender,
        dob: serData.dob,
        question: serData.question,
        user_id: user_data._id,
        job_id:serData.job_id

      }
      axios({
        method:"POST",
        data: data,
        url:process.env.REACT_APP_API+"/servey/servey"
      })
      .then(res=>{
        console.log(res)
        setStep("done")

      })
    }
  };

  const getQuestionUI = () => {
    let serData = { ...servey_detail };
    let question_list = serData.question;
    let questionDetail = question_list[q_step];
    return (
      <div>
        {getQuestionairUI(questionDetail, q_step)}
        <div>
          <button
            className="btn btn-primary my-3 w-100"
            onClick={handleQuestionSubmit}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  const getDoneUI = () =>{
    return(
      <div className="container">

          <h3 className="text-primary text-center">Survey submitted success</h3>
        {/* <button>
                
        </button> */}
      </div>
    )
  }
  console.log(servey_detail)
  return (
    <div className="container">
      {step === "declare" && (
        <div>
          <h2 className="text-center">SURVEY</h2>
          <div className="d-flex my-2">
            <img src={""} />
            <h4>5 - Project Jaguar Qnre_Loose Tea with SEC</h4>
          </div>
          <div className="my-2">
            <label>FREELANCER NAME</label>
            <div className="">Singhal</div>
          </div>
          <div className="d-flex justify-content-between my-2">
            <div className="">
              <div>DATE</div>
              <div>time</div>
            </div>
            <div className="">
              <div>TIME</div>
              <div>time</div>
            </div>
          </div>
          <div className="">
            <label>FREELANCER NAME</label>
            <div>First Name</div>
          </div>
          <hr></hr>
          <div className="d-flex">
            <input type="checkbox" className="me-3" />
            <div>
              I declare that interview has been carried out strictly in
              accordance with your specifications and instructions, written and
              oral, with a person unknown to me, as per study requirements and
              strictly in accordance with ESOMAR code of conduct
            </div>
          </div>
          <div className="border p-2">
            <h2>Freelancer Instructions</h2>
            <h5>
              INTRO: ASK TO TALK WITH A SENIOR MEMBER IN THE FAMILY AND
              INTRODUCE YOURSELF GOOD
            </h5>
            <div>
              l am coming from --------, a leading market research agency. We
              meet different types of people and collect their views and
              opinions on various products, services and issues. I would be
              grateful if you could spare some time and answer a few questions.
              Your cooperation is voluntary. Please note that there are no right
              or wrong answers, your responses will be kept strictly
              confidential and your name & responses will not be shared with
              anyone as per MRSI/ESOMAR guidelines. We will collate responses
              from all the people with whom we have conducted interviews/ survey
              for our research findings.
            </div>
          </div>
          <div className="my-3">
            <button
              className="btn btn-primary w-100"
              onClick={handleDeclareStep}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === "user-form" && getUserFormUI()}
      {step === "question" && getQuestionUI()}
      {step === "done" && getDoneUI()}
    </div>
  );
};

export default Survey;
