interface BookItemProps {
    title: string,
    author: string[] | "not found",
    // image: string
}

const BookItem = ({title, author="not found"}: BookItemProps): JSX.Element => {
    return (
        <>
            <div style={{width: "200px", height: "300px", border: "1px solid"}}>
                <p>title: {title}</p>
                <p>author: {author}</p>
                {/* <img src={image} alt="" /> */}
            </div>
        </>
    )
}

export default BookItem