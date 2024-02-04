import { UserRoutes } from '../types';
import { LinkType } from '../types/Link';

export const links: LinkType[] = [
  {
    id: 1,
    url: UserRoutes.root,
    text: 'home',
  },
  {
    id: 2,
    url: UserRoutes.about,
    text: 'about',
  },
  {
    id: 3,
    url: UserRoutes.products,
    text: 'products',
  },
  {
    id: 4,
    url: UserRoutes.cart,
    text: 'cart',
  },
  {
    id: 5,
    url: UserRoutes.checkout,
    text: 'checkout',
  },
  {
    id: 6,
    url: UserRoutes.orders,
    text: 'orders',
  },
];
