import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Stack className="header" direction="row" alignItems="center" spacing={2}>
      <DocumentScannerIcon fontSize="large" color="primary" />
      <Typography variant="h6">
        <Link to="/">Note App</Link>
      </Typography>
      <Chip size="small" label="BETA" color="info" />
    </Stack>
  );
}
