import React from "react";
import icon_brand from "../../assets/img/icon_brand.png";
import icon_jobs from "../../assets/img/icon_jobs.png";
import icon_questions from "../../assets/img/icon_questions.png";
import icon_reports from "../../assets/img/icon_reports.png";
import icon_sponcers from "../../assets/img/icon_sponcers.png";
import icon_users from "../../assets/img/icon_users.png";
import { useHistory } from "react-router-dom";

const MainDashboard = () => {
  const history = useHistory();

  return (
    <div>
      <div className="container px-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="card dashboard-card">
              <div className="card-body" onClick={() => history.push("/dashboard/job-pool")}>
                <div
                  className="dashboard_icon"
                  
                >
                  <img src={icon_jobs} />
                </div>
                <h3 className="text-primary">Job Pool</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card dashboard-card">
              <div className="card-body">
                <div className="dashboard_icon">
                  <img src={icon_questions} />
                </div>
                <h3 className="text-primary">Questionnaires</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card dashboard-card">
              <div className="card-body " onClick={() => history.push("/dashboard/user-management")}>
                <div className="dashboard_icon">
                  <img src={icon_users} />
                </div>
                <h3 className="text-primary" >User Management</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card dashboard-card">
              <div className="card-body">
                <div className="dashboard_icon">
                  <img src={icon_brand} />
                </div>
                <h3 className="text-primary">Companies</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card dashboard-card">
              <div className="card-body">
                <div className="dashboard_icon">
                  <img src={icon_reports} />
                </div>
                <h3 className="text-primary">Job Reports</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card dashboard-card">
              <div className="card-body">
                <div className="dashboard_icon">
                  <img src={icon_sponcers} />
                </div>
                <h3 className="text-primary">Account Management</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
