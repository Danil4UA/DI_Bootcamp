import {useBooksSelector} from "./state/hooks"
import BooksItem from "./BooksItem"

const BooksList = () => {

    
    const books = useBooksSelector()

    return (
        <>
            <h2>Books List</h2>
            {books.map(item=>(
                <BooksItem key={item.id} item={item}/>
            ))}
        </>
    )
}

export default BooksList