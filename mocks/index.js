const { faker } = require("@faker-js/faker");

faker.locale = "es";

const getProducts = (cant) => {
  const productsArr = [];
  for (let i = 0; cant > i; i++) {
    productsArr.push({
      id: faker.datatype.number({ min: 1, max: 200 }),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      code: faker.random.alphaNumeric(5).toLocaleUpperCase(),
      photoUrl: faker.image.imageUrl(),
      price: faker.commerce.price(100, 9999, 0, "CLP $"),
      stock: faker.datatype.number({ min: 0, max: 1000 }),
    });
  }
  return productsArr;
};

const carts = (req, res) => {
  const { cant } = req.query;
  const cart = {
    id: faker.database.mongodbObjectId(),
    timestamp: faker.date.recent(),
    products: getProducts(!!cant ? cant : 10),
  };
  return res.status(200).send(cart);
};

const products = (req, res) => {
  const { cant } = req.query;

  return res.status(200).send(getProducts(!!cant ? cant : 5));
};

module.exports = {
  carts,
  products,
};
