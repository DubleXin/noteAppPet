import { type SidebarFooterProps } from '@toolpad/core/DashboardLayout';
import Typography from '@mui/material/Typography';

export default function Footer({ mini }: SidebarFooterProps) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? (
        <p
          style={{
            fontSize: 'smaller',
          }}
        >
          {`© Sasada`}
          <br /> {`Dev`}
        </p>
      ) : (
        `© ${new Date().getFullYear()} created by SasadaDev`
      )}
    </Typography>
  );
}
