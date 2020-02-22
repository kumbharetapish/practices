import React from "react";
import TopbarStyle from "./Topbar.module.css";
import { Link } from "react-router-dom";
import { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <div className={TopbarStyle.wrapper}>
        <Link className={TopbarStyle.link} to="/">
          Home
        </Link>
        <Link className={TopbarStyle.link} to="/about">
          About
        </Link>
        <Link className={TopbarStyle.link} to="/contact">
          Contact
        </Link>
        {this.props.status ? (
          <button
            newProps={"newProps"}
            className={TopbarStyle.link}
            onClick={this.props.handleLogin}
          >
            Log Out
          </button>
        ) : (
          <Link
            className={TopbarStyle.link}
            onClick={this.props.handleLogin}
            to="/"
          >
            LogIn
          </Link>
        )}
      </div>
    );
  }
}
export default Topbar;
