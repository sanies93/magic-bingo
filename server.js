const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");

// Routes
app.post("/register", function(req, res) {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  User.create(userData, function(dbUser) {
    console.log(dbUser);
    res.json(dbUser);
  })
});

