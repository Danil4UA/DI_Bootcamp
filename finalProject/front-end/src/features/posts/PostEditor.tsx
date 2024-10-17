import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelectPosts } from './state/postsHooks';
import { Post } from "./state/postSlice";
import { Button, TextField, Typography, Box } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const PostEditor = () => {
    const { postId } = useParams();
    const posts = useSelectPosts();
    const [isSaving, setIsSaving] = useState(false);
    const [content, setContent] = useState<string | undefined>('');
    const [file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const foundPost = posts.find((post: Post) => post.id === Number(postId));

    // Устанавливаем содержимое и URL изображения при нахождении поста
    useEffect(() => {
        if (foundPost) {
            setContent(foundPost.content);
            setImageUrl(foundPost.file_url || null);
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

    const handleSave = async () => {
        if (foundPost) {
            try {
                setIsSaving(true);
                const formData = new FormData();
                formData.append('content', content || '');
                if (file) {
                    formData.append('file', file);
                }

                const response = await axios.put(
                    `http://localhost:5001/api/posts/edit/${foundPost.id}`, 
                    formData,
                    { 
                        headers: {
                            'Content-Type': 'multipart/form-data',
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
        } else {
            console.log('Post not found or file not selected');
        }
    };

    const handlePublish = async () => {
        if (foundPost) {
            try {
                console.log("Post published");
            } catch (error) {
                console.error('Error publishing post:', error);
            }
        }
    };

    return (
        <>
            {/* <Typography variant="h5" gutterBottom>
                Post Editor
            </Typography> */}

            {foundPost ? (
                <Box component="div" sx={{ mt: 2, display: 'flex', padding: "30px", gap: "15px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField
                            fullWidth
                            label="Edit Post Content"
                            multiline
                            minRows={3}
                            value={content}
                            onChange={handleContentChange}
                            sx={{ mb: 2 }}
                        />

                        <Box component="div" sx={{ mb: 2 }}>
                            {/* <Typography variant="body1" gutterBottom>
                                Upload Image
                            </Typography> */}
                            <Button
                                variant="contained"
                                component="label"
                                color="primary"
                                startIcon={<CloudUploadIcon />}
                                sx={{ mb: 2 }}
                            >
                                Choose File
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleFileChange}
                                />
                            </Button>
                        </Box>

                        <Box component="div" sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSave}
                                disabled={isSaving}
                            >
                                {isSaving ? "Saving..." : "Save Changes"}
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handlePublish}
                            >
                                Publish Post
                            </Button>
                        </Box>
                    </Box>

                    {/* Отображение существующего изображения */}
                    {imageUrl && (
                        <Box
                            component="img"
                            src={
                                imageUrl?.startsWith("data")
                                    ? imageUrl
                                    : `http://localhost:5001${imageUrl}`
                            }
                            alt="Post Image"
                            sx={{ flex: 1, height: 'auto', maxWidth: '550px' }}
                        />
                    )}
                </Box>
            ) : (
                <Typography variant="body1" gutterBottom>
                    Post not found
                </Typography>
            )}
        </>
    );
};

export default PostEditor;
