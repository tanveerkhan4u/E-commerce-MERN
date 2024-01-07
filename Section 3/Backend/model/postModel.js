const {Schema, model} = require('../connection');

const myschema = new Schema({
  sender: String,
  content: String,
  image: String,
  like: Number,
  Comment: String,
  share: String
});

module.exports = model('post', myschema);