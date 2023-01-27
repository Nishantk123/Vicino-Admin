import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "400px",
  },
};


const AddUserModal = ({ open, handleChange, handleSubmit }) => {
  return (
    <Modal
      isOpen={open}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="">
        <h3 className="text-center">Add new user</h3>
        <input
          placeholder="Enter user name"
          className="form-control my-3"
          onChange={(e) => handleChange(e, "name")}
        />
        <input
          placeholder="Enter user email"
          className="form-control my-3"
          onChange={(e) => handleChange(e, "email")}
        />
        <select
          className="form-control my-3"
          onChange={(e) => handleChange(e, "user_role")}
        >
          <option>select</option>
          <option>agency</option>
          <option>freelance</option>
          <option>admin</option>
          <option>client</option>
        </select>
        <input
          placeholder="enter user password"
          className="form-control"
          onChange={(e) => handleChange(e, "password")}
        />
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default AddUserModal;
