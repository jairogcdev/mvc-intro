// We can create a movie schema & model here

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  director: {
    type: String,
  },
  duration: {
    type: String,
  },
  genre: {
    type: [String],
  },
  rate: {
    type: String,
  },
});

// Movie es el nombre de la base de datos en singular y la primera mayuscula (movies)
const Moovie = mongoose.model("Movie", movieSchema);

module.exports = Moovie;
