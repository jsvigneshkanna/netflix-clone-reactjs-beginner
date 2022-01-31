import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./moviefooter.css";

const MovieFooter = () => {
  return (
    <div className="footer">
      <div className="credits">Made by JS Vignesh Kanna Jan - 2022</div>
      <div className="footer-btns">
        <HomeRoundedIcon fontSize="medium" className="footer-btn" />
        <ArrowDownwardIcon fontSize="medium" className="footer-btn" />
        <MenuOpenIcon fontSize="medium" className="footer-btn" />
      </div>
      <div className="small-footer-btns">
        <HomeRoundedIcon fontSize="small" className="footer-btn" />
        <ArrowDownwardIcon fontSize="small" className="footer-btn" />
        <MenuOpenIcon fontSize="small" className="footer-btn" />
      </div>
    </div>
  );
};

export default MovieFooter;
