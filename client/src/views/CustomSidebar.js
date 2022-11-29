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
import sidebar_bottom from "../assets/img/sidebar_bottom.png"

const CustomSidebar = ({ toggle, hadleToggle }) => {
  return (
    <div className="custom-side-bar ">
      <ProSidebar collapsed={toggle} className="sidebar-custom">
        <SidebarHeader>
          <div className="w-100 d-flex  justify-content-center p-3">
            <img src={agency} className="klp-symble" />
          </div>
          <div className="text-center mb-2">
            <small>PRO 360 SURVEY PVT LTD</small>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem
              icon={<i class="fas fa-fw fa-wrench"></i>}
              onClick={
                () => {}
                // history.push("/dashboard/customer")
              }
            >
              Dashboard
            </MenuItem>
            <SubMenu
              icon={<i class="fas fa-fw fa-briefcase"></i>}
              title="Job pool"
            >
              <MenuItem
                onClick={
                  () => {}
                  //  history.push("/dashboard/invoice")
                }
              >
                Standard
              </MenuItem>
              <MenuItem
                onClick={
                  () => {}
                  //  history.push("/dashboard/purchase")
                }
              >
                Express
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () => {}
                // history.push("/dashboard/broker-analysis")
              }
            >
              My Job Pool
            </MenuItem>
            <MenuItem
            icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () => {}
                //  history.push("/dashboard/purchase")
              }
            >
              Company Profile
            </MenuItem>
            <MenuItem
            icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () => {}
                //  history.push("/dashboard/purchase")
              }
            >
              Payment Information
            </MenuItem>
            <MenuItem
            icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () => {}
                //  history.push("/dashboard/purchase")
              }
            >
              Network
            </MenuItem>
            <MenuItem
            icon={<i class="fas fa-fw fa-chart-area"></i>}
              onClick={
                () => {}
                //  history.push("/dashboard/purchase")
              }
            >
              Account Settings
            </MenuItem>

           
            {/* <MenuItem icon={<i class="fas fa-fw fa-file-alt"></i>}>
            Report Single
          </MenuItem> */}
            {/* <MenuItem>
              <hr class="sidebar-divider d-none d-md-block"></hr>
            </MenuItem> */}
            {/* <MenuItem> */}
            
            {/* </MenuItem> */}
          </Menu>
          <div class="text-center d-none d-md-block">
              {/* <div
                className="rounded-circle border-0 sidebar-toggle"
                onClick={hadleToggle}
              >
                {toggle ? (
                  <i class="fa-solid fa-angle-right"></i>
                ) : (
                  <i class="fa-solid fa-angle-left"></i>
                )}
              </div> */}
              <img src={sidebar_bottom}  className="w-100"/>
            </div>
        </SidebarContent>
      </ProSidebar>
      
    </div>
  );
};

export default CustomSidebar;
