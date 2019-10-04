const express = require("express");
const mongoose = require("mongoose");
// const readingRoutes = require("./routes/readingRoutes");
// const userRoutes = require("./routes/userRoutes");
// const registerRoutes = require("./routes/registerRoutes")
const app = express();
const port = process.env.PORT || 5000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// app.use(readingRoutes);
// app.use(userRoutes);
require("./routes/registerRoutes")(app)


// Connect to the Mongo DB


app.listen(port, () =>  {
  console.log('server is running on port: ${port}');
});
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/");

const uri = 'mongodb+srv://titirivas:L7imP!7LDeu!KBq@cluster0-gmhut.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userrouter = require('./routes/userRoutes'); 
const readingrouter = require('./routes/readingRoutes');
const registerouter = require('./routes/registerRoutes')


app.use('/login', userrouter);
// app.use('/dashboard', readingrouter);


//added by sahra
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

