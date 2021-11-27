require('dotenv').config();
const connectDB = require('./db/connect');
const jsonProduct = require('./product.json');
const Products = require('./models/product');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Products.deleteMany();
    await Products.create(jsonProduct);
    console.log('Success!!!');
  } catch (error) {
    console.log(error);
  }
};

start();
