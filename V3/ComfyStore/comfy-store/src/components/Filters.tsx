import { FormEvent, ReactElement } from 'react';
import { Form, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { FormInput, Select, SubmitButton, PriceSlider, Radio, ResetButton } from '.';
import { useLoaderDataHook } from '../utils/useLoaderDataHook';
import { APIResponse, Categories, Companies, SortBy } from '../types/API';
import { SelectOption } from './Form/Select';
import { setSearch, setFree, setPrice, setSortBy, setCategory, setCompany, resetForm } from '../features/filterSlice';
import { useAppSelector } from '../store';

const Filters = (): ReactElement => {
  const { meta } = useLoaderDataHook<APIResponse>();
  const store = useAppSelector((state) => state.filter);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const categoriesAPI: Categories = meta.categories;
  const companiesAPI: Companies = meta.companies;
  const sortByAPI: SortBy = ['a-z', 'z-a'];

  const categories: SelectOption[] = categoriesAPI.map((category) => {
    return { optionValue: category };
  });
  const companies: SelectOption[] = companiesAPI.map((company) => {
    return { optionValue: company };
  });
  const sortBys: SelectOption[] = sortByAPI.map((sort) => {
    return { optionValue: sort };
  });

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    for (const param in store) {
      searchParams.set(param, store[param as keyof typeof store].toString());
    }
    searchParams.set('page', '1');
    navigate(`${pathname}?${searchParams}`);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-end bg-base-200 rounded-lg px-8 py-4"
    >
      <FormInput size="input-xs" type="search" name="Search" label="search product" labelStyleOptions="font-bold capitalize" reducer={setSearch} />
      <Select value={store.category} reducer={setCategory} size="select-xs" options={categories} label="select category" />
      <Select value={store.company} reducer={setCompany} size="select-xs" options={companies} label="select company" />
      <Select value={store.order} reducer={setSortBy} size="select-xs" options={sortBys} label="sort by" />
      <PriceSlider reducer={setPrice} />
      <Radio reducer={setFree} />
      <div className="self-center">
        <SubmitButton text="search" size="btn-xs" />
      </div>
      <div className="self-center">
        <ResetButton reducer={resetForm} text="reset" type="reset" size="btn-xs" color="btn-error" />
      </div>
    </Form>
  );
};

export default Filters;
