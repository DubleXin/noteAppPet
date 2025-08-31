import { Button, Stack, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import theme from '../../../theme';
export default function SignIn() {
  return (
    <>
      <h1>Sign in to your account</h1>
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
      </Stack>
      <Link to={'/auth/register'}>
        <Button
          sx={{
            gap: theme.spacing(1),
          }}
        >
          <CreateIcon />
          <p>Don't have an account?</p>
        </Button>
      </Link>
    </>
  );
}
