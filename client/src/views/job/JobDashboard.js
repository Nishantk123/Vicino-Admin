import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import deleteicon from "../../assets/img/delete.png";
import approve from "../../assets/img/approve.png";

const JobDashboard = () => {
  const history = useHistory();
  const [job_list, setJobList] = useState([]);
  const getjobPool = () => {
    const user_detail = JSON.parse(window.sessionStorage.getItem("user_data"));
    const company_name = user_detail && user_detail.company_name;
    const user_role = user_detail && user_detail.user_role;
    console.log(company_name);

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

  const handlejobDashboard = (job_id, status, user_email) => {
    const data = {
      type: "approved",
      user_email: user_email,
      job_id: job_id,
      status: status,
    };
    axios({
      method: "POST",
      url: process.env.REACT_APP_API + "/job/update_job",
      data: data,
    }).then((res) => {
      getjobPool();
    });
  };
  console.log(job_list);
  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <th>Job ID</th>
          <th>Project Name</th>
          <th>User email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {job_list.length > 0 &&
            job_list.map((job, index) => {
              return job.apply && job.apply.length > 0 ? (
                job.apply.map((job_apply, index) => {
                  return (
                    <tr>
                      <td>{job && job._id}</td>
                      <td>{job && job.project_name}</td>
                      <td>{job_apply}</td>
                      <td>
                        <div className="d-flex">
                          <img
                            src={approve}
                            style={{ height: "24px", cursor: "pointer" }}
                            onClick={() =>
                              handlejobDashboard(job._id, "approved", job_apply)
                            }
                          />
                          <img
                            src={deleteicon}
                            style={{ height: "24px", cursor: "pointer" }}
                            onClick={() =>
                              handlejobDashboard(job._id, "reject", job_apply)
                            }
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="text-center">No data found</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default JobDashboard;
