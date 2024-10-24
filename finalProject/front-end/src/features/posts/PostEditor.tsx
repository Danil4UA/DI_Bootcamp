import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelectPosts } from './state/postsHooks';
import { Post } from "./state/postSlice";
import { Button, TextField, Typography, Box, CircularProgress, IconButton } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { format, parseISO } from 'date-fns';
import IPhoneMockup from "./iPhoneMockup";


const PostEditor = () => {
    const { postId } = useParams();
    const posts = useSelectPosts();
    const [isSaving, setIsSaving] = useState(false);
    const [content, setContent] = useState<string>(''); 
    const [file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [publishDate, setPublishDate] = useState<string>("");
    const [publishTime, setPublishTime] = useState<string>("");

    const foundPost = posts.find((post: Post) => post.id === Number(postId));

    useEffect(() => {
        if (foundPost) {
            setContent(foundPost.content || '');
            setImageUrl(foundPost.file_url || null);

            if (foundPost.scheduled_at) {
                const dateTimeParts = foundPost.scheduled_at.split('T');
                setPublishDate(dateTimeParts[0]);

                const localTime = format(parseISO(foundPost.scheduled_at), 'HH:mm');
                setPublishTime(localTime);
            } else {
                setPublishDate("");
                setPublishTime("");
            }
        }
    }, [foundPost]);

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                setImageUrl(event.target?.result as string);
            };
            fileReader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setImageUrl(null);
        setFile(null);
    };

    const handleSave = async () => {
        if (foundPost) {
            try {
                setIsSaving(true);
                const formData = new FormData();
                formData.append('content', content || '');
                if (file) {
                    formData.append('file', file);
                }

                if (publishDate && publishTime) {
                    const scheduledDateTime = `${publishDate}T${publishTime}`;
                    formData.append('scheduled_at', scheduledDateTime);
                }


                // const token = "EAB7Yb4ZCmfIgBOwHzU0l7X1I4jtKMH9d1FaR7kZA8iuEJZAwEUedVRDQDpPNPf7xkIeobNWXeUhS02QtvyeTU4NIlQVWQvhNNGX62IZCrrlnehPJQdNU5gvrRTzQZBolc1rlwfwZATZCqvzh1tMcNEnTAUSctozvi8mEXh9PjKZAS1y6QyLSAUpq7ZBqHtDVzjZCFzO01ymqNYvzTgfvRZCj7NimNO7kxPDe5JjZCY8WoP37btxFQIe0OZCoGEhXCpU1jLZAxZC0QZDZD"

                const response = await axios.put(
                    `http://localhost:5001/api/posts/edit/${foundPost.id}`, 
                    formData,
                    { 
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            // 'Authorization': `Bearer ${token}`
                        },
                        withCredentials: true 
                    }
                );

                console.log('Post updated:', response.data);
                setIsSaving(false);
            } catch (error) {
                console.error('Error updating post:', error);
                setIsSaving(false);
            }
        }
    };
    const handlePublish = async () => {
        if (foundPost) {
            try {
                setIsSaving(true);
                const formData = new FormData();
                formData.append('content', content || '');
                if (file) {
                    formData.append('file', file);
                }
    
                if (publishDate && publishTime) {
                    const scheduledDateTime = `${publishDate}T${publishTime}`;
                    formData.append('scheduled_at', scheduledDateTime);
                }
    
                // Пример для отправки статуса публикации
                formData.append('status', 'published');
    
                // const token = "EAB7Yb4ZCmfIgBOwHzU0l7X1I4jtKMH9d1FaR7kZA8iuEJZAwEUedVRDQDpPNPf7xkIeobNWXeUhS02QtvyeTU4NIlQVWQvhNNGX62IZCrrlnehPJQdNU5gvrRTzQZBolc1rlwfwZATZCqvzh1tMcNEnTAUSctozvi8mEXh9PjKZAS1y6QyLSAUpq7ZBqHtDVzjZCFzO01ymqNYvzTgfvRZCj7NimNO7kxPDe5JjZCY8WoP37btxFQIe0OZCoGEhXCpU1jLZAxZC0QZDZD"
                // const response = await axios.put(
                //     `http://localhost:5001/api/posts/publish/${foundPost.id}`, 
                //     formData,
                //     { 
                //         headers: {
                //             'Content-Type': 'multipart/form-data',
                //             'Authorization': `Bearer ${token}`,
                //         },
                //         withCredentials: true 
                //     }
                // );
    
                // console.log('Post published:', response.data);
                setIsSaving(false);
            } catch (error) {
                console.error('Error publishing post:', error);
                setIsSaving(false);
            }
        }
    };

    
    return (
        <Box 
            display="flex" 
            alignItems="center" // Change this line
            flexDirection="column"
            sx={{ minHeight: '90vh', padding: '20px' }}
        >
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="flex-start" // Change this line
                flexDirection="row"
                gap="300px" 
                sx={{ width: '100%', maxWidth: '1400px' }} // Установите максимальную ширину контейнера
            >
                <Box flex="1" mr={2} sx={{ maxWidth: '450px', width: '100%' }}>
                    {foundPost ? (
                        <Box className="post-editor-container" sx={{ textAlign: 'center' }}>
                            <Box className="post-editor-content">
                                <TextField
                                    fullWidth
                                    label="Edit Post Content"
                                    multiline
                                    minRows={3}
                                    value={content}
                                    onChange={handleContentChange}
                                    sx={{ mb: 2 }}
                                />
                                
                                <Box className="post-editor-buttons" sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        component="label"
                                        color="primary"
                                        className="upload-btn"
                                        startIcon={<CloudUploadIcon />}
                                        sx={{ mr: 1 }}
                                    >
                                        Choose File
                                        <input type="file" hidden onChange={handleFileChange} />
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSave}
                                        disabled={isSaving}
                                        className="save-btn"
                                        sx={{ mr: 1 }}
                                    >
                                        {isSaving ? <CircularProgress size={24} /> : "Save Changes"}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled={isSaving}
                                        className="publish-btn"
                                        onClick={handlePublish}
                                    >
                                        {isSaving ? <CircularProgress size={24} /> : "Save and Publish"}
                                    </Button>
                                </Box>
                            
                                {imageUrl && (
                                <Box sx={{ position: 'relative', maxWidth: '200px', width: '100%', marginTop: 2 }}>
                                    <Box
                                    component="img"
                                    src={imageUrl.startsWith("data") ? imageUrl : `http://localhost:5001${imageUrl}`}
                                    alt="Post Image"
                                    sx={{
                                        maxWidth: '100%',
                                        borderRadius: '10px',
                                        objectFit: 'cover',
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                    }}
                                    />
                                    <IconButton
                                    onClick={handleRemoveImage}
                                    sx={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        },
                                    }}
                                    >
                                    <DeleteIcon />
                                    </IconButton>
                                </Box>
                                )}
                            </Box>
                        </Box>
                    ) : (
                        <Typography variant="body1" gutterBottom>
                            Post not found
                        </Typography>
                    )}
                </Box>
                
                <Box flex="1" sx={{ width: '100%', maxWidth: '300px', position: 'relative', marginTop: "50px" }}>
                    <IPhoneMockup content={content} imageUrl={imageUrl} />
                </Box>
            </Box>
        </Box>
    );
};
export default PostEditor;