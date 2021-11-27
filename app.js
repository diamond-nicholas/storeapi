const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const productRouter = require('./Routes/products');
require('express-async-errors'); //async errors
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//express middleware

app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('this works live now');
});

//route

app.use('/api/v1/products', productRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
