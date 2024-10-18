import { useSelectPosts } from './posts/state/postsHooks';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Checkbox, Button, Tooltip, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePost, fetchPosts } from "./posts/state/postSlice";
import { useAppDispatch } from './posts/state/postsHooks';
import { Snackbar } from '@mui/material';


const ManageAccount = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);    

    const [searchQuery, setSearchQuery] = useState(''); // For search input
    const [statusFilter, setStatusFilter] = useState(''); // For status filter


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const posts = useSelectPosts() || [];
    
    const handleSelectPost = (postId: number) => {
        setSelectedPosts((prev) => 
            prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
        );
    };

    const filteredPosts = posts.filter(post => 
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (statusFilter ? post.status === statusFilter : true)
    );
    

    const handleEdit = (postId: number) => {
        navigate(`/edit-post/${postId}`);
    };

    const handleDeletePosts = async () => {
        try {
            await Promise.all(selectedPosts.map(id => 
                dispatch(deletePost(id))
            ));
            console.log('Deleted posts:', selectedPosts);
            setSelectedPosts([]);
            setOpenSnackbar(true)
        } catch (error) {
            console.error('Failed to delete posts:', error);
        }
    };

    return (
        <div style={{ position: 'relative', padding: "30px 0" }}>
            {/* <Typography variant="h4" gutterBottom>
                Manage Your Posts
            </Typography> */}
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={3000}
                        onClose={() => setOpenSnackbar(false)}
                        message="Posts deleted successfully"
                    />

            {/* Search and filter section */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <TextField
                    label="Search by content"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        label="Status"
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="published">Published</MenuItem>
                        <MenuItem value="draft">Draft</MenuItem>
                        <MenuItem value="archived">Archived</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Select</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Content</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPosts && filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <TableRow 
                                    key={post.id} 
                                    hover 
                                    selected={selectedPosts.includes(post.id)}
                                    onClick={() => handleSelectPost(post.id)}
                                    sx={{ 
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                        },
                                    }}
                                >
                                    <TableCell onClick={(e) => e.stopPropagation()}>
                                        <Checkbox 
                                            checked={selectedPosts.includes(post.id)} 
                                            onChange={() => handleSelectPost(post.id)} 
                                        />
                                    </TableCell>
                                    <TableCell>{post.id}</TableCell>
                                    <TableCell>{post.user_id}</TableCell>
                                    <TableCell>
                                        <Tooltip title={post.content} arrow>
                                            <Typography variant="body2" noWrap>
                                                {post.content.length > 50 ? `${post.content.slice(0, 100)}...` : post.content}
                                            </Typography>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>{post.status}</TableCell>
                                    <TableCell>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleEdit(post.id);
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    No posts available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {selectedPosts.length > 0 && (
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleDeletePosts} 
                    style={{ 
                        position: 'fixed', 
                        bottom: '16px', 
                        right: '16px', 
                        zIndex: 1000, 
                    }}
                >
                    Delete Selected Posts
                </Button>
            )}
        </div>
    );
};

export default ManageAccount;
