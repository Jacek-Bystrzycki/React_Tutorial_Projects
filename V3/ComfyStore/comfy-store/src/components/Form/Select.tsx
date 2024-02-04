import { ChangeEvent, ReactElement } from 'react';
import { CustomCompProps } from '../../App';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../store';

export type SelectOption = {
  optionValue: string;
  disabled?: boolean;
  selected?: boolean;
};

interface SelectProps extends CustomCompProps {
  size?: string;
  value: string;
  options: SelectOption[];
  label?: string;
  reducer: ActionCreatorWithPayload<string>;
}

const Select = ({ size = 'select-md', options, label, value, reducer }: SelectProps): ReactElement => {
  const dispatch = useAppDispatch();

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    dispatch(reducer(ev.target.value));
  };
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">{label && <span className="label-text font-bold capitalize">{label}</span>}</div>
      <select value={value} onChange={handleChange} className={`select select-bordered  ${size} w-full max-w-xs`}>
        {options.map((option, index) => {
          return (
            <option key={index} className="font-bold">
              {option.optionValue}
            </option>
          );
        })}
      </select>
    </label>
  );
};
export default Select;
