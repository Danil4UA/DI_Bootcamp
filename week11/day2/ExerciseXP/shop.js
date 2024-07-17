const {products} = require("./products.js")

function getProduct (product) {
    return products.filter((item)=>item.name === product)
}

console.log(
    getProduct("iphone")
)