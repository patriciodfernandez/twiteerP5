const express = require("express");
const router = express.Router();
const { Page } = require("../models");

// Paginas
router.get("/", (req, res, next) => {
  Page.findAll().then((Pages) => {
    res.render('index',{
      nombre:"pepe",
      pages: ['pagina1','pagina2'],
    });
  });
  console.log("prueba");

});


 
router.get("/wiki", (req, res, next) => {
    Page.findAll().then((users) => {
      res.send(users); 
    });
});



// Paginas
router.get("/wiki/add", (req, res, next) => {
  // Esto me devuelve un form para comple y crear una nueva pag
});

// Paginas
router.get("/wiki/pagina_titulo_primero", (req, res, next) => {
  // Esto me devuelve un form para comple y crear una nueva pag
});

module.exports = router;
