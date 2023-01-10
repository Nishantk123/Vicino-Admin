import React from "react";

const Network = () =>{
    const network_data = [
        {
            name:"Neha Gaurav",
            email_id:"neha@gmail.com",
            contact:"9876452345",
            address:"Mumbai Maharastra India",
            total_sample:"NA",
            per_day_sample:"NA",
            Status:"Approved"
        },
        {
            name:"Sidharath Gaurav",
            email_id:"neha@gmail.com",
            contact:"9876452345",
            address:"Mumbai Maharastra India",
            total_sample:"NA",
            per_day_sample:"NA",
            Status:"Approved"
        },
        {
            name:"Neha kamara",
            email_id:"neha@gmail.com",
            contact:"9876452345",
            address:"Mumbai Maharastra India",
            total_sample:"NA",
            per_day_sample:"NA",
            Status:"Approved"
        },
        {
            name:"Gatin das",
            email_id:"neha@gmail.com",
            contact:"9876452345",
            address:"Mumbai Maharastra India",
            total_sample:"NA",
            per_day_sample:"NA",
            Status:"Approved"
        },
        {
            name:"Mahesh Sachin",
            email_id:"neha@gmail.com",
            contact:"9876452345",
            address:"Mumbai Maharastra India",
            total_sample:"NA",
            per_day_sample:"NA",
            Status:"Approved"
        }
    ]
    return(
        <div className="container">
            {/* <div className="card mb-5">
                <div className="card-body">
                    <h2 className="text-gray">Network</h2>
                    <div className="text-gray">
                        <small>Invite Team Members from your company or Freelancers to join your network</small>
                    </div>
                    <div className="d-flex my-3">
                        <div>
                            <h6>Email</h6>
                            <input className="form-control" placeholder="Please Enter Email" />
                        </div>
                        <div  className="ms-3">
                            <h6>Role</h6>
                            <select className="form-control ">
                                <option>Select Role</option>
                            </select>
                        </div>
                        <button className="btn btn-primary px-5 mt-4 ms-3">Invite</button>
                    </div>
                </div>
            </div> */}
            <div className="card">
                <div className="card-body">
                    <h3>My Network</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Contact info</th>
                                <th>Address</th>
                                <th>Total sample Assign</th>
                                <th style={{maxwidth: "100px"}}>Sample require to be conmpleted per day</th>
                                <th>Approval Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                network_data.map((data,index)=>{
                                    return(
                                        <tr>
                                            <td>{index +1}</td>
                                            <td><div className="network-photo"></div></td>
                                            <td>{data.name}</td>
                                            <td>{data.email_id}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.address}</td>
                                            <td>{data.total_sample}</td>
                                            <td>{data.per_day_sample}</td>
                                            <td>{data.Status}</td>


                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Network;