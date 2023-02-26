import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import OtpInput from "react18-input-otp";
import axios from "axios";
import _ from "lodash";
import close from "../../assets/img/close.png";

const CreateQuestionModal = ({
  open,
  handleCloseQuestion,
  handleAddQuestion,
}) => {
  const [q_range, setQrange] = useState(3);
  const [r_range, setRowRange] = useState(3);
  const [c_range, setCRange] = useState(3);
  const [multi_choice, setMultichoice] = useState(true);
  const [other_option, setOtherOption] = useState(true);
  const [audio_video, setAudioVideo] = useState(false);
  const [text_answer, setTextAnswer] = useState(false);
  const [require, setRequire] = useState(false);
  const [all_option, setAllOpton] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [matrix, setMatix] = useState(false);
  const customStyles = {
    content: {
      top: "0%",
      left: "0%",
      right: "auto",
      bottom: "auto",
      marginRight: "-0%",
      transform: "translate(-0%, -0%)",
      width: "100%",
      height: "100vh",
      backgroundColor: "#f9fafb;",
    },
    overlay: {},
  };
  customStyles.overlay["zIndex"] = 10000000;
  const alfa = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
  ];
  useEffect(() => {
    // handleRow(r_range);
    // handleColumn(c_range);
  }, []);
  const handleremoveQuestion = (index) => {
    if (q_range > 1) {
      setQrange(q_range - 1);
      let allOp = [...all_option];
      allOp.splice(index, 1);
      setAllOpton(allOp);
    }
  };
  const handleSetting = (e, name) => {
    console.log(e.target.checked);
    if (name === "Multiple Selection") {
      setMultichoice(e.target.checked);
      setOtherOption(false)
      setRequire(false)
      setAudioVideo(false)
      setAudioVideo(false)
      setTextAnswer(false)
      setAllOpton([])
      setMatix(false)
    }
    if (name === "Other Option") {
      setOtherOption(e.target.checked);
      setAllOpton([])
    }
    if (name === "require") {
      setRequire(e.target.checked);
      setAllOpton([])
    }
    if (name === "audio video") {
      setAudioVideo(e.target.checked);
      setAllOpton([])
      setMultichoice(false)
      setTextAnswer(false)
      setMatix(false)
    }
    if (name === "text field") {
      setTextAnswer(e.target.checked);
      setAllOpton([])
      setMultichoice(false)
      setAudioVideo(false)
      setMatix(false)
    }
    if (name === "matrix") {
      setMatix(e.target.checked);
      setMultichoice(false)
      setAudioVideo(false)
      setTextAnswer(false)
      if(e.target.checked){
        handleRow(r_range);
        handleColumn(c_range);
      }else{
        setAllOpton([])
      }
      
    }
  };
  const handleCreate = () => {
    let final = {
      option: all_option,
      multi_choice: multi_choice,
      other_option: other_option,
      require: require,
      question: question,
      answer: text_answer,
      matrix: matrix,
    };
    handleAddQuestion(final);
    handleCloseQuestion();
    setAllOpton([]);
  };
  const hanldleOption = (e, index) => {
    let all_op = [...all_option];
    all_op[index] = e.target.value;
    setAllOpton(all_op);
  };
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const hanldleMatrixOption = (e, index, c_index) => {
    console.log(index, c_index);
    let all_op = [...all_option];
    console.log(all_op);
    all_op[index][c_index] = e.target.value;
    setAllOpton(all_op);
  };
  const handleRow = (data) => {
    setRowRange(data);
    let all_op = [];
    _.forEach(_.range(data), (r, index) => {
      all_op.push([]);
    });
    setAllOpton(all_op);
  };
  const handleColumn = (data) => {
    setCRange(data);
    let all_op = [];
    _.forEach(_.range(r_range), (r, index) => {
      let r_op = [];
      _.forEach(_.range(data), (c, c_index) => {
        r_op.push("");
      });
      all_op.push([r_op]);
    });
    setAllOpton(all_op);
  };
  const getQuestionUI = () => {
    if (text_answer) {
      return (
        <div className="">
          <textarea
            className="form-control"
            onChange={(e) => handleAnswer(e)}
          ></textarea>
        </div>
      );
    } else if (matrix) {
      return (
        <div>
          <div className="d-flex">
            <div className="mx-3">
              <div>Row</div>
              <input
                value={r_range}
                onChange={(e) => handleRow(e.target.value)}
              />
            </div>
            <div>
              <div className="">Column</div>
              <input
                value={c_range}
                onChange={(e) => handleColumn(e.target.value)}
              />
            </div>
          </div>
          {_.map(_.range(r_range), (data, index) => {
            return (
              <div className="d-flex my-2" key={index}>
                {alfa[index] ==="a"?<div className="px-3 me-2">{"  "}</div>:<div className="border px-3">{alfa[index -1]}</div>}
                {_.map(_.range(c_range), (c_data, c_index) => {
                  let c_value = all_option[index]&&all_option[index][c_index]  !== undefined?all_option[index][c_index]:"0"
                  return (
                    <div>
                     { alfa[index] ==="a" && <h5 className="text-center">{"H " + (Number(c_index) + 1)}</h5>}
                    <input
                      key={c_index}
                      placeholder=""
                      className="form-control  w-100 me-2"
                      value={
                        c_value
                        // all_option[index][c_index]  !== undefined?all_option[index][c_index]:""
                      }
                      onChange={(e) => {
                        hanldleMatrixOption(e, index, c_index);
                      }}
                    />
                    </div>
                  );
                })}

                {/* <img
                  src={close}
                  className="close_question-icon"
                  onClick={() => handleremoveQuestion(index)}
                /> */}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          {_.map(_.range(q_range), (data, index) => {
            return (
              <div className="d-flex my-2">
                <div className="border px-3">{alfa[index]}</div>
                <input
                  placeholder="Please Write an Option"
                  className="form-control  w-100"
                  value={all_option[index] || ""}
                  onChange={(e) => {
                    hanldleOption(e, index);
                  }}
                />
                <img
                  src={close}
                  className="close_question-icon"
                  onClick={() => handleremoveQuestion(index)}
                />
              </div>
            );
          })}
          <button
            className="btn btn-outline-secondary  mt-3"
            onClick={() => {
              setQrange(q_range + 1);
            }}
          >
            Add More Option
          </button>
        </div>
      );
    }
  };
  console.log(all_option);
  return (
    <Modal
      isOpen={open}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal "
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-8 bg-white p-3">
            <div className="">
              <h3>Q1</h3>
              <input
                placeholder="Please Write a Question"
                className="form-control"
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div>
              <h3>A1</h3>
              <div>
                {getQuestionUI()}
                {/* {_.map(_.range(q_range), (data, index) => {
                  return (
                    <div className="d-flex my-2">
                      <div className="border px-3">{alfa[index]}</div>
                      <input
                        placeholder="Please Write an Option"
                        className="form-control  w-100"
                        value={all_option[index] || ""}
                        onChange={(e) => {
                          hanldleOption(e, index);
                        }}
                      />
                      <img
                        src={close}
                        className="close_question-icon"
                        onClick={() => handleremoveQuestion(index)}
                      />
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="bg-white p-2">
              <div className="">
                <h4 className="bg-gray text-white text-center">
                  TYPE SELECTION
                </h4>
                <select className="form-control">
                  <option value="">select</option>
                  <option value={"multiple choice"}>Multiple Choice</option>
                  <option value={"dropdown selection"}>
                    Dropdown Selection
                  </option>
                  <option value={"date calender"}>Date calender</option>
                </select>
                <small style={{ fontSize: "14px", textAlign: "center" }}>
                  Select option to change the question type.
                </small>
                <h5 className="text-gray my-3">SETTINGS</h5>
                <div className="d-flex justify-content-between my-3">
                  <div>Required</div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={require}
                      onChange={(e) => handleSetting(e, "require")}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>Multiple Selection</div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={multi_choice}
                      onChange={(e) => handleSetting(e, "Multiple Selection")}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>"Other" Option</div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={other_option}
                      onChange={(e) => handleSetting(e, "Other Option")}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>Image or video</div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={audio_video}
                      onChange={(e) => handleSetting(e, "audio video")}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>Text field</div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={text_answer}
                      onChange={(e) => handleSetting(e, "text field")}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>Matrix</div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked={matrix}
                      onChange={(e) => handleSetting(e, "matrix")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  justify-content-center mt-5">
          <div className="col-sm-3">
            <button className="btn btn-primary w-100" onClick={handleCreate}>
              CreateQuestionnaire
            </button>
          </div>
          <div className="col-sm-3">
            <button
              className="btn btn-secondary w-100"
              onClick={handleCloseQuestion}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateQuestionModal;
