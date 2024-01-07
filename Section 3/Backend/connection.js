const mongoose = require('mongoose');

const url = "mongodb+srv://khantanveer6077:18040471804047@cluster0.rki85vw.mongodb.net/mern330nov?retryWrites=true&w=majority";




// asynchronous
mongoose.connect(url)
.then((result) => {

  console.log('connected to mongodb');
})
.catch((err) => {
  console.error(err);
});

// // synchronous
// console.log('some task 1');


// // asynchronous
// setTimeout(  () => {console.log('delayed task');}, 5000);

// console.log('some task 2');

module.exports = mongoose;