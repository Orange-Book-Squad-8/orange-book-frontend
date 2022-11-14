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
        path: '/home',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/course/:courseId',
        element: <CoursePage />
      },
      {
        path: '/course/:courseId/lesson/:lessonId',
        element: <LessonPage />
      },
      {
        path: '/edit/course/:courseId',
        element: (
          <ProtectedRoutes authRole={['admin', 'user1']}>
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
