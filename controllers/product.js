const getAllProductStatic = async (req, res) => {
  res.status(200).json({ msg: 'product testing routes' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'product routes' });
};

module.exports = {
  getAllProductStatic,
  getAllProducts,
};
