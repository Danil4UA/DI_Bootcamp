
const Hello = (props) => {
    const {username, email} = props
    return (
        <>
            <h1>Hi, {username} {email}</h1>
        </>
    )
}

export default Hello