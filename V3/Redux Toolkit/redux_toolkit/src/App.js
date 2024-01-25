import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCartItems } from './features/cart/cartSlice';

function App() {
  const { show: showModal } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <main>
      <Navbar />
      <CartContainer />
      {showModal && <Modal />}
    </main>
  );
}
export default App;
