const Quote = (props) => {
    const {text, author} = props
    return (
        <>
            <div>
                <p>text: {text}</p>
                <p>author: {author}</p>
            </div>
        </>
    )
}

export default Quote