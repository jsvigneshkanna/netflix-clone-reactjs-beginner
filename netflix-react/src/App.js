import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Routers import
import MoviePage from "./pages/MoviePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MoviePage />
    </div>
  );
}

export default App;
