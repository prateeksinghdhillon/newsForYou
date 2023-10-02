import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
            <News pageSize={6} country="in" category="entertainment"/>
          </div>
        </div>
      </>
    );
  }
}
