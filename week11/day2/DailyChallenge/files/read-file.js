import fs from "fs"

export function readMe(filePath){
    fs.readFile(filePath, "utf-8", (err,data)=>{
        if (err) console.log(err)
            console.log(data)
    })
}