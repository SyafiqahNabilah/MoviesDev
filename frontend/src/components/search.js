import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className=" top-50">
        <h1 className="">MoviesDev</h1>
        <form className="row justify-content-md-center">
          <div className="col-sm-6">
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
            ></input>
          </div>
          <div className="col-auto">
            <button className="btn btn-success">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
