import styled from 'styled-components';

interface TitleProps {
  special?: boolean;
}

const BasicTitle = styled('h1')<TitleProps>`
  text-align: center;
  text-transform: capitalize;
  color: ${({ special }) => (special ? 'red' : 'blue')};
`;
export default BasicTitle;

export const SecondTitle = styled.h2<TitleProps>`
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme: { color }, special }) => (special ? color : 'pink')};
  background: ${(props) => props.theme.background};
`;
