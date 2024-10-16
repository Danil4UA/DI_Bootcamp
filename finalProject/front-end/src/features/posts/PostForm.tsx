import { useState } from "react"
import {createPost, fetchPosts} from "./state/postSlice"
import { useAppDispatch } from "./state/postsHooks"
import {setCurrentResult} from "./state/postSlice"
// import { useSelectPosts } from "./state/postsHooks"

import { TextField, Button, Switch, Slider, Typography, Box, FormControlLabel } from '@mui/material';



const PostForm = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const toneOfVoice = ["Polite", "Witty", "Enthusiastic", "Friendly", "Informational", "Funny"]


    const [formData, setFormData] = useState({
        audience: "any",
        style: "formal",
        request: "",
        size: "",
        language: "ENG",
        platform: "Facebook",
        hashtags: true,
        emojis: false,
        characthersCount: 100,
        tone: "Polite",
      });
    

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
      
        const updatedValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
      
        setFormData((prevState) => ({
          ...prevState,
          [name]: updatedValue,
        }));
      };

      const handleSliderChange = (event: Event, newValue: number | number[]) => {
        event.preventDefault()
        setFormData((prevState) => ({
            ...prevState,
            characthersCount: newValue as number,
        }));
        };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const content = { ...formData }
            console.log(content)
            const createPostsResponse = await dispatch(createPost(content))
            await dispatch(fetchPosts())

            const currentResult = createPostsResponse.payload.post.content
            dispatch(setCurrentResult(currentResult))

        } catch (error) {
            console.log(error)
        }
        
    }
    
    return (
        <>
             <Box component="form" onSubmit={handleSubmit} sx={{ padding: 3 }}>
            <TextField
                label="Your prompt"
                multiline
                rows={4}
                name="request"
                value={formData.request}
                onChange={handleChange}
                fullWidth
                sx={{ marginBottom: 2 }}
                variant="outlined"
            />

         
                <Typography gutterBottom>Tone of voice</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: 2 }}>
                    {toneOfVoice.map((tone) => (
                        <Button
                            key={tone}
                            variant={formData.style === tone ? 'contained' : 'outlined'}
                            onClick={() => setFormData((prevState) => ({ ...prevState, style: tone }))}
                        >
                            {tone}
                        </Button>
                    ))}
                </Box>
                <Typography gutterBottom>Approximate characthers: <span>{formData.characthersCount}</span></Typography>
                <Slider
                    value={formData.characthersCount}
                    onChange={handleSliderChange}
                    aria-labelledby="word-count-slider"
                    min={10}
                    max={1000}
                    step={10}
                    sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                    control={<Switch name="hashtags" checked={formData.hashtags} onChange={handleChange} />}
                    label="Generate hashtags"
                />
                <FormControlLabel
                    control={<Switch name="emojis" checked={formData.emojis} onChange={handleChange} />}
                    label="Include emojis"
                />



                <Button type="submit" variant="contained" fullWidth>
                    Generate
                </Button>
            </Box>
        </>
        



    )
}

export default PostForm