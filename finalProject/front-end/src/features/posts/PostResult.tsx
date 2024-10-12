import { useSelectPostsCurrentResult } from "./state/postsHooks"

const PostResult = () => {
    const currentResult = useSelectPostsCurrentResult()
    if(!currentResult){
       return
    }

    return (
        <>
            
            <div style={{width: "50%", padding: "20px", fontSize:"18px", lineHeight: "25px"}}>
                <h3>Result:</h3>
                <div style={{textAlign:"left"}}>
                    {
                    currentResult
                    .split('\n\n')
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)
                    }
                </div>
                
            </div>

            
        </>
    )
}

export default PostResult