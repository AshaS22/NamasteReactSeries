import React from "react";
import ReactLogo from "./assets/react_logo.svg";
import Profile from "./assets/profile.jpg";
import "./index.css";

export const HeaderAssignment = () => (
  <div className="header">
    <div className="logo">
      <img className="react_icon" src={ReactLogo} alt="React logo" />
    </div>
    <div className="searchBar">
      
        <input className='search' type="search"></input>
      
    </div>
    <div className="profile">
      <img className="profile_icon" src={Profile} alt="React logo" />
    </div>
  </div>
);

