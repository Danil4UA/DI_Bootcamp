import InputText from "./InputText"
import SubmitPost from "./SubmitPost"
import SelectInput from "./SelectInput"

import {createPost} from "./state/postSlice"
import { useAppDispatch } from "./state/postsHooks"

const PostForm = (): JSX.Element => {
    const dispatch = useAppDispatch()
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const content = {
                "language": "ENG",
                "request": "Post for flower advertising",
                "size": "medium (100words)",
                "emojis": false,
                "style": "formal",
                "audience": "students"
            }
            const createPostsResponse = dispatch(createPost(content))
            console.log(createPostsResponse)
        } catch (error) {
            
        }
        
    }
    return (
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <InputText placeholder="Audience"/>
            <InputText placeholder="Style"/>
            <SelectInput size={['small', 'medium', 'large']}/>
            <SelectInput language={['ENG', 'SPA', 'FRA']}/>
            <InputText placeholder="Enter your request"/>
            <SubmitPost />
        </form>
    )
}

export default PostForm