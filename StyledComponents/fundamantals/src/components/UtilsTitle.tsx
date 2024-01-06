import { ReactElement } from 'react';
import styled from 'styled-components';
import { colors, setupBorder } from './utils';

type ComponentProps = {
  title: string;
};

const UtilsTitle = ({ title }: ComponentProps): ReactElement => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }
  .box {
    height: 10px;
    border: ${setupBorder({ width: '5px' })};
  }
`;

export default UtilsTitle;
