import React from "react";

const ResearchType = () => {
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
              <div className="col-sm-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <div className="job-card-header">Online Surveys</div>
                    <input type="checkbox" name="Online Surveys" />
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
                    <div className="job-card-header">In-Person Interviews</div>
                    <input type="checkbox" name="In-Person Interviews" />
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
                    <div className="job-card-header">Focus Groups</div>
                    <input type="checkbox" name="Focus Groups" />
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
                    <div className="job-card-header">Panel Sampling</div>
                    <input type="checkbox" name="Panel Sampling" />
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
                    <div className="job-card-header">Telephone Surveys</div>
                    <input type="checkbox" name="Telephone Surveys" />
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
                    <div className="job-card-header">Post-call Surveys</div>
                    <input type="checkbox" name="Post-call Surveys" />
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

export default ResearchType;
