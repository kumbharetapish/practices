import React from "react";
import TopbarStyle from "./Topbar.module.css"
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className={TopbarStyle.wrapper} >
      <Link  className={TopbarStyle.link} to="/home">Home </Link>
      <Link  className={TopbarStyle.link} to="/about">About </Link>
      <Link  className={TopbarStyle.link} to="/contact">Contact</Link>
    </div>
  );
};

export default Topbar;
