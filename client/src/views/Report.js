import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import deleteicon from "../../assets/img/delete.png";
// import approve from "../../assets/img/approve.png";
import { CSVLink, CSVDownload } from "react-csv";
const Report = () => {
  const history = useHistory();
  const [job_list, setJobList] = useState([]);
  const [selected_job, setSelectedJob] = useState("");
  const [servey_data, setServeyData] = useState("");
  const [g_report, setGReport] = useState(false);
  const getjobPool = () => {
    const user_detail = JSON.parse(window.sessionStorage.getItem("user_data"));
    const company_name = user_detail && user_detail.company_name;
    const user_role = user_detail && user_detail.user_role;
    axios
      .get(process.env.REACT_APP_API + "/job/get_job", {
        params: { company_name: company_name, role: user_role },
      })
      .then((res) => {
        if (res.data) {
          setJobList(res.data);
        }
      });
  };
  useEffect(() => {
    getjobPool();
  }, []);

  useEffect(() => {
    if (selected_job) {
      generateReport();
    }
  }, [selected_job]);
  const handleGenerateReport = (job_id) => {
    setGReport(false);
    axios
      .get(process.env.REACT_APP_API + "/servey/servey/" + job_id)
      .then((res) => {
        console.log(res);
        setServeyData(res.data);
        setSelectedJob(job_id);
      });
  };
  const csvData = [["name", "email", "gender"]];

  const generateReport = () => {
    if (servey_data && servey_data.length) {
      let servery_question = servey_data[0].question;
      servery_question.forEach((d) => {
        csvData[0].push(d.question);
      });
      servey_data.forEach((data) => {
        let row_question = data.question;
        let row_data = [];
        row_data.push(data.name);
        row_data.push(data.email);
        row_data.push(data.gender);

        row_question.forEach((q) => {
          row_data.push(q.servey_detail && q.servey_detail.answer);
        });

        csvData.push(row_data);
      });
    }
    setGReport(true);
  };

  if (servey_data && servey_data.length) {
    let servery_question = servey_data[0].question;
    servery_question.forEach((d) => {
      csvData[0].push(d.question);
    });
    servey_data.forEach((data) => {
      let row_question = data.question;
      let row_data = [];
      row_data.push(data.name);
      row_data.push(data.email);
      row_data.push(data.gender);

      row_question.forEach((q) => {
        row_data.push(q.servey_detail && q.servey_detail.answer);
      });

      csvData.push(row_data);
    });
  }
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <th>Job ID</th>
          <th>Project Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {job_list.length > 0 &&
            job_list.map((job, index) => {
              return (
                <tr>
                  <td>{job && job._id}</td>
                  <td>{job && job.project_name}</td>
                  <td>
                    {selected_job === job._id && g_report ? (
                      <CSVLink data={csvData} filename={"report.csv"}>
                        Download Report
                      </CSVLink>
                    ) : (
                      <div onClick={() => handleGenerateReport(job._id)}>
                        generate_report
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
