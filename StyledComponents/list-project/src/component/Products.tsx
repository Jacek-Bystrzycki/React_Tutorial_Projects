import { ReactElement } from 'react';
import Title from './Title';
import Product from './Product';

export type ProductType = {
  id: number;
  name: string;
  price: number;
};
const products: ProductType[] = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed', price: 150 },
  { id: 3, name: 'couch', price: 550 },
];

const Products = (): ReactElement => {
  return (
    <section>
      <Title title="all products" />
      {products.map((item, index) => {
        return <Product product={item} key={index} />;
      })}
    </section>
  );
};
export default Products;
