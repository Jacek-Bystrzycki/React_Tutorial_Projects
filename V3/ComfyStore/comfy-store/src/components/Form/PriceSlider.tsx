import { ChangeEvent, ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { CustomCompProps } from '../../App';
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { formtPrice } from '../../utils/formatPrice';

interface PriceSliderProps extends CustomCompProps {
  reducer: ActionCreatorWithPayload<string>;
}

const PriceSlider = ({ reducer }: PriceSliderProps): ReactElement => {
  const price: string = useAppSelector((store) => store.filter.price);
  const dispatch = useAppDispatch();

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(reducer(ev.target.value));
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text font-bold">Select Price</span>
        <span className="label-text-alt tracking-wider font-bold text-lg">{formtPrice(price)}</span>
      </div>
      <input onChange={handleChange} type="range" min={0} max={100000} value={price} className="range range-xs range-primary " />
      <div className="label">
        <span className="label-text-alt tracking-wider font-bold">$0</span>
        <span className="label-text-alt tracking-wider font-bold">Max: $1,000.00</span>
      </div>
    </label>
  );
};
export default PriceSlider;
