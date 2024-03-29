import React from "react";
import heart from "../../assets/img/heart.png";
import report from "../../assets/img/report.png";
import search from "../../assets/img/search.png";
import user_blue from "../../assets/img/user_blue.png";
import speaker from "../../assets/img/speaker.png";
import aids from "../../assets/img/aids.png";

const Sampling = ({sampling,setSampling}) => {
  const sampling_list =[
    {
      type: "Awareness",
      avatar: speaker,
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type: "Attitudes & Usage",
      avatar: heart,
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type: "Customer Satisfaction & Lo...",
      avatar:user_blue,
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type: "Opinion Survey",
      avatar: user_blue,
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type: "Advertising Testing",
      avatar: aids,
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    },
    {
      type: "In Use Product Testing",
      avatar:search,
      description:
        "This would be the level of Brand awareness amongst a specific setor profile of consumers. This is a good measure of a target consumer's ability to recognize and associate with the brand in terms of image, product/service.",
    }
  ]
  const handleSampling = (data) =>{
    setSampling(data)
  }
  return (
    <div>
      <div className="container position-relative mt-3">
        <h3 className="text-gray text-center">Sampling Methodology</h3>
        <div className="text-gray text-center">
          {" "}
          <small>What type of Sampling would you like to conduct?</small>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 mt-3">
            <div className="row">
            {
                sampling_list.map((data,index)=>{
                  return(
                    <div className="col-sm-4 my-2">
                    <div className="card" onClick={()=>handleSampling(data)}>
                      <div className="card-header d-flex justify-content-between">
                        <div className="d-flex">
                        <input
                            type="radio"
                            name="Online Surveys"
                            onChange={() => handleSampling(data)}
                          />
                        <div className="job-card-header">{data.type}</div>
                        </div>
                        <img src={speaker} />
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

export default Sampling;
