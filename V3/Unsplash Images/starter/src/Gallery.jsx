import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Gallery = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await axios.get('url_here');
      return response;
    },
    meta: {
      errorMessage: 'Axios error',
    },
  });

  const pending = isPending && <h4>Loading...</h4>;
  const error = isError && <h4>Error...</h4>;
  const content = pending || error || data;

  return <section className="image-container">{content}</section>;
};
