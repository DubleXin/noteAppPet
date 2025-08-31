import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useRequiredParamAsInt } from '../../../hooks/querryHooks';
import useLoadNotes from '../hooks/useLoadNotes';
import { useMenu } from '../../contextMenu/context/ContextMenuContext';
import { handleContextMenu } from '../../contextMenu/tools/contextMenuBehaviour';

export default function Workspace() {
  const id: number = useRequiredParamAsInt('id');
  const [notes] = useLoadNotes(id);
  const { open } = useMenu();

  return (
    <Box sx={{ flexGrow: 1, mt: '1%', ml: '1%', mr: '1%' }}>
      <Grid container spacing={2} className="workspace">
        {notes.map(({ title, content, id }) => (
          <Grid size="grow" maxWidth={'30%'} key={id}>
            <Card
              data-id={id}
              onContextMenu={(event) =>
                handleContextMenu(event, { name: 'note' }, open)
              }
            >
              <CardContent>
                <Typography variant="h4">{title}</Typography>
                <Typography>{content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
