import React, { useEffect, useState } from "react";
import gmap from "../../assets/img/gmap.png";

const Sectioning = ({ locaton, sectioning, setSectioning }) => {
  const [section_data, setSectonData] = useState({});
  useEffect(() => {
    if (locaton.length > 0) {
      let location_data = {};
      locaton.forEach((element) => {
        location_data[element.value] = {
          sample_size: "",
          sample_range: "",
        };
      });
      setSectonData(location_data);
    }
  }, []);
  const handleChange = (e, field, locaton) => {
    let data = { ...section_data };
    data[locaton][field] = e.target.value;
    setSectonData(data);
  };
  const handleSave = () =>{
    setSectioning(section_data)
  }
  return (
    <div className="container position-relative mt-3">
      <h3 className="text-gray text-center">Specify Sample Coverage Area</h3>
      <div className="text-gray text-center">
        {" "}
        <small>
          Enter your sample size for a pin then move the pin to the area you
          want
        </small>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-sm-4">
          <div className="map-area">
            <img src={gmap} />
          </div>
        </div>
        <div className="col-sm-4 mt-3">
          <div className="accordion" id="accordionExample">
            {locaton.length > 0 &&
              locaton.map((data, index) => {
                return (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={"headingOne" + index}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapseOne" + index}
                        aria-expanded="true"
                        aria-controls={"collapseOne" + index}
                      >
                        {data.value}
                      </button>
                    </h2>
                    <div
                      id={"collapseOne" + index}
                      class="accordion-collapse collapse "
                      aria-labelledby={"headingOne" + index}
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <label>Sample size</label>
                        <input
                          className="form-control my-3"
                          placeholder="enter sample size"
                          onChange={(e) =>
                            handleChange(e, "sample_size", data.value)
                          }
                        />
                        <label>sample Range</label>
                        <input
                          className="form-control my-3"
                          placeholder="enter sample range"
                          onChange={(e) =>
                            handleChange(e, "sample_range", data.value)
                          }
                        />
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-primary" onClick={handleSave}>save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Pune
                </button>
              </h2>
            </div> */}
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Mumbai
                </button>
              </h2>
            </div> */}
            {/* <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Delhi
                </button>
              </h2>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectioning;
