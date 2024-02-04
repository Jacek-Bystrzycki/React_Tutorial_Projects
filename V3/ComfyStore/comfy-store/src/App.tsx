import { ReactElement, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { loadCart } from './features/cartSlice';
import { loadFromLocal } from './utils/localStorage';
import { useAppDispatch } from './store';

export type RouteParams = {
  id: string;
};
export interface CustomCompProps {
  children?: ReactElement | ReactElement[];
}

const router = createBrowserRouter(routes);

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCart(loadFromLocal()));
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
