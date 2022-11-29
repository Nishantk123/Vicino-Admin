import React from "react";

const ProjectName = ({project_name,handleProjectName}) =>{
    return(
        <div className="container position-relative mt-3">
            <h3 className="text-gray text-center">Give Your Project A Name</h3>
            <div className="row justify-content-center">
                <div className="col-sm-6 mt-3">
                    <input 
                        className="form-control"
                        placeholder="Enter your project name" 
                        value={project_name}
                        onChange={(e)=>handleProjectName(e)}
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectName;