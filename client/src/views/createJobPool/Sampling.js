import React from "react";
import heart from "../../assets/img/heart.png";
import report from "../../assets/img/report.png";
import search from "../../assets/img/search.png";
import user_blue from "../../assets/img/user_blue.png";
import speaker from "../../assets/img/speaker.png";
import aids from "../../assets/img/aids.png";

const Sampling = () => {
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
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">Awareness</div>
                    <img src={speaker} />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      This would be the level of Brand awareness amongst a
                      specific setor profile of consumers. This is a good
                      measure of a target consumer's ability to recognize and
                      associate with the brand in terms of image,
                      product/service.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">Attitudes & Usage</div>
                    <img src={heart} />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      This would be the level of Brand awareness amongst a
                      specific setor profile of consumers. This is a good
                      measure of a target consumer's ability to recognize and
                      associate with the brand in terms of image,
                      product/service.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">
                      Customer Satisfaction & Lo...
                    </div>
                    <img src={user_blue} />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      This would be the level of Brand awareness amongst a
                      specific setor profile of consumers. This is a good
                      measure of a target consumer's ability to recognize and
                      associate with the brand in terms of image,
                      product/service.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">Opinion Survey</div>
                    <img src={report} />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      This would be the level of Brand awareness amongst a
                      specific setor profile of consumers. This is a good
                      measure of a target consumer's ability to recognize and
                      associate with the brand in terms of image,
                      product/service.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">Advertising Testing</div>
                    <img src={aids} />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      This would be the level of Brand awareness amongst a
                      specific setor profile of consumers. This is a good
                      measure of a target consumer's ability to recognize and
                      associate with the brand in terms of image,
                      product/service.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">
                      In Use Product Testing
                    </div>
                    <img src={search} />
                  </div>
                  <div className="card-body">
                    <small className="text-center">
                      This would be the level of Brand awareness amongst a
                      specific setor profile of consumers. This is a good
                      measure of a target consumer's ability to recognize and
                      associate with the brand in terms of image,
                      product/service.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sampling;
