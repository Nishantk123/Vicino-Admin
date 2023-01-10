import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Question from "../questionnair/Question";
import CreateQuestionModal from "./CreateQuestionModal";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Questionnaire = ({setQuestionnair}) => {
  const [open_modal, setOpenModal] = useState(false);
  const [question_list, setQuestionList] = useState([]);
  const [page, setPage] = useState(1);

  const handleCloseQuestion = () => {
    setOpenModal(false);
  };
  const handleAddQuestion = (data) => {
    let q_list = [...question_list];
    q_list.push(data);
    setQuestionList(q_list);
    setQuestionnair(q_list)
  };
  const handlePagechange = (event, page) => {
    console.log(page);
    setPage(page);
  };
  console.log(question_list);
  return (
    <div className="container position-relative mt-3">
      <div className="row justify-content-center">
        <div className="col-sm-6 mt-2">
          <h3 className="text-center">Develop Your Questionnaire</h3>
          <div className="text-gray text-center">
            <small>Please Create your Questionnaire</small>
          </div>
        </div>
      </div>
      <div className="row  justify-content-center mt-3">
        <div className="col-sm-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => setOpenModal(true)}
          >
            + Develop Your Questionnaire
          </button>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-secondary w-100">
            Import From Template
          </button>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="my-3">
              <Question q_data={question_list[page - 1]} page={page} />
            </div>
          {question_list.length>0&&<Stack spacing={2}>
            <Pagination
              count={question_list.length}
              color="primary"
              onChange={handlePagechange}
            />
          </Stack>}
          </div>

        </div>
      </div>

      <CreateQuestionModal
        open={open_modal}
        handleCloseQuestion={handleCloseQuestion}
        handleAddQuestion={handleAddQuestion}
      />
    </div>
  );
};

export default Questionnaire;
