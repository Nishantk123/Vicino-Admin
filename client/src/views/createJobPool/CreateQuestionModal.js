import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import OtpInput from "react18-input-otp";
import axios from "axios";
import _, { forEach } from "lodash";
import close from "../../assets/img/close.png";
import QuestionList from "./QuestionList";
import QuestionTypeModal from "./QuestionTypeModal";

const CreateQuestionModal = ({
  open,
  question_list,
  handleCloseQuestion,
  handleAddQuestion,
  handleDeleteQuestion,
}) => {
  const [q_range, setQrange] = useState(1);
  const [r_range, setRowRange] = useState(2);
  const [c_range, setCRange] = useState(1);
  const [multi_choice, setMultichoice] = useState(true);
  const [singal_choice, setSingalChoice] = useState(true);
  const [other_option, setOtherOption] = useState(true);
  const [audio_video, setAudioVideo] = useState(false);
  const [text_answer, setTextAnswer] = useState(false);
  const [require, setRequire] = useState(false);
  const [all_option, setAllOpton] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [matrix, setMatix] = useState(false);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("create_question");
  const [edit_index, setEditIndex] = useState(0);
  const [multi_matrix, setMultiMatrix] = useState(false);
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
  useEffect(() => {}, []);
  useEffect(() => {
    if (matrix) {
      // setAllOpton([["",false]])
      handleRow();
    } else {
      // setAllOpton()
    }
  }, [r_range, matrix]);

  useEffect(() => {
    if (matrix) {
      if (c_range > 1) {
        handleColumn();
      }
    }
  }, [c_range, matrix]);
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
      setOtherOption(false);
      setRequire(false);
      setAudioVideo(false);
      setAudioVideo(false);
      setTextAnswer(false);
      setAllOpton([]);
      setMatix(false);
    }
    if (name === "Other Option") {
      setOtherOption(e.target.checked);
      setAllOpton([]);
    }
    if (name === "require") {
      setRequire(e.target.checked);
      setAllOpton([]);
    }
    if (name === "audio video") {
      setAudioVideo(e.target.checked);
      setAllOpton([]);
      setMultichoice(false);
      setTextAnswer(false);
      setMatix(false);
    }
    if (name === "text field") {
      setTextAnswer(e.target.checked);
      setAllOpton([]);
      setMultichoice(false);
      setAudioVideo(false);
      setMatix(false);
    }
    if (name === "multi_matrix") {
      setMultiMatrix(e.target.checked);
      // setMultichoice(false);
      // setAudioVideo(false);
      // setTextAnswer(false);
      if (e.target.checked) {
        // handleAddRow(r_range);
        // handleAddColumn(c_range);
      } else {
        // setAllOpton([]);
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
      multi_matrix: multi_matrix,
    };
    handleAddQuestion(final, type, edit_index);
    // handleCloseQuestion();
    setAllOpton([]);
    setMatix(false);
    setRowRange(2);
    setCRange(1);
    setQrange(1);
    setOtherOption(false);
    setAllOpton([]);
    setTextAnswer(false);
    setOtherOption(false);
    setAudioVideo(false);
    setMultichoice(false);
  };
  const hanldleOption = (e, index) => {
    let all_op = [...all_option];
    all_op[index] = e.target.value;
    setAllOpton(all_op);
  };
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const handleMatrixHeader = (e, index) => {
    let all_op = [...all_option];
    all_op[0][index + 1] = e.target.value;
    setAllOpton(all_op);
  };
  const hanldleMatrixOption = (e, index, c_index, type) => {
    let all_op = [...all_option];
    if (type === "first") {
      all_op[index + 1][0] = e.target.value;
    } else {
      // all_op[index][c_index+1] = e.target.checked;
    }

    setAllOpton(all_op);
  };
  const handleRow = () => {
    let all_op = [];
    if (all_option && all_option.length > 0) {
      all_op = [...all_option];
    } else {
      all_op = [[""]];
      _.forEach(_.range(c_range), (c, cindex) => {
        all_op[0].push(false);
      });
    }
    if (r_range > all_op.length) {
      let c_data = [""];
      _.forEach(_.range(c_range), (c, cindex) => {
        c_data.push(false);
      });

      all_op.push(c_data);
    }
    setAllOpton(all_op);
  };
  const handleColumn = () => {
    if (all_option) {
      let all_op = [...all_option];
      _.forEach(_.range(r_range), (a, rindex) => {
        let c_data = [all_op && all_op[rindex] && all_op[rindex][0]];
        _.forEach(_.range(c_range), (c, cindex) => {
          c_data.push(false);
        });
        if (rindex > 0) {
          all_op[rindex] = c_data;
        } else {
          let rc_data = all_op[rindex];
          if (c_range + 1 > (rc_data && rc_data.length)) {
            rc_data.push(false);
          }
          all_op[rindex] = rc_data;
        }
      });
      setAllOpton(all_op);
    }
  };
  const handleAddColumn = () => {
    setCRange(c_range + 1);
  };
  const handleAddRow = () => {
    setRowRange(r_range + 1);
  };

  const handleremoveColumn = (index) => {
    setCRange(c_range - 1);
    let allOp = [...all_option];
    console.log(allOp);
    _.forEach(allOp, (data, aindex) => {
      let rc_data = data;
      rc_data.splice(index + 1, 1);
      allOp[aindex] = rc_data;
    });
    setAllOpton(allOp);
  };
  const handleremoveRow = (index) => {
    setRowRange(r_range - 1);
    if (r_range > 1) {
      let allOp = [...all_option];
      allOp.splice(index + 1, 1);
      setAllOpton(allOp);
    }
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
        <div className="container-fluid matrix-container">
          <div className="d-flex justify-content-end">
            <div>
              <div className="text-primary my-2" onClick={handleAddColumn}>
                <strong>Add Column</strong>
              </div>
            </div>
          </div>
          <table className="table table-responsive ">
            <tr className=" my-2">
              <td me="3">
                <input
                  className="custom_question_input me-2"
                  key={"dwdl"}
                  placeholder=""
                  value=""
                />
              </td>
              {_.map(_.range(c_range), (col_data, col_index) => {
                return (
                  <td>
                    <div>
                      {col_data > 0 ? (
                        <img
                          src={close}
                          className="questionnair_close_col_icon"
                          onClick={() => handleremoveColumn(col_index)}
                        />
                      ) : (
                        <div className="questionnair_close_col_icon"></div>
                      )}
                    </div>
                    <input
                      className="custom_question_input "
                      key={col_index}
                      placeholder={"Col " + (col_index + 1)}
                      onChange={(e) => handleMatrixHeader(e, col_index)}
                      value={
                        all_option &&
                        all_option[0] &&
                        all_option[0][col_index + 1]
                          ? all_option[0][col_index + 1]
                          : ""
                      }
                    />
                  </td>
                );
              })}
            </tr>
            {_.map(_.range(r_range - 1), (data, index) => {
              return (
                <tr className=" my-2 questionnair_content" key={index}>
                  <td className="d-flex">
                    {data > 0 ? (
                      <img
                        src={close}
                        className="questionnair_close_icon"
                        onClick={() => handleremoveRow(index)}
                      />
                    ) : (
                      <div className="questionnair_close_icon">{""}</div>
                    )}
                    <input
                      className="custom_question_input me-2 w-100"
                      key={index}
                      placeholder={"Row " + (index + 1)}
                      value={
                        all_option &&
                        all_option[index + 1] &&
                        all_option[index + 1][0]
                      }
                      onChange={(e) => {
                        hanldleMatrixOption(e, index, null, "first");
                      }}
                    />
                  </td>
                  {_.map(_.range(c_range), (c_data, c_index) => {
                    if (multi_matrix) {
                      return (
                        <td className="ps-3">
                          <input
                            type="checkbox"
                            name={"Row " + (c_index + 1)}
                            key={c_index}
                            placeholder=""
                            className="question_radio   me-2"
                            // value={
                            //   c_value
                            // }
                            onChange={(e) => {
                              hanldleMatrixOption(e, index, c_index, "");
                            }}
                          />
                        </td>
                      );
                    } else {
                      return (
                        <td className="ps-3">
                          <input
                            type="radio"
                            name={"Row " + (index + 1)}
                            key={c_index}
                            placeholder=""
                            className="question_radio   me-2"
                            // value={
                            //   c_value
                            // }
                            onChange={(e) => {
                              hanldleMatrixOption(e, index, c_index, "");
                            }}
                          />
                        </td>
                      );
                    }
                  })}

                  {/* <img
                  src={close}
                  className="close_question-icon"
                  onClick={() => handleremoveQuestion(index)}
                /> */}
                </tr>
              );
            })}
          </table>
          <div className="" onClick={handleAddRow}>
            Add Row
          </div>
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
                  value={(all_option && all_option[index]) || ""}
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
  const handlequestionTypeMOdal = () => {};
  const handleCloseQuestionModal = () => {
    setShow(false);
  };

  const handleQuestiionType = (name) => {
    console.log(name);
    setType("create_question");
    setCRange(1);
    setRowRange(2);
    setQrange(1);
    setQuestion("");
    setMultiMatrix(false);
    if (name === "multi") {
      setMultichoice(true);
      setTextAnswer(false);
      setSingalChoice(false);
      setMatix(false);
      setShow(false);
      setAllOpton([]);
      setType("create_question");
    } else if (name === "text") {
      setMultichoice(false);
      setTextAnswer(true);
      setSingalChoice(false);
      setMatix(false);
      setShow(false);
      setAllOpton([]);
      setType("create_question");
    } else if (name === "radio") {
      setMultichoice(true);
      setTextAnswer(false);
      setSingalChoice(false);
      setMatix(false);
      setShow(false);
      setAllOpton([]);
      setType("create_question");
    } else if (name === "matrix") {
      console.log("inside");
      setMultichoice(false);
      setTextAnswer(false);
      setSingalChoice(false);
      setMatix(true);
      setShow(false);
      setAllOpton([]);

      setType("create_question");
    }
  };
  console.log(matrix);
  const handleShowQuestionList = (data, index) => {
    let all_edit_option = _.get(data, "option", []);
    let edit_multi_choice = _.get(data, "multi_choice", false);
    let edit_other_option = _.get(data, "other_option", false);
    let edit_require = _.get(data, "require", false);
    let edit_text_answer = _.get(data, "answer", false);
    let edit_matrix = _.get(data, "matrix", false);
    let edit_multi_matrix = _.get(data, "multi_matrix", false);
    let edit_question = _.get(data, "question", false);
    setType("edit_question");
    setEditIndex(index);
    setAllOpton(all_edit_option);
    setMultichoice(edit_multi_choice);
    setTextAnswer(edit_text_answer);
    setMatix(edit_matrix);
    setRequire(edit_require);
    setOtherOption(edit_other_option);
    setQuestion(edit_question);
    setMultiMatrix(edit_multi_matrix);
    if (_.size(all_edit_option) > 0) {
      setRowRange(_.size(all_edit_option));
      setQrange(_.size(all_edit_option));
      setCRange(_.size(all_edit_option[0]) - 1);
    }
  };
  console.log(all_option);
  return (
    <Modal isOpen={open} style={customStyles} contentLabel="Example Modal ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="question-contaoner bg-light">
              <button
                className="btn btn-primary w-100"
                onClick={() => {
                  setShow(true);
                }}
              >
                Add question
              </button>
              {
                <QuestionList
                  question_list={question_list}
                  handleShowQuestionList={handleShowQuestionList}
                  handleDeleteQuestion={handleDeleteQuestion}
                />
              }
            </div>
          </div>
          <div className="col-sm-7 bg-white p-3">
            {true ? (
              <div>
                <div className="">
                  <h3>Question</h3>
                  <input
                    placeholder="Please Write a Question"
                    className="form-control"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>
                <div>
                  <h3>A1</h3>
                  <div>{getQuestionUI()}</div>
                </div>
                <div className="row  justify-content-center mt-5">
                  <div className="col-sm-6">
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleCreate}
                    >
                      CreateQuestionnaire
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="btn btn-secondary w-100"
                      onClick={handleCloseQuestion}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>Hello</div>
            )}
          </div>

          <div className="col-sm-2 ">
            <div className="bg-white p-2">
              <div className="">
                <h4 className="bg-gray text-white text-center">
                  TYPE SELECTION
                </h4>
                <h5 className="text-gray my-3">SETTINGS</h5>
                {matrix && (
                  <div className="d-flex justify-content-between my-3">
                    <div>Matrix</div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked={multi_matrix}
                        onChange={(e) => handleSetting(e, "multi_matrix")}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <QuestionTypeModal
          show={show}
          handleQuestiionType={handleQuestiionType}
          hanldeClose={handleCloseQuestionModal}
        />
      </div>
    </Modal>
  );
};

export default CreateQuestionModal;
