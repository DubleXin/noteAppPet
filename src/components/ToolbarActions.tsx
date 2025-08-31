import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ThemeSwitcher } from '@toolpad/core';

function ToolbarActions({ excludeAccount }: { excludeAccount?: boolean }) {
  return (
    <Stack direction="row">
      {!excludeAccount && (
        <Link to="/auth">
          <Button>
            <Stack direction="row" spacing={1}>
              <AccountCircleIcon />
              <p>Login</p>
            </Stack>
          </Button>
        </Link>
      )}
      <ThemeSwitcher />
    </Stack>
  );
}

export default ToolbarActions;
