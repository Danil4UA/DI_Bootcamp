const express = require("express")
const {_getAllProducts, _insertProducts} = require("../controllers/productsController.js")
const router = express.Router()

router.get("/", _getAllProducts)
router.post("/", _insertProducts)

module.exports = router