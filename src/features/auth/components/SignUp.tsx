import { Button, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import theme from '../../../theme';
export default function SignUp() {
  return (
    <>
      <h1>Sign up new account</h1>
      <Stack
        direction={'column'}
        spacing={3}
        sx={{
          pb: 2,
        }}
      >
        <TextField
          label="username"
          required={true}
          variant="standard"
        ></TextField>

        <TextField
          label="password"
          required={true}
          variant="standard"
          type="password"
        ></TextField>

        <TextField
          label="confirm password"
          required={true}
          variant="standard"
          type="password"
        ></TextField>
      </Stack>
      <Link to={'/auth'}>
        <Button
          sx={{
            gap: theme.spacing(1),
          }}
        >
          <LoginIcon />
          <p>Alredy have an account?</p>
        </Button>
      </Link>
    </>
  );
}
