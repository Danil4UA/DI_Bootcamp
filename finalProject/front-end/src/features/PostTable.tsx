import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PostTableRow from './PostTableRow';

interface PostTableProps {
    posts: any[]; // Замените на ваш тип данных
    selectedPosts: number[];
    onSelectPost: (id: number) => void;
    onEditPost: (id: number) => void;
}

const PostTable = ({ posts, selectedPosts, onSelectPost, onEditPost }: PostTableProps) => {
    return (
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
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <PostTableRow
                                key={post.id}
                                post={post}
                                isSelected={selectedPosts.includes(post.id)}
                                onSelect={() => onSelectPost(post.id)}
                                onEdit={() => onEditPost(post.id)}
                            />
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
    );
};

export default PostTable;