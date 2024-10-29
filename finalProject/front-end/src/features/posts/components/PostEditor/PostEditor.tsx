import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelectPosts } from '../../state/postsHooks';
import { Post } from "../../state/postSlice";
import { format, parseISO } from 'date-fns';
import PostContentEditor from "./PostContentEditor";
import PostImageUploader from "./PostImageUploader";
import PostSavePublishButtons from "./PostSavePublishButtons";
import IPhoneMockup from "./iPhoneMockup";
import axios from "axios";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";



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

                    // const data = {
                    //     post: content,
                    //     platforms: ["linkedin"],
                    //   };
                    
                    //   fetch('https://app.ayrshare.com/api/post', {
                    //     method: 'POST',
                    //     headers: {
                    //       'Authorization': 'Bearer 6F1726FA-E6FE422E-BE61D134-E3C86A8B',
                    //       'Content-Type': 'application/json'
                    //     },
                    //     body: JSON.stringify(data)
                    //   })
                    //     .then(response => response.json())
                    //     .then(data => console.log(data))
                    //     .catch(error => console.error('Error:', error));
        
                    setIsSaving(false);
                } catch (error) {
                    console.error('Error publishing post:', error);
                    setIsSaving(false);
                }
            }
        }

  return (
    <div className="post-editor-container">
      <div className="post-editor-content">
        <div className="post-editor-left">
          {foundPost ? (
            <>
              <div className="post-content-editor">
                <PostContentEditor content={content} setContent={setContent} onChange={handleContentChange} />
              </div>

{/* 
              <div className="post-image-uploader">
                <PostImageUploader imageUrl={imageUrl} onFileChange={handleFileChange} onRemoveImage={handleRemoveImage} />
              </div> */}


              <div className="post-editor-buttons" style={{position:"absolute", top:"16px", right:"24px"}}>
                <PostSavePublishButtons isSaving={isSaving} onSave={handleSave} onPublish={handlePublish} />
              </div>

            </>
          ) : (
            <p>Post not found</p>
          )}
        </div>

        <div className="post-editor-right">

        <div className="device-icons-container">
            <LaptopMacIcon fontSize="small" />
            <TabletMacIcon fontSize="small" />
            <PhoneIphoneIcon fontSize="small" />
        </div>

          <IPhoneMockup content={content} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default PostEditor