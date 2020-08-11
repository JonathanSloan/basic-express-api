const express = require("express");
const { request, response } = require("express");
const app = express();
const port = 3000;

// app.get("/", (request, response) => {
// response.send(``);
// response.status(200).json({ message: `ok`, status: 200 });
// });

app.get("/", (request, response) => {
  response.send(`Hello World!`);
});

app.get("/status", (request, response) => {
  response.status(200).json({ message: `ok`, status: 200 });
});

app.post("/signup", (request, response, next) => {
  next(new Error(`Test Error`));
  // response.status(200).json({ message: `ok`, status: 200 });
});

app.post("/login", (request, response) => {
  response.status(200).json({ message: `login`, status: 200 });
});

app.post("/logout", (request, response) => {
  response.status(200).json({ message: `logout`, status: 200 });
});

app.post("/token", (request, response) => {
  response.status(200).json({ message: `token`, status: 200 });
});

app.post("/forgot-password", (request, response) => {
  response.status(200).json({ message: `forgot-password`, status: 200 });
});

app.post("/reset-password", (request, response) => {
  response.status(200).json({ message: `reset-password`, status: 200 });
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
