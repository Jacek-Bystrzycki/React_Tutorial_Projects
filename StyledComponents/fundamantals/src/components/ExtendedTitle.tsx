import { ReactElement } from 'react';
import styled from 'styled-components';

type ComponentProps = {
  title: string;
  className?: string;
};

const ExtendedTitle = ({ title, className }: ComponentProps): ReactElement => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  );
};

const Wrapper = styled(ExtendedTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: red;
    margin: 0 auto;
  }
`;

export default Wrapper;
