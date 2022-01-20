// -------------------CRÉATION DU SERVEUR NODE--------------------- //

// import du package http de node
const http = require("http");
// import de l'application
const app = require("./app");

//initialisation du port
app.set("port", process.env.PORT || 3000);

// création du serveur
const server = http.createServer(app);

// écoute du serveur

server.listen(process.env.PORT || 3000);
