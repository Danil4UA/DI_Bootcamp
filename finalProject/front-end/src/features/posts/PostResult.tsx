import { useSelectPostsCurrentResult } from "./state/postsHooks";
import { Box, Typography } from "@mui/material";

const PostResult = (): JSX.Element | null => {
    const currentResult = useSelectPostsCurrentResult();
    if (!currentResult) {
        return null;
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
                Generated Post
            </Typography>
            <div style={{ textAlign: "left", lineHeight: "1.5" }}>
                {currentResult.split('\n\n').map((paragraph: string, index: number) => (
                    <Typography key={index} component="p">
                        {paragraph}
                    </Typography>
                ))}
            </div>
        </Box>
    );
};

export default PostResult;