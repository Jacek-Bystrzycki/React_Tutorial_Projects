import { hideModal } from '../features/modal/modalSLice';
import { useDispatch } from 'react-redux';
import { clearItems } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const confirmHandle = () => {
    dispatch(clearItems());
    dispatch(hideModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from the shoping card?</h4>
        <div className="btn-container">
          <button onClick={confirmHandle} type="button" className="btn confirm-btn">
            confirm
          </button>
          <button onClick={() => dispatch(hideModal())} type="button" className="btn clear-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
