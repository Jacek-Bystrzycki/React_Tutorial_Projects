import { CartIcon } from '../icons';
import { useSelector, useDispatch } from 'react-redux';
import { countTotals } from '../features/cart/cartSlice';
import { useEffect, memo } from 'react';

const Navbar = () => {
  const { amount } = useSelector((store) => {
    return store.cart;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countTotals());
  });
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
