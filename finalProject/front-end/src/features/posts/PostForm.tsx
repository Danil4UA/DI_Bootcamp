import InputText from "./InputText"
import SubmitPost from "./SubmitPost"
import SelectInput from "./SelectInput"


import { useState } from "react"
import {createPost} from "./state/postSlice"
import { useAppDispatch } from "./state/postsHooks"
import {setCurrentResult} from "./state/postSlice"

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
            const currentResult = createPostsResponse.payload.post.content
            dispatch(setCurrentResult(currentResult))

        } catch (error) {
            console.log(error)
        }
        
    }
    
    return (
        <>
            {/* <form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <InputText 
                    placeholder="Audience" 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)} 
                />
                <InputText 
                    placeholder="Style" 
                    value={style}
                    onChange={(e) => setStyle(e.target.value)} 
                />
                <SelectInput 
                    size={['small', 'medium', 'large']} 
                    onChange={(e) => setSize(e.target.value)} 
                />
                <SelectInput 
                    language={['ENG', 'SPA', 'FRA']} 
                    onChange={(e) => setLanguage(e.target.value)} 
                />
                <SelectInput 
                    platform ={['Facebook', 'Twitter(X)', 'Instagram']} 
                    onChange={(e) => setPlatform(e.target.value)} 
                />
                <InputText 
                    placeholder="Enter your request" 
                    value={request}
                    onChange={(e) => setRequest(e.target.value)} 
                />
                <SubmitPost />
            </form> */}


            <Box component="form" onSubmit={handleSubmit} sx={{ width: '400px', padding: '20px' }}>
                {/* Поле для ввода запроса */}
                <TextField
                    label="Your prompt"
                    multiline
                    rows={4}
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />

                {/* Выбор тона голоса */}
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

                {/* Поле для выбора количества слов */}
                <Typography gutterBottom>Approximate characthers: {formData.characthersCount}</Typography>
                <Slider
                    value={formData.characthersCount}
                    onChange={handleSliderChange}
                    aria-labelledby="word-count-slider"
                    min={10}
                    max={2000}
                    step={10}
                    sx={{ marginBottom: 2 }}
                />

                {/* Переключатели для генерации хэштегов и использования эмодзи */}
                <FormControlLabel
                    control={<Switch name="hashtags" checked={formData.hashtags} onChange={handleChange} />}
                    label="Generate hashtags"
                />
                <FormControlLabel
                    control={<Switch name="emojis" checked={formData.emojis} onChange={handleChange} />}
                    label="Include emojis"
                />

                {/* Кнопка для отправки формы */}
                <Button type="submit" variant="contained" fullWidth>
                    Generate
                </Button>
            </Box>
        </>
        



    )
}

export default PostForm