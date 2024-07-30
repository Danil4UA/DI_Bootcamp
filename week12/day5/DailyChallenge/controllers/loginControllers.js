const bcrypt = require('bcrypt');
const {users} = require("../config/users.js")

async function login(req,res){
    try {
        const {username, password} = req.body
        console.log(username, password)
        const index = users.findIndex(user=>user.username === username)
        if(index === -1){
            return res.json({message: "User is not registered"}).status(404)
        }
        const ifPasswordCorrect = bcrypt.compareSync(password, users[index].password)
        if(ifPasswordCorrect){
            res.json({message: `Hi ${username}, welcome back again!`})
        }
        else{
            res.json({message: "Password is not correct"})
        }
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

module.exports = {login}