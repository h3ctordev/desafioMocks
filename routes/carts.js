const express = require("express");
const router = express.Router();
const mocks = require("../mocks");

router.get("/carts-test", mocks.carts); // Me permite listar todos los productos guardados en el carrito

module.exports = router;
