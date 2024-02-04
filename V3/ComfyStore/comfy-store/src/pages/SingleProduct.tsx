import { ReactElement, MouseEvent, useState, ChangeEvent } from 'react';
import { Product } from '../types/API';
import { customFetch } from '../utils/axios';
import { AxiosResponse } from 'axios';
import { Params, useNavigate } from 'react-router-dom';
import { useLoaderDataHook } from '../utils/useLoaderDataHook';
import { isProduct } from '../types/API';
import { Link } from 'react-router-dom';
import { formtPrice } from '../utils/formatPrice';
import { UserRoutes } from '../types';
import { CartType } from '../features/cartSlice';
import { useAppDispatch } from '../store';
import { addToCart } from '../features/cartSlice';

const url: string = '/products/';

export const loader = async ({ params }: { params: Params<'id'> }): Promise<Product> => {
  const { data }: AxiosResponse = await customFetch(`${url}${params.id}`);
  if (isProduct(data.data)) return data.data;
  else throw new Error('Wrong data from API...');
};

const SingleProduct = (): ReactElement => {
  const { attributes, id } = useLoaderDataHook<Product>();
  const { title, price, colors, description, category, company, image, shipping } = attributes;
  const dollarPrice = formtPrice(price);
  const [selectedColor, setSelectColor] = useState<string>(colors[0]);
  const [amount, setAmount] = useState<number>(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const colorandling = (ev: MouseEvent<HTMLButtonElement>): void => {
    const dataColor: string | null = ev.currentTarget.getAttribute('data-color');
    if (dataColor) setSelectColor(dataColor);
  };

  const amountHandle = (ev: ChangeEvent<HTMLSelectElement>): void => {
    setAmount(parseInt(ev.target.value, 10));
  };

  const handleClick = (): void => {
    const newCart: CartType = {
      id: parseInt(id, 10),
      title,
      company,
      description,
      category,
      image,
      price: parseInt(price, 10),
      color: selectedColor,
      count: amount,
      total: parseInt(price, 10) * amount,
      freeShipping: shipping,
    };

    dispatch(addToCart(newCart));
    navigate(UserRoutes.cart);
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={UserRoutes.root}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              &nbsp;Home
            </Link>
          </li>
          <li>
            <Link to={UserRoutes.products}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              &nbsp;Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div>
          <img src={image} alt={title} className="w-96 h-96 object-cover rounded-lg lg:w-full" />
          <div className="text-right text-lg mt-2 pr-8">${(amount * parseInt(price, 10)) / 100}</div>
        </div>
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">{company}</h4>
          <p className="mt-6 text-xl">{dollarPrice}</p>
          <p className="mt-3 leading-8">{description}</p>
          <div className="mt-4">
            <h4 className="font-medium text-md tracking-wider">Colors:</h4>
            <div className="flex gap-3">
              {colors.map((color) => {
                return (
                  <button
                    onClick={colorandling}
                    data-color={color}
                    key={color}
                    className={`w-5 h-5 mt-2 ml-2 rounded-full border-slate-950 ${selectedColor === color && 'ring ring-secondary'}`}
                    style={{ backgroundColor: color }}
                  ></button>
                );
              })}
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="amount" className="label">
                <h4 className="text-md font-medium capitalize tracking-wider">amount:</h4>
              </label>
              <select value={amount} onChange={amountHandle} className="select select-secondary select-bordered select-md">
                {Array.from({ length: 20 }).map((_, index) => {
                  return (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            <button onClick={handleClick} className="btn btn-primary capitalize mt-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
