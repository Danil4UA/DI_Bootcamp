const express = require("express")

const router = express.Router()

const {
    getUser,
    getUserById,
    updateUserById
} = require("../controllers/usersControllers.js")
router.get("/", getUser)

router.get("/:id",getUserById)


router.put("/:id", updateUserById)

module.exports = router;
