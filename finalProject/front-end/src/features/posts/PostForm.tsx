import InputText from "./InputText"
import SubmitPost from "./SubmitPost"
import SelectInput from "./SelectInput"
import { useState } from "react"

import {createPost} from "./state/postSlice"
import { useAppDispatch } from "./state/postsHooks"

const PostForm = (): JSX.Element => {
    const dispatch = useAppDispatch()
    
    const [audience, setAudience] = useState('');
    const [style, setStyle] = useState('');
    const [request, setRequest] = useState('');
    const [size, setSize] = useState(''); 
    const [language, setLanguage] = useState('ENG')

    const[content, setContet] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const content = {
                language,
                request,
                size,
                emojis: false,
                style,
                audience,
            };
            const createPostsResponse = await dispatch(createPost(content))
            console.log("i am response", createPostsResponse)
            setContet(createPostsResponse.payload.post.content)
        } catch (error) {
            
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputText 
                placeholder="Audience" 
                value={audience}
                onChange={(e) => setAudience(e.target.value)} // обновляем состояние
            />
            <InputText 
                placeholder="Style" 
                value={style}
                onChange={(e) => setStyle(e.target.value)} // обновляем состояние
            />
            <SelectInput 
                size={['small', 'medium', 'large']} 
                onChange={(e) => setSize(e.target.value)} // обновляем состояние
            />
            <SelectInput 
                language={['ENG', 'SPA', 'FRA']} 
                onChange={(e) => setLanguage(e.target.value)} // обновляем состояние
            />
            <InputText 
                placeholder="Enter your request" 
                value={request}
                onChange={(e) => setRequest(e.target.value)} // обновляем состояние
            />
            <SubmitPost />
            <div>Post: {content}</div>
        </form>
    )
}

export default PostForm