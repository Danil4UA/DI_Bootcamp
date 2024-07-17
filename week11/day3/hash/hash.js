import bcrypt from "bcrypt"

function hashMyPassword(pass){
    const salt = bcrypt.genSaltSync(1);
    const hash = bcrypt.hashSync(pass, salt);

    return hash
}


module.exports = {
    hashMyPassword,
}