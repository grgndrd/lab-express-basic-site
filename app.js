// Initializing
const express = require("express");

const app = express();

app.use(express.static("public"));

// Defining Routes
app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/works.html");
});

app.get("/photogallery", (request, response, next) => {
  response.sendFile(__dirname + "/public/views/photogallery.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
