import React from "react";
import "./SideNav.css";
const SideNav = () => {
  return (
    <div className="sticky">
      <div className="sidebar-container">
        <div className="sidebar-logo">DevNet</div>
        <ul className="sidebar-navigation">
          
          <li> 
            <a href="#1">
              <i className="fa fa-home" aria-hidden="true" /> Home
            </a>
          </li>
          <li>
            <a href="#2">
              <i className="fa fa-tachometer" aria-hidden="true" /> News
            </a>
          </li>
            <li>
            <a href="#3">
              <i className="fa fa-users" aria-hidden="true" /> Community
            </a>
          </li>
          <li>
            <a href="#4">
              <i className="fa fa-cog" aria-hidden="true" /> My Profile
            </a>
          </li>
          <li>
            <a href="#5">
              <i className="fa fa-info-circle" aria-hidden="true" /> Information
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
