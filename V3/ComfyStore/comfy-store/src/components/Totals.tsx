import { ReactElement } from 'react';
import { useAppSelector } from '../store';
import { formtPrice } from '../utils/formatPrice';

const Totals = (): ReactElement => {
  const { subTotal, tax, shipping, total } = useAppSelector((store) => store.cart.totals);

  return (
    <div className="bg-base-300 p-8 rounded-box">
      <div className="flex justify-between w-11/12 mx-auto pt-2 pb-1 border-b-2 border-stone-950 text-sm tracking-widest leading-3">
        <span>Subtotal</span>
        <span>${formtPrice(JSON.stringify(subTotal))}</span>
      </div>
      <div className="flex justify-between w-11/12 mx-auto pt-2 pb-1 border-b-2 border-stone-950 text-sm  tracking-widest leading-3">
        <span>Shipping</span>
        <span>${formtPrice(JSON.stringify(shipping))}</span>
      </div>
      <div className="flex justify-between w-11/12 mx-auto pt-2 pb-1 border-b-2 border-stone-950 text-sm  tracking-widest leading-3">
        <span>Tax</span>
        <span>${formtPrice(JSON.stringify(tax))}</span>
      </div>
      <div className="flex justify-between w-11/12 mx-auto py-2 text-lg tracking-widest">
        <span>Order Total</span>
        <span>${formtPrice(JSON.stringify(total))}</span>
      </div>
    </div>
  );
};
export default Totals;
