import { Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const IPhoneMockup = ({ content, imageUrl }: { content: string; imageUrl: string | null }): JSX.Element => {
    return (
        <Box
            sx={{
                width: '280px',
                height: '600px',
                border: '8px solid black',
                borderRadius: '36px',
                position: 'relative',
                background: '#f2f2f2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <Box
                sx={{
                    width: '270px',
                    height: '560px',
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    top: '20px',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '5px 10px',
                        borderBottom: '1px solid #e0e0e0',
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Username</Typography>
                    <IconButton size="small">
                        <MoreHorizIcon fontSize="small" />
                    </IconButton>
                </Box>

                {imageUrl && (
                    <Box
                        component="img"
                        src={imageUrl.startsWith("data") ? imageUrl : `http://localhost:5001${imageUrl}`}
                        sx={{
                            width: '100%',
                            height: 'auto',
                            mb: 2,
                            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                            borderRadius: '0px',
                            margin: '0',
                        }}
                    />
                )}

                {/* Post content with paragraphs */}
                <Box sx={{ width: '100%', maxHeight: '200px', overflowY: 'auto', mb: 1 }}>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {content.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </Typography>
                </Box>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                        <IconButton>
                            <SaveAltIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>0 Likes</Typography>
                </Box>

                <Box sx={{ width: '100%', mt: 1, borderTop: '1px solid #e0e0e0', pt: 1 }}>
                    <Typography variant="body2" sx={{ color: '#888' }}>View all comments</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default IPhoneMockup;
