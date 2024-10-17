import { useState } from "react";
import { createPost, fetchPosts } from "./state/postSlice";
import { useAppDispatch } from "./state/postsHooks";
import { setCurrentResult } from "./state/postSlice";
import { TextField, Button, Switch, Slider, Typography, Box, FormControlLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const PostForm = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const toneOfVoice = ["Polite", "Witty", "Enthusiastic", "Friendly", "Informational", "Funny"];
    const audienceOptions = ["any", "adults", "teenagers", "children"];
    const sizeOptions = ["Short", "Medium", "Long"];
    const platformOptions = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

    const [formData, setFormData] = useState({
        audience: "any",
        request: "",
        size: "Short", // Default size
        language: "ENG",
        platform: "Facebook",
        hashtags: true,
        emojis: false,
        characthersCount: 100,
        tone: "Polite", // Combined tone and style into one field
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | SelectChangeEvent<string>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    
        const updatedValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
        setFormData((prevState) => ({
            ...prevState,
            [name]: updatedValue,
        }));
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        event.preventDefault();
        setFormData((prevState) => ({
            ...prevState,
            characthersCount: newValue as number,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const content = { ...formData };
            console.log(content);
            const createPostsResponse = await dispatch(createPost(content));
            await dispatch(fetchPosts());

            const currentResult = createPostsResponse.payload.post.content;
            dispatch(setCurrentResult(currentResult));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ minWidth: '550px', padding: '20px' }}>
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

                <Typography gutterBottom>Tone of voice</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: 2 }}>
                    {toneOfVoice.map((tone) => (
                        <Button
                            key={tone}
                            variant={formData.tone === tone ? 'contained' : 'outlined'}
                            onClick={() => setFormData((prevState) => ({ ...prevState, tone }))}
                        >
                            {tone}
                        </Button>
                    ))}
                </Box>

                <Typography gutterBottom>Approximate characters: <span>{formData.characthersCount}</span></Typography>
                <Slider
                    value={formData.characthersCount}
                    onChange={handleSliderChange}
                    aria-labelledby="word-count-slider"
                    min={10}
                    max={1000}
                    step={10}
                    sx={{ marginBottom: 2 }}
                />

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel id="audience-label">Audience</InputLabel>
                    <Select
                        labelId="audience-label"
                        name="audience"
                        value={formData.audience}
                        onChange={handleChange}
                    >
                        {audienceOptions.map((aud) => (
                            <MenuItem key={aud} value={aud}>{aud}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel id="size-label">Size</InputLabel>
                    <Select
                        labelId="size-label"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                    >
                        {sizeOptions.map((size) => (
                            <MenuItem key={size} value={size}>{size}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel id="platform-label">Platform</InputLabel>
                    <Select
                        labelId="platform-label"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                    >
                        {platformOptions.map((platform) => (
                            <MenuItem key={platform} value={platform}>{platform}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

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
    );
}

export default PostForm;