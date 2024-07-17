import {readFile, writeFile} from "fs"

export function readMe(filePath){
    readFile(filePath,"utf-8",(err, data)=>{
        if(err)console.log(err)
            console.log(data)
    })
}

export function writeMe(filePath, data){
    writeFile(filePath, data, (err=>{
        if(err)console.log(err)
            console.log("writing successfully")
    }))
}
