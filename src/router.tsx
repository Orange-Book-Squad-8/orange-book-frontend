import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './routes/layout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
]);

export default Router;
