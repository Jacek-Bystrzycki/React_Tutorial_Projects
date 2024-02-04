import { ChangeEvent, ReactElement } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { CustomCompProps } from '../App';
import { CartType } from '../features/cartSlice';
import { useAppDispatch } from '../store';
import { addOneToCart, subOneFromCart, updateCart, removeFromCart } from '../features/cartSlice';

interface CartListProps extends CustomCompProps {
  cart: CartType;
}

const CartList = ({ cart }: CartListProps): ReactElement => {
  const { title, company, price, total, color, count, image } = cart;
  const dispatch = useAppDispatch();

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(updateCart({ ...cart, count: parseInt(ev.target.value, 10) }));
  };

  return (
    <article className="mb-12 flex flex-col sm:flex-row flex-wrap pb-6 border-b border-base-300 last:border-b-0">
      <img src={image} className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-lg" />
      <div className="sm:ml-16 w-32">
        <h3 className="font-bold capitalize">{title}</h3>
        <h4>{company}</h4>
        <h5>${price / 100}</h5>
        <div className="flex items-center gap-x-2 mt-4">
          <p className="text-sm capitalize">color:</p>
          <div className="badge badge-sm" style={{ backgroundColor: `${color}` }}></div>
        </div>
      </div>

      <div className="sm:ml-12 flex flex-col items-start sm:items-center gap-y-4">
        <h3 className="text-sm capitalize">amount</h3>
        <div className="flex justify-start gap-4">
          <button onClick={() => dispatch(subOneFromCart(cart))} disabled={count < 2}>
            <FiMinusCircle />
          </button>
          <select onChange={handleChange} value={count} className="select select-bordered select-xs w-16">
            {Array.from({ length: count + 5 }).map((_, index) => {
              return <option key={index}>{index + 1}</option>;
            })}
          </select>
          <button onClick={() => dispatch(addOneToCart(cart))}>
            <FiPlusCircle />
          </button>
        </div>
        <button onClick={() => dispatch(removeFromCart(cart))} className="link link-primary link-hover ">
          remove
        </button>
      </div>

      <div className="sm:ml-auto font-bold">
        <h3>${total / 100}</h3>
      </div>
    </article>
  );
};
export default CartList;
