import { ReactElement } from 'react';
import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProducts = (): ReactElement => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
