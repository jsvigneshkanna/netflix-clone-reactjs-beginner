// This file contains all the request URLs for Movie list fetch
/*
fetch All Trending movies
fetch netflix originals
fetch top rated movies
fetch action movies
fetch comedy movies
fetch Horror movies
fetch romance movies
fetch Documentaries movies
fetch movie images
*/

// require("dotenv").config();

// import dotenv from "dotenv";
// dotenv.config();
// const img_baseurl = process.env.TMDB_IMG_BASE_URL;
// const api_key = process.env.TMDB_API_KEY;

const api_key = "403ee2ff023f5fd9fdd84c85a140c9fb";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};

export default requests;
