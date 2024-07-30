const express = require("express")
const {getAllUsers, getOneUser} = require("../controllers/usersControllers.js")
const router = express.Router();
const {auth} = require("../../middlewares/utils.js")

router.get("/", auth, getAllUsers)
router.get("/:id", getOneUser)

module.exports = router
