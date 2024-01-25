import { ChevronUp, ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cart/cartSlice';
import { memo } from 'react';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increment(id));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(decrement(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default memo(CartItem);
