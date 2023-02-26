import React from "react";

const ResearchType = ({ research_type, setResearchType }) => {
  const research_list = [
    {
      type: "Online Surveys",
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type:"In-Person Interviews",
      description:"This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type:"Focus Groups",
      description:"This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type:"Panel Sampling",
      description:"This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type:"Telephone Surveys",
      description:"This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type:"Post-call Surveys",
      description:"This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    }
  ];
  const handleOnChange = (data) =>{
    setResearchType(data)
  }
  return (
    <div>
      <div className="container position-relative mt-3">
        <h3 className="text-gray text-center">Select the Research Type</h3>
        <div className="text-gray text-center">
          {" "}
          <small>What type of research is this questionnaire suited for?</small>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 mt-3">
            <div className="row">
              {
                research_list.map((data,index)=>{
                  return(
                    <div className="col-sm-4 my-2">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between">
                        <div className="job-card-header">{data.type}</div>
                        <input type="radio" name="Online Surveys" onChange={()=>handleOnChange(data)} />
                      </div>
                      <div className="card-body">
                        <small className="text-center">
                         {data.description}
                        </small>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchType;
