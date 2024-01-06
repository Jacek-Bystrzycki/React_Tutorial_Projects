import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { setupBorder } from './utils';

const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  background: var(--primary-color);
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  border: transparent;
  ${({ type }) => {
    switch (type) {
      case 'submit':
        return css`
          display: block;
          width: 100%;
          margin-top: 1rem;
          border-radius: 0.25rem;
        `;
    }
  }}
`;

const BasicInput = styled.input.attrs((props) => {
  return { type: props.type || 'text', placeholder: props.placeholder || 'Please enter value here' };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: ${setupBorder({ width: '2px', color: '#f2f4f8' })};
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Form = (): ReactElement => {
  return (
    <div>
      <h2>attr method</h2>
      <Button>click me</Button>
      <form style={{ padding: '2rem', background: 'grey', width: '300px', marginTop: '1rem' }}>
        <h2>form</h2>
        <BasicInput />
        <BasicInput placeholder="Differen placeholder" />
        <BasicInput placeholder="number input type" type="number" />
        <BasicInput />
        <Button type="submit"> submit here</Button>
      </form>
    </div>
  );
};
export default Form;
