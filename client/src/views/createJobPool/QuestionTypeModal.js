import Modal from "react-modal";
import _, { forEach } from "lodash";
import remove from '../../assets/img/remove.png'

const QuestionTypeModal = ({show, handleQuestiionType, hanldeClose}) =>{
    const customStyles = {
        content: {
          top: "0%",
          left: "0%",
          right: "auto",
          bottom: "auto",
          marginRight: "-0%",
          transform: "translate(-0%, -0%)",
          width: "75%",
          height: "100vh",
          backgroundColor: "#f9fafb;",
        },
        overlay: {},
      };
      customStyles.overlay["zIndex"] = 10000000;
    return(
        <Modal
        isOpen={show}
        style={customStyles}
        contentLabel="Example Modal "
      >
        <div className="d-flex justify-content-end">
            <img src={remove}  onClick={hanldeClose}/>
        </div>
        <div className="container-fluid">
            <h3>Select Question type</h3>
            <div className="question_type_list" onClick={()=>handleQuestiionType("multi")}>Multiple choice</div>
            <div className="question_type_list" onClick={()=>handleQuestiionType("text")}>Text field</div>
            <div className="question_type_list" onClick={()=>handleQuestiionType("radio")}>Singal choice</div>
            <div className="question_type_list" onClick={()=>handleQuestiionType("matrix")}>Matrix</div>
        </div>

        </Modal>
    )
}

export default QuestionTypeModal;