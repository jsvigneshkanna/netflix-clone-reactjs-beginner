import React from "react";
import "./HomeHeader.css";
import NavBar from "../shared_components/NavBar";
const HomeHeader = () => {
  return (
    <div className="header">
      <NavBar pageType={"home"} />
    </div>
  );
};

export default HomeHeader;
