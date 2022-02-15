import React from "react";
import "./UserCard.css";

import { Link } from "react-router-dom";
import avatar from "../../assests/avatar.png";

const UserCard = ({ user }) => {


  return (
    <div className="devop">
      <div className="container">
        <div className="card float-right " style={{ width: "500px" }}>
          <div className="row">
            <div className="col-sm-5">
              {/* <h2>{user.email}</h2> */}
              <img className="d-block w-100" src={avatar} alt="profilimg" />
            </div>
            <div className="col-sm-7">
              <div className="card-block">
                <h2> {user.name} </h2>
                <h2>{user.email}</h2>
                <h2> {user.phone}</h2>
                <h2>Skills</h2>
                <br />
                <Link to="/profileview">
                  <a href="#3" className="btn btn-primary btn-sm float-right">
                    View Profile
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
export default UserCard;
