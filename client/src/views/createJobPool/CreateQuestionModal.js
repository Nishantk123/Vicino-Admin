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
  const [multi_choice, setMultichoice] = useState(true);
  const [other_option, setOtherOption] = useState(true);
  const [audio_video, setAudioVideo] = useState(false);
  const [require, setRequire] = useState(false);
  const [all_option, setAllOpton] = useState([]);
  const [question, setQuestion] = useState("")
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
    }
    if (name === "Other Option") {
      setOtherOption(e.target.checked);
    }
    if (name === "require") {
      setRequire(e.target.checked);
    }
    if (name === "audio video") {
      setAudioVideo(e.target.checked);
    }
  };
  const handleCreate = () => {
    let final= {
        option: all_option,
        multi_choice:multi_choice,
        other_option:other_option,
        require:require,
        question:question
    }
    handleAddQuestion(final);
    handleCloseQuestion();
    setAllOpton([])

  };
  const hanldleOption = (e, index) => {
    let all_op = [...all_option];
    all_op[index] = e.target.value;
    setAllOpton(all_op);
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
                onChange={(e)=>setQuestion(e.target.value)}
              />
            </div>
            <div>
              <h3>A1</h3>
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
