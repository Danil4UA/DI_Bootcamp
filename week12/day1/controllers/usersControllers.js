const {users} = require("../config/data.js")

const getAllUsers = (req,res)=>{
    console.log(users)
    res.json(users)
}
const getOneUser = (req,res)=>{
    const {id} = req.params
    const foundUser = users.find((item)=>item.id == id)
    if(!foundUser)res.json({message: "user not found"})
    res.json(foundUser)
}
module.exports = {
    getAllUsers,
    getOneUser
}