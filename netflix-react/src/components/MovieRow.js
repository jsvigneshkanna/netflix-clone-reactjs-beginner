import React, { useState, useEffect } from "react";
import axios from "../middleware/Axios";

// Importing this file CSS
import "./movierow.css";

const MovieRow = ({ title, fetchUrl, isLarge }) => {
  const [movies, setmovies] = useState([]);

  // Code snippet to run for each page load or fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setmovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movie_row">
      <h3 className="row_heading">{title}</h3>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original${isLarge ? movie.poster_path : movie.backdrop_path}`}
              alt="img"
              className={`row_poster ${isLarge && "row_posterLarge"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieRow;
