import React from "react";
import _ from 'lodash';

const Question = ({ q_data, page }) => {
  const getQuestionUI = (q_data) => {
    let all_op = q_data.option;
    if (q_data.answer) {
      return (
        <div>
          <h3>
            Q{page}. {q_data.question}
          </h3>
          <textarea className="form-control"></textarea>
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
                <input type="checkbox" className="my-2 me-2" />
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
            Q{page}. {q_data.question}
          </h3>
          <table className="table table-bordered">
            <thead>
                <tr>
                {header_data &&
                header_data.length > 0 &&
                header_data.map((matrix_column, index) => {
                    return(
                    <td className="text-center"><strong>{matrix_column}</strong></td>
                    )
                })}
                </tr>
            </thead>
            <tbody>
            {all_op.map((data, index) => {
                if(index>0){
                return (
                <tr className="">
                    {data.map((c_data,index)=>{
                        if(index ===0){
                          return(
                            <td className="text-center">{c_data}</td>
                        )
                        }else{
                          if(q_data.multi_matrix){
                            return(
                              <td className="text-center">
                              <input type="checkbox" name ={data[0]} />
                            </td>
                            )
                          }else{
                            return(
                              <td className="text-center">
                                <input type="radio" name ={data[0]} />
                              </td>
                          )
                          }
                          
                        }
                        
                    })}

                </tr>
                );
                }})}

            </tbody>
          </table>
           
          
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
                <input type="radio" name="option" className=" my-2 me-2" />
                {data}
              </div>
            );
          })}
        </div>
      );
    }
  };
  return <div>{q_data && getQuestionUI(q_data)}</div>;
};

export default Question;
