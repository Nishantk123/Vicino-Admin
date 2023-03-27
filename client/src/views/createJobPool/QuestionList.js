import React from 'react';
import _ from "lodash";
import remove from '../../assets/img/remove.png'
const QuestionList = ({question_list=[],handleShowQuestionList, handleDeleteQuestion}) =>{

    return(
        <div className='question_box'>
            {
                _.size(question_list)>0&&
                _.map(question_list, (data, index)=>{
                    // console.log(data)
                    return(
                        <div className=' d-flex justify-content-between question_list' key={index}>
                         <div  className="w-100"onClick={()=>handleShowQuestionList(data, index)}>{_.get(data,"question","")}</div>
                         <img src={remove} className="question_remove_icon" onClick={()=>handleDeleteQuestion(index)} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default QuestionList;