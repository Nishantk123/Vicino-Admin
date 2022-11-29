import React, { useState } from "react";
import Brands from "./Brands";
import BriefingDocument from "./BriefingDocument";
import Demographic from "./Demographic";
import Location from "./Location";
import Preview from "./Preview";
import ProjectName from "./ProjectName";
import Questionnaire from "./Questionnaire";
import ResearchType from "./ResearchType";
import Sampling from "./Sampling";
import Sectioning from "./Sectioning";
import StepList from "./StepList";
import StudyObject from "./StudyObject";
import TimeFrame from "./TimeFrame";

const CreateJobPool = () => {
  const [step, setStep] = useState(1);
  const [project_name, setProjectName] = useState("");
  const [brand_name, setBrandName] = useState("");
  const [locaton,  setLocation] = useState([])

  const handleProjectName = (e) => {
    setProjectName(e.target.value);
  };
  const handleBrandName = (e) => {
    setBrandName(e.target.value);
  };
  const handleLocation = e =>{

  }
  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNextStep = () => {
    if (step < 12) {
      setStep(step + 1);
    }
  };

  return (
    <div className="position-relative">
      <StepList step={step} />
      <div className="step-content-area">
        {step === 1 && (
          <ProjectName
            project_name={project_name}
            handleProjectName={handleProjectName}
          />
        )}
        {step === 2 && (
          <Brands brand_name={brand_name} handleBrandName={handleBrandName} />
        )}
        {step === 3 && <ResearchType />}
        {
            step === 4 && <StudyObject />
        }
        {
            step === 5 && <Location />
        }
        {
            step === 6 && <BriefingDocument />
        }
        {
            step === 7 && <Sampling />
        }
        {
            step === 8 && <Demographic />
        }
        {
            step === 9 && <Sectioning />
        }
        {
            step === 10 && <Questionnaire />
        }
        {
            step === 11 && <TimeFrame />
        }
        {
            step === 12 && <Preview />
        }
      </div>
      <div className="step-footer pt-2">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-6 d-flex justify-content-between">
              <button
                className="btn btn-outline-primary"
                onClick={handleBackStep}
              >
                Back
              </button>
              <button className="btn btn-primary" onClick={handleNextStep}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobPool;
