const db = require("../../models");
const Products = db.products;

const addProducts = async (req, res) => {
  const { name, price, brand, description } = req.body;

  try {
    const result = await Products.create({
      name,
      price,
      brand,
      description,
    });

    if (result) {
      res.status(201).send("product add successfully!");
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = addProducts;
