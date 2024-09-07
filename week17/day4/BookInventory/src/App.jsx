
import './App.css'
import BooksList from './features/books/BooksList'
import BooksSelectGenre from "./features/books/BooksSelectGenre"
function App() {


  return (
    <>
      <h1>Books Inventory</h1>
      <BooksSelectGenre />
      <BooksList />

    </>
  )
}

export default App
