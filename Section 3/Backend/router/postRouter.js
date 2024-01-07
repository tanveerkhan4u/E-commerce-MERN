const express = require('express');
const Model = require('../model/postModel');

const router = express.Router();



router.post('/post',(req,res) => {
  console.log(req.body);

    new Model(req.body).save()
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    res.json(err);
   });

  
});




{cfvcfytfviytgt}


module.exports = router;