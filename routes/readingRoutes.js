const router = require('express').Router();

router.route('/dashboard').post((req, res) => {
    const readings = req.body.readings;
    User.find({
      readings
  })
    .then(dashboard => res.json(dashboard))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/game').post((req, res) => {
    const readings = req.body.readings;

const newReading = new Reading({
    readings
  });

newReading.save()
  .then(() => res.json('new reading'))
  .catch(err => res.status(400).json('error: ' + err))

});

module.exports = router;
