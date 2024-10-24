import PostForm from "./PostForm";
import PostResult from "./PostResult";


const GeneratePost = () => {
    return (
        <>
            <div className="generate-post-container">
                <PostForm />
                <PostResult />
            </div>
        </>
    );
};

export default GeneratePost;