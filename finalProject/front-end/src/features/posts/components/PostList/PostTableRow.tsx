import { TableRow, TableCell, Checkbox, Button, Tooltip, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface PostTableRowProps {
    post: any;
    isSelected: boolean;
    onSelect: () => void;
    onEdit: () => void;
    onDelete: () => void;
    showCheckbox?: boolean;
}

const PostTableRow = ({ post, isSelected, onSelect, onEdit, onDelete, showCheckbox }: PostTableRowProps) => {
    return (
        <TableRow hover selected={isSelected} onClick={onSelect} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
            {showCheckbox && (
                <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox checked={isSelected} onChange={onSelect} />
                </TableCell>
            )}
            <TableCell>
                <Tooltip title={post.content} arrow>
                    <Typography variant="body2" noWrap>
                        {post.content.length > 50 ? `${post.content.slice(0, 120)}...` : post.content}
                    </Typography>
                </Tooltip>
            </TableCell>
            <TableCell>{post.scheduledAt ? new Date(post.scheduledAt).toLocaleString() : 'Not selected'}</TableCell>
            <TableCell>
                <Button variant="contained" color="primary" onClick={(e) => { e.stopPropagation(); onEdit(); }}>
                    Edit
                </Button>
            </TableCell>
            <TableCell align="right">
                <IconButton
                    onClick={(e) => { e.stopPropagation(); onDelete(); }}
                    sx={{
                        color: 'rgba(255, 99, 71, 0.7)',
                        border: '1px solid rgba(255, 99, 71, 0.3)',
                        borderRadius: '4px',
                        '&:hover': {
                            color: 'rgba(255, 69, 0, 0.9)',
                            borderColor: 'rgba(255, 69, 0, 0.5)',
                            backgroundColor: 'rgba(255, 235, 238, 0.3)',
                        },
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default PostTableRow;
