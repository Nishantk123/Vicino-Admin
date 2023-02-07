import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import user from "../assets/img/user.png";
import agency from "../assets/img/agency.png";
import sidebar_bottom from "../assets/img/sidebar_bottom.png";
import { useHistory } from "react-router-dom";

const CustomSidebar = ({ toggle, hadleToggle }) => {
  const history = useHistory();
  const user_data = JSON.parse(window.sessionStorage.getItem("user_data"));
  const user_role = user_data.user_role

  return (
    <div className="custom-side-bar ">
      <ProSidebar collapsed={toggle} className={toggle?"sidebar-custom":"sidebar-custom-mobile"}>
        <SidebarHeader>
          {!toggle&&<div className="w-100  d-lg-flex d-md-flex d-none   justify-content-center p-3">
            <img src={agency} className="klp-symble" />
          </div>}
          <div className="text-center mb-2">
            <small>{user_data.company_name}</small>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            {user_role !=="freelance"&&<MenuItem
              icon={<i class="fas fa-fw fa-wrench"></i>}
              onClick={
                // () => {}
                () => history.push("/dashboard")
              }
            >
              Dashboard
            </MenuItem>}
            {<MenuItem
              icon={<i class="fas fa-fw fa-briefcase"></i>}
              onClick={() => history.push("/dashboard/job-pool")}
            >
              Job pool
            </MenuItem>}
            {/* <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () => 
                 history.push("/dashboard/purchase")
              }
            >
              Company Profile
            </MenuItem> */}
            {(user_role !=="freelance" )&& <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/payment-information")
              }
            >
              Payment Information
            </MenuItem>}
            {(user_role !=="freelance" || true)&& <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/job-dashboard")
              }
            >
              Supervisors
            </MenuItem>}
            {(user_role ==="agency")&&<MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/network")
              }
            >
              Network
            </MenuItem>}
            {(user_role !=="freelance")&&<MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/user-management")
              }
            >
              user management
            </MenuItem>}
            {(user_role !=="freelance")&&<MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/account-registration")
              }
            >
              Account Registration
            </MenuItem>}
            {(user_role !=="freelance")&&<MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/account-subscription")
              }
            >
               Subscription Account
            </MenuItem>}
            {(user_role !=="freelance")&& true &&<MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/report")
              }
            >
               Report
            </MenuItem>}
            {(user_role !=="freelance")&&<MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () =>  history.push("/dashboard/account-billing")
              }
            >
              Billing Account
            </MenuItem>}

            {/* <MenuItem icon={<i class="fas fa-fw fa-file-alt"></i>}>
            Report Single
          </MenuItem> */}
            {/* <MenuItem>
              <hr class="sidebar-divider d-none d-md-block"></hr>
            </MenuItem> */}
            {/* <MenuItem> */}

            {/* </MenuItem> */}
          </Menu>
          <div class="text-center">
            <div
                className="rounded-circle border-0 sidebar-toggle  d-md-none"
                onClick={hadleToggle}
              >
                {toggle ? (
                  <i class="fa-solid fa-angle-right"></i>
                ) : (
                  <i class="fa-solid fa-angle-left"></i>
                )}
              </div>
            <img src={sidebar_bottom} className="w-100 d-none d-md-block" />
          </div>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default CustomSidebar;
