const bcrypt = require('bcrypt');
const {users} = require("../config/users.js")

async function registerUser(req,res){
    try {
        const {username, password} = req.body
        console.log(username,password)
        const saltRounds = 5
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        const user = {id: users.length + 1, username, password: hash}
        console.log(user)
        users.push(user)
        res.json(user).status(200)
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

module.exports = {
    registerUser
}