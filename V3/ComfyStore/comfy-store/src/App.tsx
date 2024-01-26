import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './pages/routes';

export type RouteParams = {
  id: string;
};
export type CustomCompProps = {
  children?: ReactElement | ReactElement[];
};

const router = createBrowserRouter(routes);

const App = (): ReactElement => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
