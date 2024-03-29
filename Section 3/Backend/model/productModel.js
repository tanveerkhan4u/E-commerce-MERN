const {Schema, model} = require('../connection');

const myschema = new Schema({
  brand: String,
  model: String,
  color: String,
  image: String,
  price: Number,
  reviews: Number,
  location: String
});

module.exports = model('product', myschema);