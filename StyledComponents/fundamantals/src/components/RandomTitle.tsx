import { ReactElement } from 'react';
import styled from 'styled-components';

type ComponentProps = {
  title: string;
};

const RandomTitle = ({ title }: ComponentProps): ReactElement => {
  return (
    <Wrapper className="bg-grey">
      <h1 className="title">{title}</h1>
      <div className="underline"></div>
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
    background: var(--primary-color);
    margin: 0 auto;
  }
`;

export default RandomTitle;
