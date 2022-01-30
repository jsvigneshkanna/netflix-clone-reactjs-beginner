import React, { useState, useEffect } from "react";
import axios from "../middleware/Axios";
import "./moviebanner.css";

// Material UI Icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";

const MovieBanner = ({ fetchUrl }) => {
  const [banner, setbanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const cleanedResponse = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      setbanner(cleanedResponse);

      console.log(cleanedResponse);
      return cleanedResponse;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
        backgroundPosition: "center center",
        color: "white",
      }}
    >
      <div className="banner_layout">
        <div className="banner_content">
          <h1>{(banner?.title || banner?.name || banner?.original_name || "TITLE").toUpperCase()}</h1>
          <p>{banner.overview}</p>
          <div className="btn_row">
            <button>
              <PlayArrowIcon /> Play
            </button>
            <button>
              <AddIcon /> My List
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MovieBanner;
