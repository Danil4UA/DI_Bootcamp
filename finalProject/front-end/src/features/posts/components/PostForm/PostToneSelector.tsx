import { Button, Box, Typography } from '@mui/material';

interface Props {
    toneOfVoice: string[];
    selectedTone: string;
    onSelectTone: (tone: string) => void;
}

const PostToneSelector = ({ toneOfVoice, selectedTone, onSelectTone }: Props): JSX.Element => (
    <Box className="tone-selector">
        <Typography gutterBottom>Tone of voice</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {toneOfVoice.map((tone) => (
                <Button
                    key={tone}
                    variant={selectedTone === tone ? 'contained' : 'outlined'}
                    onClick={() => onSelectTone(tone)}
                >
                    {tone}
                </Button>
            ))}
        </Box>
    </Box>
);

export default PostToneSelector;