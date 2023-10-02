import React, { Component } from "react";


export default class Sidebar extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">
            {" "}
            <img
              src="/assets/icons8-twitter-60.svg"
              style={{ height: "45px" }}
              alt="/logo192.png"
            />{" "}
            Daily Dose
          </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Orders
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Business
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Science
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              General
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Entertainment
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Technology
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-white">
              Health
            </a>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}
