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


router.put('/update/:id',(req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
});

router.delete('/delete/:id',(req, res) => {
  Model.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
});









// router.get('/delete', (req, res) => {
//   res.send('delete response form delete')
// });








module.exports = router;