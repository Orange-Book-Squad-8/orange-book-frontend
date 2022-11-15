import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './routes/layout';
import { Index } from './routes/index';
import { Home } from './routes/home';
import { Dashboard } from './routes/dashboard';
import { Register } from './routes/register';
import { CourseConstructor } from './routes/course-constructor';
import { ProtectedRoutes } from './routes/protected-routes';
import { AdminDashboard } from './routes/admin-dashboard';
import { CoursePage } from './routes/course-page';
import { LessonPage } from './routes/lesson-page';
import { Login } from './routes/login';

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
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/dashboard',
        element:
          <ProtectedRoutes authRole={['admin', 'user']}>
            <Dashboard />
          </ProtectedRoutes>
      },
      {
        path: '/course/:courseId',
        element:
          <ProtectedRoutes authRole={['admin', 'user']}>
            <CoursePage />
          </ProtectedRoutes>
      },
      {
        path: '/course/:courseId/lesson/:lessonId',
        element:
          <ProtectedRoutes authRole={['admin', 'user']}>
            <LessonPage />
          </ProtectedRoutes>
      },
      {
        path: '/edit/course/:courseId',
        element: (
          <ProtectedRoutes authRole={['admin', 'user']}>
            <CourseConstructor />
          </ProtectedRoutes>
        )
      },
      {
        path: '/admin/edit/lessons',
        element: (
          <ProtectedRoutes authRole={['admin']}>
            <AdminDashboard />
          </ProtectedRoutes>
        )
      }
    ]
  }
]);

export default Router;
