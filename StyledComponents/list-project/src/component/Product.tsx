import { ReactElement } from 'react';
import styled from 'styled-components';
import type { ProductType } from './Products';

type SingleProduct = {
  product: ProductType;
};

const Product = ({ product }: SingleProduct): ReactElement => {
  return (
    <Wrapper price={product.price}>
      <h3>{product.name}</h3>
      <footer>
        <h4>
          product <span>id: </span>
          {product.id}
        </h4>
        <p>price $:{product.price}</p>
      </footer>
    </Wrapper>
  );
};

type WrapperProps = {
  price: number;
};

const Wrapper = styled.div<WrapperProps>`
  text-align: center;
  background: var(--primary-color);
  max-width: 400px;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 1px 3px #222;
    cursor: pointer;
  }
  h3 {
    text-transform: uppercase;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    text-transform: capitalize;
  }
  p {
    color: ${({ price }) => (price > 100 ? 'red' : 'green')};
  }
  span {
    text-transform: uppercase;
  }
`;

export default Product;
