import { useEffect, useState, type JSX } from 'react';
import sampleWorkspaces from '../../../assets/workspaces';
import DescriptionIcon from '@mui/icons-material/Description';
import { handleContextMenu } from '../../contextMenu/tools/contextMenuBehaviour';
import type { MenuItem } from '../../contextMenu/components/ContextMenu';
import { useMenu } from '../../contextMenu/context/ContextMenuContext';

interface WorkspaceNav {
  ui: {
    segment: string;
    title: string;
    icon: JSX.Element;
  };
  folder_id: number;
}

function makeWorkspaceAction(
  id: number,
  open: (x: number, y: number, items: MenuItem[]) => void
) {
  return (
    <div
      className="workspace"
      data-id={id}
      onContextMenu={(event) =>
        handleContextMenu(event, { name: 'workspace' }, open)
      }
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default function useLoadWorkspaces() {
  const [nav, setNav] = useState<WorkspaceNav[]>([]);
  const { open } = useMenu();
  useEffect(() => {
    const workspaceList: WorkspaceNav[] = sampleWorkspaces.map(
      ({ id, title, folder_id }) => ({
        ui: {
          segment: `workspace/${id}`,
          title,
          icon: <DescriptionIcon />,
          action: makeWorkspaceAction(id, open),
        },
        folder_id,
      })
    );

    setNav(workspaceList);
  }, [open]);

  return [nav, setNav] as const;
}
