import React from "react";
import Navbar from "../shared_components/NavBar";
import MovieRow from "../components/MovieRow";
import requests from "../middleware/Request";

const MoviePage = () => {
  return (
    <div>
      <Navbar pageType="movie" />
      <MovieRow title="Netflix Original" fetchUrl={requests.fetchOriginals} isLarge />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchAction} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <MovieRow title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default MoviePage;
