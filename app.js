const express = require('express');
const app = express();
require('dotenv').config();

//async errors

const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error-handler');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//express middleware

app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('this works live now');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    // connectDB
    app.listen(port, () => {
      console.log(`app is listening on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
