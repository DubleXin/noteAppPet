import { Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { ContextMenuContext, useMenu } from '../context/ContextMenuContext';

export type MenuItem = {
  label: string;
  onClick: (target?: object) => void;
};

export type CtxContextMenu = {
  isOpen: boolean;
  mouseX: number;
  mouseY: number;
  items: MenuItem[];
  target?: object;
};

export type Ctx = CtxContextMenu & {
  open: (x: number, y: number, items: MenuItem[]) => void;
  close: () => void;
};

type MenuProviderProps = {
  children: React.ReactNode;
};

export function MenuProvider({ children }: MenuProviderProps) {
  const [state, setState] = useState<CtxContextMenu>({
    isOpen: false,
    mouseX: 0,
    mouseY: 0,
    items: [],
  });
  function open(x: number, y: number, items: MenuItem[], target?: object) {
    setState((prev) => ({
      ...prev,
      isOpen: true,
      mouseX: x,
      mouseY: y,
      items,
      target,
    }));
  }
  function close() {
    setState((prev) => ({ ...prev, isOpen: false, target: undefined }));
  }
  return (
    <ContextMenuContext.Provider value={{ ...state, open, close }}>
      {children}
    </ContextMenuContext.Provider>
  );
}

export default function ContextMenu() {
  const { isOpen, mouseX, mouseY, items, close, target } = useMenu();
  return (
    <Menu
      anchorReference="anchorPosition"
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      anchorPosition={isOpen ? { left: mouseX, top: mouseY } : undefined}
      keepMounted
      open={isOpen}
      onClose={close}
    >
      {items.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            item?.onClick(target);
            close();
          }}
        >
          <Typography>{item.label}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}
