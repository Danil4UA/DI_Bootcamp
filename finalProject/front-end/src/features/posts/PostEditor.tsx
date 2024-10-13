import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelectPosts } from './state/postsHooks';
import { Post } from "./state/postSlice";
import { Button, TextField, Typography, Box } from "@mui/material";

const PostEditor = () => {
    const { postId } = useParams();
    const posts = useSelectPosts();
    const [isSaving, setIsSaving] = useState(false);
    const [content, setContent] = useState<string | undefined>('');
    const [file, setFile] = useState<File | null>(null);

    const foundPost = posts.find((post: Post) => post.id === Number(postId));

    // Set the content state when the post is found
    if (foundPost && content === '') {
        setContent(foundPost.content);
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSave = async () => {
        if (foundPost) {
            try {
                setIsSaving(true);
                const response = await axios.put(`http://localhost:5001/api/posts/edit/${foundPost.id}`, {
                    content: content
                }, {
                    withCredentials: true
                });

                console.log('Post updated:', response.data);
                setIsSaving(false);
            } catch (error) {
                console.error('Error updating post:', error);
                setIsSaving(false);
            }
        } else {
            console.log('Post not found');
        }
    };

    const handlePublish = async () => {
        if (foundPost) {
            try {
                // Implement your publish functionality here
                console.log("Post published");
            } catch (error) {
                console.error('Error publishing post:', error);
            }
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Post Editor
            </Typography>

            {foundPost ? (
                <Box component="div" sx={{ mt: 2 }}>
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
                        <Typography variant="body1" gutterBottom>
                            Upload Image
                        </Typography>
                        <input type="file" onChange={handleFileChange} />
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
            ) : (
                <Typography variant="body1" gutterBottom>
                    Post not found
                </Typography>
            )}
        </>
    );
};

export default PostEditor;