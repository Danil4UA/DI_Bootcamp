const {products} = require("../config/data.js")


const getAllProducts = (req,res)=>{
    res.json(products)
}

const getOneProduct = (req,res)=>{
    console.log(req.params);
    const {id} = req.params
    const myProduct = products.find(item=>item.id == id)
    if(!myProduct) return res.status(404).json({msg: "product not found"})
    res.json(myProduct)
}

const createProduct = (req,res) => {
    console.log(req.body)
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.json(products)
}

const changeOneProduct = (req,res)=>{
    const {id} = req.params
    const {name,price} = req.body
    const index = products.findIndex(item=>item.id == id)
    if(index === -1)res.status(404).json({message: "Product not found, can't fint the index"})
    products[index] = {...products[index], name, price}
    res.json(products)
}

const deleteOneProduct = (req,res)=>{
    const {id} = req.params
    const index = products.findIndex(item=>item.id == id)
    if(index === -1)res.status(404).json({message: "Product not found, can't fint the index"})
    products.splice(index,1)
    res.json(products)
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    changeOneProduct,
    deleteOneProduct
}