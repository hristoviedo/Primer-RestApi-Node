const express = require("express");
const morgan = require("morgan");
const app = express();

// Settings
app.set("port", process.env.PORT || 3000); // Se elige el puerto del server
app.set("json spaces", 2);

// Middleware
app.use(morgan("dev")); // Muestra el estado de la página en consola
app.use(express.urlencoded({ extended: false })); // Trata de entender los datos simples de formularios como texto.
app.use(express.json()); // Permite recibir y procesar formato JSON

// Routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Serve on Port ${app.get("port")}`);
});
