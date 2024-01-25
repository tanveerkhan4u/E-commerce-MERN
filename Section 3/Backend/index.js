const express = require('express');

const UserRouter = require('./router/userRouter');

const PostRouter = require('./router/postRouter');

const ProductRouter = require('./router/productRouter');


const orderRouter = require('./router/orderRouter');



// initialize express

const app = express();
const port = 5000;


// middleware

app.use(express.json());
app.use('/user',UserRouter);

app.use(express.json());
app.use('/post',PostRouter );


app.use(express.json());
app.use('/product', ProductRouter);


app.use(express.json());
app.use('/order', orderRouter);











// creating a route 


app.get('/', (req, res) => {
  res.send('Response from express');
});

app.get('/add', (req, res) => {
  res.send('Add response from server');
});

app.get('/update', (req, res) => {
  res.send('Add response form update')
});

app.get('/delete', (req, res) => {
  res.send('Add response form delete')
});





// starting the server

app.listen(port, () => { console.log('server started!!'); });

