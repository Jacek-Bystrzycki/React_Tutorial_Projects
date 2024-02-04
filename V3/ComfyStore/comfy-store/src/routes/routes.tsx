import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from '../pages';
import { RouteObject } from 'react-router-dom';
import { UserRoutes } from '../types';
import { ErrorElement } from '../components/';
import { loader as landingLoader } from '../pages/Landing';
import { loader as singleProductLoader } from '../pages/SingleProduct';
import { loader as productsLoader } from '../pages/Products';

export const routes: RouteObject[] = [
  {
    path: UserRoutes.root,
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: UserRoutes.products,
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: UserRoutes.productsId,
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: UserRoutes.cart,
        element: <Cart />,
      },
      {
        path: UserRoutes.about,
        element: <About />,
      },
      {
        path: UserRoutes.checkout,
        element: <Checkout />,
      },
      {
        path: UserRoutes.orders,
        element: <Orders />,
      },
    ],
  },
  {
    path: UserRoutes.login,
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: UserRoutes.register,
    element: <Register />,
    errorElement: <Error />,
  },
];
