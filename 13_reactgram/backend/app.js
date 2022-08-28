require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// Config JSON and form data response
app.use(express.json()); // Habilitar o JSON
app.use(express.urlencoded({ extend: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // Caso altere o localhost, alterar a url também

// Upload Directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Database Connection
require("./config/db.js");

// Routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(
    `App iniciando na porta ${port} / App initialize at port ${port}`
  );
});
