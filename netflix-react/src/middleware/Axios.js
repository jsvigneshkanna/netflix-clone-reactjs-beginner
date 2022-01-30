// This file is for creating dynamic Axios requests to TMDB

import axios from "axios";

// Base URL to make request to the movie database
const instances = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instances;
