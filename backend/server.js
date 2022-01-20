// -------------------CRÉATION DU SERVEUR NODE--------------------- //

// import du package http de node
const http = require("http");
// import de l'application
const app = require("./app");

// fonction renvoyant un port valide
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

//initialisation du port
const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

// fonction recherchant les différentes erreurs et qui les gère de manière appropriée.
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevetad privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// création du serveur
const server = http.createServer(app);

// configuration d'un écouteur d'évènements consignant le port ou le canal sur lequel le serveur s'exécute
server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port: " + port;
  console.log("Listening on " + bind);
});

// écoute du serveur

server.listen(process.env.PORT || 3000);
