import PostForm from "./posts/PostForm"
import PostResult from "./posts/PostResult"
const GeneratePost = () => {
    return (
    <>
        <h2>Post Generation</h2>
        <div style={{display: "flex"}}>
            <PostForm />
            <PostResult />
        </div>
    </>
    )

}

export default GeneratePost
