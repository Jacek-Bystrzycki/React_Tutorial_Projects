import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { APIResponse } from '../types/API';
import { useLoaderDataHook } from '../utils/useLoaderDataHook';
import { UserRoutes } from '../types';
import { formtPrice } from '../utils/formatPrice';

const ProductsGrid = (): ReactElement => {
  const { data } = useLoaderDataHook<APIResponse>();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link to={`${UserRoutes.products}/${product.id}`} key={product.id} className="card w-full shadow-xl hover:shadow-2xl transition duration-300">
            <figure className="pt-4 px-4">
              <img src={image} alt={title} className="rounded-xl h-64 md:48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary ">{formtPrice(price)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
