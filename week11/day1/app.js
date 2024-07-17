/** Node Module System */
const hello = (name)=>{
    console.log(`Hello, ${name}`)
}

const sum = (a,b)=>{
    return a + b 
}

// hello("Daniel")

module.exports = {
    hello,
    sum,
}