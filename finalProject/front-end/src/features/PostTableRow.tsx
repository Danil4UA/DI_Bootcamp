import { TableRow, TableCell, Checkbox, Button, Tooltip, Typography } from '@mui/material';

interface PostTableRowProps {
    post: any; // Замените на ваш тип данных
    isSelected: boolean;
    onSelect: () => void;
    onEdit: () => void;
}

const PostTableRow = ({ post, isSelected, onSelect, onEdit }: PostTableRowProps) => {
    return (
        <TableRow 
            hover 
            selected={isSelected}
            onClick={onSelect}
            sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
        >
            <TableCell onClick={(e) => e.stopPropagation()}>
                <Checkbox checked={isSelected} onChange={onSelect} />
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
                        onEdit();
                    }}
                >
                    Edit
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default PostTableRow;