import styled, { keyframes } from 'styled-components';
import { setupBorder } from './utils';

const spinner = keyframes`
to{
    transform: rotate(360deg);
}
`;

const Loading = styled.div`
  margin: 1rem auto;
  width: 6rem;
  height: 6rem;
  border: ${setupBorder({ width: '6px', color: 'grey' })};
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: ${spinner} 1s linear infinite;
`;
export default Loading;
