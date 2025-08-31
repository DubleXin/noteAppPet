import { createContext, useContext } from 'react';
import type { Ctx } from '../components/ContextMenu';

export const ContextMenuContext = createContext<Ctx | null>(null);

export function useMenu() {
  const ctx = useContext(ContextMenuContext);
  if (!ctx) throw new Error('useMenu must be used inside <MenuProvider>');
  return ctx;
}
