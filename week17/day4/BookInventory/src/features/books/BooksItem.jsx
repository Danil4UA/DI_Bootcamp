const BooksItem  = (props) => {
    const { title, author, genre } = props.item
    return (
        <>
            <div>
                <h3>title: {title}</h3>
                <p>author: {author}</p>
                <p>genre: {genre}</p>
            </div>
        </>
    )
}
export default BooksItem