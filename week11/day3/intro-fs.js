const fs = require("fs")

console.log("before")
// try{
//     const data = fs.readFileSync("info.txt", "utf-8")
//     console.log(data)
// }catch(err){
//     console.log(err)
// }

// fs.readFile("info.txt", "utf-8", (err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

// console.log("after")

// let data = [
//     {
//         user: "aaa",
//         email: "aaa"
//     },
//     {
//         user: "bbb",
//         email: "bbb"
//     },
//     {
//         user: "ccc",
//         email: "ccc"
//     }
// ]

// fs.writeFile("users.json", data, "utf-8", (err)=>{
//     if (err) console.log(err)
//     console.log(data);
// })

// let data = "1234"

// fs.appendFile("newfile",data, "utf-8", (err)=>{
//     if(err) console.log(err)
//         console.log("file created")
// })

fs.copyFile("newfile", "newfile-2", (err)=>{
    if(err)console.log(err)
        console.log("copied")
})