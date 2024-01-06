import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

const fruits: string[] = ['orange', 'apple', 'banana', 'peach'];

type LiProps = {
  odd: boolean;
};
const Item = styled.li<LiProps>`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `;
  }}
`;

const List = (): ReactElement => {
  return (
    <ul>
      {fruits.map((item, index) => {
        return (
          <Item key={index} odd={(index + 1) % 2 !== 0}>
            {item}
          </Item>
        );
      })}
    </ul>
  );
};
export default List;
