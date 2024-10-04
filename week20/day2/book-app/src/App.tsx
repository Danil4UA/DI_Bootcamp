import BookList from './features/books/ BookList'
import Header from './features/books/state/Header'
import Book from './features/books/state/Book'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <Book />
      <BookList />
   
    </>
  )
}

export default App
