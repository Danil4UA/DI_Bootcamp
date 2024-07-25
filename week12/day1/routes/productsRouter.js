const express = require("express");
const {getAllProducts, getOneProduct, createProduct, changeOneProduct, deleteOneProduct} = require("../controllers/productsController.js")
const router = express.Router();

router.get("/api/products", getAllProducts )
router.get("/api/products/:id", getOneProduct )
router.post("/api/products", createProduct )
router.put("/api/products/:id", changeOneProduct )
router.delete("/api/products/:id", deleteOneProduct)

module.exports = router
