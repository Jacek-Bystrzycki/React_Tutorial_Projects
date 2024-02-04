import { ChangeEvent, ReactElement } from 'react';
import { CustomCompProps } from '../../App';
import { InputType } from '../../types';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../store';

interface InputFormProps extends CustomCompProps {
  label?: string;
  name: string;
  type: Extract<InputType, 'email' | 'password' | 'text' | 'search'>;
  defaultValue?: string;
  size?: string;
  labelStyleOptions?: string;
  reducer: ActionCreatorWithPayload<string>;
}

const FormInput = ({ label, name, type, defaultValue, size, labelStyleOptions, reducer }: InputFormProps): ReactElement => {
  const dispatch = useAppDispatch();

  const handleChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    dispatch(reducer(ev.target.value));
  };

  return (
    <label className="form-control">
      <div className="label">
        <span className={`label-text ${labelStyleOptions}`}>{label}</span>
      </div>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={type !== 'search' ? 'Type here' : 'Search here'}
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
      />
    </label>
  );
};
export default FormInput;
