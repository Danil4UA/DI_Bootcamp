const Note = (props) => {
    const {title, content} = props

    return (
        <>
            <div className="note">
                <h1>Title: {title}</h1>
                <p>Content: {content}</p>
            </div>
        </>
    )
}

export default Note