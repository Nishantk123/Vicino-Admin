import React from "react";

const Brands = ({brand_name,handleBrandName}) =>{
    return(
        <div className="container position-relative mt-3">
            <h3 className="text-gray text-center">Brands to be studied</h3>
            <div className="row justify-content-center">
                <div className="col-sm-6 mt-3">
                    <select
                    className="form-control"
                     onChange={(e)=> handleBrandName(e)}>
                        <option>Select Brands</option>
                        <option value="Auto Industry">Auto Industry</option>
                        <option value="Auto Industry">Auto Industry</option>
                        <option value="Auto Industry">Auto Industry</option>
                        <option value="Auto Industry">Auto Industry</option>

                    </select>
                </div>
            </div>
        </div>
    )
}

export default Brands;