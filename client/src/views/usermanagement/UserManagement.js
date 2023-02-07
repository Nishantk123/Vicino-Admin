import React, { useEffect, useState } from "react";
import axios from "axios";
import feature from "../../assets/img/feature.png";
import menu from "../../assets/img/menu.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import deleteicon from "../../assets/img/delete.png";
import editicon from "../../assets/img/edit.jpg";
import eye from "../../assets/img/eye.svg";
import AddUserModal from "./AddUserModal";

const UserManagement = () => {
  const [user_list, setUserList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_role, setUserRole] = useState("");
  const [show, setShow] = useState(false)
  const getUserList = () => {
    const user_detail = JSON.parse( window.sessionStorage.getItem("user_data"))
    const company_name = user_detail&&user_detail.company_name;
    const user_role = user_detail&&user_detail.user_role;
    axios.get(process.env.REACT_APP_API+"/user/users",{ params: { company_name: company_name, role:user_role }}).then((res) => {
      if (res.data) {
        setUserList(res.data);
      }
    });
  };
  useEffect(() => {
    getUserList();
  }, []);
  const handleClose = () =>{
    setShow(false)
  }
  const handleChange = (e, name) => {
    if (name === "name") {
      setName(e.target.value);
    }
    if (name === "email") {
      setEmail(e.target.value);
    }
    if (name === "password") {
      setPassword(e.target.value);
    }
    if (name === "user_role") {
      setUserRole(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (name && email && user_role && password) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("user_role", user_role);
      formData.append("first_name", name);
      formData.append("middle_name", "");
      formData.append("last_name", "");
      formData.append("mobile", "");
      formData.append("company_name", "");
      formData.append("company_type", "");
      formData.append("cin", "");
      formData.append("msme", false);
      formData.append("pan", "");
      formData.append("gst", "");
      formData.append("c_address1", "");
      formData.append("c_address2", "");
      formData.append("b_landmark", "");
      formData.append("c_city", "");
      formData.append("c_state", "");
      formData.append("b_address1", "");
      formData.append("b_address2", "");
      formData.append("b_landmark", "");
      formData.append("b_city", "");
      formData.append("b_state", "");
      formData.append("company_category", "");
      formData.append("annual_sales", "");
      formData.append("website", "");
      formData.append("instagram", "");
      formData.append("facebook", "");
      formData.append("employee_no", "");
      formData.append("company_across_india", false);
      formData.append("family_name", "");
      formData.append("logo", "");
      axios({
        method: "POST",
        url: process.env.REACT_APP_API+"/user/register",
        data: formData,
      }).then((res) => {
        console.log("test", res);
        getUserList();
        handleClose();
      });
    }
  };
  return (
    <div className="p-3">
      <div className="card filter-card mb-5">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              {/* <select className="form-control">
                <option>select</option>
                <option>All</option>
                <option>Standred</option>
                <option>Express</option>
              </select>
              <input className="form-control mx-3" placeholder="Search" /> */}
            </div>
            <div className="d-flex">
              {/* <div className="py-2">From</div>
              <input type="date" className="form-control mx-2" />
              <div className="py-2">To</div>
              <input type="date" className="form-control mx-2" /> */}
            </div>
            <div div className="border-left-1">
              {/* <img src={feature} className="ms-3" />
              <img src={menu} className="mx-2" /> */}
              <div className="btn btn-primary" onClick={()=>setShow(true)}>+ Add User</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex mb-3">
            <div className="me-2 py-2">Show</div>
            <select>
              <option value="10">10</option>
              <option value="20">10</option>
              <option value="50">10</option>
              <option value="100">10</option>
            </select>
            <input className="form-control w-25 mx-2" placeholder="Search" />
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Job Id</th>
                <th>Username</th>
                <th>User Type</th>
                <th>Reg. Date</th>
                <th>Company Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user_list.length > 0 &&
                user_list.map((data, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.job_id}</td>
                      <td>{data.first_name}</td>
                      <td>{data.user_type}</td>
                      <td>{data.reg_date}</td>
                      <td>{data.company_name}</td>
                      <td>{data.mobile}</td>
                      <td>{data.email}</td>
                      <td>{data.status}</td>
                      <td>
                        <div className="d-flex">
                          <img src={editicon} style={{ height: "36px" }} />
                          <img src={eye} />
                          <img src={deleteicon} style={{ height: "24px" }} />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <div>Showing 1 to 10 of 10 entries</div>
            <div>
              <Stack spacing={2}>
                <Pagination
                  count={user_list.length}
                  color="primary"
                  //   onChange={handlePagechange}
                />
              </Stack>
            </div>
          </div>
        </div>
        <AddUserModal
          open={show}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        ;
      </div>
    </div>
  );
};

export default UserManagement;
