import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from 'lodash'
import { useParams } from "react-router-dom";
const Survey = () => {
  const params = useParams();
  const [job_detail, setJobDetail] = useState({});
  const [step, setStep] = useState("declare");
  const [q_step, setQuestionStep] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [servey_detail, setServeyDetail] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    question: [],
  });

  const user_data =
    sessionStorage.getItem("user_data") &&
    JSON.parse(sessionStorage.getItem("user_data"));

  const getUserDeail = () => {
    let serData = { ...servey_detail };
    axios
      .get(process.env.REACT_APP_API + "/job/get_job/" + params.id)
      .then((res) => {
        if (res.data) {
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
  const removeCircular = (obj) => {
    let cache = [];
    let str = JSON.stringify(obj, function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  };
  const handleMatrixChange = (e, question, page, index, c_index, type) =>{
      let serData = { ...servey_detail };
      let ser_q = serData.question; 
      let matrix_ser_q = ser_q[page]
      let matrix_option = matrix_ser_q.option;
      let q_obj = {
        question: question,
        answer: matrix_option,
      };
      if(type ==="multi"){
        q_obj.answer[index][c_index] = true
      }else{
      q_obj.answer[index].map((ans, ans_index)=>{
        if(ans_index>0){
            if((ans_index) ===c_index){
              q_obj.answer[index][ans_index] = true;
            }else{
              q_obj.answer[index][ans_index] = false;
            }          
        }else{
          // q_obj.answer[index][0]= 
        }
       
      })
    }
      console.log(q_obj)
      ser_q[page]["servey_detail"] = q_obj;
      setServeyDetail(serData);
  }
  const handleChange = (e, name = "", question = "", page = 0) => {
    console.log(name)
    let serData = { ...servey_detail };
    if (question !== "") {
      let ser_q = serData.question;
      let q_obj = {
        question: question,
        answer: [],
      };
      if (name === "radio") {
        let radio_answer = q_obj.answer;
        radio_answer.push(e);
        q_obj["answer"] = radio_answer;
      } else if (name === "check") {
        let check_answer = [...q_obj.answer];
        check_answer.push(e);
        q_obj["answer"] = check_answer;
      } else {
        let text_answer = q_obj.answer;
        text_answer.push(e.target.value);
        q_obj["answer"] = text_answer;
      }
      // ser_q.push(q_obj)
      ser_q[page]["servey_detail"] = q_obj;
      serData["question"] = ser_q;
      // console.log(serData)
    } else {
      serData[name] = e.target.value;
    }
    console.log(serData);
    // const serresult = JSON.stringify(serData, getCircularReplacer());
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
    // console.log(q_data)
    let all_op = q_data && q_data.option;
    if (q_data.answer) {
      return (
        <div>
          <h3>
            Q{page + 1}. {q_data.question}
          </h3>
          <textarea
            className="form-control"
            onChange={(e) => handleChange(e, "text", q_data.question, page)}
          ></textarea>
        </div>
      );
    }
    if (q_data.multi_choice && !q_data.answer) {
      return (
        <div>
          <h3>
            Q{page + 1}. {q_data.question}
          </h3>
          {all_op.map((data, index) => {
            return (
              <div className="px-3">
                <input
                  type="checkbox"
                  className="my-2 me-2"
                  onChange={(e) =>
                    handleChange(data, "check", q_data.question, page)
                  }
                />
                {data}
              </div>
            );
          })}
        </div>
      );
    } else if(q_data.date_type){
      return (
        <div>
          <h3>
            Q{page}. {q_data.question}
          </h3>
          <input className="form-control" type="date"/>
        </div>
      );
    }
    else if(q_data.sec){
      return(
        <div>
          <h3>
            Q{page}. {q_data.question}
          </h3>
            <div className="row">
              <div className="col-sm-6">
                <div><strong>{q_data&&q_data.sec_row_heading}</strong></div>
                <select className="my-3 form-control">
                  <option>Select</option>
                  {
                    _.size(q_data.option)>0&&(
                      _.map(q_data.option,(d,n)=>{
                        return(
                          <option value={d}>{d}</option>
                        )
                      })
                    )
                  }
                </select>
              </div>
              <div className="col-sm-6">
                <div><strong>{q_data&&q_data.sec_column_heading}</strong></div>
                <select className="my-3 form-control">
                  <option>Select</option>
                  {
                    _.size(q_data.col_option)>0&&(
                      _.map(q_data.col_option,(d,n)=>{
                        return(
                          <option value={d}>{d}</option>
                        )
                      })
                    )
                  }
                </select>
              </div>
            </div>
            
        </div>
      )
    }
    else if (q_data.matrix) {
      const header_data = all_op && all_op[0];
      return (
        <div>
          <h3>
            {" "}
            Q{page + 1}. {q_data.question}
          </h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                {header_data &&
                  header_data.length > 0 &&
                  header_data.map((matrix_column, index) => {
                    return (
                      <td className="text-center">
                        <strong>{matrix_column}</strong>
                      </td>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {all_op.map((data, index) => {
                if (index > 0) {
                  return (
                    <tr className="">
                      {data.map((c_data, c_index) => {
                        if (c_index === 0) {
                          return <td className="text-center">{c_data}</td>;
                        } else {
                          if(q_data.multi_matrix){
                            return (
                              <td className="text-center">
                                <input
                                  type="checkbox"
                                  name={data[0]}
                                  onChange={(e) =>
                                    handleMatrixChange(e,q_data.question,page, index,c_index,"multi")
                                  }
                                />
                              </td>
                            );
                          }else{
                            return (
                              <td className="text-center">
                                <input
                                  type="radio"
                                  name={data[0]}
                                  onChange={(e) =>
                                    handleMatrixChange(e,q_data.question,page, index,c_index,"radio")
                                  }
                                />
                              </td>
                            );
                          }
                         
                        }
                        // return <td className="text-center" key={index}>{c_data}</td>;
                      })}
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            {" "}
            Q{page + 1}. {q_data.question}
          </h3>
          {all_op.map((data, index) => {
            return (
              <div className="px-3">
                <input
                  type="radio"
                  name="option"
                  className=" my-2 me-2"
                  onChange={(e) =>
                    handleChange(data, "radio", q_data.question, page)
                  }
                />
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
      // let yodata =  JSON.stringify(data, getCircularReplacer());
      let final_data = JSON.parse(removeCircular(serData));
      let data = {
        name: final_data.name,
        email: final_data.email,
        gender: final_data.gender,
        dob: final_data.dob,
        question: final_data.question,
        user_id: user_data._id,
        job_id: final_data.job_id,
      };
      console.log(data);
      axios({
        method: "POST",
        data: data,
        url: process.env.REACT_APP_API + "/servey/servey",
      }).then((res) => {
        setStep("done");
      });
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
  const getDoneUI = () => {
    return (
      <div className="container">
        <h3 className="text-primary text-center">Survey submitted success</h3>
        {/* <button>
                
        </button> */}
      </div>
    );
  };
  console.log(servey_detail);
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
