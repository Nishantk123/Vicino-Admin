import React, { useCallback, useState } from "react";
import Dropzone from "./Dropzone";
import pdf from "../../assets/img/pdf.png";
import csv from "../../assets/img/csv.png";
import xlxs from "../../assets/img/test.png";
const BriefingDocument = ({briefing_file,setBriefingFile}) => {
  const [selected_file, setSelected_file] = useState([]);

  // onDrop function
  const onDrop = useCallback((acceptedFiles) => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
    console.log(acceptedFiles);
    setSelected_file(acceptedFiles);
    setBriefingFile(acceptedFiles)
  }, []);
  const getfileUI = () => {
    let file_name = selected_file && selected_file[0].name;
    let file_type = file_name.split(".")[1];
    let file_image = pdf;
    if (file_type === "csv") {
      file_image = csv;
    } else if (file_type === "xls" || file_type === "xlsx") {
      file_image = xlxs;
    } else if (file_type === "pdf") {
      file_image = pdf;
    }
    return (
      <div>
        <div className="file_container"> 
          <img src={file_image} className="file_img" />
        </div>
        <div className="text-center my-2">{file_name}</div>
      </div>
    );
  };
  return (
    <div className="container position-relative mt-3">
      <h3 className="text-gray text-center">Briefing Document</h3>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="drop-container">
            <Dropzone onDrop={onDrop} accept={"image/*"} />
          </div>
        </div>
      </div>
      <div className="">{selected_file.length > 0 && getfileUI()}</div>
    </div>
  );
};

export default BriefingDocument;
