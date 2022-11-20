import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

function Movie() {
  const [movies, setMovies] = useState([]);
  // const [listOfUsers, setListOfUsers] = useState([]);
  // http://localhost:5000/api/getAllMovies

  const getMovies = () => {
    Axios.get("/allMovies").then((response) => {
      setMovies(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="row mt-5 text-start">
      <div className="col-6">
        <h2>Add New Movie</h2>
        <form>
          <div className="form-group">
            <label htmlFor="movieName">Movie Name</label>
            <input
              type="text"
              name="movieName"
              id="movieName"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add Movie
          </button>
        </form>
      </div>
      <div className="col-6">
        <h2>Movie List</h2>
        <table className="table table-bordered mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie._id}>
                <td key={index}>{index + 1}</td>
                <td>{movie.Title}</td>
                <td>{movie.Genre}</td>
                <td>{movie.Released}</td>
                <td>
                <Link
                    to={`edit/${movie._id}`}
                    className="btn btn-info btn-sm" value="CI"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {JSON.stringify(movies)} */}
      </div>
    </div>
  );
}

export default Movie;
