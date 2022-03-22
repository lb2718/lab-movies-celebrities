const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
  cast: { type: [Schema.Types.ObjectId], ref: "Celebrity" },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
