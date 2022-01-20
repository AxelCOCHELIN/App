// ------------- APP EXPRESS -------------//

//import d'express
const express = require("express");

//création de l'application express
const app = express();

//création d'une route initiale
app.use((req, res) => {
  res.json({ message: "Votre requête à bien été reçu." });
});

//export de l'application pour y accéder depuis les autres fichiers
module.exports = app;
