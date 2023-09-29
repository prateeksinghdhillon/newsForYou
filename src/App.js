import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Sidebar from "./components/Sidebar";

export default class App extends Component {
  c = "hi i am prateek";
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-2 col-lg-2" >
            <Sidebar />
          </div>
          <div className="col-md-10 col-lg-10">
            <Navbar/>
            <News></News>
          </div>
        </div>
      </>
    );
  }
}
