const Post = (props) => {

    const {title, sub, body} = props

    return (
        <div>
            <p>Title: {title}</p>
            <p>Sub: {sub}</p>
            <p>Body: {body}</p>
        </div>
    )
}

export default Post