import React from "react";
import navlogo from "../assets/img/navlogo.png";
import user from "../assets/img/user.png";
// import hmburger from "../assets/img/hmburger.png";
import hmburgur from "../assets/img/hmburgur.png";
import { useHistory } from "react-router-dom";
const CustomHeader = ({ hadleToggle }) => {
  const history = useHistory()
  const user_data = JSON.parse(window.sessionStorage.getItem("user_data"));
  const handleLogout = () =>{
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("user_data")
    history.push('/login')
  }
  return (
    <nav class="navbar bg-light custom_nav pt-0 pb-0 w-100">
      <div class="container-fluid pe-3 d-flex" >
        <a class="navbar  pt-0 pb-0">
          <div className="buger-menu-container">
            <img
              src={hmburgur}
              onClick={hadleToggle}
              className="cursor_pointer"
            />
          </div>
          <img src={navlogo} className="d-none d-md-none d-lg-none" />
        </a>
        <form class="d-flex" role="search">
          <div className="user-header-container dropdown">
            <a
              class="nav-link dropdown-toggle d-flex"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={user} />
              <span className="text-white d-none d-md-block d-lg-block">{user_data.first_name + " " + user_data.last_name}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark custom-dropdown-menu">
              {/* <li><a class="dropdown-item" href="#">Profile</a></li> */}
              <li><a class="dropdown-item" href="#" onClick={handleLogout}>Log out</a></li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default CustomHeader;
