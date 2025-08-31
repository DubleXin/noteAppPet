import './App.css';
import { Outlet } from 'react-router-dom';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import theme from './theme';
import { useState } from 'react';
import NAVIGATION from './navigation';
import useLoadFolders from './features/workspaces/hooks/useLoadFolders';

function App() {
  const [nav, setNav] = useState(NAVIGATION);
  useLoadFolders(setNav);

  return (
    <ReactRouterAppProvider navigation={nav} theme={theme}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}

export default App;
