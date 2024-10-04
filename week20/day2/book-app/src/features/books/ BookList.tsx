import { useSelectBooks, useSelectStatus } from "./state/booksHooks"
import { v4 as uuidv4 } from 'uuid';

import BookItem from "./BookItem"
import type { Book } from "./state/booksSlice"


const  BookList = (): JSX.Element => {
    const books = useSelectBooks()
    const status = useSelectStatus()
    
    console.log(books)
    return (
        <>
            {
            status==="loading" ? <div>{status}</div> : 
            
            <div style={{display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"}}>
                {books.map((item: Book)=>{
                    return <BookItem key={uuidv4()} title={item.volumeInfo.title} author={item.volumeInfo.authors} 
                    // image={item.volumeInfo.imageLinks.thumbnail}
                    />
                })}
            </div>
            
            } 

            
        </>
    )
}

export default BookList