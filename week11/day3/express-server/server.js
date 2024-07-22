import express from "express"
import { products } from "./config/data.js"
import path from "path"
// import bodyParser from "body-parser"

// or you can do express because in new version its inside express

const __dirname = path.resolve()

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", express.static(__dirname + "/public"))

app.listen(port, ()=>{
    
    console.log(`Server listen on port ${port}...`)
})

/**
 * CRUD API
 *          Create - Read - Update - Delete
 * Methods: - POST -  GET    PUT    DELETE
 */

/** REST APi becausse we are useing the same route for all the methods */

/**
 * cRud - Read - get all products
 */

/**
 * Crud - Create/Insert - a new product
 */

/**
 * crUd - Update - PUT method
 */

/**
 * cruD - Delete - Delete method
 */



app.post("/api/products", (req,res) => {
    console.log(req.body)
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.json(products)
})

app.put("/api/products/:id", (req,res)=>{
    const {id} = req.params
    const {name,price} = req.body

    const index = products.findIndex(item=>item.id == id)
    if(index === -1)res.status(404).json({message: "Product not found, can't fint the index"})
    products[index] = {...products[index], name, price}
    res.json(products)
})

app.delete("/api/products/:id",(req,res)=>{
    const {id} = req.params
    const index = products.findIndex(item=>item.id == id)
    if(index === -1)res.status(404).json({message: "Product not found, can't fint the index"})
    products.splice(index,1)
    res.json(products)

})
app.get("/api/products", (req,res)=>{
    res.json(products)
})

/** get one product */

/**
 * cRud - Read - get all products - with params 
 */


app.get("/api/products/:id", (req,res)=>{
    console.log(req.params);
    const {id} = req.params
    const myProduct = products.find(item=>item.id == id)
    if(!myProduct) return res.status(404).json({msg: "product not found"})
    res.json(myProduct)
})

//query 

/**
 * cRud - Read - get all products with query 
 */

app.get("/api/search", (req,res)=>{
    console.log(req.query)
    const {name} = req.query
    const filtered = products.filter(item=>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(filtered.length === 0){
        res.sendStatus(404).json({msg: "product not found"})
    }
    res.json(filtered)
})


// fetch(utl, {
//     method: "POST",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify
// })



// everythin after ? in url is quary 

/** params */
// everything you put after your route : /api/products/ - it's params
/**
 * app.get()
 * app.post()
 * app.delete()
 */

// app.get("/users", (req,res)=>{
//     let users = [
//         {name: "Jhon", age: 301},
//         {name: "Anne", age: 23},
//         {name: "Michael", age: 41},
//     ];
//     res.status(200).json(users)
// })