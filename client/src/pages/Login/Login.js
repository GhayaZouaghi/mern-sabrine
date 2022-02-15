import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.css";

import { login } from "../../JS/Actions/user";

import clav from "../../assests/clavier.jpg";

const Login = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  return (
    <div className="land">
      <img
        src={clav}
        alt="login"
        style={{ maxWidth: "400px", maxHeight: "400px" }}
      />

      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>LOGIN</h3>
                <p>Fill in the data below</p>
                <form className="requires-validation" noValidate>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      value={user.email}
                      onChange={handleChangeUser}
                      required
                    />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>
                  <div className="valid-feedback">You selected a position!</div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      value={user.password}
                      onChange={handleChangeUser}
                    />
                  </div>
                  <div className="form-button mt-3">
                    <button
                      // id="submit"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => dispatch(login(user, history))}
                    >
                      Login
                    </button>
                  </div>
                  <p class="text-center">
                    You Don't Have an account?
                    <Link to="/register">
                      {" "}
                      <a href="#3" style={{ color: "white" }}>
                        Sign Up
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
export default Login;
