/*Inclusión de las depenencias*/
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
  mongoose = require("mongoose");

/* Utilizamos boyParser para  parsear JSON*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*Utilizamos el método methodOverride para implementar y personalizar métodos HTTP.*/
app.use(methodOverride());

/*declaración de rutas creando instancia de express*/
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(router);

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});