import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './routes/layout';
import { Index } from './routes/index';
import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Register } from './routes/register';
import { CourseConstructor } from './routes/course-constructor';
import { ProtectedRoutes } from './routes/protected-routes';
import { adminRole, userRole } from './mock-data';
import { AdminDashboard } from './routes/admin-dashboard';

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
        element: (
          <ProtectedRoutes authRole={[userRole, adminRole]}>
            <Dashboard />
          </ProtectedRoutes>
        )
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/edit/course',
        element: <CourseConstructor />
      },
      {
        path: '/admin/edit/lessons',
        element: <AdminDashboard />
      },

    ]
  }
]);

export default Router;
