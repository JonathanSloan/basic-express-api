const express = require("express");
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

app.post("/signup", (request, response) => {
  response.status(200).json({ message: `ok`, status: 200 });
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

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
