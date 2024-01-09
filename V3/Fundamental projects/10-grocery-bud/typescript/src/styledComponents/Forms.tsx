import { ReactElement, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { BasicButton } from './Buttons';
import { setupBorder } from './Utils';

type BasicInputType = {
  type?: 'text' | 'number' | 'checkbox' | 'radio' | 'email' | 'password' | 'date';
  value?: string;
  name?: string;
};

export const BasicInput = styled.input.attrs<BasicInputType>(({ type = 'text', value, name = 'name' }) => {
  return { type, value, name };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: ${setupBorder({ width: 2, color: '#f2f4f8' })};
  border-radius: 0.25rem;
  width: 80%;
  margin-left: 0;
  margin-top: 3rem;
  padding: 10px;
`;

type PropsType = {
  onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: 'text' | 'number';
  children?: ReactElement | ReactElement[];
};

const Form = ({ onSubmit, onChange, value, type, children }: PropsType): ReactElement => {
  return (
    <form onSubmit={onSubmit}>
      <BasicInput type={type} value={value} name="formInput" onChange={onChange} />
      <BasicButton type="submit" $padding={10}>
        {children}
      </BasicButton>
    </form>
  );
};

export const BasicForm = styled(Form)``;
