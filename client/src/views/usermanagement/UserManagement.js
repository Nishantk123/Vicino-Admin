import React, { useEffect, useState } from "react";
import axios from 'axios'
import feature from "../../assets/img/feature.png";
import menu from "../../assets/img/menu.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import deleteicon from "../../assets/img/delete.png";
import editicon from "../../assets/img/edit.jpg";
import eye from "../../assets/img/eye.svg";

const UserManagement = () => {
  const [user_list, setUserList] = useState([])
  const getUserList = () =>{
    axios.get("http://localhost:5000/user/users")
    .then(res=>{
      if(res.data){
        setUserList(res.data)
      }
    })
  }
  useEffect(()=>{
    getUserList()
  },[])

  const user_data = [
    {
      job_id: 1,
      username: "client1",
      user_type: "standard",
      reg_date: "20-10-2022",
      company_name: "vicino",
      mobile: "123456789",
      email: "peter@gmail.com",
      status: "new",
    },
    {
      job_id: 1,
      username: "client1",
      user_type: "standard",
      reg_date: "20-10-2022",
      company_name: "vicino",
      mobile: "123456789",
      email: "peter@gmail.com",
      status: "new",
    },
    {
      job_id: 1,
      username: "client1",
      user_type: "standard",
      reg_date: "20-10-2022",
      company_name: "vicino",
      mobile: "123456789",
      email: "peter@gmail.com",
      status: "new",
    },
    {
      job_id: 1,
      username: "client1",
      user_type: "standard",
      reg_date: "20-10-2022",
      company_name: "vicino",
      mobile: "123456789",
      email: "peter@gmail.com",
      status: "new",
    },
    {
      job_id: 1,
      username: "client1",
      user_type: "standard",
      reg_date: "20-10-2022",
      company_name: "vicino",
      mobile: "123456789",
      email: "peter@gmail.com",
      status: "new",
    },
    {
      job_id: 1,
      username: "client1",
      user_type: "standard",
      reg_date: "20-10-2022",
      company_name: "vicino",
      mobile: "123456789",
      email: "peter@gmail.com",
      status: "new",
    },
  ];
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
              <dib className="btn btn-primary">+ Add User</dib>
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
            <input className="form-control w-25 mx-2"  placeholder="Search"/>
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
              {user_list.length>0&&user_list.map((data, index) => {
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
                            <img src={editicon} style={{height:"36px"}} />
                            <img src={eye} />
                            <img src ={deleteicon} style={{height:"24px"}} />
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
      </div>
    </div>
  );
};

export default UserManagement;
