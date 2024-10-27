import { Button, CircularProgress } from "@mui/material";

interface PostSavePublishButtonsProps {
  isSaving: boolean;
  onSave: () => void;
  onPublish: () => void;
}

const PostSavePublishButtons = ({ isSaving, onSave, onPublish }: PostSavePublishButtonsProps) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onSave}
        disabled={isSaving}
        sx={{ mr: 1 }}
      >
        {isSaving ? <CircularProgress size={24} /> : "Save Changes"}
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={onPublish}
        disabled={isSaving}
      >
        {isSaving ? <CircularProgress size={24} /> : "Publish"}
      </Button>
    </>
  );
};

export default PostSavePublishButtons;