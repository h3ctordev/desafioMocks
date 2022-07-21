const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const { products, carts } = require("./routes");

app.use(express.json());

app.use("/api", carts);
app.use("/api", products);

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
