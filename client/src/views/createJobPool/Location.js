import React from "react";
import {Country, State, City} from "country-state-city";
import Select from "react-select";

const Location = ({ locaton, handleLocation }) => {
    console.log(Country.getAllCountries())
    console.log(State.getAllStates())
    console.log(City.getCitiesOfCountry("IN"))
    let  all_city = City.getCitiesOfCountry("IN")
    const options = all_city.map((data,index)=>{
        return(
            {
                value:data.name,
                label:data.name
            }
        )
    })
  return (
    <div className="container position-relative mt-3">
      <h3 className="text-gray text-center">Location(s) for the study</h3>
      <div className="text-gray text-center">
        {" "}
        <small>In which city would you like to conduct your Research</small>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 mt-3">
          {/* <select className="form-control" onChange={(e) => handleLocation(e)}>
            <option>Please enter the locations</option>
            <option value="Auto Industry">Auto Industry</option>
            <option value="Auto Industry">Auto Industry</option>
            <option value="Auto Industry">Auto Industry</option>
            <option value="Auto Industry">Auto Industry</option>
          </select> */}
          <Select isMulti options={options} onChange={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Location;
