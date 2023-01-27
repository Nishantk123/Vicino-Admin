import React from "react";

const Question = ({q_data, page}) =>{

    const getQuestionUI = (q_data) =>{
        let all_op = q_data.option
        if(q_data.answer){
            return(
                <div>
                    <h3>Q{page}. {q_data.question}</h3>
                    <textarea className="form-control"></textarea>
                </div>
            )
        }
        if (q_data.multi_choice && !q_data.answer){
            return(
                <div>
                    <h3>Q{page}. {q_data.question}</h3>
                    {
                      all_op.map((data,index)=>{
                        return(
                            <div className="px-3">
                            <input type="checkbox"  className="my-2 me-2" />
                            {data}
                            </div>
                        )
                      })  
                    }
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3> Q{page}. {q_data.question}</h3>
                    {
                      all_op.map((data,index)=>{
                        return(
                            <div className="px-3">
                            <input type="radio" name="option"  className=" my-2 me-2" />
                            {data}
                            </div>
                        )
                      })  
                    }
                </div>
            )
        }
    }
    return(
        <div>
            {q_data&&getQuestionUI(q_data)}
        </div>
    )
}


export default Question;