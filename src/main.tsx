import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { MenuProvider } from './features/contextMenu/components/ContextMenu.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </StrictMode>
);
