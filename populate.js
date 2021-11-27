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
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
