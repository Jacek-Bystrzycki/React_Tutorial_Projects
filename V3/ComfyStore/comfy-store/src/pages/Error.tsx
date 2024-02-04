import { ReactElement } from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { CustomCompProps } from '../App';

const ErrorMessage = ({ children }: CustomCompProps): ReactElement => {
  return <main className="grid min-h-[100vh] place-items-center px-8">{children}</main>;
};

const Error = (): ReactElement => {
  const error = useRouteError();

  const errorMessage: ReactElement = (
    <>
      {isRouteErrorResponse(error) ? (
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">{error.status}</p>
          <h1 className="mt-4 text-3xl font-bold trackng-tight sm:text-5xl">{error.statusText}</h1>
          <p className="mt-6 text-lg leading-7">{error.data}</p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary uppercase">
              go back home
            </Link>
          </div>
        </div>
      ) : (
        <h4 className="text-center font-bold text-4xl">there was an unexpected error...</h4>
      )}
    </>
  );

  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};
export default Error;
