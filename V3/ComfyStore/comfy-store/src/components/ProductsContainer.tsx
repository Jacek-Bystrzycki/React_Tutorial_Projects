import { ReactElement, useState } from 'react';
import { ProductsGrid, ProductsList } from './index';
import { useLoaderDataHook } from '../utils/useLoaderDataHook';
import { APIResponse } from '../types/API';
import { FaList } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';

const ProductsContainer = (): ReactElement => {
  const { meta } = useLoaderDataHook<APIResponse>();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<string>('grid');

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300">
        <h4 className="capitalize font-medium text-lg">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => {
              setLayout('list');
            }}
            className={`btn btn-circle btn-sm ${layout === 'list' ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`}
          >
            <FaList className="h-6 w-6" />
          </button>
          <button
            onClick={() => {
              setLayout('grid');
            }}
            className={`btn btn-circle btn-sm ${layout === 'grid' ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`}
          >
            <BsFillGridFill className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">Sorry, no products matched your search...</h5>
        ) : layout === 'list' ? (
          <ProductsList />
        ) : (
          <ProductsGrid />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
