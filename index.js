const express = require("express");
const { request, response } = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// update express settings
app.use(bodyParser.urlencoded({ extended: false })); // parse appliation/x-www-form-urlencoded data
app.use(bodyParser.json()); // parse application/json

app.get("/", (request, response) => {
  response.send(`Hello World!`);
});

app.get("/status", (request, response) => {
  response.status(200).json({ message: `ok`, status: 200 });
});

app.post("/signup", (request, response, next) => {
  if (!request.body) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  }

  response.status(200).json({ message: `ok`, status: 200 });
});

app.post("/login", (request, response) => {
  if (!request.body) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  }

  response.status(200).json({ message: `login`, status: 200 });
});

app.post("/logout", (request, response) => {
  if (!request.body) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  }

  response.status(200).json({ message: `logout`, status: 200 });
});

app.post("/token", (request, response) => {
  if (!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  } else {
    const { refreshToken } = request.body;

    response.status(200).json({
      message: `refresh requested for token: ${refreshToken}`,
      status: 200,
    });
  }
});

app.post("/forgot-password", (request, response) => {
  if (!request.body || !request.body.email) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  } else {
    const { email } = request.body;

    response.status(200).json({
      message: `password requested for email: ${email}`,
      status: 200,
    });
  }
});

app.post("/reset-password", (request, response) => {
  if (!request.body || !request.body) {
    response.status(400).json({ message: `Invalid Body`, status: 400 });
  } else {
    const { email } = request.body;

    response.status(200).json({
      message: `password reset requested for email: ${email}`,
      status: 200,
    });
  }
});

// catch all other routes
app.use((request, response) => {
  response.status(404).json({ message: `404 - Not Found`, status: 404 });
});

// handle errors - should always be last route
app.use((error, request, response, next) => {
  console.log(error);
  response
    .status(error.status || 500)
    .json({ error: error.message, status: 500 });
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
