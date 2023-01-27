import React, { useState } from "react";
import axios from 'axios';
import Brands from "./Brands";
import BriefingDocument from "./BriefingDocument";
import Demographic from "./Demographic";
import Location from "./Location";
import Preview from "./Preview";
import ProjectName from "./ProjectName";
import Questionnaire from "./Questionnaire";
import Research from "./ResearchType";
import Sampling from "./Sampling";
import Sectioning from "./Sectioning";
import StepList from "./StepList";
import StudyObject from "./StudyObject";
import TimeFrame from "./TimeFrame";
import { useHistory } from "react-router-dom";

const CreateJobPool = () => {
  const [step, setStep] = useState(1);
  const [project_name, setProjectName] = useState("");
  const [brand_name, setBrandName] = useState("");
  const [locaton, setLocation] = useState([]);
  const [research_type, setResearchType] = useState({});
  const [study_object, setStudyObject] = useState({});
  const [briefing_file, setBriefingFile] = useState([]);
  const [sampling, setSampling] = useState({});
  const [demographic, setDemographic] = useState({
    personal_details: {},
    family_information: {},
    special_instruction: {},
  });
  const [sectioning, setSectioning] = useState({});
  const [questionnair, setQuestionnair] = useState([]);
  const [time_frame, setTimeFrame] = useState({ start_date: "", end_date: "" });
  const history = useHistory()
  const handleProjectName = (e) => {
    setProjectName(e.target.value);
  };
  const handleBrandName = (e) => {
    setBrandName(e.target.value);
  };
  const handleLocation = (value) => {
    setLocation(value);
  };
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
  const preview_data ={
      project_name,
      brand_name,
      locaton,
      research_type,
      study_object,
      sampling,
      demographic,
      sectioning,
      questionnair,
      time_frame,
  }
  // console.log(time_frame);
  const handleCreateJob = () => {
    const data = {
      project_name,
      brand_name,
      locaton,
      research_type,
      study_object,
      sampling,
      demographic,
      sectioning,
      questionnair,
      time_frame,
    };
    axios({
      method:"POST",
      url:process.env.REACT_APP_API+"/job/create_job",
      data: data
    })
    .then(
      res=>{
        history.push("/dashboard/job-pool")
        
      }
    )
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
        {step === 3 && (
          <Research
            Type
            research_type={research_type}
            setResearchType={setResearchType}
          />
        )}
        {step === 4 && (
          <StudyObject
            study_object={study_object}
            setStudyObject={setStudyObject}
          />
        )}
        {step === 5 && (
          <Location locaton={locaton} handleLocation={handleLocation} />
        )}
        {step === 6 && (
          <BriefingDocument
            briefing_file={briefing_file}
            setBriefingFile={setBriefingFile}
          />
        )}
        {step === 7 && (
          <Sampling sampling={sampling} setSampling={setSampling} />
        )}
        {step === 8 && (
          <Demographic
            demographic={demographic}
            setDemographic={setDemographic}
          />
        )}
        {step === 9 && (
          <Sectioning
            locaton={locaton}
            sectioning={sectioning}
            setSectioning={setSectioning}
          />
        )}
        {step === 10 && <Questionnaire setQuestionnair={setQuestionnair} />}
        {step === 11 && (
          <TimeFrame time_frame={time_frame} setTimeFrame={setTimeFrame} />
        )}
        {step === 12 && <Preview preview_data={preview_data}/>}
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
              {step === 12?<button className="btn btn-primary" onClick={handleCreateJob}>
                save
              </button>
              :<button className="btn btn-primary" onClick={handleNextStep}>
                Next
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobPool;
