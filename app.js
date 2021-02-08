const express = require("express");
const app = express();
const volleyball = require("volleyball");
const nunjucks = require("nunjucks");
const path = require("path");
const routes = require("./routes");
const db = require("./db");

app.use(volleyball);

app.use(express.static(path.join(__dirname, "/public")));

var env = nunjucks.configure("views", { noCache: true }); // apunta a nunjucks al directorio correcto para los templates
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks

app.get('/stylesheets/style.css', function (req, res) {
  res.sendFile(__dirname+"/public/stylesheets/style.css")
})

app.use(routes);

db.sync().then(() => {
  app.listen(3000, () => {
    console.log("Puerto corriendo en puerto 3000");
  });
});

// app.use("/", (req, res, next) => {
//   Page.create({
//     title: "asdasdasgsdgsdg",
//   }).then(() => {
//     console.log("pagina creada");
//   });
//   res.send("hola bienvenido");
// });
// //


// app.use(express.static('./public'))
