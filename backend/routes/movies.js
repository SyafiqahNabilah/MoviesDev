const express = require('express')
const router = express.Router()

const {getAllMovies, getMovie, updateMovie, deleteMovie, addMovie} = require('../controllers/movies')


// router.route('/getAllMovies').post(createCar)
router.route('/allMovies').get(getAllMovies)
router.route('/addMovie').post(addMovie)
router.route('/Movie/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)

module.exports=router