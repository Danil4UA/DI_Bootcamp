import { useSelectPosts } from "../../state/postsHooks.ts";
import { useNavigate } from 'react-router-dom';
import { deletePost, fetchPosts } from "../../state/postSlice.ts";
import { useAppDispatch } from "../../state/postsHooks.ts";
import { Snackbar } from '@mui/material';
import SearchFilter from "./SearchFilter.tsx";
import PostTable from "./PostTable.tsx";
import DeletePostsButton from "./DeletePostsButton.tsx";
import { useState, useEffect } from "react";

const ManageAccount = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [selectedPosts, setSelectedPosts] = useState<number[]>([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);    
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [isDeleting, setIsDeleting] = useState(false); 
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const posts = useSelectPosts() || [];

    const handleSelectPost = (postId: number) => {
        setSelectedPosts((prev) => 
            prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
        );
    };

    const handleEdit = (postId: number) => {
        navigate(`/edit-post/${postId}`);
    };

    const handleDeletePosts = async () => {
        setIsDeleting(true); 
        try {
            await Promise.all(selectedPosts.map(id => dispatch(deletePost(id))));
            setSelectedPosts([]);
            setOpenSnackbar(true);
        } catch (error) {
            console.error('Failed to delete posts:', error);
        }finally {
            setIsDeleting(false);
        }
    };

    const filteredPosts = posts.filter(post => 
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (statusFilter ? post.status === statusFilter : true)
    );

    return (
        <div className="manage-account"> 
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                message="Posts deleted successfully"
            />
            <SearchFilter 
                searchQuery={searchQuery} 
                statusFilter={statusFilter} 
                setSearchQuery={setSearchQuery} 
                setStatusFilter={setStatusFilter} 
            />
            <PostTable 
                posts={filteredPosts} 
                selectedPosts={selectedPosts} 
                onSelectPost={handleSelectPost} 
                onEditPost={handleEdit} 
            />
            <DeletePostsButton 
                selectedPostsCount={selectedPosts.length} 
                onDelete={handleDeletePosts} 
                disabled={isDeleting}
            />
        </div>
    );
};

export default ManageAccount;


