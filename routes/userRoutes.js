const router = require('express').Router();
let User = require('../models/register.js');

router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password
    User.find({
      username,
      email,
      password
  })
    .then(login => res.json(login))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password

  const newUser = new User({
      username,
      password
    });

  newPassword.save()
    .then(() => res.json('password added'))
    .catch(err => res.status(400).json('error: ' + err))

  newUser.save()
    .then(() => res.json('username added'))
    .catch(err => res.status(400).json('Error: ' + err));


});

module.exports = router;