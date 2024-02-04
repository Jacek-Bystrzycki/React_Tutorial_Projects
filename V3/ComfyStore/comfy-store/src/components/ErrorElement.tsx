import { ReactElement } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = (): ReactElement => {
  const error = useRouteError();
  if (error instanceof Error) {
    return <h4 className="font-bold text-4xl">{error.message}</h4>;
  } else return <h4 className="font-bold text-4xl">There was an error...</h4>;
};
export default ErrorElement;
