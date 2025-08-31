import { useEffect } from 'react';
import folders from '../../../assets/folders';
import FolderIcon from '@mui/icons-material/Folder';
import useLoadWorkspaces from './useLoadWorkspaces';
import type { Navigation } from '@toolpad/core';
import { handleContextMenu } from '../../contextMenu/tools/contextMenuBehaviour';
import { useMenu } from '../../contextMenu/context/ContextMenuContext';
import type { MenuItem } from '../../contextMenu/components/ContextMenu';

function makeFolderAction(
  id: number,
  open: (x: number, y: number, items: MenuItem[], target?: object) => void
) {
  return (
    <div
      className="folder"
      data-id={id}
      onContextMenu={(event) =>
        handleContextMenu(event, { name: 'folder' }, open)
      }
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default function useLoadFolders(
  setNav: React.Dispatch<React.SetStateAction<Navigation>>
) {
  const [workspaces] = useLoadWorkspaces();
  const { open } = useMenu();
  useEffect(() => {
    const folderList = folders.map(({ id, title }) => {
      const children = workspaces.flatMap((workspace) =>
        workspace.folder_id === id ? [workspace.ui] : []
      );
      if (children.length != 0)
        return {
          title: title,
          icon: <FolderIcon />,
          children: children,
          action: makeFolderAction(id, open),
        };
      return {
        segment: `empty_folder/${id}`,
        title: title,
        icon: <FolderIcon />,
        action: makeFolderAction(id, open),
      };
    });
    setNav(folderList);
  }, [open, setNav, workspaces]);
}
