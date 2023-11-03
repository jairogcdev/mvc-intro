const errorHandling = (app) => {
  app.use((req, res) => {
    //gestor de errores 404
    res.status(404).render("not-found.hbs");
  });

  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).render("error.hbs");
  });
};
module.exports = errorHandling;
