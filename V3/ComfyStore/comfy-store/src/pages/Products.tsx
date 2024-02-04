import { ReactElement } from 'react';
import { ProductsContainer, PaginationContainer, Filters } from '../components';
import { customFetch } from '../utils/axios';
import { AxiosResponse } from 'axios';
import { APIResponse } from '../types/API';
import { isAPIResponse } from '../types/API';

export const loader = async ({ request }: { request: Request }): Promise<APIResponse> => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const { data }: AxiosResponse = await customFetch<AxiosResponse<APIResponse>>('/products', { params });
  if (isAPIResponse(data)) {
    const products = data.data;
    const meta = data.meta;
    return { data: products, meta };
  } else throw new Error('Wrong data from API...');
};
const Products = (): ReactElement => {
  return (
    <section>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </section>
  );
};
export default Products;
