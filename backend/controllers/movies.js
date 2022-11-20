const Movie = require("../models/movie");
const { StatusCodes } = require("http-status-codes");
// const { BadRequestError, NotFoundError } = require("../errors");

const getAllMovies = async (req, res) => {
  // let query = {name: 'Avatar'}
  const result = await Movie.find()
  if(result !== null && result !== ''){
      console.log(`Not empty`);
  }
  
  res.status(StatusCodes.OK).json(result);
};

const getMovie = async(req, res) => {
  const result = await Movie.findById(req.params.id)
  console.log(`get movie by Id`);
  res.json(result)
}

const addMovie = async(req, res) =>{
  const result = await Movie.create(req.body)
  console.log(`Movie added`)
  res.json(result)
}
const updateMovie = async(req, res) =>{
  const result = await Movie.findByIdAndUpdate(req.params.id)
  console.log(`Update movie by Id`);
  res.json(result)
}

const deleteMovie = async(req, res) =>{

  const result = await Movie.findByIdAndDelete(req.params.id)
  console.log(`Delete movie by Id`);
  res.json(result)
}


module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie, 
  addMovie
};
