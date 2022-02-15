import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../JS/Actions/user";

import "./Register.css";
import join from "../../assests/developpeur.jpeg";

const Register = ({ history }) => {

  const errors = useSelector((state) => state.userReducer.errors);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const dispatch = useDispatch();

  const handleChangeNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="reg" /* style={{ display:"flex"/*, flexDirection:"row" }}*/>
      <img src={join} alt="register" style={{ maxwidth: "100px" }} />
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                {errors &&
                  errors.map((error) => (
                    <h5 style={{ color: "red" }}>{errors.msg}</h5>
                  ))}
                ;<p>Fill in the data below.</p>
                <form className="requires-validation" noValidate>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={newUser.name}
                      onChange={handleChangeNewUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      value={newUser.email}
                      onChange={handleChangeNewUser}
                    />

                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Enter your phone Number"
                        value={newUser.phone}
                        onChange={handleChangeNewUser}
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={newUser.password}
                        onChange={handleChangeNewUser}
                      />
                    </div>

                    <label className="form-check-label">
                      I confirm that all data are correct
                    </label>

                    <div className="form-button mt-3">
                      <button
                        // id="submit"
                        type="button"
                        className="btn btn-primary"
                        onClick={() => dispatch(register(newUser, history))}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                  <p class="text-center">
                    You Don't Have an account?
                    <Link to="/login">
                      {" "}
                      <a href="#3" style={{ color: "white" }}>
                        Login
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
