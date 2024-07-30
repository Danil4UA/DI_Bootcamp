const express = require("express");
const {getAllProducts, getOneProduct, createProduct, changeOneProduct, deleteOneProduct} = require("../controllers/productsController.js")
const router = express.Router();

router.get("/", getAllProducts )
router.get("/:id", getOneProduct )
router.post("/", createProduct )
router.put("/:id", changeOneProduct )
router.delete("/:id", deleteOneProduct)

module.exports = router
