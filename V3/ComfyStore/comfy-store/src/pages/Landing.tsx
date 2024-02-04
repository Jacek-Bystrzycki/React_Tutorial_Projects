import { ReactElement } from 'react';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils/axios';
import { APIResponse } from '../types/API';
import { isAPIResponse } from '../types/API';
import { AxiosResponse } from 'axios';

const url: string = '/products?featured=true';

export const loader = async (): Promise<APIResponse> => {
  const { data }: AxiosResponse<APIResponse> = await customFetch<APIResponse>(url);
  if (isAPIResponse(data)) {
    const products = data.data;
    const meta = data.meta;
    return { data: products, meta };
  } else throw new Error('Wrong data from API...');
};

const Landing = (): ReactElement => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
