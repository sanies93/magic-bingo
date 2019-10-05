// const router = require('express').Router();
const app = require('express');
// let User = require('../models/register.js');
let User = require('../models/register')


module.exports = (app) =>{
app.post('/login', function(req, res) {
    const user = req.body.username;
    const pass = req.body.password;
        User.find({
        username: user,
    })
    .then((login , err )=> {
        console.log("login.password", login[0].password);
        console.log("pass", pass);
        if(login[0].password !== pass){
            res.send("incorrect info")
        }
        else{
        res.send(login);
        }
        console.log(login);
        
    })
});
   
  

    


app.route('/register').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
      username,
      email,
      password
    });

    newUser.save().then(() =>{
        console.log("working");
        res.send('hello world');
        
    })


    


});
}