import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../App';

const SingleProduct = (): ReactElement => {
  const { id } = useParams<RouteParams>();

  return <h1 className="text-4xl">Single Product</h1>;
};
export default SingleProduct;
