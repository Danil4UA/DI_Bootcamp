import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

interface AuthFormProps {
  title: string;
  onSubmit: (email: string, password: string) => void;
  error: string | null;
}

const AuthForm = ({ title, onSubmit, error }: AuthFormProps): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Box className="auth-form">
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="h5" align="center">{title}</Typography>
        <TextField
          id="email"
          type="email"
          label="Enter your email..."
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          type="password"
          label="Enter your password..."
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained">{title}</Button>
      </Box>
    </Box>
  );
};

export default AuthForm;