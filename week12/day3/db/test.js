const knex = require("knex")

const db = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        port: "5432",
        user: "postgres",
        database: "myDataBase",
        password: "1234" ,
        // ssl: { rejectUnauthorized: false }
    }
})

async function getVersion(){
    try{
        const result = await db.raw(`select version()`)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
// getVersion()


// select statement. It returns a promise. 
// db.raw(`select * from products`)
// .then((data)=>{
//     console.log(data.rows)
// })
// .catch((err)=>{console.log(err)})

//query builder

// db("products")
// .select("id", "name", "price")
// .whereIn("id", [1,2])
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{console.log(err)})

//insert

// db("products")
// .insert([
//     {name: "aaa", price: "900"},
//     {name: "bbb", price: "999"},
// ],["id", "name", "price"])
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{console.log(err)})

//update 

// db("products")
// .update({name: "Product 100", price: "111"},["name"])
// .where({id: 1})
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{console.log(err)})

//delete 

db("products")
.where({id:2})
.del()
.returning(["id", "name", "price"])
.then((data)=>{
    console.log(data)
})
.catch((err)=>{console.log(err)})