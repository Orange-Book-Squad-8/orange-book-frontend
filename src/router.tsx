import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './routes/layout';
import { Index } from './routes/index';
import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Register } from './routes/register';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

export default Router;
