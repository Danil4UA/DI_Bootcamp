import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";


interface PostContentEditorProps {
  content: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setContent: any
}

const PostContentEditor = ({ content, setContent, onChange }: PostContentEditorProps) => {


  const [userRequest, setUserRequest] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previousContent, setPreviousContent] = useState<string | null>(null);
  const [isRefined, setIsRefined] = useState(false);




  const handleUserRequestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRequest(event.target.value);
  };

  const handleRefinePost = async () => {
    setLoading(true);
    setError(null);


    try {
        setPreviousContent(content);

        const response = await axios.post('http://localhost:5001/api/posts/refine ', {
            originalContent: content,
            userRequest: userRequest,
        });

        setContent(response.data.refinedPost);

        setUserRequest(''); 
        setIsRefined(true); // Показываем кнопку "Get Previous Post"
    } catch (error) {
        console.error(error);
        setError('Failed to refine the post. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  const handleGetPreviousPost = () => {

    if (previousContent !== null) {
      console.log("i was clicked")
      setContent(previousContent);
      setPreviousContent(null);
      setIsRefined(false); // Скрываем кнопку после возврата к предыдущему варианту
    }
  };

  return (
    <div className="refine-post-container">
        <div>
        <TextField
            fullWidth
            label="Edit Post Content"
            multiline
            minRows={5}
            value={content}
            onChange={onChange}
            className="content-input"
        />
       {isRefined && (
          <button
            onClick={handleGetPreviousPost}
            disabled={!previousContent}
            className="get-previous-post-button"
          >
            Get Previous Post
          </button>
        )}
        </div>
        
        
        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
          <input    
              type="text"
              value={userRequest}
              onChange={handleUserRequestChange}
              placeholder="Edit ypur post manually or typing the request here..."
              className="user-request-input"
          />

          <button 
              onClick={handleRefinePost} 
              disabled={loading || !userRequest.trim()} 
              className="refine-post-button"
          >
              {loading ? 'Processing...' : 'Refine Post'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </div>
        
    </div>
);
};

export default PostContentEditor;