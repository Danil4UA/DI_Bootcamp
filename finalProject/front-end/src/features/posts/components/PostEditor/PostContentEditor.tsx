import { TextField } from "@mui/material";

interface PostContentEditorProps {
  content: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PostContentEditor = ({ content, onChange }: PostContentEditorProps) => {
  return (
    <TextField
      fullWidth
      label="Edit Post Content"
      multiline
      minRows={3}
      value={content}
      onChange={onChange}
      sx={{ mb: 2 }}
    />
  );
};

export default PostContentEditor;