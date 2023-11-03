const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

// esto crea un objeto especial de rutas que nos permite almacenarlas y enviarlas a nuestra app
router.get("/", (req, res, next) => {
  res.status(200).render("home.hbs");
});

router.get("/about", (req, res, next) => {
  console.log(process.env.PALABRA_SECRETA);
  console.log(process.env.PORT);
  res.render("about.hbs");
});

router.get("/movies", async (req, res, next) => {
  // buscar todas las pelis y pasarlas a la vista
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
    res.render("movies.hbs", { allMovies });
  } catch (err) {
    // next tenia 2 funcionalidades
    // 1. si lo invocamos sin argumentos, significa: salta a la siguiente ruta
    // 2. si lo invocamos con algún argumento, significa : ve al gestor de error de tipo 500
    next(err);
  }
});

module.exports = router;
