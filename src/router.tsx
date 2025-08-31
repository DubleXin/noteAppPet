import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Workspace from './features/workspaces/components/Workspace';
import App from './App';
import Auth from './features/auth/components/Auth';
import SignIn from './features/auth/components/SignIn';
import SignUp from './features/auth/components/SignUp';
export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/empty_folder/:id',
          },
          {
            path: '/workspace/:id',
            element: <Workspace />,
          },
        ],
      },
      {
        path: '/auth',
        element: <Auth />,
        children: [
          {
            index: true,
            element: <SignIn />,
          },
          {
            path: '/auth/register',
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
