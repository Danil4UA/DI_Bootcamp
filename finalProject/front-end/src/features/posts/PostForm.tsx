import { useState } from "react";
import { createPost, fetchPosts } from "./state/postSlice";
import { useAppDispatch } from "./state/postsHooks";
import { setCurrentResult } from "./state/postSlice";
import { Button, Box, TextField, SelectChangeEvent  } from '@mui/material';
import PostToneSelector from "./PostToneSelector";
import PostSliderComponent from "./PostSliderComponent";
import PostCustomSelect from "./PostCustomSelect";
import PostSwitchComponent from "./PostSwitchComponent";
// import './PostForm.css';

const PostForm = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const toneOfVoice = ["Polite", "Witty", "Enthusiastic", "Friendly", "Informational", "Funny"];
    const audienceOptions = ["any", "Adults", "Teenagers", "Children"];
    const sizeOptions = ["Short", "Medium", "Long"];
    const platformOptions = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

    const [formData, setFormData] = useState({
        audience: "any",
        request: "",
        size: "Short",
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
        setFormData((prevState) => ({ ...prevState, [name]: updatedValue }));
    };


    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const content = { ...formData };
            const createPostsResponse = await dispatch(createPost(content));
            await dispatch(fetchPosts());
            const currentResult = createPostsResponse.payload.post.content;
            dispatch(setCurrentResult(currentResult));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className="form-container">
            <TextField
                label="Your prompt"
                multiline
                rows={4}
                name="request"
                value={formData.request}
                onChange={handleChange}
                fullWidth
                className="form-textfield"
            />
            <PostToneSelector toneOfVoice={toneOfVoice} selectedTone={formData.tone} onSelectTone={(tone) => setFormData({ ...formData, tone })} />
            <PostSliderComponent characthersCount={formData.characthersCount} onSliderChange={(value) => setFormData({ ...formData, characthersCount: value })} />
            <PostCustomSelect label="Audience" name="audience" options={audienceOptions} value={formData.audience} onChange={handleSelectChange} />
            <PostCustomSelect label="Size" name="size" options={sizeOptions} value={formData.size} onChange={handleSelectChange} />
            <PostCustomSelect label="Platform" name="platform" options={platformOptions} value={formData.platform} onChange={handleSelectChange} />
            <PostSwitchComponent name="hashtags" label="Generate hashtags" checked={formData.hashtags} onChange={handleChange} />
            <PostSwitchComponent name="emojis" label="Include emojis" checked={formData.emojis} onChange={handleChange} />
            <Button type="submit" variant="contained" fullWidth>
                Generate
            </Button>
        </Box>
    );
};

export default PostForm;