const express = require("express");
const {tasks} = require("../config/tasks.js");

async function getAllTaks (req, res){
    try{
        res.status(200).json(tasks);
    }catch(err){
        console.log(err)
        res.status(404).json({message: "Ooops..."})
    }
}

async function getTaskById(req, res){
    try {
        const { id } = req.params;
        const index = tasks.findIndex((task) => task.id == id);
        if (index === -1) {
            return res.status(404).json({ message: `Task not found` });
        }
        res.status(200).json(tasks[index]);
    } catch (error) {
        console.log(err)
        res.status(404).json({message: "Ooops..."})
    }
}

async function createTask(req, res){
    try {
        const task = {id: tasks.length + 1, ...req.body}
        tasks.push(task)
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Ooops..."})
    }
}

async function updateTaskById(req, res) {
    try {
        const { id } = req.params;
        const index = tasks.findIndex((task) => task.id == id);
        if (index === -1) {
            return res.status(404).json({ message: `Task not found` });
        }
        tasks[index] = { id: parseInt(id), ...req.body };
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Ooops..."})
    }
   
}

async function deleteTaskById(req, res){
    try {
        const { id } = req.params;
        const index = tasks.findIndex((task) => task.id == id);
        if (index === -1) {
            return res.status(404).json({ message: `Task not found` });
        }
        tasks.splice(index, 1);
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error)
        res.status(404).json({message: "Ooops..."})
    }
}

module.exports = {
    getAllTaks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
}