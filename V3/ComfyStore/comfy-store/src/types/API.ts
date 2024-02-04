type Attributes = {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
};

export type Product = {
  id: string;
  attributes: Attributes;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Categories = string[];
export type Companies = string[];

type Meta = {
  pagination: Pagination;
  categories: Categories;
  companies: Companies;
};

export type APIResponse = {
  data: Product[];
  meta: Meta;
};

export const isAPIResponse = (resp: unknown): resp is APIResponse => {
  if (resp !== null && typeof resp === 'object') {
    return 'data' in resp && 'meta' in resp;
  }
  return false;
};
export const isProduct = (resp: unknown): resp is Product => {
  if (resp !== null && typeof resp === 'object') {
    return 'id' in resp && 'attributes' in resp;
  }
  return false;
};

export type SortBy = ['a-z', 'z-a'];
export type SetSortBy = SortBy[0] | SortBy[1];

export const isSetSortBy = (data: unknown): data is SetSortBy => {
  if (typeof data === 'string') {
    return data === 'a-z' || data === 'z-a';
  } else return false;
};
