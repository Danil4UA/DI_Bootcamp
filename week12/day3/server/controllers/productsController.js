const { getAllProducts, insertProduct } = require("../models/productsModule.js")

const _getAllProducts = async (req,res) => {
    try{
        const result = await getAllProducts()
        res.json(result)
    }catch(err){
        console.log(err)
        res.status(404)
    }
}

const _insertProducts = async(req,res) => {
    try{
        const {name, price} = req.body
        const result = await insertProduct(name, price)
        res.json(result)
    }catch(err){
        console.log(err)
        res.status(404)
    }
}

module.exports = {
    _getAllProducts,
    _insertProducts
}