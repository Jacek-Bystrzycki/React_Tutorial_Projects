import { ReactElement } from 'react';
import styled from 'styled-components';

type ComponentProps = {
  title: string;
};

const ComplexTitle = ({ title }: ComponentProps): ReactElement => {
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
    background: #645cff;
    margin: 0 auto;
  }
  .box {
    height: 10px;
    border: var(--mainBorder);
  }
`;

export default ComplexTitle;
