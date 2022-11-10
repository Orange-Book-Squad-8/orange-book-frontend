import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './routes/layout';
import { Index } from './routes/index';
import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Register } from './routes/register';
import { ProtectedRoutes } from './routes/protectedRoutes';
import { adminRole, userRole } from './mock-data';

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
        element: <ProtectedRoutes authRole={[userRole,adminRole]}><Dashboard /></ProtectedRoutes>
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

export default Router;
