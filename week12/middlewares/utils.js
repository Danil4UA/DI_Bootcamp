

const auth = (req,res,next)=>{
    const {admin} = req.query
    if(admin === "yes"){
        next()
    }
    else {
        res.send("you are not the admin")
    }
}

module.exports = {
    auth
}