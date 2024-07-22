import express from "express"

const app = express()
const port = 5001

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})

app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

const data = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedYear: 1951
    },
    {
      id: 5,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedYear: 1851
    }
  ];

app.get("/api/books",(req,res)=>{
    res.json(data)
})

app.get("/api/books/:bookId", (req,res)=>{
    const {bookId} = req.params
    const index = data.findIndex(item=>item.id == bookId)
    if(index === -1)res.json({message: "Book not fount in the database"}).status(404)
    res.json(data[index]).status(200)
})

app.post("/api/books/", (req,res)=>{
    const newBook = {...req.body, id: data.length + 1}
    data.push(newBook)
    res.json(data).status(201)
})