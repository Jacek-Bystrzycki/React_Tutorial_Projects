import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../features/modal/modalSLice';
import { memo } from 'react';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart"> is currently empty</h4>
        </header>
      </section>
    );

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(showModal())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default memo(CartContainer);
