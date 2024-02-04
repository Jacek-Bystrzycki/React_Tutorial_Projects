import { useLoaderData } from 'react-router-dom';

interface UseLoaderDataHook {
  <T>(): T;
}

export const useLoaderDataHook: UseLoaderDataHook = () => {
  const useLoaderDataRef = useLoaderData as UseLoaderDataHook;
  return useLoaderDataRef();
};
