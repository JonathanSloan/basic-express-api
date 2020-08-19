require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;

// express settings
app.use(bodyParser.urlencoded({ extended: false })); // parse appliation/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN })); // parse application/json

// require passport auth
require("./auth/auth");

// import routes
const routes = require("./routes/main");
const passwordRoutes = require("./routes/password");

// setup routes
app.use("/", routes);
app.use("/", passwordRoutes);
app.use;

// catches undefined routes
app.use((request, response) => {
  response.status(404).json({ message: `404 - Not Found`, status: 404 });
});

// handles errors - should always be last route
app.use((error, request, response, next) => {
  console.log(error);
  response
    .status(error.status || 500)
    .json({ error: error.message, status: 500 });
});

// app is ready
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
