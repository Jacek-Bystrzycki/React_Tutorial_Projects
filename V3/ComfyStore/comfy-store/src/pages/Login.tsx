import { ReactElement } from 'react';
import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitButton } from '../components';
import { UserRoutes } from '../types';

const Login = (): ReactElement => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput {...{ label: 'e-mail', name: 'identifier', type: 'email', defaultValue: 'test@test.com' }} />
        <FormInput {...{ label: 'password', name: 'password', type: 'password', defaultValue: 'secret' }} />
        <div className="mt-4">
          <SubmitButton text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{' '}
          <Link to={UserRoutes.register} className="ml-2 link link-primary link-hover capitalize">
            register
          </Link>
        </p>
        <p className="text-center">
          <Link to={UserRoutes.root} className="link link-hover link-secondary capitalize">
            go back home
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
