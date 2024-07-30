const express = require("express")
const router = express.Router()
const {
    getAllTaks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById
    } = require("../controllers/tasksControllers.js")

router.get("/", getAllTaks);
router.post("/", createTask);
router.get('/:id', getTaskById);
router.put("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);


module.exports = router;