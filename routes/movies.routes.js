const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", async (req, res, next) => {
  const celebrities = await Celebrity.find();
  res.render("movies/new-movie", { celebrities });
});

router.post("/movies/create", async (req, res, next) => {
  try {
    const movieCreated = await Movie.create(req.body);
    // console.log(req.body);
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.render("movies/new-movie");
  }
});
router.get("/movies", async (req, res, next) => {
  const foundMovies = await Movie.find().populate("cast");
  res.render("movies/movies", { foundMovies });
});

// iteration 8 - à finir
router.get("/movies/:id", async (req, res, next) => {
  try {
    const movieDetails = await Movie.findById(req.params).populate("cast");
    res.render("movies/movie-details", { movieDetails });
  } catch (err) {
    next();
  }
});

module.exports = router;
