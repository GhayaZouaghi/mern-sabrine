import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="d-flex flex-column h-100">
      {/* FOR DEMO PUR
    {/* FOOTER */}
      <footer className="w-100 py-4 flex-shrink-0"  style={{fontSize:15}}>
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">FB.</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-muted mb-0">
                © Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="#1">
                  Bootstrapious.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#2">Home</a>
                </li>
                <li>
                  <a href="#3">About</a>
                </li>
                <li>
                  <a href="#4">Get started</a>
                </li>
                <li>
                  <a href="#5">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#6">Home</a>
                </li>
                <li>
                  <a href="#7">About</a>
                </li>
                <li>
                  <a href="#8">Get started</a>
                </li>
                <li>
                  <a href="#9">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
