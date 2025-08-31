import { Button, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';
import ToolbarActions from '../../../components/ToolbarActions';

export default function Auth() {
  return (
    <Stack direction={'column'} spacing={5}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          px: 5,
          pt: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Header />
        <ToolbarActions excludeAccount={true} />
      </Stack>
      <div className="auth">
        <Outlet />
      </div>
      <Button
        sx={{
          width: '10%',
          alignSelf: 'center',
        }}
        variant="contained"
      >
        Confirm
      </Button>
    </Stack>
  );
}
