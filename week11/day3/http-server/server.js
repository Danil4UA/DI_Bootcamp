const http = require("http")

const server = http.createServer((req,res)=>{
    // send response 
    let users = [
        {name: "Jhon", age: 301},
        {name: "Anne", age: 23},
        {name: "Michael", age: 41},
    ]
    res.end(JSON.stringify(users))
});

server.listen(3000);