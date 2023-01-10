import React from "react";

const Preview = ({ preview_data }) => {
  // project_name,
  //     brand_name,
  //     locaton,
  //     research_type,
  //     study_object,
  //     sampling,
  //     demographic,
  //     sectioning,
  //     questionnair,
  //     time_frame,
  return (
    <div className="container position-relative mt-3">
      <div className="card">
        <div className="card-header">
          <button className="btn btn-outline-primary">Back</button>
        </div>
        <div className="card-body">
          <div className="text-center">PROJECT NAME</div>
          <h3 className="text-center text-gray">{preview_data.project_name}</h3>
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="row my-3">
                <div className="col-sm-3">
                  <div>PROJECT CATEGORY </div>
                  <div>Banking and Finance Industry</div>
                </div>
                <div className="col-sm-3 preview-border-left">
                  <div>BRAND TO BE STUDIED</div>
                  <div>{preview_data.brand_name}</div>
                </div>
                <div className="col-sm-3 preview-border-left">
                  <div>LOCATION FOR THE STUDY</div>
                  <div>
                    {preview_data.locaton &&
                      preview_data.locaton.length > 0 &&
                      preview_data.locaton.map((data, index) => (
                        <span>{data.value}</span>
                      ))}
                  </div>
                </div>
                <div className="col-sm-3 preview-border-left">
                  <div>BRIEFING DOCUMENT</div>
                  <div>Download</div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-sm-4">
                  <h6>RESEARCH TYPE</h6>
                  <div className="card">
                    <div className="card-header">
                      {preview_data.research_type &&
                        preview_data.research_type.title}
                    </div>
                    <div className="card-body">
                      {preview_data.research_type &&
                        preview_data.research_type.description}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <h6>STUDY OJBECTIVE</h6>
                  <div className="card">
                    <div className="card-header">
                      {preview_data.study_object &&
                        preview_data.study_object.title}
                    </div>
                    <div className="card-body">
                      {preview_data.study_object &&
                        preview_data.study_object.description}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <h6>RSAMPLING METHODOLOGY</h6>
                  <div className="card">
                    <div className="card-header">
                      {preview_data.sampling && preview_data.sampling.title}
                    </div>
                    <div className="card-body">
                      {preview_data.sampling &&
                        preview_data.sampling.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center my-2">
                <strong>SAMPLING METHODOLOGY</strong>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <table className="table table-bordered ">
                    <tbody>
                      <tr>
                        <td className="text-center" colspan="2">
                          PERSONAL DETAILS
                        </td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>
                          {preview_data.demographic &&
                            preview_data.demographic.personal_details &&
                            preview_data.demographic.personal_details.age}
                        </td>
                      </tr>
                      <tr>
                        <td>MHI</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.personal_details &&
                            preview_data.demographic.personal_details.mhi}</td>
                      </tr>
                      <tr>
                        <td>NCCS</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.personal_details &&
                            preview_data.demographic.personal_details.nccs}</td>
                      </tr>
                      <tr>
                        <td>Occupation</td>
                        <td>
                        {preview_data.demographic &&
                            preview_data.demographic.personal_details &&
                            preview_data.demographic.personal_details.occupation}
                        </td>
                      </tr>
                      <tr>
                        <td>Eduction</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.personal_details &&
                            preview_data.demographic.personal_details.education}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-4 ">
                  <table className="table table-bordered ">
                    <tbody>
                      <tr>
                        <td className="text-center" colspan="2">
                          FAMILY INFORMATION
                        </td>
                      </tr>
                      <tr>
                        <td>Type of Family Unit </td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.family_information &&
                            preview_data.demographic.family_information.family_unit}</td>
                      </tr>
                      <tr>
                        <td>Number of Child</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.family_information &&
                            preview_data.demographic.family_information.child_count}</td>
                      </tr>
                      <tr>
                        <td>Age of Child</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.family_information &&
                            preview_data.demographic.family_information.child_age}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-4 ">
                  <table className="table table-bordered ">
                    <tbody>
                      <tr>
                        <td className="text-center" colspan="2">
                          SPECIAL INSTRUCTION
                        </td>
                      </tr>
                      <tr>
                        <td>Behaviour</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.special_instruction &&
                            preview_data.demographic.special_instruction.behaviour}</td>
                      </tr>
                      <tr>
                        <td>Life sytle</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.special_instruction &&
                            preview_data.demographic.special_instruction.life_style}</td>
                      </tr>
                      <tr>
                        <td>Other instruction</td>
                        <td>{preview_data.demographic &&
                            preview_data.demographic.special_instruction &&
                            preview_data.demographic.special_instruction.other_instructions}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
