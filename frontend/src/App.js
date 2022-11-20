import "./App.css";
import Movie from "./components/movies";
import Search from "./components/search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/movie" element={<Movie />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
