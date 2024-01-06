import { ReactElement } from 'react';
import styled from 'styled-components';

const Cart = (): ReactElement => {
  return (
    <StyledCart>
      <img src="https://images.samsung.com/is/image/samsung/ph-hd-t4300-ua32t4300agxxp-frontblack-224825896?$360_288_PNG$" alt="product" />
      <footer>
        <h4>product name</h4>
        <p>$299</p>
      </footer>
    </StyledCart>
  );
};

const StyledCart = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  img {
    width: 100%;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    h4 {
      text-transform: capitalize;
      color: red;
      &::before {
        content: 'Name: ';
        color: 'red';
      }
    }
    h4:hover {
      color: green;
    }
    p {
      color: var(--primary-color);
    }
    &:hover {
      background: #eeebeb;
    }
  }

  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 1px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 880px) {
    max-width: 800px;
    footer {
      padding: 0 10rem;
    }
  }
`;

export default Cart;
