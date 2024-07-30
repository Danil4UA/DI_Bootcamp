const {users} = require("../config/users.js")
const bcrypt = require('bcrypt');

async function getUser(req,res){
    try {
        const data = users;
        if(!data)res.json({message: "Oooops... Something went wrong"})
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
}

async function getUserById(req,res){
    try {
        const {id} = req.params;
        const index = users.findIndex(user=>user.id == id);
        if(index === -1)res.json({message: "User not found"})
        res.json(users[index])
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
}

async function updateUserById(req,res) {
    try {
        const {id} = req.params;
        const index = users.findIndex(user=>user.id == id);
        if(index === -1)res.json({message: "User not found"})

        const {username, password} = req.body;
        
        if(password){
            const saltRounds = 5
            const salt = bcrypt.genSaltSync(saltRounds)
            const hash = bcrypt.hashSync(password, salt)
            users[index] = {...users[index], username: username || users[index].username, password: hash}
        }else {
            users[index] = { ...users[index], username: username || users[index].username };
        }

        res.status(200).json(users[index]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while updating the user' })
    }
}

module.exports = {
    getUser,
    getUserById,
    updateUserById
}