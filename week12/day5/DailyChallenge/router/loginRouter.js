const express = require("express")
const {login} = require("../controllers/loginControllers.js")
const router = express.Router()

router.post("/", login)

module.exports = router