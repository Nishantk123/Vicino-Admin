import React from "react";

const PaymentInformation = () =>{

    return(
        <div className="p-3">
            <div className="card">
                <div className="card-body">
                    <h3>Payment Information</h3>
                    <div className="row my-2">
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Account Holder Name" />
                        </div>
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Account Number" />
                        </div>
                    </div>
                    
                    <div className="row my-3">
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Bank Name" />
                        </div>
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Account Type" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Branch Name" />
                        </div>
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="NESC/ IFSC Code" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Address line 1" />
                        </div>
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Address line 2 (Optional)" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-sm-6">
                            <input className="form-control" placeholder="Landmark" />
                        </div>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary px-5">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentInformation;