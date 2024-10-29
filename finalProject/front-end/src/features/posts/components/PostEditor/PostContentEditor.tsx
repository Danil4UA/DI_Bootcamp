import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";


interface PostContentEditorProps {
  content: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setContent: any
}

const PostContentEditor = ({ content, setContent, onChange }: PostContentEditorProps) => {

  const [currentPost, setCurrentPost] = useState("");
  const [userRequest, setUserRequest] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleUserRequestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRequest(event.target.value);
  };

  const handleRefinePost = async () => {
    setLoading(true);
    setError(null);


    try {
        const response = await axios.post('http://localhost:5001/api/posts/refine ', {
            originalContent: content,
            userRequest: userRequest,
        });

        setContent(response.data.refinedPost);

        setUserRequest(''); 
    } catch (error) {
        console.error(error);
        setError('Failed to refine the post. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  return (

    
    <>
    <div className="refine-post-container">
      <TextField
          fullWidth
          label="Edit Post Content"
          multiline
          minRows={3}
          value={content}
          onChange={onChange}
          sx={{ mb: 2 }}
        />

            <input
                type="text"
                value={userRequest}
                onChange={handleUserRequestChange}
                placeholder="Enter your request here..."
                className="user-request-input"
                style={{width: "100%"}}
            />

            <button onClick={handleRefinePost} disabled={loading || !userRequest.trim()}>
                {loading ? 'Processing...' : 'Refine Post'}
            </button>
      
    </div>
      
      

    </>
    
  );
};

export default PostContentEditor;