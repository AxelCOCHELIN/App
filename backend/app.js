// ------------- APP EXPRESS -------------//

//import d'express
const express = require("express");

//création de l'application express
const app = express();

//création d'une API
app.use("/api/object", (req, res, next) => {
  const object = [
    {
      _id: "Obj1",
      title: "Le premier objet",
      description: "Les infos du premier objet",
      imageUrl: "",
      price: 4900,
      userId: "userOne",
    },
    {
      _id: "Obj2",
      title: "Le second objet",
      description: "Les infos du second objet",
      imageUrl: "",
      price: 2900,
      userId: "userOne",
    },
  ];
  res.status(200).json(object);
});

//export de l'application pour y accéder depuis les autres fichiers
module.exports = app;
