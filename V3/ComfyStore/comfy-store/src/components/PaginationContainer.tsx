import { ReactElement, MouseEvent } from 'react';
import { useLoaderDataHook } from '../utils/useLoaderDataHook';
import { APIResponse } from '../types/API';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

const PaginationContainer = (): ReactElement => {
  const { page, pageCount, pageSize, total } = useLoaderDataHook<APIResponse>().meta.pagination;

  const begin = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = page * pageSize < total ? page * pageSize : total;

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const hadnleClick = (ev: MouseEvent<HTMLButtonElement>): void => {
    const page: string = ev.currentTarget.getAttribute('data-page')!;
    searchParams.set('page', page);
    navigate(`${pathname}?${searchParams}`);
  };

  return (
    <div className="flex justify-between mt-8 w-full border-t-2 pt-4 border-base-300 items-end">
      <div>
        <span className="text-lg ml-6">
          Showing <strong>{begin}</strong> to <strong>{end}</strong> of
          <strong> {total}</strong> results
        </span>
      </div>
      <div className="join mr-6">
        {Array.from({ length: pageCount }).map((_, index) => {
          return (
            <button data-page={index + 1} onClick={hadnleClick} key={index} className={`join-item btn btn-md ${page === index + 1 && 'btn-active'}`}>
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PaginationContainer;
