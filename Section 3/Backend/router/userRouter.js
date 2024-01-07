const express = require('express');
const Model = require('../model/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
  console.log(req.body);
  

  new Model(req.body).save()
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
});



// router.get('/getall', (req, res) => {
//   res.send('add get response from user  router');
// });

// router.get('/getbyid', (req, res) => {
//   res.send('add by id  response from user router');
// });

// router.get('/update', (req, res) => {
//   res.send('add update response from user router');
// });


router.get('/delete', (req, res) => {
  res.send('add  delete response from user router');
});

router.get('/post',(req,res) => {
  res.send('add post from router');
});




// getall
// getbyid
// update
// delete

module.exports = router;
