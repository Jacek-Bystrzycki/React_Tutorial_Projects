import { ReactElement } from 'react';
import { CustomCompProps } from '../../App';
import { useAppDispatch, useAppSelector } from '../../store';
import type { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

interface RadioProps extends CustomCompProps {
  reducer: ActionCreatorWithoutPayload;
}

const Radio = ({ reducer }: RadioProps): ReactElement => {
  const dispatch = useAppDispatch();
  const checked: boolean = useAppSelector((state) => state.filter.shipping);

  const handleChange = () => {
    dispatch(reducer());
  };

  return (
    <>
      <div className="form-control items-center">
        <div className="font-bold capitalize">free shipping</div>
        <label className="label cursor-pointer">
          <input onChange={handleChange} type="checkbox" className="radio checked:radio-primary radio-primary" checked={checked} />
        </label>
      </div>
    </>
  );
};
export default Radio;
