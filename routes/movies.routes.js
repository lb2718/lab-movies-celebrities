const router = require("express").Router();
const Movie = require("../models/Movie.model");

// all your routes here
router.get("/movies/create", (req, res, next) =>
  res.render("movies/new-movie")
);

router.post("/movies/create", async (req, res, next) => {
  try {
    const movieCreated = await Movie.create(req.body);
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
    res.render("movies/new-movie");
  }
  router.get("/movies", async (req, res, next) => {
    const foundMovie = await Movie.find();
    res.render("celebrities/celebrities", { foundCeleb });
  });
});

module.exports = router;
("");
