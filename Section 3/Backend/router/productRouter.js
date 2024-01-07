const express = require('express');
const Model = require('../model/productModel');

const router = express.Router();






router.get('/product', (req, res) => {
  console.log(req.body);

  new Model(req.body).save()
   .then((result) => {
    res.json(result);
   }).catch((err) => {
    res.json(err);
   });
  
});









// router.get('/delete', (req, res) => {
//   res.send('delete response form delete')
// });








module.exports = router;