import { useSelectPosts } from './posts/state/postsHooks';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Checkbox, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const ManageAccount = () => {
    const posts = useSelectPosts();
    const [selectedPosts, setSelectedPosts] = useState<number[]>([]); 

    const handleSelectPost = (postId: number) => {
      setSelectedPosts((prev) => 
          prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
      );
  };

    const handleDeletePosts = async () => {
      try {

        await Promise.all(selectedPosts.map(id => 
            axios.delete(`http://localhost:5001/api/posts/${id}`, {
              withCredentials: true
            })
        ));
        
        console.log('Deleted posts:', selectedPosts);
        setSelectedPosts([]); // Очищаем выбор
    } catch (error) {
        console.error('Failed to delete posts:', error);
    }
    }
   

    return (
      <div>
      <Typography variant="h4" gutterBottom>
          Manage Your Posts
      </Typography>
      <TableContainer component={Paper}>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Select</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>User ID</TableCell>
                      <TableCell>Content</TableCell>
                      <TableCell>Status</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {posts.length > 0 ? (
                      posts.map((post) => (
                          <TableRow key={post.id}>
                              <TableCell>
                                  <Checkbox 
                                      checked={selectedPosts.includes(post.id)} 
                                      onChange={() => handleSelectPost(post.id)} 
                                  />
                              </TableCell>
                              <TableCell>{post.id}</TableCell>
                              <TableCell>{post.user_id}</TableCell>
                              <TableCell>{post.content}</TableCell>
                              <TableCell>{post.status}</TableCell>
                          </TableRow>
                      ))
                  ) : (
                      <TableRow>
                          <TableCell colSpan={5} align="center">
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
              style={{ marginTop: '16px' }}
          >
              Delete Selected Posts
          </Button>
      )}
  </div>
    );
};

export default ManageAccount;