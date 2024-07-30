const express = require("express");
const tasksRouter = require("./router/tasksRouter.js")

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}...`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/tasks", tasksRouter)