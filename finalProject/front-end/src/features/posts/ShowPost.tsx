
interface ShowPostProps {
    content: string
}


const ShowPost = ({content}: ShowPostProps) => {
    return (
        <>
            <div>{content}</div>
        </>
    )
}

export default ShowPost