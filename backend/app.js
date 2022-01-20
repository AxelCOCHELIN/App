// ------------- APP EXPRESS -------------//

//import d'express
const express = require("express");

//création de l'application express
const app = express();

//création d'une route initiale
app.use((req, res, next) => {
  console.log("requête reçue!");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "Votre requête à bien été reçu." });
  next();
});

app.use((req, res, next) => {
  console.log("La réponse a été envoyée avec succès");
});

//export de l'application pour y accéder depuis les autres fichiers
module.exports = app;
