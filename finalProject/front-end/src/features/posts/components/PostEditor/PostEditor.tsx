import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelectPosts } from '../../state/postsHooks';
import { Post } from "../../state/postSlice";
import { Box } from "@mui/material";
import { format, parseISO } from 'date-fns';
import PostContentEditor from "./PostContentEditor";
import PostImageUploader from "./PostImageUploader";
import PostSavePublishButtons from "./PostSavePublishButtons";
// import PostDateTimePicker from "./PostDateTimePicker";
import IPhoneMockup from "./iPhoneMockup";
import axios from "axios";
// import PostCustomSelect from "../PostForm/PostCustomSelect";



const PostEditor = () => {
  const { postId } = useParams();
  const posts = useSelectPosts();
  const [isSaving, setIsSaving] = useState(false);
  const [content, setContent] = useState<string>(''); 
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [publishDate, setPublishDate] = useState<string>("");
  const [publishTime, setPublishTime] = useState<string>("");

  const foundPost = posts.find((post: Post) => post.id === Number(postId));

  useEffect(() => {
    if (foundPost) {
      setContent(foundPost.content || '');
      setImageUrl(foundPost.file_url || null);

      if (foundPost.scheduled_at) {
        const dateTimeParts = foundPost.scheduled_at.split('T');
        setPublishDate(dateTimeParts[0]);

        const localTime = format(parseISO(foundPost.scheduled_at), 'HH:mm');
        setPublishTime(localTime);
      } else {
        setPublishDate("");
        setPublishTime("");
      }
    }
  }, [foundPost]);

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setImageUrl(event.target?.result as string);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    setFile(null);
  };


  const handleSave = async () => {
            if (foundPost) {
                try {
                    setIsSaving(true);
                    const formData = new FormData();
                    formData.append('content', content || '');
                    if (file) {
                        formData.append('file', file);
                    }
    
                    if (publishDate && publishTime) {
                        const scheduledDateTime = `${publishDate}T${publishTime}`;
                        formData.append('scheduled_at', scheduledDateTime);
                    }
    
                    const response = await axios.put(
                        `http://localhost:5001/api/posts/edit/${foundPost.id}`, 
                        formData,
                        { 
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                            withCredentials: true 
                        }
                    );
    
                    console.log('Post updated:', response.data);
                    setIsSaving(false);
                } catch (error) {
                    console.error('Error updating post:', error);
                    setIsSaving(false);
                }
            }
        };
        const handlePublish = async () => {
            if (foundPost) {
                try {
                    setIsSaving(true);
                    const formData = new FormData();
                    formData.append('content', content || '');
                    if (file) {
                        formData.append('file', file);
                    }
        
                    if (publishDate && publishTime) {
                        const scheduledDateTime = `${publishDate}T${publishTime}`;
                        formData.append('scheduled_at', scheduledDateTime);
                    }

                    formData.append('status', 'published');

                    console.log("imageURL => ", imageUrl)
                    console.log(`http://localhost:5001${imageUrl}`)


                    // logic to post with ayrshare.com

                    const data = {
                        post: content,
                        platforms: ["linkedin"],
                        // mediaUrls: [`http://localhost:5001${imageUrl}`] // the link will work when application will be on host
                      };
                    
                      fetch('https://app.ayrshare.com/api/post', {
                        method: 'POST',
                        headers: {
                          'Authorization': 'Bearer 6F1726FA-E6FE422E-BE61D134-E3C86A8B',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                      })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error('Error:', error));
        
                    setIsSaving(false);
                } catch (error) {
                    console.error('Error publishing post:', error);
                    setIsSaving(false);
                }
            }
        }

  return (
    <Box display="flex" 
    alignItems="center" 
    // justifyContent="center"
    flexDirection="column" sx={{ minHeight: '90vh', padding: '20px' }}>


      <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="row" gap="100px" sx={{ width: '100%', maxWidth: '1400px' }}>
        <Box flex="1" mr={2} sx={{ maxWidth: '650px', width: '100%' }}>
          {foundPost ? (
            <>
              <PostContentEditor content={content} onChange={handleContentChange} />
              
              {/* <PostDateTimePicker 
                publishDate={publishDate} 
                publishTime={publishTime} 
                onDateChange={(e) => setPublishDate(e.target.value)} 
                onTimeChange={(e) => setPublishTime(e.target.value)} 
              /> */}

                <PostImageUploader imageUrl={imageUrl} onFileChange={handleFileChange} onRemoveImage={handleRemoveImage} />
                   
                <Box className="post-editor-buttons">
                 
                    <PostSavePublishButtons isSaving={isSaving} onSave={handleSave} onPublish={handlePublish} />
                    
               </Box>

               
            </>
          ) : (
            <p>Post not found</p>
          )}
        </Box>
        
        <Box>
          <IPhoneMockup content={content} imageUrl={imageUrl} />
        </Box>
      </Box>
    </Box>
  );
};

export default PostEditor