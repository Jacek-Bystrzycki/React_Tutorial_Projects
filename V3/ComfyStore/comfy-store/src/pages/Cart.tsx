import { ReactElement } from 'react';
import { Totals, CartList } from '../components';
import { useAppSelector } from '../store';

const Cart = (): ReactElement => {
  const { cards, totalPrice, totalCount } = useAppSelector((store) => store.cart);

  return (
    <section>
      <div className="border-stone-950 border-b pb-6">
        <h1 className="font-semibold tracking-wider text-3xl capitalize">shopping cart</h1>
      </div>
      <div className="lg:grid grid-cols-12 gap-8 pt-8 ">
        <div className="lg:col-span-8">
          {cards.map((cart) => (
            <CartList key={cart.id} cart={cart} />
          ))}
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <Totals />
          <button className="btn btn-primary btn-block uppercase mt-8">please login</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;
